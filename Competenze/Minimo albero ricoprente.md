---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [minimum spanning tree, MST, minimo albero di ricoprimento, albero ricoprente minimo, condizione di taglio, condizione di ciclo, cut property, cycle property, taglio di un grafo]
tags: [competenza, area/network]
---

# Minimo albero ricoprente

> Albero di ricoprimento di un grafo pesato non orientato e connesso con la minima somma dei pesi degli archi; caratterizzato dalle condizioni di taglio e di ciclo.

## Definizione / enunciato
Dato $G=(V,E)$ non orientato e connesso, un **albero di ricoprimento** è un albero $T=(V,E')$ con $E'\subseteq E$ che collega tutti i nodi. È **minimo** se la somma dei pesi dei suoi archi è la minima tra tutti gli alberi di ricoprimento. Un **taglio** (cut) è un sottoinsieme $C\subseteq E$ di archi la cui rimozione disconnette il grafo.

## Formule chiave
Sia $G=(V,E,W)$ con **pesi tutti distinti** e $T=(V,E')$ un suo minimo albero ricoprente. Per ogni arco $e\in E$:
- **condizione di taglio**: $e\in E'$ se e solo se esiste un taglio di $G$ che contiene $e$ in cui $e$ è l'arco di peso minimo;
- **condizione di ciclo**: $e\notin E'$ se e solo se esiste un ciclo di $G$ che contiene $e$ in cui $e$ è l'arco di peso massimo.

## Intuizione
Ogni taglio deve essere attraversato dall'albero, e conviene farlo con l'arco più leggero; in ogni ciclo un arco è di troppo, e conviene togliere il più pesante. I due algoritmi del corso applicano queste regole in modo diverso: Kruskal usa entrambe sugli archi in ordine di peso, Prim la condizione di taglio tra l'albero parziale e il resto.

## Come si usa
Esercizio tipico: dato un grafo pesato (quello dei lucidi ha 6 nodi $v_0,\dots,v_5$ con pesi come 7.5, 9.5, 8, 4, 5, 7, 8.5, 9), trovare l'MST con Kruskal e con Prim e verificare che gli archi scelti soddisfano la condizione di taglio.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 44-46).

## Prerequisiti
- [[Albero generatore]]: l'MST è un albero generatore di peso minimo
- [[Grafo]]: grafo pesato, non orientato e connesso

## Porta a
- [[Algoritmo di Kruskal]]: archi in ordine crescente di peso
- [[Algoritmo di Prim]]: crescita di un albero da un nodo

## Collegati
- Nessuno.
