---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["CFB", "OFB", "Cipher Feedback", "Output Feedback", "CFB mode", "OFB mode", "K-bit CFB"]
tags: [competenza, area/informatica]
---

# Modalità CFB e OFB

> Due modalità che trasformano un cifrario a blocchi in un generatore di flusso di bit (PRNG). Il flusso si somma in XOR al testo in chiaro, come in un cifrario a flusso.

## Definizione / enunciato
In entrambe $\mathrm{Enc}_k$ produce una sequenza $s_1,s_2,\dots$ e si cifra con $y_i=x_i\oplus s_i$. Le due modalità differiscono per ciò che si rimette in ingresso a $\mathrm{Enc}_k$ (Figure 5.4.7 e 5.4.9 della dispensa):
- **CFB (Cipher FeedBack):** si cifra il blocco **cifrato** precedente, partendo dall'IV;
- **OFB (Output FeedBack):** si cifra l'**uscita** precedente del cifrario, partendo dall'IV, indipendentemente dal testo.

## Formule chiave
Lettura delle figure della dispensa:
$$\text{CFB:}\quad s_i=\mathrm{Enc}_k(y_{i-1}),\ y_0=IV,\qquad y_i=x_i\oplus s_i$$
$$\text{OFB:}\quad s_i=\mathrm{Enc}_k(s_{i-1}),\ s_0=IV,\qquad y_i=x_i\oplus s_i$$
La decifratura usa ancora $\mathrm{Enc}_k$: $x_i=y_i\oplus s_i$.

**K-bit CFB** (standard FIPS 81 per DES, letto in un esercizio): il messaggio è diviso in unità di $K$ bit ($K=1,\dots,64$). Si cifra con $C_i=D_i\oplus O_i$ sui $K$ bit più significativi dell'uscita. Il nuovo ingresso si ottiene scartando i $K$ bit più significativi del precedente, traslando a sinistra e inserendo i $K$ bit di cifrato appena prodotti.

## Intuizione
- In OFB il keystream non dipende dal messaggio: si può precalcolare, ed è un vero cifrario a flusso sincrono.
- In CFB il keystream dipende dal cifrato: il ricevitore si risincronizza da solo, come in un cifrario a flusso asincrono.
- In nessuna delle due serve $\mathrm{Dec}_k$.

## Come si usa
- Valgono le regole dei cifrari a flusso: **mai riusare** l'IV con la stessa chiave.
- Le esercitazioni di Basile ricordano che l'attacco di [[Riuso del keystream]] funziona anche per le modalità che simulano un flusso (CFB, OFB, CTR).

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.4.3-5.4.4 (Di Scala, 2020), con l'estratto di FIPS 81 (Esercizio 5.4.8); Crypto 5 §5.1.3-5.1.4. Le formule sono lette dalle figure. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 19, 23); `magistrale/Crittografia/Slide/slides week 1-14/week5/Crypto5.pdf` (p. 7).

## Prerequisiti
- [[Cifrario a blocchi]]: usato come generatore di flusso
- [[Cifrario a flusso]]: CFB e OFB ne sono realizzazioni

## Porta a
- [[Riuso del keystream]]: rischio se l'IV si ripete

## Collegati
- [[Modalità CTR]]: altra modalità a flusso, con contatori invece del feedback
- [[Modalità CBC]]: anche CBC usa un IV e il blocco cifrato precedente
- [[Numeri pseudo-casuali]]: il cifrario a blocchi fa da PRNG
- [[Data Encryption Standard|DES]]: FIPS 81 definisce le modalità di DES
