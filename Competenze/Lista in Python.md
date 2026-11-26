---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [lista, list, IndexError, indice]
tags: [competenza, area/informatica]
---

# Lista in Python

> Struttura dati dinamica e mutabile che contiene un numero variabile di elementi di qualunque tipo, accessibili per indice.

## Definizione / enunciato
Una **lista** è una struttura dati versatile e dinamica che contiene un numero variabile di elementi, di qualunque tipo, accessibili tramite la loro posizione (indice); in altri linguaggi si chiama sequenza, array o vettore. Si crea con le parentesi quadre: `values = [32, 54, 67.5, 29, 35]`; `[]` è la lista vuota.

- accesso e sostituzione con l'operatore di indicizzazione: `values[5]`, `values[5] = 87`; indici da 0 a `len(values)-1`;
- indici negativi: `values[-1]` è l'ultimo elemento;
- un indice fuori intervallo solleva un'eccezione a run-time (`IndexError: list index out of range`);
- `len(values)` dà il numero di elementi; `print(values)` stampa `[1, 2, 3]`.

**Liste e stringhe**: entrambe sono sequenze indicizzate con `[]`, ma le liste contengono valori di ogni tipo e sono **mutabili** (si possono cambiare, aggiungere, eliminare elementi), mentre le stringhe contengono solo caratteri e sono immutabili.

## Formule chiave
```python
for i in range(len(values)) :   # quando serve l'indice
    print(i, values[i])
for element in values :         # quando basta il valore
    print(element)
```

## Intuizione
Le parentesi quadre hanno due usi: dopo un nome di variabile indicizzano (`values[4]`), dopo un `=` creano una lista (`values = [4]` è una lista con un elemento). Meglio non mescolare i tipi senza motivo (`['star', 13, 17]` è lecito ma sconsigliato).

## Come si usa
Errore più comune: accedere a `values[8]` in una lista di 8 elementi. Usare `range(len(values))` invece di un numero fisso di iterazioni rende il ciclo corretto qualunque sia la lunghezza.

## Nei corsi
- **Informatica** (triennale): unità P6 sezione 6.1. Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 4-16, 23), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 2).

## Prerequisiti
- [[Stringa in Python]]: stessa indicizzazione delle sequenze
- [[Variabile]]: contenitore di più valori

## Porta a
- [[Alias e copia di liste]]: le variabili lista sono riferimenti
- [[Operazioni sulle liste]]: operazioni definite sul tipo list
- [[Scambio di elementi]]: scambia due posizioni della lista
- [[Tupla in Python]]: versione immutabile della lista
- [[List comprehension]]: costruisce una nuova lista
- [[Tabelle bidimensionali]]: ogni riga è una lista
- [[Insieme in Python]]: contenitore come la lista ma senza ordine né duplicati
- [[Dizionario in Python]]: generalizza l'indice intero a una chiave

## Collegati
- [[Slicing]]: le porzioni valgono anche per le liste
