---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["checkpoint", "dump", "copia di backup", "record di checkpoint", "CK(L)"]
tags: [competenza, area/informatica]
---

# Checkpoint e dump

> Due operazioni periodiche che preparano il ripristino: il checkpoint fissa su disco gli effetti delle transazioni concluse e annota quelle attive; il dump crea una copia completa della base di dati.

## Definizione / enunciato
**Checkpoint**: operazione richiesta periodicamente dal gestore dell'affidabilità al buffer manager per velocizzare il ripristino. Esecuzione:
1. si registrano i TID di tutte le transazioni attive; da quando il checkpoint inizia nessuna transazione può fare commit finché non finisce;
2. le pagine delle transazioni concluse (commit o abort) sono scritte su disco in modo sincrono con la primitiva **force**;
3. al termine si scrive in modo sincrono (force) nel log il record di checkpoint $CK(L)$, con l'insieme $L$ delle transazioni attive.

Dopo un checkpoint l'effetto di tutte le transazioni con commit è memorizzato in modo permanente su disco, mentre lo stato delle pagine scritte dalle transazioni attive è ignoto.

**Dump**: crea una copia completa della base di dati, di solito a sistema offline; la copia è in memoria stabile (memoria terziaria o offline) e può essere incrementale. Alla fine si scrive nel log un record di dump con data, ora e dispositivo usato.

## Formule chiave
Record di sistema: $CK(T_1,\dots,T_n)$ e $DUMP$. Esempio dalle slide: `CK(T2, T3, T4)` indica che al checkpoint erano attive T2, T3, T4.

## Intuizione
Il checkpoint è un "segnalibro" nel log: tutto ciò che è finito prima è al sicuro sul disco, quindi il ripristino può partire da lì invece che dall'inizio. Il dump è il segnalibro di ultima istanza, che serve quando si perde il disco stesso.

## Come si usa
Il record di checkpoint non è indispensabile per il ripristino, ma rende la ripresa a caldo più veloce: senza, bisogna leggere tutto il log fino all'ultimo dump. La ripresa a caldo parte dall'ultimo checkpoint (insieme UNDO iniziale = transazioni attive al checkpoint); la ripresa a freddo parte dall'ultimo dump.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Checkpoint", "Execution of a checkpoint", "Dump". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/07 - 18-Recovery.pdf` (pp. 9, 13-16, 34).

## Prerequisiti
- [[Log delle transazioni]]: record di sistema del log

## Porta a
- [[Ripresa a caldo]]: parte dall'ultimo checkpoint
- [[Ripresa a freddo]]: riparte dall'ultimo dump

## Collegati
- Nessuno.
