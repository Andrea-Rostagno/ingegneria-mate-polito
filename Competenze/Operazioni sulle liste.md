---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [append, insert, pop, remove, extend, index, concatenazione di liste, replicazione, metodi delle liste]
tags: [competenza, area/informatica]
---

# Operazioni sulle liste

> I metodi e gli operatori per aggiungere, inserire, cercare, rimuovere, concatenare e confrontare elementi di una lista.

## Definizione / enunciato
- **Aggiungere** in coda: `friends.append("Harry")` (spesso partendo da `friends = []`).
- **Inserire** in posizione: `friends.insert(1, "Cindy")` (gli altri slittano avanti).
- **Cercare**: `"Cindy" in friends` (booleano); `friends.index("Emily")` (prima posizione, `ValueError` se assente).
- **Rimuovere**: `pop(i)` per posizione (restituisce l'elemento; `pop()` toglie l'ultimo), `remove(x)` per valore (`ValueError` se assente), `clear()` svuota.
- **Concatenare**: `a + b` crea una nuova lista; `a.extend(b)` modifica `a`. Non confondere `append(un_elemento)` con `extend(una_lista)`.
- **Replicare**: `[1, 2, 3] * 4`; uso tipico `monthlyScores = [0] * 12`.
- **Confrontare**: `==` vero se stessi elementi nello stesso ordine; `!=`.
- **Funzioni**: `sum()`, `max()`, `min()` (anche su stringhe: `min(["Fred", "Ann", "Sue"])` dà "Ann"), `len()`, `list()`; `count(x)`, `reverse()`.

## Formule chiave
```python
friends = []
friends.append("Harry"); friends.append("Emily")
friends.insert(1, "Cindy")
n = friends.index("Emily")
friends.pop(1)
ourFriends = myFriends + yourFriends
```

## Intuizione
Metodi che modificano la lista "sul posto" (append, insert, pop, extend, sort) contro operatori che creano una lista nuova (`+`, `*`, slicing): la differenza conta quando la lista è condivisa da alias.

## Come si usa
Leggere input in una lista (P6 p. 68): `values = []`, poi `values.append(float(userInput))` finché l'utente non scrive "Q". Riempire una lista di quadrati: `for i in range(n): values.append(i * i)`.

## Nei corsi
- **Informatica** (triennale): unità P6 sezione 6.2 e 6.3.1. Fonti: `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 24-48, 51, 68-69), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 2).

## Prerequisiti
- [[Lista in Python]]: operazioni definite sul tipo list

## Porta a
- [[Ordinamento di liste]]: sort è un metodo delle liste

## Collegati
- [[Somma, media e conteggio]]: sum, len e count come scorciatoie degli accumulatori
- [[Ricerca lineare]]: in e index fanno una ricerca lineare
