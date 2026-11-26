---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["weak solution of a conservation law", "soluzione debole dell'equazione del trasporto", "formulazione debole della legge di conservazione", "soluzione classica di una legge di conservazione", "formulazione classica (puntuale)"]
tags: [competenza, area/analisi]
---

# Soluzione debole di una legge di conservazione

> Si moltiplica la PDE per una funzione test e si integra per parti, scaricando le derivate su $\varphi$: così hanno senso come soluzioni anche funzioni discontinue, come i salti prodotti dalle caratteristiche.

## Definizione / enunciato
**Def. (L16 p. 6).** $u\in L^1_{loc}(Q)$, $Q=\mathbb R\times(0,+\infty)$, è **soluzione debole** di $\partial_tu+\partial_xf(u)=0$ se
$$\int_0^{+\infty}\!\!\int_{\mathbb R}\big(u\,\partial_t\varphi+f(u)\,\partial_x\varphi\big)\,dx\,dt=0\qquad\forall\varphi\in\mathcal D(Q).$$
Per il trasporto lineare ($f(u)=vu$, L14 p. 2): $\iint u(\partial_t\varphi+v\,\partial_x\varphi)\,dx\,dt=0$. Una **soluzione classica** è invece $u\in C^1(Q)$ che soddisfa la PDE punto per punto.

## Formule chiave
Si ottiene da $\iint(\partial_tu+\partial_xf(u))\varphi=0$ integrando per parti: i termini di bordo $[u\varphi]$ si annullano perché $\mathrm{supp}\,\varphi$ è compatto in $Q$.
**Teorema (L14 p. 4).** Ogni soluzione classica è soluzione debole (si integra per parti all'indietro).
**Regolarità minima (L14 p. 6):**
$$\Big|\iint u(\partial_t\varphi+v\partial_x\varphi)\Big|\le(\|\partial_t\varphi\|_\infty+|v|\,\|\partial_x\varphi\|_\infty)\iint_{\mathrm{supp}\varphi}|u|,$$
finito se $u\in L^1_{loc}$: è una richiesta di regolarità integrale, non puntuale.

## Intuizione
La formulazione debole conserva l'informazione fisica (bilancio integrale) ma non chiede derivate di $u$: un gradino può essere soluzione purché il salto rispetti il bilancio del flusso.

## Come si usa
Esempio (L14 pp. 3-4): $u=H(x-vt)$ ($v>0$) non è $C^1$ ma è soluzione debole del trasporto: spezzando l'integrale nelle zone $u=0$ e $u=1$ e scambiando l'ordine di integrazione si ottiene $\int_0^{+\infty}\varphi(vt,t)v\,dt-v\int_0^{+\infty}\varphi(vt,t)dt=0$. Lo stesso calcolo, per un gradino che si muove con velocità $s$, dà la condizione di Rankine-Hugoniot.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/14 - Lezione 08_11_23.pdf` (pp. 1-7); `triennale/ANNO 3/eq fisica matematica/16 - Lezione 14_11_23 (2).pdf` (pp. 5-6).

## Prerequisiti
- [[Equazione del trasporto]]: primo caso in cui serve (dato di Heaviside)
- [[Funzioni test]]: lo spazio D(Q) dei test
- [[Integrazione per parti]]: sposta le derivate su φ
- [[Spazi Lp]]: la regolarità richiesta è L¹_loc

## Porta a
- [[Onda d'urto]]: la condizione di Rankine-Hugoniot nasce dalla formulazione debole
- [[Onda di rarefazione]]: soluzione continua ma non derivabile, quindi solo debole
- [[Soluzione entropica]]: criterio per scegliere tra più soluzioni deboli

## Collegati
- [[Legge di conservazione]]: equazione di cui si dà la forma debole
- [[Derivata distribuzionale]]: stessa idea di spostare le derivate sui test
