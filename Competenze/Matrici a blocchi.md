---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["block matrices", "matrice partizionata", "partitioned matrix", "matrice triangolare a blocchi", "matrice diagonale a blocchi"]
tags: [competenza, area/algebra-geometria]
---

# Matrici a blocchi

> Matrici descritte tramite sottomatrici: le operazioni si fanno trattando i blocchi come scalari, se le dimensioni sono compatibili.

## Definizione / enunciato
Una **matrice a blocchi** è descritta in termini di sottomatrici invece che di elementi (la partizione si può fare in molti modi, per esempio per colonne $A=(a_1\ a_2\ \dots\ a_n)$ o per righe). Se numero e dimensioni dei blocchi sono compatibili, somma, prodotto per scalare e prodotto si eseguono trattando i blocchi come scalari; la trasposta si ottiene trasponendo la disposizione e ogni blocco.

Una matrice **triangolare superiore (inferiore) a blocchi** ha blocchi quadrati sulla diagonale e blocchi nulli sotto (sopra); un caso particolare è la **diagonale a blocchi**.

## Formule chiave
$$AB=\begin{pmatrix}A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\\A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}\end{pmatrix}$$
$$\det(A)=\prod_{i=1}^n\det(A_{ii})\quad\text{(triangolare a blocchi)}$$

## Intuizione
Ridurre un prodotto di matrici a somme di prodotti di matrici più piccole è ciò che fanno gli algoritmi dei calcolatori; con matrici sparse si cercano partizioni con molti blocchi nulli.

## Come si usa
Nel corso le partizioni servono nei minimi quadrati: $R=\binom{\tilde R}{O}$, $c=\binom{c_1}{c_2}$ e quindi $\|Ry-c\|_2^2=\|\tilde Ry-c_1\|_2^2+\|c_2\|_2^2$; analogamente nella SVD con $S=\begin{pmatrix}\tilde S&O\\O&O\end{pmatrix}$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 10-16, 87, 96); `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 71).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Minimi quadrati con QR]]: partizione di R e di c = Q^T b
- [[Pseudo-inversa di Moore-Penrose]]: partizione di S, y e c

## Collegati
- [[Fattorizzazione QR]]: fattore R scritto come (R~; O)
- [[Prodotto di matrici]]: il prodotto si esegue anche a blocchi
