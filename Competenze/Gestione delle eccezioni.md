---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [eccezioni, exceptions, try except, finally, raise, ValueError, IOError, FileNotFoundError, KeyError, sollevare un'eccezione]
tags: [competenza, area/informatica]
---

# Gestione delle eccezioni

> Il meccanismo che separa la rilevazione di un errore a run-time (raise) dalla sua gestione (try/except/finally) in una parte del programma competente.

## Definizione / enunciato
Un errore a run-time ha due aspetti: **rilevarlo** e **gestirlo**. Una funzione come `open` rileva il problema (file inesistente) ma non sa come rimediare, quindi lo segnala con un'**eccezione** che passa il controllo a un gestore.
- **raise**: `raise ValueError("Amount exceeds balance")` solleva un'eccezione con un messaggio; l'esecuzione non prosegue con le istruzioni successive ma salta al gestore.
- **try/except**: il blocco `try` contiene le istruzioni che possono sollevare eccezioni; una o più clausole `except Tipo:` contengono i gestori; se un'eccezione si verifica, le istruzioni restanti del `try` sono saltate. `except ValueError as exception:` dà accesso all'oggetto, e `str(exception)` al messaggio.
- **finally**: eseguito comunque all'uscita dal `try` (fine normale, dopo un except, o eccezione non gestita); serve a chiudere i file.
- Un'eccezione non gestita **si propaga** alla funzione chiamante, fino a interrompere il programma.

Tipi comuni: `ZeroDivisionError`, `ValueError` (`int('pippo')`), `NameError`, `IndexError`, `KeyError`, `FileNotFoundError`/`IOError` (`OSError`), `TypeError`, `RuntimeError`.

## Formule chiave
```python
try :
    filename = input("Enter filename: ")
    infile = open(filename, "r")       # può sollevare IOError
    line = infile.readline()
    value = int(line)                  # può sollevare ValueError
except IOError :
    print("Error: file not found.")
except ValueError as exception :
    print("Error:", str(exception))
```

## Intuizione
Regola delle slide: **sollevare presto, catturare tardi**. Una funzione che rileva un problema che non sa risolvere solleva un'eccezione invece di "ripararlo" male; la cattura solo chi può davvero rimediare, altrimenti la lascia propagare. Consiglio: non mettere `except` e `finally` nello stesso `try`, ma due `try` annidati.

## Come si usa
Esempio `analyzedata.py` (P7 p. 98-102): `main` gestisce `IOError`, `ValueError` e `RuntimeError` in un ciclo finché il file è valido; `readFile` apre il file e chiude con `finally`, senza except; `readData` legge il conteggio e i valori (può sollevare `ValueError`) e solleva `RuntimeError("End of file expected.")` se ci sono dati in più. Se `int` fallisce in `readData`, l'eccezione attraversa `readFile` (che chiude il file) e arriva all'`except ValueError` di `main`.

## Nei corsi
- **Informatica** (triennale): unità P7 sezioni 7.5-7.6. Fonti: `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 76-103, 107-108), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3). Nota: la slide P7 p. 84 attribuisce per refuso il ValueError alla clausola IOError; il codice di p. 83 è quello corretto.

## Prerequisiti
- [[Errori di sintassi e logici]]: gestisce gli errori a tempo di esecuzione

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Validazione dell'input]]: un input non numerico si intercetta come ValueError
- [[Apertura e chiusura di file]]: finally e with garantiscono la chiusura del file
