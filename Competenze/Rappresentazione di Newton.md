---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Newton form", "differenze divise", "divided differences", "polinomio di Newton", "tabella delle differenze divise", "polinomi fondamentali di Newton", "algoritmo di Horner", "Horner's method"]
tags: [competenza, area/numerica]
---

# Rappresentazione di Newton

> Terza forma del polinomio interpolante, costruita con le differenze divise: si aggiorna aggiungendo un nodo alla volta e si valuta con l'algoritmo di Horner.

## Definizione / enunciato
Dati $n+1$ nodi distinti $x_1,\dots,x_{n+1}$:
$$f[x_1,x_2]=\frac{f(x_2)-f(x_1)}{x_2-x_1},\qquad f[x_1,\dots,x_{n+1}]=\frac{f[x_2,\dots,x_{n+1}]-f[x_1,\dots,x_n]}{x_{n+1}-x_1}.$$
Le differenze divise sono invarianti per permutazione degli argomenti. Con argomenti coincidenti: $f[x_1,x_1]=f'(x_1)$ e in generale $f[x_1,\dots,x_1]$ ($k+1$ volte) $=f^{(k)}(x_1)/k!$.

Poiché $p_n(x)=p_{n-1}(x)+f[x_1,\dots,x_{n+1}](x-x_1)\cdots(x-x_n)$ interpola in $x_1,\dots,x_{n+1}$, per l'unicità
$$p_n(x)=f(x_1)+f[x_1,x_2](x-x_1)+\dots+f[x_1,\dots,x_{n+1}](x-x_1)\cdots(x-x_n).$$
I polinomi $1,\ (x-x_1),\dots,(x-x_1)\cdots(x-x_n)$ sono i **polinomi fondamentali di Newton**.

## Formule chiave
- Errore: $E_n(x)=f[x,x_1,\dots,x_{n+1}]\,\omega_{n+1}(x)$, con $\omega_{n+1}(x)=(x-x_1)\cdots(x-x_{n+1})$.
- Tabella triangolare: le differenze sulla diagonale sono i coefficienti; costo $n^2$ somme o sottrazioni e $n^2/2$ divisioni (function `difdiv`).
- **Horner**: $p=a_{n+1}$, poi $p=p(z-x_k)+a_k$ per $k=n,\dots,1$; è l'algoritmo più stabile e meno costoso per valutare un polinomio (function `interp(x,a,z)`).

## Intuizione
Aggiungere un nodo costa un solo termine nuovo: le differenze già calcolate non cambiano. Con tutti i nodi coincidenti in $x_1$ la formula diventa il polinomio di Taylor di grado $n$ in $x_1$.

## Come si usa
Esempio delle slide: dati $(0,1),(1,-1),(2,1),(1/2,2)$. Differenze di ordine 1: $-2,\ 2,\ -2/3$; di ordine 2: $2,\ 16/3$; di ordine 3: $20/3$. Quindi
$$p_3(x)=1-2x+2x(x-1)+\tfrac{20}3x(x-1)(x-2).$$
Confronto in Matlab su 100 punti: la forma con `polyfit` differisce da Newton di $1.7\cdot10^{-14}$, quella di Lagrange di $8.9\cdot10^{-16}$ (Vandermonde mal condizionata).

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 17-30, 40-41); codice `triennale/ANNO 2/metodi numerici/difdiv.m`, `interp.m`.

## Prerequisiti
- [[Interpolazione polinomiale]]: esistenza e unicità del polinomio interpolante
- [[Derivata]]: differenze divise con nodi coincidenti

## Porta a
- [[Metodo delle secanti]]: retta interpolante scritta con $f[x_{n-1},x_n]$

## Collegati
- [[Rappresentazione di Lagrange]]: stesso polinomio in un'altra base
- [[Rappresentazione monomiale del polinomio interpolante]]: terza base, peggio condizionata
- [[Sviluppi di Maclaurin]]: con nodi coincidenti si ottiene il polinomio di Taylor
- [[Convergenza del polinomio interpolante]]: forma dell'errore con le differenze divise
