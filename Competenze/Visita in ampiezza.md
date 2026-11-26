---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [BFS, breadth-first search, visita BFS, albero BFS, BreadthFirstSearch]
tags: [competenza, area/network]
---

# Visita in ampiezza

> Visita di un grafo che esplora i nodi in ordine crescente di distanza dal nodo di partenza, usando una coda; costa $O(n+m)$ e nei grafi non pesati dà i cammini minimi.

## Definizione / enunciato
La **BFS** (Breadth-First Search) parte da un nodo $s$, esplora i nodi in ordine crescente di distanza da $s$ ed evita di esaminare ripetutamente gli stessi cammini, marcando i nodi raggiunti.

## Formule chiave
```text
BreadthFirstSearch( s ):
    for (u = 0; u < n; u = u + 1)
        raggiunto[u] = false;
    Q.Enqueue( s );
    while (!Q.Empty( )) {
        u = Q.Dequeue( );
        if (!raggiunto[u]) {
            raggiunto[u] = true;
            for (x = listaAdiacenza[u].inizio; x != null; x = x.succ) {
                v = x.dato;
                Q.Enqueue( v );
            }
        }
    }
```
Costo: $O(n+m)$.

## Intuizione
Gli archi che portano a nodi non ancora visitati formano l'**albero BFS**, la cui forma dipende dall'ordine di visita (per costruirlo la coda contiene archi invece che vertici). L'albero BFS è uno spanning tree di $G$; se $G$ non è pesato, la distanza minima di $v$ da $s$ è la profondità di $v$ nell'albero BFS.

## Come si usa
Disegnare l'albero BFS di un grafo dato a partire da un nodo (esempio dei lucidi a partire da 0) e confrontarlo con l'albero DFS. Un grafo è ciclico se e solo se le visite producono almeno un arco all'indietro.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi; nella scheda "attraversamento di alberi e grafi". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 25-27, 32, 34).

## Prerequisiti
- [[Coda (struttura dati)]]: decide l'ordine di visita
- [[Lista di adiacenza]]: dà i vicini in O(grado)

## Porta a
- [[Problema dei cammini minimi]]: nei grafi non pesati la BFS li risolve

## Collegati
- [[Visita in profondità]]: si ottiene sostituendo la coda con una pila
- [[Albero generatore]]: l'albero BFS è uno spanning tree del grafo
