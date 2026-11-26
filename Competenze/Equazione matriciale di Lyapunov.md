---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Lyapunov matrix equation", "Lyapunov equation", "PA + AᵀP = −I", "funzione di Lyapunov quadratica", "funzioni di Lyapunov per i sistemi lineari"]
tags: [competenza, area/analisi]
---

# Equazione matriciale di Lyapunov

> Se l'origine di $\dot x=Ax$ è asintoticamente stabile, esiste una funzione di Lyapunov quadratica $V(x)=(Px)\cdot x$, con $P$ soluzione di $PA+A^TP=-I$.

## Definizione / enunciato
**Teorema (L10 p. 3).** Se $\bar x=0$ è asintoticamente stabile per $\dot x=Ax$ ($A\in\mathbb R^{n\times n}$), esiste $P\in\mathbb R^{n\times n}$ tale che
$$V(x):=(Px)\cdot x$$
è una funzione di Lyapunov in senso stretto relativa a $\bar x=0$.

## Formule chiave
Costruzione:
$$V(x):=\int_0^{+\infty}\|e^{sA}x\|^2ds,\qquad P_{ij}=\int_0^{+\infty}\varphi_i(s)\cdot\varphi_j(s)\,ds,$$
dove $\varphi_i$ sono le colonne di $e^{sA}$. L'integrale converge perché $\|e^{sA}x\|\le Ce^{\alpha s}$ con $\alpha<0$. Lungo le traiettorie:
$$V(x(t))=\int_t^{+\infty}\|e^{\tau A}x_0\|^2d\tau\ \Rightarrow\ \frac{d}{dt}V(x(t))=-\|x(t)\|^2<0 .$$
D'altra parte $\frac{d}{dt}[(Px)\cdot x]=[(PA+A^TP)x]\cdot x$, e il confronto dà
$$PA+A^TP=-I\qquad(\text{equazione matriciale di Lyapunov}).$$

## Intuizione
$V(x)$ è l'"energia totale futura" della traiettoria che parte da $x$: decresce esattamente al ritmo $\|x(t)\|^2$. $P$ è simmetrica e lega direttamente $V$ alla matrice $A$.

## Come si usa
Data $A$ con autovalori a parte reale negativa, si risolve il sistema lineare $PA+A^TP=-I$ nell'incognita $P$ e si ottiene $V$. Il suo uso principale è la dimostrazione della stabilità in prima approssimazione: la stessa $V(x)=[P(x-\bar x)]\cdot(x-\bar x)$ resta di Lyapunov per il sistema non lineare vicino a $\bar x$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonte `triennale/ANNO 3/eq fisica matematica/10 - Lezione 25_10_23.pdf` (pp. 3-7). È il viceversa, per i sistemi lineari, del secondo teorema di Lyapunov.

## Prerequisiti
- [[Teoremi di Lyapunov]]: definizione di funzione di Lyapunov in senso stretto
- [[Stabilità dei sistemi lineari di ODE]]: stima ‖e^{sA}x‖ ≤ Ce^{αs} con α < 0
- [[Esponenziale di una matrice]]: V è definita tramite e^{sA}

## Porta a
- [[Stabilità in prima approssimazione]]: la V quadratica funziona anche per il sistema linearizzato
