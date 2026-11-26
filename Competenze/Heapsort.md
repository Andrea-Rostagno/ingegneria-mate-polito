---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [heap sort, ordinamento con coda di priorità, ordinamento mediante heap, ordinamento in loco]
tags: [competenza, area/informatica]
---

# Heapsort

> Ordinamento tramite coda di priorità: si inseriscono gli $n$ elementi in uno heap e li si estrae uno alla volta; opera in loco e costa $O(n\log n)$.

## Definizione / enunciato
Ordinamento mediante coda di priorità $PQ$:
1. gli $n$ elementi sono inseriti uno dopo l'altro: $n$ operazioni Enqueue;
2. gli $n$ elementi sono estratti uno dopo l'altro: $n$ operazioni Dequeue.

**Semplificazione** sullo heap implicito: ogni estrazione scambia la radice (il massimo corrente) con l'ultima foglia e riduce lo heap di un elemento; il massimo estratto resta così in fondo all'array, nella sua posizione finale.

## Formule chiave
Ogni Enqueue e ogni Dequeue costa $O(\log n)$ perché lo heap ha altezza $O(\log n)$:
$$n\cdot O(\log n)+n\cdot O(\log n)=O(n\log n).$$
Spazio aggiuntivo: un numero costante di variabili ausiliarie (ordinamento **in loco**).

## Intuizione
È un ordinamento per selezione in cui la selezione del massimo non costa una scansione $O(n)$ ma $O(\log n)$, grazie allo heap. Rispetto al mergesort ha lo stesso costo ma non usa un array ausiliario.

## Come si usa
Lo si cita con il limite inferiore: ogni algoritmo basato su confronti richiede $\Omega(n\log n)$ confronti al caso pessimo, quindi heapsort e mergesort sono asintoticamente ottimi.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi su pile, code e code di priorità. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo02.pdf` (p. 32-33).

## Prerequisiti
- [[Heap binario]]: fornisce Enqueue e Dequeue in O(log n)

## Porta a
- Nessuno nel corso.

## Collegati
- [[Merge sort]]: stesso costo, ma richiede memoria aggiuntiva
- [[Limite inferiore per l'ordinamento per confronti]]: heapsort è asintoticamente ottimo
