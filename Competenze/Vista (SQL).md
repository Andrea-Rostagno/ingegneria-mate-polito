---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [view, vista, viste, CREATE VIEW, DROP VIEW, tabella virtuale, viste aggiornabili, aggiornabilità delle viste]
tags: [competenza, area/informatica]
---

# Vista (SQL)

> Tabella virtuale definita da un'interrogazione SQL: il contenuto non è memorizzato ma ricalcolato a ogni uso, riscrivendo la query che la usa.

## Definizione / enunciato
La vista è un oggetto della base di dati usabile come una tabella; il contenuto dipende dalle altre tabelle e **non** è memorizzato fisicamente. Se un'interrogazione usa una vista, il DBMS la **riscrive** automaticamente sostituendo il riferimento con la definizione.

I nomi degli attributi vanno specificati se rappresentano funzioni, espressioni o costanti, o se due colonne di tabelle diverse hanno lo stesso nome. La cancellazione di una tabella usata da una vista può eliminare o invalidare la vista, oppure essere vietata, secondo il DBMS.

## Formule chiave
```sql
CREATE VIEW NomeVista [(ElencoAttributi)] AS InterrogazioneSQL;
DROP VIEW NomeVista;
```
**Aggiornabilità** (SQL-92): sono aggiornabili le viste in cui una riga di ciascuna tabella di base corrisponde a una sola riga della vista. **Non** è aggiornabile una vista che nel blocco più esterno non contiene la chiave primaria della tabella, contiene join uno a molti o molti a molti, funzioni aggregate o DISTINCT.

## Intuizione
Una modifica sulla vista deve potersi propagare senza ambiguità alla tabella di base: serve la chiave primaria per identificare la tupla e serve che ogni riga della vista venga da una sola riga. `NUMSOCI_SEDE` (`SELECT DISTINCT NSoci, Sede FROM F`) non è aggiornabile: (2, 'Torino') corrisponde a più fornitori, e un inserimento non ha la chiave.

## Come si usa
```sql
CREATE VIEW PICCOLI_FORNITORI AS
SELECT CodF, NomeF, NSoci, Sede FROM F WHERE NSoci<3;

SELECT * FROM PICCOLI_FORNITORI WHERE Sede='Torino';
```
`FORNITORE_SEDE` (`SELECT CodF, Sede FROM F`) è aggiornabile: inserire ('F10', 'Roma') inserisce ('F10', NULL, NULL, 'Roma') in F. `FORNITORI_TORINO` con `SELECT *` non è aggiornabile perché non seleziona esplicitamente la chiave. `FORNITORI_IMPORTANTI` con join e DISTINCT diventa aggiornabile riscrivendo il join con `WHERE CodF IN (SELECT CodF FROM FP WHERE Qta>100)`. Vantaggi: interrogazioni più semplici, sicurezza (i privilegi si danno sulle viste), evoluzione della base di dati senza riscrivere le applicazioni.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/SQL_costrutti_avanzati.pdf` (pp. 4-24).

## Prerequisiti
- [[Istruzione SELECT]]: la vista è definita da una SELECT
- [[Indipendenza dei dati]]: realizza lo schema esterno

## Porta a
- Nessuno.

## Collegati
- [[Vista materializzata]]: stessa definizione ma contenuto memorizzato
- [[Controllo dell'accesso in SQL]]: la vista come unità di autorizzazione
- [[Manipolazione dei dati in SQL]]: aggiornamenti propagati alle tabelle di base
- [[Interrogazioni nidificate]]: IN al posto del join per rendere la vista aggiornabile
- [[Tabella derivata]]: tabella temporanea definita da una query
