---
tipo: competenza
area: informatica
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [find(), findOne, db.collection.find, interrogazioni in MongoDB, MongoDB query language, operatori di confronto MongoDB, $gt, $gte, $lt, $lte, $eq, $ne, $in, $nin, $or, proiezione in MongoDB, cursore MongoDB, cursor, sort(), count(), $lookup]
tags: [competenza, area/informatica]
---

# Query find in MongoDB

> Lettura dei documenti di una collezione con `find(condizioni, proiezione)`, operatori di confronto e logici, e metodi del cursore (`sort`, `count`, `forEach`): l'equivalente MongoDB di SELECT-FROM-WHERE-ORDER BY.

## Definizione / enunciato
`db.<collection>.find({<conditions>}, {<fields of interest>})` seleziona i documenti che soddisfano le condizioni e ne restituisce solo i campi d'interesse. Entrambi gli argomenti sono opzionali.
- **Condizioni**: documento `{campo1: <valore>, campo2: <valore>, ...}`; il valore può essere anche un'espressione regolare; i campi annidati si raggiungono con la notazione puntata (`"address.city": "Rome"`). Più campi nello stesso documento sono in AND; l'OR si scrive `$or: [ {...}, {...} ]`.
- **Proiezione**: `1/true` include il campo, `0/false` lo esclude; il default è escluso, tranne `_id`, che si toglie con `_id: 0`.
- `findOne(...)` restituisce il primo documento secondo l'ordine naturale (ordine su disco).
- Non esiste un operatore di join (salvo `$lookup`): le relazioni si esprimono con riferimenti `ObjectID` o `DBRef`, e un "join" si scrive come programma che itera sui documenti della prima collezione e interroga la seconda.

## Formule chiave
| SQL | MongoDB |
|---|---|
| `SELECT * FROM people` | `db.people.find()` |
| `SELECT user_id, status FROM people WHERE status = "A"` | `db.people.find({status: "A"}, {user_id: 1, status: 1, _id: 0})` |
| `WHERE age > 25 AND age <= 50` | `find({age: {$gt: 25, $lte: 50}})` |
| `WHERE status = "A" OR age = 50` | `find({$or: [{status: "A"}, {age: 50}]})` |
| `ORDER BY user_id DESC` | `.sort({user_id: -1})` |
| `SELECT COUNT(*) FROM people WHERE age > 30` | `db.people.count({age: {$gt: 30}})` |

Operatori di confronto: `$eq` (equivale a `{campo: valore}`), `$gt`, `$gte`, `$lt`, `$lte`, `$ne` (le slide scrivono anche `$neq`), `$in`, `$nin`.

## Intuizione
La condizione è essa stessa un documento con la forma dei documenti cercati: si interroga "per esempio". `find()` non restituisce i documenti ma un **cursore**, da iterare o da passare ad altre operazioni.

## Come si usa
Metodi del cursore: `sort()`, `count()`, `forEach()` (applica una funzione JavaScript a ogni documento, es. stampare il nome di chi ha `status="A"`), `limit()`, `max()`, `min()`, `pretty()`. In `sort({campo: 1|-1})` più coppie si applicano in ordine: a parità sul primo campo decide il secondo.

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/MongoDB-2021-06-01.pdf` (pp. 7-20 find e proiezione, pp. 21-22 assenza di join, pp. 23-33 operatori, pp. 34-41 cursore, sort e count).

## Prerequisiti
- [[Modello documentale]]: struttura dei documenti interrogati
- [[Operazioni CRUD in MongoDB]]: find è la R di CRUD

## Porta a
- [[Aggregation pipeline]]: interrogazioni con raggruppamenti, oltre find
- [[Indici in MongoDB]]: rendono efficienti uguaglianze, intervalli e ordinamenti

## Collegati
- [[Selezione e proiezione]]: corrispondenti operatori relazionali di WHERE e SELECT
