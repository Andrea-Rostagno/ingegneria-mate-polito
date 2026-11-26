---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [array statico, array di dimensione fissa, "T arr[N]", stringa C, null-terminated string, stringa terminata da zero, layout in memoria di un array, accesso diretto]
tags: [competenza, area/informatica]
---

# Array in C++

> Sequenza di dimensione fissa di oggetti dello stesso tipo, contigui in memoria: l'elemento $i$ sta all'indirizzo base $+\,i\cdot$`sizeof(T)`.

## Definizione / enunciato
`T arr[N];` dichiara un array di $N$ elementi di tipo $T$; $N$ deve essere una costante nota a tempo di compilazione (dimensione fissa). Gli indici partono da 0 e `arr[n]` è lecito solo se `n >= 0 && n < N`; fuori da questo intervallo il comportamento è disastroso ("the hell will break loose"). Inizializzazione: `int is[4] = { 42, 7, 9, -1 };`.
Le **stringhe C** sono array di `char` terminati da `'\0'`: `char cs[6] = "Hello";` (lo zero finale è implicito). `{'H','e','l','l','o'}` è un array di 5 char ma non una stringa ben formata, e il carattere `'0'` è diverso da `'\0'`. Per le stringhe si usa `std::string`.

## Formule chiave
$$\text{indirizzo}(arr[i]) = \text{base} + i\cdot\texttt{sizeof(T)}$$
Con `sizeof(int)=4`, un array di `int` che parte da 0 ha `is[1]` all'indirizzo 4.

## Intuizione
La memoria, vista dal software, è un enorme array di byte e l'indirizzo è l'indice in questo array: un array C++ è una fetta contigua di questa memoria. Da qui l'**accesso diretto** in $O(1)$ all'elemento $a_j$, contro l'accesso sequenziale delle liste.

## Come si usa
Calcolare gli indirizzi degli elementi (vedi l'esercizio sui puntatori) e capire perché l'accesso fuori dai limiti è un errore grave. Nei lucidi Crescenzi: array = indirizzo $a$ più posizioni consecutive, `a[j]` all'indirizzo $a + j\cdot 4$ per elementi di 4 byte.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezione 4 di M. Cicuttin; ripreso nei lucidi Crescenzi (cap. 1, sequenze lineari). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 9-16); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 2-4).

## Prerequisiti
- [[Tipi fondamentali del C++]]: sizeof(T) fissa la distanza tra elementi

## Porta a
- [[Puntatore]]: l'indirizzo di un elemento è un puntatore
- [[Array dinamico]]: array che si ridimensiona

## Collegati
- [[Bus di sistema]]: la memoria è indirizzabile al byte
- [[Codice cache-aware]]: la contiguità rende efficiente l'accesso sequenziale
