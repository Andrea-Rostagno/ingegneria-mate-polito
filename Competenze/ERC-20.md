---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [standard ERC-20, Ethereum Request for Comment 20, token fungibile, fungible token, totalSupply, balanceOf, transfer, transferFrom, approve, allowance, ERC-223, ERC-777]
tags: [competenza, area/informatica]
---

# ERC-20

> Standard di Ethereum per gli smart contract dei token fungibili: fissa sei funzioni obbligatorie, così chiunque può emettere un token senza riscrivere tutto da capo.

## Definizione / enunciato
ERC sta per *Ethereum Request for Comment* e 20 è il numero assegnato al progetto. Prima dello standard ogni token andava riscritto da capo, con lavoro e rischi per funzionalità e sicurezza. Lo standard ha sei parametri obbligatori, descritti nelle slide così:
1. `totalSupply`: massimo numero di token creabili;
2. `balanceOf`: assegna un numero iniziale di token a un indirizzo, di solito ai creatori;
3. `transfer`: trasferisce token a chi li acquista;
4. `transferFrom`: invia token da una persona all'altra;
5. `approve`: verifica che uno smart contract possa distribuire token in base alla fornitura restante (serve per 3);
6. `allowance`: verifica che un indirizzo abbia saldo sufficiente per inviare token a un altro (serve per 4).

## Formule chiave
Nessuna formula. Nei token ERC-20 ogni unità è equivalente alle altre (fungibilità).

## Intuizione
Uno standard comune rende i token interoperabili con wallet ed exchange e ha fatto esplodere le applicazioni economiche della blockchain. Il rovescio: emettere token è facile anche per i non esperti, quindi aumentano le vulnerabilità, da cui ERC-223 ed ERC-777.

## Come si usa
Le descrizioni sono riportate come nelle slide; alcune (per esempio `balanceOf` come assegnazione iniziale) sembrano imprecise rispetto al nome della funzione, e la mappa del corso lo segnala tra i dubbi. Per token unici si usa ERC-721.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonte `magistrale/Blockchain e criptoeconomia/05-Blockchain2.pdf` (pp. 18-20); dispensa §6.7.

## Prerequisiti
- [[Token crittografico]]: lo standard definisce token

## Porta a
- Nessuno.

## Collegati
- [[Token non fungibile]]: ERC-721 per token non intercambiabili, ERC-1155 per entrambi
