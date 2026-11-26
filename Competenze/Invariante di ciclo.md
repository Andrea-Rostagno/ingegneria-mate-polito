---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [loop invariant, invariante, correttezza di un algoritmo, dimostrazione di correttezza, inizializzazione mantenimento terminazione, initialization maintenance termination]
tags: [competenza, area/informatica]
---

# Invariante di ciclo

> Proprietà vera prima di ogni iterazione di un ciclo, usata per dimostrare che un algoritmo iterativo è corretto: si verificano inizializzazione, mantenimento e terminazione.

## Definizione / enunciato
Un **invariante di ciclo** è una condizione che vale ogni volta che si esegue il ciclo (o i cicli) interno e che aiuta a dimostrare la correttezza. La dimostrazione ha tre passi:
- **inizializzazione**: l'invariante vale prima della prima iterazione;
- **mantenimento**: se vale prima di un'iterazione, vale anche prima della successiva;
- **terminazione**: quando il ciclo termina, l'invariante dà la proprietà voluta.

Per un algoritmo di ordinamento si deve mostrare che l'array finale $A'$ è una permutazione dell'originale $A$ con $A'[1]\le A'[2]\le\dots\le A'[n]$.

## Formule chiave
Invariante esterno di BubbleSort: "prima dell'iterazione $i$, i più piccoli $i-1$ elementi sono nelle prime $i-1$ posizioni, in ordine". Invariante della Fusione del MergeSort: all'iterazione $k$, con indici $i$ e $j$ nelle due metà,
$$tmp[k]\le a[l]\ \ \forall l\in\{i,\dots,m\},\qquad tmp[k]\le a[l]\ \ \forall l\in\{j,\dots,q\},$$
cioè l'elemento appena copiato è il minimo dei rimanenti.

## Intuizione
È l'induzione applicata alle iterazioni: l'inizializzazione è il caso base, il mantenimento il passo induttivo. Con due cicli annidati prima si dimostra l'invariante interno, poi lo si usa nel mantenimento di quello esterno. Per gli algoritmi ricorsivi si usa direttamente l'induzione sulla dimensione dell'input.

## Come si usa
Le dispense chiedono dimostrazioni "simili per struttura e livello di dettaglio" a quella di BubbleSort: scrivere l'invariante, i tre passi e la conclusione. Il fatto che $A'$ sia una permutazione segue dal fatto che l'algoritmo scambia soltanto elementi.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): due dispense in inglese sulla correttezza di BubbleSort e MergeSort (la seconda di D. Precup, 2014). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_bubblesort.pdf` (p. 1-3); `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_mergesort.pdf` (p. 1).

## Prerequisiti
- [[Principio di induzione]]: lo schema della dimostrazione è induttivo

## Porta a
- [[Bubble sort]]: dimostrazione con due invarianti annidati
- [[Merge sort]]: correttezza della Fusione

## Collegati
- [[Algoritmo]]: dimostrare che l'algoritmo risolve il problema
