---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Matematica discreta]
livello: [triennale]
aliases: ["permutation matrix", "scambio di righe"]
tags: [competenza, area/algebra-geometria]
---

# Matrice di permutazione

> Matrice ottenuta permutando le righe dell'identità: moltiplicando a sinistra scambia righe di una matrice o componenti di un vettore.

## Definizione / enunciato
Una **matrice di permutazione** si ottiene permutando le righe della matrice identità. In ogni riga e in ogni colonna ha un solo elemento non nullo, uguale a 1. Le matrici di permutazione sono **ortogonali**. Il prodotto $PA$ (o $Pb$) realizza scambi di righe di $A$ (o di componenti di $b$).

## Formule chiave
$$P=\begin{pmatrix}0&0&1\\0&1&0\\1&0&0\end{pmatrix}:\quad PA=\begin{pmatrix}a_{31}&a_{32}&a_{33}\\a_{21}&a_{22}&a_{23}\\a_{11}&a_{12}&a_{13}\end{pmatrix},\quad Pb=\begin{pmatrix}b_3\\b_2\\b_1\end{pmatrix}$$
$$\det(P)=(-1)^s,\quad s=\text{numero di scambi}$$

## Intuizione
Permutare non fa calcoli: memorizza solo l'ordine delle righe. Per questo gli scambi del pivoting non aumentano il costo della fattorizzazione.

## Come si usa
In $PA=LU$, $P$ registra gli scambi di equazioni richiesti dal metodo di Gauss; nel calcolo del determinante $\det(A)=(-1)^s\prod u_{ii}$ il segno viene da $\det(P)$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 17-18, 65, 73).
- **Matematica discreta** (triennale): data una permutazione $\sigma$ di $\{1,\dots,n\}$, $P_\sigma$ ha un solo 1 in ogni riga e in ogni colonna, ed è invertibile perché $\sigma$ lo è. Serve per rinominare i nodi di un grafo: se $A$ e $A'$ sono le matrici di adiacenza prima e dopo la rietichettatura con $\sigma$, allora $A'=P_\sigma^tAP_\sigma=P_\sigma^{-1}AP_\sigma$. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 36-37); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.1.5, pp. 120-123; Cor. 6.2.5).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Pivoting parziale]]: gli scambi di righe sono permutazioni
- [[Fattorizzazione LU]]: P registra gli scambi
- [[Matrice di adiacenza]]: rinominare i nodi trasforma $A$ in $P_\sigma^tAP_\sigma$ (Matematica discreta)

## Collegati
- [[Matrice ortogonale]]: caso particolare di matrice ortogonale
