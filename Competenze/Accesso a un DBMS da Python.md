---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [SQLAlchemy, create_engine, connect, execute, cursor, autocommit, begin commit rollback, mysql.connector, connessione al DBMS, interazione con il DBMS]
tags: [competenza, area/informatica]
---

# Accesso a un DBMS da Python

> Schema comune per usare una base di dati da un'applicazione Python: aprire la connessione, eseguire istruzioni SQL, gestire le transazioni, chiudere la connessione.

## Definizione / enunciato
Python ha moduli per i principali DBMS (MySQL, PostgreSQL, Oracle, MariaDB). Struttura comune: (1) apertura della connessione; (2) esecuzione di istruzioni SQL; (3) chiusura della connessione.

Con **SQLAlchemy**:
- `create_engine()` con cinque parametri: *dialect* (linguaggio usato per la connessione), *username*, *password*, *host* (macchina che ospita il DBMS), *dbname*; poi `connect()`;
- `execute()` con la query come stringa: esecuzione immediata (il server compila ed esegue subito); in caso di successo restituisce il risultato, in una variabile di tipo cursor, altrimenti solleva un'eccezione;
- transazioni: le connessioni sono in **autocommit** (commit automatico dopo ogni istruzione riuscita); `begin()` avvia una transazione e disabilita l'autocommit, poi `commit()` o `rollback()` espliciti; con il costrutto `with` SQLAlchemy fa commit in caso di successo e rollback (con eccezione) in caso di errore;
- `close()` chiude il collegamento e rilascia le risorse.

## Formule chiave
Dalle slide:
```python
from sqlalchemy import create_engine
engine = create_engine(f"{dialect}://{username}:{password}@{host}/{dbname}")
conn = engine.connect()
with conn.begin():
    ...  # istruzioni SQL eseguite in una transazione
```

## Intuizione
L'autocommit va bene per istruzioni singole; quando più istruzioni devono riuscire o fallire insieme (le due UPDATE di un bonifico) serve una transazione esplicita, e il blocco `with` garantisce che finisca sempre con commit o rollback.

## Come si usa
Lo script dell'homework usa invece `mysql.connector` con tre funzioni: connessione (`mysql.connector.connect(host=..., user=..., passwd=..., database=...)` dentro `try/except Error`), esecuzione di comandi (`cursor.execute(query)` seguito da `connection.commit()`) e lettura (`cursor.execute(query)` e `cursor.fetchall()`); i risultati diventano un DataFrame pandas per i grafici Streamlit (`HW base di dati/home.py`). Le query sono costruite con f-string a partire dagli input dell'utente.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/applicazioni_web.pdf` (pp. 27-35; codice letto sulle immagini di pp. 29 e 34); `triennale/ANNO 3/base di dati/HW base di dati/home.py` (script dell'homework, solo come esempio di codice).

## Prerequisiti
- [[Linguaggio SQL]]: le istruzioni eseguite sono SQL
- [[Transazione]]: commit e rollback dall'applicazione

## Porta a
- [[Streamlit]]: interfaccia web sopra le interrogazioni

## Collegati
- [[Object-Relational Mapping]]: alternativa che nasconde l'SQL
- [[Gestione delle eccezioni]]: errori di connessione ed esecuzione gestiti con try/except
- [[Protocollo HTTP]]: il backend interroga il database per rispondere alle richieste
