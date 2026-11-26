---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["materialized view", "viste materializzate", "query rewrite", "CREATE MATERIALIZED VIEW", "BUILD IMMEDIATE", "BUILD DEFERRED"]
tags: [competenza, area/informatica]
---

# Vista materializzata

> Vista il cui risultato è precalcolato e memorizzato su disco: nel data warehouse è un sommario della tabella dei fatti che accelera le interrogazioni con aggregazioni.

## Definizione / enunciato
Nel DW le viste materializzate sono **sommari precalcolati della tabella dei fatti**, memorizzati esplicitamente, che aumentano l'efficienza delle interrogazioni con aggregazioni. Sono definite da istruzioni SQL a partire dalle tabelle di base o da viste di granularità superiore (più fine): `group by` sugli attributi scelti, aggregazione (SUM) sulle misure, riduzione del dettaglio delle dimensioni. Precalcolano aggregati, join, ecc., e possono servire anche a interrogazioni senza aggregazioni.

**Query rewriting**: il DBMS può trasformare le interrogazioni usando automaticamente, in modo trasparente all'utente, le viste materializzate per rispondere a interrogazioni simili a quella che le definisce. Una vista può servire più interrogazioni diverse, purché l'operatore di aggregazione lo permetta.

## Formule chiave
Sintassi Oracle:
```sql
CREATE MATERIALIZED VIEW Nome
  [BUILD {IMMEDIATE|DEFERRED}]
  [REFRESH {COMPLETE|FAST|FORCE|NEVER} {ON COMMIT|ON DEMAND}]
  [ENABLE QUERY REWRITE]
AS Query;
```
BUILD IMMEDIATE crea la vista e la popola subito; DEFERRED la crea vuota. `DROP MATERIALIZED VIEW Nome;` e `ALTER MATERIALIZED VIEW Nome opzioni;`.

## Intuizione
È ridondanza controllata: si paga spazio e costo di aggiornamento per non ricalcolare a ogni query aggregati su milioni di righe.

## Come si usa
Esempio delle slide (Golfarelli-Rizzi): sul fatto $F_1=\{\text{prodotto, data, negozio}\}$ le viste $v_2=\{\text{tipo, data, città}\}$, $v_3=\{\text{categoria, mese, città}\}$, $v_4=\{\text{tipo, mese, regione}\}$, $v_5=\{\text{trimestre, regione}\}$. Esempio Oracle:
```sql
CREATE MATERIALIZED VIEW Frn_Art_sumQ
BUILD IMMEDIATE REFRESH COMPLETE ON DEMAND
ENABLE QUERY REWRITE AS
SELECT Cod_F, Cod_A, SUM(Q) FROM FAP GROUP BY Cod_F, Cod_A;
```
Nella progettazione fisica le viste materializzate sono la struttura di accesso per le `group by`.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (pp. 2-4); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/08 - DSTBD_DW-Oracle.pdf` (pp. 35-48, 58).
- **Business intelligence per big data** (magistrale): sommari precalcolati della tabella dei fatti nel breve mazzo di progettazione fisica (esempio della vista $v_3$ su Città, Mese, Categoria) e, nel mazzo Oracle, riscrittura delle interrogazioni, creazione, esempi, vincoli, eliminazione e modifica. Fonti: `magistrale/Business intelligence per big data/11-DWprogFis.pdf` (pp. 1-4); `magistrale/Business intelligence per big data/12-DW-Oracle.pdf` (pp. 35-48, 51, 58).

## Prerequisiti
- [[Schema a stella]]: viste aggregate sulla tabella dei fatti

## Porta a
- [[Reticolo multidimensionale]]: derivabilità tra viste
- [[Refresh delle viste materializzate]]: mantenere la vista allineata

## Collegati
- Nessuno.
