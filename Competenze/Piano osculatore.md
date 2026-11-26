---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["osculating plane", "punto biregolare", "biregular point", "piano limite"]
tags: [competenza, area/algebra-geometria]
---

# Piano osculatore

> È il piano che contiene il tratto di curva "infinitesimamente vicino" a un punto: lo generano velocità e accelerazione, e non dipende dalla parametrizzazione.

## Definizione / enunciato
Sia $P:I\to\mathbb R^3$ una curva regolare. Il punto $P_0=P(t_0)$ è **biregolare** se $P'(t_0)$ e $P''(t_0)$ sono linearmente indipendenti, cioè se $P'(t_0)\times P''(t_0)\neq0$.

In un punto biregolare il **piano osculatore** è il piano per $P_0$ parallelo a $\mathrm{Span}\{P'(t_0),P''(t_0)\}$.

**È ben definito per curve equivalenti.** Con $P(t)=Q(\tau(t))$ si ha
$$\frac{d^2P}{dt^2}=\frac{d^2Q}{d\tau^2}\Big(\frac{d\tau}{dt}\Big)^2+\frac{dQ}{d\tau}\frac{d^2\tau}{dt^2}.$$
Quindi $P''$ e la sua direzione cambiano, ma $\mathrm{Span}\{P',P''\}$ no.

**Proposizione (piano limite).** Il piano osculatore è il limite, per $h\to0$, del piano per $P(t_0)$ e $P(t_0+h)$ parallelo a $P'(t_0)$.

## Formule chiave
$$\det\begin{pmatrix}x-x(t_0)&y-y(t_0)&z-z(t_0)\\x'(t_0)&y'(t_0)&z'(t_0)\\x''(t_0)&y''(t_0)&z''(t_0)\end{pmatrix}=0$$
La giacitura del piano è $P'(t_0)\times P''(t_0)$.

## Intuizione
Lo sviluppo di Taylor $P(t_0+h)-P(t_0)=hP'+\frac{h^2}{2}(P''+\varepsilon(h))$ mostra che al secondo ordine la curva sta nel piano di $P'$ e $P''$. Nella dimostrazione si sostituisce questo sviluppo nel determinante del piano per tre punti e si sfrutta la multilinearità. Se la curva è piana, il piano osculatore è in ogni punto il piano che la contiene.

## Come si usa
Esempio della lezione: $(t,t^2,t^3)$ in $(1,1,1)$.
- $P'(1)=(1,2,3)$ e $P''(1)=(0,2,6)$ sono indipendenti, quindi il punto è biregolare.
- La giacitura è $P'\times P''=2(3,-3,1)$.
- Il piano osculatore è $3x-3y+z=1$.

## Nei corsi
- **Geometria differenziale** (triennale): definizione e invarianza, poi la caratterizzazione come piano limite, dimostrata. Fonti: `triennale/ANNO 2/geometria differenziale/Lezione02_03_GD.pdf` (pp. 17-23); `triennale/ANNO 2/geometria differenziale/Lezione04_GD.pdf` (pp. 1-8).

## Prerequisiti
- [[Curve parametriche]]: curva regolare, derivate, curve equivalenti
- [[Prodotto vettoriale]]: test di biregolarità e giacitura

## Porta a
- [[Riferimento di Frenet]]: T e N stanno nel piano osculatore, B gli è ortogonale

## Collegati
- [[Torsione di una curva]]: misura quanto ruota il piano osculatore
- [[Equazione del piano]]: forma cartesiana con il vettore normale P' × P''
