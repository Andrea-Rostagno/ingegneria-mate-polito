---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [selection sort, SelectionSort, ordinamento per selezione del minimo, problema dell'ordinamento, sorting, scheduling SJF, Shortest Job First]
tags: [competenza, area/informatica]
---

# Ordinamento per selezione

> Algoritmo di ordinamento che al passo $i$ seleziona il minimo tra gli $n-i$ elementi rimanenti e lo porta in posizione $i$; costa $O(n^2)$.

## Definizione / enunciato
**Problema dell'ordinamento**: dato un array di $n$ elementi e una relazione d'ordine $\le$, disporli in modo che risultino ordinati (per esempio in modo crescente). **SelectionSort**: al passo $i$ si seleziona l'elemento di rango $i+1$, cioè il minimo tra i rimanenti $n-i$, e lo si scambia con `a[i]`.

## Formule chiave
```text
SelectionSort( a ):
    for (i = 0; i < n; i = i+1) {
        minimo = a[i];
        indiceMinimo = i;
        for (j = i+1; j < n; j = j+1) {
            if (a[j] < minimo) {
                minimo = a[j];
                indiceMinimo = j;
            }
        }
        a[indiceMinimo] = a[i];
        a[i] = minimo;
    }
```
Al passo $i$ il ciclo interno fa meno di $n-i$ iterazioni di costo costante, quindi $t_i=O(n-i)$ e in totale
$$\sum_{i=0}^{n-1}(n-i)=\sum_{i=1}^{n}i=\frac{n(n+1)}{2}=O(n^2).$$

## Intuizione
Dopo il passo $i$ i primi $i+1$ elementi sono i più piccoli, già in ordine: la parte ordinata cresce di uno a ogni passo, ma trovare il minimo richiede sempre una scansione completa del resto, anche se l'array è già ordinato.

## Come si usa
Motivazione dei lucidi ("opus libri"): lo scheduling della CPU. Con tempi previsti $t_0=21$, $t_1=3$, $t_2=1$, $t_3=2$ ms, l'ordine di arrivo (FCFS) dà tempo medio d'attesa $(0+21+24+25)/4=17{,}5$ ms; eseguendo prima i task più brevi (Shortest Job First, ottimo) si scende a $(0+1+3+6)/4=2{,}5$ ms. Per realizzare SJF bisogna ordinare i tempi: 21, 3, 1, 2 diventa 1, 2, 3, 21.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 1, primo algoritmo analizzato con le regole del caso pessimo. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 9-13).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: analisi dei due cicli annidati
- [[Scambio di elementi]]: il minimo si scambia con a[i]

## Porta a
- Nessuno nel corso.

## Collegati
- [[Ordinamento per inserimento]]: altro algoritmo elementare O(n^2)
- [[Ordinamento di liste]]: in Python si usa sort/sorted
- [[Bubble sort]]: anch'esso porta al passo i il minimo in posizione i
- [[Ricerca del massimo e del minimo]]: il ciclo interno è una ricerca del minimo
