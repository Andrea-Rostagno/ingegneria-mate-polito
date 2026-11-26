---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [CPU, central processing unit, microprocessore, ALU, FPU, registri, registro dei flag, unità di controllo, unità operativa]
tags: [competenza, area/informatica]
---

# Unità centrale di elaborazione

> Il circuito che esegue tutte le istruzioni, diviso in unità operativa (ALU, FPU, registri, flag) e unità di controllo (PC, IR, logica di controllo).

## Definizione / enunciato
Il **microprocessore** esegue fisicamente tutte le istruzioni: contiene i circuiti per le operazioni su interi, reali e logiche, quelli di coordinamento, le interfacce verso memoria e I/O e una memoria locale (cache). Il suo cuore è la **CPU** = unità operativa + unità di controllo.

**Unità operativa**: svolge le elaborazioni.
- **ALU** (Arithmetic Logic Unit): calcoli aritmetici, logici e confronti su interi;
- **FPU** (Floating Point Unit): calcoli sui reali; un'operazione FPU è tipicamente 5-50 volte più lenta di una ALU;
- **registri**: memoria locale (8...128) per dati temporanei e istruzioni; ogni trasferimento con la memoria avviene tra registri e memoria;
- **registro dei flag**: bit sullo stato e sul risultato dell'ultima operazione, es. Zero, Segno, Overflow.

**Unità di controllo**: in base alle istruzioni e allo stato decide l'operazione ed emette gli ordini. Componenti: **PC** (Program Counter, indirizzo della prossima istruzione), **IR** (Instruction Register, istruzione corrente), **logica di controllo** (interpreta il codice in IR).

## Intuizione
Separare chi calcola (unità operativa) da chi decide cosa calcolare (unità di controllo) è ciò che rende il processore programmabile: cambiando le istruzioni in memoria cambia il comportamento.

## Come si usa
Collegamento con i flow chart (T2 p. 18): le operazioni elementari utilizzabili nei blocchi sono proprio quelle dell'ALU (+, −, ×, /, resto tra interi; operazioni logiche; confronti <, >, =, <=, >=, !=), della FPU (le stesse sui reali) e i trasferimenti CPU-memoria e CPU-I/O.

## Nei corsi
- **Informatica** (triennale): unità T2. Fonti: `triennale/ANNO 1/informatica/Unita T2 - Architettura.pdf` (p. 6-19).
- **Programmazione e calcolo scientifico** (triennale): lezione 2 di M. Cicuttin, architettura di von Neumann (processore, memoria e loro interazioni) sul caso dell'Intel 8088 (1979). **Data path**: registri (unità di memoria di base, alcune visibili all'utente), ALU (la matematica intera), unità di controllo, flag (bit di stato sull'ultima operazione: overflow, carry, zero, ...). Interfaccia esterna: alimentazione, pin dati D0-D7 e indirizzi A0-A19, segnali di controllo (lettura/scrittura, interrupt), clock. All'accensione le CPU moderne si presentano come un 8086/8088 e il sistema operativo le porta in modalità protetta (32 bit) o long mode (64 bit). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 2-8).

## Prerequisiti
- [[Componenti di un elaboratore]]: è l'unità di elaborazione

## Porta a
- [[Ciclo fetch-decode-execute]]: le fasi sono governate dall'unità di controllo

## Collegati
- [[Aritmetica binaria]]: la ALU somma in binario e segnala l'overflow con un flag
- [[Rappresentazione floating-point]]: la FPU calcola sui numeri in virgola mobile
- [[Gerarchia di memoria]]: registri e cache sono il livello più vicino alla CPU
- [[Bus di sistema]]: la CPU fa da master del bus
