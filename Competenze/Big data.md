---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["V dei big data", "volume", "velocity", "variety", "veracity", "value"]
tags: [competenza, area/data-ml]
---

# Big data

> Dati la cui scala, diversità e complessità richiedono nuove architetture, tecniche e algoritmi per gestirli ed estrarne valore; si descrivono con le "V".

## Definizione / enunciato
Le slide riportano una delle molte definizioni: *"Data whose scale, diversity and complexity require new architectures, techniques, algorithms and analytics to manage it and extract value and hidden knowledge from it"*.

Chi genera big data: contenuti generati dagli utenti (web e mobile, social network), calcolo scientifico e sanitario, file di log (web server, syslog), Internet of Things (reti di sensori, RFID, smart meter).

Le **V dei big data**:
- **Volume**: il volume cresce in modo esponenziale (nelle slide: aumento di 44 volte dal 2009 al 2020, 35 ZB di dati digitali nel 2020);
- **Velocity**: generazione molto rapida, dati in streaming, elaborazione veloce (quasi in tempo reale) per garantire tempestività;
- **Variety**: formati, tipi e strutture diversi (numeri, immagini, audio, video, testo, serie temporali), anche dentro una stessa applicazione;
- **Veracity**: qualità dei dati;
- **Value**, la V "più importante": trasformare i dati in vantaggio di business.

## Formule chiave
Nessuna formula: il concetto è qualitativo.

## Intuizione
Il problema non è solo la quantità: è la combinazione di quantità, velocità ed eterogeneità che rende inadatti gli strumenti tradizionali. Da qui le due sfide delle slide: tecnologia e infrastruttura (nuove architetture, "trasferire la potenza di calcolo verso i dati", ecosistema Apache Hadoop/Spark) e gestione e analisi dei dati, cioè la data science.

## Come si usa
Domanda tipica: elencare e spiegare le V con un esempio. Esempi delle slide: gestione delle emergenze (dati storici, droni, previsioni meteo, osservazioni della Terra, social media, flussi di dati), informazioni sul traffico in tempo reale da crowdsourcing (velocity).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): lezione introduttiva "Data science. The Big Data challenge" (E. Baralis). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (pp. 2-20).
- **Business intelligence per big data** (magistrale): stesso impianto nella lezione introduttiva "Data science" (Baralis): chi genera i big data, le V (volume, velocity con elaborazione quasi in tempo reale, variety, veracity, value come V più importante), esempi di gestione delle emergenze e di user engagement, sfide dei big data. Fonti: `magistrale/Business intelligence per big data/01-DSIntro_BI.pdf` (pp. 2-20).

## Prerequisiti
- Nessuno.

## Porta a
- [[Processo di data science]]: i dati da raccogliere e analizzare

## Collegati
- [[Sistemi NoSQL]]: volume e varietà oltre il modello relazionale
- [[Data lake]]: archivio di dati grezzi ed eterogenei
