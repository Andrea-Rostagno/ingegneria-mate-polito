---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["master-slave replication", "replicazione sincrona", "replicazione asincrona", "replication"]
tags: [competenza, area/informatica]
---

# Replicazione master-slave

> Copia degli stessi dati su più server, in cui un master riceve tutte le scritture e gli slave servono le letture; la propagazione può essere sincrona o asincrona.

## Definizione / enunciato
**Replicazione**: gli stessi dati (o porzioni, *chunk*) in posti diversi (server locali o remoti, cluster, data center). Obiettivi: ridondanza per sopravvivere ai guasti (disponibilità) e prestazioni migliori.

**Master-slave**: un master riceve tutte le scritture (update, insert); uno o più slave servono le letture e non possono scrivere. Scalano solo le letture; il master è un *single point of failure*. CouchDB supporta anche la replicazione master-master.

- **Sincrona**: prima di fare commit il master aspetta che (tutti) gli slave abbiano fatto commit. Concettualmente simile al two-phase commit; uccide le prestazioni, soprattutto nel cloud. Compromesso: aspettare un sottoinsieme, per esempio la maggioranza.
- **Asincrona**: il master fa commit localmente senza aspettare; ogni slave scarica gli aggiornamenti per conto suo, e può fallire. Se nessuno slave ha replicato, i dati committati sul master sono persi; se solo alcuni hanno replicato, bisogna riconciliare. Più veloce e inaffidabile.

## Formule chiave
Nessuna formula.

## Intuizione
È lo scambio tra consistenza e disponibilità/prestazioni del teorema CAP in piccolo: la replica sincrona garantisce copie identiche ma blocca il master; quella asincrona risponde subito ma accetta copie temporaneamente diverse.

## Come si usa
Quando due copie divergono serve la **risoluzione dei conflitti**: es. due clienti prenotano l'ultima camera d'albergo su nodi diversi non consistenti. L'applicazione risolve con logica di business; il database può rilevare il conflitto e dare una soluzione locale. CouchDB sceglie in modo deterministico la revisione vincente (storia di revisioni più lunga; a parità, `_rev` più alto in ordine ASCII), così tutte le istanze concordano.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/09 - Beyond-relational-databases-18-12.pdf` (pp. 30-34 replicazione, pp. 48-50 conflitti).
- **Business intelligence per big data** (magistrale): stesse slide (gestione distribuita dei dati, replicazione, master-slave, sincrona e asincrona). Fonti: `magistrale/Business intelligence per big data/Beyond-relational-databases-2021-06-01.pdf` (pp. 30-35).

## Prerequisiti
- [[Sistemi NoSQL]]: copie dei dati su più nodi

## Porta a
- [[Teorema CAP]]: consistenza tra repliche

## Collegati
- [[Two-phase commit]]: la replicazione sincrona è concettualmente simile al 2PC
- [[BASE]]: conflitti tra repliche
