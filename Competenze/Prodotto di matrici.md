---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["matrix multiplication", "prodotto righe per colonne", "moltiplicazione matriciale", "matrice trasposta", "trasposizione", "matrice simmetrica", "matrice antisimmetrica", "potenza di una matrice"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto di matrici

> Il prodotto "righe per colonne" $A\in K^{k\times l}$, $B\in K^{l\times n}\mapsto AB\in K^{k\times n}$: associativo e distributivo ma **non** commutativo, e senza legge di annullamento del prodotto.

## Definizione / enunciato
Il prodotto è definito solo se il numero di colonne di $A$ è uguale al numero di righe di $B$. L'elemento di posto $ij$ è la riga $i$ di $A$ per la colonna $j$ di $B$:
$$(AB)_{ij}=r_i(A)\cdot c_j(B)=\sum_{h=1}^{l}a_{ih}b_{hj}.$$
**Trasposta**: $^tA=[a_{ji}]$; $A$ è **simmetrica** se $^tA=A$, **antisimmetrica** se $^tA=-A$ (diagonale nulla).

Proprietà:
- $\mathbb 1_mA=A=A\mathbb 1_n$;
- associatività;
- distributività a destra e a sinistra;
- $(K^{n\times n},+,\cdot)$ è un anello non commutativo.

## Formule chiave
$$^t(AB)={}^tB\,{}^tA,\qquad (A+B)^2=A^2+AB+BA+B^2\neq A^2+2AB+B^2\ \text{in generale}$$
$$AB=0\ \not\Rightarrow\ A=0\ \vee\ B=0,\qquad A^kA^l=A^lA^k,\quad A^0=\mathbb 1_n$$

## Intuizione
Una matrice $A$ è "vocata" ad agire sui vettori colonna: $x\mapsto Ax$. Il prodotto $AB$ corrisponde ad applicare prima $B$ e poi $A$, ed è per questo che l'ordine conta. La caduta dell'annullamento del prodotto spiega perché un'equazione matriciale come $X^2-5X+6\mathbb 1=0$ può avere infinite soluzioni.

## Come si usa
- Esempio (p. 33 di `2_Matrici.pdf`): $A=\begin{bmatrix}1&0\\2&3\end{bmatrix}$, $B=\begin{bmatrix}1&2&3\\4&5&6\end{bmatrix}$. Le entrate di $AB$ sono $1\cdot1+0\cdot4,\dots,2\cdot3+3\cdot6$, cioè $AB=\begin{bmatrix}1&2&3\\14&19&24\end{bmatrix}$ (valori calcolati dai prodotti riportati nella slide). $BA$ invece non è definito.
- Non commutatività: con le matrici elementari $E_{11},E_{12}$ si ha $E_{11}E_{12}=E_{12}$ ma $E_{12}E_{11}=0$ (p. 37).
- Potenze: se $A$ è diagonale, $A^n$ ha sulla diagonale le potenze $n$-esime; se $A=PDP^{-1}$ allora $A^n=PD^nP^{-1}$.

## Nei corsi
- **Algebra lineare** (triennale): calcolo matriciale parte I (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/2_Matrici.pdf` (p. 17-18, 22, 30-44); `Appunti, riassunti e formulari/OPERAZIONI (1).pdf`.

## Prerequisiti
- Nessuno nel corso.

## Porta a
- [[Matrice inversa]]: inversa rispetto al prodotto righe per colonne
- [[Determinante]]: teorema di Binet det(AB) = det A det B
- [[Matrice associata a un'applicazione lineare]]: la composizione corrisponde al prodotto
- [[Riduzione a scalini di una matrice]]: le mosse sono prodotti per matrici elementari

## Collegati
- [[Matrici a blocchi]]: il prodotto si esegue anche a blocchi
- [[Matrice diagonalizzabile]]: A = PDP⁻¹ rende facile calcolare le potenze
