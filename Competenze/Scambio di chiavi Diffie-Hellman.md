---
tipo: competenza
area: informatica
corsi: [Crittografia, Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [Diffie-Hellman key exchange, Diffie-Hellman, DH, protocollo di Diffie-Hellman, scambio DH, problema di Diffie-Hellman, DHP, Diffie-Hellman assumption, domain parameters]
tags: [competenza, area/informatica]
---

# Scambio di chiavi Diffie-Hellman

> Protocollo con cui due parti concordano una chiave segreta comune su un canale pubblico. La sua sicurezza poggia sulla difficoltà del logaritmo discreto in un gruppo ciclico.

## Definizione / enunciato
**Protocollo di scambio di chiavi** (`Crypto9.pdf` p. 2): da un parametro di sicurezza $n$ le parti calcolano $k_A$ e $k_B$, con il requisito di correttezza $k_A=k_B=k$.

**DH** (`Crypto9.pdf` p. 3; `Critto10.pdf` p. 26):
1. Alice e Bob fissano i *domain parameters*: un primo $p$ e un generatore $g$ di $\mathbb Z_p^*$.
2. Alice sceglie a caso $A\in\{1,\dots,p-1\}$ e invia $g^A \bmod p$.
3. Bob sceglie a caso $B$ e invia $g^B \bmod p$.
4. Entrambi calcolano la chiave di sessione.

$A$ e $B$ sono le chiavi private, $g^A$ e $g^B$ quelle pubbliche.

**Versione con elenco pubblico** (`Critto_week6.pdf` §6.1.2, p. 6): ogni utente $i$ pubblica $\alpha^{X_i}$ e cifra per $j$ con $k_{ij}=(\alpha^{X_j})^{X_i}$.

**DH generalizzato** (`Critto_week7.pdf` §7.1.1, p. 2): in un gruppo ciclico $G\simeq\mathbb Z_n$ con isomorfismo one-way $f$ si pubblica $p_A=f(k_A)$. Poi si deriva ad esempio $k=\mathrm{Hash}(k_{AB})$.

## Formule chiave
$$k_A=(g^B)^A=(g^A)^B=k_B=g^{AB}\pmod p$$

**Problema di Diffie-Hellman (DHP):** dati $p$, $g$, $g^a$ e $g^b$, calcolare $g^{ab}$ (`Critto10.pdf` p. 29).
- Chi risolve il logaritmo discreto risolve il DHP.
- Non è noto se valga il viceversa.

## Intuizione
L'esponenziazione modulare è facile: $\alpha^{X_i}$ richiede $O(\log_2 q)$ operazioni. Il miglior algoritmo per ricavare $X_i$ da $\alpha^{X_i}$ richiede invece $O(\sqrt q)$ operazioni (`Critto_week6.pdf` p. 8).

L'idea risale al paradigma della crittografia "computazionalmente sicura" di [DH76]. È preceduta dai puzzle di Merkle, dove le parti fanno $O(N)$ lavoro e l'attaccante $O(N^2)$ (`Critto_week6.pdf` pp. 4-5).

## Come si usa
**Parametri:**
- $p$ di almeno 2048 bit, contro l'attacco index calculus (`Crypto9.pdf` p. 4);
- per Bazzanella, $p$ di almeno 300 cifre e $a$, $b$ di almeno 100 cifre;
- $g$ può essere piccolo, spesso 2 o 5 (`Critto10.pdf` p. 27).

**Attacchi** (`Crypto9.pdf` p. 5):
- attivo: man-in-the-middle, che si evita con certificati di una terza parte fidata;
- passivo: risolvere il logaritmo discreto.

**Con 3 utenti:** dopo due giri tutti calcolano $g^{abc}$. Lo schema si generalizza a $n$ utenti (`Critto10.pdf` p. 28).

## Nei corsi
- **Crittografia** (magistrale): presentato da Di Scala come scambio con elenco pubblico e come DH generalizzato su gruppi ciclici, da Bazzanella come protocollo di base. Fonti:
  - `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (§6.1, pp. 2-8);
  - `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week7.pdf` (§7.1, p. 2);
  - `magistrale/Crittografia/Slide/slides week 1-14/week9/Crypto9.pdf` (§9.1, pp. 2-5);
  - `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (pp. 25-29).
- **Blockchain e criptoeconomia** (magistrale): citato solo come origine storica della crittografia a chiave pubblica (W. Diffie, M. E. Hellman, *New directions in cryptography*, 1976). Le slide aggiungono che i servizi segreti inglesi avrebbero avuto l'idea nel 1973, coperta da segreto fino al 1997. Il protocollo non è svolto. Fonte: `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (p. 18).

## Prerequisiti
- [[Gruppo ciclico]]: serve un generatore $g$ di $\mathbb Z_p^*$
- [[Problema del logaritmo discreto]]: è l'ipotesi di sicurezza
- [[Esponenziazione modulare veloce]]: rende efficiente il calcolo di $g^A$

## Porta a
- [[Cifratura ElGamal]]: maschera il messaggio con la chiave DH $g^{AB}$
- [[Diffie-Hellman su curve ellittiche]]: lo stesso protocollo nel gruppo dei punti
- [[Encrypted Key Exchange]]: DH autenticato con password (DH-EKE)
- [[Protocollo di Massey-Omura]]: altro scambio basato su esponenziazione modulo $p$

## Collegati
- [[Attacco man-in-the-middle]]: l'attacco attivo tipico di DH
- [[Crittografia a chiave pubblica]]: DH76 è l'articolo fondativo
- [[Cifratura ibrida]]: la chiave scambiata si usa in un cifrario simmetrico
