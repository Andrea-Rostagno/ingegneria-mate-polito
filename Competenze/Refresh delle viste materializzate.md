---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["refresh", "fast refresh", "complete refresh", "materialized view log", "ON COMMIT", "ON DEMAND", "aggiornamento incrementale", "manutenzione delle viste"]
tags: [competenza, area/informatica]
---

# Refresh delle viste materializzate

> Aggiornamento del contenuto di una vista materializzata quando cambiano le tabelle di base: completo o incrementale (fast), automatico al commit o su richiesta, oppure con trigger.

## Definizione / enunciato
Opzioni Oracle di `REFRESH`:
- **COMPLETE**: ricalcola l'interrogazione su tutti i dati;
- **FAST**: aggiorna la vista in base alle sole variazioni avvenute dall'ultimo refresh;
- **FORCE**: FAST se possibile, altrimenti COMPLETE;
- **NEVER**: nessun aggiornamento con le procedure standard.

Momento del refresh: **ON COMMIT** (automatico quando le operazioni SQL cambiano il contenuto della vista) o **ON DEMAND** (su richiesta esplicita, procedura `DBMS_MVIEW.REFRESH`).

**Vincoli del fast refresh**: servono i **materialized view log** sulle tabelle e sugli attributi usati (ognuno associato a una sola tabella e ad alcuni attributi, memorizza le variazioni), con opzioni SEQUENCE e ROWID; con GROUP BY la SELECT deve contenere COUNT(*), SUM(...) o una funzione di aggregazione.

## Formule chiave
```sql
EXECUTE DBMS_MVIEW.REFRESH('Frn_Art_sumQ', 'C');   -- 'C' complete, 'F' fast

CREATE MATERIALIZED VIEW LOG ON FAP
  WITH SEQUENCE, ROWID (Cod_F, Cod_A, Q) INCLUDING NEW VALUES;

CREATE MATERIALIZED VIEW Frn_Art_sumQ
  BUILD IMMEDIATE REFRESH FAST ON COMMIT ENABLE QUERY REWRITE AS
  SELECT Cod_F, Cod_A, SUM(Q) FROM FAP GROUP BY Cod_F, Cod_A;
```

## Intuizione
Il fast refresh è possibile solo se dall'insieme delle variazioni si sa ricalcolare l'aggregato: per questo servono il log delle modifiche e un aggregato distributivo o algebrico (con COUNT di supporto).

## Come si usa
- Nel DW le viste si aggiornano durante il caricamento ETL, dopo dimensioni e tabelle dei fatti, nella finestra temporale disponibile.
- **Con i trigger** (slide di lezione sui trigger): vista ES(DCId, TotalStudents) = `SELECT DCId, COUNT(*) FROM S GROUP BY DCId`. Tre trigger AFTER di riga, uno per insert, delete e update di DCId su S. L'insert incrementa TotalStudents se il corso esiste in ES, altrimenti inserisce la tupla con 1; il delete elimina il corso quando esce l'ultimo studente.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/08 - DSTBD_DW-Oracle.pdf` (pp. 39-57); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (pp. 29, 32); `magistrale/Data science tecnologie basi di dati/Esercizi/2 - SQL Esteso/03 - 10-Triggers-1.pdf` (pp. 71-86).
- **Business intelligence per big data** (magistrale): stesse slide Oracle (procedura di refresh, fast refresh, materialized view log con esempi). Fonti: `magistrale/Business intelligence per big data/12-DW-Oracle.pdf` (pp. 49-57).

## Prerequisiti
- [[Vista materializzata]]: mantenere la vista allineata
- [[Trigger]]: manutenzione delle viste con trigger

## Porta a
- Nessuno.

## Collegati
- [[Scelta delle viste da materializzare]]: il costo di aggiornamento limita la scelta
- [[ETL]]: dopo ogni caricamento le viste vanno aggiornate
