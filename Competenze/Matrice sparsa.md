---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["sparse matrix", "sparsità di una matrice", "fill-in", "riempimento", "formato sparso", "matrice a banda"]
tags: [competenza, area/numerica]
---

# Matrice sparsa

> Matrice $n\times n$ con un numero di elementi non nulli dell'ordine di $n$: memorizzarne solo i non nulli fa risparmiare memoria e operazioni, ma l'eliminazione di Gauss può distruggere la sparsità.

## Definizione / enunciato
Una matrice $n\times n$ si dice **sparsa** quando il numero dei suoi elementi diversi da zero è di ordine $n$. I sistemi di grandi dimensioni che nascono dalle applicazioni hanno in genere matrici sparse, e per essi i metodi diretti non sono adeguati.

**Fill-in (riempimento).** Il vantaggio del formato sparso si conserva per le matrici **a banda**. Per una matrice sparsa senza struttura particolare l'eliminazione può creare nuovi elementi non nulli nei fattori. Si cerca allora un riordinamento che minimizzi il fill-in, problema difficile in generale (e l'ordinamento può influire sulla stabilità).

## Formule chiave
Comandi Matlab delle slide:
- `sparse(A)` memorizza solo i non nulli;
- `spy(A)` disegna il pattern dei non nulli;
- `nnz(A)` conta i non nulli;
- `spdiags(A,d,m,n)` crea una matrice sparsa $m\times n$ con le colonne di `A` sulle diagonali indicate da `d`.

## Intuizione
La sparsità è un vantaggio solo se l'algoritmo la rispetta: un prodotto matrice-vettore la sfrutta sempre, una fattorizzazione no. Da qui la scelta dei metodi iterativi, che non modificano $A$.

## Come si usa
Esempio delle slide: $A$ di ordine $200\times200$ con $nz=1187$ non nulli; i fattori di $PA=LU$ hanno $nz=9330$ e $nz=10144$, cioè circa 10000 ciascuno, per effetto del fill-in. In alternativa si usano i metodi iterativi e quelli di tipo gradiente, efficienti proprio per matrici sparse e grandi.

## Nei corsi
- **Metodi numerici** (triennale): introduzione ai metodi iterativi per sistemi lineari. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 35-39, 98).
- **Numerical opt** (magistrale): il fill-in di LU e Cholesky su matrici sparse si misura in laboratorio (densità dei fattori al crescere di $n$). È la motivazione dei metodi iterativi e dei precondizionatori incompleti per i problemi di grande scala. Altri usi:
  - una jacobiana sparsa permette di approssimare più colonne alle differenze finite con una sola valutazione;
  - nel [[Metodo del complemento di Schur]] la matrice $AQ^{-1}A^T$ tende a essere densa anche se $A$ e $Q$ sono sparse.

  Fonti: `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§1.7, §2.3); `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 10); codice d'esempio `DellaSanta/labs/lab01_lu_density_analysis.m`, `lab01_sparse_examples.m`.

## Prerequisiti
- [[Fattorizzazione LU]]: il fill-in si vede nei fattori L e U

## Porta a
- [[Metodo iterativo stazionario]]: alternativa ai metodi diretti per matrici sparse e grandi
- [[Precondizionamento]]: Cholesky incompleta, sparsa quanto A

## Collegati
- [[Metodo del gradiente coniugato]]: conveniente per matrici sparse da problemi differenziali
- [[Metodo delle differenze finite]]: produce matrici tridiagonali, cioè a banda
