---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [sort, sorted, reverse=True, itemgetter, chiave di ordinamento, key]
tags: [competenza, area/informatica]
---

# Ordinamento di liste

> Ordinare una lista sul posto con sort() o crearne una copia ordinata con sorted(), anche in ordine inverso o secondo un campo con key=itemgetter.

## Definizione / enunciato
- `values.sort()`: ordina **sul posto** dal minore al maggiore (numeri o stringhe), modificando la lista.
- `sorted(values)`: restituisce una **nuova** lista ordinata, lasciando immutata l'originale; funziona su qualsiasi contenitore (anche insiemi e chiavi di dizionari, restituendo una lista).
- `reverse=True` ordina dal maggiore al minore.
- **Chiave di ordinamento**: una lista di dizionari non si può ordinare direttamente (`TypeError: '<' not supported between instances of 'dict' and 'dict'`). Serve `key=`, una funzione calcolata su ogni elemento; nei casi semplici è `operator.itemgetter('campo')` per i dizionari o `itemgetter(n)` per liste e tuple. `key` e `reverse` si possono combinare.

## Formule chiave
```python
values = [1, 16, 9, 4]
values.sort()                         # [1, 4, 9, 16]
other = sorted(values, reverse=True)  # [16, 9, 4, 1], values invariata
from operator import itemgetter
studenti.sort(key=itemgetter('cognome'))
caselle.sort(key=itemgetter(1))
for key in sorted(contacts) : ...
```

## Intuizione
La chiave dice "rispetto a cosa" confrontare: il record intero non ha un ordine naturale, un suo campo sì. Il caso generale (funzioni `lambda`) non è trattato nel corso.

## Come si usa
Esempi: stampare un insieme in ordine alfabetico con `sorted(cast)` (P8 p. 14); rubrica ordinata per nome con `sorted(contacts)` (P8 p. 60); elenco studenti letto da CSV ordinato per matricola, nome o cognome (P8 p. 87).

## Nei corsi
- **Informatica** (triennale): unità P6 sezione 6.2 (ordinamento) e P8 (ordinare una lista di dizionari). Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 36-37), `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 14, 60, 85-90), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 2).

## Prerequisiti
- [[Operazioni sulle liste]]: sort è un metodo delle liste

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Ricerca del massimo e del minimo]]: max e min accettano lo stesso key
- [[Argomenti posizionali e nominali]]: reverse e key sono parametri nominali
- [[Scambio di elementi]]: gli ordinamenti si basano su scambi ripetuti
