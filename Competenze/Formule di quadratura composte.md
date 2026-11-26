---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["composite quadrature rules", "formule composte", "quadratura composta", "quadratura adattiva", "adaptive quadrature", "Gauss-Legendre composta"]
tags: [competenza, area/numerica]
---

# Formule di quadratura composte

> Si divide $[a,b]$ in $m$ sottointervalli e si applica su ciascuno una formula base con pochi nodi: la convergenza si ottiene facendo tendere a zero il passo invece di aumentare il grado.

## Definizione / enunciato
Passi:
1. scegliere una formula base (trapezio, Simpson, Gauss-Legendre a $n$ nodi, ...);
2. suddividere $[a,b]$ con $a\equiv x_1<\dots<x_{m+1}\equiv b$ (passo costante $h=(b-a)/m$ oppure $h_i$ variabili);
3. usare l'additività $\int_a^bf=\sum_{i=1}^m\int_{x_i}^{x_{i+1}}f$;
4. applicare la formula base su ogni sottointervallo.

Le formule composte non prevedono una funzione peso.

**Proprietà.** Nodi e pesi non vanno ricalcolati al variare di $m$; il grado di precisione è quello della formula base; convergono per ogni integranda continua; l'errore è la somma degli errori sui singoli intervalli.

## Formule chiave
Gauss-Legendre a 2 nodi composta:
$$\int_a^bf\approx\frac h2\sum_{i=1}^m\left[f\!\left(\tfrac h2\big(1-\tfrac1{\sqrt3}\big)+x_i\right)+f\!\left(\tfrac h2\big(1+\tfrac1{\sqrt3}\big)+x_i\right)\right].$$
Se $g\in C^{2k}([a,b])$ la Gauss-Legendre composta "di ordine $k$" ha errore $R^{GL}_m(g)=O(h^{2k-1})$, $h=(b-a)/m$ (così nella slide, p. 62).

## Intuizione
Invece di un polinomio di grado alto su tutto $[a,b]$ (che oscilla) si usano tanti polinomi di grado basso: è l'analogo, per gli integrali, delle spline rispetto all'interpolazione globale.

## Come si usa
**Strategia adattiva.** Se l'integranda è irregolare, una partizione uniforme impone di addensare i nodi ovunque. Conviene suddividere in sottointervalli di ampiezza diversa, fitti dove $f$ è irregolare e larghi dove è regolare (esempio $f(x)=(x^3-x)/(1+x^4)$). Se invece $f$ è molto regolare conviene una formula gaussiana.
Matlab: `[q,N]=quad(f,a,b,toll)` (Simpson composta adattiva, toll di default $10^{-6}$); `integral(f,a,b,'RelTol',rt,'AbsTol',at)`; `trapz(x,y)`. Su $\int_0^1x^3e^x\,dx$: `quad` dà errore $4.55\cdot10^{-9}$ con $N=29$ valutazioni, $5.6\cdot10^{-16}$ con toll $10^{-14}$ e $N=1025$; `integral` $6.7\cdot10^{-16}$; `trapz` su 1000 punti $9.1\cdot10^{-7}$.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 45-69).

## Prerequisiti
- [[Formule di Newton-Cotes]]: forniscono le formule base con pochi nodi
- [[Proprietà dell'integrale definito]]: additività rispetto all'intervallo

## Porta a
- [[Formula dei trapezi]]: versione composta del trapezio
- [[Formula di Simpson]]: versione composta di Simpson

## Collegati
- [[Formule gaussiane]]: formula base alternativa, preferibile per integrande regolari
- [[Convergenza delle formule di quadratura]]: le composte convergono per ogni f continua
- [[Spline lineare]]: stessa idea dell'approssimazione a tratti
