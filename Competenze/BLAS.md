---
tipo: competenza
area: numerica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [Basic Linear Algebra Subprograms, AXPY, XNPY, FLOP, FLOPS, operazione AXPY]
tags: [competenza, area/numerica]
---

# BLAS

> Insieme standard di funzioni per le operazioni più comuni dell'algebra lineare numerica; il loro conteggio di operazioni (FLOP) misura la velocità di un codice.

## Definizione / enunciato
**BLAS** (Basic Linear Algebra Subprograms) raccoglie le operazioni che ricorrono nel calcolo scientifico, divise in tre livelli:
- **livello 1**: vettore-vettore, complessità $O(n)$;
- **livello 2**: matrice-vettore, complessità $O(n^2)$;
- **livello 3**: matrice-matrice, complessità $O(n^3)$.

Un **FLOP** (FLoating point OPeration) è un'operazione in virgola mobile; la velocità di un codice si misura in FLOPS/s.

## Formule chiave
AXPY (livello 1): $y\leftarrow\alpha x+y$, con $x,y\in\mathbb R^N$, $\alpha\in\mathbb R$.
```cpp
for (size_t i = 0; i < N; i++)
    y[i] = alpha*x[i] + y[i];
```
$N$ iterazioni con 1 moltiplicazione e 1 addizione: **costo $2N$ FLOP**.

XNPY (operazione ipotetica, non BLAS): $y_i\leftarrow x_i^n+y_i$, con un ciclo interno che calcola la potenza: $pow+1$ FLOP per iterazione esterna.

Prodotto di matrici $C=AB$, $c_{ij}=\sum_k a_{ik}b_{kj}$, con tre cicli annidati: **$2N^3$ FLOP**.

## Intuizione
Contare i FLOP non basta a prevedere il tempo. Nelle misure di lezione XNPY, pur facendo più conti, raggiunge più FLOPS/s di AXPY, e la versione parallela di XNPY migliora mentre quella di AXPY no. Il motivo è che la CPU elabora molti più dati di quanti la memoria riesca a fornirne: AXPY legge due numeri per ogni 2 FLOP ed è limitata dalla memoria, mentre in XNPY $x_i$ resta nella memoria veloce dopo la prima lettura.

## Come si usa
Domanda tipica: contare i FLOP di un ciclo (AXPY $2N$, prodotto di matrici $2N^3$) e spiegare perché due codici con lo stesso numero di FLOP hanno tempi diversi. Per esempio, scambiare i cicli `j` e `k` del prodotto di matrici lascia $2N^3$ FLOP ma cambia molto il tempo (vedi la nota sul codice cache-aware).

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): prima lezione di M. Cicuttin ("How performant is my code?"), spiegata nella lezione 2 dopo la cache. Le slide mostrano gli esperimenti senza riportare i tempi misurati. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione1.pdf` (p. 6-14); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 28).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: i FLOP sono il conteggio delle operazioni

## Porta a
- [[Codice cache-aware]]: spiega perché AXPY è limitata dalla memoria

## Collegati
- [[Algoritmo di Strassen]]: riduce l'esponente del prodotto di matrici, operazione di livello 3
