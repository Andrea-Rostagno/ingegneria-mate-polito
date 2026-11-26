---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [backtrack, ricerca esaustiva con ritorno, Sudoku, generazione delle sequenze binarie, generazione delle permutazioni, GeneraBinarie, GeneraPermutazioni, enumerazione ricorsiva]
tags: [competenza, area/informatica]
---

# Backtracking (algoritmi)

> Tecnica ricorsiva che esplora una per una le scelte possibili e ne annulla gli effetti quando non portano a una soluzione; enumera tutte le configurazioni, quindi costa tempo esponenziale.

## Definizione / enunciato
**Backtrack**: algoritmo che esplora le scelte ammissibili, annullandone gli effetti nel caso non conducano a soluzione. Gli esempi del corso sono generazioni ricorsive:
- **$2^n$ sequenze binarie** = tutti i sottoinsiemi di un insieme di $n$ elementi ($A[i]=1$ se e solo se l'$i$-esimo elemento è scelto): si fissa il bit a 0 e si ricorre, poi lo si fissa a 1 e si ricorre allo stesso modo;
- **$n!$ permutazioni**: per $i=n-1,\dots,0$ si scambia $A[i]$ con l'ultimo elemento $A[n-1]$, si permutano ricorsivamente i primi $n-1$ elementi, poi si rimette a posto lo scambio.

## Formule chiave
```text
GeneraBinarie( A, b ):            // invocato con b = n
    if (b == 0) {
        Elabora( A );
    } else {
        A[b-1] = 0;  GeneraBinarie( A, b-1 );
        A[b-1] = 1;  GeneraBinarie( A, b-1 );
    }

Sudoku( c ):                      // invocato con c = PriVuo()
    elenco = insieme cifre ammissibili per c;
    for (i = 0; i < |elenco|; i = i+1) {
        Assegna( c, elenco[i] );
        if (!UltVuo(c) && !Sudoku(SucVuo(c))) {
            Svuota( c );
        } else {
            return true;
        }
    }
    return false;
```

## Intuizione
Quando le implicazioni logiche non bastano (nel Sudoku una casella ammette più cifre), si prova una scelta e si va avanti; se si arriva a un vicolo cieco si torna indietro e si prova la successiva. `Svuota(c)` è l'annullamento della scelta.

## Come si usa
Costo del Sudoku: con $m$ caselle vuote ($m\le 9^2$) nel caso pessimo si esplorano circa $9^m$ scelte; per una tabella $n\times n$ circa $n^m\le n^{n^2}=2^{n^2\log n}$. L'algoritmo è quindi esponenziale, mentre la verifica di una soluzione è polinomiale.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi (generazione di sequenze e permutazioni, Sudoku). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 18-28).

## Prerequisiti
- [[Costo computazionale di un algoritmo]]: l'enumerazione ha costo esponenziale

## Porta a
- Nessuno nel corso.

## Collegati
- [[Classi P e NP]]: trovare per tentativi contro verificare in tempo polinomiale
- [[Calcolo combinatorio]]: le configurazioni enumerate sono 2^n sottoinsiemi e n! permutazioni
