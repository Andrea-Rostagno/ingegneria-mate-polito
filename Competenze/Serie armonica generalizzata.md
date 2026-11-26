---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["generalized harmonic series", "p-series", "serie armonica", "harmonic series", "1/n^alpha", "zeta di Riemann"]
tags: [competenza, area/analisi]
---

# Serie armonica generalizzata

> $\sum\frac1{n^\alpha}$ converge se e solo se $\alpha>1$: è la serie campione per i confronti.

## Definizione / enunciato
La serie armonica $\sum_{n\ge1}\frac1n$ diverge pur avendo $a_n\to0$. Più in generale
$$\sum_{n=1}^\infty\frac1{n^\alpha}\quad\text{converge se }\alpha>1,\ \text{diverge se }\alpha\le1,$$
perché $\int_1^{+\infty}\frac{dx}{x^\alpha}$ converge se e solo se $\alpha>1$ (criterio del confronto integrale).

## Formule chiave
$$S_n=1+\tfrac12+\dots+\tfrac1n>\int_1^{n+1}\frac{dx}x=\log(n+1)\to+\infty.$$

## Intuizione
I rettangoli di base 1 e altezza $\frac1n$ stanno sopra il grafico di $\frac1x$, il cui integrale improprio diverge; con $\frac1{\sqrt x}$ si vede allo stesso modo che $\sum\frac1{\sqrt n}$ diverge. Per $\alpha>1$ la somma ("zeta di Riemann in $\alpha$") è nota solo per $\alpha$ pari: $\sum\frac1{n^2}=\frac{\pi^2}6$, mentre $\sum\frac1{n^3}$ non è nota.

## Come si usa
Si confronta (anche asintoticamente) con $\frac1{n^\alpha}$: $\frac1{n+\sqrt n}\sim\frac1n$ diverge, $\frac1{n^2+\sqrt n}\sim\frac1{n^2}$ converge, $\frac{|\sin n|}{n^2}\le\frac1{n^2}$ converge. Altre somme notevoli dalle serie di Fourier: $\sum_{k\ge0}\frac1{(2k+1)^2}=\frac{\pi^2}8$ e $\sum_{k\ge0}\frac1{(2k+1)^4}=\frac{\pi^4}{96}$.

## Nei corsi
- **Analisi 2** (triennale): lezione del 28/11/2022. Fonte: `triennale/ANNO 2/analisi 2/AII 17 2022 serie numeriche.pdf` (pp. 12-17).

## Prerequisiti
- [[Criterio del confronto integrale]]: ∫_1^∞ x^(-α) dx converge iff α>1

## Porta a
- [[Criterio del confronto per serie]]: confronto con 1/n^α

## Collegati
- [[Teorema di Riemann sul riordinamento]]: Σ(-1)^n/n converge ma Σ1/n diverge
- [[Identità di Parseval]]: somme come Σ 1/(2k+1)^4 = π^4/96
