---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [somma binaria, sottrazione binaria, riporto, carry, prestito, borrow]
tags: [competenza, area/informatica]
---

# Aritmetica binaria

> Somma e sottrazione di numeri binari bit per bit con riporti e prestiti, e la condizione di overflow su un numero fisso di bit.

## Definizione / enunciato
**Somma**: regole $0+0=0$, $0+1=1$, $1+0=1$, $1+1=0$ con **riporto** (carry) 1; si sommano i bit dello stesso peso propagando i riporti.

**Sottrazione**: $0-0=0$, $0-1=1$ con **prestito** (borrow) 1, $1-0=1$, $1-1=0$; si sottraggono i bit dello stesso peso gestendo i prestiti.

**Overflow**: errore che si verifica quando il risultato di un'operazione non è rappresentabile con la stessa codifica e lo stesso numero di bit degli operandi. È una condizione "dinamica": esiste solo come risultato di un'operazione. In binario puro, lavorando con un numero fisso di bit, c'è overflow quando si ha **carry sul MSB**.

## Formule chiave
Esempi delle slide (4 bit):
$$0110 + 0111 = 1101 \qquad (6 + 7 = 13)$$
$$1001 - 0110 = 0011 \qquad (9 - 6 = 3)$$
$$0101 + 1110 = 1\,0011 \quad \text{overflow (carry sul MSB)}$$
(le traduzioni in decimale sono un controllo mio, non nelle slide)

## Intuizione
Sono le stesse regole dell'aritmetica in colonna in base 10, con il riporto che scatta a 2 invece che a 10. Il limite fisso di bit è ciò che rende possibile l'overflow, che nella CPU è segnalato da un flag.

## Come si usa
Esercizio tipico: eseguire somme e sottrazioni su N bit e dire se c'è overflow. Per i numeri relativi le regole cambiano (si veda il complemento a due, dove il carry sul MSB si trascura).

## Nei corsi
- **Informatica** (triennale): unità T1. Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 12-16).

## Prerequisiti
- [[Sistema di numerazione posizionale]]: opera su numeri in base 2

## Porta a
- [[Complemento a due]]: somma e sottrazione bit a bit con overflow

## Collegati
- [[Unità centrale di elaborazione]]: la ALU somma in binario e segnala l'overflow con un flag
- [[Underflow e overflow]]: overflow intero su N bit, analogo del caso floating-point
