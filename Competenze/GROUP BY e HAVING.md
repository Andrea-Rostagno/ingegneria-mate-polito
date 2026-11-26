---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [GROUP BY, HAVING, raggruppamento, clausola di raggruppamento, condizioni sui gruppi, selezione sui gruppi]
tags: [competenza, area/informatica]
---

# GROUP BY e HAVING

> La GROUP BY suddivide le righe in gruppi con gli stessi valori degli attributi di raggruppamento e calcola gli aggregati per gruppo; la HAVING filtra i gruppi.

## Definizione / enunciato
```sql
GROUP BY ElencoAttributiDiRaggruppamento
HAVING CondizioniDiGruppo
```
- L'ordine degli attributi di raggruppamento è ininfluente.
- Nella `SELECT` possono comparire **solo** attributi della GROUP BY e funzioni aggregate; gli attributi univocamente determinati da quelli già nella GROUP BY si possono aggiungere senza alterare il risultato.
- La `WHERE` non può esprimere condizioni sui gruppi: si usa la **HAVING**, che ammette condizioni solo su funzioni aggregate.

## Formule chiave
Le slide dicono che gli aggregati si valutano dopo tutti i predicati della WHERE e che le condizioni sui gruppi vanno nella HAVING; riassunto nostro: FROM → WHERE (filtro sulle tuple) → GROUP BY → HAVING (filtro sui gruppi) → SELECT.
```sql
SELECT CodP, SUM(Qta)
FROM FP
GROUP BY CodP
HAVING SUM(Qta)>=600;
```

## Intuizione
WHERE e HAVING filtrano cose diverse: la WHERE scarta righe prima di formare i gruppi, la HAVING scarta gruppi interi dopo aver calcolato gli aggregati. Per questo "prodotti forniti da fornitori di Milano" va nella WHERE, "prodotti con almeno 600 pezzi in totale" nella HAVING.

## Come si usa
Esempi delle slide:
```sql
-- per ogni prodotto, quantità fornita da fornitori di Milano
SELECT CodP, SUM(Qta)
FROM FP, F
WHERE FP.CodF=F.CodF AND Sede='Milano'
GROUP BY CodP;          -- i prodotti senza forniture non compaiono

-- codice e nome con la quantità totale
SELECT P.CodP, NomeP, SUM(Qta)
FROM P, FP
WHERE P.CodP=FP.CodP
GROUP BY P.CodP, NomeP; -- NomeP è determinato da CodP

-- prodotti rossi forniti da più di un fornitore
SELECT FP.CodP
FROM FP, P
WHERE FP.CodP=P.CodP AND Colore='Rosso'
GROUP BY FP.CodP
HAVING COUNT(*)>1;
```
Nello script dell'homework: numero di lezioni per giorno con `GROUP BY programma.Giorno`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 73-87).

## Prerequisiti
- [[Funzioni aggregate]]: si calcolano per gruppo

## Porta a
- [[Divisione relazionale]]: in SQL si realizza con GROUP BY e HAVING COUNT
- [[Tabella derivata]]: aggregati a due livelli
- [[ROLLUP e CUBE]]: estensioni della GROUP BY per i totali parziali

## Collegati
- [[DataFrame di pandas]]: groupby di pandas fa la stessa operazione in Python
