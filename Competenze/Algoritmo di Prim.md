---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [Prim, algoritmo di Jarník-Prim, Jarník-Prim, Jarnik-Prim, Prim's algorithm]
tags: [competenza, area/network]
---

# Algoritmo di Prim

> Costruisce il minimo albero ricoprente partendo da un nodo e aggiungendo ogni volta l'arco più leggero che collega l'albero parziale a un nodo esterno; con una coda di priorità sui nodi costa $O(n\log n+m)$ con heap di Fibonacci.

## Definizione / enunciato
**Algoritmo di Jarník-Prim**: si parte da un qualunque nodo $s$ e si fa crescere l'albero. Se $T$ è la porzione costruita, si sceglie l'arco $(u,v)$ di peso minimo nel taglio tra $u\in T$ e $v\in V-T$; $v$ entra in $T$ e $(u,v)$ in $E'$. Si termina quando tutti i nodi sono in $T$.
Correttezza: ogni arco aggiunto è il più leggero del taglio che separa $T$ da $V-T$, quindi fa parte dell'MST (condizione di taglio); alla fine $|E'|=n-1$ e tutti gli archi dell'albero sono stati trovati.

## Formule chiave
Il punto critico è selezionare in modo efficiente l'arco minimo tra $T$ e $V-T$:
- scansione di tutti gli $m$ archi a ogni passo: $O(nm)$, peggio di Kruskal;
- coda di priorità dei nodi di $V-T$, con peso di $v$ = peso dell'arco più leggero che collega $v$ a $T$: $O(n\log n+m)$ con heap di Fibonacci.
```text
Jarník-Prim( ):
    for (u = 0; u < n; u = u + 1) {
        incluso[u] = false;  pred[u] = u;
        elemento.peso = peso[u] = +∞;  elemento.dato = u;
        PQ.Enqueue( elemento );
    }
    while (!PQ.Empty( )) {
        elemento = PQ.Dequeue( );  v = elemento.dato;
        incluso[v] = true;
        mst.InserisciFondo( <pred[v], v> );
        for (x = listaAdiacenza[v].inizio; x != null; x = x.succ) {
            u = x.dato;
            if (!incluso[u] && x.peso < peso[u]) {
                pred[u] = v;  peso[u] = x.peso;
                PQ.DecreaseKey( u, peso[u] );
            }
        }
    }
```

## Intuizione
È lo stesso schema di Dijkstra: un nodo estratto dalla coda diventa definitivo e si aggiornano i vicini con DecreaseKey. Cambia la chiave: in Prim è il peso del solo arco verso l'albero, in Dijkstra la distanza totale da $s$.

## Come si usa
Esercizio tipico: partire da un nodo dato e tabulare a ogni passo il nodo estratto, il suo predecessore e i pesi aggiornati dei vicini, confrontando l'albero ottenuto con quello di Kruskal.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 50-52).

## Prerequisiti
- [[Minimo albero ricoprente]]: condizione di taglio
- [[Heap binario]]: coda di priorità dei nodi esterni

## Porta a
- Nessuno nel corso.

## Collegati
- [[Algoritmo di Kruskal]]: alternativa basata sugli archi ordinati
- [[Algoritmo di Dijkstra]]: stesso schema con chiave diversa
