---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [mergesort, MergeSort, ordinamento per fusione, Fusione, merge, correttezza del mergesort]
tags: [competenza, area/informatica]
---

# Merge sort

> Ordinamento divide et impera: divide l'array a metà, ordina ricorsivamente le due metà e le fonde in tempo lineare; costa $O(n\log n)$, ottimo tra gli ordinamenti per confronti.

## Definizione / enunciato
- **Decomposizione**: se la sequenza ha almeno due elementi, la si divide in due sotto-sequenze di lunghezza uguale (o quasi).
- **Ricorsione**: si ordinano ricorsivamente le due metà.
- **Ricombinazione**: si fondono le due metà ordinate in un'unica sequenza ordinata.

La **Fusione** funziona come con due mazzi di carte ordinati: si confrontano le carte in cima, si toglie la minima, e quando un mazzo si svuota si prendono le rimanenti dell'altro; ogni confronto sistema una carta, quindi costa $O(n)$.

## Formule chiave
```text
MergeSort( a, sinistra, destra ):        Fusione( a, sx, cx, dx ):
    if (sinistra < destra) {                 i = sx; j = cx+1; k = 0;
        centro = (sinistra+destra)/2;        while ((i <= cx) && (j <= dx)) {
        MergeSort( a, sinistra, centro );        if (a[i] <= a[j]) { b[k] = a[i]; i = i+1; }
        MergeSort( a, centro+1, destra );        else { b[k] = a[j]; j = j+1; }
        Fusione( a, sinistra, centro, destra );  k = k+1;
    }                                        }
                                             for ( ; i <= cx; i = i+1, k = k+1) b[k] = a[i];
                                             for ( ; j <= dx; j = j+1, k = k+1) b[k] = a[j];
                                             for (i = sx; i <= dx; i = i+1) a[i] = b[i-sx];
```
$$T(n)\le\begin{cases}c_0 & n\le1\\ 2T(n/2)+cn & \text{altrimenti}\end{cases}\quad\Rightarrow\quad T(n)=O(n\log n).$$

## Intuizione
Ci sono $\log_2 n$ livelli di ricorsione e in ogni livello le fusioni toccano complessivamente $n$ elementi. Lo svantaggio è lo spazio: la Fusione usa un array ausiliario di dimensione $O(q-p+1)$, proibitivo per array molto grandi (l'esempio della dispensa: 10.000.000 di clienti).

## Come si usa
**Correttezza** (dispensa): l'invariante della Fusione dice che l'elemento copiato in $tmp[k]$ è il minimo dei rimanenti, quindi alla fine $tmp$ è ordinato; MergeSort è corretto per **induzione** sulla lunghezza: un array di 1 elemento è ordinato, e se le chiamate su metà ordinano correttamente, la Fusione corretta ordina il tutto. Insieme al limite inferiore $\Omega(n\log n)$ mostra che la complessità del problema dell'ordinamento è $\Theta(n\log n)$.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera, e dispensa sulla correttezza. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 3-10); `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_mergesort.pdf` (p. 1-3).

## Prerequisiti
- [[Divide et impera]]: è l'esempio guida del paradigma
- [[Invariante di ciclo]]: correttezza della Fusione
- [[Teorema fondamentale delle ricorrenze]]: secondo caso, gamma = 1
- [[Principio di induzione]]: correttezza della ricorsione

## Porta a
- Nessuno nel corso.

## Collegati
- [[Quicksort]]: divide et impera con lavoro nella decomposizione invece che nella ricombinazione
- [[Heapsort]]: stesso costo O(n log n), ma in loco
- [[Limite inferiore per l'ordinamento per confronti]]: il mergesort è asintoticamente ottimo
