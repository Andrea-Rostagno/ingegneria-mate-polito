---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["matrix of a linear map", "matrice rappresentativa", "M^C_B(f)", "matrice associata", "matrice della composizione", "corrispondenza tra applicazioni lineari e matrici"]
tags: [competenza, area/algebra-geometria]
---

# Matrice associata a un'applicazione lineare

> Fissate le basi $B$ del dominio e $C$ del codominio, $f$ è rappresentata dalla matrice $M^C_B(f)$ che ha per colonne le componenti in $C$ delle immagini dei vettori di $B$.

## Definizione / enunciato
Sia $f:U_m\to V_n$ lineare, con $B=(b_1,\dots,b_m)$ base di $U_m$ e $C=(c_1,\dots,c_n)$ base di $V_n$:
$$M^C_B(f):=\big[\,[f(b_1)]_C\ \cdots\ [f(b_m)]_C\,\big]\in K^{n\times m}.$$
Allora $[f(u)]_C=M^C_B(f)\,[u]_B$. Per $K^m\to K^n$ con le basi canoniche: $f(x)=Fx$, dove le colonne di $F$ sono $f(e_i)$.

**Composizione.** La matrice di $f\circ g$ è il prodotto: $M_{f\circ g}=F\,G$.

**Endomorfismi e cambio di base.** Le matrici associate allo stesso endomorfismo rispetto a basi diverse sono **simili**: $M_{B'}=P^{-1}M_BP$, con $P$ matrice di passaggio. L'isomorfismo $\mathrm{End}(V_n)\simeq K^{n\times n}$ dipende dalla base.

## Formule chiave
$$[f(u)]_C=M^C_B(f)[u]_B,\qquad M_{f\circ g}=M_f\,M_g,\qquad \mathrm{rank}(f)=\mathrm{rank}(F),\quad \mathrm{Im}(f)=\mathrm{Col}(F),\quad \mathrm{Ker}(f)=\mathrm{Ker}(F)$$

## Intuizione
La matrice è la "carta d'identità" di $f$ in un certo sistema di coordinate. Le righe dicono com'è fatta l'immagine del vettore generico, le colonne dove vanno i vettori di base. Cambiando le basi cambia la matrice ma non l'applicazione: per questo rango, determinante e autovalori di un endomorfismo non dipendono dalla base.

## Come si usa
- Esempio (p. 33 di `11_Linear_Mappings.pdf`): $F=\begin{bmatrix}2&4&0\\3&1&2\end{bmatrix}$ rappresenta $(x,y,z)\mapsto(2x+4y,\ 3x+y+2z)$; infatti $f(e_1)=(2,3)$, $f(e_2)=(4,1)$, $f(e_3)=(0,2)$.
- Spazi astratti (p. 42): per $f:\mathbb R^3\to\mathbb R^{2\times2}$ basta scegliere un ordinamento delle entrate (una base di $\mathbb R^{2\times2}$) e scrivere le immagini come colonne.
- Endomorfismi di spazi di matrici o polinomi: si passa a $K^n$ tramite le componenti e si lavora sulla matrice.

## Nei corsi
- **Algebra lineare** (triennale): applicazioni lineari e diagonalizzazione (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/11_Linear_Mappings.pdf` (p. 25-43); `Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 2-3); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §6.3, §7.1.1); `Appunti, riassunti e formulari/ApplicazioniLineari2_CAMBIdiBASE.pdf`.

## Prerequisiti
- [[Applicazione lineare]]: f(x) = Fx nelle basi scelte
- [[Prodotto di matrici]]: la composizione corrisponde al prodotto

## Porta a
- [[Nucleo e immagine]]: Ker f = Ker F, Im f = Col F
- [[Matrici simili]]: stesso endomorfismo in basi diverse

## Collegati
- [[Cambiamento di base]]: la matrice dipende dalle basi scelte
