---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["CRUD", "C.R.U.D.", "insertOne", "insertMany", "deleteMany", "createCollection", "dropDatabase", "shell di MongoDB", "MongoDB Compass", "updateOne", "updateMany", "$set", "$currentDate"]
tags: [competenza, area/informatica]
---

# Operazioni CRUD in MongoDB

> Comandi della shell di MongoDB per gestire database e collezioni e per creare, leggere, aggiornare e cancellare documenti.

## Definizione / enunciato
**Database e collezioni**:
- `show databases`, `use <database-name>`, `db.dropDatabase()`;
- una collezione si crea implicitamente al primo riferimento, oppure con `db.createCollection(<nome>, <opzioni>)` (opzioni su dimensione, indicizzazione, *capped collection*, validazione);
- `show collections`, `db.<collezione>.drop()`.

**C.R.U.D.**: Create, Read, Update, Delete.
- **Create**: `insertOne({...})` inserisce un documento (coppie campo:valore, anche array e documenti annidati); `insertMany([...])` inserisce una lista di documenti con un solo comando.
- **Delete**: la cancellazione di dati corrisponde alla cancellazione dei documenti; condizionata e multipla con `deleteMany(<condizione>)`; `deleteMany({})` svuota la collezione.

Le slide del corso elencano anche Read e Update ma ne mostrano la sintassi solo per Create e Delete ("Create and delete operations (1)").

## Formule chiave
Corrispondenze con SQL dalle slide (solo per la cancellazione); l'inserimento è `db.people.insertOne({user_id: "abc123", age: 55, status: "A"})`:

| SQL | MongoDB |
|---|---|
| `DELETE FROM people WHERE status = "D"` | `db.people.deleteMany({ status: "D" })` |
| `DELETE FROM people` | `db.people.deleteMany({})` |

## Intuizione
La condizione di una cancellazione è essa stessa un documento: i campi elencati devono coincidere. Non serve definire uno schema prima dell'inserimento: due documenti della stessa collezione possono avere campi diversi (`status` in uno, `favorite_colors` nell'altro, come nell'esempio di `insertMany`).

## Come si usa
**MongoDB Compass** è la GUI: si collega a istanze locali o remote, mostra i documenti in lista o tabella, analizza i campi (anche geospaziali), costruisce le query visivamente con autocompletamento, analizza le prestazioni delle query, valida i dati con vincoli e costruisce pipeline di aggregazione.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/10 - 02-MongoDB-intro-GUI.pdf` (pp. 6-23 comandi e CRUD, pp. 24-32 Compass). Read e Update non hanno slide di sintassi in questo mazzo.
- **Business intelligence per big data** (magistrale): la versione 2021 del mazzo copre anche **Read** (vedi [[Query find in MongoDB]]) e **Update**: `db.collection.updateOne(<filter>, <update>, <options>)` e `updateMany(...)`; esempio `db.inventory.updateMany({"qty": {$lt: 50}}, {$set: {"size.uom": "in", status: "P"}, $currentDate: {lastModified: true}})`; corrispondenza `UPDATE people SET status = "C" WHERE age > 25` ↔ `db.people.updateMany({age: {$gt: 25}}, {$set: {status: "C"}})`. Inserimento: `_id` aggiunto automaticamente se assente, documenti con array e documenti annidati. Fonti: `magistrale/Business intelligence per big data/MongoDB-2021-06-01.pdf` (pp. 84-108).

## Prerequisiti
- [[Modello documentale]]: operazioni sui documenti

## Porta a
- [[Aggregation pipeline]]: interrogazioni complesse sulle collezioni

## Collegati
- Nessuno.
