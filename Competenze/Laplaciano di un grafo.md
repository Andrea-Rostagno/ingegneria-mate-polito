---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["graph Laplacian", "Laplacian matrix", "matrice laplaciana", "L = D - W", "laplaciano del grafo", "distribuzione Laplace-invariante", "Laplace-invariant distribution", "matrice di Metzler", "consenso in tempo continuo"]
tags: [competenza, area/network]
---

# Laplaciano di un grafo

> La matrice $L=D-W$ di un grafo pesato: annulla i vettori costanti, ha spettro nel semipiano destro e genera le dinamiche di media e di flusso in tempo continuo.

## Definizione / enunciato
Per $\mathcal G=(\mathcal V,\mathcal E,W)$ con $D=\operatorname{diag}(w)$ (out-degree):
$$L=D-W,\qquad L_{ij}=\begin{cases}-W_{ij}&i\neq j\\ w_i-W_{ii}&i=j.\end{cases}$$
$-L$ è una **matrice di Metzler** (fuori diagonale non negativa) e $L\mathbb 1=0$.

**Teorema (proprietà spettrali).**
- $L\mathbb 1=0$: 0 è autovalore;
- esiste $\bar\pi\ge0$ con $\mathbb 1'\bar\pi=1$ e $L'\bar\pi=0$ (**distribuzione Laplace-invariante**);
- tutti gli altri autovalori hanno $\operatorname{Re}(\lambda)>0$;
- se $\mathcal G$ è connesso, 0 è semplice e $\bar\pi_i>0$;
- $L'\bar y=0\iff P'(D\bar y)=D\bar y$.

## Formule chiave
Dinamiche in tempo continuo:
$$\dot x=-Lx,\qquad \dot y=-L'y.$$
Se $s_{\mathcal G}=1$: $x(t)\to\mathbb 1\,\bar\pi'x(0)$ e $y(t)\to\bar\pi\,\mathbb 1'y(0)$.
Discretizzando con passo $h$: $x_i(t+h)=(1-hw_i)x_i(t)+hw_i\sum_jP_{ij}x_j(t)$, cioè French-DeGroot con matrice stocastica $(I-hD)+hDP$ se $hw_i\le1$.
Con la matrice di incidenza (grafo non pesato): $BB'=L+L^*$, e $BB'=2L$ per un grafo semplice.

## Intuizione
$(Lx)_i=\sum_jW_{ij}(x_i-x_j)$ misura quanto $i$ è "fuori media" rispetto ai vicini. Il flusso $\dot x=-Lx$ riduce queste differenze; non serve l'aperiodicità perché in tempo continuo non ci sono oscillazioni.

## Come si usa
- Equazione di Laplace $Lx=\nu$ per le tensioni di una rete elettrica (Kirchhoff + Ohm).
- Coefficienti delle dinamiche con agenti testardi: $(LH)_{|\mathcal R}=0$ con condizioni al bordo.
- Legge di una CTMC con tassi $\Lambda$: $\frac{d}{dt}\pi(t)=-L'\pi(t)$; nel modello del votante la probabilità di vittoria di un'opinione è data da $\bar\pi$.

## Nei corsi
- **Dinamiche su network** (magistrale): definito in Slides 2, usato per le dinamiche continue in Slides 6 e per le CTMC in Slides 7. Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 26-28, 52); `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 20-24); `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (p. 5).

## Prerequisiti
- [[Grafo]]: matrice dei pesi e gradi
- [[Matrice stocastica]]: $L=D(I-P)$

## Porta a
- [[Rete elettrica su un grafo]]: equazione di Laplace $Lx=\nu$
- [[Modello del votante]]: probabilità di assorbimento date da $\bar\pi$
- [[Agenti testardi]]: equazioni di Laplace con condizioni al bordo

## Collegati
- [[Matrice di incidenza]]: $BB'=L+L^*$
- [[Catena di Markov a tempo continuo]]: generatore $-L$ con tassi $\Lambda$
- [[Sistemi lineari di ODE a coefficienti costanti]]: $\dot x=-Lx$ è un sistema lineare
- [[Autovalori e autofunzioni del laplaciano]]: analogo continuo dell'operatore di Laplace
