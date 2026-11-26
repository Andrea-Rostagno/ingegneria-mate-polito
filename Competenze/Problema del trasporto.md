---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["transportation problem", "problema classico del trasporto", "trasporto su rete bipartita"]
tags: [competenza, area/ottimizzazione]
---

# Problema del trasporto

> Soddisfare a costo minimo la domanda di destinazioni con le capacità di sorgenti su una rete bipartita; con dati interi l'ottimo LP è intero.

## Definizione / enunciato
Sorgenti $\mathcal S$ con capacità $R_i$, destinazioni $\mathcal D$ con domanda $d_j$ di un singolo prodotto, costo unitario $c_{ij}$ sull'arco $(i,j)$, nessun arco fra due sorgenti o due destinazioni. Variabili $x_{ij}\ge0$:
$$\min\sum_{i\in\mathcal S}\sum_{j\in\mathcal D}c_{ij}x_{ij}\quad\text{s.t.}\ \sum_{i\in\mathcal S}x_{ij}=d_j\ \ \forall j\in\mathcal D,\qquad\sum_{j\in\mathcal D}x_{ij}\le R_i\ \ \forall i\in\mathcal S,\qquad x_{ij}\ge0 .$$

## Formule chiave
Proprietà di interezza: se domanda e capacità sono intere, la soluzione ottima (di vertice) ha valori interi, perché la matrice tecnologica è **totalmente unimodulare**.

## Intuizione
Ogni destinazione deve ricevere esattamente la sua domanda, ogni sorgente non può spedire più della capacità: è un flusso a costo minimo su una rete bipartita, senza nodi intermedi.

## Come si usa
È un LP: si risolve con il simplesso senza vincoli di interezza anche quando le quantità devono essere intere. Aggiungendo costi fissi di apertura delle sorgenti si ottiene il plant location.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 18, 20); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 13).

## Prerequisiti
- [[Grafo]]: rete bipartita sorgenti-destinazioni
- [[Programmazione lineare]]: il modello è un LP

## Porta a
- [[Localizzazione di impianti]]: generalizzazione con costi fissi di apertura

## Collegati
- [[Rilassamento continuo]]: totale unimodularità e vertici interi
- [[Flusso a costo minimo]]: caso particolare su rete bipartita
- [[Problema di assegnamento]]: caso con domande e capacità unitarie
