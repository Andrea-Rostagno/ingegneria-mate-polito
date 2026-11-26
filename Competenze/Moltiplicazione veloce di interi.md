---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [algoritmo di Karatsuba, Karatsuba, MoltiplicazioneVeloce, fast integer multiplication, moltiplicazione di interi divide et impera]
tags: [competenza, area/informatica]
---

# Moltiplicazione veloce di interi

> Moltiplicazione di due interi di $n$ cifre con il divide et impera usando tre prodotti di numeri di $n/2$ cifre invece di quattro: $O(n^{\log_2 3})=O(n^{1{,}585})$ invece di $O(n^2)$.

## Definizione / enunciato
Interi rappresentati come array di cifre. La somma con propagazione del riporto costa $O(n)$ ed è ottima; il prodotto elementare costa $O(n^2)$. Ogni intero $w$ di $n$ cifre si scrive $w=10^{n/2}w_s+w_d$, con $w_s$ le $n/2$ cifre più significative e $w_d$ le meno significative.

## Formule chiave
$$xy=(10^{n/2}x_s+x_d)(10^{n/2}y_s+y_d)=10^n x_sy_s+10^{n/2}(x_sy_d+x_dy_s)+x_dy_d .$$
Con quattro prodotti ricorsivi: $T(n)\le4T(n/2)+cn$, $\alpha=4$, $\beta=2$, $\gamma=2$, quindi $O(n^{\log_2 4})=O(n^2)$: nessun miglioramento. Il termine centrale si ottiene però dagli altri due:
$$x_sy_d+x_dy_s=x_sy_s+x_dy_d-(x_s-x_d)(y_s-y_d),$$
quindi bastano **tre** moltiplicazioni:
$$T(n)\le\begin{cases}c_0 & n\le1\\ 3T(n/2)+cn & \text{altrimenti}\end{cases}\quad\Rightarrow\quad O(n^{\log_2 3})=O(n^{1{,}585}).$$

## Intuizione
Moltiplicare per $10^k$ costa solo uno spostamento di $k$ cifre con zeri a destra, e le somme costano $O(n)$: decomposizione e ricombinazione costano $cn$. Risparmiare una moltiplicazione a ogni livello della ricorsione abbassa l'esponente, perché il numero di foglie passa da $4^{\log_2 n}=n^2$ a $3^{\log_2 n}=n^{\log_2 3}$.

## Come si usa
Lo pseudocodice `MoltiplicazioneVeloce(x, y, n)` dei lucidi calcola $p_1=x_sy_s$, $p_2=x_dy_d$ e $p_3$ dal prodotto delle differenze (con le cifre di segno in posizione 0), e ricompone il prodotto di $2n$ cifre con somme e spostamenti. La stessa idea, applicata alle matrici, dà l'algoritmo di Strassen.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 25-30).

## Prerequisiti
- [[Divide et impera]]: decomposizione in metà delle cifre
- [[Teorema fondamentale delle ricorrenze]]: terzo caso con gamma = 3/2

## Porta a
- [[Algoritmo di Strassen]]: la stessa idea estesa alle matrici

## Collegati
- Nessuno.
