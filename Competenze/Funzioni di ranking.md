---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["RANK", "DENSE_RANK", "ROW_NUMBER", "ranking functions", "top-N"]
tags: [competenza, area/informatica]
---

# Funzioni di ranking

> Funzioni OLAP che calcolano la posizione di una riga nell'ordinamento dentro una partizione: RANK, DENSE_RANK, ROW_NUMBER, CUME_DIST, NTILE.

## Definizione / enunciato
Si usano con `OVER (PARTITION BY ... ORDER BY ...)`; la finestra è l'intera partizione.
- **RANK()**: posizione, lasciando "buchi" dopo i pari merito (due primi, poi il terzo).
- **DENSE_RANK()**: posizione senza buchi (due primi, poi il secondo).
- **ROW_NUMBER**: numero progressivo per ogni riga della partizione.
- **CUME_DIST**: peso tra 0 e 1 per ogni riga.
- **NTILE(n)**: divide ogni partizione in $n$ sottogruppi (se possibile) con lo stesso numero di righe e assegna a ciascuno un identificativo.

## Formule chiave
Per una partizione di $N$ righe:
$$\text{CUME\_DIST}(x)=\frac{\#\{\text{valori che precedono o sono uguali al valore di } x \text{ sul campo di ordinamento}\}}{N}.$$

```sql
SELECT COD_A, SUM(Q) AS QTot,
       RANK() OVER (ORDER BY SUM(Q)) AS RankVendite
FROM FAP GROUP BY COD_A;
```
**Top N**: si mette la query con il ranking come sottointerrogazione nella FROM e si filtra `WHERE RankVendite <= 2`.

## Intuizione
RANK conta quante righe stanno strettamente davanti (+1), DENSE_RANK conta quanti *valori* distinti stanno davanti (+1): differiscono solo dopo i pari merito.

## Come si usa
Esempio delle slide (verificato sulle immagini): quantità totali A2 = 300, A5 = 1100, A4 = 1300, A6 = 1300, A1 = 1900, A3 = 4500. RANK: 1, 2, 3, 3, 5, 6. DENSE_RANK: 1, 2, 3, 3, 4, 5. Nel mese di dicembre, ordinando per importo decrescente, Torino (150) è primo e Milano (140) secondo; l'ORDER BY finale (per città) può differire da quello della finestra. CUME_DIST nella partizione "Vite" (10 righe) dà valori come 1/10, 2/10, 6/10, ... fino a 10/10.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/04 - DSTBD_4-DWquery-IT.pdf` (pp. 59-65); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/08 - DSTBD_DW-Oracle.pdf` (pp. 10-34: rank e dense rank pp. 10-14, doppio ranking pp. 15-17, top N pp. 18-21, ROW_NUMBER pp. 22-25, CUME_DIST pp. 26-30, NTILE pp. 31-34).
- **Business intelligence per big data** (magistrale): RANK e ordinamento del risultato nel mazzo sulle interrogazioni; nel mazzo Oracle ranking, dense ranking, doppio ranking, selezione top N, ROW_NUMBER, CUME_DIST (in una partizione di $N$ righe, numero di valori che precedono o eguagliano quello della riga diviso $N$; esempio degli articoli per tipo ordinati per peso) e NTILE. Fonti: `magistrale/Business intelligence per big data/10-DWquery-ITA_BI.pdf` (pp. 59-65); `magistrale/Business intelligence per big data/12-DW-Oracle.pdf` (pp. 9-34).

## Prerequisiti
- [[Funzioni OLAP con finestra]]: stessa clausola OVER

## Porta a
- Nessuno.

## Collegati
- [[ROLLUP e CUBE]]: ranking su risultati raggruppati
