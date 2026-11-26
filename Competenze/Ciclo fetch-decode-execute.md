---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [ciclo macchina, fetch decode execute, esecuzione di un'istruzione, clock, frequenza di clock, ciclo di istruzione]
tags: [competenza, area/informatica]
---

# Ciclo fetch-decode-execute

> Le tre fasi con cui l'unità di controllo esegue ogni istruzione (prelievo, decodifica, esecuzione), scandite dal clock.

## Definizione / enunciato
Esecuzione di un'istruzione in tre fasi:
1. **FETCH**: preleva l'istruzione dalla memoria centrale all'indirizzo indicato dal PC e la mette in IR, poi incrementa il PC;
2. **DECODE**: interpreta l'istruzione e produce gli ordini;
3. **EXECUTE**: attiva i blocchi interessati dall'istruzione.

Il **clock** genera un riferimento temporale comune per tutti gli elementi del sistema: periodo $T$ (in secondi), frequenza $f = 1/T$ (in Hz, cicli al secondo). Un **ciclo macchina** è l'intervallo in cui si svolge un'operazione elementare ed è un multiplo intero del periodo di clock; un'istruzione richiede un numero intero di cicli macchina, variabile secondo il tipo.

## Formule chiave
$$\text{FETCH: } IR \leftarrow M[PC],\quad PC \leftarrow PC + 1 \qquad \text{DECODE: ordini} \leftarrow \text{decode}(IR)$$
$$f = \frac{1}{T}$$

## Intuizione
Il PC fa da "segnalibro" del programma: dopo il fetch punta già all'istruzione successiva, e un salto (if, ciclo) consiste nel cambiarne il valore.

## Come si usa
Esempio di tempistica (T2 p. 21): ALU 1 ciclo, FPU 15, memoria 5, I/O 100 cicli. La prestazione complessiva del programma dipende quindi dal **mix di istruzioni**: un programma pieno di I/O o di operazioni floating point è molto più lento di uno con sole operazioni intere.

## Nei corsi
- **Informatica** (triennale): unità T2. Fonti: `triennale/ANNO 1/informatica/Unita T2 - Architettura.pdf` (p. 15-17, 20-21).
- **Programmazione e calcolo scientifico** (triennale): lezione 2 di M. Cicuttin, "instruction cycle" dall'accensione allo spegnimento: un registro chiamato PC o IP punta alla prossima istruzione; **fetch** la preleva dalla memoria, **decode** ne capisce il tipo (accesso in memoria diretto o indiretto, operazione aritmetica, salto, ...), **execute** attiva le unità adatte (per esempio la ALU) ed eventualmente modifica IP se è un salto; poi si ripete. Esempio: il fattoriale in assembly x86 (`mov`, `cmp`, `je`, `imul`, `sub`, `jnz`, `ret`), perché un calcolatore esegue solo istruzioni semplici (aritmetica, confronti, spostamenti di dati, salti). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 3, 6).

## Prerequisiti
- [[Unità centrale di elaborazione]]: le fasi sono governate dall'unità di controllo

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Compilazione e interpretazione]]: esegue le istruzioni macchina prodotte dalla traduzione
