---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["Feistel network", "Feistel cipher", "schema di Feistel", "round di Feistel", "Feistel round"]
tags: [competenza, area/informatica]
---

# Rete di Feistel

> Struttura di round dei cifrari a blocchi in cui il blocco è diviso in due metà: a ogni round una metà viene combinata in XOR con una funzione dell'altra metà e della sottochiave, poi le metà si scambiano.

## Definizione / enunciato
Il blocco in ingresso al round $j$ è $L_j\|R_j$, concatenazione di due parole della stessa lunghezza (32 bit in DES). Nel round (Figura 5.1.3 della dispensa) $R_j$ e la sottochiave $k_{j+1}$ entrano nella funzione $f$; il risultato si somma in XOR a $L_j$, poi le due metà si incrociano. A ogni round viene quindi cifrata solo metà del blocco.

## Formule chiave
Decifratura, dalla Nota 5.2.4 della dispensa:
$$R_j=L_{j+1},\qquad L_j=R_{j+1}\oplus f(L_{j+1},k_{j+1}).$$
Invertendo queste relazioni (passaggio nostro, coerente con la figura) il round di cifratura è
$$L_{j+1}=R_j,\qquad R_{j+1}=L_j\oplus f(R_j,k_{j+1}).$$

## Intuizione
Il punto chiave è che **$f$ non deve essere invertibile**. Per tornare indietro basta ricalcolare $f$ sulla metà che è passata invariata e rifare lo XOR, perché $a\oplus b\oplus b=a$. Così si possono usare funzioni $f$ molto non lineari (S-box) senza preoccuparsi dell'inversa.

## Come si usa
- In **DES** (16 round di Feistel) la decifratura usa lo stesso circuito della cifratura. Basta usare le sottochiavi in ordine inverso $k_{16},k_{15},\dots,k_1$, cioè modificare solo il key schedule.
- Esercizio di lezione (enunciato nella dispensa): adattare il key schedule di DES in modo che rilasci le chiavi in ordine inverso per la decifratura.

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.1.1 e §5.5.4 (Di Scala, 2020); Crypto 4 §4.1.1, dove la Nota 4.2.3 dice "DES rounds are Feistel". Il round è dato solo come figura; le formule sono quelle della Nota 5.2.4. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 3, 7, 27); `magistrale/Crittografia/Slide/slides week 1-14/week4/Crypto4.pdf` (pp. 3, 7-8).

## Prerequisiti
- [[Cifrario a blocchi]]: la rete di Feistel è un modo di costruirne i round

## Porta a
- [[Data Encryption Standard|DES]]: 16 round di Feistel

## Collegati
- [[Rete a sostituzione-permutazione]]: l'altra architettura di round, che cifra tutto il blocco a ogni round
- [[Confusione e diffusione]]: $f$ confonde, l'incrocio delle metà diffonde
