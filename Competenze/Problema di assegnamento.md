---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["assignment problem", "assegnamento", "assegnamento generalizzato", "generalized assignment problem", "matching bipartito", "bipartite matching", "matching a massima cardinalità", "matching a massimo peso"]
tags: [competenza, area/ottimizzazione]
---

# Problema di assegnamento

> Accoppiare a costo minimo gli elementi di due insiemi della stessa cardinalità, uno a uno; varianti: assegnamento generalizzato (job su macchine con capacità) e matching bipartito.

## Definizione / enunciato
Grafo bipartito con insiemi $I$, $J$ di uguale dimensione e costi $c_{ij}$; $x_{ij}=1$ se $i$ è associato a $j$:
$$\min\sum_{i\in I}\sum_{j\in J}c_{ij}x_{ij}\quad\text{s.t.}\ \sum_{i\in I}x_{ij}=1\ \ (j\in J),\qquad\sum_{j\in J}x_{ij}=1\ \ (i\in I),\qquad x_{ij}\in\{0,1\}.$$

## Formule chiave
**Assegnamento generalizzato** (job $j\in J$ su processori $m\in M$, costo $c_{jm}$, tempo $p_{jm}$, capacità $R_m$):
$$\min\sum_{j,m}c_{jm}x_{jm}\ \ \text{s.t.}\ \sum_{m\in M}x_{jm}=1\ (j\in J),\ \ \sum_{j\in J}p_{jm}x_{jm}\le R_m\ (m\in M),\ \ x_{jm}\in\{0,1\}.$$
**Matching bipartito** a massimo peso (lati $\mathcal A$ non necessariamente tutto $I\times J$):
$$\max\sum_{(i,j)\in\mathcal A}p_{ij}x_{ij}\ \ \text{s.t.}\ \sum_{i:(i,j)\in\mathcal A}x_{ij}\le1,\ \ \sum_{j:(i,j)\in\mathcal A}x_{ij}\le1,\ \ x_{ij}\in\{0,1\}.$$

## Intuizione
L'assegnamento è un set partitioning su entrambi i lati; la matrice dei vincoli è totalmente unimodulare, quindi il rilassamento continuo ha già vertici interi. Nel generalizzato i due insiemi hanno cardinalità diverse e un processore riceve più job entro la sua capacità (un vincolo di tipo zaino per macchina). Nel matching ogni vertice è associato al più a un altro e si massimizza peso o cardinalità.

## Come si usa
Il generalizzato modella anche il warehousing (prodotti su locazioni con capacità, costo legato alla facilità di carico/scarico) ed è una sottostruttura del vehicle routing (clienti assegnati ai veicoli). I vincoli di assegnamento compaiono nell'ATSP (un arco entrante e uno uscente per nodo).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 21-24); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 13).

## Prerequisiti
- [[Grafo]]: grafo bipartito
- [[Programmazione lineare mista-intera]]: variabili binarie di assegnamento

## Porta a
- [[Problema del commesso viaggiatore]]: vincoli di assegnamento più eliminazione dei subtour
- [[Vehicle routing problem]]: assegnamento dei clienti ai veicoli

## Collegati
- [[Problema del trasporto]]: caso con domande e capacità unitarie
- [[Set covering, partitioning e packing]]: vincoli di partizione
- [[Rilassamento continuo]]: totale unimodularità
