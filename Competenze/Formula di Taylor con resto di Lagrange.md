---
tipo: competenza
area: analisi
corsi: [Analisi 1]
livello: [triennale]
aliases: ["Taylor's theorem with Lagrange remainder", "resto di Lagrange", "resto in forma di Lagrange"]
tags: [competenza, area/analisi]
---

# Formula di Taylor con resto di Lagrange

> Approssimazione di $f$ con il polinomio di Taylor di grado $n$ in cui l'errore è scritto esattamente come $\frac{f^{(n+1)}(c)}{(n+1)!}(x-x_0)^{n+1}$ per un $c$ tra $x_0$ e $x$: serve per stime quantitative.

## Definizione / enunciato
**Teorema** (Mazzi Taylor, teor. 0.3; Morandotti, teor. 4.2.22). Sia $f$ derivabile $n$ volte in un intorno $B(x_0)$ e $n+1$ volte in $B(x_0)\setminus\{x_0\}$. Allora per ogni $x\in B(x_0)\setminus\{x_0\}$ esiste $c(x)$ nell'intervallo aperto di estremi $x_0$ e $x$ tale che
$$f(x)=\sum_{k=0}^n\frac{f^{(k)}(x_0)}{k!}(x-x_0)^k+\frac{f^{(n+1)}(c(x))}{(n+1)!}(x-x_0)^{n+1}.$$
Il termine finale $f(x)-P_{n,f}(x)$ è il **resto in forma di Lagrange**. In Morandotti: $R_n(h)=\frac{h^{n+1}}{(n+1)!}f^{(n+1)}(\xi)$ con $\xi$ tra $x_0$ e $x_0+h$.

(Nel PDF di Mazzi, p. 5 controllata sull'immagine, la formula è stampata con un refuso: coefficienti calcolati in $0$ e potenze di $x$, ma resto con $(x-x_0)^{n+1}$. Qui è riportata nella forma centrata in $x_0$, coerente con il resto e con Morandotti.)

## Formule chiave
$$n=0:\quad f(x)=f(x_0)+f'(c)(x-x_0)\qquad\text{(seconda formula dell'incremento finito)}$$

## Intuizione
Il resto di Peano dice solo che l'errore è "piccolo rispetto a $(x-x_0)^n$"; il resto di Lagrange dice quanto vale, a meno di non conoscere $c$. Maggiorando $|f^{(n+1)}|$ si ottiene una stima numerica dell'errore.

## Come si usa
Mazzi: utile per "calcolare il valore di $f(x)$ alla $n$-esima cifra decimale": si sceglie $n$ in modo che $\sup|f^{(n+1)}|\,\frac{|x-x_0|^{n+1}}{(n+1)!}$ sia sotto la tolleranza. La dimostrazione è per induzione a partire da $n=0$, che è Lagrange. Esercizi tipo: esercitazione 21 (2021-22, "sviluppi di Taylor e McLaurin"), esercitazione 16 (2022-23).

## Nei corsi
- **Analisi 1** (triennale): "formula di Taylor con resto di Peano e di Lagrange"; il resto di Peano e gli sviluppi notevoli sono nella nota Sviluppi di Maclaurin. Fonti: `triennale/ANNO 1/analisi 1/Dispense/Dispense Mazzi/Taylor-corretto.pdf` (§0.2, teor. 0.3, p. 5); `triennale/ANNO 1/analisi 1/Dispense/Dispense Morandotti - AM1 (33955823).pdf` (teor. 4.2.22, PDF p. 140).

## Prerequisiti
- [[Teorema di Lagrange]]: è il caso n=0
- [[Sviluppi di Maclaurin]]: stesso polinomio di Taylor

## Porta a
- Nessuno.

## Collegati
- Nessuno.
