---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["semantic search", "embeddings", "dense search", "ricerca densa", "hybrid search", "ricerca ibrida"]
tags: [competenza, area/informatica]
---

# Ricerca semantica

> Ricerca basata su embedding, vettori densi che catturano il significato di testi, immagini o audio, in alternativa o in combinazione (hybrid search) con la ricerca lessicale.

## Definizione / enunciato
La **ricerca lessicale** non cerca di capire il significato: quantifica le corrispondenze tra i letterali delle parole o loro varianti (stemming, sinonimi), cioè forza il testo in una struttura di occorrenze. Testo, immagini, audio e video contengono però informazione semantica non strutturata.

Gli **embedding semantici** sono rappresentazioni numeriche dei dati in uno spazio ad alta dimensione: ogni dato diventa un vettore di numeri che ne cattura il significato. Significati simili → vettori vicini; significati diversi → vettori lontani. Sono prodotti da modelli di machine learning addestrati su grandi dataset: BERT ed embedding OpenAI (testo, significato contestuale anche su frasi lunghe), CLIP (immagini allineate alle loro descrizioni). Ogni modello mappa il significato in un vettore di dimensione fissa.

## Formule chiave
Confronto VSM / embedding (slide 57):
- il VSM crea un vettore che dipende dalla query in dimensione e contenuto e va ricalcolato per ogni testo;
- gli embedding sono generati indipendentemente dalla query, con dimensione fissata dal modello (nell'esempio BERT, 769 feature).

**Hybrid search** in Elastic: si combinano ricerca lessicale e vettoriale (sparsa e densa); gli embedding si aggiungono alla ricerca tradizionale per la similarità semantica e gli score si possono combinare, per esempio linearmente.

## Intuizione
La query "Proemio dell'Iliade, lite tra Achille e Agamennone" e il verso "Cantami o diva del Pelide Achille l'ira funesta" hanno quasi nessuna parola in comune, ma lo stesso argomento: il VSM vede solo "Achille", un embedding li colloca vicini.

## Come si usa
Preprocessing per la ricerca densa (slide 58): normalizzazione leggera (minuscole, caratteri spuri; niente stemming né sinonimi), tokenizzazione in sotto-parole per il modello, calcolo e memorizzazione dell'embedding una volta per tutte, e al momento della query confronto tra l'embedding della query e quelli dei documenti.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 53-59).

## Prerequisiti
- [[Vector space model]]: dai vettori sparsi agli embedding
- [[Analisi del testo]]: preprocessing per la ricerca densa

## Porta a
- Nessuno.

## Collegati
- Nessuno.
