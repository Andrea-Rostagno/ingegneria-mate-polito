---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["Frenet-Serret formulas", "formule di Frenet-Serret", "equazioni intrinseche", "Frenet in parametro arbitrario"]
tags: [competenza, area/algebra-geometria]
---

# Formule di Frenet

> Esprimono le derivate di $T,N,B$ nella base $(T,N,B)$ stessa: i coefficienti sono solo curvatura e torsione, in una matrice antisimmetrica.

## Definizione / enunciato
Per una curva con ascissa curvilinea $s$ valgono:
1. $\frac{dT}{ds}=KN$, che è la definizione di $K$;
2. $\frac{dB}{ds}=\tau N$, che è la definizione di $\tau$;
3. $\frac{dN}{ds}=-KT-\tau B$.

La terza si ottiene derivando $N=B\times T$ con Leibniz: $\frac{dN}{ds}=\tau\,N\times T+K\,B\times N$.

## Formule chiave
$$\begin{pmatrix}T'\\N'\\B'\end{pmatrix}=\begin{pmatrix}0&K&0\\-K&0&-\tau\\0&\tau&0\end{pmatrix}\begin{pmatrix}T\\N\\B\end{pmatrix}$$
Questa è la convenzione del docente; molti testi hanno $-\tau$ al posto di $\tau$.

In un parametro arbitrario $t$, con $\tilde P(t)=P(s(t))$ e $\frac{ds}{dt}=\|\tilde P'\|$:
$$\frac{d\tilde T}{dt}=\|\tilde P'\|\tilde K\tilde N,\qquad \frac{d\tilde N}{dt}=-\|\tilde P'\|(\tilde K\tilde T+\tilde\tau\tilde B),\qquad \frac{d\tilde B}{dt}=\|\tilde P'\|\tilde\tau\tilde N.$$
**Equazioni intrinseche:** date $f(s)=K$ e $g(s)=\tau$, le tre formule sono un sistema lineare del primo ordine di 9 equazioni nelle 9 incognite $T_i,N_i,B_i$.

## Intuizione
La matrice è antisimmetrica perché la base è ortonormale per ogni $s$: derivando $T\cdot T=1$, $T\cdot N=0$, … i coefficienti si annullano sulla diagonale e cambiano segno trasponendo. È lo stesso meccanismo delle derivate dei versori di un sistema rigido rotante.

## Come si usa
Sono lo strumento di tutte le dimostrazioni sulle curve: curva piana sse $\tau=0$, circonferenza sse $K$ costante e $\tau=0$, Lancret, il teorema fondamentale. Nei conti si usano anche come verifica: $T'=\|P'\|KN$ dà $K=\|T'\|/\|P'\|$.

Esempio svolto a lezione (impostato come esercizio d'esame, L08 pp. 26-30): per $P$ con $K$ costante e $\tau<0$, la curva dei centri $Q=P+\frac1KN$ ha
- $\frac{dQ}{ds}=-\frac{\tau}{K}B\neq0$;
- $(T^Q,N^Q,B^Q)=(B,-N,T)$;
- $K^Q=K$.

## Nei corsi
- **Geometria differenziale** (triennale): ricavate con l'ascissa curvilinea, estese a parametro arbitrario, poi sistema delle equazioni intrinseche. Fonti:
  - `triennale/ANNO 2/geometria differenziale/Lezione05_GD.pdf` (pp. 4-11);
  - `triennale/ANNO 2/geometria differenziale/Lezione06_GD.pdf` (pp. 6-9);
  - `triennale/ANNO 2/geometria differenziale/Lezione08_GD.pdf` (pp. 11, 26-30).

## Prerequisiti
- [[Riferimento di Frenet]]: la base mobile da derivare
- [[Curvatura di una curva]]: coefficiente di dT/ds
- [[Torsione di una curva]]: coefficiente di dB/ds

## Porta a
- [[Elica circolare]]: K e τ costanti
- [[Elica cilindrica]]: teorema di Lancret
- [[Teorema fondamentale delle curve]]: K e τ determinano la curva

## Collegati
- [[Formule di Poisson]]: stesso meccanismo per la derivata dei versori di una terna mobile ortonormale
