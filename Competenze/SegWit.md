---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [Segregated Witness, P2WPKH, Pay-to-witness-public-key-hash, indirizzi bc1, witness]
tags: [competenza, area/informatica]
---

# SegWit

> Aggiornamento di Bitcoin del 2017 che separa i dati della firma (witness) dal resto della transazione: un blocco contiene più transazioni e nasce un nuovo tipo di indirizzo, P2WPKH, che inizia con bc1.

## Definizione / enunciato
**SegWit** (Segregated Witness) separa efficacemente i dati della firma dalle transazioni Bitcoin. Con l'aggiornamento è stato introdotto il pagamento **Pay-to-witness-public-key-hash (P2WPKH)**, con indirizzi che iniziano con "bc1". Effetto sul blocco: il limite di 1 MB è "espanso fino a 4 MB con il nuovo protocollo SegWit".

## Formule chiave
Capacità del blocco: $1\ \text{MB}\to\text{fino a }4\ \text{MB}$ (`03-Bitcoin.pdf` p. 51).

## Intuizione
Togliendo le firme dal calcolo della dimensione "tradizionale" del blocco entrano più transazioni senza cambiare il limite di 1 MB per i vecchi nodi: è un modo di aumentare la scalabilità restando compatibili. La dispensa aggiunge che SegWit migliora anche la gestione della malleabilità delle transazioni (non è nelle slide).

## Come si usa
Non tutti erano d'accordo ad aumentare così le transazioni al secondo: chi preferiva aumentare la dimensione del blocco ha dato origine alla hard fork **Bitcoin Cash**. È quindi il caso di studio del conflitto fra due strategie di scaling on-chain: separare la witness o allargare i blocchi. Dopo SegWit è arrivato Taproot (2021, P2TR).

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 51, 120-121); dispensa §3.17.

## Prerequisiti
- [[Indirizzo Bitcoin]]: P2WPKH è un nuovo tipo di indirizzo
- [[Struttura del blocco Bitcoin]]: cambia la capacità del blocco

## Porta a
- Nessuno.

## Collegati
- [[Soft fork e hard fork]]: la contrarietà a SegWit ha prodotto Bitcoin Cash
