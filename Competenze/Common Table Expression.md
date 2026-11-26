---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [CTE, clausola WITH, WITH RECURSIVE, CTE ricorsiva, CTE referenziate, recursive CTE]
tags: [competenza, area/informatica]
---

# Common Table Expression

> Tabella temporanea definita con la clausola WITH prima della query principale; può riferirsi a CTE precedenti e, con WITH RECURSIVE, a sé stessa.

## Definizione / enunciato
La CTE ha la struttura di una SELECT, è definita con **WITH** e si referenzia come una normale tabella. Come la tabella derivata serve per più livelli di aggregazione e per sostituire la correlazione. Ammette riferimenti a CTE definite prima nella stessa WITH e riferimenti **ricorsivi**.

Si preferisce alla tabella derivata quando la stessa tabella serve più volte nella query, quando lo stesso calcolo si ripete in più parti, o per rendere leggibile una query complessa.

## Formule chiave
```sql
WITH cte_1 [(campo_A, ...)] AS (CTE query 1)
     {, cte_X AS (CTE query X)}
SELECT campo_A, campo_B, ...
FROM cte_1;

WITH RECURSIVE cte_1 AS (
  CTE query 1        -- query iniziale
  UNION ALL
  CTE query 2        -- query ricorsiva, usa cte_1
)
SELECT * FROM cte_1;
```

## Intuizione
Ogni CTE è un passo con un nome: si leggono dall'alto verso il basso come una catena di tabelle intermedie. La versione ricorsiva parte da un insieme iniziale e aggiunge, a ogni giro, le righe collegate a quelle già trovate, finché non ne trova più.

## Come si usa
Aggregati con granularità diversa, su `PILOTI(CodP, Nome, Cognome, Compagnia, Salario)`: compagnie il cui salario medio supera la media globale.
```sql
WITH salarioMedioCompagnia AS
  (SELECT Compagnia, AVG(Salario) AS AvgSalComp
   FROM PILOTI GROUP BY Compagnia),
mediaSalario AS
  (SELECT AVG(Salario) AS MediaSal FROM PILOTI)
SELECT Compagnia
FROM salarioMedioCompagnia, mediaSalario
WHERE salarioMedioCompagnia.AvgSalComp > mediaSalario.MediaSal;
```
Ricorsione su `IMPIEGATI(CodI, Nome, Cognome, BossID*)`: boss e livello di ogni impiegato.
```sql
WITH RECURSIVE gerarchia AS (
  SELECT CodI, Nome, Cognome, BossID, 0 AS livello
  FROM IMPIEGATI WHERE BossID IS NULL
  UNION ALL
  SELECT I.CodI, I.Nome, I.Cognome, I.BossID, livello +1
  FROM IMPIEGATI I, gerarchia G
  WHERE I.BossID = G.CodI)
SELECT G.Nome, G.Cognome, I.Nome AS NomeBoss,
       I.Cognome AS CognomeBoss, livello
FROM gerarchia G LEFT JOIN IMPIEGATI I ON G.BossID= I.CodI
ORDER BY livello;
```

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/4-SQL_query_avanzate.pdf` (pp. 13-29; CTE referenziate su CITTA, AUTISTA, CORSA_GIORNALIERA a pp. 23-26).

## Prerequisiti
- [[Tabella derivata]]: stessa idea, scritta prima della query

## Porta a
- Nessuno.

## Collegati
- [[Operatori insiemistici relazionali]]: UNION ALL unisce passo iniziale e passo ricorsivo
