---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["GROUP BY ROLLUP", "GROUP BY CUBE", "GROUPING SETS", "funzione GROUPING", "estensioni della GROUP BY", "calcolo del cubo"]
tags: [competenza, area/informatica]
---

# ROLLUP e CUBE

> Estensioni SQL-99 della GROUP BY che calcolano più raggruppamenti in una sola interrogazione: ROLLUP, CUBE e GROUPING SETS.

## Definizione / enunciato
Gli spreadsheet multidimensionali vogliono più totali parziali "in un colpo solo" (per mese e città, per mese, per città), evitando letture multiple e ordinamenti ridondanti. SQL-99 estende la `GROUP BY` con:
- **ROLLUP**$(A_1,\dots,A_n)$: aggregazioni su tutti i gruppi ottenuti togliendo *in ordine* una colonna per volta. L'ordine delle colonne determina quali aggregati si calcolano.
- **CUBE**$(A_1,\dots,A_n)$: aggregazioni su *tutte* le combinazioni delle colonne; l'ordine è ininfluente.
- **GROUPING SETS**: elenco esplicito dei raggruppamenti richiesti; `()` indica il totale generale.

I "superaggregati" compaiono nel risultato con **NULL** nelle colonne aggregate.

## Formule chiave
```sql
SELECT Città, Mese, Pkey, SUM(Importo) AS TotVendite
FROM Tempo T, Supermercato S, Vendite V
WHERE T.Tkey = V.Tkey AND S.Skey = V.Skey AND Anno = 2000
GROUP BY ROLLUP (Città, Mese, Pkey);      -- oppure CUBE (Città, Mese, Pkey)
-- GROUP BY GROUPING SETS (Mese, (Città, Mese, Pkey))
```

## Intuizione
Calcolo efficiente del cubo: si sfruttano le proprietà distributive (min, max, sum, count) e algebriche (avg, memorizzando anche il conteggio) per ricavare un group by da un altro più dettagliato già calcolato; un rollup richiede un solo ordinamento; il cubo è una combinazione di più rollup in ordine opportuno e riusa ordinamenti già fatti (l'ordinamento su (A,B) aiuta a ordinare (A,C)).

## Come si usa
Si sceglie GROUPING SETS quando servono solo alcuni raggruppamenti (es. "per mese" e "per mese, città, prodotto"): un rollup calcolerebbe aggregati in più. I raggruppamenti calcolati sono nodi del reticolo multidimensionale, lo stesso usato per scegliere le viste materializzate.
Conteggio (passaggio nostro, dalle liste delle slide): per (Città, Mese, Pkey) il rollup calcola {C,M,P}, {C,M}, {C}, {}, il cube elenca 8 aggregazioni; in generale ROLLUP su $n$ colonne dà $n+1$ raggruppamenti e CUBE $2^n$.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/04 - DSTBD_4-DWquery-IT.pdf` (pp. 66-76); citate anche in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/08 - DSTBD_DW-Oracle.pdf` (p. 3).
- **Business intelligence per big data** (magistrale): stesse slide sulle estensioni della GROUP BY (rollup, cube, calcolo del cubo, grouping set con esempi). Fonti: `magistrale/Business intelligence per big data/10-DWquery-ITA_BI.pdf` (pp. 66-76).

## Prerequisiti
- [[Operatori OLAP]]: roll-up e cubo espressi in SQL
- [[GROUP BY e HAVING]]: ROLLUP e CUBE estendono la GROUP BY di base

## Porta a
- [[Reticolo multidimensionale]]: il cubo calcola tutti i group by del reticolo

## Collegati
- [[Funzioni di ranking]]: ranking su risultati raggruppati
- [[Funzioni OLAP con finestra]]: estensioni SQL per l'analisi
