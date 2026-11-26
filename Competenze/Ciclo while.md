---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [while loop, ciclo controllato da un contatore, ciclo controllato da un evento, ciclo infinito, errore off-by-one, break, continue, do while]
tags: [competenza, area/informatica]
---

# Ciclo while

> Ciclo che ripete un blocco di istruzioni finché una condizione resta vera; serve quando il numero di iterazioni non è noto in anticipo.

## Definizione / enunciato
`while condizione:` seguito da un blocco indentato: la condizione è testata **prima** del corpo; se è vera il corpo viene eseguito e si torna al test, se è falsa si prosegue dopo il ciclo. Ogni ciclo ha tre parti: **inizializzazione** delle variabili prima del ciclo, **condizione**, **aggiornamento** di una variabile della condizione dentro il corpo.

Tipi (P4 p. 12-13, 20): **controllato da un contatore** (numero di iterazioni prefissato), **controllato da un evento** (si ferma quando una condizione diventa falsa, iterazioni non note), **misto** (es. al più 10 numeri oppure fino allo 0).

`break` interrompe tutto il ciclo e prosegue con l'istruzione successiva; `continue` salta il resto dell'iterazione corrente e passa alla successiva.

## Formule chiave
```python
balance = 10.0; TARGET = 100.0; year = 0; RATE = 5
while balance < TARGET :
    year = year + 1
    interest = balance * RATE / 100
    balance = balance + interest
```

## Intuizione
Errori comuni: **ciclo infinito** se nel corpo non si aggiorna la variabile testata; condizione invertita (`bal >= TARGET` invece di `bal < TARGET`); **off-by-one**: con contatore da 0 si usa `<`, da 1 si usa `<=`. Con limiti asimmetrici (`i = a; while i < b`) il ciclo esegue `b-a` volte, con limiti simmetrici (`<=`) `b-a+1` volte, e quel "+1" è fonte di molti errori.

## Come si usa
Esempio `doubleinv.py`: quanti anni perché un investimento al 5% raddoppi (dal pseudocodice di P1). Somma delle cifre di un numero con `n % 10` e `n // 10` (da tracciare a mano). Il while è più versatile del for: ogni for si può riscrivere come while con contatore.

## Nei corsi
- **Informatica** (triennale): unità P4 sezioni 4.1-4.2. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 3-30, 60-61, 119-120).
- **Programmazione e calcolo scientifico** (triennale): in C++ (lezione 4 di M. Cicuttin) l'iterazione illimitata ha due varianti: `while ( <condizione> ) { ... }` controlla la condizione prima di entrare, `do { ... } while ( <condizione> );` esegue almeno un ciclo prima di controllarla (meno comune). Esempio: `int fact(int n) { int ret = 1; while (n) ret *= n--; return ret; }`. `break` esce dal ciclo, `continue` passa all'iterazione successiva (esempio: `while (i--)` che salta i pari con `if (i%2 == 0) continue;`). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 24, 27, 29).

## Prerequisiti
- [[Operatori booleani]]: la condizione di permanenza è booleana
- [[Diagramma di flusso]]: freccia che torna al rombo

## Porta a
- [[Valore sentinella]]: termina il ciclo di lettura
- [[Ciclo for]]: equivale a un while con contatore
- [[Somma, media e conteggio]]: si accumula iterazione per iterazione
- [[Ricerca lineare]]: si ferma al primo successo

## Collegati
- [[Hand-tracing]]: si traccia iterazione per iterazione
