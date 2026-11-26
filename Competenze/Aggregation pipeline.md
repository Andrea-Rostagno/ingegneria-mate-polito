---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["pipeline di aggregazione", "stadi di aggregazione", "$group", "$match", "$sum", "$avg"]
tags: [competenza, area/informatica]
---

# Aggregation pipeline

> Sequenza di stadi di aggregazione di MongoDB ($group, $match, ...) in cui l'output di uno stadio è l'input del successivo: l'analogo di GROUP BY e HAVING.

## Definizione / enunciato
In MongoDB Compass si costruisce una **pipeline** di più stadi di aggregazione, definendo per ogni operatore il filtro e gli attributi di aggregazione. Nello stadio **`$group`**:
- `_id` corrisponde al parametro della **GROUP BY** di SQL (es. `"$vendor"`): un gruppo per ogni valore;
- gli altri campi contengono gli attributi calcolati per ogni gruppo con accumulatori come `$sum` e `$avg`.

Lo stadio **`$match`** applica una condizione; se segue un `$group` può usare i campi creati nello stadio precedente.

## Formule chiave
Pipeline delle slide (verificata sulle immagini delle pp. 34-36):
```javascript
// 1° stadio: raggruppamento per vendor
{ $group: { _id: "$vendor",
            total:    { $sum: 1 },
            avg_fuel: { $avg: "$fuel" } } }
// 2° stadio: condizione sui campi creati
{ $match: { avg_fuel: { $gt: 63 }, total: { $gt: 35000 } } }
```

## Intuizione
`$sum: 1` conta i documenti del gruppo come `COUNT(*)`; un `$match` dopo il `$group` filtra i gruppi come `HAVING`, mentre un `$match` prima filtrerebbe i documenti come `WHERE`.
Equivalente SQL (traduzione nostra): `SELECT vendor, COUNT(*) AS total, AVG(fuel) AS avg_fuel FROM ... GROUP BY vendor HAVING AVG(fuel) > 63 AND COUNT(*) > 35000`.

## Come si usa
Nell'esempio delle slide, dopo il `$group` ci sono i gruppi "car2go" (total 48423, avg_fuel circa 64,88) ed "enjoy" (total 30134, avg_fuel circa 61,03); dopo il `$match` resta solo "car2go". È lo stesso schema delle reduce di MapReduce: raggruppa per chiave e aggrega i valori.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/10 - 02-MongoDB-intro-GUI.pdf` (pp. 33-36, screenshot di MongoDB Compass).
- **Business intelligence per big data** (magistrale): aggregation framework, raggruppamenti tipo GROUP BY e costruzione delle pipeline in MongoDB Compass (esempio: primo stadio raggruppa per vendor, secondo stadio filtra sui campi creati, `avg_fuel` e `total`). Fonti: `magistrale/Business intelligence per big data/MongoDB-2021-06-01.pdf` (pp. 42-72).

## Prerequisiti
- [[Operazioni CRUD in MongoDB]]: interrogazioni complesse sulle collezioni

## Porta a
- Nessuno.

## Collegati
- [[MapReduce]]: elaborazione aggregata dei documenti
