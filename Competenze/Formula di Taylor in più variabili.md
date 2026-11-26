---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["multivariable Taylor formula", "sviluppo di Taylor al secondo ordine", "matrice hessiana", "Hessian matrix", "H_f", "polinomio di Taylor di grado 2"]
tags: [competenza, area/analisi]
---

# Formula di Taylor in più variabili

> Per $f\in C^2$ lo sviluppo al secondo ordine aggiunge al piano tangente la forma quadratica associata alla matrice hessiana.

## Definizione / enunciato
Per $f\in C^2$ la **matrice hessiana** è $H_f(P)=\Big(\frac{\partial^2f}{\partial x_i\partial x_j}(P)\Big)_{i,j=1}^n$ (anche $D^2f$, $\nabla^2f$); è simmetrica per Schwarz.

**Teorema (sviluppo al II ordine).** Se $f$ è $C^2$ in un intorno di $P_0$,
$$f(P)=f(P_0)+\nabla f(P_0)\cdot(P-P_0)+\tfrac12(P-P_0)^tH_f(P_0)(P-P_0)+o(\|P-P_0\|^2)\quad(P\to P_0).$$

## Formule chiave
In due variabili, con derivate calcolate in $(x_0,y_0)$:
$$f(x,y)=f+f_x(x-x_0)+f_y(y-y_0)+\tfrac12\big(f_{xx}(x-x_0)^2+2f_{xy}(x-x_0)(y-y_0)+f_{yy}(y-y_0)^2\big)+o\big((x-x_0)^2+(y-y_0)^2\big).$$
Ogni matrice simmetrica $A$ definisce la forma quadratica $\sum a_{ij}x_ix_j$; ad esempio $ax^2+bxy+cy^2$ corrisponde a $\begin{pmatrix}a&b/2\\b/2&c\end{pmatrix}$.

## Intuizione
Il polinomio $T_{P_0}$ di grado 2 è l'unico che approssima $f$ con errore $o(\|P-P_0\|^2)$: passa per il punto, ha lo stesso gradiente e la stessa hessiana in $P_0$ (esercizio della lezione). Il "delirio del prof": zoomando sul grafico di una $f\in C^1$ si vede una retta (o un piano); zoomando sullo scarto $\frac1{\lambda^2}[f(\lambda x)-f'(0)\lambda x]$ si vede la parabola $\frac{f''(0)}2x^2$, cioè la derivata seconda.

## Come si usa
Serve a classificare i punti critici: dove $\nabla f=0$ il comportamento locale è dato dal segno della parte quadratica.

## Nei corsi
- **Analisi 2** (triennale): lezioni del 10/10 (obiettivo) e 12/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 04 2022 differenziabilita e derivate successive.pdf` (pp. 16-17); `triennale/ANNO 2/analisi 2/AII 05 2022 taylor II max min.pdf` (pp. 1-4, 10-12).

## Prerequisiti
- [[Differenziabilità in più variabili]]: sviluppo al primo ordine
- [[Teorema di Schwarz]]: l'hessiana è simmetrica
- [[Sviluppi di Maclaurin]]: sviluppo al secondo ordine in una variabile
- [[Forma quadratica]]: parte quadratica dello sviluppo

## Porta a
- [[Classificazione dei punti critici]]: test dell'hessiana
- [[Massa efficace]]: sviluppo al secondo ordine di E(k)

## Collegati
- Nessuno.
