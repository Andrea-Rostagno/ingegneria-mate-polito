---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["Elasticsearch", "Elastic", "Lucene", "motore di ricerca", "indice ElasticSearch", "mapping", "sharding", "shard", "cluster ElasticSearch"]
tags: [competenza, area/informatica]
---

# ElasticSearch

> Motore di ricerca e analisi distribuito e in tempo reale, orientato ai documenti JSON e costruito su Lucene, che scala orizzontalmente con lo sharding.

## Definizione / enunciato
Ricerca in sintesi: prendere una stringa di query, confrontarla con una collezione di documenti (full text, sinonimi), calcolare i risultati rilevanti assegnando uno score, mostrare la lista ordinata. ElasticSearch offre ricerca full-text (snippet evidenziati, search as you type, did-you-mean), ricerca strutturata e analytics su dati misti; usa documenti JSON con date, coordinate, testo, oggetti e array; è costruito sulla libreria **Lucene**; ha API RESTful; registra le modifiche in transaction log replicati su più nodi.

Parallelo con il relazionale:

| ElasticSearch | cluster | index | document | field |
|---|---|---|---|---|
| SQL | database | table | row | column |

Un campo può contenere più valori dello stesso tipo; i documenti non seguono uno schema rigido. Il termine **index** è sovraccarico: (nome) collezione di documenti; (verbo) inserire un documento, sostituendolo se esiste; **indice invertito**, struttura che accelera la ricerca. Un documento è l'oggetto radice serializzato in JSON, identificato dalla coppia *(index, id)*; l'id può essere fornito o generato.

Concetti chiave: **mapping** (come si interpretano i dati di ogni campo; ES lo genera dinamicamente "indovinando" i tipi), **analysis**, **Query DSL**.

## Formule chiave
Modifica dei dati (slide):
```
PUT /index_name/<id>        { documento JSON }      -- insert
PUT index_name/123/_update  { "color": "red" }      -- update
DELETE index_name/id                                -- delete
```
I documenti sono **immutabili**: l'update recupera il vecchio documento, ne modifica una copia, cancella il vecchio e indicizza la copia; il vecchio è rimosso in background.

## Intuizione
**Sharding**: un indice è diviso in partizioni (*shard*), ciascuna un indice Lucene; ogni documento sta in un solo shard; i dati scritti finiscono ogni secondo in un nuovo segmento immutabile e diventano interrogabili. Gli shard sono distribuiti sui nodi del cluster e possono essere replicati: si scalano volumi (1 TB anche senza un nodo con quella capacità), si parallelizzano le query e si aumenta la disponibilità.

## Come si usa
Esempi d'uso nelle slide: GitHub (oltre 130 miliardi di righe di codice), Wikipedia (full-text con snippet), StackOverflow (full-text e geolocalizzazione). Nella polyglot persistence è il database scelto per la ricerca testuale.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 2-16 introduzione e rappresentazione, pp. 35-38 modifiche, pp. 61-64 sharding).

## Prerequisiti
- Nessuno.

## Porta a
- [[Indice invertito]]: struttura di indicizzazione
- [[Query DSL]]: linguaggio di interrogazione
- [[Controllo ottimistico della concorrenza]]: gestione delle modifiche concorrenti

## Collegati
- [[Modello documentale]]: documenti JSON
