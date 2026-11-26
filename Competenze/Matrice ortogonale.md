---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["orthogonal matrix", "Q ortogonale", "A^T A = I", "invarianza della norma 2"]
tags: [competenza, area/algebra-geometria]
---

# Matrice ortogonale

> Matrice quadrata con $A^TA=AA^T=I$: la sua inversa è la trasposta e conserva la norma euclidea.

## Definizione / enunciato
$A\in\mathbb R^{n,n}$ è **ortogonale** se $A^TA=AA^T=I$; quindi $A^{-1}=A^T$. Le colonne sono a due a due ortogonali e di norma unitaria. Le matrici di permutazione sono ortogonali.

## Formule chiave
$$A^{-1}=A^T,\qquad \|Q^Tz\|_2^2=(Q^Tz)^TQ^Tz=z^TQQ^Tz=\|z\|_2^2$$
$$K_2(S)=\|S\|_2\|S^T\|_2=\sqrt{\rho(S^TS)}\sqrt{\rho(SS^T)}=1$$

## Intuizione
Una trasformazione ortogonale è una rotazione o riflessione: non cambia lunghezze, quindi non amplifica gli errori ($K_2=1$). Per questo i metodi basati su $QR$ e $SVD$ sono stabili.

## Come si usa
Nei minimi quadrati si sostituisce $\|Ay-b\|_2$ con $\|Q^T(Ay-b)\|_2$ senza cambiare il minimo. Una matrice reale simmetrica ha $n$ autovettori ortogonali, quindi $V^TAV=D$ con $V$ ortogonale, e il calcolo dei suoi autovalori è ben condizionato. Nella SVD $U$ e $V$ sono ortogonali.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 9, 17, 87, 95); `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 19, 24, 55).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante; R. Notari): ${}^tPP=\mathbb 1$, quindi colonne (e righe) ortonormali e $P^{-1}={}^tP$; $\det P=\pm1$ (ortogonale *speciale* se $+1$); nel caso $2\times2$ le speciali sono le rotazioni $R_\theta=\begin{bmatrix}\cos\theta&-\sin\theta\\ \sin\theta&\cos\theta\end{bmatrix}$, con $R_{\theta_2}R_{\theta_1}=R_{\theta_1+\theta_2}$ e $R_{-\theta}=R_\theta^{-1}$. Un endomorfismo è un'isometria se e solo se la sua matrice in base ortonormale è ortogonale (Notari, Teor. 11). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 40-42); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/euclidei-slides.pdf` (§7-9); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/Diagonalizzazione2_MatOrtog.pdf` (Esercizi 1-4).
- **Programmazione e calcolo scientifico** (triennale): appunti "Affine transformations". Una trasformazione affine $x=A\hat x+c$ che è insieme similitudine ($A^TA=\lambda^2I$) ed equiaffine ($\det A=\pm1$) ha $|A^TA|=|A|^2=1$, quindi $A^TA=I$: è un **moto rigido** (rotazione), che conserva le distanze, $d(x,y)^2=(x-y)\cdot(x-y)=d(\hat x,\hat y)^2$. La matrice di rotazione $Q=[u\ v\ w]$ che porta un piano sul piano $xy$ si costruisce scegliendo tre colonne ortonormali. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1, scansione letta visivamente).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Fattorizzazione QR]]: il fattore Q è ortogonale
- [[Minimi quadrati con QR]]: Q^T non cambia la norma del residuo
- [[Matrice diagonalizzabile]]: le simmetriche si diagonalizzano con V ortogonale
- [[Decomposizione ai valori singolari]]: U e V ortogonali
- [[Endomorfismo simmetrico]]: la matrice diagonalizzante è ortogonale
- [[Riduzione a forma canonica di una conica]]: la rotazione è una matrice ortogonale speciale

## Collegati
- [[Matrice di permutazione]]: caso particolare di matrice ortogonale
- [[Matrice inversa]]: caso speciale con A⁻¹ = ᵗA
- [[Spazio vettoriale euclideo]]: colonne che formano una base ortonormale
