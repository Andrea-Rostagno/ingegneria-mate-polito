---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Istituzioni algebra]
livello: [triennale]
aliases: ["determinant", "det A", "sviluppo di Laplace", "Laplace expansion", "regola di Sarrus", "complemento algebrico", "cofattore", "minore complementare", "teorema di Binet", "matrice singolare", "matrice regolare"]
tags: [competenza, area/algebra-geometria]
---

# Determinante

> L'unica forma multilineare antisimmetrica delle colonne che vale 1 sulla base canonica: misura il volume (con segno) e decide l'invertibilità di una matrice quadrata.

## Definizione / enunciato
$\det_n$ è l'unica forma $n$-lineare antisimmetrica su $(K^n)^n$ con $\det(e_1,\dots,e_n)=1$; per $A\in K^{n\times n}$, $\det A:=\det(c_1,\dots,c_n)$ (colonne di $A$).

**Calcolo.**
- $2\times2$: $\det A=a_{11}a_{22}-a_{21}a_{12}$.
- $3\times3$, regola di Sarrus (solo per $3\times3$): $a_{11}a_{22}a_{33}+a_{12}a_{23}a_{31}+a_{13}a_{21}a_{32}-a_{31}a_{22}a_{13}-a_{32}a_{23}a_{11}-a_{33}a_{21}a_{12}$.
- $n\times n$, sviluppo di Laplace lungo la riga $i$ (o la colonna $j$), con complemento algebrico $\tilde a_{ij}=(-1)^{i+j}\det(A_{ij})$, dove $A_{ij}$ è la sottomatrice senza riga $i$ e colonna $j$:
$$\det A=\sum_{j=1}^n a_{ij}(-1)^{i+j}\det(A_{ij}).$$
- Matrice triangolare: prodotto degli elementi diagonali.

## Formule chiave
1. Moltiplicando una linea per $k$, il determinante si moltiplica per $k$; una linea nulla dà $\det=0$.
2. $\det(kA)=k^n\det A$.
3. Lo scambio di due linee cambia il segno.
4. Una linea multipla di un'altra parallela (o loro combinazione lineare) dà $\det=0$.
5. $\det A=\det{}^tA$.
6. Sommare a una linea un multiplo di una linea parallela non cambia $\det$.

**Teorema di Binet:** $\det(AB)=\det A\cdot\det B$; in generale invece $\det(A+B)\neq\det A+\det B$.

## Intuizione
In $\mathbb R^2$ e $\mathbb R^3$ $|\det|$ è l'area o il volume del parallelogramma o parallelepipedo delle colonne; si annulla quando le colonne sono dipendenti ("schiacciate"). Le proprietà 3 e 6 permettono di portare la matrice in forma triangolare con le mosse di Gauss, molto più economico di Laplace: con Laplace un $2\times2$ richiede 2 prodotti e un $3\times3$ 6 prodotti di 3 fattori (p. 40), e la complessità cresce rapidamente con $n$ (fattorialmente: $n!$ termini, conseguenza dello schema della slide).

## Come si usa
- Sarrus (p. 37 di `6_Calcolo_matriciale.pdf`): $1\cdot2\cdot2+2\cdot2\cdot1+0-0-0-0=8$.
- Binet (p. 51): $\det A=-2$, $\det B=2$, $\det(AB)=-4$.
- $|A\,{}^tA|=|A|^2\ge0$, nullo se e solo se $|A|=0$ (p. 52).
- Criterio di regolarità: $A$ è invertibile se e solo se $\det A\neq0$. Esempio: $\det\begin{bmatrix}1&-t\\t&4\end{bmatrix}=4+t^2\neq0$ per ogni $t$ (p. 66).

## Nei corsi
- **Algebra lineare** (triennale): calcolo matriciale parte II (slide di S. Mercadante); nel modulo numerico si calcola dalla fattorizzazione $PA=LU$. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/6_Calcolo_matriciale.pdf` (p. 31-56, 66); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §1.5-1.8).
- **Istituzioni algebra** (triennale): per il teorema di Binet, $\det:(GL(n,\mathbb R),\cdot)\to(\mathbb R^*,\cdot)$ è un omomorfismo di gruppi suriettivo e non iniettivo; $\det\mathrm{diag}(a,1,\dots,1)=a$. Il suo nucleo $SL_n(\mathbb R)$ è un sottogruppo normale, perché $\det(BAB^{-1})=\det A$. Fonti: `triennale/ANNO 2/istituzioni/Alg-10-10-22.pdf` (lezione 6, p. 3); `triennale/ANNO 2/istituzioni/Alg-25-10-22.pdf` (lezione 14, p. 7).

## Prerequisiti
- [[Prodotto di matrici]]: teorema di Binet det(AB) = det A det B

## Porta a
- [[Matrice inversa]]: criterio di regolarità e formula dell'aggiunta
- [[Regola di Cramer]]: soluzione come rapporto di determinanti
- [[Classificazione delle coniche]]: i criteri usano |A| e |B|

## Collegati
- [[Omomorfismo di gruppi]]: det è un omomorfismo da $GL_n$ a $\mathbb R^*$
- [[Sottogruppo normale e gruppo quoziente]]: $SL_n=\mathrm{Ker}\det$ è normale in $GL_n$
- [[Prodotto misto]]: il prodotto misto è il determinante dei tre vettori
- [[Prodotto vettoriale]]: le componenti sono minori 2×2
- [[Riduzione a scalini di una matrice]]: le mosse di tipo (c) non cambiano il determinante
- [[Rango di una matrice]]: rango massimo se e solo se det A ≠ 0
- [[Fattorizzazione LU]]: det A dal prodotto dei pivot di U, con il segno di P
- [[Autovalori e autovettori]]: definisce l'equazione caratteristica det(A − λ1) = 0
