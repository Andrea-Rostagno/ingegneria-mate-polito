---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Newton-Cotes formulas", "formula del rettangolo", "rectangle rule", "formula del punto medio", "midpoint rule", "formula del trapezio", "formule chiuse", "closed Newton-Cotes"]
tags: [competenza, area/numerica]
---

# Formule di Newton-Cotes

> Formule di quadratura interpolatorie con nodi equispaziati: rettangolo, punto medio, trapezio, Simpson. Con molti nodi non convergono, quindi si usano solo con pochi nodi dentro formule composte.

## Definizione / enunciato
Nodi $x_j=a+(j-1)h$, $j=1,\dots,n$, $h=(b-a)/(n-1)$. Esempi:
- rettangolo ($n=1$, $x_1=a$): $\int_a^bf\approx f(a)(b-a)$;
- punto medio ($n=1$, $x_1=\frac{a+b}2$): $\int_a^bf\approx f\!\left(\frac{a+b}2\right)(b-a)$;
- trapezio ($n=2$): $\int_a^bf\approx\frac{b-a}2[f(a)+f(b)]$;
- Simpson ($n=3$): $\int_a^bf\approx\frac{b-a}6\left[f(a)+4f\!\left(\frac{a+b}2\right)+f(b)\right]$.

**Teorema.** Le formule di Newton-Cotes **chiuse** (che includono gli estremi) a $n$ nodi hanno grado di precisione $d=n-1$ se $n$ è pari, $d=n$ se $n$ è dispari: trapezio $d=1$, Simpson $d=3$.

## Formule chiave
$$\int_a^bf=\frac{b-a}2[f(a)+f(b)]-\frac{(b-a)^3}{12}f''(\xi_1),\quad f\in C^2;$$
$$\int_a^bf=\frac{b-a}6\left[f(a)+4f\!\left(\tfrac{a+b}2\right)+f(b)\right]-\frac{(b-a)^5}{2^5\cdot90}f^{(4)}(\xi_2),\quad f\in C^4 .$$

## Intuizione
I nomi di rettangolo e trapezio vengono dal loro significato geometrico. Con molti nodi equispaziati l'interpolante oscilla (Runge) e i pesi esplodono, quindi aumentare $n$ peggiora le cose.

## Come si usa
La convergenza per $n\to\infty$ **non** è garantita neppure per $f\in C^\infty$: i pesi non hanno segno costante e $\sum|w_i|\to\infty$. Perciò non si applicano direttamente; quelle con pochi nodi (trapezio, Simpson) sono le formule base delle formule composte.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 8-11, 30, 43-44).

## Prerequisiti
- [[Formule di quadratura interpolatorie]]: caso dei nodi equispaziati

## Porta a
- [[Formula di Simpson]]: caso $n=3$ e la sua versione composta
- [[Formule di quadratura composte]]: uso pratico delle formule con pochi nodi

## Collegati
- [[Formula dei trapezi]]: versione composta del trapezio
- [[Grado di precisione di una formula di quadratura]]: $n-1$ o $n$ a seconda della parità
- [[Convergenza delle formule di quadratura]]: $\sum|w_i|$ non limitata, quindi nessuna garanzia
- [[Convergenza del polinomio interpolante]]: nodi equispaziati e fenomeno di Runge
