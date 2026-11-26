---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: ["gambler's ruin", "probabilità di assorbimento"]
tags: [competenza, area/probabilita]
---

# Rovina del giocatore

> Probabilità che una passeggiata aleatoria esca da un intervallo da un lato o dall'altro, e tempo medio di uscita; si calcola in modo elegante con l'optional stopping.

## Definizione / enunciato
Un giocatore vince 1 con probabilità $p$ e perde 1 con probabilità $q$, e gioca finché ha soldi: è una DTMC con lo stato 0 assorbente (lezione 6). Versione della lezione 19: passeggiata $X$ con $X_0=x_0$, $-A<x_0<B$, e
$$\tau=\inf\{n:X_n\le-A\ \text{oppure}\ X_n\ge B\}.$$
Si vogliono $\mathbb P(X_\tau=-A)$, $\mathbb P(X_\tau=B)$ ed $\mathbb E[\tau]$.

## Formule chiave
Caso simmetrico ($p=1/2$): si applica l'optional stopping a $X_n$ e a $X_n^2-n$.
$$\mathbb P(X_\tau=-A)=\frac{B-x_0}{A+B},\qquad\mathbb P(X_\tau=B)=\frac{A+x_0}{A+B},\qquad\mathbb E[\tau]=(A+x_0)(B-x_0).$$
Caso asimmetrico ($p\ne1/2$): si usa la martingala $Y_n=(q/p)^{X_n}$.
$$\mathbb P(X_\tau=-A)=\frac{(q/p)^{x_0}-(q/p)^{B}}{(q/p)^{-A}-(q/p)^{B}},\qquad\mathbb P(X_\tau=B)=\frac{(q/p)^{-A}-(q/p)^{x_0}}{(q/p)^{-A}-(q/p)^{B}}.$$
$\mathbb E[\tau]$ si ottiene dalla martingala $X_n-n(p-q)$.

## Intuizione
Un gioco equo resta equo anche fermandosi a una regola ragionevole: la vincita attesa è $x_0$, e questo fissa le probabilità di uscita. Con un piccolo svantaggio ($p<1/2$) la rovina diventa quasi certa se si punta poco per volta.

## Come si usa
Tabella della lezione 19: probabilità di vincere 100 € prima di perderne 100, partendo da 0.
- Con $p=0.49$: puntando 1 € si ha $0.017977$, puntando 100 € si ha $0.49$. Conviene la puntata grossa.
- Raddoppio "realistico" con tetto $M$: $\mathbb P(X_\tau=-M)=\frac{B}{M+B}$, la stessa probabilità di rovina della puntata costante.
- In alternativa si risolve il sistema lineare sui tempi e sulle probabilità di assorbimento (analisi al primo passo), che è più pesante per spazi grandi.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 6 ("Gambling"), lezione 19 ("Stopped symmetric random walk", "Realistic doubling strategy", "Stopped asymmetric random walk"). Le ipotesi dell'optional stopping ($\tau<\infty$ q.c., integrabilità) sono verificate esplicitamente nelle slide. Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6), `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19).
- **Dinamiche su network** (magistrale): risolta con l'analisi al primo passo, senza martingale, come random walk su un grafo-linea pesato $\{0,\dots,n\}$ con $P_{i,i+1}=p$, $P_{i,i-1}=q$ e due pozzi (catena non ergodica). Tempo medio: $\mathbb E_0[T_{\mathcal S}]=\mathbb E_n[T_{\mathcal S}]=0$, $\mathbb E_i[T_{\mathcal S}]=1+q\,\mathbb E_{i-1}[T_{\mathcal S}]+p\,\mathbb E_{i+1}[T_{\mathcal S}]$, con soluzione $i(n-i)$ per $p=q=1/2$. Probabilità di arrivare a $n$: con $y_i=H_{i,n}-H_{i-1,n}$ si ha $qy_i=py_{i+1}$, e con $\rho=p/q$
$$H_{k,n}=\frac{\sum_{0\le i<k}\rho^{-i}}{\sum_{0\le i<n}\rho^{-i}}=\begin{cases}k/n&\rho=1\\ \dfrac{1-\rho^{-k}}{1-\rho^{-n}}&\rho\neq1;\end{cases}$$
se $\rho<1$ e $n-k\to+\infty$, $H_{k,n}\to0$ e, con $j$ fisso, $H_{n-j,n}\to\rho^j$. La stessa formula dà la probabilità di fissazione nella dinamica evolutiva su rete. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 13, 20, 27, 34).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: passeggiata con due stati assorbenti

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Probabilità di uscita del moto browniano]]: analogo continuo della rovina
- [[Ricorrenza della passeggiata aleatoria]]: stessa passeggiata con barriere assorbenti
- [[Teorema di optional stopping]]: probabilità di rovina via martingala arrestata
- [[Probabilità di impatto e tempo medio di impatto]]: soluzione con l'analisi al primo passo (Dinamiche su network)
- [[Dinamica evolutiva su rete]]: stessa probabilità di assorbimento con $\rho=f_1/f_0$ (Dinamiche su network)
