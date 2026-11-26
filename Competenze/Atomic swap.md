---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [scambio atomico, cross-chain swap, scambio cross-chain, atomic cross-chain swap]
tags: [competenza, area/informatica]
---

# Atomic swap

> Scambio peer-to-peer di criptovalute su due blockchain diverse, senza intermediari e senza che uno debba fidarsi dell'altro: due HTLC con lo stesso hashlock fanno sì che lo scambio avvenga per intero o per nulla.

## Definizione / enunciato
Alice vuole scambiare i suoi LTC con i BTC di Bob (esempio delle slide):
1. Alice versa i LTC a Bob sulla blockchain di Litecoin, bloccandoli con un **hashlock** e un **timelock**: Bob non può incassare senza la chiave; scaduto il tempo Alice può riprendersi i LTC;
2. Bob versa i BTC ad Alice sulla blockchain di Bitcoin con la **stessa hashlock** e un suo timelock;
3. per prelevare i BTC Alice deve rendere pubblica la chiave; a quel punto Bob la usa per incassare i LTC.

## Formule chiave
Vincolo sui tempi:
$$T_2<T_1,$$
dove $T_2$ è la scadenza del timelock della transazione di Bob (passo 2) e $T_1$ quella di Alice (passo 1).

## Intuizione
L'unico modo per Alice di prendere i BTC è rivelare il segreto, che dà a Bob i LTC. Se il timelock di Bob scadesse dopo quello di Alice, Alice potrebbe aspettare, riprendersi i LTC e poi incassare anche i BTC; con $T_2<T_1$, se Alice non rivela la chiave Bob recupera i suoi BTC in tempo. "Atomic" perché la transazione o avviene per intero o non avviene affatto.

## Come si usa
Esempio d'esame naturale: descrivere i tre passi e giustificare l'ordine dei timelock. Lo stesso principio, con un solo segreto che sblocca a cascata più pagamenti, è usato da Lightning Network.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 109-111).

## Prerequisiti
- [[Hashed Timelock Contract]]: hashlock e timelock

## Porta a
- Nessuno.

## Collegati
- [[Altcoin]]: lo scambio coinvolge criptovalute diverse (Litecoin)
- [[Proprietà ACID]]: analogia con l'atomicità delle transazioni di un DBMS (tutto o niente), non dichiarata nelle slide
