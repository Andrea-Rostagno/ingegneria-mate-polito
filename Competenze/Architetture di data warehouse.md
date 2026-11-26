---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["architettura a due livelli", "architettura a tre livelli", "ROLAP", "MOLAP", "HOLAP", "server per data warehouse", "data mart dipendenti", "data mart indipendenti", "metadati"]
tags: [competenza, area/informatica]
---

# Architetture di data warehouse

> Organizzazione in livelli (sorgenti, alimentazione, data warehouse, analisi) che separa il carico transazionale da quello analitico; comprende i tipi di server OLAP.

## Definizione / enunciato
Principio: separare elaborazione transazionale e analisi, evitando le architetture a un livello. Le architetture a due o più livelli separano in misura diversa i dati in ingresso dai dati oggetto di analisi e sono più scalabili.

**Elementi costitutivi**: sorgenti di dati (operazionali ed esterne), strumenti ETL, data warehouse e data mart, server OLAP, strumenti di analisi, gestione del DW e metadati.

**Architettura a 2 livelli** (livello delle sorgenti, livello del data warehouse): disaccoppiamento dalle sorgenti (dati esterni all'OLTP, modellazione adatta all'OLAP, progettazione fisica mirata al carico analitico), gestione facile di granularità temporali diverse, separazione dei carichi; ma l'ETL va fatto "al volo".

**Architettura a 3 livelli**: aggiunge il livello di alimentazione con la **staging area** (talvolta *Operational Data Store*, ODS), area di transito che separa estrazione e trasformazione dal caricamento. Permette trasformazioni e pulizie complesse e offre un modello integrato ancora vicino all'OLTP, ma introduce ulteriore ridondanza e spazio.

**Server per DW**: ROLAP (DBMS relazionale esteso, rappresentazione compatta dei dati sparsi, estensioni SQL per aggregati, metodi di accesso speciali); MOLAP (forma matriciale proprietaria, i dati sparsi richiedono compressione, primitive OLAP speciali); HOLAP (ibrido).

**Metadati** ("dati sui dati"): per trasformazione e caricamento (sorgenti e trasformazioni; standard CWMI dell'OMG), per la gestione dei dati (struttura del DW, anche viste materializzate), per la gestione delle query (SQL, piano di esecuzione, uso di CPU e memoria).

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
Ogni livello in più compra libertà (trasformazioni complesse, modello pulito) pagando spazio e ridondanza.

## Come si usa
Fra i requisiti strutturali del progetto c'è il tipo di architettura (numero di livelli, data mart dipendenti o indipendenti). Domanda tipica: disegnare l'architettura a 3 livelli e spiegare il ruolo della staging area.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/02 - DSTBD_2-DWintro-IT.pdf` (pp. 17-27); requisiti strutturali in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (p. 9).
- **Business intelligence per big data** (magistrale): stesse slide (elementi costitutivi, server ROLAP, MOLAP e HOLAP, metadati, architetture a due e a tre livelli e loro caratteristiche). Fonti: `magistrale/Business intelligence per big data/08-DWintro-ITA_BI.pdf` (pp. 16-20, 23-27).

## Prerequisiti
- [[Data warehouse e data mart]]: come si organizzano DW e data mart

## Porta a
- [[ETL]]: livello di alimentazione

## Collegati
- [[Data lake]]: architettura alternativa o complementare
