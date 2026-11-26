---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Advanced Encryption Standard", "Rijndael", "AES-128", "AES-192", "AES-256", "SubBytes", "ShiftRows", "MixColumns"]
tags: [competenza, area/informatica]
---

# AES

> Advanced Encryption Standard: cifrario a blocchi orientato ai byte, con blocchi di 128 bit e chiavi di 128, 192 o 256 bit. È l'implementazione di Rijndael (Daemen e Rijmen) adottata dal NIST nel novembre 2001.

## Definizione / enunciato
- **Blocchi e chiavi:** blocchi di $128=2^4\cdot2^3$ bit, cioè 16 byte; chiavi di 128, 192 o 256 bit.
- **Origine:** standardizzato dal NIST dopo 5 anni di studi e una selezione finale tra vari algoritmi proposti.
- **Stato:** il blocco $B=[b_0\cdots b_{15}]$ si tratta come una matrice $4\times4$ di byte, riempita per colonne:
$$B=\begin{pmatrix} b_0 & b_4 & b_8 & b_{12}\\ b_1 & b_5 & b_9 & b_{13}\\ b_2 & b_6 & b_{10} & b_{14}\\ b_3 & b_7 & b_{11} & b_{15}\end{pmatrix}$$

**Struttura** (Figure 5.3.2-5.3.3 della dispensa):
- uno XOR iniziale con la chiave $k_0$ (key whitening);
- $n_k$ round con chiavi $k_1,\dots,k_{n_k}$ rilasciate dal key schedule;
- ogni round applica SubBytes, ShiftRows, MixColumns e poi lo XOR con la chiave di round $k_r$.

## Formule chiave
| chiave $k$ | numero di round |
|---|---|
| 128 bit | 10 |
| 192 bit | 12 |
| 256 bit | 14 |

## Intuizione
- AES è una [[Rete a sostituzione-permutazione]]: a ogni round l'intero blocco viene trasformato, a differenza di DES che ne cifra metà.
- Lavorare sui byte permette di vedere ogni byte come elemento del campo finito $GF(2^8)$.

## Come si usa
Esercizio di lezione: è vero che $Y'=\mathrm{AES}_{k'}(B')$ se $Y=\mathrm{AES}_k(B)$ (apice = complemento a uno)?
- La soluzione nella dispensa: **falso**.
- Il complemento commuta con permutazioni, shift e XOR. Però già l'espansione della chiave usa una S-box, quindi le chiavi di round soddisfano $(k')_i\neq(k_i)'$.
- È il contrario di DES, che ha la proprietà di complementazione.

AES è il cifrario usato nelle esercitazioni sugli attacchi (AES-128 in ECB o CBC).

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.3 (Di Scala, 2020) e Crypto 4 §4.3; la descrizione interna dei passi del round è rimandata a Wikipedia. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 13-16, 28); `magistrale/Crittografia/Slide/slides week 1-14/week4/Crypto4.pdf` (pp. 13-14).

## Prerequisiti
- [[Rete a sostituzione-permutazione]]: struttura dei round
- [[Cifrario a blocchi]]: AES è il cifrario a blocchi standard
- [[Campo finito]]: i byte come elementi di $GF(2^8)$

## Porta a
- [[Modalità GCM]]: richiede blocchi di 128 bit, come quelli di AES
- [[Attacco ECB byte-at-a-time]]: attacco ad AES-128 in modalità ECB

## Collegati
- [[Data Encryption Standard|DES]]: il predecessore, con struttura di Feistel
- [[Confusione e diffusione]]: realizzate dai passi del round
