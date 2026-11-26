---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["clustering", "analisi dei cluster", "clustering partizionale", "tipi di cluster"]
tags: [competenza, area/data-ml]
---

# Cluster analysis

> Ricerca non supervisionata di gruppi di oggetti simili tra loro e diversi dagli oggetti degli altri gruppi.

## Definizione / enunciato
La **cluster analysis** trova gruppi di oggetti tali che gli oggetti di un gruppo siano simili (o correlati) tra loro e diversi da quelli degli altri gruppi: distanze **intra-cluster minimizzate**, distanze **inter-cluster massimizzate**. La nozione di cluster è ambigua: gli stessi punti si possono vedere come 2, 4 o 6 cluster.

**Tipi di clustering** (un clustering è un insieme di cluster):
- **partizionale**: sottoinsiemi non sovrapposti, ogni oggetto in esattamente uno;
- **gerarchico**: cluster annidati organizzati come albero;
- inoltre esclusivo o non esclusivo, fuzzy (ogni punto appartiene a ogni cluster con un peso in $[0,1]$, pesi a somma 1; simile il probabilistico), parziale o completo, eterogeneo o omogeneo.

**Tipi di cluster**: ben separati; basati sul centro (più vicini al proprio *centro*, centroide = media o medoide = punto più rappresentativo); contigui (nearest neighbor, transitivi); basati sulla densità (regioni dense separate da regioni a bassa densità, utili con cluster irregolari, rumore, outlier); concettuali (proprietà condivisa); descritti da una funzione obiettivo.

## Formule chiave
Nessuna formula generale; l'obiettivo dipende dall'algoritmo (es. SSE per K-means).

## Intuizione
A differenza della classificazione non ci sono etichette: il risultato dipende dalla nozione di prossimità e dal tipo di cluster cercato. Per questo la validazione è difficile.

## Come si usa
Applicazioni delle slide: *comprensione* (raggruppare documenti, geni e proteine con funzioni simili, titoli azionari con andamenti simili) e *sintesi* (ridurre grandi dataset, es. precipitazioni in Australia). Gli obiettivi nell'introduzione: trovare gruppi di oggetti simili e individuare eccezioni e outlier. Algoritmi del corso: K-means e varianti, clustering gerarchico, clustering basato sulla densità.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzo "Clustering fundamentals" (Baralis, Cerquitelli), versione 2026-27. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13 - 11-DMClustering-26-27.pdf` (pp. 2-15); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (pp. 39-41).
- **Business intelligence per big data** (magistrale): stesso mazzo "Clustering fundamentals": definizione, applicazioni, tipi di clustering (partizionale, gerarchico) e di cluster (ben separati, basati sul centro, sulla contiguità, sulla densità, concettuali). Fonti: `magistrale/Business intelligence per big data/04-DMClustering_BI.pdf` (pp. 2-15).
- **Data science lab** (magistrale): stesso mazzo di Baralis-Cerquitelli (tipi di clustering e di cluster); in scikit-learn il clustering è non supervisionato (richiede solo la features matrix): `KMeans(n_clusters=5)`, `DBSCAN(eps=3, min_samples=2)`, `AgglomerativeClustering(5, linkage='average')`, tutti con `fit_predict(X)` che restituisce le etichette; agglomerativo e DBSCAN non sanno assegnare un punto nuovo. Fonti: `magistrale/Data science lab/slide testo/9-DMClustering.pdf` (p. 1-14); `slide py/9-ScikitLearn-Clustering.pdf` (p. 2-5).

## Prerequisiti
- [[Processo KDD]]: tecnica di data mining
- [[Misure di distanza]]: prossimità tra oggetti

## Porta a
- [[K-means]]: algoritmo partizionale
- [[Clustering gerarchico]]: algoritmo gerarchico
- [[DBSCAN]]: algoritmo basato sulla densità
- [[Validazione interna dei cluster]]: valutare i cluster trovati
- [[Validazione esterna dei cluster]]: valutare i cluster trovati

## Collegati
- Nessuno.
