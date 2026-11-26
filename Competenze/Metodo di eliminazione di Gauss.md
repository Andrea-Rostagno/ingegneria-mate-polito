---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["Gaussian elimination", "eliminazioni di Gauss", "metodo di Gauss", "moltiplicatori"]
tags: [competenza, area/numerica]
---

# Metodo di eliminazione di Gauss

> Trasforma $Ax=b$ in un sistema triangolare superiore equivalente in $n-1$ passi, poi lo risolve all'indietro; costo $n^3/3$.

## Definizione / enunciato
Il metodo si basa su due proprietà: la soluzione non cambia scambiando due equazioni né sostituendo un'equazione con una sua combinazione lineare con un'altra. Posto $a_{ij}^{(1)}=a_{ij}$, $b_i^{(1)}=b_i$, al passo $k=1,\dots,n-1$ (con pivot $a_{kk}^{(k)}\ne0$, eventualmente dopo uno scambio):
$$m_{ik}=\frac{a_{ik}^{(k)}}{a_{kk}^{(k)}},\quad a_{ij}^{(k+1)}=a_{ij}^{(k)}-m_{ik}a_{kj}^{(k)},\quad b_i^{(k+1)}=b_i^{(k)}-m_{ik}b_k^{(k)},\qquad i,j=k+1,\dots,n.$$
Si ottiene $Ux=\tilde b$ con $U$ triangolare superiore, risolto con
$$x_n=\frac{b_n^{(n)}}{a_{nn}^{(n)}},\qquad x_k=\frac{b_k^{(k)}-\sum_{j=k+1}^na_{kj}^{(k)}x_j}{a_{kk}^{(k)}},\quad k=n-1,\dots,1.$$

## Formule chiave
Costo: $n^3/3$ moltiplicazioni per $n$ grande; $n^3/6$ se $A$ è simmetrica e non si fanno scambi (si genera solo metà degli elementi). Regola di Cramer: ordine $(n+1)!$.

## Intuizione
Si annulla una colonna alla volta sotto la diagonale. I moltiplicatori $m_{ik}$ possono essere memorizzati al posto degli elementi annullati: così il metodo produce gratis la fattorizzazione $A=LU$. Il pivot $a_{kk}^{(k)}$ è non nullo se $A$ è a diagonale dominante per righe o per colonne, o simmetrica definita positiva.

## Come si usa
Esempio delle slide: $A=\begin{pmatrix}2&-1&1&-2\\0&2&0&-1\\1&0&-2&1\\0&2&1&1\end{pmatrix}$, $b=(0,1,0,4)^T$, soluzione $(1,1,1,1)^T$. I passi danno $U$ con diagonale $2,2,-5/2,29/10$ e moltiplicatori $m_{31}=1/2$, $m_{32}=1/4$, $m_{42}=1$, $m_{43}=-2/5$; poi $x_4=1$, $x_3=1$, $x_2=1$, $x_1=1$. Confronto di costo per $n=24$ a $10^{15}$ operazioni al secondo: $\approx4.6\cdot10^{-12}$ s con Gauss, $\approx492$ anni con Cramer. Function `gauss_noscambi(A,b)`.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 43-62).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante): il metodo di eliminazione di Gauss (riduzione a scalini con le tre mosse di Gauss) serve a calcolare rango, soluzioni di sistemi, basi e inverse. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/6_Calcolo_matriciale.pdf` (p. 11-21).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): richiamo sintetico (due fasi, costo circa $n^3/3$, `x = A\b`) dentro il confronto tra metodi diretti (numero finito di passi, modificano $A$, adatti a matrici dense piccole-medie) e metodi iterativi; per matrici sparse grandi il fill-in porta a preferire questi ultimi. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 19, 23-24, 35-39).

## Prerequisiti
- [[Sostituzione all'indietro e in avanti]]: fase finale sul sistema triangolare
- [[Matrice a diagonale dominante]]: garantisce pivot non nulli
- [[Matrice simmetrica definita positiva]]: garantisce pivot non nulli

## Porta a
- [[Pivoting parziale]]: scelta del pivot a ogni passo
- [[Fattorizzazione LU]]: L dei moltiplicatori, U finale

## Collegati
- [[Matrice sparsa]]: il fill-in dell'eliminazione rende preferibili i metodi iterativi (Metodi numerici)
- [[Regola di Cramer]]: alternativa classica dal costo fattoriale
- [[Riduzione a scalini di una matrice]]: stessa riduzione con le mosse di Gauss, nella versione teorica
- [[Soluzioni di un sistema lineare]]: risoluzione numerica dello stesso problema
