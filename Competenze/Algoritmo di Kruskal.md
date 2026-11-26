---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [Kruskal, Kruskal's algorithm, algoritmo di Kruskal per l'MST]
tags: [competenza, area/network]
---

# Algoritmo di Kruskal

> Costruisce il minimo albero ricoprente considerando gli archi in ordine crescente di peso e aggiungendo ogni arco che non chiude un ciclo; costo $O((m+n)\log n)$.

## Definizione / enunciato
Si considerano gli archi uno dopo l'altro in ordine crescente di peso. Per l'arco $(u,v)$:
1. se $u$ e $v$ sono già collegati in $G'=(V,E')$, l'arco chiude un ciclo, di cui è il più pesante: **non** appartiene all'MST (condizione di ciclo);
2. altrimenti esiste un taglio che separa $u$ da $v$, e $(u,v)$, essendo il primo arco di quel taglio considerato, è il più leggero: appartiene all'MST e va messo in $E'$ (condizione di taglio).

Si parte da $n$ componenti connesse (i nodi isolati), ciascuna con il proprio MST vuoto, e le si unisce.

## Formule chiave
Strutture: una coda di priorità $PQ$ con gli archi e i loro pesi; una struttura di **partizione** dei nodi (appartenenza e unione); un array `set` che associa a ogni nodo il suo elemento nella partizione; una lista doppia `mst` per gli archi scelti.
```text
Kruskal( ):
    for (u = 0; u < n; u = u + 1) {
        for (x = listaAdiacenza[u].inizio; x != null; x = x.succ) {
            v = x.dato;
            elemento.dato = <u, v>;  elemento.peso = x.peso;
            PQ.Enqueue( elemento );
        }
        set[u] = NuovoNodo( );  Crea( set[u] );
    }
    while (!PQ.Empty( )) {
        elemento = PQ.Dequeue( );  <u,v> = elemento.dato;
        if (!Appartieni( set[u], set[v] )) {
            Unisci( set[u], set[v] );
            mst.InserisciFondo( <u,v> );
        }
    }
```
Costo: $O((m+n)\log n)$.

## Intuizione
L'algoritmo mantiene una foresta e la fa crescere unendo alberi con l'arco più leggero disponibile; la struttura union-find risponde in $O(1)$ alla domanda "chiude un ciclo?" e unisce le componenti in tempo ammortizzato logaritmico.

## Come si usa
Esercizio tipico: elencare gli archi in ordine di peso e decidere per ciascuno se entra (estremi in componenti diverse) o è scartato (chiude un ciclo), finché l'albero ha $n-1$ archi.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 47-49).

## Prerequisiti
- [[Minimo albero ricoprente]]: condizioni di taglio e di ciclo
- [[Union-find]]: Appartieni e Unisci sulle componenti
- [[Heap binario]]: coda di priorità degli archi

## Porta a
- Nessuno nel corso.

## Collegati
- [[Algoritmo di Prim]]: alternativa che fa crescere un solo albero
