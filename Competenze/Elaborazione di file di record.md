---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [record di dati, campi, file con delimitatore, sei passi per elaborare file di testo, record come dizionario]
tags: [competenza, area/informatica]
---

# Elaborazione di file di record

> Leggere file in cui ogni record è composto da più campi (su una riga con delimitatore o su più righe) e memorizzarli in strutture dati.

## Definizione / enunciato
Un file di testo può contenere una sequenza di **record**, ciascuno con diversi **campi** (es. matricola, nome, indirizzo, anno). Si legge l'intero record prima di elaborarlo. Formati:
- **un record per riga, campi delimitati** (il più comune): `China:1330044605`; si estraggono i campi con `line.split(":")`;
- **un record su più righe, un campo per riga**: si leggono più righe per record con `readline()`.

**Sei passi** (P7 p. 61-68): capire l'elaborazione (al volo o memorizzando tutto); determinare file da leggere e scrivere; ottenere i nomi dei file (costanti, input, linea di comando); scegliere se iterare sul file o leggere righe singole (record su una riga: iterare; dati su più righe o più file: `readline`); estrarre i dati da ogni riga; dividere in funzioni.

**Record come dizionario** (P8): invece di una lista di campi (`person[1]` è il cognome o era `person[2]`?), ogni record è un dizionario con chiave = nome del campo; il file diventa una **lista di dizionari**.

## Formule chiave
```python
def extract_record(infile) :
    record = {}
    line = infile.readline()
    if line != "" :
        fields = line.split(":")
        record["country"] = fields[0]
        record["population"] = int(fields[1])
    return record
```
(P8 p. 75)

## Intuizione
Il record è l'unità logica dei dati; la riga è solo il modo in cui è scritto. Usare nomi di campo invece di posizioni evita errori e rende il codice leggibile, come le strutture del C o gli oggetti di Java.

## Come si usa
Esempio P8 (p. 78): da un CSV di studenti si saltano le intestazioni (flag `prima`) e per ogni riga si aggiunge `{'matricola': int(record[0]), 'cognome': record[1], 'nome': record[2]}` alla lista `studenti`, poi la si ordina per campo con `itemgetter`. Esempio P7: densità di popolazione da due file con record paralleli.

## Nei corsi
- **Informatica** (triennale): unità P7 sezione 7.2 (file che contengono record), P8 (memorizzare record di dati, argomenti avanzati 8.3). Fonti: `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 44-48, 58-69), `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 73-80).

## Prerequisiti
- [[Lettura di file di testo]]: si legge riga per riga
- [[Dizionario in Python]]: ogni record diventa un dizionario

## Porta a
- [[Formato CSV]]: un CSV è un file di record delimitati

## Collegati
- [[Raffinamenti successivi]]: l'ultimo dei sei passi è dividere in funzioni
- [[Strutture dati annidate]]: la lista di dizionari rappresenta un file di record
