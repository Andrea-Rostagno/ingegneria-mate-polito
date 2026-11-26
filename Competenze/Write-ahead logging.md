---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["WAL", "Write Ahead Log", "regola WAL", "commit precedence", "regole di scrittura del log", "record di commit", "scrittura immediata differita e mista"]
tags: [competenza, area/informatica]
---

# Write-ahead logging

> Le due regole di scrittura del log che rendono possibile il ripristino: il log va scritto prima dei dati (WAL, per poter disfare) e prima del commit (commit precedence, per poter rifare).

## Definizione / enunciato
- **WAL (Write Ahead Log)**: il before state (BS) di un record di log è scritto in memoria stabile **prima** che i dati della base di dati siano scritti su disco. Durante il ripristino permette l'**undo** di operazioni già scritte su disco.
- **Commit precedence**: l'after state (AS) è scritto in memoria stabile **prima del commit**. Permette il **redo** delle transazioni che hanno fatto commit ma i cui dati non erano ancora su disco.

Regole pratiche: BS e AS si scrivono insieme; il log va scritto prima del record nella base di dati (WAL) e prima del commit (commit precedence). Il log si scrive in modo **sincrono** (force) per le modifiche scritte su disco e al commit, in modo **asincrono** per abort/rollback.

Il **record di commit** nel log è lo spartiacque: se non è stato scritto, la transazione va disfatta dopo un guasto; se è stato scritto, va rifatta.

## Formule chiave
Protocolli di scrittura di log e base di dati (log: $B(T)\,U(T,x,BS_x,AS_x)\,U(T,y,BS_y,AS_y)\,C(T)$):

| scritture $W(x),W(y)$ su disco | serve undo | serve redo |
|---|---|---|
| tutte prima del commit | sì | no |
| tutte dopo il commit | no | sì |
| prima e dopo (misto, usato nei sistemi reali) | sì | sì |

## Intuizione
Il log deve sempre "sapere" di più del disco: se una modifica è su disco, il log ha già il modo di annullarla; se una transazione risulta conclusa, il log ha già il modo di rifarla.

## Come si usa
Si collega alle strategie del buffer manager: con *steal* finiscono su disco pagine di transazioni non concluse (serve WAL e undo); con *no force* pagine di transazioni concluse possono non essere su disco (serve commit precedence e redo). La scelta tipica steal/no force corrisponde al protocollo misto.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Rules for writing the log", "Protocols for writing the log and the database". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/07 - 18-Recovery.pdf` (pp. 17-25).

## Prerequisiti
- [[Log delle transazioni]]: regole di scrittura del log

## Porta a
- Nessuno.

## Collegati
- [[Strategie steal e force]]: politiche del buffer e regole del log
