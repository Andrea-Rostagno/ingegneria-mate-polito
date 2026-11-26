---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [PPoS, Algorand, ALGO, comitato sorteggiato, Silvio Micali]
tags: [competenza, area/informatica]
---

# Pure Proof of Stake

> Consenso di Algorand: a ogni blocco un comitato di validatori viene sorteggiato in segreto, con probabilità proporzionale alla moneta posseduta; i sorteggiati lo provano solo dopo aver votato, quando è ormai tardi per attaccarli.

## Definizione / enunciato
La **PPoS** è il protocollo di Algorand, piattaforma per smart contract e token con criptomoneta ALGO, fondata nel 2017 da Silvio Micali (MIT, Premio Turing 2012 con Shafi Goldwasser). Come nella DPoS c'è un comitato di validatori, ma:
- il comitato è **sorteggiato**, e solo gli interessati sanno di essere stati scelti;
- valida **un solo blocco** e poi viene risorteggiato;
- la probabilità di essere sorteggiati dipende dalla moneta posseduta;
- chi è sorteggiato può provare a tutti di essere stato scelto.

## Formule chiave
$$\Pr(\text{essere sorteggiati})\ \text{crescente con la moneta posseduta}$$
(le slide non danno la formula esatta).

## Intuizione
I sorteggiati rivelano di esserlo quando hanno già votato per la validazione: un attaccante non sa chi corrompere o colpire finché non è troppo tardi. Rinnovare il comitato a ogni blocco evita l'oligarchia stabile dei delegati della DPoS.

## Come si usa
Algorand dichiara di aver risolto il **trilemma** della blockchain (sicurezza, scalabilità e decentralizzazione insieme); nel 2021 ha stretto un accordo con la SIAE per i diritti d'autore. Attenzione: `07-Altcoin.pdf` p. 11 scrive "PPoW (Pure Proof of Work)", in contrasto con `06-Protocolli di consenso.pdf` p. 24 che parla di PPoS; la nota segue la seconda.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (p. 24); `07-Altcoin.pdf` (p. 11); dispensa §6.7.

## Prerequisiti
- [[Proof of Stake]]: la selezione dipende dalla moneta

## Porta a
- Nessuno.

## Collegati
- [[Delegated Proof of Stake]]: comitato eletto invece che sorteggiato
- [[Altcoin]]: Algorand fra le criptovalute di terza generazione
