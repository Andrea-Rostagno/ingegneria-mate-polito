---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [blocco Bitcoin, block header, header del blocco, hashPrevBlock, hashMerkleRoot, campo Bits, campo Nonce, magic number, block size]
tags: [competenza, area/informatica]
---

# Struttura del blocco Bitcoin

> Un blocco Bitcoin è magic number, dimensione, header di 80 byte e lista di transazioni; l'header contiene l'hash dell'header precedente, la Merkle root, il timestamp, il target compatto e il nonce.

## Definizione / enunciato
**Blocco** (`03-Bitcoin.pdf` p. 6):

| campo | contenuto | byte |
|---|---|---|
| Magic no | sempre `0xD9B4BEF9` | 4 |
| Blocksize | byte fino a fine blocco | 4 |
| Blockheader | 6 campi | 80 |
| Transaction counter | intero (VarInt) | 1-9 |
| transactions | lista non vuota | variabile |

**Header** (p. 7): Version (4), hashPrevBlock (32, hash dell'header precedente), hashMerkleRoot (32), Time (4, secondi dal 1970), Bits (4, target corrente in forma compatta), Nonce (4, parte da 0).

## Formule chiave
$$4+32+32+4+4+4=80\ \text{byte}.$$
Il blocco è "risolto" quando $\text{SHA-256}(\text{SHA-256}(\text{header}))<\text{target}$, variando il Nonce.

## Intuizione
Nel blocco c'è solo l'hash dell'header precedente, non del blocco intero, ma basta: una modifica a una transazione cambia la Merkle root, quindi l'header, quindi tutti i riferimenti successivi. L'header è piccolo, e questo permette ai light node di conservare solo gli header.

## Come si usa
Il miner costruisce il body con le transazioni scelte, calcola la Merkle root, poi fa variare il Nonce. Dimensione massima 1 MB, portata fino a 4 MB con SegWit. Esempio del corso: il blocco 911.752 su blockchain.com, con la coinbase transaction come prima transazione.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 5-7, 11, 36-41, 51; tabelle viste sulle pagine renderizzate). Nota: p. 5 parla di "sette campi" nell'header, la tabella di p. 7 ne mostra sei.

## Prerequisiti
- [[Blockchain]]: ogni blocco punta al precedente
- [[Merkle tree]]: produce la hashMerkleRoot

## Porta a
- [[Mining]]: ricerca del Nonce
- [[Nodi di Bitcoin]]: i light node tengono solo gli header
- [[SegWit]]: estende la capacità del blocco

## Collegati
- [[Difficoltà di mining]]: il campo Bits codifica il target
