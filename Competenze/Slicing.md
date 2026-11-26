---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [slice, porzioni, operatore di slice, start stop step, indici negativi]
tags: [competenza, area/informatica]
---

# Slicing

> L'operatore s[start:stop:step] che estrae una porzione di una sequenza (stringa, lista, tupla), con stop escluso.

## Definizione / enunciato
`seq[start : stop]` restituisce gli elementi da `start` (incluso) a `stop` (escluso). Entrambi gli indici sono opzionali: senza `start` si parte da 0, senza `stop` si arriva in fondo, `seq[:]` è una copia. Il terzo argomento è il **passo**: `seq[start:stop:step]`; con passo negativo si va all'indietro e serve `start > stop`.

**Indici negativi**: `seq[-1]` è l'ultimo elemento, `seq[-2]` il penultimo (equivale a `seq[len(seq)-1]`).

Sulle **liste** (mutabili) si può anche assegnare a una porzione: `t[6:9] = [45, 44, 40]` sostituisce tre elementi; se la lunghezza differisce la lista si allunga o accorcia; `t[6:8] = []` cancella; `t[:] = []` svuota (come `clear()`).

## Formule chiave
```python
nome = "Paperon de' Paperoni"
nome[4:10]    # "ron de"
nome[2:8:2]   # "prn"   (indici 2, 4, 6)
nome[9:3:-1]  # "ed nor"
nome[::-1]    # stringa rovesciata
temperatures[6:9]   # elementi 6, 7, 8
```

## Intuizione
Con stop escluso, `seq[a:b]` ha esattamente `b-a` elementi e `seq[:k] + seq[k:]` ricompone la sequenza: la stessa logica dei limiti asimmetrici di `range`.

## Come si usa
Esercizi tipici: estrarre sottostringhe, invertire una stringa (`[::-1]`), prendere indici pari (`[::2]`) o dispari (`[1::2]`). In P8 (p. 41) `pulita[1:]` e `pulita[:-1]` tolgono il primo e l'ultimo carattere per ripulire una parola dalla punteggiatura.

## Nei corsi
- **Informatica** (triennale): unità P2 (porzioni di stringa) e P6 (porzioni di lista, assegnazione a porzioni). Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 70-72), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 23, 38-42), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1).

## Prerequisiti
- [[Stringa in Python]]: porzioni di una sequenza indicizzata

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Lista in Python]]: le porzioni valgono anche per le liste
