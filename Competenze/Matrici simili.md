---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Matematica discreta]
livello: [triennale]
aliases: ["similar matrices", "similitudine", "similarity transformation", "S^{-1} A S"]
tags: [competenza, area/algebra-geometria]
---

# Matrici simili

> Due matrici legate da $S^{-1}AS=B$ con $S$ non singolare: hanno gli stessi autovalori.

## Definizione / enunciato
$A$ e $B$ di ordine $n$ sono **simili** se esiste $S$ non singolare con
$$S^{-1}AS=B.$$
**Teorema.** Matrici simili hanno gli stessi autovalori.

*Dimostrazione.* Se $Ax=\lambda x$, allora $S^{-1}Ax=\lambda S^{-1}x$, cioè $S^{-1}AS\,S^{-1}x=\lambda S^{-1}x$: quindi $Bz=\lambda z$ con $z=S^{-1}x$.

## Formule chiave
$$B=S^{-1}AS,\quad Ax=\lambda x\ \Rightarrow\ Bz=\lambda z,\ z=S^{-1}x$$

## Intuizione
Una similitudine è un cambio di base: descrive la stessa applicazione lineare in coordinate diverse, quindi conserva gli autovalori e trasforma gli autovettori. I metodi per calcolare tutti gli autovalori costruiscono matrici simili sempre più semplici.

## Come si usa
Nel metodo QR, $A_{k+1}=R_kQ_k=Q_k^TA_kQ_k$ è simile ad $A_k$; per transitività tutte le $A_k$ sono simili ad $A$ e ne conservano gli autovalori.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 15-16, 29, 47).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante; dispensa C. Sisto): matrici simili hanno gli stessi autovalori, lo stesso rango e lo stesso determinante; le matrici associate allo stesso endomorfismo rispetto a basi diverse sono simili ($B=P^{-1}AP$ con $P$ matrice di passaggio). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 26); `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (§7.1.1).
- **Matematica discreta** (triennale): due matrici di adiacenza dello stesso grafo, con etichettature diverse, sono simili tramite una matrice di permutazione. Per questo lo spettro è una proprietà del grafo. Tilli richiama nel §6.1.2 similitudine, determinante, traccia e rango come invarianti. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 36-38); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.1.2, pp. 112-114).

## Prerequisiti
- [[Autovalori e autovettori]]: la similitudine conserva gli autovalori
- [[Cambiamento di base]]: matrici dello stesso endomorfismo in basi diverse
- [[Matrice associata a un'applicazione lineare]]: stesso endomorfismo in basi diverse

## Porta a
- [[Matrice diagonalizzabile]]: simile a una matrice diagonale
- [[Metodo QR per autovalori]]: le A_k sono simili ad A

## Collegati
- Nessuno.
- [[Matrice di adiacenza]]: rietichettare i nodi di un grafo dà una matrice simile (Matematica discreta)
