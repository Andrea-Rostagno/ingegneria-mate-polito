---
tipo: competenza
area: data-ml
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["k-mediane", "modello k-median", "clustering con mediane", "p-median"]
tags: [competenza, area/data-ml]
---

# K-median

> Formulazione del clustering non gerarchico come LP binario puro: scegliere $K$ oggetti come mediane e assegnare ogni oggetto a una mediana minimizzando la somma delle distanze.

## Definizione / enunciato
Data una matrice simmetrica di distanze $d_{ik}$ fra gli $n$ oggetti, variabili binarie $\gamma_k=1$ se l'oggetto $k$ è mediana di un cluster, $\delta_{ik}=1$ se $i$ è assegnato al cluster di mediana $k$; $q$ limite inferiore sulla dimensione di un cluster:
$$\min\sum_{i\in[n]}\sum_{k\in[n]}d_{ik}\delta_{ik}\quad\text{s.t.}\ \sum_{k\in[n]}\delta_{ik}=1\ (i\in[n]),\ \ \delta_{ik}\le\gamma_k,\ \ \sum_{k\in[n]}\gamma_k=K,\ \ \sum_{i\in[n]}\delta_{ik}\ge q\gamma_k\ (k\in[n]).$$

## Formule chiave
Il vincolo $\delta_{ik}\le\gamma_k$ permette di assegnare solo a oggetti scelti come mediane; $\sum_i\delta_{ik}\ge q\gamma_k$ controlla la cardinalità dei cluster.

## Intuizione
A differenza del k-means, il rappresentante è un oggetto reale (la mediana) e non un centroide: basta una matrice di distanze, quindi funziona anche con variabili categoriche e distanze ad hoc. Ed è un modello di ottimizzazione esatto, non un'euristica, che permette di controllare la dimensione dei cluster.

## Come si usa
Si calcola la matrice delle distanze (normalizzando le feature se su scale diverse), si fissano $K$ e $q$ e si risolve il MILP. È strutturalmente un problema di localizzazione: le mediane sono "impianti aperti" e gli oggetti "clienti" serviti.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 50, 53).

## Prerequisiti
- [[Cluster analysis]]: clustering non gerarchico
- [[Programmazione lineare mista-intera]]: modello binario puro

## Collegati
- [[K-means]]: alternativa euristica con centroidi
- [[Localizzazione di impianti]]: stessa struttura apertura-assegnamento (collegamento concettuale, non nelle slide)
- [[Misure di distanza]]: la matrice $d_{ik}$
