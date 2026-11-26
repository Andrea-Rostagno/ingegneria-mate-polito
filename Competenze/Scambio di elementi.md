---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [swap, variabile temporanea, assegnazione multipla, assegnazione di tuple, scambiare le metà]
tags: [competenza, area/informatica]
---

# Scambio di elementi

> Scambiare due elementi di una lista con una variabile temporanea o con l'assegnazione multipla di Python.

## Definizione / enunciato
Per scambiare `values[i]` e `values[j]` non basta copiare uno nell'altro: si sovrascriverebbe il primo valore. Si salva prima in una **variabile temporanea**:
1. `temp = values[i]`
2. `values[i] = values[j]`
3. `values[j] = temp`

Scorciatoia Python (**assegnazione multipla** con tuple): `(a, b) = (3, 4)` assegna in parallelo, quindi `(a, b) = (b, a)` scambia senza variabile temporanea.

## Formule chiave
```python
temp = values[i]
values[i] = values[j]
values[j] = temp

(values[1], values[3]) = (values[3], values[1])
```

## Intuizione
Lo scambio ripetuto di elementi fuori ordine è l'operazione base di molti algoritmi di ordinamento. Per scoprire l'algoritmo si possono manipolare oggetti fisici (monete, carte) allineati sul tavolo.

## Come si usa
Problema P6 (`swaphalves.py`): data una lista di lunghezza pari, scambiare la prima metà con la seconda. Manipolando gli oggetti si vede che servono `size/2` scambi tra `i` e `j = i + size/2`, con `i` da 0 a `size/2`.

## Nei corsi
- **Informatica** (triennale): unità P6 sezione 6.3.8, assegnazione di tuple in 6.4 e manipolazione di oggetti in 6.6. Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 63-67, 89, 116-125).

## Prerequisiti
- [[Lista in Python]]: scambia due posizioni della lista
- [[Tupla in Python]]: assegnazione multipla con tuple

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Ordinamento di liste]]: gli ordinamenti si basano su scambi ripetuti
