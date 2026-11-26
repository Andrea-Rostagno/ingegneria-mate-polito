---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["d'Alembert's formula", "formula di D'Alembert", "soluzione del problema di Cauchy per le onde", "fattorizzazione dell'operatore delle onde"]
tags: [competenza, area/analisi]
---

# Formula di d'Alembert

> Formula esplicita della soluzione del problema di Cauchy per l'equazione delle onde 1D su tutta la retta, ricavata fattorizzando l'operatore in due trasporti.

## Definizione / enunciato
Il problema
$$\begin{cases}\partial_t^2u-c^2\partial_x^2u=0&\text{in }\mathbb R\times(0,+\infty)\\u=u_0,\ \ \partial_tu=u_1&\text{in }\mathbb R,\ t=0\end{cases}$$
(due dati iniziali, perché l'equazione è del secondo ordine in tempo) ha soluzione
$$u(x,t)=\frac12\big(u_0(x+ct)+u_0(x-ct)\big)+\frac1{2c}\int_{x-ct}^{x+ct}u_1(\xi)\,d\xi .$$

## Formule chiave
**Fattorizzazione** (L21 p. 1, usa Schwarz per soluzioni $C^2$): $(\partial_t+c\partial_x)(\partial_t-c\partial_x)u=0$. Posto $v=\partial_tu-c\partial_xu$:
$$\partial_tv+c\,\partial_xv=0,\ \ v(x,0)=u_1(x)-cu_0'(x)\ \Rightarrow\ v(x,t)=u_1(x-ct)-cu_0'(x-ct);$$
poi $\partial_tu-c\,\partial_xu=v$, $u(x,0)=u_0$ è un trasporto con forzante, risolto lungo $x=-ct+x_0$ e con il cambio $\xi=x+ct-2cs$.
**Casi particolari (L21 p. 8):** $u_1\equiv0\Rightarrow u=\frac12(u_0(x+ct)+u_0(x-ct))$, due metà del profilo che viaggiano in versi opposti; $u_0\equiv0\Rightarrow u=\frac1{2c}(U_1(x+ct)-U_1(x-ct))$, con $U_1$ primitiva di $u_1$.

## Intuizione
La soluzione è sovrapposizione di due profili che viaggiano con velocità $\pm c$. Il valore in $(\bar x,\bar t)$ dipende solo dai dati sull'intervallo $[\bar x-c\bar t,\bar x+c\bar t]$, delimitato dalle due caratteristiche $x\pm ct=$ cost.

## Come si usa
Dati $u_0,u_1$ si sostituisce nella formula. Nel disegno di L21 p. 8 un dato iniziale a cupola si divide in due cupole di altezza dimezzata che si allontanano con velocità $c$ e $-c$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonte `triennale/ANNO 3/eq fisica matematica/21 - Lezione 24_11_23.pdf` (pp. 1-9).

## Prerequisiti
- [[Equazione delle onde]]: problema di Cauchy da risolvere
- [[Equazione del trasporto]]: la fattorizzazione produce due trasporti

## Porta a
- [[Equazione delle onde sulla semiretta]]: nella zona x > ct la soluzione è ancora quella di d'Alembert
