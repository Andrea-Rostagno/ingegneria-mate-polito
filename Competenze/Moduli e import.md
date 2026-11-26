---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [libreria standard, import, from import, pip, PyPI, funzioni predefinite, modulo driver]
tags: [competenza, area/informatica]
---

# Moduli e import

> Organizzazione del codice Python in moduli (della libreria standard, esterni o scritti da noi) e le tre forme dell'istruzione import.

## Definizione / enunciato
- **Funzioni predefinite** (built-in): sempre disponibili, es. `print()`, `abs()`, `round()`, `len()`.
- **Libreria standard**: parte di ogni installazione Python, organizzata in **moduli** (più di 200: `math`, `random`, `statistics`, `os.path`, `csv`, `json`, ...); prima di usarne le funzioni bisogna importare il modulo.
- **Librerie aggiuntive**: scaricate da PyPI (oltre 200k moduli) con `pip install modulo` o dall'IDE, poi importate.
- **Moduli propri** (P8): un programma grande si divide in un modulo principale (*driver*, con `main()`) e moduli supplementari con funzioni e costanti; facilita test, debug e lavoro in gruppo.

## Formule chiave
```python
from math import sqrt, sin, cos   # solo le funzioni elencate
from math import *                # tutte le funzioni del modulo
import math                       # il modulo: si scrive math.sqrt(x)
from tabulardata import readData, printReport   # modulo scritto da noi
```

## Intuizione
Un modulo è un contenitore di nomi: `import math` porta dentro solo il nome `math`, e le funzioni si raggiungono con la notazione puntata; `from ... import` porta direttamente i nomi scelti.

## Come si usa
Esempio P8 (p. 114-115): l'esercizio sulle vendite di gelati è diviso in `tabulardata.py` (lettura dei dati e stampa di un dizionario di liste con totali) e `salesreport.py` (driver con `main`); le funzioni di `tabulardata` sono riusabili in altri programmi.

## Nei corsi
- **Informatica** (triennale): unità P2 (librerie e moduli), P5 (trovare funzioni nelle librerie, installare moduli in PyCharm), P8 sezione 8.3 (dividere il programma in più parti). Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 36-44), `triennale/ANNO 1/informatica/Unita P5 - Funzioni.pdf` (p. 13-16), `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 110-115).

## Prerequisiti
- [[Definizione di funzione]]: un modulo raccoglie funzioni correlate

## Porta a
- [[Numeri pseudo-casuali]]: funzioni del modulo random
- [[Formato CSV]]: si usa il modulo csv

## Collegati
- [[Funzione main]]: __name__ distingue esecuzione diretta e import
