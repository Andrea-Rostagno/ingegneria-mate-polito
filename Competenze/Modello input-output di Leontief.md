---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["open Leontief model", "Leontief input-output model", "modello di Leontief aperto", "modello di Leontief", "matrice input-output", "market clearing"]
tags: [competenza, area/network]
---

# Modello input-output di Leontief

> Un'economia come rete di settori che si scambiano beni: la produzione copre ogni domanda esterna non negativa se e solo se il raggio spettrale della matrice input-output è minore di 1.

## Definizione / enunciato
$\mathcal V$ insieme di settori, ciascuno produce un solo bene. Produzione a proporzioni fisse: $W_{ij}$ è la quantità di bene $i$ necessaria per produrre un'unità di bene $j$, quindi per produrre $x_i$ il settore $i$ chiede $x_{ki}=W_{ki}x_i$ a ogni $k$. I consumatori esterni domandano $d_i$. Condizioni di **market clearing**:
$$x_i=\sum_jx_{ij}+d_i=\sum_jW_{ij}x_j+d_i\iff (I-W)x=d .$$
Il modello è **ammissibile** (feasible) se per ogni $d\ge0$ esiste una soluzione $x\ge0$.

**Teorema.** Un modello di Leontief aperto con matrice $W$ è ammissibile se e solo se $\rho(W)<1$.

## Formule chiave
($\Leftarrow$) Se $\rho(W)<1$:
$$x=(I-W)^{-1}d=\sum_{k=0}^{+\infty}W^kd\ \ge0 .$$
($\Rightarrow$) Con $d=\mathbb 1$ esiste $x>0$ con $x-Wx=\mathbb 1$; per Perron-Frobenius esiste $y\ge0$, $y\neq0$, con $y'W=\rho(W)y'$. Allora
$$y'\mathbb 1=y'x-y'Wx=(1-\rho(W))\,y'x,\qquad y'\mathbb 1>0,\ y'x>0\ \Rightarrow\ 1-\rho(W)>0 .$$

## Intuizione
La serie $\sum_kW^kd$ conta la domanda diretta, poi gli input servono per produrla, poi gli input degli input... Converge solo se ogni "giro" della rete richiede meno di quanto produce, cioè $\rho(W)<1$.

## Come si usa
Applicazione economica di Perron-Frobenius: per decidere se un sistema produttivo può soddisfare qualunque domanda si calcola (o si stima) il raggio spettrale della matrice input-output. Contesto storico delle slide: W. Leontief, 1936, premio Nobel 1973.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 2, "An application in economy". Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 78-89).

## Prerequisiti
- [[Teorema di Perron-Frobenius]]: autovettore sinistro non negativo di $W$
- [[Norma spettrale]]: raggio spettrale e serie di Neumann

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Centralità di Bonacich]]: stessa inversa scritta come serie geometrica
- [[Agenti testardi]]: anche lì $\rho(Q)<1$ garantisce $(I-Q)^{-1}=\sum_tQ^t$
