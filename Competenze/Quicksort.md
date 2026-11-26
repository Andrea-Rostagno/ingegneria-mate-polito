---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [QuickSort, ordinamento per distribuzione, Distribuzione, partition, pivot, quicksort randomizzato, randomized quicksort, QuickSelect, selezione per distribuzione]
tags: [competenza, area/informatica]
---

# Quicksort

> Ordinamento divide et impera che distribuisce gli elementi attorno a un pivot e ordina ricorsivamente le due parti: $O(n^2)$ al caso pessimo, $O(n\log n)$ in media, e con il pivot casuale il tempo medio non dipende dall'input.

## Definizione / enunciato
- **Decomposizione**: con almeno due elementi si sceglie un **pivot** e si divide la sequenza in elementi $\le$ pivot e $\ge$ pivot (funzione `Distribuzione`, che restituisce il **rango** del pivot).
- **Ricorsione**: si ordinano le due parti.
- **Ricombinazione**: si concatenano (nessun lavoro).

`Distribuzione(a, sx, px, dx)`: porta il pivot in fondo; con due cursori, $i$ da $sx$ verso destra finché `a[i] <= pivot` e $j$ da $dx-1$ verso sinistra finché `a[j] >= pivot`, scambia `a[i]` e `a[j]` e ripete; infine rimette il pivot in posizione $i$. Costo $O(n)$.

## Formule chiave
Con $r$ rango del pivot: $T(n)\le T(r-1)+T(n-r)+cn$.
- Caso pessimo ($r=1$ o $r=n$): $T(n)\le T(n-1)+c'n$, quindi $O(n^2)$, come selezione e inserimento.
- Caso ottimo ($r=n/2$): $O(n\log n)$, come il mergesort.
- **Randomizzato**: `pivot = sinistra + (destra - sinistra) × random()`. Il rango è uniforme; con probabilità $1/2$ cade nelle due zone centrali (al peggio $n/4$ e $3n/4$ elementi). Si ottiene
$$T(n)<T\!\left(\tfrac n4\right)+T\!\left(\tfrac{3n}4\right)+cn,$$
con profondità al più $s=\log_{4/3}n=O(\log n)$ e costo $O(n)$ per livello: $T(n)=O(n\log n)$ in media.

## Intuizione
La casualità serve a sfuggire alle situazioni sfavorevoli: senza di essa un array già ordinato con pivot all'estremo fa scattare il caso pessimo; con il pivot casuale il caso sbilanciato capita raramente qualunque sia l'input. Nella pratica l'algoritmo è veloce.

## Come si usa
**QuickSelect** (selezione per distribuzione): per trovare l'elemento di rango $r$ senza ordinare, dopo `Distribuzione` si prosegue ricorsivamente solo nella parte che contiene la posizione $r-1$ (si restituisce `a[rango]` se `r-1 == rango`); la ricorsione termina con un segmento di un elemento. Con $r=1$ e $r=n$ si ottengono minimo e massimo.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera (versione deterministica e QuickSelect) e cap. 5 "Casualità e ammortamento" (versione randomizzata). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 19-24); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo05.pdf` (p. 2-9).

## Prerequisiti
- [[Divide et impera]]: il lavoro sta nella decomposizione

## Porta a
- Nessuno nel corso.

## Collegati
- [[Merge sort]]: stesso costo nel caso bilanciato, lavoro nella ricombinazione
- [[Ordinamento per inserimento]]: costo simile nel caso pessimo
- [[Skip list]]: altro algoritmo randomizzato del capitolo
- [[Teorema fondamentale delle ricorrenze]]: si applica al caso bilanciato
