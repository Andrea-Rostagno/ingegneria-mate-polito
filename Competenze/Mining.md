---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [mining di Bitcoin, miner, minatori, validazione dei blocchi, hashrate, mining pool, attacco Sybil, Sybil attack, identità Sybil]
tags: [competenza, area/informatica]
---

# Mining

> Processo con cui i miner scelgono transazioni dalla mempool, costruiscono un blocco e cercano un nonce che porti l'hash dell'header sotto il target: il primo che ci riesce inserisce il blocco e incassa ricompensa e fee.

## Definizione / enunciato
**Validazione dei blocchi**, il punto più delicato del protocollo perché decide quali transazioni diventano definitive:
1. ogni miner prende transazioni dalla propria mempool, scegliendo in base alle fee per il limite di dimensione;
2. calcola SHA-256 due volte dell'header (che contiene la Merkle root, quindi dipende da tutte le transazioni) facendo variare il Nonce;
3. il primo che ottiene un hash minore del target trasmette il blocco, che viene accettato;
4. l'hash del suo header diventa il riferimento per il blocco successivo.

La rete aggiusta il target per avere in media un blocco ogni 10 minuti.

## Formule chiave
Probabilità che un miner inserisca il blocco proporzionale al suo hashrate:
$$\Pr(\text{miner }i\text{ vince})\propto\text{hashrate}_i.$$
(Proporzionalità dichiarata in `03-Bitcoin.pdf` p. 53.)

## Intuizione
Perché non votare a maggioranza? Un attaccante si registrerebbe migliaia di volte con identità fittizie (**attacco Sybil**). Con la PoW il "voto" costa energia e hardware e non si può moltiplicare gratis.

## Come si usa
I **mining pool** sono gruppi di miner che condividono i premi in proporzione all'hash messo a disposizione: per il singolo la remunerazione diventa più uniforme e prevedibile, ma la validazione rischia di finire in mano a pochi (concentrazione anche per nazione). I miner non possono inserire transazioni false: la rete non le accetterebbe e perderebbero il compenso. Un miner produce blocchi, ma sono i nodi a decidere se sono validi.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 50-53, 143-145); `04-Denaro.pdf` (p. 48); dispensa §3.12.

## Prerequisiti
- [[Proof of Work]]: il lavoro richiesto
- [[Fee di transazione]]: criterio di scelta delle transazioni
- [[Struttura del blocco Bitcoin]]: header su cui si calcola l'hash
- [[Problema del double spending]]: la validazione fissa la transazione definitiva

## Porta a
- [[Fork della blockchain]]: blocchi trovati quasi insieme
- [[Coinbase transaction]]: ricompensa del miner
- [[Difficoltà di mining]]: regolazione del target

## Collegati
- [[Modello UTXO]]: aggiornamento sequenziale durante la validazione
- [[Nodi di Bitcoin]]: i nodi validano ciò che i miner propongono
