---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [CREATE TABLE, ALTER TABLE, DROP TABLE, domini elementari, tipi di dato SQL, valore di default, DEFAULT, RESTRICT, gestione delle tabelle]
tags: [competenza, area/informatica]
---

# Definizione delle tabelle in SQL

> Istruzioni DDL per creare (CREATE TABLE), modificare (ALTER TABLE) e cancellare (DROP TABLE) le tabelle, con domini, valori di default e vincoli di integrità.

## Definizione / enunciato
```sql
CREATE TABLE NomeTabella
 (NomeAttributo Dominio [ValoreDiDefault] [Vincoli]
  {, NomeAttributo Dominio [ValoreDiDefault] [Vincoli]}
  AltriVincoli);
```
- **Dominio**: tipo di dato, predefinito (dominio elementare) o definito dall'utente a partire da quelli predefiniti.
- **Valore di default**: un valore compatibile con il dominio, l'utente (`USER`) o NULL (default di base).
- **Vincoli** sull'attributo e **AltriVincoli** generali sulla tabella.

Domini elementari (la definizione differisce tra DBMS): testo `CHARACTER [VARYING] [(Lunghezza)]`, `VARCHAR`, `TEXT`; binario `BIT`, `BLOB`, `BINARY`; booleano `BOOLEAN`; interi `INTEGER`, `SMALLINT`, `BIGINT`; reali `NUMERIC`, `DECIMAL [(Precisione, Scala)]`, `FLOAT`, `REAL`, `DOUBLE PRECISION`; tempo `TIMESTAMP`, `DATE`, `DATETIME`; `JSON`; spaziali `SDO_GEOMETRY`, `GEOMETRY`, `POINT`, `LINESTRING`, `POLYGON`.

## Formule chiave
```sql
ALTER TABLE NomeTabella
 < ADD COLUMN Definizione-Attributo
 | ALTER COLUMN NomeAttributo <SET Valore-Default | DROP DEFAULT>
 | DROP COLUMN NomeAttributo <CASCADE | RESTRICT>
 | ADD CONSTRAINT [NomeVincolo] definizione-vincolo
 | DROP CONSTRAINT [NomeVincolo] <CASCADE | RESTRICT> >

DROP TABLE NomeTabella [RESTRICT | CASCADE];
```
**RESTRICT** (default): l'elemento non si rimuove se compare nella definizione di un altro elemento (tabella, vincolo, vista). **CASCADE**: si rimuovono anche gli elementi che ne dipendono.

## Intuizione
La CREATE TABLE è il punto in cui lo schema logico prodotto dalla progettazione diventa reale: chiavi, NOT NULL, CHECK e FOREIGN KEY traducono i vincoli dello schema. Una CREATE TABLE senza vincoli (primo esempio delle slide) accetta dati scorretti.

## Come si usa
```sql
ALTER TABLE F ADD COLUMN NDipendenti SMALLINT;
ALTER TABLE FP ALTER COLUMN Qta SET DEFAULT 0;
ALTER TABLE F DROP COLUMN NSoci RESTRICT;
```
Schema completo con vincoli: `CREATE TABLE P (CodP CHAR(6) PRIMARY KEY, NomeP CHAR(20) NOT NULL UNIQUE, Colore CHAR(6), Taglia SMALLINT CHECK (Taglia > 0), Magazzino CHAR(15));`. Lo script dell'homework crea `Istruttore`, `Corsi` e `Programma` con chiavi primarie, CHECK e FOREIGN KEY `ON DELETE CASCADE ON UPDATE CASCADE` (`HW base di dati/creaDB.sql`).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 4-13, 45; tabella dei domini letta sull'immagine di pp. 6-7).

## Prerequisiti
- [[Linguaggio SQL]]: istruzioni DDL
- [[Vincoli di integrità]]: dichiarati nella CREATE e nella ALTER TABLE
- [[Traduzione dello schema ER nel modello relazionale]]: produce lo schema da creare

## Porta a
- [[Query spaziali in SQL]]: colonne con domini spaziali
- [[Funzioni JSON in SQL]]: colonne con dominio JSON

## Collegati
- [[Integrità referenziale]]: FOREIGN KEY e politiche di propagazione
- [[Ottimizzatore di query]]: definizioni e vincoli finiscono nel dizionario dei dati
