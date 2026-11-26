---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["degree of exactness", "degree of precision", "grado di precisione", "grado di esattezza", "formula esatta", "massimo grado di precisione"]
tags: [competenza, area/numerica]
---

# Grado di precisione di una formula di quadratura

> Massimo grado $d$ dei polinomi integrati esattamente da una formula di quadratura; con $n$ nodi reali non può superare $2n-1$.

## Definizione / enunciato
Una formula $\int_a^bw\,g\approx\sum_{j=1}^n\bar w_jg(x_j)$ è **esatta** per $g$ se $R_n(g)=0$. Ha **grado di precisione $d$** se è esatta per ogni polinomio di grado $\le d$ ed esiste un polinomio di grado $d+1$ (tipicamente $x^{d+1}$) per cui non lo è.

- Le formule interpolatorie a $n$ nodi hanno $d\ge n-1$ (per l'unicità dell'interpolante $E_n\equiv0$).
- Newton-Cotes chiuse: $d=n-1$ se $n$ è pari, $d=n$ se $n$ è dispari.

**Teorema.** Non esistono formule con $n$ nodi reali esatte per tutti i polinomi di grado $2n$: il grado massimo è $2n-1$.
*Dimostrazione:* sarebbe esatta per $Q(x)=\prod_{i=1}^n(x-x_i)^2\ge0$, quindi $\int_a^bwQ=\sum_i\bar w_iQ(x_i)=0$, impossibile perché $w$ e $Q$ sono non negativi e non identicamente nulli.

**Teorema.** Le uniche formule interpolatorie pesate con $n$ nodi reali e grado $2n-1$ sono le gaussiane.

## Formule chiave
$$R_n(x^k)=0\ \ (k=0,\dots,d),\qquad R_n(x^{d+1})\ne0,\qquad d\le2n-1 .$$

## Intuizione
Il grado di precisione dice "quanto polinomio" la formula riconosce. Con $n$ nodi si hanno $2n$ parametri liberi (nodi e pesi): si possono far tornare al più $2n$ momenti, cioè i gradi da 0 a $2n-1$.

## Come si usa
Trapezio $d=1$, Simpson $d=3$, Gauss-Legendre a 2 nodi $d=3$: per questo $\int_{-1}^1(x^3+1)dx=2$ viene esatto con entrambe. Una formula composta ha lo stesso grado di precisione della formula base.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 27-35, 58).

## Prerequisiti
- [[Formule di quadratura interpolatorie]]: grado almeno $n-1$ per costruzione
- [[Interpolazione polinomiale]]: unicità dell'interpolante

## Porta a
- [[Formule gaussiane]]: le uniche con grado $2n-1$

## Collegati
- [[Formule di Newton-Cotes]]: grado $n-1$ o $n$
- [[Formula di Simpson]]: grado 3 con 3 nodi
