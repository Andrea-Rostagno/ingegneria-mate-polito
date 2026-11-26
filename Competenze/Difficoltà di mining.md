---
tipo: competenza
area: informatica
corsi: [Blockchain e criptoeconomia]
livello: [magistrale]
aliases: [difficulty, difficoltà di Bitcoin, aggiustamento del target, retargeting, velocità di validazione dei blocchi, tempo di blocco, transazioni al secondo]
tags: [competenza, area/informatica]
---

# Difficoltà di mining

> Il target di Bitcoin viene ricalcolato ogni 2016 blocchi perché i blocchi arrivino in media ogni 10 minuti; la difficulty è il rapporto fra target iniziale e target attuale.

## Definizione / enunciato
Il target viene aggiornato ogni **2016 blocchi** (circa 2 settimane):
- se i miner hanno impiegato in media meno di 10 minuti a blocco, il target **scende** (più difficile);
- altrimenti il target **sale**.

## Formule chiave
$$\text{difficulty}=\frac{\text{target iniziale}}{\text{target attuale}},\qquad 2016\times10\ \text{min}\approx14\ \text{giorni}.$$
A marzo 2026 la difficulty era intorno a 150 T (slide), cioè minare era oltre 150.000 miliardi di volte più difficile che all'inizio.

## Intuizione
Se i blocchi arrivassero troppo velocemente si creerebbero fork lunghe e durature, e si allungherebbero i tempi per essere certi che una transazione non finisca in un blocco abbandonato. Tenendo fisso il tempo medio, l'aumento di potenza della rete si traduce in sicurezza, non in velocità.

## Come si usa
Conseguenza sulla capacità: blocchi limitati a qualche migliaio di transazioni, uno ogni 10 minuti, quindi circa **7 transazioni al secondo** (Visa oltre 10.000, PayPal quasi 200). Le alternative (accorciare i 10 minuti o allargare i blocchi) aumentano fork o dimensione della blockchain, e quindi riducono la decentralizzazione; da qui Lightning Network. Bitcoin Gold aggiusta la difficoltà a ogni blocco.

## Nei corsi
- **Blockchain e criptoeconomia** (magistrale): fonti `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 75, 81-84, 141-142); `06-Protocolli di consenso.pdf` (p. 6); dispensa §3.14.

## Prerequisiti
- [[Mining]]: velocità di inserimento dei blocchi
- [[Proof of Work]]: il target definisce il lavoro

## Porta a
- Nessuno.

## Collegati
- [[Struttura del blocco Bitcoin]]: il target è nel campo Bits
- [[Halving]]: la scansione a 10 minuti fissa i 4 anni fra halving
