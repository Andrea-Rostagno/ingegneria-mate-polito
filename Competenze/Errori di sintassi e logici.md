---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [errori di compilazione, errori a tempo di esecuzione, runtime error, syntax error, debug]
tags: [competenza, area/informatica]
---

# Errori di sintassi e logici

> Distinzione tra errori rilevati prima dell'esecuzione (sintassi) ed errori che emergono durante l'esecuzione o producono risultati sbagliati (logici).

## Definizione / enunciato
- **Errori a tempo di compilazione (di sintassi)**: scrittura, maiuscole, punteggiatura, ordine delle istruzioni, parentesi o virgolette non corrispondenti, indentazione. Il compilatore non crea il programma eseguibile; di solito l'IDE li evidenzia. Si corregge il primo errore segnalato e si ricompila, finché non ne restano.
- **Errori a tempo di esecuzione (run-time) o logici**: il programma viene eseguito ma non dà il risultato corretto, oppure va in crash. Sono i più difficili da trovare, anche per programmatori esperti.

## Intuizione
Python distingue maiuscole e minuscole e considera significativi gli spazi a inizio riga: molti errori di sintassi nascono da qui. Un errore logico invece è "legale" per il linguaggio: lo rivelano solo i test.

## Come si usa
Esempi delle slide: `Print("Hello World!")`, `print(Hello World!)`, `print("Hello World!')`, `print('Hello'` sono errori di sintassi; `print(1/0)` (divisione per zero, che interrompe il programma), `print("Hello, Word!")` (testo sbagliato) e una riga dimenticata sono errori di esecuzione o logici. Altri esempi nelle unità successive: `NameError` per variabile non definita (P2 p. 15), `TypeError` per `str + int` (P2 p. 19), `IndexError` (P2 p. 68).

## Nei corsi
- **Informatica** (triennale): unità P1. Fonti: `triennale/ANNO 1/informatica/Unita P1 - La Programmazione.pdf` (p. 91-93).

## Prerequisiti
- [[Compilazione e interpretazione]]: gli errori di sintassi li rileva il compilatore

## Porta a
- [[Gestione delle eccezioni]]: gestisce gli errori a tempo di esecuzione

## Collegati
- [[Casi di test]]: i test servono a scovare gli errori logici
