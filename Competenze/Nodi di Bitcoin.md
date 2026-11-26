---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [full node, nodo completo, light node, nodo leggero, Simple Payment Verification, SPV, header chain, nodi Bitcoin]
tags: [competenza, area/informatica]
---

# Nodi di Bitcoin

> Il full node conserva tutta la blockchain e verifica ogni regola; il light node conserva solo gli header e, tramite SPV, verifica l'inclusione di una transazione con un cammino di Merkle.

## Definizione / enunciato
**Full node**: memorizza l'intera blockchain e gestisce tutto il protocollo, compresa la verifica di tutte le transazioni. Requisiti indicati nelle slide: PC recente, 4-8 GB di RAM, 1 TB di disco, connessione veloce e illimitata, attivo 24 ore su 24.

**Light node**: memorizza solo gli header (80 byte invece di oltre 1 MB per blocco, risparmio di oltre il 99,99%) e richiede poca potenza. Può inviare transazioni e verificarne la correttezza formale, ma non può controllare che i fondi non siano già spesi (servirebbe almeno l'UTXO set).

**Simple Payment Verification (SPV)**: il light node si fa mandare da un full node gli hash intermedi fra una transazione e la Merkle root, ricalcola la radice e la confronta con quella dell'header che possiede.

## Formule chiave
Dati trasferiti per SPV: $O(\log_2 n)$ hash, con $n$ transazioni nel blocco. Dimensioni a marzo 2026: blockchain circa 770 GB, header chain circa 70 MB.

## Intuizione
Il full node non deve fidarsi di nessuno. Il light node si fida della rete: se una transazione è in un blocco, è stata accettata e quindi è corretta. Il full node non può ingannarlo, perché è impossibile costruire hash intermedi falsi che portino alla Merkle root.

## Come si usa
Attivare un full node significa entrare a pieno titolo nella comunità Bitcoin. La dispensa aggiunge che sono i nodi, non i miner, a imporre le regole: un miner propone blocchi, i nodi decidono se sono validi. Blocchi più grandi renderebbero la blockchain troppo pesante per molti full node, con perdita di decentralizzazione.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 62-67, 141-142); dispensa §3.13.

## Prerequisiti
- [[Merkle tree]]: cammino di hash per SPV
- [[Modello UTXO]]: il full node conserva l'UTXO set
- [[Struttura del blocco Bitcoin]]: header da 80 byte

## Porta a
- Nessuno.

## Collegati
- [[Mining]]: il miner propone, i nodi validano
