---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [contratto intelligente, dApp, decentralized application, applicazione decentralizzata, Solidity, Vyper, Nick Szabo, distributore automatico]
tags: [competenza, area/informatica]
---

# Smart contract

> Programma eseguito sui nodi validatori di una blockchain, il cui risultato (un cambio di stato) è una transazione su cui i nodi devono trovare consenso: esegue automaticamente regole definite a priori senza intermediari.

## Definizione / enunciato
Idea di **Nick Szabo** (1997), allora scollegata dalla blockchain: protocolli informatici che facilitano, verificano o fanno rispettare automaticamente un contratto. Oggi, dopo Ethereum, uno smart contract è un programma messo in esecuzione sui nodi validatori, il cui risultato, di solito un cambio di stato della blockchain, è una transazione da approvare con il consenso.

Una **dApp** è un'applicazione in esecuzione su una rete peer-to-peer decentralizzata, in cui ogni nodo conta allo stesso modo. La blockchain garantisce che tutti i nodi eseguano lo stesso programma con gli stessi input, quindi ottengano lo stesso output.

## Formule chiave
Nessuna formula: stesso codice e stessi input su ogni nodo $\Rightarrow$ stesso output.

## Intuizione
Esempio di Szabo: il **distributore automatico**, che ricevuta una moneta e la scelta consegna il prodotto; chiunque abbia monete partecipa a uno scambio regolato a priori dalla macchina, con meno controversie e controlli. Una web application classica gira su un server centrale; una dApp no. La dispensa precisa che uno smart contract non è "intelligente" né automaticamente un contratto giuridico.

## Come si usa
Bitcoin permetteva smart contract prima di Ethereum, con lo Script limitato (timelock, hashlock, multisig); quelli di Ethereum hanno avuto più successo perché la EVM è Turing completa. Linguaggi: Solidity e Vyper. Il rischio emerso con The DAO: un bug nel codice può essere sfruttato e il codice non si può fermare. Applicazioni: token, DeFi, DAO, polizze che rimborsano automaticamente grazie a un oracolo.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (pp. 23-24); `05-Blockchain2.pdf` (pp. 8-10); `03-Bitcoin.pdf` (p. 106); dispensa §6.4.

## Prerequisiti
- [[Ethereum Virtual Machine]]: ambiente di esecuzione
- [[Precursori di Bitcoin]]: l'idea di Szabo del 1997

## Porta a
- [[Token crittografico]]: token definiti da smart contract
- [[Finanza decentralizzata]]: servizi finanziari via smart contract
- [[Decentralized Autonomous Organization]]: organizzazione governata da smart contract
- [[Oracolo blockchain]]: dati esterni per gli smart contract

## Collegati
- [[Hashed Timelock Contract]]: smart contract nel linguaggio di Bitcoin
- [[Tracciabilità di filiera su blockchain]]: automazione di pagamenti e rimborsi
