---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["2PC", "2 Phase Commit", "commit a due fasi", "transaction manager", "TM", "resource manager", "RM", "finestra di incertezza", "uncertainty window", "X-Open-DTP", "presumed abort", "read only", "decisione euristica", "interfaccia XA"]
tags: [competenza, area/informatica]
---

# Two-phase commit

> Protocollo che garantisce l'atomicità di una transazione distribuita: un coordinatore (TM) raccoglie il "ready" di tutti i partecipanti (RM) e poi comunica a tutti la stessa decisione globale di commit o abort.

## Definizione / enunciato
Tutti i nodi di una transazione distribuita devono prendere la stessa decisione. Cause di guasto: guasto di un nodo, messaggi persi in rete (si usano ack e timeout), partizionamento della rete. Analogia delle slide: il matrimonio (il prete coordina, gli sposi partecipano). Un **Transaction Manager** (TM) coordina; i server DBMS partecipanti sono i **Resource Manager** (RM); il TM può essere un partecipante o il client.

**Nuovi record di log** (log privati separati). TM: *prepare* (identità degli RM), *global commit/abort* (decisione finale), *complete* (fine protocollo). RM: *ready* (disponibilità al commit, irrevocabile: il nodo deve essere affidabile, si applicano WAL e commit precedence, le risorse sono bloccate e l'RM perde autonomia).

**Fase I**: il TM scrive *prepare*, invia prepare agli RM e imposta un timeout. Ogni RM affidabile scrive *ready* e risponde ready; altrimenti risponde not ready, termina e fa rollback locale (se è guasto non risponde). Il TM: se riceve ready da tutti scrive *global commit*, se riceve almeno un not ready o scade il timeout scrive *global abort*.
**Fase II**: il TM invia la decisione e imposta un timeout; ogni RM scrive commit/abort, aggiorna la base di dati e invia ACK; il TM raccolti tutti gli ACK scrive *complete*, altrimenti reinvia la decisione a chi non ha risposto.

## Formule chiave
**Finestra di incertezza** di un RM: dall'invio di ready alla ricezione della decisione globale; le risorse locali restano bloccate, deve essere breve.
Ripristino: RM con ultimo record *ready* → lista READY, chiede la decisione al TM (remote recovery request). TM con ultimo record *prepare* → scrive e invia global abort; con ultimo record la decisione globale → ripete la fase II. Guasti di rete: in fase I causano global abort, in fase II la ripetizione della fase II.

## Intuizione
La decisione si separa dall'esecuzione: prima tutti promettono di poter fare commit (e da quel momento non possono più tirarsi indietro), poi uno solo decide per tutti.

## Come si usa
**X-Open-DTP**: standard per transazioni distribuite su DBMS eterogenei (un client, un TM, più RM), con interfaccia TM (client-TM) e **XA** (TM-RM). Gli RM sono passivi. Ottimizzazioni: **presumed abort** (in assenza di informazioni nel log il TM risponde abort; prepare, global abort e complete non sincroni, restano sincroni global commit, ready e commit) e **read only** (un RM che non ha modificato dati risponde read only, non scrive il log ed esce). **Decisione euristica**: un RM bloccato da un guasto del TM può terminare la transazione sotto controllo dell'operatore (di solito rollback); se differisce dalla decisione del TM l'atomicità è persa e il client ne viene informato.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "2 Phase Commit protocol", "X-Open-DTP". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/08 - 19-DistributedDatabases.pdf` (pp. 38, 40-69).

## Prerequisiti
- [[Log delle transazioni]]: nuovi record di log del protocollo
- [[Transazioni distribuite]]: atomicità di una transazione distribuita

## Porta a
- Nessuno.

## Collegati
- [[Replicazione master-slave]]: la replicazione sincrona è concettualmente simile al 2PC
