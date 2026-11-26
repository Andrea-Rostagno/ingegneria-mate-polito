---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["contraction lemma", "lemma di contrazione", "contractive properties of stochastic matrices", "contrazione max-min", "influenzatore globale", "global influencer"]
tags: [competenza, area/network]
---

# Proprietà contrattive delle matrici stocastiche

> Una matrice stocastica non allarga mai l'intervallo $[x_{\min},x_{\max}]$ dei valori; se una colonna ha tutte le entrate $\ge\alpha>0$ lo restringe di un fattore $1-\alpha$. Su questo si basa la seconda prova del consenso.

## Definizione / enunciato
$Q$ stocastica, $y=Qx$. Poiché $y_i=\sum_jQ_{ij}x_j$ è una media pesata,
$$x_{\min}\le y_{\min}\le y_{\max}\le x_{\max}.$$
**Lemma.** Se esistono $\alpha>0$ e un indice $k$ con $Q_{ik}\ge\alpha$ per ogni $i$, allora
$$y_{\max}-y_{\min}\le(1-\alpha)(x_{\max}-x_{\min}).$$

## Formule chiave
Per ogni $i$:
$$y_i=\sum_jQ_{ij}(x_j-x_{\min})+x_{\min}\ge\alpha x_k+(1-\alpha)x_{\min},\qquad y_i\le\alpha x_k+(1-\alpha)x_{\max};$$
sottraendo, $y_{\max}-y_{\min}\le(1-\alpha)(x_{\max}-x_{\min})$.
Iterando con $P$: $x_{\max}(t)-x_{\min}(t)\le(1-\alpha)^t(x_{\max}(0)-x_{\min}(0))\to0$; con la monotonia $x_{\min}(t)\le x_{\min}(t+1)\le x_{\max}(t+1)\le x_{\max}(t)$ si ha convergenza al consenso.

## Intuizione
L'ipotesi chiede un **influenzatore globale** $k$ ascoltato direttamente da tutti: ipotesi forte. Ma se $\mathcal G$ è fortemente connesso e aperiodico esiste $m$ con $P^m_{ij}>0$ per ogni $i,j$, quindi $P^m$ soddisfa il lemma con $\alpha=\min_{ij}P^m_{ij}$.

## Come si usa
Prova alternativa del teorema di French-DeGroot: si applica il lemma a $P^m$ e si ottiene $x_{\max}(tm)-x_{\min}(tm)\le(1-\alpha)^t(x_{\max}(0)-x_{\min}(0))$. Per un grafo con una sola componente pozzo aperiodica $C_0$: fissato $k\in C_0$, ogni $i$ ha $P^{m_i}_{ik}>0$, e per l'aperiodicità $P^q_{kk}>0$ per $q\ge m$; con $s=\max m_i+m$ si ha $P^s_{ik}>0$ per ogni $i$ e si riapplica il lemma.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 5, "An alternative road", "Contractive properties of stochastic matrices". Fonti: `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (pp. 68-85).

## Prerequisiti
- [[Matrice stocastica]]: righe a somma 1
- [[Potenze della matrice di adiacenza]]: positività di $P^m$ per grafi connessi aperiodici

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Modello di French-DeGroot]]: seconda dimostrazione della convergenza
- [[Teorema del punto fisso di Banach]]: stessa idea di contrazione geometrica
