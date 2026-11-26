---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia, Crittografia]
livello: [magistrale]
aliases: [digital signature, firma elettronica crittografica, KeyGen Sign Verify, autenticità integrità non ripudiabilità, non ripudio, firma BLS, Boneh-Lynn-Shacham]
tags: [competenza, area/informatica]
---

# Firma digitale

> Protocollo a chiave pubblica che garantisce autenticità dell'autore, integrità del documento e non ripudiabilità: si firma con la chiave privata, chiunque verifica con la pubblica.

## Definizione / enunciato
**Obiettivo**: garantire l'**autenticità** dell'autore di un messaggio o documento digitale, l'**integrità** del documento e la **non ripudiabilità**.

Un **protocollo di firma digitale** è formato da tre algoritmi:
- **KeyGen**: genera coppie chiave pubblica e chiave privata;
- **Sign**: usa la chiave privata per firmare un messaggio;
- **Verify**: usa la chiave pubblica per verificare la firma.

## Formule chiave
La firma è calcolata a partire dal digest $h(M)$: firma solo quel messaggio e non può essere riusata per altri. DSA (NIST, 1991) lavora in $\mathbb Z_p$ con $2^{1023}<p<2^{1024}$.

## Intuizione
È lo specchio della cifratura a chiave pubblica: solo il titolare della chiave privata può produrre la firma, tutti possono controllarla. Firmare l'hash e non il documento rende la firma corta e lega la firma a quel contenuto.

## Come si usa
Ogni sistema a chiave pubblica ha la sua firma (RSA, ElGamal, ...). DSA è stato lo standard per anni; dove serve la massima sicurezza è sostituito da **ECDSA**, usato da Bitcoin ed Ethereum. ECDSA è sicuro ma poco flessibile per firme multiple o a soglia: Bitcoin ha aggiunto le **firme di Schnorr** (Taproot, 2021), Ethereum le **firme BLS**. In Bitcoin Alice firma la transazione verso Bob, che può provare a tutti l'impegno di Alice.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/01-Strumenti.pdf` (pp. 30-31, 35); `03-Bitcoin.pdf` (pp. 16-17); dispensa §1.8.
- **Crittografia** (magistrale): garantisce autenticazione dell'origine, integrità e non ripudio. Lo schema è dato da tre algoritmi probabilistici $(\mathrm{Gen}(n),\mathrm{Sign},\mathrm{Vrfy})$: $\mathrm{Gen}(n)$ produce $(pk,sk)$ di almeno $n$ bit; $\sigma=\mathrm{Sign}_{sk}(m)$; $\mathrm{Vrfy}_{pk}(m,\sigma)\in\{0,1\}$. È **sicuro** se chi conosce $pk$ e molte coppie valide $(m_i,\sigma_i)$ non sa produrre una firma valida per un messaggio nuovo. La differenza con un MAC è l'Esercizio 10.1.2. Schemi studiati: RSA (con EMSA-PSS), ElGamal, DSA, Schnorr, ECDSA, firma cieca; si citano anche il canale subliminale e la firma con PGP. Fonti: `magistrale/Crittografia/Slide/slides week 1-14/week10/Crypto10.pdf` (§10.1, pp. 2-3); `magistrale/Crittografia/Slide/slide crittografia italiano/slide critto italiano/Critto10.pdf` (firma digitale).

## Prerequisiti
- [[Crittografia a chiave pubblica]]: chiave privata per firmare, pubblica per verificare
- [[Funzione hash crittografica]]: si firma il digest

## Porta a
- [[ECDSA]]: firma su curve ellittiche
- [[Transazione Bitcoin]]: ogni transazione è firmata
- [[Multisignature]]: più firme per sbloccare una spesa
- [[Self Sovereign Identity]]: credenziali digitali verificabili

## Collegati
- [[RSA]]: esiste la firma RSA
- [[Privacy coin]]: le ring signature mescolano chiavi di più utenti
- [[Firma di Schnorr]]: firma aggregabile adottata da Bitcoin con Taproot
- [[DSA]]: standard NIST del 1991, sostituito da ECDSA
- [[Firma RSA]]: firma con la chiave privata RSA, versione EMSA-PSS (Crittografia)
- [[Firma ElGamal]]: firma basata sul logaritmo discreto (Crittografia)
- [[Firma cieca]]: il firmatario non vede il messaggio (Crittografia)
- [[Message authentication code]]: autentica come la firma ma con chiave simmetrica e senza non ripudio (Crittografia)
