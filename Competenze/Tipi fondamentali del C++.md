---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [tipi base del C++, C++ basic types, tipizzazione statica, statically typed, sizeof, letterali, literals, const, dichiarazione, programma C++ minimo]
tags: [competenza, area/informatica]
---

# Tipi fondamentali del C++

> In C++ ogni entità ha un tipo noto al compilatore nel punto d'uso; i tipi base fissano dimensione in bit e operazioni ammesse.

## Definizione / enunciato
Il C++ è un linguaggio **compilato** e **a tipizzazione statica**: il tipo di ogni entità (valori come `42` o `42.123`, nomi di variabili e funzioni, espressioni come `x+3*y` o `f(1,2,3)`) deve essere noto al compilatore dove è usata, e determina le operazioni applicabili. Con una **dichiarazione** si introduce un'entità:
- **tipo**: insieme dei valori possibili e delle operazioni;
- **oggetto**: memoria che contiene un valore di un certo tipo;
- **valore**: insieme di bit interpretati secondo un tipo;
- **variabile**: oggetto con un nome.

Il programma minimo è `int main() {}`: l'esecuzione parte sempre da `main`, unica, che restituisce al sistema 0 se tutto è andato bene.

## Formule chiave
Dimensioni tipiche su macchine a 64 bit: `bool` (di solito 8 bit), `char` 8 bit con segno, `short` 16, `int` 32, `long` 64; `float` IEEE 754 singola precisione, `double` IEEE 754 doppia, `long double` estesa (non necessariamente IEEE 754). `unsigned` per interi senza segno; `sizeof()` dà la dimensione; per interi portabili `<cstdint>` (`int8_t`, `uint16_t`, ...).
Letterali: `10` (int), `26U` (unsigned), `42L` (long), `75.0f` (float), `88.1` e `8.5e-2` (double).

## Intuizione
Il tipo dice al compilatore quanti byte occupa un oggetto e come leggerne i bit: senza questa informazione non potrebbe generare codice macchina. Consigli delle slide: inizializzare sempre (`int x = 42;`, non `int x;`), usare `const` quando ha senso, e per il corso usare solo `double` (mai mescolare `float` e `double`).

## Come si usa
Trappole delle slide: `double x_bad = 1/2;` vale 0 (divisione intera), `1./2.` vale 0.5 (il C++ non è Matlab: `./` non esiste, si legge `1. / 2.`); `double pi = 3,14;` è segnalato con un ironico "Happy debugging" (virgola al posto del punto decimale); `|` e `&` sono bit a bit (`0xCA00 | 0x00FE` dà `0xCAFE`, `'H' | 0x20` dà `'h'`) mentre `&&` è logico.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezioni 2, 3, 5 e 7 di M. Cicuttin. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 30-35); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione3.pdf` (p. 2-8); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 2); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 2).

## Prerequisiti
- [[Compilazione e interpretazione]]: il compilatore deve conoscere tutti i tipi

## Porta a
- [[Stream di input-output in C++]]: << e >> sono definiti per ogni tipo
- [[Array in C++]]: sequenze di oggetti dello stesso tipo
- [[Struct e classi in C++]]: tipi definiti dall'utente

## Collegati
- [[Rappresentazione floating-point]]: float e double seguono IEEE 754
- [[Ambito di visibilità delle variabili]]: lifetime e shadowing nei blocchi
- [[Operatori aritmetici]]: la divisione tra interi tronca il risultato
