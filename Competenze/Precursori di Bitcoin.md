---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [storia di Bitcoin, cypherpunk, Crypto Anarchist Manifesto, Cypherpunk Manifesto, B-money, Reusable Proof of Work, RPoW, Bit gold, Satoshi Nakamoto, genesis block di Bitcoin]
tags: [competenza, area/informatica]
---

# Precursori di Bitcoin

> Le idee degli anni '90 e 2000 (cypherpunk, hashcash, smart contract, b-money, RPoW, bit gold) che nel 2008 confluiscono nel white paper di Satoshi Nakamoto.

## Definizione / enunciato
Cronologia delle slide:
- 1992, *Crypto Anarchist Manifesto* (T. May); 1993, *Cypherpunk Manifesto* (E. Hughes): privacy e anonimato tramite crittografia;
- 1997, **Hashcash** (A. Back): prima PoW con funzioni hash, contro lo spam;
- 1997, **smart contract** (N. Szabo);
- 1998, **B-money** (Wei Dai): contante elettronico anonimo; hashcash per creare denaro, transazioni inviate a tutti che tengono i conti; variante con "server" che versano una cauzione persa se disonesti;
- 2004, **Reusable Proof of Work** (H. Finney): token PoW scambiati con token firmati RSA, usabili una volta ma rigenerati a ogni passaggio;
- 2005, **Bit gold** (Szabo): challenge string + stringa personale + timestamp, hash sotto un target; la PoW string diventa la nuova challenge, formando una catena pubblica di PoW; proprietà trasferita con firme digitali;
- 2008, fallimento Lehman Brothers e white paper *Bitcoin: A Peer-to-Peer Electronic Cash System*;
- 3 gennaio 2009, genesis block; 12 gennaio, prima transazione Nakamoto-Finney di 10 BTC;
- 22 maggio 2010, 10.000 BTC per due pizze; 2015, Ethereum.

## Formule chiave
Nessuna formula: la PoW di hashcash richiede in media $2^{20}$ tentativi.

## Intuizione
Bit gold contiene già la catena di PoW e B-money la cauzione persa dai disonesti (anticipo della PoS): Bitcoin mette insieme pezzi esistenti con un consenso ben definito, che in b-money era "complesso e indefinito".

## Come si usa
Domanda tipica: ricostruire la genealogia di Bitcoin e dire cosa mancava a ciascun predecessore (consenso definito, emissione, controllo della doppia spesa).

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (pp. 16-36); dispensa §2.8.

## Prerequisiti
- [[Proof of Work]]: hashcash è la base comune

## Porta a
- [[Bitcoin]]: sintesi delle idee precedenti
- [[Smart contract]]: l'idea di Szabo del 1997

## Collegati
- [[Problema del double spending]]: i token RPoW sono usabili una sola volta
