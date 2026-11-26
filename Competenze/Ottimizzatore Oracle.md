---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["Oracle optimizer", "EXPLAIN PLAN", "access path", "index range scan", "index unique scan", "fast full index scan", "clustering factor", "istogrammi", "OPTIMIZER_MODE", "hint", "Oracle hints"]
tags: [competenza, area/informatica]
---

# Ottimizzatore Oracle

> L'ottimizzatore basato sui costi di Oracle: trasforma la query, stima selettività, cardinalità e costo con le statistiche del dizionario, genera i piani e sceglie quello di costo minimo; si ispeziona con EXPLAIN PLAN e si può guidare con gli hint.

## Definizione / enunciato
Componenti: **Query Transformer** (riscrive i blocchi della query, ottimizzando prima quello più interno: approccio bottom-up), **Estimator** (stima *selettività*, frazione di righe; *cardinalità*, numero di righe; *costo*, in I/O, CPU e memoria, usando le statistiche e gli istogrammi), **Plan Generator** (prova piani diversi per combinazioni di access path, metodi e ordini di join, con un cutoff basato sul costo del piano migliore corrente).

**Access path**: *full table scan* (legge tutti i blocchi con letture multiblocco, parametro DB_FILE_MULTIBLOCK_READ_COUNT), *index scan* (unique, range, full, fast full, bitmap), *rowid scan* (il modo più veloce per una singola riga). Gli indici convengono per piccoli sottoinsiemi di righe, la scansione completa per grandi porzioni. Il **clustering factor** misura quanto le righe con lo stesso valore indicizzato sono sparse nei blocchi: basso se concentrate (AAA BBB CCC in 3 blocchi), alto se sparse (ABC ABC ABC).

**Hint**: commenti `/*+ ... */` che impongono scelte all'ottimizzatore: obiettivo (ALL_ROWS, FIRST_ROWS(n)), access path (FULL, INDEX, NO_INDEX, INDEX_COMBINE, INDEX_FFS), ordine dei join (ORDERED, LEADING), metodo di join (USE_NL, USE_MERGE, USE_HASH).

## Formule chiave
```sql
EXPLAIN PLAN FOR <istruzione>;  -- sintassi nostra: le slide pp. 10-11 citano solo "the EXPLAIN PLAN statement"
ALTER SESSION SET OPTIMIZER_MODE = FIRST_ROWS_1;
SELECT /*+ LEADING(e j) USE_NL(e j) INDEX(j empID_index) FULL(e) */ ...
```

## Intuizione
È la versione concreta della teoria: gli stessi algoritmi (nested loop, sort merge, hash) e le stesse statistiche, con in più la possibilità di vedere il piano e, in casi estremi, di forzarlo.

## Come si usa
- Esempi su EXAM(CCode, SId, Date, Score): `WHERE Score>=20` senza indice, Table Access Full (costo 2, totale 5); con indice su Score e `Score>=27`, Index Range Scan (costo 1) + accesso per rowid (4); `GROUP BY CCode` con indice su (CCode, Score), Fast Full Index Scan senza leggere la tabella.
- Obiettivo: ALL_ROWS (throughput, default, applicazioni batch) contro FIRST_ROWS_n (tempo di risposta, applicazioni interattive).
- Gli hint fanno perdere l'indipendenza dei dati: vanno usati quasi mai.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzi "Oracle Optimizer" e "Oracle Hints" (slide di lezione archiviate nella cartella Esercizi). Fonti: `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/01 - DSTBD_oracle_optimizer-IT.pdf` (pp. 2-36, 46-59); `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/02 - DSTBD_oracle_hints-IT.pdf` (pp. 2-11); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/05 - 16-PhysicalDesign.pdf` (p. 23).

## Prerequisiti
- [[Ottimizzazione basata sui costi]]: realizzazione in un DBMS commerciale

## Porta a
- Nessuno.

## Collegati
- [[Profili dei dati]]: statistiche e istogrammi
