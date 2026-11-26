---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["block cipher", "cifrari a blocchi", "round", "key schedule", "funzione di round", "effetto valanga", "avalanche effect"]
tags: [competenza, area/informatica]
---

# Cifrario a blocchi

> Cifrario simmetrico che trasforma un blocco di $b$ bit in un blocco cifrato di $b$ bit con una chiave $k$, applicando più volte (round) una funzione che confonde e diffonde i bit.

## Definizione / enunciato
Il messaggio $P$ si divide in blocchi $P=\cdots\|B_2\|B_1$, ognuno di $b$ bit, cioè $B_j\in\mathbb Z_2^b$. Ogni blocco si cifra con la chiave $k$:
$$Y=\mathrm{Enc}_k(B),$$
e di solito anche $Y$ ha $b$ bit. Il blocco cifrato si ottiene con $n$ **round** $R_1,\dots,R_n$. Ogni round confonde e diffonde i bit del blocco precedente usando una sottochiave rilasciata dal **key schedule**, l'algoritmo che deriva le chiavi di round da $k$.

Le due architetture di round viste a lezione sono la [[Rete di Feistel]] (es. DES) e la [[Rete a sostituzione-permutazione]] (es. AES).

## Formule chiave
$$B_j\in\mathbb Z_2^b,\qquad Y=\mathrm{Enc}_k(B),\qquad B=\mathrm{Dec}_k(Y)$$

| cifrario | blocco | chiave | round |
|---|---|---|---|
| DES | 64 | 56 | 16 |
| AES | 128 | 128 / 192 / 256 | 10 / 12 / 14 |

## Intuizione
Un solo round è debole, ma ripeterlo molte volte con chiavi diverse rende ogni bit dell'uscita dipendente da tutti i bit della chiave e dell'ingresso. Questo è l'**effetto valanga**, ottenuto combinando la confusione delle S-box e la diffusione delle permutazioni.

## Come si usa
Un cifrario a blocchi cifra un solo blocco. Per messaggi di lunghezza arbitraria serve una modalità operativa: [[Modalità ECB]], [[Modalità CBC]], [[Modalità CFB e OFB]], [[Modalità CTR]] o [[Modalità GCM]]. Con il padding si riempie l'ultimo blocco.

Citazione di Paar riportata nelle dispense: "A block cipher is much more than just an encryption algorithm". Lo stesso cifrario serve infatti anche a costruire cifrari a flusso (CFB, OFB, CTR) e MAC (GCM, CCM).

Il **key whitening** rende il cifrario più resistente alla forza bruta con due chiavi aggiuntive $k_1,k_2$:
$$C=\mathrm{Enc}_k(P\oplus k_1)\oplus k_2,\qquad P=\mathrm{Dec}_k(C\oplus k_2)\oplus k_1.$$
AES ha un key whitening (la chiave $k_0$ prima del primo round).

## Nei corsi
- **Crittografia** (magistrale): Critto 5 (Di Scala, 2020) e Crypto 4 (versione inglese). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 2, 28: key whitening); `magistrale/Crittografia/Slide/slides week 1-14/week4/Crypto4.pdf` (p. 2).

## Prerequisiti
- [[Schema di cifratura simmetrica]]: è un caso particolare, con $\mathcal P=\mathcal C=\mathbb Z_2^b$
- [[Confusione e diffusione]]: i round applicano le due idee di Shannon

## Porta a
- [[Rete di Feistel]]: struttura di round di DES
- [[Rete a sostituzione-permutazione]]: struttura di round di AES
- [[Data Encryption Standard|DES]]: primo standard
- [[AES]]: standard attuale
- [[Modalità ECB]]: modalità più semplice per più blocchi
- [[Modalità CBC]]: modalità a catena

## Collegati
- [[Cifrario a flusso]]: l'altra famiglia di cifrari simmetrici, ottenibile anche da un cifrario a blocchi
- [[Attacco meet-in-the-middle]]: cifrare due volte non raddoppia la sicurezza
