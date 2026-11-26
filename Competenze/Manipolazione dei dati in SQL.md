---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [UPDATE, INSERT INTO, DELETE FROM, UPDATE SET, istruzioni di aggiornamento, aggiornamento dei dati in SQL]
tags: [competenza, area/informatica]
---

# Manipolazione dei dati in SQL

> Le istruzioni INSERT, DELETE e UPDATE modificano l'istanza di una tabella; ogni modifica deve lasciare rispettati i vincoli di integrità, anche referenziali.

## Definizione / enunciato
Le operazioni di aggiornamento modificano lo stato della base di dati; ciascuna istruzione aggiorna **una sola tabella**.
- **INSERT**: una tupla con valori costanti, oppure più tuple lette da un'interrogazione (che non può contenere ORDER BY).
- **DELETE**: cancella tutte le tuple che soddisfano il predicato; senza WHERE svuota la tabella (che non viene eliminata).
- **UPDATE**: modifica le tuple che soddisfano il predicato secondo le assegnazioni della SET.

## Formule chiave
```sql
INSERT INTO NomeTabella [(ElencoColonne)] VALUES (ElencoCostanti);
INSERT INTO NomeTabella [(ElencoColonne)] Interrogazione;
DELETE FROM NomeTabella [WHERE predicato];
UPDATE NomeTabella
SET colonna = espressione {, colonna = espressione}
[WHERE predicato];
```

## Intuizione
Se si omette la lista delle colonne valgono tutte, nell'ordine di creazione: l'istruzione smette di funzionare se lo schema cambia. Gli attributi non specificati ricevono NULL, quindi devono ammetterlo. Poiché ogni istruzione tocca una tabella sola, mantenere l'integrità referenziale senza politiche di propagazione richiede più istruzioni, da eseguire tutte (una transazione).

## Come si usa
Esempi delle slide su Forniture-Prodotti:
```sql
INSERT INTO P (CodP, NomeP, Colore, Taglia, Città)
VALUES ('P7', 'Maglia', 'Viola', 40, 'Venezia');

INSERT INTO FORNITURE-TOTALI (CodP, TotQta)
  (SELECT CodP, SUM(Qta) FROM FP GROUP BY CodP);

-- cancellare i fornitori di Milano senza violare il vincolo referenziale
DELETE FROM FP
WHERE CodF IN (SELECT CodF FROM F WHERE Sede='Milano');
DELETE FROM F WHERE Sede='Milano';

UPDATE P SET Colore='Giallo', Taglia=Taglia+2, Città=NULL
WHERE CodP='P1';
UPDATE F SET NSoci=2*NSoci WHERE Città='Milano';
```
Inserire `('F20', 'P20', 1000)` in FP non va eseguito se F20 e P20 non esistono in F e P; cambiare il codice F2 in F9 richiede l'UPDATE sia di F sia di FP. Nell'homework le INSERT popolano lo schema `palestra` (`HW base di dati/creaDB.sql`).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/5-SQL_manipolazione_dati.pdf` (pp. 3-19).

## Prerequisiti
- [[Linguaggio SQL]]: istruzioni DML
- [[Integrità referenziale]]: le modifiche devono rispettarla

## Porta a
- Nessuno.

## Collegati
- [[Transazione]]: più aggiornamenti coerenti in un'unità atomica
- [[Vista (SQL)]]: aggiornamenti propagati attraverso una vista aggiornabile
