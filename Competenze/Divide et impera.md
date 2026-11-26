---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [divide and conquer, divide-et-impera, decomposizione ricorsione ricombinazione, problema della coppia più vicina, closest pair, ricorsione]
tags: [competenza, area/informatica]
---

# Divide et impera

> Paradigma di progetto di algoritmi in tre fasi: decomporre il problema in pochi sotto-problemi dello stesso tipo e più piccoli, risolverli ricorsivamente, ricombinarne le soluzioni.

## Definizione / enunciato
- **Decomposizione**: si individua un piccolo numero di sotto-problemi dello stesso tipo, ciascuno su un insieme di dati di dimensione inferiore a quello di partenza.
- **Ricorsione**: si risolve ricorsivamente ogni sotto-problema, fino a sotto-problemi abbastanza piccoli da risolverli direttamente (caso base).
- **Ricombinazione**: si combinano le soluzioni dei sotto-problemi in una soluzione del problema di partenza.

Il costo $T(n)$ si descrive con una **relazione di ricorrenza** (caso base più costo delle chiamate ricorsive più costo di decomposizione e ricombinazione), risolta con il teorema fondamentale delle ricorrenze.

## Formule chiave
Esempi del corso e loro ricorrenze:
- MergeSort: $T(n)\le 2T(n/2)+cn$, quindi $O(n\log n)$;
- ricerca binaria: $T(n)\le T(n/2)+c$, quindi $O(\log n)$;
- moltiplicazione veloce di interi: $T(n)\le 3T(n/2)+cn$, quindi $O(n^{\log_2 3})$;
- Strassen: $T(n)=7T(n/2)+O(n^2)$, quindi $O(n^{\log_2 7})$;
- coppia di punti più vicina: $T(n)\le 2T(n/2)+cn$ per $n>2$, quindi $O(n\log n)$ invece di $O(n^2)$.

## Intuizione
Quando la ricombinazione costa poco, dividere a metà fa scendere il costo da quadratico a $n\log n$: ci sono $O(\log n)$ livelli di ricorsione e ciascuno costa $O(n)$. Sugli alberi lo stesso schema dà i "problemi decomponibili" (caso base su `null`, ricorsione sui figli, `Ricombina`).

## Come si usa
**Coppia di punti più vicina** nel piano: se l'insieme ha cardinalità costante si usa la ricerca esaustiva; altrimenti lo si divide in due metà $S$ e $D$ con una retta verticale, si trovano ricorsivamente le distanze minime $d_S$ e $d_D$, e la soluzione è la coppia a distanza $\min\{d_{SD},d_S,d_D\}$, dove $d_{SD}$ è la minima distanza tra un punto di $S$ e uno di $D$.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo "divide et impera" (file `Capitolo03.pdf`); nella scheda "Complessità computazionale, Ricorsione". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 2, 40-42, 47-48).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: il costo si esprime con una ricorrenza

## Porta a
- [[Merge sort]]: dividi a metà, ordina, fondi
- [[Quicksort]]: distribuisci attorno al pivot, ordina, concatena
- [[Ricerca binaria]]: un solo sotto-problema di metà dimensione
- [[Teorema fondamentale delle ricorrenze]]: risolve le ricorrenze del paradigma
- [[Moltiplicazione veloce di interi]]: tre prodotti di metà cifre invece di quattro
- [[Visite di alberi binari]]: problemi decomponibili sugli alberi

## Collegati
- [[Torre di Hanoi]]: altra soluzione ricorsiva classica dello stesso corso
