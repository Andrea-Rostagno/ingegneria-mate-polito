---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["basic feasible solution", "soluzione di base ammissibile", "soluzione basica di un LP", "basic solution", "variabili basiche", "variabili non basiche", "base ammissibile", "vertice degenere", "degenerazione"]
tags: [competenza, area/ottimizzazione]
---

# Soluzione basica ammissibile

> Soluzione di un LP in forma standard ottenuta scegliendo $m$ colonne linearmente indipendenti (una base) e ponendo a zero le altre variabili; se è non negativa corrisponde a un vertice del poliedro.

## Definizione / enunciato
LP in forma standard $\min\mathbf c^T\mathbf x$ s.t. $A\mathbf x=\mathbf b$, $\mathbf x\ge\mathbf 0$, $A\in\mathbb R^{m\times n}$ di rango massimo, $m<n$. Una base $B$ è un insieme di $m$ colonne linearmente indipendenti: le **variabili basiche** $x_j$, $j\in B$, possono essere non nulle, le $n-m$ **non basiche** valgono zero. La soluzione è **basica**; se inoltre $x_j\ge0$ è **basica ammissibile**.

## Formule chiave
$$A_B\mathbf x_B+A_N\mathbf x_N=\mathbf b,\qquad\mathbf x=\begin{pmatrix}\mathbf x_B\\\mathbf x_N\end{pmatrix}=\begin{pmatrix}\bar{\mathbf b}\\\mathbf 0_{n-m}\end{pmatrix},\qquad\bar{\mathbf b}=A_B^{-1}\mathbf b\ge\mathbf 0_m .$$
**Teorema.** Una soluzione basica ammissibile corrisponde a un punto estremo della regione ammissibile.

## Intuizione
Ci sono infiniti modi di scrivere $\mathbf b$ come combinazione lineare delle colonne, ma basta considerare quelli che usano una base di $\mathbb R^m$. Vertici adiacenti hanno basi che differiscono per un solo elemento: ci si sposta portando una variabile fuori base e facendone entrare un'altra.

## Come si usa
Esempio delle slide: con
$$A=\begin{pmatrix}-1&1&1&-1&0\\0&1&0&4&0\\0&0&2&2&1\end{pmatrix},\ \mathbf b=(1,3,1)^T,$$
la base $\{A_1,A_2,A_5\}$ dà $\mathbf x=(2,3,0,0,1)$, ammissibile; la base $\{A_2,A_3,A_5\}$ dà $(0,3,-2,0,5)$, non ammissibile. Con 2 variabili strutturali e 3 slack, in ogni vertice tre variabili sono in base. Casi particolari: vincoli ridondanti (eliminati dal presolve), poliedri illimitati o vuoti, e **degenerazione**: solo $k<m$ variabili basiche positive, per cui a un vertice possono corrispondere più basi.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 3-7).

## Prerequisiti
- [[Programmazione lineare]]: forma standard e slack
- [[Base e dimensione]]: una base di $\mathbb R^m$ fra le colonne di $A$
- [[Poliedro]]: vertici e punti estremi

## Porta a
- [[Metodo del simplesso]]: si muove fra soluzioni basiche ammissibili adiacenti

## Collegati
- [[Rango di una matrice]]: ipotesi di rango massimo
- [[Matrice inversa]]: $\bar{\mathbf b}=A_B^{-1}\mathbf b$
