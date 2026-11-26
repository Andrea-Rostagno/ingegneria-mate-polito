---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [insertion sort, InsertionSort, ordinamento per inserzione]
tags: [competenza, area/informatica]
---

# Ordinamento per inserimento

> Algoritmo di ordinamento che al passo $i$ inserisce `a[i]` al posto giusto tra i primi $i$ elementi già ordinati; costa $O(n^2)$ al caso pessimo ma può richiedere solo $O(n)$ operazioni.

## Definizione / enunciato
**InsertionSort**: al passo $i$ l'elemento in posizione $i$ viene inserito nella posizione corretta tra i primi $i$ elementi, già ordinati, spostando di un posto a destra quelli più grandi.

## Formule chiave
```text
InsertionSort( a ):
    for (i = 0; i < n; i = i+1) {
        prossimo = a[i];
        j = i;
        while ((j > 0) && (a[j-1] > prossimo)) {
            a[j] = a[j-1];
            j = j-1;
        }
        a[j] = prossimo;
    }
```
Il ciclo while richiede al massimo $i+1$ iterazioni di costo costante: $t_i=O(i+1)$ e in totale
$$\sum_{i=0}^{n-1}(i+1)=\frac{n(n+1)}{2}=O(n^2).$$

## Intuizione
È il modo in cui si ordinano le carte in mano: si prende la prossima e la si fa scivolare a sinistra finché trova il posto. A differenza della selezione, il while si ferma appena trova un elemento non maggiore.

## Come si usa
Domanda dei lucidi: "può richiedere $O(n)$ operazioni, quando?". Se l'array è già ordinato la guardia `a[j-1] > prossimo` è subito falsa e ogni passo costa $O(1)$ (risposta ricavata dal codice, non scritta nella slide). Il quicksort nel caso pessimo ha un costo simile a quello di selezione e inserimento.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 1. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 14-15).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: regole per il ciclo while

## Porta a
- Nessuno nel corso.

## Collegati
- [[Ordinamento per selezione]]: stesso costo O(n^2) al caso pessimo
- [[Quicksort]]: nel caso pessimo ha un costo simile
