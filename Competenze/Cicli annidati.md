---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [nested loops, ciclo interno, ciclo esterno]
tags: [competenza, area/informatica]
---

# Cicli annidati

> Un ciclo dentro il corpo di un altro: per ogni iterazione dell'esterno, il ciclo interno viene eseguito per intero.

## Definizione / enunciato
Problemi complessi richiedono un ciclo annidato in un altro, indentato di un livello in più. Il caso tipico è una tabella: il ciclo **esterno** itera sulle righe, quello **interno** sulle colonne della riga corrente. Il numero totale di esecuzioni del corpo interno è il prodotto delle iterazioni (se indipendenti).

## Formule chiave
```python
for x in range(1, XMAX + 1) :       # righe
    for n in range(1, NMAX + 1) :   # colonne
        print("%10.0f" % x ** n, end="")
    print()                         # a capo a fine riga
```
(corpo di `powertable.py`, P4 p. 78, con `NMAX = 4` e `XMAX = 10`)

## Intuizione
Si progetta dall'interno: prima come stampare una riga ("for n da 1 a 4 stampa x^n"), poi si mette quel ciclo dentro quello che ripete le righe. `end=""` evita l'a capo dentro la riga.

## Come si usa
Esempi delle slide: tabella delle potenze $x^1..x^4$ per $x$ da 1 a 10; triangolo di asterischi con `j` da 0 a `i`; tre righe di quattro `[]`; medie d'esame di più studenti, con un while esterno (finché ci sono studenti, sentinella "Y") e un for interno sui voti (`examaverages.py`).

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.7. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 68-92).

## Prerequisiti
- [[Ciclo for]]: un ciclo nel corpo di un altro

## Porta a
- [[Tabelle bidimensionali]]: righe e colonne si scorrono con due cicli
