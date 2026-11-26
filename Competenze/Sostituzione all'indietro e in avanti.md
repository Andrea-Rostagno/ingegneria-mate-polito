---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["back substitution", "forward substitution", "sistemi triangolari", "triangular systems", "sostituzione all'indietro", "sostituzione in avanti"]
tags: [competenza, area/numerica]
---

# Sostituzione all'indietro e in avanti

> Risoluzione diretta di sistemi triangolari (e diagonali) con costo $n^2/2$: l'ultimo passo di tutti i metodi diretti.

## Definizione / enunciato
Se $A$ è **diagonale** con $a_{ii}\ne0$: $x_i=b_i/a_{ii}$ ($n$ divisioni).

Se $A$ è **triangolare superiore** ($a_{ij}=0$ per $i>j$, $a_{ii}\ne0$), la **sostituzione all'indietro** ricava $x_n$ dall'ultima equazione, poi $x_{n-1}$, …, $x_1$:
$$x_n=\frac{b_n}{a_{nn}},\qquad x_i=\frac{b_i-\sum_{j=i+1}^na_{ij}x_j}{a_{ii}},\quad i=n-1,\dots,1.$$
Se $A$ è **triangolare inferiore** ($a_{ij}=0$ per $i<j$), la **sostituzione in avanti**:
$$x_1=\frac{b_1}{a_{11}},\qquad x_i=\frac{b_i-\sum_{j=1}^{i-1}a_{ij}x_j}{a_{ii}},\quad i=2,\dots,n.$$

## Formule chiave
Costo: essenzialmente $n^2/2$ moltiplicazioni (e addizioni) per $n$ grande, per entrambi gli algoritmi.

## Intuizione
In un sistema triangolare ogni equazione introduce una sola incognita nuova: basta risolverle nell'ordine giusto. Per questo tutti i metodi diretti riducono il problema a sistemi triangolari.

## Come si usa
Function Matlab delle slide `indietro(A,b)` e `avanti(A,b)`; la somma interna si vettorizza con `s = A(i,i+1:n)*x(i+1:n)` (libreria BLAS). Usi: fase finale di Gauss ($Ux=\tilde b$), coppia $Ly=Pb$, $Ux=y$ dopo $PA=LU$, coppia $R^Ty=b$, $Rx=y$ dopo Cholesky, sistema $\tilde Rx=c_1$ nei minimi quadrati con QR.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 35-42).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): schemi $x_n=b_n/a_{nn}$, $x_k=(b_k-\sum_{j>k}a_{kj}x_j)/a_{kk}$ (e l'analogo in avanti), costo circa $n^2/2$ flop ciascuno (flop = coppia somma-prodotto), più il caso diagonale ($n$ divisioni). Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 18-22).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Metodo di eliminazione di Gauss]]: fase finale sul sistema triangolare
- [[Fattorizzazione LU]]: risolve Ly = Pb e Ux = y
- [[Fattorizzazione di Cholesky]]: risolve R^T y = b e Rx = y
- [[Minimi quadrati con QR]]: risolve R~ x = c1

## Collegati
- Nessuno.
