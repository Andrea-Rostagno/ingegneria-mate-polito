---
tipo: competenza
area: informatica
corsi: [Informatica]
livello: [triennale]
aliases: [CA2, complemento a 2, two's complement, modulo e segno, numeri relativi, numeri con segno]
tags: [competenza, area/informatica]
---

# Complemento a due

> Codifica dei numeri interi con segno in cui il bit più significativo ha peso negativo, che permette di sommare e sottrarre con le regole binarie senza badare ai segni.

## Definizione / enunciato
Per rappresentare i numeri con segno le slide presentano due codifiche.

**Modulo e segno** (M&S): un bit di segno (il MSB, 0 = +, 1 = −) e $N-1$ bit per il valore assoluto. Su 4 bit $+3 = 0011$, $-3 = 1011$. Svantaggi: doppio zero ($0000$ e $1000$) e operazioni complesse (la somma richiede di distinguere i casi di segno).

**Complemento a due** (CA2): su $N$ bit il MSB ha peso $-2^{N-1}$, gli altri bit pesi positivi; quindi il MSB indica comunque il segno (0 = +, 1 = −).

Conversione da decimale: se positivo, la solita conversione; se negativo, si converte il modulo in binario, si **complementa ogni bit** e si **somma 1** (sul numero di bit fissato).

## Formule chiave
Modulo e segno su $N$ bit (8 bit: $[-127, +127]$):
$$-(2^{N-1}-1) \le x \le +(2^{N-1}-1)$$
Complemento a due su $N$ bit (8 bit: $[-128, +127]$; 16 bit: $[-32\,768, +32\,767]$):
$$-2^{N-1} \le x \le +(2^{N-1}-1)$$

## Intuizione
È oggi la codifica più diffusa perché semplifica i circuiti: le regole binarie si applicano a tutti i bit, segno compreso; somma e sottrazione si fanno direttamente, e la sottrazione si ottiene sommando al minuendo il CA2 del sottraendo. **Overflow in CA2**: impossibile con operandi di segno discorde; con segno concorde c'è overflow se il risultato ha segno discorde. Il carry sul MSB si trascura sempre.

## Come si usa
Esempi delle slide: $101101_{CA2} = -32 + 8 + 4 + 1 = -19$; $+15$ su 5 bit è $01111$; $-12$ su 5 bit: $+12 = 01100$, complemento $10011$, più 1 dà $10100$. Somma su 8 bit: $00100110 + 11001011 = 11110001$, cioè $38 + (-53) = -15$; sottrazione $00100110 - 11001011 = 01011011$, cioè $38 - (-53) = 91$.

## Nei corsi
- **Informatica** (triennale): unità T1, rappresentazione dei numeri relativi. Fonti: `triennale/ANNO 1/informatica/Unita T1 - Rappresentazione dati.pdf` (p. 19-33).

## Prerequisiti
- [[Sistema di numerazione posizionale]]: pesi delle cifre binarie
- [[Aritmetica binaria]]: somma e sottrazione bit a bit con overflow

## Porta a
- Nessun seguito diretto nel corso.

## Collegati
- [[Underflow e overflow]]: overflow quando operandi concordi danno un risultato di segno discorde
