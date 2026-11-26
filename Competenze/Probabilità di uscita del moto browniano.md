---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [exit probabilities, hitting probabilities, tempo di uscita, exit time, probabilità di uscita]
tags: [competenza, area/probabilita]
---

# Probabilità di uscita del moto browniano

> Probabilità che il moto browniano esca da un intervallo o da una corona sferica attraverso un bordo prefissato, calcolate con optional stopping o con il problema di Dirichlet.

## Definizione / enunciato
**Caso $d=1$ (martingala).** Con $A,B>0$ e $\tau=\inf\{t:W_t\in\{-A,B\}\}$, partendo da $0$:
$$P(W_\tau=-A)=\frac{B}{A+B},\qquad P(W_\tau=B)=\frac{A}{A+B}.$$
**Caso $d$-dimensionale (Dirichlet).** $W_0=x$, $0<A<\|x\|_2<B$, $\tau=\inf\{t:\|W_t\|_2\le A\text{ o }\|W_t\|_2\ge B\}$, $D$ la corona $\{A\le\|v\|_2\le B\}$. Allora $P_x(\|W_\tau\|_2=A)=u(x)$ con $u$ armonica in $\mathring D$, $u=1$ sul bordo interno, $0$ su quello esterno.

## Formule chiave
Soluzioni esplicite (da non ricordare a memoria, si possono consultare all'esame):
$$d=1:\ \frac{B-x}{B-A},\qquad d=2:\ \frac{\log B-\log\|x\|_2}{\log B-\log A},\qquad d\ge3:\ \frac{B^{2-d}-\|x\|_2^{2-d}}{B^{2-d}-A^{2-d}}.$$
(Per $d=1$ qui l'intervallo è $[A,B]$ con $A<x<B$.)

## Intuizione
In $d=1$ la martingala $W_t$ fa da "bilancia": la probabilità di uscire da un lato è proporzionale alla distanza dall'altro, come nella rovina del giocatore. In dimensione maggiore il ruolo della funzione lineare lo prende la funzione armonica radiale ($\log r$ in $d=2$, $r^{2-d}$ in $d\ge3$).

## Come si usa
Le ipotesi dell'optional stopping vanno verificate sul tempo di uscita: $|W_{t\wedge\tau}|\le\max(A,B)$ e $\tau<\infty$ q.c. Esercizi: probabilità di visitare $-1$ prima di $4$ (B(e)); $\mathbb E[\tau]$ per l'uscita da $[-A,B]$ (H) e dalla palla di raggio $r$ (I), da impostare con optional stopping su una martingala quadratica come $W_t^2-t$ (esercizio D), analogo continuo di $X_n^2-n$ nella passeggiata; il materiale non riporta i risultati. Mandando $B\to\infty$ si ottiene la ricorrenza/transienza.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 17. Fonti: `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23), `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24), `suggested_exercises_brownian_motion.pdf` (es. B, H, I).

## Prerequisiti
- [[Problema di Dirichlet e moto browniano]]: soluzione su intervallo e anello
- [[Martingale del moto browniano]]: optional stopping applicato a W_t
- [[Teorema di optional stopping]]: ipotesi sul tempo di uscita

## Porta a
- [[Ricorrenza e transienza del moto browniano]]: raggio esterno mandato all'infinito

## Collegati
- [[Rovina del giocatore]]: analogo continuo della rovina
