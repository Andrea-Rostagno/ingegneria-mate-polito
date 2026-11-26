---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [type conversion, casting, int(), float(), str(), input(), ValueError, funzione input]
tags: [competenza, area/informatica]
---

# Conversione di tipo

> Le funzioni int(), float() e str() per passare tra numeri e stringhe, indispensabili per leggere numeri da tastiera o da file.

## Definizione / enunciato
- `int(x)`: da float tronca verso lo zero (la parte frazionaria si perde, senza arrotondamento); da stringa converte se la stringa rappresenta un intero.
- `float(x)`: converte un intero o una stringa in virgola mobile.
- `str(x)`: converte un numero in stringa (necessario per concatenarlo con `+`).
- Se la stringa non rappresenta un numero corretto si ha `ValueError: invalid literal for int() with base 10: 'ciao'`.

Altre funzioni di arrotondamento (P2 p. 46): `math.floor(x)` (per difetto), `math.ceil(x)` (per eccesso), `math.trunc(x)` (troncamento, diverso da floor per i negativi), `round(x, d)` (d cifre decimali, o intero più vicino se d manca).

**Input** (P3): `input(messaggio)` legge una riga dalla console e restituisce sempre una **stringa**; per un numero va convertita.

## Formule chiave
```python
age = int(input("Inserisci la tua età: "))
price = float(input("Inserisci il prezzo: "))
dollars = int(balance)      # tronca, non arrotonda
val = int("1729"); price = float("17.29")
```

## Intuizione
Il testo digitato dall'utente o letto da file è sempre una stringa di caratteri: per fare aritmetica bisogna interpretarla come numero, e l'interpretazione può fallire.

## Come si usa
Uso tipico: leggere dati numerici con `input()` o con `readline()` e convertirli; il carattere di fine riga finale viene ignorato da `int()` e `float()` (P7 p. 18). Il `ValueError` di una conversione fallita si intercetta con `try/except` (P7) per validare l'input.

## Nei corsi
- **Informatica** (triennale): unità P2 sezione 2.2.4 e 2.4, P3 sezione 2.5. Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 45-46, 63-65), `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 4-6), `triennale/ANNO 1/informatica/Python_Cheat_Sheet-v2.6.pdf` (p. 1).

## Prerequisiti
- [[Variabile]]: cambia il tipo del valore
- [[Stringa in Python]]: converte testo in numeri e viceversa

## Porta a
- [[Validazione dell'input]]: l'input va convertito e può fallire
