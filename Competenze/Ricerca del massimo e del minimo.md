---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [largest, smallest, posizione del minimo, max min con key]
tags: [competenza, area/informatica]
---

# Ricerca del massimo e del minimo

> Algoritmo che scorre una sequenza tenendo il valore (o la posizione) più grande o più piccolo visto finora.

## Definizione / enunciato
Si prende il primo valore come massimo provvisorio ("per definizione è il più grande visto finora"), poi si confronta ogni valore successivo e si aggiorna se è maggiore. Per il minimo si usa `<`. Equivale alle funzioni `max(values)` e `min(values)`.

**Adattamento alla posizione** (P6 p. 101): se serve sapere *dove* sta il minimo (per rimuoverlo), si tiene l'indice invece del valore e si confronta con `values[smallestPosition]`.

Con `key=` (P8): `max(esami, key=itemgetter('voto'))` restituisce l'**intero elemento** (dizionario o lista) con il campo massimo; `max(enumerate(casuali), key=itemgetter(1))` dà in un passaggio posizione e valore del massimo.

## Formule chiave
```python
largest = values[0]
for i in range(1, len(values)) :
    if values[i] > largest :
        largest = values[i]

smallestPosition = 0
for i in range(1, len(values)) :
    if values[i] < values[smallestPosition] :
        smallestPosition = i
```

## Intuizione
Inizializzare con il primo elemento (e non con 0) evita errori quando tutti i valori sono negativi o tutti grandi. Lo stesso schema vale per i valori letti da input, con lettura iniziale fuori dal ciclo.

## Come si usa
Problema P6 (adattare algoritmi): punteggio finale = somma dei punteggi escluso il più basso (8, 7, 8.5, 9.5, 7, 5, 10 dà 50) oppure esclusi i due più bassi (8, 4, 7, 9, 9, 7, 5, 10 dà 50). Si combina posizione del minimo, `pop` e `sum`, chiamando `removeMinimum(scores)` due volte e gestendo a parte liste vuote o con un solo elemento (`scores.py`).

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.5, P6 sezioni 6.3.4 e 6.5, P8 (key con itemgetter). Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 46-47), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 59, 98-108), `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 89-90).

## Prerequisiti
- [[Ciclo for]]: scorre tutti gli elementi una volta

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Ordinamento di liste]]: max e min accettano lo stesso key
