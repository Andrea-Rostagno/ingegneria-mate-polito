---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["isolation levels", "read uncommitted", "read committed", "repeatable read", "serializable", "predicate locking", "SQL2", "SET TRANSACTION"]
tags: [competenza, area/informatica]
---

# Livelli di isolamento SQL

> Lo standard SQL2 permette di scegliere, per ogni transazione, quanto isolarla dalle altre: dal livello SERIALIZABLE (con predicate locking) fino a READ UNCOMMITTED (letture senza lock).

## Definizione / enunciato
**Tipi di transazione**: read-write (default) e read only (nessuna modifica di dati o schema; bastano lock condivisi). Il livello di isolamento specifica come una transazione interagisce con le altre ed è impostabile con istruzioni SQL.

**Predicate locking**: risolve il ghost update di tipo (b) da insert. Per il 2PL una lettura non è in conflitto con l'inserimento di una nuova tupla, che non si può bloccare in anticipo; il predicate locking blocca tutti i dati che soddisfano un predicato, ed è realizzato nei sistemi reali **bloccando gli indici**.

**Livelli**:
- **SERIALIZABLE**: il più alto; include il predicate locking.
- **REPEATABLE READ**: 2PL stretto senza predicate locking; le letture di oggetti esistenti si possono ripetere correttamente, ma non c'è protezione dal ghost update (b): il calcolo di una funzione aggregata non è ripetibile.
- **READ COMMITTED**: non 2PL; il read lock è rilasciato appena letto l'oggetto; evita di leggere stati intermedi, quindi evita il dirty read.
- **READ UNCOMMITTED**: non 2PL; si legge senza acquisire lock; ammette il dirty read; consentito solo per transazioni read only.

## Formule chiave
```sql
SET TRANSACTION
  [ISOLATION LEVEL <IsolationLevel>]
  [READ ONLY] [READ WRITE]
```
Il livello si può ridurre solo per le letture: le scritture sono sempre eseguite in 2PL stretto con lock esclusivo.

## Intuizione
Ogni gradino in giù rilascia prima i lock in lettura: più concorrenza, ma più anomalie ammesse. Le scritture restano sempre protette, perché perdere aggiornamenti non è mai accettabile.

## Come si usa
Domanda tipica: per ogni livello, quale meccanismo di locking usa e quali anomalie (dirty read, inconsistent read, ghost update) sono ancora possibili. Esempio: un report che calcola medie su una tabella soggetta a inserimenti ha bisogno di SERIALIZABLE per risultati ripetibili.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Predicate locking", "Locking in SQL2 standard", "Isolation levels". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 70-74).

## Prerequisiti
- [[Anomalie delle transazioni concorrenti]]: anomalie ammesse a ciascun livello
- [[Locking a due fasi]]: livelli realizzati tramite lock

## Porta a
- Nessuno.

## Collegati
- [[Locking gerarchico]]: granularità dei lock e predicate locking
