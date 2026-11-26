"""Genera docs/data.js (dati + layout del grafo) per la pagina interattiva docs/index.html.

Uso, dalla radice della repo:  python tools/build_brain.py
Richiede: networkx, numpy.
"""
import re, json, os, glob, math, colorsys, sys
import networkx as nx
import numpy as np

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

TRI = ["Analisi 1", "Algebra lineare", "Matematica discreta", "Fisica 1", "Informatica", "Chimica",
       "Analisi 2", "Fisica 2", "Metodi matematici e probabilità", "Metodi numerici", "Quantum physics",
       "Ricerca operativa", "Meccanica", "Geometria differenziale", "Istituzioni algebra",
       "Istituzioni topologia", "Prob e statistica", "Analisi funzionale",
       "Programmazione e calcolo scientifico", "Base di dati", "Matematica per l'AI",
       "Equazioni alle derivate parziali", "Equazioni di fisica matematica", "Prova finale"]
MAG = ["Processi stocastici", "Modelli statistici", "Statistica computazionale", "Financial engineering",
       "Numerical opt", "Ottimizzazione in condizione di incertezza", "Dinamiche su network",
       "Data science tecnologie basi di dati", "Data science lab", "Business intelligence per big data",
       "Blockchain e criptoeconomia", "Crittografia"]
ALL = TRI + MAG


