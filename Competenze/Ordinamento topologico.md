---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [topological sort, topological ordering, DAG, directed acyclic graph, grafo orientato aciclico, OrdinamentoTopologico]
tags: [competenza, area/network]
---

# Ordinamento topologico

> Numerazione dei nodi di un grafo orientato aciclico (DAG) tale che ogni arco va da un nodo con numero minore a uno con numero maggiore; si ottiene con una DFS in $O(n+m)$.

## Definizione / enunciato
Un **DAG** (Directed Acyclic Graph) è un grafo orientato aciclico; si usa quando tra gli oggetti esiste una dipendenza espressa da una relazione d'ordine. Un grafo è ciclico se e solo se le visite BFS o DFS producono almeno un arco all'indietro.
**Ordinamento topologico** di un DAG $G=(V,E)$: una numerazione $\eta:V\to\{0,1,\dots,n-1\}$ dei vertici tale che per ogni arco $(u,v)\in E$ valga $\eta(u)<\eta(v)$.

## Formule chiave
```text
OrdinamentoTopologico( ):
    for (s = 0; s < n; s = s + 1) raggiunto[s] = false;
    contatore = n - 1;
    for (s = 0; s < n; s = s + 1)
        if (!raggiunto[s]) DepthFirstSearchRicorsivaOrdina( s );

DepthFirstSearchRicorsivaOrdina( u ):
    raggiunto[u] = true;
    for (x = listaAdiacenza[u].inizio; x != null; x = x.succ) {
        v = x.dato;
        if (!raggiunto[v]) DepthFirstSearchRicorsivaOrdina( v );
    }
    eta[u] = contatore;
    contatore = contatore - 1;
```
Costo: $O(n+m)$.

## Intuizione
Un nodo riceve il suo numero solo quando la visita di tutti i suoi successori è terminata; poiché si numera all'indietro da $n-1$, ogni nodo ottiene un numero più piccolo di tutti quelli raggiungibili da lui. In un DAG non ci sono archi all'indietro che violerebbero l'ordine.

## Come si usa
Esempio dei lucidi: un DAG sui nodi $a,\dots,f$ (archi $a\to b$, $c\to b$, $e\to c$, $d\to c$, $d\to f$) ordinato come $d, e, f, a, c, b$, con $\eta=0,\dots,5$: disposti in fila, tutti gli archi puntano verso destra.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 34-36).

## Prerequisiti
- [[Visita in profondità]]: la numerazione avviene alla fine della visita ricorsiva
- [[Grafo]]: si applica ai grafi orientati aciclici

## Porta a
- Nessuno nel corso.

## Collegati
- Nessuno.
