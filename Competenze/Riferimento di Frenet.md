---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Frenet frame", "triedro di Frenet", "terna di Frenet", "versore tangente", "normale principale", "versore binormale", "T N B"]
tags: [competenza, area/algebra-geometria]
---

# Riferimento di Frenet

> È la base ortonormale "mobile" $(T,N,B)$ attaccata a ogni punto biregolare di una curva: tangente, normale principale e binormale.

## Definizione / enunciato
Il **triedro di Frenet** in un punto biregolare $P_0$ ha tre lati:
- la retta tangente;
- la retta perpendicolare alla tangente contenuta nel [[Piano osculatore]];
- la retta ortogonale al piano osculatore.

I versori corrispondenti sono
$$T(t)=\frac{P'(t)}{\|P'(t)\|},\qquad N(t)=\frac{T'(t)}{\|T'(t)\|},\qquad B(t)=T(t)\times N(t).$$
$(T,N,B)$ è una base ortonormale di $\mathbb R^3$ per ogni $t$, detta **riferimento di Frenet**.

**Proprietà (dimostrate a lezione):**
1. $T\perp N$: da $T\cdot T=1$, derivando, $2T'\cdot T=0$.
2. $B$ è un versore ortogonale a $T$ e a $N$, perché $\|T\times N\|=\sin 90°=1$.
3. Cambiando parametrizzazione, il verso di $T$ e quello di $B$ possono invertirsi (destra/sinistra, sopra/sotto non sono intrinseci).
4. **Il verso di $N$ è invariante:** punta sempre verso la concavità. Se $\frac{d\tau}{dt}<0$, allora $T(t)=-T(\tau)$ e $\frac{dT}{dt}=-\frac{dT}{d\tau}\frac{d\tau}{dt}$, che ha lo stesso verso di $\frac{dT}{d\tau}$.

## Formule chiave
$$T=\frac{P'}{\|P'\|},\quad N=\frac{T'}{\|T'\|},\quad B=T\times N$$

## Intuizione
$T$ dice dove va la curva e $N$ da che parte gira. $B$ completa la terna ed è la normale al piano osculatore.

## Come si usa
Esempi della lezione:
- Circonferenza $(\cos t,\sin t)$: $T=(-\sin t,\cos t)$ e $N=(-\cos t,-\sin t)$, che punta verso il centro.
- Cubica $(t,t^2,t^3)$: $T=\frac{(1,2t,3t^2)}{\sqrt{1+4t^2+9t^4}}$ e $B=\frac{(3t^2,-3t,1)}{\sqrt{1+9t^2+9t^4}}$. Il docente non svolge il conto di $N$ ("un po' lungo").
- Con $\tau=-t$ si ottiene $T(0)=(-1,0,0)$ invece di $(1,0,0)$, mentre $N(0)=(0,1,0)$ resta uguale.

## Nei corsi
- **Geometria differenziale** (triennale): triedro, definizioni, invarianza del verso di $N$ ed esempi. Fonte: `triennale/ANNO 2/geometria differenziale/Lezione04_GD.pdf` (pp. 9-22).

## Prerequisiti
- [[Curve parametriche]]: P' e la sua normalizzazione
- [[Piano osculatore]]: N giace nel piano osculatore
- [[Prodotto vettoriale]]: B = T × N

## Porta a
- [[Curvatura di una curva]]: K misura la variazione di T lungo N
- [[Formule di Frenet]]: derivate di T, N, B nella base stessa

## Collegati
- [[Coordinate intrinseche]]: in cinematica la stessa terna (tangente, normale, binormale) scompone l'accelerazione
