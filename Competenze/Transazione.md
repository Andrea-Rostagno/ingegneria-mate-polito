---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati]
livello: [magistrale, triennale]
aliases: ["transaction", "begin transaction", "commit", "rollback", "commit work", "rollback work", "delimitatori di transazione", "START TRANSACTION", "sistema transazionale", "abort"]
tags: [competenza, area/informatica]
---

# Transazione

> Unità logica di lavoro di un'applicazione: una sequenza di istruzioni SQL che termina o con commit (effetti resi definitivi) o con rollback (effetti annullati).

## Definizione / enunciato
Una **transazione** è una unità logica di lavoro eseguita da un'applicazione: una sequenza di una o più istruzioni SQL che leggono e scrivono la base di dati. È caratterizzata da correttezza, affidabilità e isolamento.

**Delimitatori.**
- *Inizio*: di solito implicito, alla prima istruzione SQL, all'inizio del programma o dopo la fine della transazione precedente.
- *Fine*: `COMMIT` è la terminazione corretta; `ROLLBACK` è la terminazione con errore, e la base di dati torna allo stato che aveva all'inizio della transazione.

**Come terminano.** Il 99,9% delle transazioni va in commit. Le altre vanno in rollback, richiesto dalla transazione stessa (*suicidio*) oppure dal sistema (*omicidio*, ad esempio per risolvere un deadlock o dopo una violazione di vincolo).

## Formule chiave
Esempio della slide (bonifico di 100 euro dal conto xxx al conto yyy):
```sql
UPDATE ACCOUNTS SET Balance = Balance - 100 WHERE Account_Number = xxx;
UPDATE ACCOUNTS SET Balance = Balance + 100 WHERE Account_Number = yyy;
COMMIT;  -- aggiunto da noi: la slide p. 11 riporta solo le due UPDATE
```

## Intuizione
Le due UPDATE del bonifico hanno senso solo insieme: se il sistema eseguisse solo la prima, sparirebbero 100 euro. La transazione è il confine entro cui il DBMS garantisce "tutto o niente" e l'isolamento dalle altre transazioni.

## Come si usa
È il concetto su cui si costruiscono le proprietà ACID, il controllo della concorrenza (schedule di transazioni) e il ripristino (undo delle transazioni senza commit, redo di quelle con commit). Nell'OLTP le transazioni sono brevi e toccano pochi record. Anche i trigger vengono eseguiti all'interno della transazione che li attiva.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): definizione, esempio del bonifico, delimitatori e terminazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/01 - 12-IntroductionDBMS.pdf` (pp. 10-13).
- **Base di dati** (triennale): transazione come unità logica di lavoro non scomponibile, che porta la base di dati da uno stato consistente a un altro (gli stati intermedi possono non esserlo); un sistema che la offre è un *sistema transazionale*. In SQL l'inizio è `START TRANSACTION`, di solito implicito (prima istruzione del programma o dopo la fine della transazione precedente); la fine è `COMMIT [WORK]` (azione *commit*: modifiche permanenti e visibili agli altri utenti) o `ROLLBACK [WORK]` (azione *abort*: si torna allo stato precedente l'inizio). Esempio: trasferimento di 100 tra due conti con due `UPDATE Conto-Corrente SET Saldo = ...` racchiusi tra `START TRANSACTION` e `COMMIT`. Da Python: autocommit di default in SQLAlchemy, `begin()`, `commit()`, `rollback()` e blocco `with conn.begin():`. Fonti: `triennale/ANNO 3/base di dati/SQL_costrutti_avanzati.pdf` (pp. 26-31); `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (p. 34); `triennale/ANNO 3/base di dati/applicazioni_web.pdf` (pp. 31-34).

## Prerequisiti
- Nessuno.

## Porta a
- [[Proprietà ACID]]: proprietà delle transazioni
- [[Anomalie delle transazioni concorrenti]]: transazioni eseguite in parallelo

## Collegati
- [[Trigger]]: eseguiti dentro la transazione che li attiva
- [[Manipolazione dei dati in SQL]]: più aggiornamenti coerenti racchiusi in una transazione
- [[Accesso a un DBMS da Python]]: commit e rollback gestiti dall'applicazione
