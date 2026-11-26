---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [payment channel, canale di pagamento bidirezionale, funding transaction, transazione di apertura, commitment transaction, transazione di chiusura, revocation, revocation penalty mechanism, transazioni off-chain]
tags: [competenza, area/informatica]
---

# Canale di pagamento

> Due utenti bloccano fondi in un indirizzo multisig 2-of-2 con una transazione on-chain, poi si scambiano pagamenti off-chain aggiornando transazioni pre-firmate; in catena finiscono solo apertura e chiusura.

## Definizione / enunciato
- **Funding transaction** (apertura): transazione multisig on-chain che immobilizza i fondi; per spenderli servono le firme di Alice e di Bob.
- **Transazioni off-chain**: quante se ne vuole, senza registrarle e senza fee.
- **Chiusura**: si calcola il saldo e una transazione on-chain lo distribuisce.

Per non doversi fidare, le parti si scambiano prima delle **commitment transactions** già firmate, ciascuna pubblicabile autonomamente da chi la possiede: input l'output 2-of-2; output 1 verso l'altro utente, subito spendibile; output 2 verso il proprietario, con un blocco temporale. A ogni stato è associato un segreto.

**Pagamento off-chain**: concordare il nuovo saldo, creare due nuove commitment, scambiarsi le firme, rendere inutilizzabili le precedenti (**revocation**).

## Formule chiave
Esempio delle slide: 0,1 BTC a testa; Alice → Bob 0,03 e 0,01, Bob → Alice 0,05, Alice → Bob 0,02, Bob → Alice 0,04. Chiusura: Alice 0,13 BTC, Bob 0,07 BTC.

## Intuizione
**Revocation penalty mechanism**: a ogni cambio di stato si rivelano i segreti degli stati precedenti. Se qualcuno pubblica una commitment vecchia e a lui favorevole, l'altro ha il tempo del blocco temporale per usare il segreto e prendere **tutti** i fondi: se Alice conosce il segreto di Bob, Bob sta certamente barando. Finché si collabora tutto funziona; se si litiga, ciascuno recupera almeno il dovuto; chi bara perde tutto. Le commitment evitano anche che i fondi restino bloccati se l'altro non coopera.

## Come si usa
Un canale non può gestire pagamenti più alti della somma investita, quindi è adatto ai micropagamenti; chi tiene aperto un canale incassa piccole fee. Il protocollo semplice senza commitment funziona solo con massima fiducia. La dispensa cita i servizi *watchtower*, non presenti nelle slide.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/03B-Lightning Network.pdf` (pp. 4-16); dispensa §4.2-4.3.

## Prerequisiti
- [[Multisignature]]: indirizzo 2-of-2 della funding transaction
- [[Transazione Bitcoin]]: transazioni pre-firmate con blocco temporale

## Porta a
- [[Lightning Network]]: rete di canali

## Collegati
- [[Hashed Timelock Contract]]: blocchi temporali e segreti nelle commitment
- [[Equilibrio di Nash]]: il meccanismo di penalità rende irrazionale barare (teoria dei giochi)
