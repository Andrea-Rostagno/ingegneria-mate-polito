---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [CSV, comma separated values, csv.reader, csv.writer, csv.DictReader, modulo csv]
tags: [competenza, area/informatica]
---

# Formato CSV

> Formato di testo per tabelle di dati con un record per riga e campi separati da virgole, letto e scritto con il modulo csv.

## Definizione / enunciato
**CSV** (Comma Separated Values): formato comune di interscambio di tabelle, leggibile anche da Excel. Un record per riga, campi separati da virgola. Problemi: spazi attorno alla virgola, campi che contengono a loro volta virgole; soluzione: racchiudere i campi tra virgolette.

A mano: `readline`/`splitlines` per le righe, `split(',')` per i campi, `strip('"')` per le virgolette. Meglio il modulo **csv** della libreria standard:
- `csv.reader(f)`: oggetto iterabile che a ogni iterazione restituisce una **lista** di stringhe (i campi della riga);
- `csv.writer(f)`: oggetto su cui chiamare `writerow(lista)` (o `writerows`);
- `csv.DictReader(f)`: restituisce ogni riga come **dizionario**, con chiavi prese dalla prima riga del file o dal parametro `fieldnames`.

Note dal prontuario: aprire i CSV con `newline=''`; se il separatore non è la virgola si usa `delimiter=';'`.

## Formule chiave
```python
import csv
file = open(FILENAME, 'r')
reader = csv.DictReader(file)
studenti = []
for record in reader :
    studenti.append(record)
file.close()
```

## Intuizione
Il modulo csv conosce le regole del formato (virgolette, virgole dentro i campi) che con `split` andrebbero gestite a mano; DictReader aggiunge i nomi dei campi.

## Come si usa
Esempi: elenco di film (titolo, anno, regista) in P7; file degli iscritti al corso (matricola, cognome, nome, email, ...) letto con DictReader in P8, dove tutti i campi vengono letti automaticamente come stringhe.

## Nei corsi
- **Informatica** (triennale): unità P7 (formato CSV, csv.reader e csv.writer), P8 (DictReader). Fonti: `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 70-75), `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 81-84), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3).

## Prerequisiti
- [[Elaborazione di file di record]]: un CSV è un file di record delimitati
- [[Moduli e import]]: si usa il modulo csv

## Porta a
- Nessun seguito diretto nel corso.
