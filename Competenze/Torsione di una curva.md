---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["torsion of a curve", "torsione", "tau(s)", "curva piana sse torsione nulla"]
tags: [competenza, area/algebra-geometria]
---

# Torsione di una curva

> $\tau$ misura quanto il piano osculatore ruota lungo la curva, cioè quanto la curva "esce dal piano". È nulla se e solo se la curva è piana.

## Definizione / enunciato
Sia $P(s)$ con ascissa curvilinea e $K\neq0$. Si dimostra che $\frac{dB}{ds}$ è ortogonale a $B$ (perché $B\cdot B=1$) e a $T$ (perché, derivando $B\cdot T=0$, si ottiene $\frac{dB}{ds}\cdot T+B\cdot KN=0$). Quindi $\frac{dB}{ds}\parallel N$ ed esiste $\tau(s)$ con
$$\frac{dB}{ds}=\tau(s)N(s).$$
**Convenzione del docente:** il segno è $+\tau N$. Molti testi usano $-\tau$ (L05 p. 11). Ne segue $|\tau|=\|dB/ds\|$.

**Proposizione (dimostrata nei due versi).** Una curva è piana se e solo se $\tau\equiv0$.
- (⇒) Da $(P(s)-q)\cdot V=0$ derivando si ottengono $T\cdot V=0$ e $N\cdot V=0$, quindi $B=\mp V/\|V\|$ è costante.
- (⇐) Se $B=V$ è costante, $f(s)=(P(s)-P(0))\cdot V$ ha $f'=T\cdot B=0$ e $f(0)=0$.

## Formule chiave
In un parametro arbitrario, per $P\in C^3$:
$$\tau(t)=-\frac{(P'(t)\times P''(t))\cdot P'''(t)}{\|P'(t)\times P''(t)\|^2}$$
Si ricava da $(P'\times P'')\cdot P'''=-\|P'\|^6K^2\tau=-\|P'\times P''\|^2\tau$. Il segno meno dipende dalla convenzione $dB/ds=+\tau N$. In alternativa si usa $\frac{dB}{dt}=\|P'\|\tau N$.

## Intuizione
$B$ è la normale al piano osculatore: se $B$ non cambia, il piano è fisso e la curva vi resta dentro. $K$ dice quanto la curva gira nel piano, $\tau$ quanto il piano stesso gira.

## Come si usa
Esempi della lezione:
- Elica circolare $(r\cos t,r\sin t,ht)$: $(P'\times P'')\cdot P'''=r^2h$, quindi $\tau=-\frac{h}{r^2+h^2}$. Con questa convenzione l'elica destrorsa ha torsione negativa.
- $(e^t,e^{-t},\sqrt2t)$: $\tau=\frac{\sqrt2}{(e^t+e^{-t})^2}$.
- $(t,t^2,t^3)$: $\tau=-\frac{3}{1+9t^2+9t^4}$.

## Nei corsi
- **Geometria differenziale** (triennale): seconda formula di Frenet, curve piane, formula in parametro arbitrario. Fonti:
  - `triennale/ANNO 2/geometria differenziale/Lezione05_GD.pdf` (pp. 7-9);
  - `triennale/ANNO 2/geometria differenziale/Lezione06_GD.pdf` (pp. 1-5, 15-16);
  - `triennale/ANNO 2/geometria differenziale/Lezione07_GD.pdf` (pp. 1-4).

## Prerequisiti
- [[Curvatura di una curva]]: serve K ≠ 0 perché N sia definito
- [[Riferimento di Frenet]]: B = T × N

## Porta a
- [[Formule di Frenet]]: τ completa la matrice antisimmetrica
- [[Elica cilindrica]]: caratterizzata da K/τ costante

## Collegati
- [[Piano osculatore]]: τ misura la sua variazione
- [[Prodotto misto]]: il numeratore (P'×P'')·P''' è un prodotto misto
