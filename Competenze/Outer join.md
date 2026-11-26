---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [outer-join, join esterno, left outer join, right outer join, full outer join, LEFT JOIN, LEFT OUTER JOIN]
tags: [competenza, area/informatica]
---

# Outer join

> Variante del join che conserva anche le tuple non legate dal predicato, completandole con valori nulli: left, right o full a seconda dell'operando che si conserva.

## Definizione / enunciato
Tre tipi:
- **left outer join** $A ⟕_p B$: coppie $(a,b)$ con $p$ vero, più ogni tupla di $A$ non correlata a tuple di $B$, completata con NULL su tutti gli attributi di $B$. Non commutativo.
- **right outer join** $A ⟖_p B$: come sopra, ma si completano le tuple di $B$ senza controparte in $A$. Non commutativo.
- **full outer join** $A ⟗_p B$: si completano le tuple prive di controparte di entrambi gli operandi. Commutativo.

In tutti i casi lo schema è l'unione degli schemi di $A$ e $B$.

## Formule chiave
Esempio delle slide: docenti con i corsi che tengono, inclusi quelli senza corsi
$$R = \text{Docenti}\ ⟕_p\ \text{Corsi},\qquad p: \text{Docenti.MatrDocente}=\text{Corsi.MatrDocente}$$
La tupla (D105, Neri, Informatica) compare con NULL in Codice, NomeCorso, Semestre, MatrDocente.

## Intuizione
Il join "normale" perde le tuple senza partner; l'outer join le tiene e segna l'assenza con NULL. Serve quando la domanda dice "visualizzando anche quelli che non ...".

## Come si usa
In SQL:
```sql
SELECT F.CodF, NomeF, CodP
FROM F LEFT OUTER JOIN FP ON F.CodF=FP.CodF;
```
mostra i fornitori con i prodotti forniti, inclusi quelli senza forniture (CodP NULL). Sintassi generale: `FROM Tabella TipoJoin JOIN Tabella ON CondizioneDiJoin`, con `TipoJoin = INNER | [FULL | LEFT | RIGHT] OUTER`. Nelle CTE ricorsive le slide usano `LEFT JOIN` per affiancare a ogni impiegato il suo boss, anche quando è NULL.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Algebra_Relazionale.pdf` (pp. 51-59; simbolo letto sull'immagine di p. 56); `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 57-59); `triennale/ANNO 3/base di dati/4-SQL_query_avanzate.pdf` (p. 29).

## Prerequisiti
- [[Join relazionale]]: ne è una variante
- [[Valore nullo]]: completamento delle tuple senza controparte

## Porta a
- Nessuno.

## Collegati
- [[Istruzione SELECT]]: sintassi JOIN ... ON nella clausola FROM
