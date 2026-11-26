---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [readline, read, readlines, for line in file, fine del file, EOF, leggere parole, leggere caratteri]
tags: [competenza, area/informatica]
---

# Lettura di file di testo

> Leggere un file di testo per righe, parole o caratteri, riconoscendo la fine del file e convertendo i dati letti.

## Definizione / enunciato
All'apertura un "cursore" immaginario è all'inizio del file; ogni lettura parte dal cursore e lo fa avanzare.
- `infile.readline()`: legge fino al `'\n'` compreso. A fine file restituisce `""`; una riga vuota è `"\n"`.
- `for line in infile:`: il file è un contenitore di righe (readline implicita). Per iterarlo di nuovo va chiuso e riaperto.
- `infile.read(n)`: n caratteri; `read(1)` legge un carattere (`""` a fine file); `read()` tutto il file in un'unica stringa.
- `infile.readlines()`: lista di stringhe, una per riga (equivale a `list(infile)`).

Dopo la lettura: `line.rstrip()` toglie il fine-riga (e gli spazi finali; `rstrip('\n')` solo il newline), `line.split()` divide in parole, `int()`/`float()` convertono (il `'\n'` finale viene ignorato).

## Formule chiave
```python
line = infile.readline()
while line != "" :          # "" è la sentinella di fine file
    # elabora la riga
    line = infile.readline()

for line in inputFile :
    for word in line.split() :
        print(word.rstrip(".,?!"))
```

## Intuizione
Tutto ciò che si legge è testo: le righe sono stringhe da ripulire, dividere e convertire, esattamente come l'input da tastiera.

## Come si usa
Esempio `total.py` (P7 p. 21-23): leggere numeri uno per riga (32.0, 54.0, 67.5, 80.25, 115.0) e scrivere un file con i valori incolonnati, `Total: 348.75` e `Average: 69.75`. Esercizio P7 p. 55-57: leggere coppie di interi da `estremi.dat` e scrivere le differenze x−y in `differenze.dat`, con `for` sul file oppure con `readline`.

## Nei corsi
- **Informatica** (triennale): unità P7 sezioni 7.1-7.2. Fonti: `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 13-18, 26-43, 49-57), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3).

## Prerequisiti
- [[Apertura e chiusura di file]]: si legge da un file aperto in lettura
- [[Metodi delle stringhe]]: rstrip e split ripuliscono le righe

## Porta a
- [[Elaborazione di file di record]]: si legge riga per riga

## Collegati
- [[Valore sentinella]]: la stringa vuota segnala la fine del file
- [[Ciclo for]]: il file è un contenitore di righe
