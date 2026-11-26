---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [SELECT, SELECT FROM WHERE, interrogazione SQL, DISTINCT, LIKE, ORDER BY, alias di tabella, AS, join in SQL, clausola WHERE]
tags: [competenza, area/informatica]
---

# Istruzione SELECT

> Istruzione SQL di interrogazione: dalle tabelle della FROM, filtra le righe con la WHERE, raggruppa, e restituisce le colonne indicate nella SELECT, eventualmente ordinate.

## Definizione / enunciato
```sql
SELECT [DISTINCT] ElencoAttributiDaVisualizzare
FROM ElencoTabelleDaUtilizzare
[WHERE CondizioniDiTupla]
[GROUP BY ElencoAttributiDiRaggruppamento]
[HAVING CondizioniSuAggregati]
[ORDER BY ElencoAttributiDiOrdinamento];
```
- **SELECT**: colonne (o `*`), espressioni con colonna temporanea nominata da `AS` (`Taglia-14 AS TagliaUSA`); `DISTINCT` elimina i duplicati, che altrimenti restano.
- **WHERE**: espressione booleana (AND, OR, NOT) di predicati valutati su ogni tupla: confronti, ricerca testuale, test su NULL.
- **ORDER BY** `Attributo [ASC|DESC] {, ...}`: crescente per default.

## Formule chiave
Ricerca testuale: `NomeAttributo LIKE Stringa`, con `_` = un carattere qualsiasi obbligatorio e `%` = sequenza qualsiasi anche vuota.
```sql
NomeP LIKE 'C%'          -- inizia per C
CodF LIKE '_2'           -- due caratteri, il secondo è 2
Magazzino NOT LIKE '_e%' -- niente 'e' in seconda posizione
```

## Intuizione
Lettura nostra, coerente con le traduzioni in algebra delle slide: la FROM corrisponde al prodotto delle tabelle, la WHERE alla selezione, la SELECT alla proiezione. Una richiesta impossibile resta impossibile: "fornitori con sede a Milano **e** a Torino" non ha risultato perché ogni fornitore ha una sola sede (serve OR, non AND).

## Come si usa
Join tra più tabelle (con $N$ tabelle almeno $N-1$ condizioni di join):
```sql
SELECT NomeF
FROM F, FP, P
WHERE F.CodF=FP.CodF AND P.CodP=FP.CodP
  AND Colore='Rosso';
```
Due copie della stessa tabella con alias: `FROM F AS FX, F AS FY WHERE FX.Sede=FY.Sede AND FX.CodF < FY.CodF`. Ordinamento su più chiavi: `ORDER BY NomeP, Taglia DESC`. Attenzione ai NULL: `WHERE Taglia > 44` esclude le taglie nulle.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 14-38 SELECT, WHERE, LIKE, NULL, ORDER BY; pp. 39-59 join).

## Prerequisiti
- [[Linguaggio SQL]]: istruzione DML principale
- [[Selezione e proiezione]]: WHERE e lista SELECT
- [[Join relazionale]]: join in FROM e WHERE

## Porta a
- [[Funzioni aggregate]]: calcoli su insiemi di righe
- [[Interrogazioni nidificate]]: SELECT dentro WHERE, HAVING e FROM
- [[Vista (SQL)]]: una SELECT salvata come tabella virtuale

## Collegati
- [[Valore nullo]]: IS NULL e confronti con NULL
- [[Outer join]]: sintassi JOIN ... ON nella FROM
