---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [query JSON, JSON in SQL, JavaScript Object Notation, JSON_EXTRACT, JSON_CONTAINS, JSON_SET, JSON_INSERT, JSON_REMOVE, JSON_OBJECT, JSON_ARRAY, JSON_ARRAY_APPEND, path JSON, operatore -> di MySQL]
tags: [competenza, area/informatica]
---

# Funzioni JSON in SQL

> Funzioni (qui di MySQL) per creare, cercare e modificare documenti JSON memorizzati in una colonna di una tabella relazionale.

## Definizione / enunciato
JSON (JavaScript Object Notation) è un formato per lo scambio di dati nelle applicazioni client-server: oggetti con coppie chiave-valore, array, oggetti annidati (embedded). Le funzioni dipendono dal DBMS e servono a **creare** dati JSON, **cercare** all'interno del JSON in base a un path e **modificare** campi.

Notazione dei **path**: `$` radice del documento; dot notation per i campi (`$.a`); `[i]` elemento $i$-esimo di un array; wildcard `*` o `**` (`$.*`).

## Formule chiave
| funzione | effetto |
|---|---|
| `JSON_ARRAY(...)`, `JSON_OBJECT(key, val, ...)` | crea un array o un oggetto |
| `JSON_CONTAINS(target, candidate[, path])` | 1/0 se candidate è contenuto in target (nel path); NULL se un argomento è NULL o il path non esiste |
| `JSON_EXTRACT(json_doc, path, ...)` | dati nei path indicati; alternativa: operatore `->` |
| `JSON_ARRAY_APPEND(doc, path, val, ...)` | appende in fondo agli array |
| `JSON_INSERT(doc, path, val, ...)` | inserisce valori |
| `JSON_SET(doc, path, val, ...)` | inserisce o aggiorna |
| `JSON_REMOVE(doc, path, ...)` | rimuove il path |

## Intuizione
È un ponte tra modello relazionale e documentale: la colonna JSON resta flessibile come un documento, ma la si interroga dentro una normale SELECT, anche nella WHERE e nella ORDER BY.

## Come si usa
```sql
SELECT JSON_OBJECT('id', 87, 'name', 'carrot');   -- {"id": 87, "name": "carrot"}
SELECT JSON_CONTAINS('{"a": 1, "b": 2, "c": {"d": 4}}', '1', '$.a');  -- 1
SELECT c, c->"$.id"
FROM jemp
WHERE c->"$.id" > 1
ORDER BY c->"$.name";
SELECT JSON_REMOVE('["a", ["b", "c"], "d"]', '$[1]');  -- ["a", "d"]
```

## Nei corsi
- **Base di dati** (triennale): sintassi MySQL. Fonti: `triennale/ANNO 3/base di dati/4-SQL_query_avanzate.pdf` (pp. 35-41); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (p. 7, dominio JSON).

## Prerequisiti
- [[Definizione delle tabelle in SQL]]: colonna di tipo JSON

## Porta a
- Nessuno.

## Collegati
- [[Modello documentale]]: documenti JSON come in MongoDB
- [[Query spaziali in SQL]]: altra estensione dei tipi di dato
