---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [BubbleSort, ordinamento a bolle, bubblesort, correttezza del bubble sort]
tags: [competenza, area/informatica]
---

# Bubble sort

> Algoritmo di ordinamento che scorre l'array da destra a sinistra scambiando coppie adiacenti fuori ordine, così il minimo della parte non ordinata "risale" in posizione $i$ a ogni passata.

## Definizione / enunciato
```text
BUBBLE-SORT(A)
1  for i = 1 to A.length-1
2      for j = A.length downto i+1
3          if A[j] < A[j-1]
4              exchange A[j] with A[j-1]
```
(indici da 1, come nella dispensa).

## Formule chiave
**Invariante interno** (righe 2-4): prima di ogni iterazione del for interno, il minimo di $A[i\dots A.\text{length}]$ si trova in $A[i\dots j]$.
- Inizializzazione: $j=A.\text{length}$, banale.
- Mantenimento, tre casi: minimo in $A[i\dots j-2]$ (lo scambio non lo tocca); minimo in $A[j-1]$ (nessuno scambio); minimo in $A[j]$ (scambio, il minimo passa in $A[j-1]$; se $A[j]=A[j-1]$ non si scambia ma il valore è lo stesso). In ogni caso il minimo è in $A[i\dots j-1]$, e decrementando $j$ l'invariante vale.
- Terminazione: il ciclo finisce prima di $j=i$, quindi il minimo di $A[i\dots]$ è $A[i]$.

**Invariante esterno** (righe 1-4): all'inizio di ogni iterazione i più piccoli $i-1$ elementi sono nelle prime $i-1$ posizioni, in ordine. Il ciclo interno non tocca $A[1\dots i-1]$ (perché $j\ge i+1$) e mette in $A[i]$ il minimo di $A[i\dots]$, che è l'$i$-esimo più piccolo. Alla fine $i=A.\text{length}$: i primi $n-1$ sono in ordine e l'ultimo è il massimo, quindi l'array è ordinato.

## Intuizione
La prima passata porta il minimo in $A[1]$, la seconda il secondo minimo in $A[2]$ senza disturbare il primo, e così via. Ogni scambio lascia a sinistra il più piccolo dei due, quindi il minimo, una volta raggiunto dalla scansione, viene spinto fino in fondo a sinistra.

## Come si usa
Modello per le dimostrazioni di correttezza: scrivere prima l'intuizione (facoltativa), poi i due invarianti con inizializzazione, mantenimento e terminazione, e concludere che $A'$ è una permutazione ordinata di $A$ (l'algoritmo fa solo scambi).

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): dispensa in inglese "proof of the correctness of Bubble Sort, as discussed in lecture". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_bubblesort.pdf` (p. 1-3).

## Prerequisiti
- [[Invariante di ciclo]]: la correttezza si dimostra con due invarianti
- [[Scambio di elementi]]: l'unica operazione che modifica l'array

## Porta a
- Nessuno nel corso.

## Collegati
- [[Ordinamento per selezione]]: anch'esso fissa al passo i l'i-esimo minimo
