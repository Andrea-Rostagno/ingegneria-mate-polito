---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["minimum cost flow", "min cost flow", "flusso di costo minimo", "flusso netto"]
tags: [competenza, area/ottimizzazione]
---

# Flusso a costo minimo

> Instradare a costo minimo flussi dati in ingresso e uscita su una rete con capacità, imponendo la conservazione del flusso in ogni nodo.

## Definizione / enunciato
Costi $c_{ij}$ e capacità $u_{ij}$ sugli archi; $F_j$ flusso netto in uscita dal nodo $j$ (domanda se positivo, ingresso se negativo), rete in equilibrio $\sum_{j\in\mathcal N}F_j=0$:
$$\min\sum_{(i,j)\in\mathcal A}c_{ij}x_{ij}\quad\text{s.t.}\ \sum_{i\in\mathcal N_j^-}x_{ij}=\sum_{i\in\mathcal N_j^+}x_{ji}+F_j\ \ \forall j\in\mathcal N,\qquad0\le x_{ij}\le u_{ij}\ \ \forall(i,j)\in\mathcal A .$$

## Formule chiave
Il primo gruppo di vincoli è la conservazione del flusso in ogni nodo; il secondo è un semplice bound (capacità dell'arco). Si possono aggiungere capacità sui nodi.

## Intuizione
È il modello "contenitore" dei problemi su reti: trasporto e assegnamento sono casi particolari su reti bipartite; la conservazione è la stessa del flusso massimo, ma qui i flussi esterni sono dati e si paga per ogni unità instradata.

## Come si usa
Si scrive un vincolo di bilancio per nodo e un bound per arco. Le matrici di incidenza nodo-arco di questi problemi sono tipicamente totalmente unimodulari, per cui con dati interi si ottengono flussi interi (le slide citano "certi problemi di flusso su reti").

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 27); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 13).

## Prerequisiti
- [[Grafo]]: rete orientata
- [[Programmazione lineare]]: formulazione LP

## Collegati
- [[Flusso massimo]]: stessa conservazione del flusso
- [[Problema del trasporto]]: caso bipartito senza nodi intermedi
- [[Rilassamento continuo]]: interezza dei vertici per totale unimodularità
