---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["indici per il data warehouse", "star join", "join index", "partizionamento", "parallelismo", "tuning"]
tags: [competenza, area/informatica]
---

# Progettazione fisica del data warehouse

> Scelta delle strutture fisiche (indici bitmap e di join, viste materializzate, parallelismo) adatte al carico analitico di sola lettura di un data warehouse.

## Definizione / enunciato
**Carico di lavoro del DW**: interrogazioni con aggregati che leggono una frazione significativa di ogni tabella, accesso in sola lettura, aggiornamento periodico con eventuale ricostruzione di indici e viste.

**Strutture fisiche**: indici diversi da quelli tradizionali (indici bitmap, indici di join, bitmapped join index). Il **B+-tree non è adatto** per attributi a bassa cardinalità di dominio, per interrogazioni poco selettive e per le viste materializzate.

**Ottimizzatore**: deve essere *cost based* (usa le statistiche) e saper fare *aggregate navigation* (sfruttare le viste materializzate).

**Procedimento**: scegliere strutture per le interrogazioni più frequenti o rilevanti, preferendo quelle che migliorano più interrogazioni insieme, rispettando spazio su disco e tempo di aggiornamento. Poi **tuning** a posteriori con monitoraggio del carico, spesso necessario per OLAP. **Parallelismo**: frammentazione dei dati, parallelizzazione inter-query e intra-query; join e group by si prestano bene.

## Formule chiave
Regole di scelta degli indici (slide 14):
- attributi di dimensione spesso nei predicati: **B-tree** se il dominio ha cardinalità elevata, **bitmap** se ridotta;
- join: raramente conviene indicizzare solo le chiavi esterne della tabella dei fatti; consigliato il **bitmapped join index**;
- group by: **viste materializzate**.

## Intuizione
Nel DW le query leggono molto e scrivono poco: si accettano strutture costose da aggiornare (bitmap, viste) perché l'aggiornamento avviene in batch durante l'alimentazione.

## Come si usa
Data una query a stella con selezioni su attributi delle dimensioni e raggruppamento: indice bitmap sugli attributi di selezione a pochi valori (es. categoria), B-tree su quelli con molti valori, bitmapped join index per il join fatti-dimensioni, vista materializzata al livello del group by richiesto (o a uno più fine da cui derivarlo).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (pp. 11-14).

## Prerequisiti
- [[Schema a stella]]: strutture fisiche per le query a stella
- [[Indice bitmap]]: indice adatto agli attributi dimensionali
- [[Bitmapped join index]]: join tra fatti e dimensioni

## Porta a
- Nessuno.

## Collegati
- [[Metodologia di progettazione di un data warehouse]]: carico di lavoro e volume dei dati come input
- [[Progettazione fisica di una base di dati]]: stessa metodologia su carico analitico
