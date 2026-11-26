---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [espressioni aritmetiche, divisione intera, operatore modulo, precedenza degli operatori, PEMDAS]
tags: [competenza, area/informatica]
---

# Operatori aritmetici

> Gli operatori + - * / ** // % di Python, con le regole di precedenza e di tipo del risultato.

## Definizione / enunciato
Operatori: addizione `+`, sottrazione `-`, moltiplicazione `*`, divisione `/`, potenza `**`; **divisione intera** `//` (quoziente, parte frazionaria ignorata); **resto** `%` (modulo). Precedenza simile all'algebra (PEMDAS: parentesi, esponente, moltiplicazione/divisione, addizione/sottrazione); si usano le parentesi, es. `b * ((1 + r / 100) ** n)`.

Tipo del risultato: se un'espressione mescola `int` e `float` il risultato è `float` (`7 + 4.0` dà `11.0`); `/` tra interi dà sempre un float (`7 / 4` dà 1.75); `7 // 4` dà 1, `7 % 4` dà 3. Con operandi frazionari `//` divide e poi tronca. Mescolare stringhe e numeri dà errore.

Parentesi bilanciate: in ogni punto dell'espressione le parentesi aperte devono essere almeno quante quelle chiuse, e alla fine i due conteggi devono coincidere: `((a + b) * t / 2 * (1 - t)` è sbagliata.

## Formule chiave
```python
pennies = 1729
dollars = pennies // 100   # 17
cents = pennies % 100      # 29
```

## Intuizione
`//` e `%` insieme scompongono un numero: quoziente e resto della divisione intera. È lo strumento per estrarre cifre (`n % 10` è l'ultima cifra, `n // 10` toglie l'ultima cifra).

## Come si usa
Esempio delle piastrelle (P2 p. 52-56), da risolvere prima a mano: larghezza totale 100, piastrella 5; coppie = parte intera di (100 − 5) / (2 × 5) = 9; piastrelle = 1 + 2 × 9 = 19; spazio a ciascun estremo = (100 − 19 × 5) / 2 = 2,5. In P4 (p. 23-29) la somma delle cifre di 1729 usa `n % 10` e `n // 10` in un ciclo.

## Nei corsi
- **Informatica** (triennale): unità P2 sezioni 2.2-2.3. Fonti: `triennale/ANNO 1/informatica/Unita P2 - Numeri e stringhe.pdf` (p. 29-56).

## Prerequisiti
- [[Variabile]]: le espressioni combinano variabili e valori

## Porta a
- [[Confronto tra numeri floating point]]: i calcoli accumulano errori