def colour(i):
    # stesse tinte dei gruppi colore di Obsidian (.obsidian/graph.json), più scure per il fondo chiaro
    L = [0.44, 0.50, 0.47]; S = [0.85, 0.70, 0.95]
    h = (i * 0.381966 + 0.07) % 1.0
    r, g, b = colorsys.hls_to_rgb(h, L[i % 3], S[(i // 3) % 3])
    return "#%02x%02x%02x" % (int(r * 255), int(g * 255), int(b * 255))


def section(body, name):
    s = re.search(r"^## " + name + r"\s*\n(.*?)(?=\n## |\Z)", body, re.S | re.M)
    return s.group(1) if s else ""


def links(txt):
    return list(dict.fromkeys(re.findall(r"\[\[([^\]|#]+)", txt)))


notes = {}
for f in sorted(glob.glob(os.path.join(ROOT, "Competenze", "*.md"))):
    name = os.path.basename(f)[:-3]
    t = open(f, encoding="utf-8").read().replace("\r\n", "\n")
    m = re.match(r"---\n(.*?)\n---\n(.*)", t, re.S)
    if not m:
        continue
    meta, body = m.groups()
    c = re.search(r"^corsi:\s*\[(.*?)\]", meta, re.M)
    corsi = [x.strip().strip('"').strip("'") for x in c.group(1).split(",")] if c else []
    corsi = [x for x in ALL if x in corsi] + [x for x in corsi if x not in ALL]
    a = re.search(r"^area:\s*(\S+)", meta, re.M)
    lv = re.search(r"^livello:\s*\[(.*?)\]", meta, re.M)
    q = re.search(r"^> (.+)$", body, re.M)
    notes[name] = dict(corsi=corsi, area=a.group(1) if a else "",
                       livello=[x.strip() for x in lv.group(1).split(",")] if lv else [],
                       summary=(q.group(1).strip() if q else ""),
                       pre=links(section(body, "Prerequisiti")),
                       nxt=links(section(body, "Porta a")),
                       col=links(section(body, "Collegati")),
                       all=links(body))

names = sorted(notes)
idx = {n: i for i, n in enumerate(names)}
E = set()
for n, d in notes.items():
    for l in d["all"]:
        if l in idx and l != n:
            E.add(tuple(sorted((idx[n], idx[l]))))
E = sorted(E)
print(len(names), "note,", len(E), "collegamenti")

courses = [c for c in ALL if any(c in d["corsi"] for d in notes.values())]


def primary(n, order):
    for c in order:
        if c in notes[n]["corsi"]:
            return c
    return notes[n]["corsi"][0]


def normalise(P):
    P = P - np.median(P, axis=0)
    s = np.percentile(np.abs(P), 99)
    return P / s


def level_layout(nodes, order, seed):
    S_ = set(nodes)
    G = nx.Graph(); G.add_nodes_from(nodes)
    G.add_edges_from([(names[a], names[b]) for a, b in E if names[a] in S_ and names[b] in S_])
    k = len(order); cen = {}
    for i, c in enumerate(order):
        ang = 2 * math.pi * i / k - math.pi / 2
        cen[c] = (math.cos(ang), math.sin(ang))
    rng = np.random.default_rng(seed)
    init = {n: tuple(np.array(cen[primary(n, order)]) + rng.normal(0, .12, 2)) for n in nodes}
    pos = nx.spring_layout(G, pos=init, k=1.6 / math.sqrt(len(nodes)), iterations=160, seed=seed)
    P = np.array([pos[n] for n in nodes])
    # spalma il nucleo denso verso l'esterno mantenendo gli angoli
    P = P - np.median(P, axis=0)
    rho = np.sqrt((P ** 2).sum(1)); th = np.arctan2(P[:, 1], P[:, 0])
    rk = np.argsort(np.argsort(rho)) / len(rho)
    rho2 = 0.4 * rho / np.percentile(rho, 99) + 0.6 * rk ** 0.6
    P = np.stack([rho2 * np.cos(th), rho2 * np.sin(th)], 1)
    return {n: P[i] for i, n in enumerate(nodes)}


def course_layout(c):
    nodes = [n for n in names if c in notes[n]["corsi"]]
    S_ = set(nodes)
    G = nx.Graph(); G.add_nodes_from(nodes)
    G.add_edges_from([(names[a], names[b]) for a, b in E if names[a] in S_ and names[b] in S_])
    # componenti sconnesse affiancate, poi kamada-kawai per componente
    comps = sorted(nx.connected_components(G), key=len, reverse=True)
    pos = {}
    if len(comps) == 1:
        pos = nx.kamada_kawai_layout(G)
    else:
        main = G.subgraph(comps[0]); pm = nx.kamada_kawai_layout(main)
        pos.update(pm)
        rest = [n for cc in comps[1:] for n in cc]
        for i, n in enumerate(rest):
            ang = 2 * math.pi * i / max(1, len(rest))
            pos[n] = np.array([1.25 * math.cos(ang), 1.25 * math.sin(ang)])
    P = np.array([pos[n] for n in nodes], dtype=float)
    P = P - P.mean(0); P = P / np.abs(P).max()
    # separa i nodi troppo vicini (le etichette in vista corso sono sempre visibili)
    for _ in range(200):
        moved = False
        for i in range(len(P)):
            d = P - P[i]; dist = np.sqrt((d ** 2).sum(1)); dist[i] = 9
            j = np.where(dist < 0.075)[0]
            for jj in j:
                v = d[jj] / (dist[jj] + 1e-9); push = (0.075 - dist[jj]) / 2
                P[jj] += v * push; P[i] -= v * push; moved = True
        if not moved:
            break
    return {n: P[i] for i, n in enumerate(nodes)}


layouts = {}
tri_nodes = [n for n in names if "triennale" in notes[n]["livello"]]
mag_nodes = [n for n in names if "magistrale" in notes[n]["livello"]]
for key, nodes, order, seed in (("tutto", names, ALL, 7), ("triennale", tri_nodes, TRI, 3),
                                ("magistrale", mag_nodes, MAG, 5)):
    L_ = level_layout(nodes, [c for c in order if c in courses], seed)
    layouts[key] = {"n": [idx[n] for n in nodes], "p": [round(float(v), 4) for n in nodes for v in L_[n]]}
    print(key, len(nodes))
for c in courses:
    L_ = course_layout(c)
    ns = list(L_)
    layouts["c:" + c] = {"n": [idx[n] for n in ns], "p": [round(float(v), 4) for n in ns for v in L_[n]]}
print(len(courses), "corsi")

data = dict(
    courses=[dict(name=c, level="triennale" if c in TRI else "magistrale", color=colour(ALL.index(c)),
                  count=sum(1 for d in notes.values() if c in d["corsi"])) for c in courses],
    nodes=[dict(n=n, a=notes[n]["area"], c=[courses.index(x) for x in notes[n]["corsi"] if x in courses],
                s=notes[n]["summary"],
                pre=[idx[x] for x in notes[n]["pre"] if x in idx],
                nx=[idx[x] for x in notes[n]["nxt"] if x in idx],
                co=[idx[x] for x in notes[n]["col"] if x in idx]) for n in names],
    edges=[v for e in E for v in e],
    layouts=layouts,
)
out = os.path.join(ROOT, "docs", "data.js")
os.makedirs(os.path.dirname(out), exist_ok=True)
with open(out, "w", encoding="utf-8") as fh:
    fh.write("window.BRAIN=" + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n")
print("scritto", out, os.path.getsize(out) // 1024, "KB")
