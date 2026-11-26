---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Katz centrality", "indice di Katz", "Katz status index"]
tags: [competenza, area/network]
---

# Centralità di Katz

> Combinazione convessa tra la centralità ad autovettore e una centralità intrinseca $\mu$ dei nodi: è sempre ben definita, anche quando il grafo ha più componenti pozzo.

## Definizione / enunciato
Dato $\beta\in(0,1)$ e un vettore $\mu\ge0$ di centralità intrinseche, la centralità di Katz risolve
$$z=\frac{1-\beta}{\lambda_W}W'z+\beta\mu,$$
cioè
$$z=\big(I-(1-\beta)\lambda_W^{-1}W'\big)^{-1}\beta\mu .$$

## Formule chiave
Quadro riassuntivo delle slide:
| centralità | equazione |
|---|---|
| autovettore | $z=\frac1{\lambda_W}W'z$ |
| distribuzione invariante | $z=P'z$ |
| Katz | $z=\frac{1-\beta}{\lambda_W}W'z+\beta\mu$ |
| Bonacich | $z=(1-\beta)P'z+\beta\mu$ |
La matrice $(1-\beta)\lambda_W^{-1}W'$ ha raggio spettrale $1-\beta<1$, per questo l'inversa esiste (osservazione ricavata qui dal teorema di Perron-Frobenius).

## Intuizione
Ogni nodo ha un valore "di partenza" $\mu_i$ (rete esclusa) e riceve in più una frazione $1-\beta$ della centralità di chi lo punta, riscalata per $\lambda_W$ come nell'autovettore. Con $\beta$ piccolo prevale la rete, con $\beta$ vicino a 1 prevale $\mu$.

## Come si usa
Si sceglie $\mu$ (spesso uniforme) e $\beta$, poi si risolve un sistema lineare. Riferimento storico citato nelle slide: L. Katz, *A new status index derived from sociometric analysis*, Psychometrika 1953.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 2, "Katz centrality" e tabella riassuntiva. Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 68, 75, 90).

## Prerequisiti
- [[Centralità ad autovettore]]: la parte di rete usa $W'/\lambda_W$
- [[Teorema di Perron-Frobenius]]: $\lambda_W$ come raggio spettrale

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Centralità di Bonacich]]: stessa costruzione con la matrice stocastica $P$
