---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [PoW, prova di lavoro, proof-of-work, hashcash, target, nonce, ASIC, Application Specific Integrated Circuit, Scrypt, CryptoNight, Ethash, X11, Equihash, RandomX]
tags: [competenza, area/informatica]
---

# Proof of Work

> Prova di aver svolto un lavoro computazionale: si cerca, per tentativi, un input il cui hash sia minore di un target; trovarlo è costoso, verificarlo immediato.

## Definizione / enunciato
Forma più semplice, con una funzione hash:
1. a un testo si aggiungono caratteri scelti a caso e si calcola l'hash;
2. se l'hash è minore di un **target**, il risultato è la prova del lavoro;
3. altrimenti si riparte dal punto 1.

Caratteristica chiave: l'**asimmetria**, lavoro moderato per il richiedente (fattibile in piccoli numeri, ingestibile in grandi quantità) e verifica veloce. Nasce contro spam e denial of service.

## Formule chiave
**Hashcash** (Adam Back, 1997): timbro = SHA-1 a 160 bit di un header con data, indirizzi e un nonce, valido se inizia con 20 zeri. Le stringhe valide sono $2^{140}$ su $2^{160}$:
$$\Pr(\text{successo})=\frac{2^{140}}{2^{160}}=2^{-20},\qquad \text{tentativi medi}\approx2^{20}.$$
Bitcoin usa SHA-256 (applicato due volte all'header) e richiede un numero variabile di zeri iniziali.

## Intuizione
L'hash è imprevedibile, quindi non si può scegliere l'input per renderlo piccolo: l'unico metodo è provare. Scegliendo il target si regola la probabilità di successo e quindi il tempo medio, così la PoW diventa impegnativa "quanto serve". Precedenti: Merkle (1979) e Dwork-Naor (1992, *Pricing via Processing*).

## Come si usa
In Bitcoin la probabilità di inserire un blocco è proporzionale all'hashrate. Limiti di hashcash: le mailing list legittime, la scelta del numero di zeri, gli **ASIC**. In Bitcoin il premio spinge a costruire ASIC, con rischio di centralizzazione; da qui le PoW pensate per resistere agli ASIC: **Scrypt** (Percival 2012, molta memoria; Litecoin, Dogecoin), **CryptoNight** (cache L3; Monero), **Ethash** (Keccak; Ethereum), **X11** (11 hash in cascata; Dash), **Equihash** (memoria, problema del compleanno generalizzato; Bitcoin Gold). Per tutte sono poi stati costruiti ASIC; Monero oggi usa RandomX. Vantaggi: sicurezza collaudata, costo reale per attaccare. Svantaggi: consumo energetico, mining pool, throughput basso.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (pp. 14-22); `03-Bitcoin.pdf` (pp. 52-53); `06-Protocolli di consenso.pdf` (pp. 4-14); `07-Altcoin.pdf` (p. 9); dispensa §2.7, §6.2-6.3.

## Prerequisiti
- [[Funzione hash crittografica]]: imprevedibilità dell'output
- [[Protocollo di consenso]]: la PoW è il consenso di Bitcoin

## Porta a
- [[Mining]]: validazione dei blocchi in Bitcoin
- [[Difficoltà di mining]]: regolazione del target
- [[Precursori di Bitcoin]]: hashcash, RPoW, Bit gold
- [[Proof of Stake]]: alternativa a basso consumo
- [[Proof of Space]]: alternativa basata sul disco

## Collegati
- [[Paradosso del compleanno]]: base di Equihash
