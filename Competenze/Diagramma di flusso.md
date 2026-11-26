---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [flow chart, flowchart, DDF, diagramma a blocchi]
tags: [competenza, area/informatica]
---

# Diagramma di flusso

> Rappresentazione grafica di un algoritmo con blocchi di attività, input/output e rombi di decisione collegati da frecce.

## Definizione / enunciato
Un diagramma di flusso mostra la struttura delle decisioni e delle attività necessarie a risolvere un problema. Regole delle slide:
- collegare attività e blocchi di input/output con frecce, nell'ordine di esecuzione;
- per una decisione usare il **rombo** (istruzione condizionale) con due uscite (vero/falso);
- le frecce vanno verso i blocchi, mai verso altre frecce né verso un ramo "interno";
- ogni ramo di una decisione può contenere altre attività e decisioni;
- **non incrociare i rami**.

Collegamento con l'architettura (T2 p. 18): dentro i blocchi si usano solo operazioni elementari per il processore: aritmetica su interi (ALU) e reali (FPU), operazioni logiche, confronti, trasferimenti con la memoria, lettura/scrittura su dispositivi.

## Intuizione
Il flow chart rende visibile il flusso di esecuzione, ed è per questo che i costrutti strutturati (if, while) hanno ciascuno un proprio schema a blocchi: il ciclo è una freccia che torna indietro a un rombo.

## Come si usa
Esempio delle spese di spedizione (P1 p. 55-57): 5 dollari nei 48 stati continentali, 10 dollari verso Hawaii, Alaska ed estero: tre rami alternativi da disegnare senza incroci. Esercizio del fioraio (P1 p. 59): contare i mazzi venduti, il più caro, il meno caro e il valore medio.

## Nei corsi
- **Informatica** (triennale): unità P1 sezione 3.5; schemi a blocchi di if (P3 p. 30-31, 62, 76), while (P4 p. 5, 70) e cicli annidati (P4 p. 75). Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 51-60), `triennale/ANNO 1/informatica/Unita T2 - Architettura.pdf` (p. 18).

## Prerequisiti
- [[Algoritmo]]: rappresentazione grafica dell'algoritmo

## Porta a
- [[Istruzione if]]: traduce il rombo di decisione
- [[Ciclo while]]: freccia che torna al rombo

## Collegati
- [[Pseudocodice]]: due formalismi alternativi per la soluzione formale
- [[Componenti di un elaboratore]]: i blocchi usano solo operazioni elementari della CPU
