---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [PoA, consenso basato sulla reputazione, validatori autorizzati, Gavin Wood]
tags: [competenza, area/informatica]
---

# Proof of Authority

> Consenso in cui pochi validatori pre-selezionati, con identità pubblica, mettono in gioco la propria reputazione invece della moneta: molto scalabile e sicuro, poco decentralizzato, adatto alle blockchain permissioned.

## Definizione / enunciato
Nella **PoA** (termine proposto nel 2017 da Gavin Wood, co-fondatore di Ethereum) si mette in gioco la **reputazione**; i validatori devono quindi rendere pubblica la loro identità. Si pre-selezionano nodi affidabili e si delega loro l'inserimento dei blocchi. Requisiti:
- identità valide e affidabili dei validatori;
- difficoltà nel diventare e restare validatore;
- uno standard uguale per tutti per diventarlo.
Spesso si limita il numero di blocchi per validatore (per esempio niente blocchi consecutivi).

## Formule chiave
Attacco: non serve il 51% della potenza di calcolo, serve controllare il **51% dei validatori**.

## Intuizione
È uno degli estremi del **trilemma** sicurezza-decentralizzazione-scalabilità: alta scalabilità e sicurezza, decentralizzazione molto limitata. Difetto: con pochi validatori noti, un attaccante può cercare di corromperli e compromettere il sistema dall'interno.

## Come si usa
Adatta alle blockchain **permissioned** (private), dove è facile essere certi dell'affidabilità degli utenti; in quelle permissionless è complicato gestire la reputazione. In una blockchain privata non serve neppure una criptomoneta per ricompensare i validatori. Nel voto elettronico le slide la propongono come consenso ragionevole, con un gestore affidabile per collegio elettorale.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/06-Protocolli di consenso.pdf` (pp. 27-29); `09-Applicazioni.pdf` (p. 51); dispensa §6.9.

## Prerequisiti
- [[Protocollo di consenso]]: la PoA è un protocollo di consenso

## Porta a
- [[Voto elettronico su blockchain]]: consenso proposto per una blockchain elettorale permissioned

## Collegati
- [[Delegated Proof of Stake]]: anche lì un gruppo ristretto produce i blocchi
- [[Blockchain]]: tipica delle blockchain permissioned
