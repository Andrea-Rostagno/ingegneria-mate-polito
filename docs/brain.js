(() => {
"use strict";
const B = window.BRAIN;
const NOTES_URL = "https://github.com/Andrea-Rostagno/ingegneria-mate-polito/blob/main/Competenze/";
const N = B.nodes, C = B.courses, NN = N.length;
const AREA = {probabilita:"Probabilità", statistica:"Statistica", analisi:"Analisi", "algebra-geometria":"Algebra e geometria",
  numerica:"Metodi numerici", ottimizzazione:"Ottimizzazione", finanza:"Finanza", "data-ml":"Data science e machine learning",
  informatica:"Informatica", fisica:"Fisica", network:"Network e grafi"};
const adj = Array.from({length:NN}, () => []);
for (let i = 0; i < B.edges.length; i += 2) { const a = B.edges[i], b = B.edges[i+1]; adj[a].push(b); adj[b].push(a); }
const byName = new Map(N.map((d, i) => [d.n, i]));
const fold = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const folded = N.map(d => fold(d.n));
const courseIdx = new Map(C.map((c, i) => [c.name, i]));

// ---------- state ----------
const cv = document.getElementById("cv"), ctx = cv.getContext("2d");
let W = 0, H = 0, DPR = 1;
let view = null;            // {key, nodes:Int32Array, inView:Uint8Array, edges:[], deg, colour[], course}
let pos = new Float32Array(NN * 2), from = new Float32Array(NN * 2), target = new Float32Array(NN * 2);
let alpha = new Float32Array(NN), alphaFrom = new Float32Array(NN), alphaTo = new Float32Array(NN);
let anim = 1, animStart = 0;
let cam = {x:0, y:0, k:1}, camTo = null;
let hover = -1, sel = -1, level = "tutto";
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

function hexA(hex, a) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`;
}

function buildView(key) {
  const L = B.layouts[key];
  const inView = new Uint8Array(NN);
  for (const i of L.n) inView[i] = 1;
  const course = key.startsWith("c:") ? courseIdx.get(key.slice(2)) : -1;
  const order = key === "triennale" ? C.map((c, i) => c.level === "triennale" ? i : -1).filter(i => i >= 0)
              : key === "magistrale" ? C.map((c, i) => c.level === "magistrale" ? i : -1).filter(i => i >= 0)
              : C.map((c, i) => i);
  const colour = new Array(NN);
  for (const i of L.n) {
    let ci = course >= 0 ? course : N[i].c.find(x => order.includes(x));
    if (ci === undefined) ci = N[i].c[0];
    colour[i] = C[ci].color;
  }
  const edges = [];
  const deg = new Uint16Array(NN);
  for (let e = 0; e < B.edges.length; e += 2) {
    const a = B.edges[e], b = B.edges[e+1];
    if (inView[a] && inView[b]) { edges.push(a, b); deg[a]++; deg[b]++; }
  }
  const p = new Map(); L.n.forEach((i, j) => p.set(i, [L.p[2*j], L.p[2*j+1]]));
  return {key, nodes: L.n, inView, edges, deg, colour, course, p};
}

function radius(i) {
  const d = view.deg[i];
  return view.course >= 0 ? 4 + Math.sqrt(d) * 1.6 : 1.6 + Math.sqrt(d) * 0.85;
}

function setView(key, opts = {}) {
  const next = buildView(key);
  from.set(pos); alphaFrom.set(alpha);
  alphaTo.fill(0);
  for (const i of next.nodes) {
    const [x, y] = next.p.get(i);
    target[2*i] = x; target[2*i+1] = y; alphaTo[i] = 1;
    if (!view || !view.inView[i] || alpha[i] < 0.05) { from[2*i] = x * 0.92; from[2*i+1] = y * 0.92; }
  }
  for (let i = 0; i < NN; i++) if (!next.inView[i]) { target[2*i] = from[2*i]; target[2*i+1] = from[2*i+1]; }
  view = next; const still = reduce || opts.instant; anim = still ? 1 : 0; animStart = performance.now();
  if (still) { pos.set(target); alpha.set(alphaTo); }
  hover = -1;
  if (sel >= 0 && !view.inView[sel]) select(-1, false);
  fit(!opts.instant);
  renderChrome();
  writeHash();
  draw();
}

// ---------- camera ----------
function scaleBase() { return Math.min(W, H) * (view && view.course >= 0 ? 0.40 : 0.46); }
function toScreen(i) {
  const s = scaleBase() * cam.k;
  return [W / 2 + (pos[2*i] - cam.x) * s, H / 2 + (pos[2*i+1] - cam.y) * s];
}
function toWorld(x, y) { const s = scaleBase() * cam.k; return [(x - W / 2) / s + cam.x, (y - H / 2) / s + cam.y]; }
function fit(smooth) {
  let x0 = 1e9, x1 = -1e9, y0 = 1e9, y1 = -1e9;
  for (const i of view.nodes) {
    const x = target[2*i], y = target[2*i+1];
    x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y);
  }
  const padTop = 90, padSide = view.course >= 0 ? 150 : 40;
  const detailW = document.getElementById("detail").classList.contains("open") && W > 820 ? 392 : 0;
  const availW = W - 2 * padSide - detailW, availH = H - padTop - 40;
  const s = Math.min(availW / Math.max(.05, x1 - x0), availH / Math.max(.05, y1 - y0));
  const k = s / scaleBase();
  const c = {x: (x0 + x1) / 2 + detailW / 2 / s, y: (y0 + y1) / 2 - (padTop - 40) / 2 / s, k};
  if (smooth && !reduce) camTo = c; else { cam = c; camTo = null; }
}
function focusOn(i) {
  const k = Math.max(cam.k, view.course >= 0 ? 1.2 : 3.2);
  const s = scaleBase() * k;
  const detailW = W > 820 ? 392 : 0;
  camTo = {x: target[2*i] + detailW / 2 / s, y: target[2*i+1] + (W <= 820 ? H * 0.22 / s : 0), k};
  if (reduce) { cam = camTo; camTo = null; }
}

// ---------- drawing ----------
function resize() {
  DPR = Math.min(2, window.devicePixelRatio || 1);
  const r = cv.getBoundingClientRect(); W = r.width; H = r.height;
  cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
  ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  if (view) { fit(false); draw(); }
}
let raf = 0;
function draw() { if (!raf) raf = requestAnimationFrame(frame); }
function ease(t) { return 1 - Math.pow(1 - t, 3); }
function frame(now) {
  raf = 0;
  let busy = false;
  if (anim < 1) {
    anim = Math.min(1, (now - animStart) / 700);
    const e = ease(anim);
    for (let i = 0; i < NN; i++) {
      pos[2*i] = from[2*i] + (target[2*i] - from[2*i]) * e;
      pos[2*i+1] = from[2*i+1] + (target[2*i+1] - from[2*i+1]) * e;
      alpha[i] = alphaFrom[i] + (alphaTo[i] - alphaFrom[i]) * e;
    }
    busy = true;
  }
  if (camTo) {
    const f = 0.16;
    cam.x += (camTo.x - cam.x) * f; cam.y += (camTo.y - cam.y) * f; cam.k *= Math.pow(camTo.k / cam.k, f);
    if (Math.abs(camTo.k / cam.k - 1) < 0.002 && Math.hypot(camTo.x - cam.x, camTo.y - cam.y) * scaleBase() * cam.k < 0.5) { cam = camTo; camTo = null; }
    busy = true;
  }
  render();
  if (busy) draw();
}

function render() {
  ctx.clearRect(0, 0, W, H);
  if (!view) return;
  const focus = sel >= 0 ? sel : hover;
  const nb = new Set();
  if (focus >= 0) { nb.add(focus); for (const j of adj[focus]) if (view.inView[j]) nb.add(j); }
  const isCourse = view.course >= 0;
  const k = cam.k;
  const s = scaleBase() * k;
  const P = i => [W / 2 + (pos[2*i] - cam.x) * s, H / 2 + (pos[2*i+1] - cam.y) * s];

  // edges
  const E = view.edges;
  ctx.lineWidth = isCourse ? 1 : Math.min(1, 0.5 + k * 0.12);
  ctx.strokeStyle = focus >= 0 ? "rgba(20,24,30,.05)" : (isCourse ? "rgba(20,24,30,.20)" : "rgba(20,24,30,.085)");
  ctx.beginPath();
  for (let e = 0; e < E.length; e += 2) {
    const a = E[e], b = E[e+1];
    if (focus >= 0 && (a === focus || b === focus)) continue;
    const [x1, y1] = P(a), [x2, y2] = P(b);
    ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
  }
  ctx.stroke();
  if (focus >= 0) {
    ctx.lineWidth = 1.6; ctx.strokeStyle = hexA(view.colour[focus], 0.85);
    ctx.beginPath();
    for (const j of adj[focus]) if (view.inView[j]) { const [x1, y1] = P(focus), [x2, y2] = P(j); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); }
    ctx.stroke();
  }
  // nodes (also fading-out ones from the previous view)
  const rk = isCourse ? 1 : Math.min(2.2, Math.max(1, Math.sqrt(k)));
  for (let i = 0; i < NN; i++) {
    const a = alpha[i]; if (a < 0.02) continue;
    if (!view.inView[i] && anim >= 1) continue;
    const [x, y] = P(i);
    if (x < -20 || y < -20 || x > W + 20 || y > H + 20) continue;
    const r = (view.inView[i] ? radius(i) : 2) * rk;
    const dim = focus >= 0 && !nb.has(i);
    ctx.globalAlpha = a * (dim ? 0.16 : 1);
    ctx.fillStyle = view.colour[i] || "#9aa0a6";
    ctx.beginPath(); ctx.arc(x, y, r, 0, 6.283); ctx.fill();
    if (isCourse && view.inView[i] && N[i].c.length > 1) {
      ctx.lineWidth = 1.5; ctx.strokeStyle = "#0a0a0a"; ctx.beginPath(); ctx.arc(x, y, r + 2.5, 0, 6.283); ctx.stroke();
    }
    if (i === sel) { ctx.lineWidth = 2; ctx.strokeStyle = "#0a0a0a"; ctx.beginPath(); ctx.arc(x, y, r + 4, 0, 6.283); ctx.stroke(); }
  }
  ctx.globalAlpha = 1;
  // labels
  const labels = [];
  if (isCourse) { for (const i of view.nodes) labels.push(i); }
  else {
    const thr = k < 1.6 ? 1e9 : k < 2.6 ? 14 : k < 4 ? 8 : k < 7 ? 4 : 0;
    for (const i of view.nodes) if (view.deg[i] >= thr) labels.push(i);
  }
  for (const i of nb) if (!labels.includes(i)) labels.push(i);
  ctx.textBaseline = "middle";
  const placed = [];
  const order = labels.sort((a, b) => (b === focus) - (a === focus) || nb.has(b) - nb.has(a) || view.deg[b] - view.deg[a]);
  for (const i of order) {
    if (alpha[i] < 0.5) continue;
    const big = i === focus;
    const fs = big ? 15 : isCourse ? 12.5 : 12;
    ctx.font = `${big ? 700 : 500} ${fs}px Geist, Inter, system-ui, sans-serif`;
    const [x, y] = P(i); const r = radius(i) * rk;
    const w = ctx.measureText(N[i].n).width;
    const bx = x + r + 5, by = y;
    if (bx > W || bx + w < 0 || by < 0 || by > H) continue;
    const box = [bx - 3, by - fs * 0.7, bx + w + 3, by + fs * 0.7];
    if (!big && placed.some(p => p[0] < box[2] && box[0] < p[2] && p[1] < box[3] && box[1] < p[3])) continue;
    placed.push(box);
    const dim = focus >= 0 && !nb.has(i);
    ctx.globalAlpha = dim ? 0.25 : 1;
    ctx.fillStyle = "rgba(242,244,247,.86)";
    ctx.fillRect(box[0], box[1], box[2] - box[0], box[3] - box[1]);
    ctx.fillStyle = "#0a0a0a";
    ctx.fillText(N[i].n, bx, by);
  }
  ctx.globalAlpha = 1;
}

// ---------- hit test & input ----------
function pick(mx, my) {
  let best = -1, bd = 1e9;
  const rk = view.course >= 0 ? 1 : Math.min(2.2, Math.max(1, Math.sqrt(cam.k)));
  for (const i of view.nodes) {
    const [x, y] = toScreen(i);
    const d = Math.hypot(x - mx, y - my);
    const r = Math.max(7, radius(i) * rk + 3);
    if (d < r && d < bd) { bd = d; best = i; }
  }
  return best;
}
const pointers = new Map();
let dragMoved = false, pinchD = 0, last = null;
cv.addEventListener("pointerdown", e => {
  cv.setPointerCapture(e.pointerId);
  pointers.set(e.pointerId, [e.offsetX, e.offsetY]);
  dragMoved = false; last = [e.offsetX, e.offsetY]; camTo = null;
  if (pointers.size === 2) { const [a, b] = [...pointers.values()]; pinchD = Math.hypot(a[0] - b[0], a[1] - b[1]); }
});
cv.addEventListener("pointermove", e => {
  if (!pointers.has(e.pointerId)) {
    const h = pick(e.offsetX, e.offsetY);
    if (h !== hover) { hover = h; cv.classList.toggle("hover", h >= 0); draw(); }
    return;
  }
  pointers.set(e.pointerId, [e.offsetX, e.offsetY]);
  if (pointers.size === 2) {
    const [a, b] = [...pointers.values()];
    const d = Math.hypot(a[0] - b[0], a[1] - b[1]);
    if (pinchD) zoomAt((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, d / pinchD);
    pinchD = d; dragMoved = true; return;
  }
  const dx = e.offsetX - last[0], dy = e.offsetY - last[1];
  if (Math.abs(dx) + Math.abs(dy) > 2) dragMoved = true;
  if (dragMoved) {
    cv.classList.add("drag");
    const s = scaleBase() * cam.k; cam.x -= dx / s; cam.y -= dy / s; draw();
  }
  last = [e.offsetX, e.offsetY];
});
function endPointer(e) {
  const was = pointers.has(e.pointerId);
  pointers.delete(e.pointerId); pinchD = 0; cv.classList.remove("drag");
  if (was && !dragMoved && pointers.size === 0) {
    const i = pick(e.offsetX, e.offsetY);
    select(i, true);
  }
}
cv.addEventListener("pointerup", endPointer);
cv.addEventListener("pointercancel", e => { pointers.delete(e.pointerId); pinchD = 0; });
cv.addEventListener("pointerleave", () => { if (hover >= 0 && !pointers.size) { hover = -1; draw(); } });
function zoomAt(mx, my, f) {
  const [wx, wy] = toWorld(mx, my);
  cam.k = Math.min(40, Math.max(0.4, cam.k * f));
  const s = scaleBase() * cam.k;
  cam.x = wx - (mx - W / 2) / s; cam.y = wy - (my - H / 2) / s;
  draw();
}
cv.addEventListener("wheel", e => { e.preventDefault(); camTo = null; zoomAt(e.offsetX, e.offsetY, Math.exp(-e.deltaY * 0.0015)); }, {passive: false});
cv.addEventListener("dblclick", e => zoomAt(e.offsetX, e.offsetY, 2));
document.getElementById("zin").onclick = () => zoomAt(W / 2, H / 2, 1.5);
document.getElementById("zout").onclick = () => zoomAt(W / 2, H / 2, 1 / 1.5);
document.getElementById("fit").onclick = () => { fit(true); draw(); };
document.getElementById("back").onclick = () => setView(level);
new ResizeObserver(resize).observe(cv);
addEventListener("keydown", e => {
  if (e.key === "Escape") { if (sel >= 0) select(-1, true); else if (view.course >= 0) setView(level); }
  if (e.key === "/" && document.activeElement !== q) { e.preventDefault(); q.focus(); }
});

// ---------- selection & detail ----------
const detail = document.getElementById("detail"), dbody = document.getElementById("dbody");
function select(i, user) {
  sel = i;
  if (i < 0) { detail.classList.remove("open"); writeHash(); draw(); return; }
  if (!view.inView[i]) {
    // la competenza non è nella vista: apri il primo corso che la contiene
    const c = C[N[i].c[0]];
    sel = -1; setView("c:" + c.name); sel = i;
  }
  const d = N[i];
  document.getElementById("dname").textContent = d.n;
  document.getElementById("darea").textContent = (AREA[d.a] || d.a) + " · " + adj[i].length + " collegamenti";
  const list = (title, arr) => {
    const items = arr.length ? arr.map(j => `<li><button class="link" data-node="${j}"><span class="dot" style="background:${C[N[j].c[0]].color}"></span>${esc(N[j].n)}</button></li>`).join("")
      : `<li class="empty">Nessuna</li>`;
    return `<h3>${title}</h3><ul class="links">${items}</ul>`;
  };
  dbody.innerHTML =
    (d.s ? `<p class="summary">${esc(d.s)}</p>` : "") +
    `<h3>Insegnamenti</h3><div class="chips">${d.c.map(ci => `<button class="chip" data-course="${esc(C[ci].name)}"><span class="dot" style="background:${C[ci].color}"></span>${esc(C[ci].name)}</button>`).join("")}</div>` +
    list("Prerequisiti", d.pre) + list("Porta a", d.nx) + (d.co.length ? list("Collegati", d.co) : "") +
    `<a class="open-note" href="${NOTES_URL + encodeURIComponent(d.n) + ".md"}" target="_blank" rel="noopener">Apri la nota completa ↗</a>`;
  if (window.renderMathInElement) {
    try { renderMathInElement(dbody, {delimiters: [{left: "$$", right: "$$", display: false}, {left: "$", right: "$", display: false}], throwOnError: false}); } catch (_) {}
  }
  detail.classList.add("open");
  if (user) focusOn(i);
  writeHash(); draw();
}
function esc(s) { return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
dbody.addEventListener("click", e => {
  const n = e.target.closest("[data-node]"), c = e.target.closest("[data-course]");
  if (n) select(+n.dataset.node, true);
  if (c) { const keep = sel; setView("c:" + c.dataset.course); select(keep, true); }
});
document.getElementById("dclose").onclick = () => select(-1, true);

// ---------- sidebar ----------
const listEl = document.getElementById("list");
function renderList() {
  const groups = [["triennale", "Triennale"], ["magistrale", "Magistrale"]].filter(([l]) => level === "tutto" || level === l);
  listEl.innerHTML = groups.map(([l, t]) => `<h2>${t}</h2>` + C.filter(c => c.level === l).map(c =>
    `<button class="course" data-course="${esc(c.name)}"><span class="dot" style="background:${c.color}"></span>${esc(c.name)}<span class="n">${c.count}</span></button>`).join("")).join("");
}
listEl.addEventListener("click", e => {
  const b = e.target.closest("[data-course]"); if (!b) return;
  side.classList.remove("open");
  setView("c:" + b.dataset.course);
});
const side = document.getElementById("side");
document.getElementById("menu").onclick = () => side.classList.toggle("open");
document.querySelectorAll(".seg button").forEach(b => b.onclick = () => { level = b.dataset.level; renderList(); setView(level); });
function renderChrome() {
  document.querySelectorAll(".seg button").forEach(b => b.setAttribute("aria-pressed", b.dataset.level === level));
  const name = view.course >= 0 ? C[view.course].name : null;
  listEl.querySelectorAll(".course").forEach(b => b.setAttribute("aria-current", b.dataset.course === name));
  const t = document.getElementById("vtitle");
  t.innerHTML = name ? `<span class="dot" style="background:${C[view.course].color};width:12px;height:12px"></span>${esc(name)}`
    : ({tutto: "Tutto il percorso", triennale: "Triennale", magistrale: "Magistrale"})[view.key];
  const nCourses = name ? 0 : C.filter(c => view.key === "tutto" || c.level === view.key).length;
  const shared = name ? view.nodes.filter(i => N[i].c.length > 1).length : 0;
  document.getElementById("vmeta").textContent = name
    ? `${view.nodes.length} competenze · ${view.edges.length / 2} collegamenti · ${shared} condivise con altri corsi (anello nero)`
    : `${nCourses} insegnamenti · ${view.nodes.length} competenze · ${view.edges.length / 2} collegamenti`;
  document.getElementById("back").hidden = !name;
  document.title = (name || t.textContent) + " · Brain";
}

// ---------- search ----------
const q = document.getElementById("q"), results = document.getElementById("results");
let hits = [], hi = 0;
q.addEventListener("input", () => {
  const s = fold(q.value.trim());
  if (!s) { results.classList.remove("open"); return; }
  hits = [];
  for (let i = 0; i < NN; i++) { const p = folded[i].indexOf(s); if (p >= 0) hits.push([p === 0 ? 0 : 1, folded[i].length, i]); }
  hits.sort((a, b) => a[0] - b[0] || a[1] - b[1]); hits = hits.slice(0, 30).map(h => h[2]); hi = 0;
  results.innerHTML = hits.length ? hits.map((i, j) => `<button role="option" data-node="${i}" class="${j === 0 ? "on" : ""}"><span class="dot" style="background:${C[N[i].c[0]].color}"></span>${esc(N[i].n)}<small>${esc(C[N[i].c[0]].name)}</small></button>`).join("")
    : `<div style="padding:10px 12px;color:var(--muted)">Nessuna competenza con questo nome</div>`;
  results.classList.add("open");
});
q.addEventListener("keydown", e => {
  const bs = results.querySelectorAll("button");
  if (e.key === "ArrowDown" || e.key === "ArrowUp") { e.preventDefault(); hi = (hi + (e.key === "ArrowDown" ? 1 : bs.length - 1)) % Math.max(1, bs.length); bs.forEach((b, j) => b.classList.toggle("on", j === hi)); bs[hi]?.scrollIntoView({block: "nearest"}); }
  if (e.key === "Enter" && hits.length) { choose(hits[hi]); }
  if (e.key === "Escape") { results.classList.remove("open"); q.blur(); }
});
results.addEventListener("click", e => { const b = e.target.closest("[data-node]"); if (b) choose(+b.dataset.node); });
document.addEventListener("click", e => { if (!e.target.closest(".search")) results.classList.remove("open"); });
function choose(i) { results.classList.remove("open"); q.value = ""; side.classList.remove("open"); select(i, true); }

// ---------- url ----------
let applying = false;
function writeHash() {
  if (applying || !view) return;
  const p = new URLSearchParams();
  if (level !== "tutto") p.set("livello", level);
  if (view.course >= 0) p.set("corso", C[view.course].name);
  if (sel >= 0) p.set("nodo", N[sel].n);
  const h = p.toString();
  history.replaceState(null, "", h ? "#" + h : location.pathname);
}
function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  applying = true;
  level = ["triennale", "magistrale"].includes(p.get("livello")) ? p.get("livello") : "tutto";
  renderList();
  const c = p.get("corso");
  setView(c && courseIdx.has(c) ? "c:" + c : level, {instant: true});
  const n = p.get("nodo");
  if (n && byName.has(n)) { select(byName.get(n), false); fit(false); }
  applying = false; writeHash();
}

// ---------- start ----------
resize();
readHash();
if (document.fonts) document.fonts.ready.then(draw);
})();
