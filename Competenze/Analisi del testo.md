---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["analysis", "analyzer", "tokenizer", "character filter", "token filter", "normalizzazione dei token"]
tags: [competenza, area/informatica]
---

# Analisi del testo

> Processo (analysis) che trasforma un testo in termini normalizzati da mettere nell'indice invertito: tokenizzazione e normalizzazione, svolte da un analyzer.

## Definizione / enunciato
**Analysis**:
1. **Tokenizzazione** di un blocco di testo in termini singoli adatti all'indice invertito.
2. **Normalizzazione** in forma standard, per migliorare il recupero (*recall*): termini non identici ma abbastanza simili restano rilevanti. Esempi: minuscole/maiuscole, **stemming** (riduzione alla radice, cats → cat), gestione dei sinonimi.

Per la ricerca, **sia il testo indicizzato sia la stringa di query devono essere analizzati nello stesso modo**.

Un **analyzer** fornisce:
- **character filter**: pulisce la stringa prima della tokenizzazione (es. & → and);
- **tokenizer**: divide la stringa in parole (es. su spazi o punteggiatura);
- **token filter**: opera sui singoli termini: li cambia (minuscole), li rimuove (stopword), li aggiunge (sinonimi).

ElasticSearch fornisce analyzer predefiniti.

## Formule chiave
Confronto delle slide (p. 58) tra analisi tradizionale e preprocessing per la ricerca densa:

| Analisi tradizionale | Preprocessing per dense search |
|---|---|
| 1. tokenizzazione in termini | 1. normalizzazione (minuscole, caratteri spuri); stemming e sinonimi non servono |
| 2. normalizzazione (case, stemming, sinonimi) | 2. tokenizzazione in sotto-parole per il modello di embedding |
| 3. aggiornamento dell'indice invertito | 3. calcolo e memorizzazione dell'embedding, una volta per tutte |
| 4. alla query: vettore per la funzione di score | 4. alla query: confronto degli embedding con quello della query |

## Intuizione
L'analisi è ciò che fa trovare "cats" cercando "cat": se query e documenti passassero per analyzer diversi, i termini non coinciderebbero più nell'indice.

## Come si usa
La match query su un campo full-text analizza la stringa di query con l'analyzer corretto prima di cercare; su un campo a valore esatto (o *not_analyzed*) cerca il valore esatto. Nella ricerca semantica stemming e sinonimi diventano inutili, perché è il modello di embedding a catturare il significato.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 22-23 analysis e analyzer, p. 32 match query, p. 58 analysis v2).

## Prerequisiti
- [[Indice invertito]]: i termini indicizzati vengono dall'analyzer

## Porta a
- [[Ricerca semantica]]: preprocessing per la ricerca densa

## Collegati
- Nessuno.
