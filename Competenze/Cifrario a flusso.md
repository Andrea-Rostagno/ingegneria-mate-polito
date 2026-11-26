---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["stream cipher", "cifrario a flusso sincrono", "synchronous stream cipher", "cifrario a flusso non sincronizzato", "keystream", "flusso di chiave", "PRNG crittografico", "Init e GetBits", "entropy pool"]
tags: [competenza, area/informatica]
---

# Cifrario a flusso

> Un cifrario a flusso fa lo xor del messaggio con un flusso di bit pseudocasuali (*keystream*) generato da un PRNG a partire dalla chiave. È un'imitazione pratica del one-time pad.

## Definizione / enunciato
**PRNG crittografico** (`Crypto2.pdf` p. 5; `Critto_week4.pdf` p. 4). È una funzione $G:\mathbb Z_2^n\to\mathbb Z_2^{l(n)}$ con $l(n)>n$ (fattore di espansione), tale che nessun avversario distingue $G(s)$ da bit casuali con probabilità $>1/2$. Si costruisce con due algoritmi:
- $\mathrm{Init}(s,IV)\to st_0$, con seme e vettore d'inizializzazione opzionale;
- $\mathrm{GetBits}(st_{i-1})\to(y_i,st_i)$, che produce un bit e aggiorna lo stato.

Gli stati vivono in una memoria detta *entropy pool*.

**Modalità sincronizzata** (`Crypto2.pdf` p. 7):
- le parti partono da $st_0=\mathrm{Init}(k)$;
- il primo messaggio è $c_1=pad_1\oplus m_1$, con $pad_1$ dato dai primi $l_1$ bit;
- il secondo messaggio usa i bit successivi, a partire dallo stato $st_{l_1}$, e così via. Non serve un IV.

**Modalità non sincronizzata** (`Crypto2.pdf` p. 8). Il crittogramma è una coppia:
$$\mathrm{Enc}_k(m_j)=\langle IV_j,\ G(k,IV_j,1^{|m_j|})\oplus m_j\rangle .$$

## Formule chiave
$$c=G(k,IV,1^{|m|})\oplus m,\qquad m=G(k,IV,1^{|c|})\oplus c$$

## Intuizione
La segretezza perfetta del one-time pad richiede una chiave lunga quanto il messaggio. Il cifrario a flusso la sostituisce con un seme corto, espanso in modo che sembri casuale a un avversario con risorse limitate. Tutta la sicurezza sta nel generatore, e nel non riusare mai lo stesso keystream.

## Come si usa
- **Sicurezza:** se l'IV è casuale lo schema non sincronizzato è CPA-sicuro, ma non CCA-sicuro (`Crypto2.pdf`, nota 2.2.2). L'es. 2.2.3 chiede di mostrarlo con $m_0=0\cdots0$, $m_1=1\cdots1$ e una domanda all'oracolo CCA.
- **Errori tipici:** un IV fisso in software o hardware, oppure un seme "pre-inciso" (nota 4.2.3).
- **Generatori del corso:**
  - LCG di Lehmer: non sicuro;
  - LFSR;
  - ARX: RC4, Salsa20, ChaCha20;
  - Blum-Blum-Shub.

## Nei corsi
- **Crittografia** (magistrale): parte su "Randomness" e "Operation Modes: Synchronized vs. Unsynchronized" delle dispense Di Scala, in inglese e in italiano. Nelle esercitazioni di Basile si vede l'attacco al riuso del keystream. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week2/Crypto2.pdf` (pp. 3, 5, 7-8); `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week4.pdf` (Critto 4, pp. 4-7).

## Prerequisiti
- [[One-time pad]]: modello ideale imitato
- [[Numeri pseudo-casuali]]: il keystream è pseudocasuale

## Porta a
- [[LFSR]]: generatore di keystream in hardware
- [[RC4]]: cifrario a flusso a byte
- [[Salsa20 e ChaCha20]]: cifrari a flusso ARX con nonce
- [[Riuso del keystream]]: l'attacco se il pad si ripete

## Collegati
- [[Sicurezza IND-CPA]]: con IV casuale lo schema è CPA-sicuro
- [[Generatore Blum-Blum-Shub]]: PRNG con sicurezza dimostrabile
- [[Modalità CTR]]: un cifrario a blocchi usato come cifrario a flusso
