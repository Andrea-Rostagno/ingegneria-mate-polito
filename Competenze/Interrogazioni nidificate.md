---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [subquery, sottointerrogazione, query nidificata, interrogazione nidificata, operatore IN di SQL, operatore NOT IN, costruttore di tupla]
tags: [competenza, area/informatica]
---

# Interrogazioni nidificate

> Istruzione SELECT contenuta in un'altra interrogazione (nella WHERE, nella HAVING o nella FROM), per scomporre un problema complesso in sottoproblemi.

## Definizione / enunciato
Una SELECT interna si può usare:
- con un operatore di confronto (`=`, `<`, ...), solo se è noto a priori che restituisce **un solo valore**;
- con **IN**: appartenenza a un insieme di valori (`NomeAttributo IN (InterrogazioneNidificata)`), procedendo bottom-up;
- con **NOT IN**: esclusione da un insieme, che va individuato correttamente;
- con un **costruttore di tupla** `(A1, A2, ...)` a sinistra di IN/NOT IN per confrontare più attributi insieme.

## Formule chiave
Formulazione equivalente con il join (per IN): la FROM contiene le tabelle di tutte le SELECT, la WHERE le condizioni di join e i predicati di selezione. Per **NOT IN non esiste** una formulazione equivalente con il join.
```sql
SELECT NomeF FROM F
WHERE CodF IN (SELECT CodF FROM FP WHERE CodP='P2');
-- equivale a
SELECT NomeF FROM F, FP WHERE F.CodF=FP.CodF AND CodP='P2';
```

## Intuizione
L'errore tipico: "fornitori che **non** forniscono P2" scritto come join con `CodP<>'P2'` restituisce i fornitori che forniscono *almeno un prodotto diverso da P2*. La negazione va messa sull'insieme: si costruisce l'insieme dei fornitori di P2 e lo si esclude con NOT IN. Allo stesso modo, "fornitori che non forniscono prodotti rossi" esclude i fornitori di prodotti rossi; `IN (... fornitori di prodotti non rossi)` è sbagliato.

## Come si usa
```sql
-- fornitori che non forniscono P2
SELECT NomeF FROM F
WHERE CodF NOT IN (SELECT CodF FROM FP WHERE CodP='P2');

-- fornitori che forniscono solo P2
SELECT NomeF FROM F
WHERE F.CodF NOT IN (SELECT CodF FROM FP WHERE CodP<>'P2')
  AND F.CodF IN (SELECT CodF FROM FP);

-- coppie di luoghi senza viaggi più lunghi di 2 ore
SELECT LuogoPartenza, LuogoArrivo FROM VIAGGIO
WHERE (LuogoPartenza, LuogoArrivo) NOT IN
  (SELECT LuogoPartenza, LuogoArrivo FROM VIAGGIO
   WHERE OraArrivo-OraPartenza>2);
```
Con un aggregato la nidificazione non ha equivalente join: `WHERE NSoci < (SELECT MAX(NSoci) FROM F)`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/2-SQL_query_nidificate-2.pdf` (pp. 4-42).

## Prerequisiti
- [[Istruzione SELECT]]: la sottointerrogazione è una SELECT

## Porta a
- [[Interrogazioni correlate]]: sottointerrogazioni legate alla tupla esterna

## Collegati
- [[Semi-join e anti-join]]: NOT IN corrisponde all'anti-join
- [[Operatori insiemistici relazionali]]: INTERSECT ed EXCEPT riscritte con IN e NOT IN
- [[Divisione relazionale]]: la HAVING confronta con un conteggio nidificato
- [[Vista (SQL)]]: riscrivere un join con IN rende una vista aggiornabile
