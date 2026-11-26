---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [string methods, split, join, strip, rstrip, upper, lower, isdigit, find, operatore in, funzioni e metodi]
tags: [competenza, area/informatica]
---

# Metodi delle stringhe

> I metodi chiamati con la sintassi oggetto.metodo() per analizzare, trasformare, dividere e unire stringhe.

## Definizione / enunciato
**Funzioni e metodi** (P2 p. 77-78): in Python ogni valore è un oggetto; un metodo è una funzione specifica di un tipo, chiamata con la notazione puntata `obj.metodo()`; una funzione è generale e si chiama `func(param)`. I metodi delle stringhe restituiscono **nuove** stringhe (le stringhe sono immutabili).

Principali (slide e prontuario):
- trasformazione: `upper()`, `lower()`, `replace(s1, s2)`, `strip()`, `lstrip()`, `rstrip()` (con argomento: `rstrip(".,?!")` toglie quei caratteri);
- test: `isdigit()`, `isalpha()`, `isalnum()`, `isupper()`, `islower()`, `isspace()`, `startswith()`, `endswith()`;
- ricerca: `s1 in s`, `not in`, `count(s1)`, `find(s1)` (−1 se assente), `index(s1)` (`ValueError` se assente);
- divisione/unione: `split()` (sugli spazi, o su un separatore: `split(":")`), `rsplit()`, `splitlines()`, `sep.join(lista)`.

## Formule chiave
```python
"Way" in "John Wayne"          # True
filename.endswith(".html")
wordList = line.split()        # lista di parole
result = ', '.join(names)      # "Harry, Emily, Bob"
line = line.rstrip()           # toglie '\n' finale (e spazi)
```

## Intuizione
`split` e `join` sono operazioni inverse: la prima trasforma una riga di testo in lista di campi, la seconda una lista in riga di testo. Sono il ponte tra testo e strutture dati.

## Come si usa
Uso tipico (P7): leggere una riga da file, togliere il fine-riga con `rstrip()`, dividerla in parole o campi con `split()`, ripulire la punteggiatura con `rstrip(".,?!")`. Esempio P4: contare le maiuscole con `ch.isupper()` e le vocali con `ch.lower() in "aeiou"`.

## Nei corsi
- **Informatica** (triennale): unità P2 (funzioni e metodi), P3 sezione 3.8 (analisi di stringhe), P6 (join e split), P7 sezione 7.2 (elaborare input testuali). Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 77-79), `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 100-106), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 56-58), `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 30-41), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1-2).

## Prerequisiti
- [[Stringa in Python]]: operazioni definite sul tipo str

## Porta a
- [[Lettura di file di testo]]: rstrip e split ripuliscono le righe
