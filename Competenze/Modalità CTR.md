---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: ["CTR", "Counter mode", "modalità contatore", "CTR mode", "counter"]
tags: [competenza, area/informatica]
---

# Modalità CTR

> Counter mode: si cifrano con il cifrario a blocchi dei "contatori" $T_1,\dots,T_N$ tutti diversi e si somma in XOR il risultato ai blocchi in chiaro.

## Definizione / enunciato
Il testo in chiaro ha $N$ blocchi $P=B_N\|\cdots\|B_1$. Si creano $N$ blocchi detti **counters** $T_N,\dots,T_1$, di solito incrementando tutto il blocco iniziale $T_1$ o una sua parte. Ad esempio
$$T_1=IV\|Q,\qquad T_j:=IV\|(Q+j-1),\qquad Q\in\mathbb Z_{2^m},$$
con $IV$ un nonce. I contatori si possono anche produrre con un [[LFSR]] a partire dallo stato iniziale $T_1$.

## Formule chiave
Cifratura e decifratura, per $j=1,\dots,N$:
$$O_j=\mathrm{Enc}_k(T_j),\qquad C_j=B_j\oplus O_j,\qquad B_j=C_j\oplus O_j.$$
Per non ripetere i contatori con lo stesso nonce occorre
$$N\le2^m.$$

## Intuizione
CTR trasforma il cifrario a blocchi in un cifrario a flusso il cui keystream è $\mathrm{Enc}_k(T_1)\|\mathrm{Enc}_k(T_2)\|\cdots$. Poiché ogni $O_j$ dipende solo da $T_j$, i blocchi si cifrano e decifrano in modo indipendente e in parallelo.

## Come si usa
**Nota 5.4.12 della dispensa:**
- Due contatori uguali aprono un attacco KPA: se $T_1=T_j$ e $(C_1,B_1)$ è noto al crittanalista, questi ricava subito $B_j$, perché $O_j=O_1=C_1\oplus B_1$.
- La dimensione $m$ di $Q$ si sceglie in modo da cifrare tutti gli $N$ blocchi prima di cambiare il nonce.
- $T_1$ non deve essere segreto: si può spedire insieme a $C_1$.

**Vantaggio:** parallelizzabile.

È la base di [[Modalità GCM]] e di CCM (Counter CBC-MAC).

## Nei corsi
- **Crittografia** (magistrale): Critto 5 §5.4.5 (Di Scala, 2020); Crypto 5 §5.1.5 e §5.1.7 (CCM). Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week5.pdf` (pp. 20-21); `magistrale/Crittografia/Slide/slides week 1-14/week5/Crypto5.pdf` (pp. 8, 10).

## Prerequisiti
- [[Cifrario a blocchi]]: cifra i contatori
- [[Cifrario a flusso]]: CTR ne è una realizzazione

## Porta a
- [[Modalità GCM]]: CTR più un tag di autenticazione
- [[Riuso del keystream]]: contatori ripetuti significano keystream ripetuto

## Collegati
- [[Modalità CFB e OFB]]: modalità a flusso con feedback
- [[Modelli di attacco crittografico]]: contatori ripetuti permettono un KPA
- [[One-time pad]]: con contatori mai ripetuti il keystream imita un pad
