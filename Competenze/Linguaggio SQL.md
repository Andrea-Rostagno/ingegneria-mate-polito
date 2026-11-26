---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [SQL, Structured Query Language, Data Manipulation Language, Data Definition Language, DML, DDL, linguaggio dichiarativo, linguaggio ospite, SQL immerso]
tags: [competenza, area/informatica]
---

# Linguaggio SQL

> Linguaggio standard per gestire le basi di dati relazionali: dichiarativo e a livello di insiemi, comprende istruzioni per interrogare, modificare e definire i dati.

## Definizione / enunciato
SQL (Structured Query Language) include istruzioni per definire lo schema, leggere e scrivere i dati, definire tabelle derivate (viste), definire privilegi e gestire transazioni. Si usa in modalità **interattiva** o **compilata**, dentro un **linguaggio ospite** che lo distingue con artifici sintattici.

- **DML** (Data Manipulation Language): `SELECT` per interrogare; `INSERT`, `UPDATE`, `DELETE` per modificare l'istanza.
- **DDL** (Data Definition Language): `CREATE/ALTER/DROP TABLE`, `CREATE/ALTER/DROP VIEW`, `CREATE/DROP INDEX`, `GRANT/REVOKE`; le slide vi elencano anche la terminazione delle transazioni (`COMMIT`, `ROLLBACK`).

## Formule chiave
Notazione delle slide: parole chiave in maiuscolo; `< >` isola un termine; `[ ]` termine opzionale; `{ }` termine ripetibile zero o più volte; `|` scelta tra alternative.

## Intuizione
SQL è un linguaggio **a livello di set** (gli operatori lavorano su relazioni e il risultato è sempre una relazione) e **dichiarativo** (descrive *cosa* ottenere, non *come*). In algebra relazionale si fissa l'ordine degli operatori; in SQL l'ordine migliore lo sceglie l'ottimizzatore, indipendentemente dall'ordine delle tabelle nella FROM e dei predicati nella WHERE.

## Come si usa
Tutti gli esempi del corso usano la base dati Forniture-Prodotti `P(CodP, NomeP, Colore, Taglia, Magazzino)`, `F(CodF, NomeF, NSoci, Sede)`, `FP(CodF, CodP, Qta)`. Le estensioni proprietarie (dati spaziali, JSON, sintassi dei trigger) variano tra DBMS.

## Nei corsi
- **Base di dati** (triennale): sei mazzi SQL più i costrutti avanzati. Fonti: `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 3-12, 49-51); `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (pp. 31-32, DDL e DML).

## Prerequisiti
- [[DBMS]]: SQL è il linguaggio dei DBMS relazionali
- [[Modello relazionale]]: opera su relazioni

## Porta a
- [[Istruzione SELECT]]: interrogazioni
- [[Manipolazione dei dati in SQL]]: INSERT, UPDATE, DELETE
- [[Definizione delle tabelle in SQL]]: DDL
- [[Controllo dell'accesso in SQL]]: GRANT e REVOKE
- [[Object-Relational Mapping]]: astrazione sopra SQL nei linguaggi a oggetti
- [[Accesso a un DBMS da Python]]: SQL eseguito da un linguaggio ospite

## Collegati
- [[Algebra relazionale]]: linguaggio procedurale corrispondente
- [[Ottimizzatore di query]]: sceglie come eseguire un linguaggio dichiarativo
