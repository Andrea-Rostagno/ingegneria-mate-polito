---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [adjacency list, liste di adiacenza, listaAdiacenza, rappresentazione di grafi con liste]
tags: [competenza, area/network]
---

# Lista di adiacenza

> Rappresentazione di un grafo in cui a ogni nodo $i$ è associata la lista dei nodi adiacenti: spazio $\Theta(n+m)$, adatta ai grafi sparsi e alle visite.

## Definizione / enunciato
Per ogni nodo $i$ si memorizza `listaAdiacenza[i]`, la lista dei nodi adiacenti a $i$: vuota se il nodo ha grado zero, altrimenti una **lista doppia** con riferimenti all'elemento iniziale e a quello finale. Nei grafi pesati ogni elemento porta anche il peso dell'arco (`x.peso`).

## Formule chiave
- spazio $\Theta(n+m)$, con $n$ nodi e $m$ archi;
- $O(\min\{\text{grado}(i),\text{grado}(j)\})$ per stabilire se $(i,j)\in E$;
- $O(\text{grado}(i))$ per scandire gli archi incidenti al nodo $i$:
```text
x = listaAdiacenza[i].inizio;
while (x != null) {
    j = x.dato;
    print (i,j);
    print x.peso (se previsto);
    x = x.succ;
}
```

## Intuizione
La matrice di adiacenza paga $n^2$ celle anche quando gli archi sono pochi e impiega $O(n)$ per scandire i vicini di un nodo; la lista paga solo gli archi presenti. Per questo le visite BFS e DFS costano $O(n+m)$ con le liste.

## Come si usa
Esempio dei lucidi: il grafo dei voli tra aeroporti (SXF, CRL, DUB, STN, MAD, TRF, BVA, CIA, NYO) rappresentato sia con matrice sia con liste. Gli algoritmi del capitolo (BFS, DFS, ordinamento topologico, Dijkstra, Bellman-Ford, Kruskal, Prim) scorrono tutti `listaAdiacenza[u]`.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi (`Capitolo07.pdf`). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 17-18).

## Prerequisiti
- [[Grafo]]: struttura da rappresentare
- [[Lista concatenata]]: una lista doppia per ogni nodo

## Porta a
- [[Visita in ampiezza]]: scandisce i vicini nella coda
- [[Visita in profondità]]: scandisce i vicini ricorsivamente
- [[Algoritmo di Dijkstra]]: rilassa gli archi uscenti da ogni nodo estratto

## Collegati
- [[Matrice di adiacenza]]: spazio Theta(n^2) e test di adiacenza O(1)
