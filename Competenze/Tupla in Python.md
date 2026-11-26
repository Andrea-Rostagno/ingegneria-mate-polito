---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [tupla, tuple, contenitore immutabile, restituire più valori, spacchettamento]
tags: [competenza, area/informatica]
---

# Tupla in Python

> Contenitore ordinato e immutabile, versione non modificabile di una lista, usato per assegnazioni multiple e per restituire più valori.

## Definizione / enunciato
Una **tupla** è simile a una lista ma, una volta creata, il contenuto non si può modificare: è un contenitore **ordinato e immutabile**. Si crea con una sequenza separata da virgole tra parentesi tonde, `triple = (5, 10, 15)` (le parentesi si possono omettere ma è sconsigliato).

Operazioni ereditate dalle liste (quelle che non modificano): accesso con `[]`, concatenazione con `+`, `len()`, `sum()`, `max()`, iterazione con `for`, appartenenza con `in` e `not in`.

In Python si assegnano più variabili in un'unica operazione tramite tuple, ed è pratica comune restituire più valori da una funzione con una tupla.

## Formule chiave
```python
def readDate() :
    month = int(input(" month: "))
    day = int(input(" day: "))
    year = int(input(" year: "))
    return (month, day, year)

date = readDate()                    # una tupla
(month, day, year) = readDate()      # estrazione dei componenti
```

## Intuizione
L'immutabilità rende le tuple adatte come chiavi di dizionario e come elementi di insiemi (le liste no). Nel corso non sono approfondite oltre.

## Come si usa
Esempi: `enumerate` produce coppie (indice, valore) e `dict.items()` coppie (chiave, valore), che si spacchettano nel `for`: `for (key, val) in contacts.items():`. Chiave di dizionario a tupla: le coordinate `(1, 3)` di una casella degli scacchi (P8 p. 70).

## Nei corsi
- **Informatica** (triennale): unità P6 (tuple), P5 sezione 5.4 (restituire più valori). Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 85-90), `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 40).

## Prerequisiti
- [[Lista in Python]]: versione immutabile della lista

## Porta a
- [[Scambio di elementi]]: assegnazione multipla con tuple
- [[Dizionario in Python]]: le tuple possono fare da chiave

## Collegati
- [[Istruzione return]]: una tupla restituisce più valori
