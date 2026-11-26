---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["NNGP", "nearest neighbor Gaussian process", "processo gaussiano ai vicini più prossimi"]
tags: [competenza, area/statistica]
---

# Nearest neighbour Gaussian process

> Approssimazione di un processo gaussiano per molti punti: nella fattorizzazione sequenziale della densità ogni valore si condiziona solo ai $c$ precedenti più vicini, togliendo archi dal DAG.

## Definizione / enunciato
Per un processo gaussiano osservato $\mathbf w$ vale sempre
$$f(\mathbf w)=f(w_1)\prod_{i=2}^nf(w_i\mid w_{i-1},w_{i-2},\dots,w_1).$$
Se le componenti sono ordinate per vicinanza (punti vicini nello spazio hanno indici vicini) e punti lontani tendono a essere indipendenti,
$$f(w_1)\prod_{i=2}^nf(w_i\mid w_{i-1},\dots,w_1)\approx f(w_1)\prod_{i=2}^nf(w_i\mid w_{i-1},\dots,w_{i-c}),$$
con $c$ piccolo.

## Formule chiave
Il problema che si vuole evitare è il calcolo dell'inversa nella densità completa $f(\mathbf w)=(2\pi)^{-n/2}|\Sigma|^{-1/2}\exp(-\mathbf w'\Sigma^{-1}\mathbf w/2)$, "molto complesso dal punto di vista computazionale"; nell'approssimazione ogni fattore condiziona solo a $c$ valori.

## Intuizione
"Di fatto stiamo rimuovendo archi dal DAG": il grafo del processo diventa sparso e le full conditional si calcolano velocemente. Secondo le slide l'approssimazione è accurata già per $c\approx10$.

## Come si usa
È il metodo che "funziona meglio" tra i rimedi al costo computazionale dei GP e si può implementare in STAN (caso di studio sul sito di STAN citato nelle slide).

## Nei corsi
- **Statistica computazionale** (magistrale): ultima sezione dei processi gaussiani. Fonti: `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 54-55).

## Prerequisiti
- [[Processo gaussiano]]: il processo da approssimare
- [[Rete bayesiana]]: fattorizzazione su un DAG da cui si tolgono archi

## Collegati
- [[Markov random field]]: altra via alla sparsità, con matrice di precisione sparsa
- [[Condizionamento di un vettore gaussiano]]: ogni fattore è una normale condizionata
