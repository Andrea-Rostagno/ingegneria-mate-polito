---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [consensus protocol, algoritmo di consenso, meccanismo di consenso, trilemma della blockchain, blockchain trilemma, attacco del 51%, 51% attack]
tags: [competenza, area/informatica]
---

# Protocollo di consenso

> Algoritmo con cui una rete di utenti che non si fidano l'uno dell'altro si accorda su quale sia il nuovo blocco valido, anche se alcuni partecipanti sono malintenzionati.

## Definizione / enunciato
Ogni blockchain deve stabilire **chi e come** inserisce nuovi blocchi nel database condiviso. Il **protocollo di consenso** è l'algoritmo che permette a una rete di utenti senza fiducia reciproca di accordarsi sul nuovo blocco valido, nonostante un certo numero (si spera piccolo) di utenti malintenzionati.

È uno dei punti più delicati e più attaccati: la struttura a catena e la distribuzione rendono difficile modificare il passato, quindi il punto più a rischio è l'**inserimento di nuovi blocchi**.

## Formule chiave
**Trilemma** fra sicurezza, decentralizzazione e scalabilità: la PoA ne è un estremo (alta scalabilità e sicurezza, decentralizzazione molto limitata). **Attacco del 51%**: nella PoW serve più di metà della potenza di calcolo; nella PoA il 51% dei validatori; nella Proof of Space più di metà della memoria allocata dalla rete.

## Intuizione
Decidere a maggioranza di utenti non funziona: un attaccante crea migliaia di identità fittizie (attacco Sybil). Ogni protocollo lega quindi il diritto di proporre blocchi a una risorsa scarsa e costosa da falsificare: calcolo, moneta in stake, moneta bruciata, reputazione, spazio su disco.

## Come si usa
Per confrontare i protocolli si chiede: quale risorsa è scarsa, chi può partecipare (permissionless o permissioned), quanto costa attaccare, come si gestiscono le fork. Panoramica del corso: PoW, PoS, DPoS, PPoS, PoI, PoA, PoB, deposit-based, Proof of Activity, Proof of Space. Algorand dichiara di aver risolto il trilemma.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/02-Introduzione.pdf` (p. 13); `03-Bitcoin.pdf` (p. 53, attacco Sybil); `06-Protocolli di consenso.pdf` (pp. 2-3, 28-29, 39); `07-Altcoin.pdf` (p. 11); dispensa §2.6, §6.

## Prerequisiti
- [[Blockchain]]: copie identiche da mantenere allineate

## Porta a
- [[Proof of Work]]: risorsa scarsa = calcolo
- [[Proof of Stake]]: risorsa scarsa = moneta posseduta
- [[Proof of Authority]]: risorsa scarsa = reputazione
- [[Proof of Burn]]: risorsa scarsa = moneta distrutta
- [[Proof of Space]]: risorsa scarsa = spazio su disco

## Collegati
- [[Distributed Ledger Technology]]: il consenso sostituisce l'autorità centrale
