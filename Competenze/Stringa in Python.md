---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [stringa, string, str, concatenazione, immutabilità delle stringhe, sequenze di escape, len]
tags: [competenza, area/informatica]
---

# Stringa in Python

> Sequenza immutabile di caratteri, con indicizzazione da 0, concatenazione, ripetizione e sequenze di escape.

## Definizione / enunciato
Una stringa è una sequenza di caratteri racchiusa tra apici singoli o doppi (`'He said "Hello"'`). Operazioni:
- `len(s)`: lunghezza; `""` è la stringa vuota;
- `+` concatenazione (entrambi gli operandi stringhe), `*` ripetizione (`"-" * 50`): esempi di **operator overloading**;
- `s[i]`: carattere di indice `i`, da 0 a `len(s)-1`; indici fuori intervallo danno `IndexError: string index out of range`.

Le stringhe sono **immutabili**: `name[0] = 'G'` dà `TypeError: 'str' object does not support item assignment`; si costruisce invece una nuova stringa. In Python non esiste il tipo carattere: un carattere è una stringa di lunghezza 1.

**Sequenze di escape**: `\"` per le virgolette, `\\` per il backslash, `\n` per andare a capo (`print("*\n**\n***")`).

## Formule chiave
```python
name = "Harry"
first = name[0]; last = name[4]
name = firstName + " " + lastName
dashes = "-" * 50
```

## Intuizione
Indicizzare da 0 significa che l'indice è lo "spostamento" dall'inizio. L'immutabilità obbliga a ragionare per costruzione: per "modificare" si crea una stringa nuova e si riassegna la variabile.

## Come si usa
Esempio P4 (p. 110-111): rimuovere spazi e trattini da un numero di carta di credito costruendo una nuova stringa: si parte da `""` e si accoda ogni carattere che non è `" "` né `"-"`. I caratteri sono memorizzati come codici interi Unicode ('H' = 72 in ASCII; `ord` e `chr` convertono).

## Nei corsi
- **Informatica** (triennale): unità P2 sezione 2.4; elaborazione con cicli in P4 sezione 4.8. Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 57-81), `triennale/ANNO 1/informatica/Unita P4 - Cicli.pdf` (p. 99-111).

## Prerequisiti
- [[Variabile]]: valore di tipo str

## Porta a
- [[Conversione di tipo]]: converte testo in numeri e viceversa
- [[Slicing]]: porzioni di una sequenza indicizzata
- [[Metodi delle stringhe]]: operazioni definite sul tipo str
- [[Output formattato]]: costruisce stringhe con valori inseriti
- [[Ciclo for]]: primo contenitore su cui iterare
- [[Lista in Python]]: stessa indicizzazione delle sequenze

## Collegati
- [[Codifica dei caratteri]]: i caratteri delle stringhe sono codici Unicode
