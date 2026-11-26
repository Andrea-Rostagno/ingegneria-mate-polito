---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [DPoS, producer, block producer, delegati, voto pesato per lo stake]
tags: [competenza, area/informatica]
---

# Delegated Proof of Stake

> Evoluzione della PoS in cui la rete elegge, con voti pesati per la moneta posseduta, un gruppo ristretto di producer che producono i blocchi; veloce e scalabile, ma meno decentralizzata.

## Definizione / enunciato
Nella DPoS l'inserimento dei blocchi è delegato a un gruppo ristretto di utenti: 101 in BitShares e Lisk, 21 in EOS e Steemit, 51 in Ark. I **producer** sono eletti dall'intera rete, con voti pesati in base alla moneta posseduta. Un blocco è inserito in modo definitivo (*finalized*) quando è approvato da almeno $2/3$ dei producer ed è considerato valido da tutti gli utenti con un full node (i **validators**).

## Formule chiave
$$\text{blocco finalizzato}\iff\text{approvato da}\ \ge\tfrac23\ \text{dei producer}\ \wedge\ \text{valido per i validators}.$$

## Intuizione
Incentivo: se un producer propone un blocco non valido per l'intera rete non viene più votato, e poiché è remunerato per il suo ruolo ha forte interesse a comportarsi bene. La dispensa la paragona a una democrazia rappresentativa: migliora prestazioni e scalabilità, ma se pochi delegati controllano la rete la decentralizzazione si riduce (rischio di oligarchia di delegati).

## Come si usa
Domanda tipica: confrontare DPoS, PPoS e PoA. DPoS: delegati eletti e stabili; PPoS: comitato sorteggiato e rinnovato a ogni blocco; PoA: validatori con identità nota, scelti per reputazione.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (pp. 21-23); dispensa §6.6.

## Prerequisiti
- [[Proof of Stake]]: la DPoS ne è un'evoluzione

## Porta a
- Nessuno.

## Collegati
- [[Proof of Authority]]: anche lì pochi validatori, ma per reputazione
- [[Pure Proof of Stake]]: comitato sorteggiato invece che eletto
