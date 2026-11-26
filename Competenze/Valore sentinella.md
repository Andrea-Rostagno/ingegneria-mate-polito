---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [sentinel value, sentinella, priming read, lettura iniziale, variabile flag]
tags: [competenza, area/informatica]
---

# Valore sentinella

> Valore speciale che segnala la fine di una sequenza di input senza farne parte, usato per terminare un ciclo di lettura.

## Definizione / enunciato
Quando non si sa quanti dati arriveranno, si usa un valore speciale, la **sentinella**, per indicare l'ultimo: per interi positivi ad esempio 0 o −1, oppure la stringa vuota `""`. La sentinella identifica la fine dei dati ma **non fa parte dei dati**: dentro il ciclo un `if` evita di elaborarla.

Due schemi:
- **lettura iniziale** (priming read, consigliata): si legge il primo valore fuori dal ciclo e la lettura successiva va alla fine del corpo;
- **variabile flag**: `done = False; while not done:` e si pone `done = True` quando si legge la sentinella.

## Formule chiave
```python
total = 0.0; count = 0
salary = float(input("Enter a salary or -1 to finish: "))   # priming read
while salary >= 0.0 :
    total = total + salary
    count = count + 1
    salary = float(input("Enter a salary or -1 to finish: "))  # modification read
if count > 0 :
    average = total / count
```

## Intuizione
Il trucco di inizializzare la variabile a un valore fittizio per entrare nel ciclo confonde valori legittimi e sentinella; la lettura iniziale fuori dal ciclo è più pulita.

## Come si usa
Applicazioni: media degli stipendi (`sentinel.py`), somma e conteggio con input vuoto come sentinella, medie d'esame con "Y"/"N" come sentinella (P4 p. 90). Sui file la sentinella è naturale: `readline()` restituisce `""` a fine file, mentre una riga vuota è `"\n"` (P7 p. 16-17).

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.3; ripresa in P7 per la lettura dei file. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 31-39), `triennale/ANNO 1/informatica/Unita P7 - File.pdf` (p. 16-17).

## Prerequisiti
- [[Ciclo while]]: termina il ciclo di lettura

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Somma, media e conteggio]]: la lettura dei valori termina alla sentinella
- [[Lettura di file di testo]]: la stringa vuota segnala la fine del file
