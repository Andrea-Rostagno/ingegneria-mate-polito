---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [UTXO, Unspent Transaction Output, output non spesi, UTXO set, same-block spending, mempool, memory pool, verifica delle transazioni]
tags: [competenza, area/informatica]
---

# Modello UTXO

> Bitcoin tiene traccia non di saldi ma dell'insieme degli output non spesi (UTXO set): una transazione è valida solo se spende UTXO esistenti e non già spesi.

## Definizione / enunciato
Un **UTXO** (Unspent Transaction Output) è un output di una transazione precedente non ancora speso. Ogni nodo registra e aggiorna l'**UTXO set**.

**Verifica** di una transazione: tutti i nodi controllano che sugli indirizzi di input sia arrivato un accredito sufficiente e che non sia ancora stato speso. Se è tutto corretto, la inseriscono nella **mempool**, l'elenco delle transazioni proposte e verificate, dopo aver controllato che nessuna transazione in mempool usi già uno degli stessi input.

**Same-block spending**: l'UTXO set è aggiornato sequenzialmente mentre si verificano le transazioni del blocco, quindi si può spendere un UTXO creato nello stesso blocco, purché la transazione che lo crea preceda quella che lo spende.

## Formule chiave
Dimensioni a marzo 2026 (slide): blockchain circa 770 GB, UTXO set oltre 180 milioni di indirizzi e circa 11 GB, header chain circa 70 MB.

## Intuizione
Il set degli UTXO è lo "stato" minimo per validare: chi lo possiede sa se una moneta esiste ed è libera. Ethereum invece usa account e uno stato globale (confronto della dispensa).

## Come si usa
La verifica UTXO non basta contro il double spending: due transazioni concorrenti possono arrivare a nodi diversi. Decide la validazione del blocco da parte dei miner. Un light node non ha l'UTXO set e non può controllare che i fondi non siano già spesi.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 32, 45-50, 66); dispensa §3.6, §6 (confronto Bitcoin-Ethereum).

## Prerequisiti
- [[Transazione Bitcoin]]: input e output
- [[Problema del double spending]]: motivo del controllo sugli output spesi

## Porta a
- [[Nodi di Bitcoin]]: il full node conserva l'UTXO set

## Collegati
- [[Mining]]: il miner aggiorna l'UTXO set mentre valida il blocco
- [[Ethereum]]: modello ad account contro modello UTXO
