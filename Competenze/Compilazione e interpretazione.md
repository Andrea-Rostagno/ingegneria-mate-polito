---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico, Blockchain e criptoeconomia]
livello: [triennale, magistrale]
aliases: [interprete Python, bytecode, macchina virtuale Python, linguaggio ad alto livello, linguaggio assembler, IDE, modalità interattiva, compilatore, preprocessore, linker, compiler vs interpreter, file oggetto]
tags: [competenza, area/informatica]
---

# Compilazione e interpretazione

> Come un sorgente scritto in un linguaggio ad alto livello diventa istruzioni eseguibili: in Python il compilatore produce bytecode eseguito dalla macchina virtuale.

## Definizione / enunciato
**Livelli di linguaggio** (P1 p. 46-47):
- *alto livello* (C, C++, Java, JavaScript, Python): costrutti di complessità pari ai blocchi dei flow chart strutturati, indipendenti dall'hardware (`if x > 3: x = x + 1`);
- *assembler*: istruzioni microarchitetturali, fortemente dipendenti dal processore (`LOAD Reg1, Mem[1000]`, `ADD Reg1, 10`).

Le istruzioni di un linguaggio si dividono in pseudo-istruzioni (direttive al compilatore/interprete, non generano codice), istruzioni elementari (corrispondono a operazioni hardware) e istruzioni di controllo del flusso.

**Python** (P1 p. 65, 74): progettato da Guido van Rossum all'inizio degli anni '90, sintassi semplice, approccio "batterie comprese", interpretato. Il compilatore legge il sorgente `.py` e genera **byte code**, istruzioni semplici per la **macchina virtuale Python**, un programma che si comporta come una CPU software; le librerie necessarie vengono trovate e incluse automaticamente.

## Intuizione
L'interprete permette anche la **modalità interattiva** (console): esegue un'istruzione per volta, utile per provare frammenti di codice. Un IDE (PyCharm, IDLE, VS Code, replit.com) aggiunge editor con evidenziazione della sintassi, indentazione automatica, finestra di output e debugger.

## Come si usa
Primo programma: `print("Hello, World!")` in `hello.py`, eseguito con `python hello.py` o dall'IDE. Organizzazione: un progetto (cartella) per programma, con uno o più file `.py`; backup frequenti.

## Nei corsi
- **Informatica** (triennale): unità P1 sezioni 1.3-1.6. Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 45-50, 64-85); istruzioni di installazione in `triennale/ANNO 1/informatica/istruzioni installazione ITA-Windows v3 (2).pdf`.
- **Programmazione e calcolo scientifico** (triennale): il C++ è un linguaggio **compilato**: prima dell'esecuzione il programma va tradotto in codice macchina in tre passi. Il **preprocessore** espande gli `#include` (ogni `.cpp` ingloba i suoi `.hpp`), il **compilatore** traduce ogni `.cpp` in un file oggetto `.o`, il **linker** unisce i file oggetto nell'eseguibile (`a.o`, `b.o`, `c.o` → `a.exe`). Nella scheda: "Compiler vs Interpreter", "Preprocessore". Per capire le prestazioni (lezione 1) serve sapere come lavorano calcolatori e compilatori. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione2.pdf` (p. 29); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione1.pdf` (p. 14).
- **Blockchain e criptoeconomia** (magistrale): la Ethereum Virtual Machine è una macchina virtuale, cioè un emulatore che gira su qualsiasi nodo Ethereum indipendentemente dal sistema operativo ed esegue applicazioni scritte per l'ambiente EVM (linguaggi Solidity, Vyper, Yul, Fe). Fonte: `magistrale/Blockchain e criptoeconomia/05-Blockchain2.pdf` (pp. 6, 10).

## Prerequisiti
- [[Componenti di un elaboratore]]: il codice tradotto è eseguito dalla CPU

## Porta a
- [[Errori di sintassi e logici]]: gli errori di sintassi li rileva il compilatore
- [[Tipi fondamentali del C++]]: in C++ il compilatore deve conoscere il tipo di ogni entità (Programmazione e calcolo scientifico)
- [[Ethereum Virtual Machine]]: macchina virtuale decentralizzata che esegue gli smart contract (Blockchain e criptoeconomia)

## Collegati
- [[Algoritmo]]: il programma è l'algoritmo scritto in un linguaggio
- [[Ciclo fetch-decode-execute]]: esegue le istruzioni macchina prodotte dalla traduzione
- [[Git]]: il repository versiona i file sorgente da compilare (Programmazione e calcolo scientifico)
- [[Notazione postfissa]]: PostScript è eseguito da un interprete basato su una pila (Programmazione e calcolo scientifico)
