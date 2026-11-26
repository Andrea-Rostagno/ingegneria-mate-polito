---
tipo: competenza
area: informatica
corsi: [Crittografia]
livello: [magistrale]
aliases: [sponge construction, funzione spugna, sponge function, spugna, Keccak-f, permutazione Keccak-f, SHAKE128, SHAKE256, extendable-output function, XOF, bitrate, capacità della spugna]
tags: [competenza, area/informatica]
---

# Costruzione a spugna

> Costruisce una hash, o un generatore di keystream, da una **permutazione** dello stato invece che da una funzione di compressione. Si assorbe l'input a blocchi e si "spreme" un output di lunghezza a scelta. È la struttura di Keccak e della famiglia SHA-3.

## Definizione / enunciato
Lo stato è un registro di $b$ bit, con $b=r+c$ (**width**): $r$ è il **bitrate**, $c$ la **capacità**. La funzione $f$ è una permutazione dello stato, cioè una biiezione di $\mathbb Z_2^b$. L'input, dopo il padding, è tagliato in blocchi $x_i$ di $r$ bit (Critto 6, p. 23).
- **Assorbire:** ogni blocco $x_i$ viene messo in XOR con i primi $r$ bit dello stato, poi lo stato è permutato con $f$.
- **Spremere:** l'output $y=y_0\|y_1\|\cdots$ è formato dai primi $r$ bit dello stato, con una permutazione tra un blocco e l'altro.

Gli ultimi $c$ bit non sono mai toccati dai blocchi $x_i$ e non fanno parte dell'output.

## Formule chiave
Keccak (Critto 6, pp. 28-31):
- stato $b=25\cdot2^l$ con $l=0,\dots,6$, cioè $b\in\{25,50,100,200,400,800,1600\}$;
- padding $x=M\|1\,0^*\,1$, dove $0^*$ è il minimo numero di zeri che rende $|x|$ multiplo di $r$;
- Keccak-f$[b]$ ha $12+2l$ round, per esempio 24 per $b=1600$, ciascuno di 5 passi invertibili.

SHA-3 fissa $b=1600$ e $r\in\{1152,1088,832,576\}$ per SHA3-512, -384, -256, -224. Il **livello di sicurezza** è $c/2$. Il padding di SHA-3 è $M\|0\,1\,1\,0^*\,1$.

## Intuizione
La permutazione $f$ **non** è one-way: Keccak-f si inverte facilmente. La sicurezza viene dai $c$ bit di capacità, che l'attaccante non vede né controlla (Esercizio 6.5.1 posto a lezione).

## Come si usa
- **SHA-3** (FIPS PUB 202): quattro hash, SHA3-224, -256, -384 e -512, più due XOF, SHAKE128 e SHAKE256. Le hash spremono una sola volta e usano solo parte di $y_0$.
- Gli **XOF** hanno lunghezza dell'output scelta dall'utente. Sono utili per firmare con RSA, che vuole input da 2000-3000 bit.
- **Cronologia:** bando NIST il 2 novembre 2007, scelta di Keccak il 2 ottobre 2012.
- La stessa spugna genera keystream per cifrari a flusso ("Keccak-Sponge key stream", Crypto 2, §2.5.1).

## Nei corsi
- **Crittografia** (magistrale): §6.2.3 e §6.5 delle dispense italiane, §7.2.2 e §8.2 di quelle inglesi. Fonti: `magistrale/Crittografia/Esercitazioni/SoluzioniCrypto/Critto_week6.pdf` (Critto 6, pp. 22-23, 28-31); `magistrale/Crittografia/Slide/slides week 1-14/week7/Crypto7.pdf` (pp. 11-12); `magistrale/Crittografia/Slide/slides week 1-14/week8/Crypto8.pdf` (pp. 7-8).

## Prerequisiti
- [[Funzione hash crittografica]]: la spugna ne realizza una
- [[Funzione one-way]]: chiarisce perché a $f$ non serve esserlo

## Porta a
- [[Cifrario a flusso]]: la spugna come generatore di keystream

## Collegati
- [[Costruzione di Merkle-Damgård]]: alternativa basata su una compressione (SHA-1, SHA-2)
- [[Firma digitale]]: gli XOF producono digest della lunghezza richiesta
