---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [master theorem, teorema principale, teorema delle ricorrenze, relazione di ricorrenza, recurrence relation]
tags: [competenza, area/informatica]
---

# Teorema fondamentale delle ricorrenze

> Dà l'ordine di grandezza della soluzione delle ricorrenze del divide et impera, $T(n)\le\alpha T(n/\beta)+cf(n)$, confrontando il lavoro dei sotto-problemi con quello della ricombinazione.

## Definizione / enunciato
Sia
$$T(n)\le\begin{cases}c_0 & n\le n_0\\ \alpha\,T(n/\beta)+c\,f(n) & \text{altrimenti}\end{cases}$$
con $f(n)$ non decrescente, $\alpha\ge1$, $\beta>1$, $n_0,c_0,c>0$. Se esistono due costanti positive $\gamma$ e $n'_0$ tali che $\alpha f(n/\beta)=\gamma f(n)$ per ogni $n\ge n'_0$, allora per ogni $n$:
1. $T(n)=O(f(n))$ se $\gamma<1$;
2. $T(n)=O(f(n)\log_\beta n)$ se $\gamma=1$;
3. $T(n)=O(n^{\log_\beta\alpha})$ se $\gamma>1$.

## Formule chiave
Applicazioni dei lucidi:
- MergeSort: $\alpha=2$, $\beta=2$, $f(n)=n$, $\alpha f(n/\beta)=2(n/2)=n=f(n)$, $\gamma=1$, quindi $O(n\log n)$;
- moltiplicazione di interi con 4 prodotti: $\alpha=4$, $\beta=2$, $4(n/2)=2n$, $\gamma=2$, quindi $O(n^{\log_2 4})=O(n^2)$;
- con 3 prodotti: $\alpha=3$, $\gamma=3/2$, quindi $O(n^{\log_2 3})=O(n^{1{,}585})$;
- Strassen: $T(n)=7T(n/2)+O(n^2)$, caso $\gamma>1$, quindi $O(n^{\log_2 7})=O(n^{2{,}807\dots})$.

## Intuizione
$\gamma$ misura come cambia il lavoro passando da un livello della ricorsione al successivo. Se diminuisce ($\gamma<1$) domina la radice, $f(n)$; se è costante ($\gamma=1$) ogni livello costa uguale e i livelli sono $\log_\beta n$; se cresce ($\gamma>1$) dominano le foglie, che sono $n^{\log_\beta\alpha}$.

## Come si usa
Si legge $\alpha$ (numero di sotto-problemi), $\beta$ (fattore di riduzione) e $f$ (costo di decomposizione e ricombinazione), si calcola $\gamma$ e si sceglie il caso. In alternativa si "srotola" la ricorrenza, come nella dispensa sul MergeSort: $T(n)=2^{\log_2 n}T(1)+cn\log_2 n=O(n\log n)$.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera; srotolamento nella dispensa sulla correttezza del MergeSort. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 8-9, 27, 30, 39); `triennale/ANNO 3/Programmazione e calcolo scientifico/correttezza_mergesort.pdf` (p. 2-3).

## Prerequisiti
- [[Divide et impera]]: genera ricorrenze di questa forma
- [[Simboli di Landau]]: la soluzione è data in notazione O

## Porta a
- [[Merge sort]]: secondo caso, O(n log n)
- [[Moltiplicazione veloce di interi]]: terzo caso, O(n^1,585)
- [[Algoritmo di Strassen]]: terzo caso, O(n^2,807)

## Collegati
- [[Successione definita per ricorrenza]]: T(n) è definita da una ricorrenza
- [[Quicksort]]: la ricorrenza del caso pessimo non ha la forma del teorema
