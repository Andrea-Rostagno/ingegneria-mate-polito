---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [set, set Python, issubset, hashable, elementi univoci]
tags: [competenza, area/informatica]
---

# Insieme in Python

> Contenitore mutabile e non ordinato di elementi univoci e immutabili, con le operazioni degli insiemi matematici e ricerca molto rapida.

## Definizione / enunciato
Un **set** memorizza una raccolta di valori **univoci** (niente duplicati), **non ordinati** e non accessibili per posizione (`cast[i]` dà `TypeError: 'set' object is not subscriptable`). Gli elementi devono essere **immutabili e confrontabili** (hashable): numeri, stringhe, tuple sì; liste, dizionari, file no.
- creazione: `{"Luigi", "Gumbys", "Spiny"}` oppure `set(sequenza)`; l'insieme vuoto è `set()`, perché `{}` crea un dizionario vuoto;
- `len(s)`, `x in s`, `x not in s`, `for x in s` (ordine imprevedibile; `sorted(s)` per un ordine definito);
- `add(x)` (nessun effetto se già presente), `discard(x)` (nessun effetto se assente), `remove(x)` (eccezione se assente), `clear()`;
- `s.issubset(t)` (anche `s <= t`), `s == t`;
- `s.union(t)` (`s | t`), `s.intersection(t)` (`s & t`), `s.difference(t)` (`s - t`), `s.symmetric_difference(t)` (`s ^ t`): restituiscono un **nuovo** insieme.

## Formule chiave
```python
british = { "Red", "Blue", "White" }
italian = { "Red", "White", "Green" }
inEither = british.union(italian)        # {"Blue", "Green", "White", "Red"}
inBoth = british.intersection(italian)   # {"White", "Red"}
italian.difference(british)              # {'Green'}
```

## Intuizione
Poiché non deve mantenere un ordine, l'insieme organizza gli elementi in modo che la ricerca sia molto rapida: usare `set.add` invece di `if item not in lista: lista.append(item)` può essere fino a 10 volte più veloce (P8 p. 28). Gli operatori abbreviati sono più compatti ma meno leggibili.

## Come si usa
Esempi: contare le parole distinte di un testo aggiungendole a un insieme dopo averle ripulite (`countwords.py`; il testo di "Mary had a little lamb" ha 57 parole uniche); **controllo ortografico** (`spellcheck.py`): leggere le parole del dizionario e quelle del racconto in due insiemi, e se il racconto non è sottoinsieme del dizionario stampare `story.difference(words)` in ordine.

## Nei corsi
- **Informatica** (triennale): unità P8 sezione 8.1. Fonti: `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 4-42, 117-118), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 2).

## Prerequisiti
- [[Lista in Python]]: contenitore come la lista ma senza ordine né duplicati

## Porta a
- [[Strutture dati annidate]]: valori univoci dentro un dizionario

## Collegati
- [[Ricerca lineare]]: in su un set è molto più veloce che su una lista
- [[List comprehension]]: esiste anche la set comprehension
- [[Operazioni sugli insiemi]]: union, intersection, difference implementano le operazioni matematiche
- [[Dizionario in Python]]: chiavi univoche e immutabili come gli elementi di un set
