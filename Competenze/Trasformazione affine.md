---
tipo: competenza
area: algebra-geometria
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [affine transformation, affinità, similitudine, similarity, trasformazione equiaffine, equiaffine, moto rigido, rigid motion, coordinate omogenee, matrici di trasformazione in grafica]
tags: [competenza, area/algebra-geometria]
---

# Trasformazione affine

> Mappa $x=A\hat x+c$ con $A$ invertibile; i casi particolari conservano angoli (similitudini), volumi (equiaffini) o distanze (moti rigidi). In grafica si scrive come prodotto per matrici in coordinate omogenee.

## Definizione / enunciato
Una **trasformazione affine** è la funzione geometrica
$$\mathcal T:\ x=A\hat x+c,\qquad \forall\,\hat x,x\in\mathbb E^d,\quad \det(A)\ne0,\ A\in\mathbb R^{d\times d},\ c\in\mathbb R^d .$$
La condizione $\det(A)\ne0$ garantisce l'esistenza dell'inversa $\mathcal T^{-1}:\ \hat x=A^{-1}(x-c)$.
Casi particolari:
1. **similitudine**: $A^TA=\lambda^2I$; conserva il rapporto delle distanze ($\|x\|_2^2=\lambda^2\|\hat x\|_2^2$ se $c=0$) e gli angoli ($\cos\theta=\cos\hat\theta$);
2. **equiaffine**: $\det(A)=\pm1$; conserva il volume, perché $\det([x_1,\dots,x_n])=\det(A)\det([\hat x_1,\dots,\hat x_n])$;
3. **moto rigido** (rotazioni): sia similitudine sia equiaffine, quindi $|A^TA|=|A|^2=1$ e $A^TA=I$; conserva le distanze, $d(x,y)^2=(x-y)\cdot(x-y)=d(\hat x,\hat y)^2$.

## Formule chiave
Esempio degli appunti: il triangolo $T_{P_0P_1P_2}$ è l'immagine del triangolo di riferimento $\hat T$:
$$x=\alpha_0P_2+\alpha_1P_1+(1-\alpha_0-\alpha_1)P_0=P_0+\big[P_1-P_0,\ P_2-P_0\big]\begin{pmatrix}\alpha_1\\\alpha_0\end{pmatrix},$$
con $c=P_0$, $A=[P_1-P_0,\ P_2-P_0]$, $\hat x=(\hat x_1,\hat x_2)^T$, $\hat x_1\in[0,1]$, $\hat x_2\in[0,1-\hat x_1]$.
In grafica (lucidi Crescenzi) i vertici sono vettori riga $[x,y,1]$ (in 3D $[x,y,z,1]$, la dimensione in più serve per la traslazione):
$$[x,y,1]\begin{bmatrix}\alpha&0&0\\0&\beta&0\\0&0&1\end{bmatrix}=[\alpha x,\beta y,1],\quad
[x,y,1]\begin{bmatrix}\cos\Phi&\sin\Phi&0\\-\sin\Phi&\cos\Phi&0\\0&0&1\end{bmatrix}=[x',y',1],\quad
[x,y,1]\begin{bmatrix}1&0&0\\0&1&0\\\Delta x&\Delta y&1\end{bmatrix}=[x+\Delta x,y+\Delta y,1].$$

## Intuizione
La parte lineare $A$ deforma (scala, ruota, inclina), il vettore $c$ trasla. Con la coordinata omogenea anche la traslazione diventa un prodotto per matrice, così una sequenza di trasformazioni si riduce a un solo prodotto $A^*=A_0\times A_1\times\dots\times A_{n-1}$ applicato a tutti i vertici.

## Come si usa
Mappare il triangolo di riferimento su un triangolo qualsiasi (e tornare indietro con $\mathcal T^{-1}$); classificare una trasformazione data verificando $A^TA$ e $\det A$; comporre scala, rotazione e traslazione in grafica.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): appunti manoscritti "Affine transformations" (scansione OneNote del 27/4/2023 letta visivamente) e lucidi Crescenzi ("Opus libri: grafica e moltiplicazione di matrici"); nella scheda "Trasformazioni affini, sistemi di riferimento 2D/3D". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1, parte iniziale); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 31-36).

## Prerequisiti
- [[Coordinate baricentriche]]: il triangolo come immagine del triangolo di riferimento
- [[Determinante]]: invertibilità e conservazione del volume

## Porta a
- [[Rotazione di un piano sul piano xy]]: moto rigido costruito esplicitamente

## Collegati
- [[Matrice ortogonale]]: i moti rigidi hanno A^T A = I
- [[Algoritmo di Strassen]]: le trasformazioni grafiche richiedono prodotti di matrici
