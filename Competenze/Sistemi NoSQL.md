---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["NoSQL", "database non relazionali", "schema-less", "key-value database", "column-oriented database", "graph database", "document database", "polyglot persistence", "Hadoop", "Spark", "CouchDB"]
tags: [competenza, area/informatica]
---

# Sistemi NoSQL

> Basi di dati non relazionali, senza schema fisso e senza join, progettate per scalare orizzontalmente: key-value, a colonne, a grafo e a documenti.

## Definizione / enunciato
Il nome nasce nel 1998 (database di Carlo Strozzi senza interfaccia SQL) e si diffonde nel 2009 con l'hashtag #NoSQL di un evento sui database non relazionali. Caratteristiche: **schema-less** (niente tabelle, schema implicito), **niente join**, **scalabilità orizzontale**.

Confronto (slide 4-5):

| Relazionali | Non relazionali |
|---|---|
| tabelle, righe strutturate | storage specializzati (documenti, key-value, grafi, colonne) |
| schema predefinito, modifiche costose | schema dinamico, adatto a dati semi- o non strutturati |
| scalabilità verticale (hardware più potente) | scalabilità orizzontale (più server) |
| SQL, query complesse con join | linguaggi ad hoc, niente join |
| MySQL, Oracle, Postgres, SQL Server | MongoDB, BigTable, Redis, Cassandra, HBase, CouchDB |

**Tipi**:
- *key-value*: i più semplici, chiavi associate a valori senza struttura, velocissimi (Redis, Riak, Memcached);
- *column-oriented*: dati memorizzati per colonna, coppie valore→righe recuperate in parallelo; le righe si ricostruiscono dai valori (Cassandra, HBase, DynamoDB);
- *graph*: nodi e archi per dati a rete (Neo4J, OrientDB);
- *document*: chiavi associate a documenti autodescrittivi, annidati ed eterogenei (MongoDB, CouchDB).

## Formule chiave
Nessuna formula.

## Intuizione
Si rinuncia a schema rigido, join e spesso alla consistenza forte per scalare aggiungendo macchine economiche: è la risposta tecnologica a volume, velocità e varietà dei big data.

## Come si usa
**Polyglot persistence**: un'applicazione può usare più database insieme (ricerca testuale con ElasticSearch, dati non relazionali in MongoDB, flussi IoT in Cassandra). Le slide presentano anche CouchDB (documenti JSON, interrogazione via MapReduce, replica incrementale con gestione dei conflitti, API HTTP RESTful) e l'ecosistema **Hadoop** (HDFS, YARN, MapReduce) con **Spark** (motore a DAG in memoria). Ricetta di progetto: il bonifico bancario in CouchDB non si fa con due update separati sui conti, ma salvando un documento *transazione* e calcolando il saldo con MapReduce.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/09 - Beyond-relational-databases-18-12.pdf` (pp. 2-13 caratteristiche e tipi, p. 57 polyglot persistence, pp. 58-67 Hadoop e Spark, pp. 68-75 ricetta del conto bancario).
- **Business intelligence per big data** (magistrale): mazzo "Beyond relational databases" (Apiletti), versione 2021: panorama iniziale (file system distribuiti GFS e HDFS, MapReduce, NoSQL, data warehouse, cloud, machine learning su larga scala; solo menzioni, senza slide dedicate a Hadoop o Spark), limiti del modello relazionale, nascita e caratteristiche del NoSQL, confronto, tipi key-value, a colonne, a grafo e a documenti. Fonti: `magistrale/Business intelligence per big data/Beyond-relational-databases-2021-06-01.pdf` (pp. 2-29).

## Prerequisiti
- Nessuno.

## Porta a
- [[MapReduce]]: elaborazione in CouchDB
- [[Replicazione master-slave]]: copie dei dati su più nodi
- [[Modello documentale]]: database a documenti

## Collegati
- [[Big data]]: volume e varietà oltre il modello relazionale
