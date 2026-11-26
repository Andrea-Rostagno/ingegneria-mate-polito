---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [PoS, prova di interesse, prova di partecipazione, validatore, validator, staking, coin age, anzianità delle monete, Proof of Importance, PoI, Proof of Activity]
tags: [competenza, area/informatica]
---

# Proof of Stake

> Consenso in cui il diritto di inserire blocchi dipende dalla moneta posseduta dal validatore, con l'idea che chi ha molto in gioco ha interesse a far funzionare il sistema; consuma pochissima energia ma soffre del nothing at stake.

## Definizione / enunciato
Si fanno inserire i blocchi tenendo conto dell'ammontare di criptomonete posseduto dal **validator**. Non si può scegliere semplicemente il più ricco, altrimenti inserirebbe sempre lui. Soluzioni:
- **casuale** (Nxt, BlackCoin): più moneta aumenta la probabilità di essere scelti;
- **anzianità** (Peercoin): torna a zero quando si inserisce un blocco e decade se il possesso è troppo lungo;
- **velocità** (Reddcoin): conta l'uso della moneta più dell'accumulo.

## Formule chiave
$$\text{anzianità}=\text{quantità di monete}\times\text{numero di giorni di possesso}.$$

## Intuizione
La risorsa scarsa non è il calcolo ma il capitale: attaccare la rete significa danneggiare il valore della propria moneta. **Vantaggi** sulla PoW: consumi molto minori, maggiore velocità e in parte scalabilità, validatori più coinvolti dei miner. **Svantaggio**: gestione delle fork (nothing at stake). La dispensa aggiunge il rischio di concentrazione della ricchezza e lo slashing.

## Come si usa
Varianti trattate nel corso:
- **Proof of Importance** (NEM): conta anche la moneta scambiata, non solo posseduta; reputazione Eigentrust++ per escludere nodi malevoli;
- **Proof of Activity** (Decred): i miner propongono il blocco con la PoW, poi validatori sorteggiati in base alla moneta lo approvano (se no si risorteggia) e si dividono la ricompensa; più sicura delle due singole, non soggetta all'attacco del 51% del calcolo, ma energivora e poco scalabile;
- DPoS e PPoS, in note proprie.
Ethereum è passato alla PoS; Cardano, Algorand e Solana (con Proof of History) sono basate su PoS.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (pp. 15-20, 25-26, 37-38); `07-Altcoin.pdf` (pp. 4, 10, 12); dispensa §6.4-6.9.

## Prerequisiti
- [[Protocollo di consenso]]: la PoS è un protocollo di consenso
- [[Proof of Work]]: termine di confronto

## Porta a
- [[Nothing at stake]]: problema delle fork nella PoS
- [[Delegated Proof of Stake]]: voto ai delegati
- [[Pure Proof of Stake]]: comitato sorteggiato

## Collegati
- [[Proof of Burn]]: moneta bruciata invece che bloccata
- [[Ethereum]]: passato dalla PoW alla PoS
