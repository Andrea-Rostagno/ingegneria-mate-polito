---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [oracolo, oracle, blockchain oracle, problema dell'oracolo, oracle problem, Chainlink, LINK]
tags: [competenza, area/informatica]
---

# Oracolo blockchain

> Servizio di terze parti che porta agli smart contract dati del mondo esterno (prezzi, meteo, voli, sensori): è il ponte fra blockchain e realtà, e il suo punto debole, perché se si attacca l'oracolo si manipola il contratto.

## Definizione / enunciato
Blockchain e smart contract non possono accedere da soli a dati fuori dalla rete. Un **oracolo** non è la fonte dei dati: recupera, verifica e autentica dati da fonti esterne (alcuni rimandano dati all'esterno). Classificazione:
- **fonte**: software (database, siti), hardware (sensori, IoT, scanner), umana (con autenticazione);
- **direzione**: in entrata o in uscita;
- **fiducia**: centralizzato o decentralizzato.
Esempio: un oracolo che legge dati dal sito di un'azienda è software, in entrata, centralizzato.

## Formule chiave
Nessuna formula. Requisiti: **attendibilità** (dati non manipolabili), **affidabilità** (molte fonti), **trasparenza** (verificabilità), **sicurezza** (protezione dagli attacchi).

## Intuizione
**Problema dell'oracolo**: lo smart contract non si spegne né si altera, quindi dà certezza di esecuzione; ma se il risultato dipende da un dato esterno, basta attaccare l'oracolo, o la comunicazione con un man-in-the-middle, per manomettere il risultato. La blockchain verifica il codice, non la verità del dato.

## Come si usa
Usi: prezzi di criptovalute, titoli, tassi; dati per assicurazioni (IoT, orari di treni e aerei: polizza ritardo volo o meteo con rimborso automatico senza aprire il sinistro); supply chain (GPS, dogane); sicurezza alimentare (temperature); sharing mobility. **Chainlink** è una rete decentralizzata di oracoli su Ethereum con un sistema di reputazione che premia e penalizza i fornitori di dati, collegata anche a SWIFT.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/05-Blockchain2.pdf` (pp. 37-44); `07-Altcoin.pdf` (p. 6); `09-Applicazioni.pdf` (p. 43); dispensa §6.11.

## Prerequisiti
- [[Smart contract]]: i dati servono ai contratti

## Porta a
- [[Tracciabilità di filiera su blockchain]]: i dati fisici entrano tramite oracoli e sensori

## Collegati
- [[Finanza decentralizzata]]: i prezzi arrivano dagli oracoli
- [[Altcoin]]: Chainlink e il suo token LINK
