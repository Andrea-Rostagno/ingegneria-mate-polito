---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [operatori di confronto, relational operators, uguaglianza ==, confronto di stringhe, ordine lessicografico]
tags: [competenza, area/informatica]
---

# Operatori relazionali

> Gli operatori < <= > >= == != che confrontano numeri e stringhe e producono un valore booleano.

## Definizione / enunciato
Gli operatori relazionali `<`, `<=`, `>`, `>=`, `==`, `!=` confrontano due valori e restituiscono `True` o `False`; sono la condizione tipica di un `if` o di un ciclo. **Mai confondere** `=` (assegnazione) con `==` (test di uguaglianza).

Le stringhe si confrontano con `==` e `!=` (uguali se tutti i caratteri coincidono) e in **ordine alfabetico** con `<` e `>`, secondo i codici Unicode (sottoinsieme ASCII): le maiuscole vengono prima delle minuscole ('Z' prima di 'a'), lo spazio prima di tutti i caratteri stampabili, le cifre prima delle lettere; l'ordine delle lettere accentate non è sempre corretto.

**Precedenza**: gli operatori aritmetici hanno precedenza sui relazionali, quindi in `if floor > height + 1:` il calcolo avviene prima del confronto.

## Formule chiave
```python
if floor == 13 : ...
if name1 != name2 : print("The strings are not identical")
if string1 < string2 : ...   # ordine alfabetico
```

## Intuizione
Un confronto è un'espressione come le altre, solo che il suo valore è un booleano: si può salvare in una variabile e riusare.

## Come si usa
Per i float il test `==` è inaffidabile: `math.sqrt(2.0)**2 == 2.0` è falso; si confronta la differenza con una tolleranza (vedi la nota sugli errori di arrotondamento).

## Nei corsi
- **Informatica** (triennale): unità P3 sezione 3.2. Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 43-56).

## Prerequisiti
- [[Variabile]]: confronta valori di variabili

## Porta a
- [[Istruzione if]]: la condizione è tipicamente un confronto
- [[Operatori booleani]]: combinano più confronti

## Collegati
- [[Confronto tra numeri floating point]]: il confronto == tra float è inaffidabile
- [[Codifica dei caratteri]]: l'ordine alfabetico segue i codici dei caratteri
