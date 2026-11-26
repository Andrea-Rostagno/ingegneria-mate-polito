---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["density-based clustering", "core point", "border point", "noise point", "Eps", "MinPts"]
tags: [competenza, area/data-ml]
---

# DBSCAN

> Algoritmo di clustering basato sulla densità che forma i cluster collegando i punti core vicini e scarta come rumore i punti isolati.

## Definizione / enunciato
I cluster sono regioni ad alta densità separate da regioni a bassa densità. **Densità** = numero di punti entro un raggio **Eps**.
- **Core point**: ha più di **MinPts** punti entro Eps (punto interno a un cluster);
- **Border point**: ha meno di MinPts punti entro Eps, ma è nel vicinato di un core point;
- **Noise point**: né core né border.

**Algoritmo**: (1) etichetta i punti come core, border o noise; (2) elimina i punti noise; (3) collega con un arco i core point entro distanza Eps; (4) ogni gruppo connesso di core point è un cluster; (5) assegna ogni border point a uno dei cluster dei suoi core point associati.

## Formule chiave
Nessuna formula oltre alle soglie Eps e MinPts. Scelta dei parametri: per i punti di un cluster il $k$-esimo vicino è a distanza simile, per il rumore è più lontano; si traccia la distanza ordinata di ogni punto dal suo $k$-esimo vicino e si sceglie Eps al gomito.

## Intuizione
Non serve fissare il numero di cluster e i cluster possono avere forma qualsiasi, cosa che K-means non sa fare. Ma con una sola soglia di densità non si possono separare cluster di densità diverse.

## Come si usa
Funziona bene: resistente al rumore, gestisce cluster di forme e dimensioni diverse (esempio con Eps = 10, MinPts = 4). Non funziona bene: densità variabili (con MinPts = 4, Eps = 9.75 o 9.62 si ottengono risultati diversi) e dati ad alta dimensionalità.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Density Based Clustering" del mazzo di clustering. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13 - 11-DMClustering-26-27.pdf` (pp. 71-84).
- **Business intelligence per big data** (magistrale): stessa sezione su DBSCAN (punti core, border e noise, algoritmo, casi in cui funziona o no, scelta di Eps e MinPts). Fonti: `magistrale/Business intelligence per big data/04-DMClustering_BI.pdf` (pp. 68-74).
- **Data science lab** (magistrale): core, border e noise point, Eps e MinPts; in scikit-learn `DBSCAN(eps=3, min_samples=2)`. Nel notebook di anomaly detection i punti di rumore (etichetta $-1$) sono le anomalie (`DBSCAN(eps=15, min_samples=5)` sul dataset chameleon); con regioni di densità diversa un `eps` unico fallisce, mentre il [[Local Outlier Factor]] no ([[Rilevamento di anomalie]]). Fonti: `magistrale/Data science lab/slide testo/9-DMClustering.pdf` (p. 68-77); `slide py/9-ScikitLearn-Clustering.pdf` (p. 5); `slide testo/anomaly-detection.ipynb`.

## Prerequisiti
- [[Cluster analysis]]: algoritmo basato sulla densità

## Porta a
- Nessuno.

## Collegati
- [[K-means]]: cluster di forma arbitraria contro globulari
