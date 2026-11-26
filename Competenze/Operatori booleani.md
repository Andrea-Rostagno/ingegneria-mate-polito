---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [and or not, tipo bool, variabile booleana, flag, valutazione cortocircuitata, short-circuit, confronti concatenati, range checking, boolean operators]
tags: [competenza, area/informatica]
---

# Operatori booleani

> Il tipo bool e gli operatori and, or, not per combinare condizioni, con valutazione da sinistra a destra in cortocircuito.

## Definizione / enunciato
Il tipo `bool` ha due valori, `True` e `False`; una variabile booleana usata come indicatore si chiama **flag** (`failed = True`). La condizione di un `if` è un valore booleano.
- `A and B` è vero se **entrambe** sono vere;
- `A or B` è vero se **almeno una** è vera;
- `not A` inverte il valore.

**Valutazione in cortocircuito**: le condizioni sono valutate da sinistra a destra e appena il risultato è determinato le restanti non vengono valutate (and con sinistra falsa, or con sinistra vera).

Proprietà (P3 p. 98): commutativa, associativa, distributiva (`A and (B or C) = A and B or A and C`, `A or (B and C) = (A or B) and (A or C)`).

**Confronti concatenati**: `0 <= temp <= 100` equivale a `0 <= temp and temp <= 100` (in Python, non nella maggior parte degli altri linguaggi).

**Leggi di De Morgan** (P3 p. 99): `not(A and B)` equivale a `not(A) or not(B)`; `not(A or B)` equivale a `not(A) and not(B)`. Esempio delle slide: `if (country != "USA" and state != "AK" and state != "HI")` equivale a `if not(country == "USA" or state == "AK" or state == "HI")`.

## Formule chiave
```python
if temp > 0 and temp < 100 : print("Liquid")       # dentro l'intervallo
if temp <= 0 or temp >= 100 : print("Not liquid")  # fuori dall'intervallo
isLiquid = temp > 0 and temp < 100                 # ricordare una condizione
if not (a == b) :   # equivale a  if a != b :
```

## Intuizione
George Boole (1847) introdusse una logica di soli enunciati veri o falsi, quella che usano gli elaboratori. Il cortocircuito non è solo un'ottimizzazione: permette di scrivere `pos < len(values) and values[pos] > limit` senza rischiare un indice fuori intervallo.

## Come si usa
Errore comune: confondere `and` e `or`. Un valore è nell'intervallo se è almeno 0 **and** al più 100; è fuori se è minore di 0 **or** maggiore di 100. Le variabili booleane controllano anche i cicli (`while not done:`).

## Nei corsi
- **Informatica** (triennale): unità P3 sezione 3.7 (variabili e operatori booleani, legge di De Morgan). Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 82-99).

## Prerequisiti
- [[Operatori relazionali]]: combinano più confronti

## Porta a
- [[Ciclo while]]: la condizione di permanenza è booleana
- [[Ricerca lineare]]: flag found e cortocircuito

## Collegati
- [[Connettivi logici]]: and, or, not sono i connettivi e, o, non della logica
- [[Equivalenza logica]]: le leggi di De Morgan negano combinazioni di and e or
