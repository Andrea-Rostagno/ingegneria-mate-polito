---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [scope, variabili locali, variabili globali, global, visibilità, lifetime, shadowing, scoping rules]
tags: [competenza, area/informatica]
---

# Ambito di visibilità delle variabili

> La porzione di programma in cui una variabile è visibile: le variabili locali vivono dentro la propria funzione, le globali in tutto il file.

## Definizione / enunciato
L'**ambito di visibilità** di una variabile è la porzione di programma in cui è visibile.
- **Variabili locali**: dichiarate dentro una funzione (parametri compresi), visibili solo lì. Usarle da un'altra funzione dà errore. Due funzioni possono avere variabili locali con lo stesso nome (es. `result` in `square` e in `main`): sono variabili diverse, perché i loro ambiti non si sovrappongono.
- **Variabili globali**: definite fuori dalle funzioni, visibili a tutte. Una funzione che vuole **modificarle** deve dichiararle con `global`; senza la dichiarazione la variabile assegnata nella funzione è considerata locale.

## Formule chiave
```python
balance = 10000            # variabile globale
def withdraw(amount) :
    global balance         # necessario per aggiornarla
    if balance >= amount :
        balance = balance - amount
```

## Intuizione
Le variabili globali rendono i programmi difficili da gestire ed estendere, perché le funzioni non sono più scatole nere che ricevono argomenti e restituiscono risultati. Sono richieste raramente (es. `pi` nel modulo `math`).

## Come si usa
Errore tipico (P5 p. 68): `cubeVolume()` che usa `sideLength` definita come locale di `main` causa un errore. La soluzione è passare il valore come parametro e restituire il risultato.

## Nei corsi
- **Informatica** (triennale): unità P5 sezione 5.8. Fonti: `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 65-72, 93).
- **Programmazione e calcolo scientifico** (triennale): regole di scope del C++ (lezione 3 di M. Cicuttin). Ogni oggetto ha un **lifetime**: un oggetto dichiarato in un blocco `{ }` è visibile solo in quel blocco e nei sottoblocchi (la variabile `i` dichiarata nel `for` non è visibile dopo il ciclo); le funzioni non si possono annidare. **Shadowing**: se in un blocco interno si dichiara una variabile con lo stesso nome di una esterna, quella esterna viene oscurata (`double x = 42.0;` dentro un `if` nasconde il parametro `int x`, che torna visibile all'uscita dal blocco). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione3.pdf` (p. 5-6).

## Prerequisiti
- [[Definizione di funzione]]: le funzioni delimitano l'ambito locale
- [[Variabile]]: regola dove un nome è visibile

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Passaggio di parametri]]: alternativa corretta alle variabili globali
