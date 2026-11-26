---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["inverted index", "indicizzazione full text", "valori esatti", "exact values"]
tags: [competenza, area/informatica]
---

# Indice invertito

> Struttura che, per ogni parola distinta della collezione, elenca i documenti in cui compare: è ciò che rende veloce la ricerca full-text.

## Definizione / enunciato
**Indice invertito**: lista di tutte le parole uniche che compaiono in qualche documento della collezione e, per ogni parola, lista dei documenti in cui compare. ElasticSearch costruisce un indice invertito su ogni campo full-text; in generale ogni campo di un documento è indicizzato, tutti gli indici invertiti si usano durante la ricerca e i campi non indicizzati non sono ricercabili. È simile a un indice relazionale tradizionale e all'**indice analitico** dei libri (parola → lista di pagine).

Due tipi di dato:
- **valori esatti** (interi, float, date, ma anche stringhe come username o email): un valore deve coincidere esattamente con la query, come in SQL; la domanda è "il documento soddisfa la query?";
- **full text** (testo in linguaggio umano: tweet, corpo di un'email): la domanda è "quanto bene il documento soddisfa la query?", cioè la **rilevanza**.

## Formule chiave
Schema logico (lettura nostra della definizione):
$$\text{termine } t \;\longmapsto\; \{\, d \in \text{collezione} : t \text{ compare in } d \,\}.$$

## Intuizione
Invece di scorrere tutti i documenti cercando la parola, si parte dalla parola e si ottiene subito l'elenco dei documenti. Per il full text conta anche capire l'intento: abbreviazioni (USA / United States of America), singolare e plurale e coniugazioni (cat / cats), sinonimi (game / competition), ordine delle parole (fox news hunting / fox hunting news). Per questo i termini dell'indice non sono le parole grezze ma l'output dell'analisi del testo.

## Come si usa
In fase di ricerca, prima si selezionano con un modello booleano i documenti che contengono i termini della query (veloce, grazie all'indice), poi si calcola lo score di rilevanza con TF/IDF; le statistiche (frequenze, numero di documenti con il termine, lunghezza dei campi) sono calcolate e memorizzate al momento dell'indicizzazione.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (p. 12 index come struttura, pp. 17-21 valori esatti, full text e indicizzazione, p. 43 modello booleano, p. 48 statistiche all'indicizzazione).

## Prerequisiti
- [[ElasticSearch]]: struttura di indicizzazione

## Porta a
- [[Analisi del testo]]: i termini indicizzati vengono dall'analyzer
- [[TF-IDF]]: frequenze dei termini nell'indice

## Collegati
- Nessuno.
