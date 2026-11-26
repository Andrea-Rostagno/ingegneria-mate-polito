---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico, Dinamiche su network, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: [shortest path, cammino minimo, cammini minimi, distanza pesata, peso di un cammino, single source shortest path, all pairs shortest path, algoritmo di Bellman-Ford, Bellman-Ford, rilassamento]
tags: [competenza, area/network]
---

# Problema dei cammini minimi

> Trovare, in un grafo pesato, i cammini di peso minimo tra coppie di nodi; con pesi positivi si usa Dijkstra, con pesi qualunque Bellman-Ford.

## Definizione / enunciato
In un grafo $G=(V,E,W)$ con $W:E\to\mathbb R$ (un grafo non pesato è un grafo pesato con tutti i pesi uguali a 1):
- **cammino** da $u$ a $z$: sequenza $x_0,\dots,x_k$ con $x_0=u$, $x_k=z$ e $(x_i,x_{i+1})\in E$; **ciclo** se $x_0=x_k$; **semplice** se non ripete nodi;
- **lunghezza** di un cammino: numero $k$ di archi; **peso**: $\sum_{i=0}^{k-1}W(x_i,x_{i+1})$;
- **cammino minimo**: cammino di peso minimo tra due nodi; **distanza pesata** $\delta(s,v)$: peso del cammino minimo, $+\infty$ se non esiste alcun cammino.

Varianti: **all pairs** (gli $n(n-1)$ cammini minimi tra tutte le coppie) e **single source** (gli $n-1$ cammini da un nodo $s$ a tutti gli altri); pesi positivi o qualunque. Per ricostruire i cammini basta, per ogni $v$, il nodo `pred[v]` che lo precede nel cammino minimo da $s$.

## Formule chiave
**Bellman-Ford** (pesi qualunque):
```text
Bellman-Ford( s ):
    for (u = 0; u < n; u = u + 1) { pred[u] = -1; dist[u] = +∞; }
    pred[s] = s;  dist[s] = 0;
    for (i = 0; i < n; i = i + 1)
        for (v = 0; v < n; v = v + 1)
            for (x = listaAdiacenza[v].inizio; x != null; x = x.succ) {
                u = x.dato;
                if (dist[u] > dist[v] + x.peso) {
                    dist[u] = dist[v] + x.peso;
                    pred[u] = v;
                }
            }
```
Sono $n$ passate, ognuna su tutti gli $m$ archi: $O(nm)$ (costo ricavato dal codice, non scritto nella slide).

## Intuizione
Il passo comune è il **rilassamento** dell'arco $(v,u)$: se passare da $v$ accorcia il miglior cammino noto verso $u$, si aggiornano `dist[u]` e `pred[u]`. Dijkstra rilassa gli archi in un ordine furbo (una volta per nodo); Bellman-Ford li rilassa tutti, ripetutamente.

## Come si usa
Nei grafi non pesati basta la BFS: la distanza di $v$ da $s$ è la profondità di $v$ nell'albero BFS. Esempio di grafo pesato nei lucidi: le rotte aeree tra aeroporti europei con i prezzi come pesi.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi; nella scheda "ricerca di percorsi tra nodi nei grafi". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 6-7, 37-38, 43).
- **Dinamiche su network** (magistrale): visto come ottimizzazione di flussi su rete con costi lineari $\psi_e(f_e)=b_ef_e$ ($b_e>0$ lunghezza dell'arco) e $\nu=\delta^{(o)}-\delta^{(d)}$; con $\nu=\nu^+-\nu^-$ generico diventa trasporto ottimo. Le condizioni di complementary slackness danno $b_e=\lambda_{\theta(e)}-\lambda_{\kappa(e)}$ sugli archi con $f^*_e>0$ e $b_e\ge\lambda_{\theta(e)}-\lambda_{\kappa(e)}$ altrove; quindi ogni cammino $o$-$d$ ha lunghezza $\ge\lambda_o-\lambda_d$, con uguaglianza sui cammini usati: i moltiplicatori sono potenziali e $\lambda_o-\lambda_d$ è la distanza. La distanza $d_{\mathcal G}(i,j)$ e i cammini geodetici sono definiti in Slides 1. Fonti: `magistrale/Dinamiche su network/slide/Slides-4-NetworkFlowOptimization.pdf` (pp. 5, 20); `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 16, 30-32).
- **Ottimizzazione in condizione di incertezza** (magistrale): punto di partenza della programmazione dinamica: principio di ottimalità di Bellman e ricorsione $V(t)=0$, $V(i)=\min_{j:(i,j)\in A}\{l_{ij}+V(j)\}$ con stima iniziale $V^{(0)}=[+\infty,\dots,+\infty,0]$ aggiornata iterativamente. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 8-9).

## Prerequisiti
- [[Grafo]]: grafi pesati, cammini e cicli
- [[Visita in ampiezza]]: risolve il caso non pesato

## Porta a
- [[Algoritmo di Dijkstra]]: caso single source con pesi positivi
- [[Principio di ottimalità di Bellman]]: sotto-cammini ottimi e ricorsione della programmazione dinamica (Ottimizzazione in condizione di incertezza)

## Collegati
- Nessuno.
- [[Ottimizzazione convessa di flussi su rete]]: il cammino minimo è il caso con costi lineari (Dinamiche su network)
