---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [fork, biforcazione della catena, stale block, blocco obsoleto, orphan block, blocco orfano, regola della catena più lunga, conferme di una transazione, numero di conferme, checkpoint]
tags: [competenza, area/informatica]
---

# Fork della blockchain

> Biforcazione temporanea della catena quando due blocchi validi vengono prodotti quasi insieme; i miner si spostano sul ramo più lungo e il blocco dell'altro ramo diventa stale.

## Definizione / enunciato
Se due nodi validano un blocco quasi contemporaneamente, a causa dell'asincronia della rete non si può accettare "chi arriva prima": si crea una **fork**. Entrambi i blocchi sono provvisoriamente validi e i miner continuano su uno dei due rami; appena uno si allunga, i miner si spostano sul ramo **più lungo**.
- **Stale block**: blocco valido finito nel ramo perdente; non è valido e le sue transazioni non sono valide.
- **Orphan block**: blocco il cui genitore non è nella blockchain; non può mai essere inserito.

**Conferme**: una transazione in un blocco inserito ha 1 conferma; ogni blocco successivo ne aggiunge una.

## Formule chiave
Nella storia di Bitcoin non c'è mai stata una fork più lunga di 6 blocchi, quindi nessuna transazione con 6 conferme è mai stata annullata.

## Intuizione
I miner su un ramo abbandonato perdono ricompensa e fee: l'incentivo economico fa convergere rapidamente la rete su un solo ramo. Gli elenchi di stale block non sono mai certamente completi, perché un blocco può essere stato visto da pochi nodi.

## Come si usa
I **checkpoint**, inseriti nelle prime versioni di Bitcoin, rendevano immodificabile la catena fino a quel punto; l'ultimo è dell'aprile 2014, perché non aumentano la sicurezza e possono creare dubbi sulle transazioni. Altre criptomonete li usano regolarmente (Peercoin contro il nothing at stake). Le fork dovute a cambi di regole sono un'altra cosa: soft fork e hard fork.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (pp. 11-12); `03-Bitcoin.pdf` (pp. 54-61); dispensa §2.5, §3.11.

## Prerequisiti
- [[Blockchain]]: catena di blocchi collegati
- [[Mining]]: due miner risolvono il blocco quasi insieme

## Porta a
- [[Soft fork e hard fork]]: fork dovute a cambi di protocollo
- [[Coinbase transaction]]: la maturity protegge dalle fork
- [[Nothing at stake]]: nella PoS lavorare su più rami costa poco

## Collegati
- [[Problema del double spending]]: le conferme proteggono dalla doppia spesa
