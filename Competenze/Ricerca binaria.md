---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [binary search, ricerca dicotomica, ricerca in un array ordinato, RicercaBinariaIterativa, RicercaBinariaRicorsiva, paradigma della ricerca binaria]
tags: [competenza, area/informatica]
---

# Ricerca binaria

> Ricerca di una chiave in un array ordinato confrontandola con l'elemento centrale e scartando ogni volta metà del segmento: $O(\log n)$ confronti, asintoticamente ottima.

## Definizione / enunciato
Dato un array ordinato $a$ di $n$ elementi e una chiave $k$:
1. si confronta $k$ con l'elemento centrale del segmento corrente;
2. se $k$ è minore si ripete sul segmento a sinistra, altrimenti su quello a destra;
3. si termina quando $k$ coincide con l'elemento centrale (esito positivo) o il segmento diventa vuoto (esito negativo, indice $-1$).

## Formule chiave
```text
RicercaBinariaIterativa( a, k ):
    sinistra = 0; destra = n-1; trovato = false; indice = -1;
    while ((sinistra <= destra) && (!trovato)) {
        centro = (sinistra+destra)/2;
        if (a[centro] > k)       destra = centro-1;
        else if (a[centro] < k)  sinistra = centro+1;
        else { indice = centro; trovato = true; }
    }
    return indice;
```
All'$i$-esima iterazione restano al più $n/2^i$ elementi; il caso pessimo è $n/2^i=1$, cioè $i=O(\log n)$. Versione ricorsiva: $T(n)\le c_0$ per $n\le1$, $T(n)\le T(n/2)+c$ altrimenti, quindi $O(\log n)$.

## Intuizione
È il modo di cercare in un elenco telefonico: si apre a metà e si scarta la metà sbagliata. Con $n\approx10^6$ elementi bastano poche decine di confronti, contro gli $O(n)$ della ricerca sequenziale.

## Come si usa
**Paradigma** usato anche altrove: per indovinare un intero positivo con domande "$a\le b$?" si chiede se è $\le 2^i$ per $i=1,2,\dots$, si trova il minimo $i$ per cui vale e si dimezza nell'intervallo $[2^{i-1},2^i]$. Nella versione ricorsiva dei lucidi si riconoscono le fasi del divide et impera: caso base (segmento di un elemento), decomposizione (centro), ricorsione e ricombinazione.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, divide et impera. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 11-18).

## Prerequisiti
- [[Divide et impera]]: un solo sotto-problema di metà dimensione
- [[Ricerca lineare]]: senza ordinamento serve la scansione O(n)

## Porta a
- [[Albero binario di ricerca]]: la stessa ricerca su una struttura dinamica
- [[Skip list]]: ricerca simile su liste a più livelli

## Collegati
- [[Limite inferiore per l'ordinamento per confronti]]: il limite Omega(log n) della ricerca la rende ottima
