---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Simpson's rule", "regola di Simpson", "formula di Cavalieri-Simpson", "Simpson composta", "composite Simpson rule"]
tags: [competenza, area/numerica]
---

# Formula di Simpson

> Formula di Newton-Cotes a 3 nodi ($a$, punto medio, $b$) che integra la parabola interpolante; ha grado di precisione 3 e la sua versione composta ha errore $O(h^4)$.

## Definizione / enunciato
Integrando $p_2(f;x)$ sui nodi $a,\frac{a+b}2,b$:
$$\int_a^bf(x)\,dx\approx\frac{b-a}6\left[f(a)+4f\!\left(\frac{a+b}2\right)+f(b)\right].$$
Grado di precisione $d=3$ (formula chiusa con $n=3$ dispari).

**Composta.** Con $h=\frac{b-a}{2m}$ e $x_i=a+(i-1)h$, $i=1,\dots,2m+1$, si applica Simpson su ogni $[x_{2i-1},x_{2i+1}]$:
$$I^{SS}_m=\frac h3\left[f(x_1)+4\sum_{i=1}^mf(x_{2i})+2\sum_{i=1}^{m-1}f(x_{2i+1})+f(x_{2m+1})\right].$$

## Formule chiave
Se $f\in C^4([a,b])$:
$$R^S_1(f)=-\frac{h^5}{90}f^{(4)}(\xi),\ h=\frac{b-a}2;\qquad R^{SS}_m(f)=-\frac{b-a}{180}h^4f^{(4)}(\bar\xi),\ h=\frac{b-a}{2m}.$$
La composta converge per ogni $f\in C^0$ e $|R^{SS}_m|=O(h^4)$ se $f\in C^4$.

## Intuizione
Simpson è esatta anche sui cubici, un grado in più del previsto: per simmetria l'errore sul termine $x^3$ si annulla. Per questo raddoppiare $m$ divide l'errore circa per 16.

## Come si usa
Esempio delle slide: $\int_{-1}^1(x^3+1)\,dx=2$ è calcolato esattamente: $\frac13(0+4+2)=2$. Su $I=\int_0^1x^3e^x\,dx=6-2e\approx0.5634363430819089$ la composta dà errore $1.16\cdot10^{-4}$ con $m=4$ (9 nodi), $7.31\cdot10^{-6}$ con $m=8$, fino a $4.37\cdot10^{-13}$ con $m=512$ (1025 nodi). Function `simpson(f,a,b,m)`; `quad` di Matlab usa Simpson composta adattiva.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 10, 30, 35, 44, 52-55, 61, 65); codice `triennale/ANNO 2/metodi numerici/simpson.m`.

## Prerequisiti
- [[Formule di Newton-Cotes]]: caso $n=3$
- [[Formule di quadratura composte]]: versione su $m$ sottointervalli

## Porta a
- Nessuno.

## Collegati
- [[Formula dei trapezi]]: errore $O(h^2)$ contro $O(h^4)$
- [[Grado di precisione di una formula di quadratura]]: grado 3 con 3 nodi
- [[Formule gaussiane]]: Gauss-Legendre a 2 nodi calcola esattamente lo stesso integrale di prova
