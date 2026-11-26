---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["tabella ponte", "archi multipli nello schema logico", "push down", "fattore di peso"]
tags: [competenza, area/informatica]
---

# Bridge table

> Tabella aggiuntiva che traduce nello schema logico un arco multiplo (relazione molti-a-molti) del DFM, con un peso che ripartisce le misure; l'alternativa è il push down nella tabella dei fatti.

## Definizione / enunciato
Un **arco multiplo** (es. libro ↔ autore in VENDITA) si può realizzare in due modi:
- **Bridge table**: tabella aggiuntiva che modella la relazione molti-a-molti, con un nuovo attributo **peso** che pesa la partecipazione delle tuple nella relazione.
- **Push down**: l'arco multiplo è integrato nella tabella dei fatti, aggiungendo la dimensione corrispondente (ID_Autori) alla tabella dei fatti e incorporando il peso nelle misure.

## Formule chiave
Schemi delle slide: Vendite(ID_Libri, ID_Date, Quantità, Incasso), Libri(ID_Libri, Libro, Genere), **BRIDGE(ID_Libri, ID_Autori, Peso)**, Autori(ID_Autori, Autore); con push down: Vendite(ID_Libri, ID_Autori, ID_Date, Quantità, Incasso).

Interrogazione **pesata** (incasso di ciascun autore):
```sql
SELECT ID_Autori, SUM(Incasso*Peso) ... GROUP BY ID_Autori
```
Interrogazione **di impatto** (copie vendute per autore, senza peso):
```sql
SELECT ID_Autori, SUM(Quantità) ... GROUP BY ID_Autori
```

## Intuizione
Il peso evita di contare più volte la stessa vendita: se i pesi degli autori di uno stesso libro sommano a 1, la somma pesata degli incassi su tutti gli autori restituisce l'incasso totale (osservazione nostra). L'interrogazione di impatto invece vuole proprio attribuire l'intera vendita a ogni autore.

## Come si usa
Confronto (slide 44): con la bridge table il peso è esplicito; con il push down è integrato nella tabella dei fatti, le interrogazioni di impatto diventano difficili, il peso va calcolato durante l'alimentazione, le modifiche successive sono difficoltose e c'è forte ridondanza nei fatti; però il push down costa meno in esecuzione (meno join).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 41-44; arco multiplo nel DFM p. 23).
- **Business intelligence per big data** (magistrale): stesse slide sugli archi multipli nello schema logico. Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 42-45).

## Prerequisiti
- [[Costrutti avanzati del DFM]]: traduzione degli archi multipli
- [[Schema a stella]]: tabella aggiuntiva nello schema a stella

## Porta a
- Nessuno.

## Collegati
- Nessuno.
