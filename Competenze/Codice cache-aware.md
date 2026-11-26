---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [cache-aware, cache-friendly, principio di località, locality principle, cache a mappatura diretta, direct-mapped cache, ordine dei cicli, memory-bound]
tags: [competenza, area/informatica]
---

# Codice cache-aware

> Scrivere algoritmi che accedono alla memoria rispettando il funzionamento della cache, perché la CPU è molto più veloce della memoria principale.

## Definizione / enunciato
CPU e memorie si sono evolute a velocità diverse, da cui le architetture a livelli. Per gestire la differenza di velocità si introduce la **cache**, una memoria piccola ma veloce; la sua introduzione è suggerita dal **principio di località**. Le slide mostrano una **cache a mappatura diretta** (direct-mapped). Conseguenza: gli algoritmi devono essere *cache-aware*, altrimenti sprecano risorse, e per sviluppare algoritmi efficienti serve conoscere le interazioni CPU-memoria e i meccanismi di caching.

## Formule chiave
Ordini di grandezza sulle macchine moderne (slide):

| livello | dimensione | banda |
|---|---|---|
| L1 | 32-128 kB | $O(1\ \text{TB/s})$ |
| L2 | 512 kB | $O(1\ \text{TB/s})$ |
| L3 | 6-128 MB | $O(400\ \text{GB/s})$ |
| memoria principale | 8-128 GB | $O(100\ \text{GB/s})$ |

Prodotto di matrici memorizzate in un vettore con indice `I(i,j)`: ordine `i, j, k`
```cpp
for (size_t i = 0; i < N; i++)
  for (size_t j = 0; j < N; j++)
    for (size_t k = 0; k < N; k++)
      c[I(i,j)] += a[I(i,k)] * b[I(k,j)];
```
contro l'ordine `i, k, j` (cicli `j` e `k` scambiati): stessi $2N^3$ FLOP, tempi molto diversi.

## Intuizione
La CPU può elaborare molti più dati di quanti la memoria possa consegnarne. In AXPY ogni dato è usato una sola volta, quindi il tempo è dominato dal trasferimento dalla memoria; in XNPY il valore $x_i$ resta in memoria veloce dopo la prima lettura. Nel prodotto di matrici la velocità dipende da come si accede alla cache: se l'ordine dei cicli non la usa correttamente il codice è lento.

## Come si usa
Domande tipiche della lezione: perché XNPY è più veloce di AXPY pur essendo più complessa? Perché XNPY parallela migliora e AXPY parallela no? Perché scambiare due cicli nel prodotto di matrici cambia tanto il tempo? Come si sceglie un calcolatore per un problema? La risposta è nel modo in cui funzionano calcolatori e compilatori.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezione 2 di M. Cicuttin, "The cache memory", che risponde alle domande poste nella lezione 1. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 24-28); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione1.pdf` (p. 10-14).

## Prerequisiti
- [[Gerarchia di memoria]]: la cache è il livello vicino alla CPU
- [[BLAS]]: AXPY, XNPY e prodotto di matrici sono i casi studiati

## Porta a
- Nessuno nel corso.

## Collegati
- [[Array in C++]]: elementi contigui, l'indirizzo dell'elemento i è base + i·sizeof(T)
