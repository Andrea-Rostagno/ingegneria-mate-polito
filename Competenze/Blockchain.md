---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [catena di blocchi, blocco di genesi, genesis block, altezza di un blocco, block height, blockchain pubblica, blockchain permissionless, blockchain privata, blockchain permissioned, blockchain ibrida, immutabilità]
tags: [competenza, area/informatica]
---

# Blockchain

> DLT in cui i dati sono divisi in blocchi, ciascuno con l'hash del precedente: modificare un blocco passato rompe tutti i riferimenti successivi, quindi la storia è di fatto immodificabile.

## Definizione / enunciato
La blockchain è una lista in continua crescita di blocchi di dati collegati: ogni blocco include l'**hash del blocco precedente** (in Bitcoin, dell'header precedente), fino al **blocco di genesi**. Ogni nodo possiede una copia e comunica con gli altri in modalità peer-to-peer. Si possono solo creare e leggere dati, non modificarli né cancellarli.

**Altezza** di un blocco: distanza dal blocco di genesi, che ha altezza 0.

**Tipologie**: pubbliche (*permissionless*), ibride, private (*permissioned*).

## Formule chiave
Se cambia un bit di una transazione cambia la Merkle root, quindi l'hash dell'header, quindi il riferimento nel blocco successivo: per lasciare la catena consistente bisogna rifare tutti gli hash da quel blocco in avanti.

## Intuizione
La struttura garantisce integrità, ma resta la domanda: come fare in modo che la catena sia identica in ogni nodo senza un'autorità centrale? La risposta è il protocollo di consenso. La dispensa riassume: la modifica non è impossibile, è resa economicamente e computazionalmente impraticabile.

## Come si usa
Esempio del corso: il 3 gennaio 2026 è stato inserito in Bitcoin il blocco di altezza 930.753. Gli explorer (blockchain.com, blockstream.info, mempool.space, ...) permettono di consultare blocchi e transazioni. Le slide di applicazioni ricordano il limite: se si inseriscono dati falsi, restano falsi per sempre.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (pp. 4, 7-11); `03-Bitcoin.pdf` (pp. 3, 11, 13-15); `09-Applicazioni.pdf` (p. 38); dispensa §2.3.
- **Crittografia** (magistrale): presentata nell'ultima lezione, "Protocolli avanzati 2", come evoluzione della marcatura temporale collegata. L'obiettivo è eliminare l'autorità centrale di garanzia. Ogni blocco contiene un puntatore al precedente, un timestamp e i dati delle transazioni; l'hash del blocco precedente garantisce l'integrità fino al blocco di genesi. Con due blocchi simultanei la catena si biforca (fork) e i blocchi esclusi diventano orfani. La slide nota che non c'è accordo sulla definizione: un sistema privato con verificatori autorizzati è una blockchain? Fonti: `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto13.pdf` (pp. 9-12).

## Prerequisiti
- [[Distributed Ledger Technology]]: la blockchain è una DLT
- [[Funzione hash crittografica]]: collega ogni blocco al precedente

## Porta a
- [[Problema del double spending]]: risolto dalla storia pubblica e immodificabile
- [[Fork della blockchain]]: blocchi prodotti in contemporanea
- [[Protocollo di consenso]]: chi inserisce il prossimo blocco
- [[Struttura del blocco Bitcoin]]: blocco concreto di Bitcoin
- [[Bitcoin]]: prima blockchain
- [[Ethereum]]: blockchain 2.0
- [[Criteri di adozione della blockchain]]: quando usarla

## Collegati
- [[Merkle tree]]: riassume le transazioni nell'header
- [[Proof of Authority]]: consenso tipico delle blockchain permissioned
- [[Marcatura temporale]]: la catena di blocchi generalizza la marcatura temporale collegata (Crittografia)
