---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["VRP", "CVRP", "capacitated vehicle routing problem", "routing di veicoli", "instradamento di veicoli"]
tags: [competenza, area/ottimizzazione]
---

# Vehicle routing problem

> Generalizzazione del commesso viaggiatore a una flotta di $K$ veicoli con capacità: ogni cliente va assegnato a un veicolo e ogni veicolo percorre un ciclo dal deposito.

## Definizione / enunciato
**CVRP:** nodo 0 deposito ($d_0=0$), clienti $i\in\mathcal N\setminus\{0\}$ con domanda $d_i$, $K$ veicoli identici di capacità $C$. Ogni route prescrive l'insieme di clienti servito da un veicolo e la sequenza. Variabili binarie $x_{ijk}$ (il veicolo $k$ percorre l'arco $(i,j)$) e $y_{ik}$ (il cliente $i$ è assegnato al veicolo $k$).

## Formule chiave
$$\min\sum_{i\in\mathcal N}\sum_{j\in\mathcal N}c_{ij}\sum_{k\in[K]}x_{ijk}$$
$$\text{s.t.}\ \sum_{k\in[K]}y_{ik}=1\ \ (i\in\mathcal N\setminus\{0\}),\qquad\sum_{k\in[K]}y_{0k}=K,$$
$$\sum_{j\in\mathcal N}x_{ijk}=\sum_{j\in\mathcal N}x_{jik}=y_{ik}\ \ (i\in\mathcal N,k\in[K]),\qquad\sum_{i\in\mathcal N}d_iy_{ik}\le C\ \ (k\in[K]),$$
$$\sum_{i}\sum_{j}x_{ijk}\le|S|-1\qquad S\subset\mathcal N\setminus\{0\}:|S|\ge2,\ k\in[K].$$
Nelle slide (controllato sulla pagina renderizzata) le somme dell'ultimo vincolo sono stampate su $i,j\in\mathcal N$: è presumibilmente un refuso, perché per eliminare i subtour vanno intese su $i,j\in\mathcal S$ come nel TSP (correzione mia).

## Intuizione
Il modello combina tre sottostrutture: assegnamento generalizzato dei clienti ai veicoli (capacità come vincolo di tipo zaino), un TSP per ogni veicolo (un arco entrante e uno uscente per ogni nodo assegnato) ed eliminazione dei subtour.

## Come si usa
Esistono diverse formulazioni MILP, più o meno efficienti e adatte a vincoli aggiuntivi (per esempio finestre temporali). Nelle formulazioni basate su colonne ogni route è una colonna generata dinamicamente (column generation).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 35-36); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 6).

## Prerequisiti
- [[Problema del commesso viaggiatore]]: un ciclo per veicolo
- [[Problema di assegnamento]]: assegnamento generalizzato dei clienti

## Collegati
- [[Set covering, partitioning e packing]]: route come colonne
- [[Formulazioni basate su colonne]]: generazione dinamica delle route
