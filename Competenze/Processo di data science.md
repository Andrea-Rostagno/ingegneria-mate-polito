---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["data science process", "ciclo di vita dei dati", "generazione acquisizione storage analisi", "interpretabilità", "bias algoritmico", "privacy"]
tags: [competenza, area/data-ml]
---

# Processo di data science

> Il ciclo di vita dei dati, dalla generazione all'analisi, con cui la data science estrae significato da grandi quantità di dati.

## Definizione / enunciato
**Data science**: *"Extracting meaning from very large quantities of data"* (il termine data scientist è attribuito a D.J. Patil). Il **processo di data science** (detto anche processo KDD) ha quattro fasi:
1. **Generazione**: registrazione passiva (dati strutturati: transazioni bancarie, acquisti, archivi pubblici), generazione attiva (dati semi o non strutturati, contenuti degli utenti), produzione automatica (dati georeferenziati e dipendenti dal contesto, dispositivi IoT).
2. **Acquisizione**: raccolta (pull, es. web crawler; push, es. videosorveglianza, click stream), trasmissione al data center, preprocessing (integrazione, pulizia, eliminazione delle ridondanze).
3. **Storage**: infrastruttura (HDD, SSD; DAS, NAS, SAN), gestione dei dati (HDFS, key-value store, database a colonne, database a documenti come MongoDB), modelli di programmazione (MapReduce, stream e graph processing).
4. **Analisi**: obiettivi descrittivi, predittivi e prescrittivi; metodi statistici, machine learning e data mining, text mining, graph mining.

Domande guida (OpenDS4All): quale domanda, quale perimetro, quali dati, quali tecniche, come valutare, quale manutenzione.

## Formule chiave
Nessuna formula.

## Intuizione
Gran parte del lavoro non è machine learning: secondo i professionisti citati, almeno l'80-90% consiste nel capire il dominio, catalogare le fonti, estrarre, integrare e pulire i dati. Servono quindi più competenze: esperto dei dati, analista, esperto di visualizzazione, esperto di dominio, esperto di business.

## Come si usa
Questioni aperte delle slide: impatto sociale, **interpretabilità** (spiegazione del modello e della singola predizione; esempio della regola "asma → minore rischio di morte per polmonite", che una rete neurale avrebbe nascosto), **bias** nei dati e negli algoritmi (punteggi di rischio di recidiva negli USA), **privacy** (heatmap globale di Strava), scalabilità, dimensionalità, qualità dei dati, streaming.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): parte finale della lezione introduttiva. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (pp. 21-26, 34, 43-50).
- **Business intelligence per big data** (magistrale): fasi generazione, acquisizione, storage, analisi; "data science recipe"; questioni aperte su interpretabilità, bias algoritmico e dei dati (esempio dello strumento di screening dei CV), privacy, discriminazione, Responsible AI e humans in the loop (HITL). Fonti: `magistrale/Business intelligence per big data/01-DSIntro_BI.pdf` (pp. 21-26, 45-61).

## Prerequisiti
- [[Big data]]: i dati da raccogliere e analizzare

## Porta a
- [[Processo KDD]]: fase di analisi del ciclo dei dati

## Collegati
- Nessuno.
