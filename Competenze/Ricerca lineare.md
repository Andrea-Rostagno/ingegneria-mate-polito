---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [linear search, ricerca sequenziale, primo match, ultimo match, trovare corrispondenze, rimuovere corrispondenze]
tags: [competenza, area/informatica]
---

# Ricerca lineare

> Ispezionare gli elementi di una sequenza uno alla volta finché si trova una corrispondenza o si arriva alla fine.

## Definizione / enunciato
Una ricerca lineare ispeziona gli elementi in sequenza fino a trovare la corrispondenza cercata o esaurire la sequenza. Schema con flag `found` e indice `pos`: il ciclo continua finché `pos < len(values) and not found`; se l'elemento soddisfa la condizione si pone `found = True`, altrimenti si incrementa `pos`. Alla fine `found` dice se c'è e `pos` dove.

Varianti: **ultimo match** partendo da `len(s) - 1` e decrementando finché `pos >= 0`; **tutti i match** con un for che raccoglie in una lista; **rimuovere i match** con un while che fa `pop(i)` **senza** incrementare `i` quando rimuove. Scorciatoie: `x in lista` (booleano) e `lista.index(x)` (prima posizione, `ValueError` se assente: meglio controllare prima con `in`).

## Formule chiave
```python
limit = 100; pos = 0; found = False
while pos < len(values) and not found :
    if values[pos] > limit :
        found = True
    else :
        pos = pos + 1
if found : print("Found at position:", pos)
else : print("Not found")
```

## Intuizione
Il flag nella condizione ferma il ciclo al primo successo; il cortocircuito dell'`and` garantisce che `values[pos]` non venga letto fuori intervallo.

## Come si usa
Esempi: prima cifra in una stringa (`string[position].isdigit()`), ultima cifra cercando all'indietro (P4); primo valore > 100 in una lista; eliminare da una lista le parole di lunghezza < 4 (P6 p. 62). Per insiemi grandi la verifica di appartenenza è molto più veloce con un set (P8 p. 28).

## Nei corsi
- **Informatica** (triennale): unità P4 sezione 4.8 (ricerca del primo e ultimo match), P6 sezione 6.3.5-6.3.7. Fonti: `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 105-107), `triennale/ANNO 1/informatica/Unita P6 - Liste e Tabelle (3).pdf` (p. 28-29, 60-62).
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, `RicercaSequenziale(a, k)` con flag `trovato` e `indice = -1` se la chiave manca. Caso pessimo: la chiave non c'è e si scorrono tutti gli elementi, tempo $O(n)$. Su un array ordinato la si sostituisce con la ricerca binaria, $O(\log n)$. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo03.pdf` (p. 11).

## Prerequisiti
- [[Ciclo while]]: si ferma al primo successo
- [[Operatori booleani]]: flag found e cortocircuito

## Porta a
- [[Ricerca binaria]]: su un array ordinato scende da O(n) a O(log n) (Programmazione e calcolo scientifico)
- [[Move-to-front]]: ricerca sequenziale su una lista che si riorganizza (Programmazione e calcolo scientifico)

## Collegati
- [[Operazioni sulle liste]]: in e index fanno una ricerca lineare
- [[Insieme in Python]]: in su un set è molto più veloce che su una lista
