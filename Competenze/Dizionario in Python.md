---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [dizionario, dict, array associativo, coppie chiave-valore, KeyError, get, items]
tags: [competenza, area/informatica]
---

# Dizionario in Python

> Contenitore mutabile di coppie chiave-valore con chiavi univoche e immutabili, in cui si accede ai valori tramite la chiave invece che la posizione.

## Definizione / enunciato
Un **dizionario** memorizza associazioni tra **chiavi** e **valori** (array associativo o mappa): le chiavi sono uniche e immutabili (stringhe, numeri, tuple), i valori qualsiasi e anche ripetuti.
- creazione: `{"Fred": 7235591, "Mary": 3841212}`; vuoto con `{}` o `dict()`; copia con `dict(d)` (mentre `d2 = d` crea un alias);
- accesso: `d[chiave]`; se la chiave non esiste solleva `KeyError`, quindi si controlla con `chiave in d`, oppure si usa `d.get(chiave, default)`;
- aggiunta o modifica: `d[chiave] = valore` (con le liste non si può aggiungere così);
- rimozione: `d.pop(chiave)`, che restituisce il valore (`KeyError` se assente);
- iterazione: `for key in d` (chiavi in ordine di inserimento, garantito da Python 3.6), `for key in sorted(d)`, `for (key, val) in d.items()` (più efficiente); `d.keys()`, `d.values()`.

Differenza dalla lista: la lista è una sequenza con indici interi da 0 a `len()-1`; il dizionario è un insieme di coppie con chiavi non necessariamente numeriche né consecutive.

## Formule chiave
```python
contacts = { "Fred": 7235591, "Mary": 3841212, "Bob": 3841212, "Sarah": 2213278 }
contacts["John"] = 4578102            # aggiunge
number = contacts.get("Tony", "missing")
freds_number = contacts.pop("Fred")
for (key, val) in contacts.items() :
    print(key, val)
count[nome] = count[nome] + 1          # dizionario come contatore
```

## Intuizione
Si può immaginare come una lista in cui l'indice non è necessariamente un numero. È il candidato naturale quando ogni elemento è identificato da una chiave univoca.

## Come si usa
Esempi delle slide: rubrica telefonica; frequenza dei nomi in un elenco (chiave nome, valore conteggio); matricola → nome (chiavi intere non consecutive) o → `['Mario', 'Rossi']`; scacchiera con chiave tupla `(riga, colonna)` e valore il pezzo; record dati con chiave = nome del campo.

## Nei corsi
- **Informatica** (triennale): unità P8 sezione 8.2. Fonti: `triennale/ANNO 1/informatica/Unita P8 - Strutture dati complesse.pdf` (p. 43-71, 119), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 3).

## Prerequisiti
- [[Lista in Python]]: generalizza l'indice intero a una chiave
- [[Tupla in Python]]: le tuple possono fare da chiave

## Porta a
- [[Elaborazione di file di record]]: ogni record diventa un dizionario
- [[Strutture dati annidate]]: contenitore esterno tipico

## Collegati
- [[Insieme in Python]]: chiavi univoche e immutabili come gli elementi di un set
- [[Alias e copia di liste]]: d2 = d è un alias, dict(d) una copia
- [[Somma, media e conteggio]]: un dizionario conta le frequenze per chiave
