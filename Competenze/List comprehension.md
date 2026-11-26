---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [comprensione di lista, set comprehension, dict comprehension]
tags: [competenza, area/informatica]
---

# List comprehension

> Sintassi compatta per costruire una lista (o tupla, insieme, dizionario) trasformando e filtrando gli elementi di un altro contenitore.

## Definizione / enunciato
Lo schema classico per costruire una lista applicando un'operazione a ogni elemento di un'altra sequenza usa `append` in un ciclo: chiaro ma lungo. La **list comprehension** lo scrive in una riga:
- `[ espressione(elemento) for elemento in contenitore ]`
- con filtro: `[ espressione(elemento) for elemento in contenitore if condizione(elemento) ]`
- con più cicli: `[ espressione(e1, e2) for e1 in c1 for e2 in c2 if condizione(e1, e2) ]`

La stessa sintassi vale per tuple, insiemi e dizionari, cambiando il tipo di parentesi.

## Formule chiave
```python
lista = [ i*i for i in range(0,10) ]
tupla = tuple( i*i for i in range(0,10) )
insieme = { i*i for i in range(0,10) }
dizionario = { i+1 : i*i for i in range(0,10) }
```

## Intuizione
È la traduzione diretta della notazione insiemistica $\{f(x) : x \in A,\ P(x)\}$: si dice cosa contiene il risultato invece di come costruirlo passo per passo.

## Come si usa
Sostituisce lo schema "riempire una lista" (`values = []; for i in range(n): values.append(i * i)`) e quello "trovare tutte le corrispondenze" (`[e for e in values if e > limit]`).

## Nei corsi
- **Informatica** (triennale): unità P6, sezione sulle comprehension (non nel libro di testo; rimandi a realpython e alla documentazione). Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 91-96).

## Prerequisiti
- [[Lista in Python]]: costruisce una nuova lista
- [[Ciclo for]]: riscrive in forma compatta un ciclo for

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Insieme in Python]]: esiste anche la set comprehension
