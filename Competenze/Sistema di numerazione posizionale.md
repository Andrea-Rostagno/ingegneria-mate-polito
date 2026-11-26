---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [sistema binario, base 2, conversione binario decimale, sistema esadecimale, sistema ottale, bit, byte, MSB, LSB]
tags: [competenza, area/informatica]
---

# Sistema di numerazione posizionale

> Rappresentazione di un numero come somma di cifre pesate per potenze della base; in base 2 è la codifica naturale dei numeri nel calcolatore.

## Definizione / enunciato
In un sistema **posizionale** di base $B$ le cifre sono $\{0, 1, \dots, B-1\}$ e la cifra in posizione $i$ ha peso $B^i$. Il sistema indo-arabo è decimale e posizionale ($252 = 2\cdot10^2 + 5\cdot10^1 + 2\cdot10^0$); egiziano, romano e greco sono additivi (non posizionali).

**Binario**: base 2, cifre 0 e 1 (bit = BInary digiT). **Ottale** (base 8) ed **esadecimale** (base 16, cifre 0-9 e A-F) servono a scrivere in modo compatto i numeri binari, raggruppando i bit a 3 a 3 e a 4 a 4 da destra.

Terminologia: bit = una cifra; **byte** = 8 bit; **word** = aggregazione di 1, 2, 4 o 8 byte (celle di memoria); MSB e LSB sono il bit più e meno significativo.

## Formule chiave
$$A = \sum_{i=0}^{N-1} a_i\, B^i \qquad (a_{N-1}\dots a_1 a_0 \text{ su } N \text{ cifre})$$
Con $N$ bit (numeri naturali): $2^N$ combinazioni, valori $0 \le x \le 2^N - 1$. Tabella delle slide: 4 bit fino a 15, 8 bit fino a 255, 16 bit fino a 65 535, 32 bit fino a 4 294 967 295.

## Intuizione
Da binario a decimale si applica la definizione (somma pesata). Da decimale a binario si fanno **divisioni successive per 2** e si leggono i resti in ordine inverso: il primo resto è il bit meno significativo.

## Come si usa
Esempi delle slide: $101_2 = 1\cdot4 + 0\cdot2 + 1\cdot1 = 5_{10}$; $1101_2 = 8+4+0+1 = 13_{10}$; 13 diviso 2 dà quozienti 6, 3, 1, 0 e resti 1, 0, 1, 1, quindi $13_{10} = 1101_2$; $10111001_2$ in ottale ($10|111|001$) è $271_8$ e in esadecimale ($1011|1001$) è $B9_{16}$. In Python le f-string convertono con i tipi `b`, `o`, `x` (P3 p. 16).

## Nei corsi
- **Informatica** (triennale): unità T1, prima parte (numeri naturali). Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 2-11, 17-18).

## Prerequisiti
- Nessuno nel corso: è un punto di partenza.

## Porta a
- [[Aritmetica binaria]]: opera su numeri in base 2
- [[Complemento a due]]: pesi delle cifre binarie
- [[Codifica dei caratteri]]: i codici sono numeri binari su N bit

## Collegati
- [[Output formattato]]: i formati b, o, x stampano in base 2, 8, 16
- [[Rappresentazione floating-point]]: in informatica mantissa ed esponente sono in base 2 (IEEE-754)
