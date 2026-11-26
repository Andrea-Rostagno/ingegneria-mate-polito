---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [Caesar cipher, cifrario a scorrimento, shift cipher, rot3, rot13, ROT13, ⊞-cipher, cifrario monoalfabetico, monoalphabetic cipher, rot cipher, circular shift]
tags: [competenza, area/informatica]
---

# Cifrario di Cesare

> Cifrario monoalfabetico che somma a ogni lettera la stessa chiave $k_0$ modulo la dimensione dell'alfabeto. Lo spazio delle chiavi è minuscolo, quindi cade per forza bruta o per analisi delle frequenze.

## Definizione / enunciato
Si codificano le 26 lettere inglesi con $\mathbb Z_{26}$ ($a=0$, $b=1$, ...). Con chiave $k_0\in\mathbb Z_{26}$ e messaggio $P\in\mathbb Z_{26}^m$ (`Critto_week3.pdf`, p. 3):
$$\mathrm{Enc}_{k_0}(P)=P+\begin{pmatrix}k_0\\ \vdots\\ k_0\end{pmatrix}.$$
Rot3 è il Cesare storico, ROT13 il caso $k_0=13$.

**Versione "⊞-cipher"** (`Crypto1.pdf` §1.3.2): su blocchi di 5 bit, $P\in\{0,1\}^5$, con $\boxplus$ = somma con riporto fino a 5 bit, cioè somma modulo $2^5=32$. Ad esempio $11011\boxplus10101=10000$, ovvero $27\boxplus21=48=16\pmod{32}$.

## Formule chiave
$$C=P\boxplus k\ \ (\mathrm{mod}\ 32),\qquad P=C\boxminus k$$
La slide scrive $\mathrm{Dec}_k(C)=C\boxplus k$: va letto come sottrazione modulo 32 (da verificare sul PDF).

**Variante rot** (§1.3.3): rotazione circolare dei bit, $C=P\lll k$ e $P=C\lll(-k)$. Esempio: $[110111]\lll3=[111110]$.

## Intuizione
Ci sono solo 26 chiavi, cioè meno di 5 bit di sicurezza. Il cifrario non altera la statistica delle lettere, ma le "trasla" sull'alfabeto. Un cifrario monoalfabetico generico (una permutazione delle 26 lettere) ha invece $26!\approx2^{88}$ chiavi (esercizio 1.5.1), ma resta debole per lo stesso motivo.

## Come si usa
- **Esempio delle dispense (Crypto1, chiave $k=3$):** con il codice $A=0,\dots,Z=25$ e simboli fino a 31, `TOMORROW I CAN NOT ATTEND.ALICE` diventa $P=19\|14\|12\|\dots$ e $C=22\|17\|15\|\dots$.
- **Forza bruta (soluzione dell'esercizio 1.5.2):** il crittogramma italiano "zc mvif ..." si rompe cercando la chiave che manda una parola corta in un articolo. "zc" corrisponde a "il" con spostamento 17, quindi $k=17$.
- **Chiavi spurie (lezione 2):** $C=\mathrm{WNAJW}$ ha due letture in inglese, ARENA (chiave W) e RIVER (chiave F).

## Nei corsi
- **Crittografia** (magistrale): "baby cipher" della lezione 1, ripreso in lezione 3 con l'aritmetica di $\mathbb Z_{26}$. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week1/Crypto1.pdf` (§1.3.2-1.3.3, pp. 8-9); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week1.pdf` (Critto 1, p. 22; soluzione 1.5.2 a p. 28); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week3.pdf` (Critto 3, p. 3); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week2.pdf` (p. 32, WNAJW).

## Prerequisiti
- [[Classi di resto modulo n]]: cifratura come somma in $\mathbb Z_{26}$ o $\mathbb Z_{32}$
- [[Schema di cifratura simmetrica]]: istanza con $\mathcal K=\mathbb Z_{26}$

## Porta a
- [[Cifrario di Vigenère]]: una chiave diversa per ogni posizione
- [[Cifrario affine]]: aggiunge una moltiplicazione invertibile

## Collegati
- [[One-time pad]]: analogo con $\oplus$ e chiave casuale lunga quanto il messaggio
- [[Distanza di unicità]]: esempio di chiave spuria
- [[Modelli di attacco crittografico]]: la forza bruta su testo sensato è un COA
