---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [EVM, macchina virtuale di Ethereum, gas, gas di Ethereum, Turing completezza, Turing complete, Turing completeness]
tags: [competenza, area/informatica]
---

# Ethereum Virtual Machine

> Macchina virtuale decentralizzata, Turing completa, che esegue gli smart contract su tutti i nodi Ethereum; il gas, comprato con ETH, limita l'esecuzione e impedisce i loop infiniti.

## Definizione / enunciato
La **EVM** è una macchina virtuale, cioè un emulatore che gira sul computer di qualsiasi nodo Ethereum, qualunque sia il sistema operativo, ed esegue applicazioni progettate per l'ambiente EVM usando una rete di nodi pubblici.

È **Turing completa**: ha lo stesso potere computazionale di una macchina di Turing universale ("l'unico limite è la fantasia del programmatore"). Bitcoin invece ha uno script con poche operazioni e senza loop, per sicurezza.

**Gas**: uno smart contract può essere eseguito finché ha gas, e il gas si compra con gli ETH; la quantità massima disponibile è fissata a priori nello smart contract.

## Formule chiave
Nessuna formula nelle slide: esecuzione ammessa finché $\text{gas usato}\le\text{gas massimo}$ prefissato.

## Intuizione
Con un linguaggio Turing completo non si può sapere in generale se un programma termina; un loop infinito bloccherebbe tutta la rete. Ethereum non prova a decidere la terminazione: le dà un prezzo, e ogni esecuzione si ferma quando finisce il gas. La dispensa aggiunge che il gas remunera i validatori e crea un mercato per lo spazio computazionale.

## Come si usa
Domanda tipica: perché Bitcoin non ha loop e Ethereum sì, e come Ethereum evita il blocco della rete. Linguaggi per la EVM: Solidity, Vyper, Yul, Yul+, Fe.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/05-Blockchain2.pdf` (pp. 6-7, 10); `03-Bitcoin.pdf` (p. 106); dispensa §6.2-6.3.

## Prerequisiti
- [[Ethereum]]: la piattaforma che la EVM esegue
- [[Problema della fermata]]: la terminazione non è decidibile, da cui il gas
- [[Compilazione e interpretazione]]: concetto di macchina virtuale

## Porta a
- [[Smart contract]]: programmi eseguiti dalla EVM

## Collegati
- Nessuno.
