---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["roll-up", "roll up", "drill-down", "drill down", "slice and dice", "slice", "dice", "pivot", "sessione di lavoro OLAP"]
tags: [competenza, area/informatica]
---

# Operatori OLAP

> Operazioni di navigazione interattiva nel cubo multidimensionale: roll-up, drill-down, slice and dice, pivot e ordinamento, combinabili in una sessione di lavoro OLAP.

## Definizione / enunciato
Strumenti di interfaccia: ambiente controllato di query (ricerche e rapporti a struttura prefissata, codice ad hoc, stored procedure), query ad hoc (point and click che genera SQL, paradigma dello spreadsheet), strumenti di data mining. Le operazioni OLAP sono:
- **Roll up**: riduce il dettaglio, salendo di livello in una gerarchia (`group by negozio, mese` → `group by città, mese`) oppure eliminando una dimensione (`group by prodotto, città` → `group by prodotto`).
- **Drill down**: aumenta il dettaglio, scendendo in una gerarchia (da città e mese a negozio e mese) oppure aggiungendo una dimensione (da città a città e prodotto). Spesso opera su un sottoinsieme dei dati di partenza.
- **Slice and dice**: riduce il volume con predicati di selezione. *Slice*: predicato di uguaglianza che seleziona una "fetta" (Anno = 2005). *Dice*: combinazione di predicati che seleziona un "cubetto" (Categoria = 'Alimentari' AND Città = 'Torino').
- **Pivot**: riorganizza l'orientamento della struttura senza variare il dettaglio; la griglia resta, cambiano le dimensioni sugli assi.
- **Ordinamento**.

Le operazioni si combinano in una query o si eseguono come raffinamenti successivi: la **sessione di lavoro OLAP**.

## Formule chiave
In SQL il roll-up corrisponde a una `GROUP BY` su attributi meno fini o su meno attributi; lo slice a un predicato `WHERE attributo = valore`.

## Intuizione
Roll-up e drill-down muovono il livello di aggregazione lungo le gerarchie del DFM; slice and dice restringe il cubo; pivot cambia solo la presentazione.

## Come si usa
Le analisi richiedono aggregati complessi (media mobile, top ten) e confronti tra periodi, difficili in SQL di base: per questo esistono le estensioni SQL (finestre, ranking, ROLLUP e CUBE). Il roll-up corretto richiede di sapere se la misura è additiva lungo la gerarchia.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/04 - DSTBD_4-DWquery-IT.pdf` (pp. 2-24; gli esempi grafici alle pp. 10-24 sono tabelle tratte da Golfarelli-Rizzi).
- **Business intelligence per big data** (magistrale): stesse slide (strumenti di interfaccia, ambiente controllato e ad hoc, roll up, drill down, slice and dice, pivot con esempi). Fonti: `magistrale/Business intelligence per big data/10-DWquery-ITA_BI.pdf` (pp. 2-24).

## Prerequisiti
- [[OLTP e OLAP]]: analisi interattiva dei dati
- [[Additività delle misure]]: il roll-up aggrega con l'operatore corretto
- [[Schema a stella]]: le query OLAP lavorano sullo schema a stella

## Porta a
- [[ROLLUP e CUBE]]: roll-up e cubo espressi in SQL
- [[Funzioni OLAP con finestra]]: analisi su dati ordinati

## Collegati
- Nessuno.
