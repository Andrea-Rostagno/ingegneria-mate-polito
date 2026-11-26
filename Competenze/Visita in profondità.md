---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [DFS, depth-first search, visita DFS, albero DFS, DepthFirstSearch, archi all'indietro, archi in avanti, archi trasversali, back edge, forward edge, cross edge]
tags: [competenza, area/network]
---

# Visita in profondità

> Visita di un grafo che segue ogni cammino il più a fondo possibile prima di tornare indietro, con una pila o con la ricorsione; costa $O(n+m)$ e classifica gli archi rispetto all'albero DFS.

## Definizione / enunciato
La **DFS** (Depth-First Search) si ottiene dalla BFS sostituendo la coda con una **pila**; anche qui si costruisce un albero, l'**albero DFS**. Versione ricorsiva, che visita tutto il grafo:
```text
Scansione( G ):
    for (s = 0; s < n; s = s + 1) raggiunto[s] = false;
    for (s = 0; s < n; s = s + 1)
        if (!raggiunto[s]) DepthFirstSearchRicorsiva( s );

DepthFirstSearchRicorsiva( u ):
    raggiunto[u] = true;
    for (x = listaAdiacenza[u].inizio; x != null; x = x.succ) {
        v = x.dato;
        if (!raggiunto[v]) DepthFirstSearchRicorsiva( v );
    }
```
Nella versione iterativa (`DepthFirstSearch(s)`, identica alla BFS con `P.Push`/`P.Pop` al posto di `Q.Enqueue`/`Q.Dequeue`) i vicini si inseriscono nella pila scorrendo la lista dalla fine (`x = listaAdiacenza[u].fine; ...; x = x.pred`).

## Formule chiave
Costo: $O(n+m)$. Un arco $(u,v)$ che non sta nell'albero DFS è:
- **all'indietro** (back) se $v$ è antenato di $u$ nell'albero;
- **in avanti** (forward) se $v$ è discendente di $u$ ma non figlio;
- **trasversale** (cross) se nessuno dei due è antenato dell'altro.

Nei grafi non orientati ci sono solo archi all'indietro, gli unici che portano a nodi già visitati. Un grafo è **ciclico** se e solo se le visite forniscono almeno un arco all'indietro.

## Intuizione
La pila fa ripartire la visita dal nodo scoperto per ultimo: si scende lungo un cammino finché si può, poi si torna al bivio più recente. La ricorsione usa implicitamente la stessa pila.

## Come si usa
Disegnare l'albero DFS di un grafo a partire da un nodo ed etichettare gli archi non dell'albero come all'indietro, in avanti o trasversali (esempio dei lucidi a partire da 0). La DFS ricorsiva è la base dell'ordinamento topologico.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 28-34).

## Prerequisiti
- [[Pila (struttura dati)]]: sostituisce la coda della BFS
- [[Lista di adiacenza]]: dà i vicini di ogni nodo

## Porta a
- [[Ordinamento topologico]]: numera i nodi al termine della visita ricorsiva

## Collegati
- [[Visita in ampiezza]]: stessa struttura con una coda
- [[Visite di alberi binari]]: la stessa esplorazione ricorsiva, ristretta agli alberi
