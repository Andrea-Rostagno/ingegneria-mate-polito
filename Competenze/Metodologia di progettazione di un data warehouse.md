---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["analisi dei requisiti", "glossario dei requisiti", "carico di lavoro preliminare", "volume dei dati", "sparsità", "progettazione top-down e bottom-up"]
tags: [competenza, area/informatica]
---

# Metodologia di progettazione di un data warehouse

> Percorso di progetto di un data mart: analisi dei requisiti, progettazione concettuale, logica, dell'alimentazione e fisica, con la stima di carico di lavoro e volume dei dati.

## Definizione / enunciato
**Approcci**: *top-down* (un DW con visione globale di tutta l'azienda; costi e tempi elevati, analisi complessa) e *bottom-up* (DW costruito incrementalmente aggiungendo data mart di settore; costi e tempi contenuti). Le slide citano il *Dimensional Lifecycle* di Kimball.

**Fasi per un data mart** (Golfarelli-Rizzi): riconciliazione degli schemi delle sorgenti (schema riconciliato) → progettazione concettuale (schema di fatto, dai requisiti utente) → progettazione logica (con carico di lavoro, volume dei dati, modello logico) → progettazione dell'alimentazione → progettazione fisica (con DBMS, schema fisico).

**Analisi dei requisiti**: raccoglie le esigenze di analisi e i vincoli dei sistemi esistenti, da business users e amministratori. Il data mart scelto è strategico e alimentato da poche sorgenti affidabili.
- *Requisiti applicativi*: i fatti (categorie di eventi, es. reclami), con dimensioni (granularità), intervallo di storicizzazione e misure, raccolti in un **glossario**; il carico di lavoro, dalla reportistica e da interrogazioni in linguaggio naturale (es. "numero di reclami per prodotto nell'ultimo mese").
- *Requisiti strutturali*: periodicità dell'alimentazione, spazio per dati e strutture accessorie, tipo di architettura, pianificazione del deployment.

## Formule chiave
Il volume dei dati si stima da: numero di eventi di ogni fatto, numero di valori distinti degli attributi nelle gerarchie, lunghezza degli attributi, intervallo temporale memorizzato. **Sparsità**: gli eventi accaduti sono molti meno delle combinazioni possibili delle dimensioni (esempio delle slide: circa il 10% delle combinazioni prodotto-negozio-giorno). La sparsità si riduce al crescere dell'aggregazione e rende meno affidabile la stima della cardinalità dei dati aggregati.

## Intuizione
Il carico reale è difficile da prevedere: se il sistema ha successo crescono utenti e interrogazioni e cambia il loro tipo. Per questo dopo l'avviamento serve una fase di **tuning** con monitoraggio del carico.

## Come si usa
Fattori di rischio: aspettative elevate degli utenti, scarsa qualità dei dati e dei processi OLTP, gestione "politica" del progetto. Nell'esercizio di progetto si parte dal testo dei requisiti, si individuano fatto, misure e dimensioni, e solo dopo si passa allo schema logico.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 2-9 approcci e requisiti, pp. 31-33 carico di lavoro, volume e sparsità).
- **Business intelligence per big data** (magistrale): stesse slide (fattori di rischio, Business Dimensional Lifecycle, progettazione di data mart, analisi dei requisiti applicativi e strutturali, carico di lavoro, volume dei dati e sparsità). Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 2-11, 31-33).

## Prerequisiti
- [[Data warehouse e data mart]]: progettare il DW

## Porta a
- [[Dimensional Fact Model]]: la progettazione concettuale usa il DFM

## Collegati
- [[Progettazione fisica del data warehouse]]: carico di lavoro e volume dei dati come input
- [[Fasi della progettazione di una base di dati]]: stessa sequenza concettuale, logica, fisica della progettazione tradizionale
