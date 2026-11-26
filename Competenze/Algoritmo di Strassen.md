---
tipo: competenza
area: numerica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [Strassen, Strassen algorithm, moltiplicazione veloce tra matrici, fast matrix multiplication, prodotto di matrici O(n^2.807)]
tags: [competenza, area/numerica]
---

# Algoritmo di Strassen

> Prodotto di matrici $n\times n$ con il divide et impera usando 7 prodotti di blocchi invece di 8: $O(n^{\log_2 7})=O(n^{2{,}807\dots})$ invece di $O(n^3)$.

## Definizione / enunciato
Il prodotto $A\times B$ di matrici $r\times s$ e $s\times t$ è la matrice $C$ $r\times t$ con $C[i][j]=\sum_k A[i][k]B[k][j]$; l'algoritmo immediato (tre cicli) costa $O(r\cdot s\cdot t)$, cioè $O(n^3)$ per matrici quadrate. Estendendo l'idea della moltiplicazione veloce di interi, si scrivono le matrici a blocchi $2\times2$ e si calcolano 7 prodotti invece di 8.

## Formule chiave
$$\begin{bmatrix}a&b\\c&d\end{bmatrix}\times\begin{bmatrix}e&f\\g&h\end{bmatrix}=\begin{bmatrix}ae+bg&af+bh\\ce+dg&cf+dh\end{bmatrix}$$
$$v_0=(b-d)(g+h),\ v_1=(a+d)(e+h),\ v_2=(a-c)(e+f),\ v_3=h(a+b),$$
$$v_4=a(f-h),\ v_5=d(g-e),\ v_6=e(c+d),$$
$$\begin{bmatrix}a&b\\c&d\end{bmatrix}\times\begin{bmatrix}e&f\\g&h\end{bmatrix}=\begin{bmatrix}v_0+v_1-v_3+v_5 & v_3+v_4\\ v_5+v_6 & v_1-v_2+v_4-v_6\end{bmatrix}.$$
$$T(n)=7T(n/2)+O(n^2)\quad\Rightarrow\quad T(n)=O(n^{\log_2 7})=O(n^{2{,}807\dots})\ \ (\text{caso }\gamma>1).$$

## Intuizione
Si risparmia una moltiplicazione a ogni passo ricorsivo, al prezzo di più somme ($O(n^2)$, trascurabili). Congettura riportata nei lucidi: la complessità del problema è $\Theta(n^\epsilon)$ con $2\le\epsilon\le2{,}376\dots$

## Come si usa
Motivazione ("opus libri"): nella grafica 3D ogni vertice $[x,y,z,1]$ di una scena triangolata va moltiplicato per una sequenza di matrici di trasformazione $A_0\times A_1\times\dots\times A_{n-1}$; conviene calcolare prima il prodotto $A$ e poi applicarlo in parallelo a tutti i vertici, come fanno le schede grafiche.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera ("Opus libri: grafica e moltiplicazione di matrici"). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 31-39).

## Prerequisiti
- [[Moltiplicazione veloce di interi]]: stessa idea di risparmiare un prodotto
- [[Teorema fondamentale delle ricorrenze]]: risolve T(n) = 7T(n/2) + O(n^2)

## Porta a
- Nessuno nel corso.

## Collegati
- [[BLAS]]: il prodotto di matrici è l'operazione di livello 3, 2N^3 FLOP
- [[Chiusura transitiva di un grafo]]: si calcola con prodotti di matrici
- [[Trasformazione affine]]: le trasformazioni grafiche sono prodotti di matrici
