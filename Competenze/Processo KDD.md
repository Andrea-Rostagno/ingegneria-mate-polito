---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["Knowledge Discovery in Databases", "knowledge discovery process", "processo di data mining", "data mining process"]
tags: [competenza, area/data-ml]
---

# Processo KDD

> Il processo di Knowledge Discovery from Data, che porta dai dati grezzi alla conoscenza attraverso selezione, preprocessing, trasformazione, data mining e interpretazione.

## Definizione / enunciato
**Data mining** (o machine learning): estrazione non banale di informazione *implicita*, *precedentemente sconosciuta* e *potenzialmente utile* dai dati disponibili. L'estrazione è automatica, svolta da algoritmi, e l'informazione è rappresentata da modelli astratti detti **pattern**.

Il **processo KDD** (KDD = Knowledge Discovery from Data) è la catena:
dati → *selezione* → dati selezionati → *preprocessing* → dati preprocessati → *trasformazione* → dati trasformati → *data mining* → pattern → *interpretazione* → conoscenza.

Il preprocessing comprende **data cleaning** (riduce il rumore, identifica o rimuove gli outlier, risolve le inconsistenze) e **data integration** (riconcilia dati da fonti diverse, integra i metadati, risolve conflitti di valori, gestisce la ridondanza).

## Formule chiave
Nessuna formula.

## Intuizione
"Real world data is dirty": senza dati di buona qualità non si ottengono pattern di buona qualità. Il data mining è solo un passo, preceduto da passi di preparazione che pesano di più.

## Come si usa
Le tecniche si dividono in **descrittive** (modelli interpretabili che descrivono i dati, es. segmentazione dei clienti) e **predittive** (usano variabili note per prevedere valori ignoti o futuri, es. riconoscimento dello spam). Le tecniche principali: regole di associazione (es. "pannolini ⇒ birra" sugli scontrini), classificazione (predizione di un'etichetta di classe), clustering (gruppi di oggetti simili ed eccezioni). Altre: sequence mining, serie temporali e dati geospaziali, regressione (valore continuo), outlier detection (es. intrusioni nel traffico di rete).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): presentato nella lezione introduttiva e ripreso nel mazzo "The data mining process". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (pp. 27, 32-33, 35-42); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/09 - DSTBD_7-DMProcess-IT.pdf` (pp. 2-5).
- **Business intelligence per big data** (magistrale): lezione introduttiva, con panoramica di regole di associazione, clustering, classificazione e reti neurali come tecniche di mining; nel mazzo sulle serie storiche lo stesso processo (selezione, preprocessing, trasformazione, estrazione di conoscenza, interpretazione) è applicato alle [[Serie storica|serie storiche]]. Fonti: `magistrale/Business intelligence per big data/01-DSIntro_BI.pdf` (pp. 27-44); `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (p. 17).
- **Data science lab** (magistrale): nella lezione introduttiva il data mining è "estrazione non banale di informazione implicita, prima sconosciuta e potenzialmente utile" rappresentata da modelli astratti (pattern), e il KDD è la catena selezione, preprocessing, trasformazione, machine learning/data mining, interpretazione/valutazione; segue una tassonomia (apprendimento supervisionato: classificazione, regressione; non supervisionato: clustering, regole di associazione, rilevamento di anomalie; reinforcement learning) e le sfide (qualità dei dati, scalabilità, interpretabilità, drift) ed etica. Fonti: `magistrale/Data science lab/slide testo/1-DSML-intro.pdf` (p. 3-9).

## Prerequisiti
- [[Processo di data science]]: fase di analisi del ciclo dei dati

## Porta a
- [[Qualità dei dati]]: il preprocessing è un passo del KDD
- [[Regola di associazione]]: tecnica di data mining
- [[Classificazione supervisionata]]: tecnica di data mining
- [[Cluster analysis]]: tecnica di data mining

## Collegati
- Nessuno.
