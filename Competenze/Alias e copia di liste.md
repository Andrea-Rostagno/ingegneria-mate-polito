---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [riferimento, reference, alias, copia di una lista, list(), shallow copy, deep copy]
tags: [competenza, area/informatica]
---

# Alias e copia di liste

> Una variabile lista contiene un riferimento alla lista: assegnarla a un'altra variabile crea un alias, non una copia.

## Definizione / enunciato
Una variabile lista non contiene gli elementi ma un **riferimento** (puntatore) alla zona di memoria con il contenuto della lista. Copiando la variabile, `values = scores`, si copia il riferimento: le due variabili sono **alias** della stessa lista, e una modifica fatta tramite una (`scores[3] = 10`) si vede dall'altra (`values[3]` vale 10).

Per una **copia** vera (nuova lista con gli stessi elementi nello stesso ordine) si usa `list(values)`, `values.copy()` o `values[:]`. Dal prontuario: `copy.copy(x)` fa una copia superficiale (nuovo contenitore con riferimenti agli stessi oggetti), `copy.deepcopy(x)` una copia profonda (copia anche gli oggetti contenuti).

## Formule chiave
```python
math_constants = [3.1415, 2.718]
best_constants = math_constants        # alias
my_constants = list(math_constants)    # copia
math_constants.append(0.001)           # visibile da best_constants, non da my_constants
```

## Intuizione
Il valore della lista vive in un solo posto; i nomi sono frecce verso di esso. pythontutor.com disegna proprio queste frecce.

## Come si usa
Conseguenza nelle funzioni: il parametro lista è un alias dell'argomento, quindi `values[i] = ...`, `append`, `insert`, `pop`, `extend`, `sort` modificano la lista del chiamante, mentre `values = []` o `values = sorted(values)` creano un nuovo oggetto e "perdono" l'alias (P6 p. 84). Lo stesso vale per i dizionari: `contacts2 = contacts` è un alias, `dict(contacts)` una copia (P8 p. 49-50).

## Nei corsi
- **Informatica** (triennale): unità P6 sezione 6.1 (riferimenti, alias, copiare liste) e 6.4. Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 17-22, 84), `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 49-50), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3).

## Prerequisiti
- [[Lista in Python]]: le variabili lista sono riferimenti

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Passaggio di parametri]]: il parametro lista è un alias dell'argomento
- [[Dizionario in Python]]: d2 = d è un alias, dict(d) una copia
