---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["curvature of a curve", "curvatura flessionale", "K(s)", "curvatura in parametro arbitrario"]
tags: [competenza, area/algebra-geometria]
---

# Curvatura di una curva

> $K(s)=\|dT/ds\|$ misura quanto rapidamente il versore tangente cambia direzione per unità di lunghezza: è zero per le rette, $1/r$ per una circonferenza di raggio $r$.

## Definizione / enunciato
Sia $P(s)$ parametrizzata con l'ascissa curvilinea, quindi $\|dP/ds\|=1$. La curvatura è
$$K(s):=\Big\|\frac{dT}{ds}\Big\|,\qquad\text{quindi}\qquad \frac{dT}{ds}=K(s)N(s),$$
che è la prima formula di Frenet. Il **raggio di curvatura** è $\rho=1/K$. Il **cerchio osculatore** in $s_0$:
- passa per $P(s_0)$,
- sta nel piano osculatore,
- è tangente alla curva,
- ha raggio $\rho$.

Proposizioni (dimostrate):
1. $K\equiv0$ se e solo se la curva è (una parte di) retta: $dT/ds=0$ significa $T$ costante, cioè $P(s)=P_0+s\vec v$.
2. Con $K$ costante $>0$ e $\tau=0$, la curva è un arco di circonferenza di raggio $1/K$. La curva dei centri $Q=P+\frac1KN$ ha $dQ/ds=0$, quindi è costante. Il manoscritto (L06 p. 21) scrive $-KT+\tau B$ al posto di $-KT-\tau B$, irrilevante perché $\tau=0$.

## Formule chiave
In un parametro arbitrario, per $P\in C^2$:
$$K(t)=\frac{\|P'(t)\times P''(t)\|}{\|P'(t)\|^3}$$
Si ricava da $P''=\|P'\|'T+\|P'\|^2KN$, quindi $P'\times P''=\|P'\|^3K\,B$. Un secondo metodo: $K=\|T'\|/\|P'\|$.

## Intuizione
Interpretazione: $K=\lim|\Delta\theta/\Delta s|$, dove $\Delta\theta$ è l'angolo tra $T(s)$ e $T(s+\Delta s)$, perché $\|T(s+\Delta s)-T(s)\|=2\sin\frac{\Delta\theta}{2}$. Misura quanto la curva si stacca dalla sua tangente.

## Come si usa
Esempi della lezione:
- Elica $(r\cos t,r\sin t,ht)$: $K=\frac{r}{r^2+h^2}$.
- $(e^t,e^{-t},\sqrt2t)$: $K=\frac{\sqrt2}{(e^t+e^{-t})^2}$.
- $(t,t^2,t^3)$: $K=\frac{2\sqrt{1+9t^2+9t^4}}{(1+4t^2+9t^4)^{3/2}}$.

## Nei corsi
- **Geometria differenziale** (triennale): curvatura sempre con $K$ maiuscola. Si richiede $P\in C^2$. Fonti:
  - `triennale/ANNO 2/geometria differenziale/Lezione05_GD.pdf` (pp. 4-6, 12-16);
  - `triennale/ANNO 2/geometria differenziale/Lezione06_GD.pdf` (pp. 10-14, 17-21);
  - `triennale/ANNO 2/geometria differenziale/Lezione08_GD.pdf` (pp. 15, 25).

## Prerequisiti
- [[Curve parametriche]]: ascissa curvilinea, velocità unitaria
- [[Riferimento di Frenet]]: T e N

## Porta a
- [[Torsione di una curva]]: definita per curve con K ≠ 0
- [[Formule di Frenet]]: K è il primo coefficiente della matrice
- [[Elica circolare]]: esempio con K costante

## Collegati
- [[Coordinate intrinseche]]: raggio di curvatura e cerchio osculatore in cinematica, a_N = v²/ρ
- [[Seconda forma fondamentale]]: b(α',α') = N·K n per una curva sulla superficie
- [[Curvature principali]]: curvature delle sezioni normali di una superficie
