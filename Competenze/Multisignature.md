---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [multisig, firma multipla, firma digitale multipla, firma a soglia, m-su-n, multisig 2-of-2, P2SH, Pay-to-Script-Hash, Taproot, P2TR, Pay-to-Taproot]
tags: [competenza, area/informatica]
---

# Multisignature

> Condizione di spesa che richiede più chiavi private invece di una: abilita possesso condiviso, maggiore sicurezza e schemi a soglia m-su-n; in Bitcoin si realizza con P2SH e poi con Taproot.

## Definizione / enunciato
Si parla di **multisignature** quando per autorizzare una transazione, o sbloccare un'azione, servono più chiavi private. Applicazioni:
- condivisione del possesso di un ammontare fra più persone;
- maggiore sicurezza, perché per compromettere il wallet servono più chiavi;
- **soglia m-su-n**, che riduce il rischio di perdere il controllo del wallet.

**Pay-to-Script-Hash (P2SH, 2012)**: indirizzi che iniziano con 3, costruiti dall'hash di uno **script** invece che da una chiave pubblica. Solo chi riceve conosce lo script e le condizioni per sbloccare; mittente e rete non lo vedono. In questi pagamenti le fee le paga chi riceve.

## Formule chiave
Schema a soglia: servono $m$ firme valide su $n$ chiavi autorizzate ($m\le n$); nei canali Lightning si usa il 2-di-2.

## Intuizione
Bitcoin aveva un multisig nativo via script dal 2009, poco flessibile. P2SH sposta la complessità dallo script al suo hash: lo script si rivela solo alla spesa, e Bitcoin diventa una sorta di "denaro programmabile". Con **Taproot** (2021, transazioni P2TR) arrivano le firme di Schnorr, aggregate e a soglia, che ECDSA permette solo in modo poco efficiente.

## Come si usa
Esempio chiave del corso: la *funding transaction* di un canale Lightning blocca i fondi in un indirizzo multisig 2-of-2, spendibile solo con la firma di Alice e di Bob.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 116-119, 121); `01-Strumenti.pdf` (p. 35); `03B-Lightning Network.pdf` (pp. 4-6).

## Prerequisiti
- [[Firma digitale]]: ogni chiave produce una firma
- [[Indirizzo Bitcoin]]: P2SH è un altro tipo di indirizzo

## Porta a
- [[Canale di pagamento]]: funding transaction multisig 2-of-2

## Collegati
- [[ECDSA]]: poco efficiente per firme multiple, da cui Schnorr
- [[Firma di Schnorr]]: firme aggregate e a soglia di Taproot
