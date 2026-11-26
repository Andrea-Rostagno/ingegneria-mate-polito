---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [Dijkstra, Dijkstra's algorithm, cammini minimi con pesi positivi, single source shortest path, DecreaseKey]
tags: [competenza, area/network]
---

# Algoritmo di Dijkstra

> Calcola le distanze e i cammini minimi da un nodo $s$ a tutti gli altri in un grafo con pesi positivi, visitando i nodi in ordine di distanza con una coda di priorità.

## Definizione / enunciato
Dato $G=(V,E,W)$ con $W:E\to\mathbb R^+$ e $s\in V$, si vuole $\delta(s,v)$ per ogni $v$ e, per ogni nodo, il predecessore nel cammino minimo. L'algoritmo è una visita del grafo che usa una **coda di priorità** di coppie $(v,p)$ ordinate per peso $p$:
- **invariante**: $p\ge\delta(s,v)$ per ogni coppia $(v,p)$ nella coda;
- quando $(v,p)$ viene estratta, $p=\delta(s,v)$.

In ogni istante $p$ è la lunghezza del cammino più breve da $s$ a $v$ trovato finora, e viene aggiornato (DecreaseKey) quando se ne trova uno più breve.

## Formule chiave
```text
Dijkstra( s ):
    for (u = 0; u < n; u = u + 1) { pred[u] = -1; dist[u] = +∞; }
    pred[s] = s;  dist[s] = 0;
    for (u = 0; u < n; u = u + 1) {
        elemento.peso = dist[u];  elemento.dato = u;
        PQ.Enqueue( elemento );
    }
    while (!PQ.Empty( )) {
        e = PQ.Dequeue( );  v = e.dato;
        for (x = listaAdiacenza[v].inizio; x != null; x = x.succ) {
            u = x.dato;
            if (dist[u] > dist[v] + x.peso) {
                dist[u] = dist[v] + x.peso;
                pred[u] = v;
                PQ.DecreaseKey( u, dist[u] );
            }
        }
    }
```
Costo $O(t_c+n\,t_e+m\,t_d)$, con $t_c$ costruzione della coda, $t_e$ estrazione del minimo, $t_d$ DecreaseKey:
- heap: $O((n+m)\log n)$;
- lista non ordinata: $O(n^2+m)$;
- heap di Fibonacci: $O(n\log n+m)$.

## Intuizione
Con pesi positivi, il nodo con la stima minima nella coda non può essere raggiunto più in fretta passando per nodi ancora in coda, che hanno stime maggiori: la sua stima è definitiva. Con pesi negativi questo ragionamento cade (si usa Bellman-Ford).

## Come si usa
Esercizio tipico: simulare l'algoritmo su un piccolo grafo (quello dei lucidi ha 5 nodi $v_0,\dots,v_4$) tabulando a ogni estrazione `dist` e `pred`, e ricostruire i cammini risalendo i predecessori.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 38-42).

## Prerequisiti
- [[Problema dei cammini minimi]]: definizioni di distanza e predecessore
- [[Heap binario]]: coda di priorità con DecreaseKey
- [[Lista di adiacenza]]: scansione degli archi uscenti

## Porta a
- Nessuno nel corso.

## Collegati
- [[Algoritmo di Prim]]: stessa struttura, ma con il peso dell'arco invece della distanza da s
