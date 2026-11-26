---
tipo: competenza
area: algebra-geometria
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [matrice di rotazione, rotation matrix, rotazione di un piano, mappare un piano sul piano xy, cambio di sistema di riferimento 3D-2D]
tags: [competenza, area/algebra-geometria]
---

# Rotazione di un piano sul piano xy

> Costruzione della matrice di rotazione $Q$ che porta un piano per l'origine di normale $n$ sul piano $xy$, con colonne $u$, $v$, $w=n$ ortonormali ricavate da prodotti vettoriali.

## Definizione / enunciato
Problema 5 degli appunti: dato un piano $\pi$ con normale $n$ (unitaria), trovare il moto rigido (matrice di rotazione) che mappa i punti di $\pi$ sul piano $xy$ ($\hat\pi$). Si cerca $\mathcal T:\ x=Q\hat x+c$; richiedendo che il piano passi per l'origine, $\pi:\ n^Tx=0$, si ha $c=0$. Si cercano tre vettori ortonormali $(u,v,w)$ con
$$Qi=u,\quad Qj=v,\quad Qk=w\quad\Longrightarrow\quad Q=\big[\,u\ \ v\ \ w\,\big],$$
dove $(i,j,k)$ è la base ortonormale di $\mathbb R^3$.

## Formule chiave
- $w=n$, così $Qk=n$;
- $u$ è il versore tangente della retta intersezione tra $\pi$ e $\hat\pi$ ($n^Tx=0$, $k^Tx=0$):
$$u=\frac{n\times k}{\|n\times k\|_2}=\frac{1}{\sqrt{n_x^2+n_y^2}}\,(n_y,\,-n_x,\,0);$$
- $v$ completa la terna ortogonale:
$$v=\frac{u\times n}{\|u\times n\|_2}=\left(-\frac{n_xn_z}{\sqrt{n_x^2+n_y^2}},\ -\frac{n_yn_z}{\sqrt{n_x^2+n_y^2}},\ \sqrt{n_x^2+n_y^2}\right),\quad\|u\times n\|_2=1 .$$
Negli appunti la matrice finale è scritta
$$Q=\begin{pmatrix}n_y & -\frac{n_xn_z}{\sqrt{n_x^2+n_y^2}} & n_x\\ -n_x & -\frac{n_yn_z}{\sqrt{n_x^2+n_y^2}} & n_y\\ 0 & \sqrt{n_x^2+n_y^2} & n_z\end{pmatrix},$$
con la prima colonna senza il fattore $1/\sqrt{n_x^2+n_y^2}$ di $u$ (da verificare sul PDF).

## Intuizione
Una rotazione è determinata da dove manda la base canonica: basta trovare una base ortonormale adattata al piano, con il terzo vettore lungo la normale. $u$ sta sia in $\pi$ sia in $xy$, quindi è il "cardine" attorno a cui si ruota. Poiché $Q$ è ortogonale, l'inversa è $Q^T$, quindi le coordinate nel piano $xy$ di un punto $x\in\pi$ sono $\hat x=Q^Tx$ (passaggio non scritto negli appunti).

## Come si usa
Esercizio sul modello degli appunti: data la normale $n$, calcolare $u=n\times k/\|n\times k\|$, $v=u\times n/\|u\times n\|$, scrivere $Q=[u\ v\ n]$ e verificare che le colonne siano ortonormali. Serve a riportare in 2D, sul piano $xy$, figure che giacciono in un piano dello spazio, dove valgono i problemi piani (posizione di un punto, area).

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): appunti manoscritti "Affine transformations" (scansione OneNote letta visivamente), problema 5; nella scheda "Matrici di rotazione". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/COMPUTATIONAL_GEOMETRY_3.pdf` (p. 1, parte finale).

## Prerequisiti
- [[Trasformazione affine]]: è un moto rigido x = Q x̂
- [[Matrice ortogonale]]: Q^T Q = I, inversa uguale alla trasposta
- [[Prodotto vettoriale]]: costruisce u e v ortogonali

## Porta a
- Nessuno nel corso.

## Collegati
- [[Posizioni relative di rette e piani]]: u è la direzione dell'intersezione di due piani
- [[Equazione del piano]]: piano per l'origine in forma implicita n^T x = 0
