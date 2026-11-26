---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [derived table, tabelle derivate, SELECT nella FROM, aggregati a due livelli, tabella temporanea]
tags: [competenza, area/informatica]
---

# Tabella derivata

> Interrogazione SELECT scritta nella clausola FROM e usata come una tabella temporanea: serve per aggregare su più livelli e per sostituire la correlazione.

## Definizione / enunciato
La tabella derivata ha la struttura di una SELECT, è definita nella clausola **FROM** (con un nome dato da `AS`) e si può referenziare come una normale tabella. Permette di:
- calcolare **più livelli di aggregazione** (un aggregato di aggregati);
- formulare in modo equivalente le interrogazioni che richiedono la **correlazione**.

## Formule chiave
```sql
-- media massima conseguita da uno studente
SELECT MAX(MediaStudente)
FROM (SELECT Matricola, AVG(Voto) AS MediaStudente
      FROM ESAME-SUPERATO
      GROUP BY Matricola) AS MEDIE;
```
su `STUDENTE(Matricola, AnnoIscrizione)` e `ESAME-SUPERATO(Matricola, CodC, Data, Voto)`.

## Intuizione
Una funzione aggregata non si può annidare direttamente in un'altra (`MAX(AVG(Voto))`): si materializza prima il livello interno (una riga per studente) e poi si aggrega su quello. Il procedimento è sempre "a passi".

## Come si usa
Media massima per anno di iscrizione: la tabella derivata MEDIE si mette in join con STUDENTE e si raggruppa.
```sql
SELECT AnnoIscrizione, MAX(MediaStudente)
FROM STUDENTE,
     (SELECT Matricola, AVG(Voto) AS MediaStudente
      FROM ESAME-SUPERATO
      GROUP BY Matricola) AS MEDIE
WHERE STUDENTE.Matricola=MEDIE.Matricola
GROUP BY AnnoIscrizione;
```
Al posto della correlazione (fornitore della quantità massima per prodotto):
```sql
SELECT CodP, CodF
FROM FP, (SELECT CodP, MAX(Qta) AS MQta
          FROM FP GROUP BY CodP) AS TMax
WHERE FP.CodP = TMax.CodP AND FP.Qta = TMax.MQta;
```

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/4-SQL_query_avanzate.pdf` (pp. 3-12).

## Prerequisiti
- [[GROUP BY e HAVING]]: aggregati per gruppo al primo livello
- [[Interrogazioni correlate]]: forma che la tabella derivata sostituisce

## Porta a
- [[Common Table Expression]]: la stessa tabella temporanea definita con WITH

## Collegati
- [[Vista (SQL)]]: anche la vista è una tabella definita da una query
