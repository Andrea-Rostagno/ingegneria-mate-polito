---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [accumulatore, contatore, accumulator pattern, media di valori, contare corrispondenze, lista di contatori]
tags: [competenza, area/informatica]
---

# Somma, media e conteggio

> Gli schemi di ciclo con variabile accumulatore (somma, concatenazione) o contatore, da cui si ricavano medie e frequenze.

## Definizione / enunciato
Schema dell'**accumulatore**: si inizializza a un elemento neutro prima del ciclo (`total = 0.0` per la somma, `result = ""` per concatenare stringhe) e si aggiorna a ogni iterazione. Schema del **contatore**: `count = 0` e `count = count + 1` quando l'elemento soddisfa una condizione.

**Media**: somma / conteggio, controllando prima che il conteggio sia positivo per evitare la divisione per zero. Funzioni predefinite equivalenti su contenitori: `sum()`, `len()`, `lista.count(x)`.

**Separatori** (P6 p. 53-56): per stampare `Harry, Emily, Bob` si aggiunge il separatore prima di ogni elemento tranne il primo, oppure si usa `", ".join(names)`.

## Formule chiave
```python
total = 0.0; count = 0
inputStr = input("Enter value: ")
while inputStr != "" :
    value = float(inputStr)
    total = total + value
    count = count + 1
    inputStr = input("Enter value: ")
if count > 0 : average = total / count
else : average = 0.0

uppercase = 0
for ch in string :
    if ch.isupper() : uppercase = uppercase + 1
```

## Intuizione
Un accumulatore riassume una sequenza in un valore; un contatore è un accumulatore che somma 1. Con una lista di contatori indicizzata dal valore si contano le frequenze di molti valori in una sola passata.

## Come si usa
Esempio P6 (dado truccato, `dice.py`): `counters = [0] * (sides + 1)` e per ogni lancio `counters[value] = counters[value] + 1`; con 1, 2, 1, 3, 4, 6, 5, 6 si ottiene 1: 2; 2: 1; 3: 1; 4: 1; 5: 1; 6: 2. Si scartano i valori < 1 o > 6 per non uscire dalla lista. Altri esempi: contare i numeri negativi, le maiuscole, le vocali (`ch.lower() in "aeiou"`).

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.5 (semplici algoritmi con cicli) e 4.8, P6 sezione 6.3 e 6.5. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 40-44, 102-104), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 50-55, 61, 109-114).

## Prerequisiti
- [[Ciclo while]]: si accumula iterazione per iterazione

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Valore sentinella]]: la lettura dei valori termina alla sentinella
- [[Operazioni sulle liste]]: sum, len e count come scorciatoie degli accumulatori
- [[Dizionario in Python]]: un dizionario conta le frequenze per chiave
