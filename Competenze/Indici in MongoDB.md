---
tipo: competenza
area: informatica
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [MongoDB indexes, createIndex, ensureIndex, single field index, compound index, indice composto, multikey index, indice geospaziale, 2dsphere, 2d index, $near, $geoWithin, text index, indice testuale, hashed index]
tags: [competenza, area/informatica]
---

# Indici in MongoDB

> Strutture dati che memorizzano in forma ordinata i valori di uno o più campi di una collezione, per rendere efficienti uguaglianze, interrogazioni per intervallo, ordinamenti e ricerche geospaziali o testuali.

## Definizione / enunciato
Un indice memorizza una piccola parte dei dati della collezione in forma facile da attraversare: i valori ordinati di un campo o di un insieme di campi. Tipi: **single field**, **compound**, **multikey**, **geospaziali**, **testuali**, **hashed**.
Creazione: `db.collection.createIndex(<index keys>, <options>)` (prima della versione 3.0 `ensureIndex()`); opzioni come `name`, `unique` (rifiuta documenti con chiave d'indice duplicata), `background`, `dropDups`.

## Formule chiave
- single field, crescente o decrescente: `db.orders.createIndex({orderDate: 1})`
- compound: `db.orders.createIndex({orderDate: 1, zipcode: -1})`
- geospaziale: `db.places.createIndex({location: "2dsphere"})`, con operatori `$geoIntersects`, `$geoWithin`, `$near`, `$nearSphere` e lo stadio di aggregazione `$near`
- testuale: `db.reviews.createIndex({comment: "text"})`; con il wildcard `{"$**": "text"}` si indicizza ogni campo che contiene stringhe

## Intuizione
I dati geospaziali si memorizzano come oggetti GeoJSON (`{type: "Point", coordinates: [-73.856, 40.848]}`) o come coppie di coordinate legacy. L'indice `2dsphere` calcola geometrie su una sfera simile alla Terra; `2d` tratta punti su un piano. Gli indici testuali memorizzano solo le radici delle parole, senza stopword né suffissi.

## Come si usa
Esempio delle slide: trovare i luoghi entro 5000 metri dal punto `[-73.96, 40.78]`, ordinati dal più vicino al più lontano:
`db.places.find({location: {$near: {$geometry: {type: "Point", coordinates: [-73.96, 40.78]}, $maxDistance: 5000}}})`.

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/MongoDB-2021-06-01.pdf` (pp. 73-83).

## Prerequisiti
- [[Query find in MongoDB]]: gli indici accelerano le interrogazioni find
- [[Modello documentale]]: campi e documenti annidati da indicizzare

## Porta a
- Nessuno.

## Collegati
- [[B+-tree]]: indice ordinato per intervalli e ordinamenti nei DBMS relazionali
- [[Indice hash]]: analogo degli hashed index
- [[Preprocessing dei documenti]]: l'indice testuale lavora su radici senza stopword
