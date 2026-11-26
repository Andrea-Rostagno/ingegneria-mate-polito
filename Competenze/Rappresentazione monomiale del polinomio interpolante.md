---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["monomial basis", "base monomiale", "polyfit", "polyval", "sistema di Vandermonde", "matrice di Vandermonde"]
tags: [competenza, area/numerica]
---

# Rappresentazione monomiale del polinomio interpolante

> Scrittura del polinomio interpolante nella base delle potenze: i coefficienti risolvono un sistema di Vandermonde, mal condizionato per $n$ grande.

## Definizione / enunciato
La **rappresentazione monomiale** è
$$p_n(x)=c_1x^n+c_2x^{n-1}+\dots+c_nx+c_{n+1},$$
con i coefficienti fissati dalle condizioni di interpolazione $p_n(x_i)=y_i$. Queste sono $n+1$ equazioni lineari nelle $c_i$:
$$V_n\,c=y,\qquad V_n=\begin{pmatrix}x_1^n&\dots&x_1&1\\ \vdots&&&\vdots\\ x_{n+1}^n&\dots&x_{n+1}&1\end{pmatrix},$$
con $V_n$ **matrice di Vandermonde** ($x_i\ne x_j$).

## Formule chiave
$$V_n c=y,\qquad K_\infty(V_n)\ \text{cresce rapidamente con } n$$
Matlab: `c = polyfit(x,y,n)` calcola i coefficienti, `p = polyval(c,z)` valuta il polinomio nei punti `z`.

## Intuizione
Le potenze $x^n,x^{n-1},\dots$ su nodi vicini sono quasi linearmente dipendenti, quindi le colonne di $V_n$ quasi parallele: il problema dei coefficienti diventa sempre più mal condizionato al crescere di $n$.

## Come si usa
Esempi: interpolazione di $(0,1),(1,-1),(2,1),(1/2,2)$ con `polyfit(x,y,length(x)-1)`; interpolazione di $x\sin x$ su $[0,2\pi]$ con $n=5,11$, dove Matlab avverte "Polynomial is badly conditioned" senza conseguenze visibili nel grafico. Per nodi equispaziati in $[0,1]$: $K_1(V)=180$, $K_\infty(V)=216$ con 4 nodi, $K_1(V)=4.24\cdot10^7$ con 10 nodi. `polyfit(x,y,m)` nasce per i minimi quadrati e coincide con l'interpolazione solo per $m=n$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 11-16); `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 26-28, 32-34).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): `polyfit`/`polyval`, grafico di $K_\infty(V_n)$ per $n=2,\dots,20$ nodi equispaziati in $[0,1]$ (cresce fino a valori tra $10^{10}$ e $10^{20}$); nel confronto delle tre forme sui dati $(0,1),(1,-1),(2,1),(1/2,2)$ la forma monomiale dista $1.7\cdot10^{-14}$ da quella di Newton. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 8-12, 24-26).

## Prerequisiti
- [[Interpolazione polinomiale]]: una base per scrivere il polinomio
- [[Condizionamento di un sistema lineare]]: il sistema di Vandermonde è mal condizionato

## Porta a
- Nessuno.

## Collegati
- [[Problema dei minimi quadrati]]: polyfit nasce per i minimi quadrati
- [[Rappresentazione di Lagrange]]: due basi per lo stesso polinomio
