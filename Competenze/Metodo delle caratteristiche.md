---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["method of characteristics", "curve caratteristiche", "linee caratteristiche", "piede della caratteristica", "tempo di rottura", "breaking time", "intersezione delle caratteristiche"]
tags: [competenza, area/analisi]
---

# Metodo delle caratteristiche

> Si risolve una PDE del primo ordine riducendola a ODE lungo curve (le caratteristiche) su cui la soluzione è costante; per le leggi di conservazione non lineari spiega perché si formano discontinuità in tempo finito.

## Definizione / enunciato
Per $\partial_tu+\partial_xf(u)=0$ con $f\in C^1$ e $u$ regolare si scrive $\partial_tu+f'(u)\partial_xu=0$: è un trasporto con velocità dipendente da $u$. Le **linee caratteristiche** sono le curve $x=x(t)$ con
$$\frac{dx}{dt}=f'(u(x(t),t)).$$
Lungo di esse $\frac{d}{dt}u(x(t),t)=\partial_xu\,f'(u)+\partial_tu=0$, quindi $u(x(t),t)=u_0(x_0)$ ($x_0$ = piede della caratteristica). Allora $\frac{dx}{dt}=f'(u_0(x_0))$ è costante e
$$x(t)=f'(u_0(x_0))\,t+x_0 :$$
le caratteristiche sono rette, ma in generale **non parallele** (salvo $f$ affine o $u_0$ costante).

## Formule chiave
Due caratteristiche vicine (piedi $x_0$, $x_0+\Delta x$) si incontrano quando $\frac{f'(u_0(x_0+\Delta x))-f'(u_0(x_0))}{\Delta x}t=-1$; per $\Delta x\to0$ $t=-\frac1{f''(u_0(x_0))u_0'(x_0)}$. Il primo istante di intersezione è
$$t^*=\min_{x_0\in\mathbb R}\left(-\frac1{f''(u_0(x_0))\,u_0'(x_0)}\right).$$
Con $f''>0$ (flusso convesso) $t^*>0$ esiste se $u_0$ decresce da qualche parte; con $f''<0$ se $u_0$ cresce da qualche parte.

## Intuizione
Dove due caratteristiche si incrociano, $u$ dovrebbe valere contemporaneamente $u_0(x_0)$ e $u_0(\xi_0)$: nasce un **salto**. Dove invece si aprono, resta una regione $D$ che nessuna caratteristica raggiunge, e lì il dato iniziale non determina $u$ (L16 p. 5).

## Come si usa
Nel caso lineare $f'(u)=v$ si ritrova $u=u_0(x-vt)$. Nel problema di Riemann si disegna il diagramma delle caratteristiche: se si intersecano si costruisce un'onda d'urto, se lasciano un ventaglio vuoto un'onda di rarefazione.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): introdotto per il trasporto lineare (L12), esteso alle leggi di conservazione 1D (L15-L16). Fonti: `triennale/ANNO 3/eq fisica matematica/12 - Lezione 03_11_23.pdf` (pp. 3-5); `triennale/ANNO 3/eq fisica matematica/15 - Lezione 10_11_23.pdf` (pp. 3-5); `triennale/ANNO 3/eq fisica matematica/16 - Lezione 14_11_23 (2).pdf` (pp. 1-5).

## Prerequisiti
- [[Equazione del trasporto]]: caso lineare a velocità costante
- [[Problema di Cauchy]]: le caratteristiche risolvono un'ODE con dato iniziale

## Porta a
- [[Problema di Riemann]]: diagramma delle caratteristiche per un dato a gradino
- [[Onda d'urto]]: nasce dove le caratteristiche si intersecano
- [[Onda di rarefazione]]: riempie la regione non raggiunta dalle caratteristiche

## Collegati
- [[Legge di conservazione]]: f'(u) è la velocità di trasporto della legge
