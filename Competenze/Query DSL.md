---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["Domain Specific Language", "match query", "bool query", "compound query", "filter vs query", "filtro", "_score", "should must must_not"]
tags: [competenza, area/informatica]
---

# Query DSL

> Linguaggio di interrogazione di ElasticSearch: query in JSON nel corpo di una richiesta HTTP, con match query, compound query bool e distinzione tra filtri e query.

## Definizione / enunciato
Le query sono espresse in **Query DSL** (Domain Specific Language) e inviate come JSON nel corpo di una richiesta HTTP. Il campo di primo livello è sempre `query`; il tipo di query è specificato un livello sotto. L'indice (o più indici, `rooms,students`) si indica nell'URI. Per default si restituiscono i 10 risultati più rilevanti.

**Filter vs query**:
- un **filtro** si usa su campi a valori esatti e dà una risposta booleana (corrisponde / non corrisponde); è più efficiente e serve a ridurre i documenti che una query deve esaminare;
- una **query** si usa tipicamente per il full-text e chiede anche "quanto bene corrisponde?": calcola la rilevanza e assegna un `_score` per ordinare i risultati.

Consiglio delle slide: clausole query per il full-text o per ogni condizione che deve influire sullo score, clausole filter per tutto il resto.

**Match query**: vale per campi full-text (analizza la query, restituisce uno `_score`) e per campi esatti (cerca il valore esatto, `_score` = 1). In una bool query su campi full-text combina gli score delle clausole must e should soddisfatte.

## Formule chiave
```json
POST /_search  {}                      // query vuota: tutti i documenti

POST departments/_search
{ "query": {
    "bool": {
      "should": [ {"match": {"name": "John"}}, {"match": {"name": "Mark"}} ],
      "minimum_should_match": 1,
      "must":     { "match": {"title": "developer"} },
      "must_not": { "match": {"lastname": "Smith"} } } } }
```
`should` = OR, `must` = AND, `must_not` = NOT.

## Intuizione
La bool query è l'analogo della clausola WHERE con AND/OR/NOT, ma ogni clausola contribuisce anche alla rilevanza; il filtro è il WHERE "puro", senza punteggio.

## Come si usa
Esempio delle slide: nell'indice departments, i documenti con nome John o Mark (almeno uno), titolo developer e cognome diverso da Smith. Le versioni precedenti includevano i *tipi* di indice, deprecati dalla 7.0.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 15-16, 24-33).

## Prerequisiti
- [[ElasticSearch]]: linguaggio di interrogazione

## Porta a
- Nessuno.

## Collegati
- [[TF-IDF]]: le query calcolano lo score
