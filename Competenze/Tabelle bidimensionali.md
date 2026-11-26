---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [tabella, lista di liste, matrice in Python, lista bidimensionale, liste annidate]
tags: [competenza, area/informatica]
---

# Tabelle bidimensionali

> Rappresentare dati a righe e colonne con una lista di liste, accedendo agli elementi con due indici table[i][j].

## Definizione / enunciato
Le liste possono contenere dati in due dimensioni, come un foglio di calcolo (detto anche matrice): una lista in cui ogni elemento è una lista (una riga).

- **Creazione**: letterale `counts = [ [0, 3, 0], [0, 0, 1], ... ]`, oppure incrementale per tabelle grandi: `table = []` e per ogni riga `row = [0] * COLUMNS; table.append(row)`.
- **Accesso**: `counts[i][j]`, prima l'indice di riga poi quello di colonna.
- **Dimensioni** (per esempio in una funzione): `len(values)` righe, `len(values[0])` colonne.
- **Elementi vicini**: partendo da `(i, j)` si guardano `i-1..i+1` e `j-1..j+1`, attenti ai bordi (niente indici negativi né sconfinamenti).

## Formule chiave
```python
for i in range(COUNTRIES) :          # righe
    for j in range(MEDALS) :         # colonne
        print("%8d" % counts[i][j], end="")
    print()

rowtotal = 0
for j in range(MEDALS) : rowtotal = rowtotal + counts[i][j]
coltotal = 0
for i in range(COUNTRIES) : coltotal = coltotal + counts[i][j]
```

## Intuizione
Una tabella è una lista di righe: per scorrerla servono due cicli annidati, l'esterno sulle righe e l'interno sulle colonne. Somma per riga: fissare `i` e variare `j`; per colonna il contrario.

## Come si usa
Esempio `medals.py`: medagliere di 8 nazioni per 3 tipi di medaglia, stampa con totali di riga e di colonna. Una funzione `sum(values)` con due cicli somma tutti gli elementi della tabella (P6 p. 136).

## Nei corsi
- **Informatica** (triennale): unità P6 sezione 6.7. Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 126-137, 142).

## Prerequisiti
- [[Lista in Python]]: ogni riga è una lista
- [[Cicli annidati]]: righe e colonne si scorrono con due cicli

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Strutture dati annidate]]: il dizionario di liste è una tabella con righe nominate
