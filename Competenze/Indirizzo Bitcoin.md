---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [Bitcoin address, indirizzo bitcoin, P2PKH, Pay-To-Public-Key-Hash, P2PK, Pay-To-Public-Key, Base58Check, HASH160, checksum dell'indirizzo]
tags: [competenza, area/informatica]
---

# Indirizzo Bitcoin

> Identificativo a cui si inviano i bitcoin, ottenuto dalla chiave pubblica con SHA-256, RIPEMD-160, un checksum e la codifica Base58Check: più corto, a prova di errori e tale da non rivelare la chiave pubblica finché non si spende.

## Definizione / enunciato
Dalla chiave pubblica $K_{pub}=dG$:
1. $S=(\text{version byte})\,\|\,\text{RIPEMD-160}(\text{SHA-256}(K_{pub}))$;
2. $C$ (checksum) = primi 4 byte di $\text{SHA-256}(\text{SHA-256}(S))$;
3. $S_{check}=S\,\|\,C$;
4. indirizzo = codifica **Base58Check** di $S_{check}$ (evita gli errori fra O, 0, I, l).

Le transazioni verso questi indirizzi sono **P2PKH** (Pay-To-Public-Key-Hash), indirizzi che iniziano con 1. Il vecchio **P2PK** pagava direttamente la chiave pubblica, rendendola subito pubblica.

## Formule chiave
Stima delle slide sulle collisioni di chiavi: $\approx12\cdot10^{16}$ coppie usate in 1000 anni (ritmo attuale moltiplicato per $10^6$) su $2^{256}\approx1{,}16\cdot10^{77}$ possibili, probabilità di collisione dell'ordine di $10^{-60}$; per confronto, scegliere lo stesso granello di sabbia sulla Terra ha probabilità $10^{-24}$.

## Intuizione
Vantaggi: il checksum rende difficile sbagliare indirizzo; nella blockchain compare solo l'hash della chiave pubblica, che resta segreta finché i bitcoin non vengono spesi, quindi un attaccante non ha anni per attaccarla. Al momento della spesa il proprietario pubblica la chiave pubblica (chiunque ne ricalcola l'hash) e firma. Svantaggio: due chiavi pubbliche diverse potrebbero avere lo stesso indirizzo, con probabilità trascurabile.

## Come si usa
Esempio da *Mastering Bitcoin*: chiave privata esadecimale di 64 cifre (256 bit, 77 cifre decimali) e relativo punto $kG$. Altri tipi di indirizzo: P2SH (iniziano con 3), P2WPKH di SegWit (`bc1`), P2TR di Taproot. Il computer quantistico minaccia soprattutto i BTC su chiavi pubbliche già esposte.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 19-31, p. 23 verificata sulla pagina renderizzata; pp. 117-121, 133); dispensa §3.7.

## Prerequisiti
- [[Funzione hash crittografica]]: SHA-256 e RIPEMD-160
- [[Curva ellittica]]: la chiave pubblica è un punto di secp256k1

## Porta a
- [[Transazione Bitcoin]]: gli output pagano indirizzi
- [[Multisignature]]: indirizzi P2SH costruiti da uno script
- [[SegWit]]: indirizzi P2WPKH
- [[Wallet di criptovalute]]: il wallet genera e custodisce indirizzi e chiavi

## Collegati
- Nessuno.
