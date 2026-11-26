---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [soft fork, hard fork, fork del protocollo, Bitcoin Cash, BCH, Bitcoin Gold, Bitcoin SV, Ethereum Classic, Wrapped Bitcoin]
tags: [competenza, area/informatica]
---

# Soft fork e hard fork

> Cambi delle regole del protocollo: una soft fork resta compatibile con i nodi non aggiornati e la catena resta unica; una hard fork è incompatibile e divide la blockchain in due catene con storia comune.

## Definizione / enunciato
Se una parte degli utenti vuole cambiare il protocollo e la rete non è tutta d'accordo:
- **soft fork**: il nuovo protocollo permette a chi mantiene il vecchio software di operare regolarmente; le transazioni nuove devono risultare valide anche per il vecchio software. Non è una vera biforcazione;
- **hard fork**: il nuovo protocollo è incompatibile; nascono due blockchain distinte che condividono tutti i blocchi fino alla fork, e anche miner, utenti e sviluppatori tendono a dividersi.

## Formule chiave
Nessuna formula. Parametri di blocco delle slide: Bitcoin 1 MB, Bitcoin Cash fino a 32 MB, Bitcoin SV fino a 120 MB.

## Intuizione
La soft fork restringe le regole (un blocco nuovo è valido anche per le vecchie regole); la hard fork le cambia in modo che un vecchio nodo rifiuti i nuovi blocchi. Una hard fork è una scissione di comunità, non solo di software.

## Come si usa
Casi delle slide:
- molte hard fork di Bitcoin sono state presto abbandonate (Namecoin, GeistGeld, Tenebrix, Clamcoin);
- **Bitcoin Cash** (1 agosto 2017), nata dal dibattito sulla scalabilità con blocchi fino a 32 MB; a marzo 2026 era dodicesima per capitalizzazione ma non ha seguito il valore di Bitcoin;
- **Bitcoin Gold** (ottobre 2017): PoW Equihash per il mining con GPU, difficoltà aggiustata a ogni blocco, 200.000 BTG pre-minati;
- **Bitcoin SV** (novembre 2018), hard fork di Bitcoin Cash;
- **Ethereum Classic**: ramo che ha mantenuto l'hack di The DAO;
- **SegWit** (2017) è un aggiornamento di Bitcoin; chi preferiva blocchi più grandi ha dato origine a Bitcoin Cash.
Wrapped Bitcoin e Bitcoin BEP2 invece non sono fork: sono token che rappresentano BTC su altre blockchain.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 68-80, 120); `05-Blockchain2.pdf` (p. 33); dispensa §3.14.

## Prerequisiti
- [[Fork della blockchain]]: biforcazione della catena

## Porta a
- [[Altcoin]]: molte altcoin nascono da hard fork

## Collegati
- [[SegWit]]: aggiornamento all'origine della scissione di Bitcoin Cash
- [[Decentralized Autonomous Organization]]: l'hack di The DAO ha generato Ethereum Classic
