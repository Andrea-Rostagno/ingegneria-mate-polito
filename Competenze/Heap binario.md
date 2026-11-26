---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [heap, coda di priorità, priority queue, heaptree, proprietà di heap, heap implicito, max-heap, RiorganizzaHeap]
tags: [competenza, area/informatica]
---

# Heap binario

> Albero binario completo a sinistra in cui ogni nodo ha priorità maggiore o uguale dei figli: realizza una coda di priorità con Enqueue e Dequeue in $O(\log n)$, memorizzato in un array.

## Definizione / enunciato
Una **coda di priorità** associa a ogni elemento una priorità in un insieme totalmente ordinato; ha le operazioni della coda, ma First e Dequeue restituiscono l'elemento di priorità massima. Con una lista non ordinata Enqueue costa $O(1)$ e Dequeue $O(n)$; con una lista ordinata il contrario: costi sbilanciati.
**Heaptree**: albero vuoto, oppure albero in cui (1) la radice ha priorità $\ge$ di quella dei figli e (2) ogni sottoalbero dei figli è un heaptree. La radice contiene il massimo (First in $O(1)$). Uno **heap** è uno heaptree binario e **completo a sinistra**, quindi con $n$ nodi ha altezza $h=O(\log n)$.
- **Enqueue**: nuovo nodo come foglia (mantenendo la completezza), poi scambio con il padre finché la sua priorità è maggiore: al più un confronto per livello, $O(\log n)$.
- **Dequeue**: si restituisce la radice, l'ultima foglia diventa radice e scende scambiandosi con il figlio di priorità massima: al più due confronti per livello, $O(\log n)$.

## Formule chiave
**Heap implicito**: array con la radice in posizione 0 e
$$\text{sinistro}(i)=2i+1,\qquad \text{destro}(i)=2i+2,\qquad \text{padre}(i)=\left\lfloor\frac{i-1}{2}\right\rfloor .$$
Se $i=0$ il padre è `null`; se $2i+1\ge n$ manca il figlio sinistro, se $2i+2\ge n$ il destro.

## Intuizione
La proprietà di heap è "debole": ordina solo lungo i cammini radice-foglia, quanto basta per avere il massimo in cima e ripristinare l'ordine percorrendo un solo cammino, lungo $O(\log n)$.

## Come si usa
Esempio delle slide: Enqueue(22) nello heap implicito [20, 10, 15, 5, 3] (heapSize 5): 22 va in posizione 5, si scambia con il padre 15 (posizione 2) e poi con la radice 20, ottenendo [22, 10, 20, 5, 3, 15]. È la coda di priorità di Heapsort, Dijkstra, Kruskal e Prim.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi su pile e code (code di priorità). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo02.pdf` (p. 19-31).

## Prerequisiti
- [[Coda (struttura dati)]]: stesse operazioni, ordine per priorità
- [[Albero binario]]: lo heap è un albero binario completo a sinistra

## Porta a
- [[Heapsort]]: ordinamento con n Enqueue e n Dequeue
- [[Algoritmo di Dijkstra]]: coda di priorità dei nodi con DecreaseKey
- [[Algoritmo di Kruskal]]: coda di priorità degli archi
- [[Algoritmo di Prim]]: coda di priorità dei nodi fuori dall'albero

## Collegati
- Nessuno.
