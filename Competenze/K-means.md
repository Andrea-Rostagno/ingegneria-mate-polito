---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Ricerca operativa, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["SSE", "sum of squared errors", "centroidi iniziali", "bisecting k-means"]
tags: [competenza, area/data-ml]
---

# K-means

> Algoritmo di clustering partizionale che assegna ogni punto al centroide più vicino e ricalcola i centroidi finché le assegnazioni si stabilizzano.

## Definizione / enunciato
Ogni cluster è associato a un **centroide**; ogni punto va nel cluster del centroide più vicino; il numero $K$ di cluster va fissato. Dettagli: centroidi iniziali spesso casuali (i risultati cambiano tra esecuzioni); il centroide è di solito la media dei punti; la vicinanza si misura con distanza euclidea, similarità del coseno, correlazione; l'algoritmo converge per queste misure, quasi tutto nelle prime iterazioni, e spesso ci si ferma quando pochi punti cambiano cluster.

## Formule chiave
Complessità $O(n\cdot K\cdot I\cdot d)$ ($n$ punti, $K$ cluster, $I$ iterazioni, $d$ attributi).
$$SSE=\sum_{i=1}^{K}\sum_{x\in C_i}\text{dist}^2(m_i,x)$$
con $m_i$ rappresentante di $C_i$, che corrisponde alla media del cluster.

## Intuizione
Fra due clustering si sceglie quello con SSE minore, ma aumentare $K$ riduce sempre l'SSE: un buon clustering con $K$ piccolo può avere SSE minore di uno cattivo con $K$ grande. La scelta di $K$ si fa col **grafico a gomito** (SSE contro $K$, ci si ferma quando aggiungere un centroide dà un guadagno trascurabile).

## Come si usa
**Centroidi iniziali**: con cattive inizializzazioni si ottiene un clustering subottimo (esempio dei 10 cluster a coppie). Rimedi: più esecuzioni, campionare e usare il clustering gerarchico per i centroidi iniziali, sceglierne più di $K$ e tenere i più separati, postprocessing, **bisecting K-means** (variante che può dare un clustering partizionale o gerarchico, meno sensibile all'inizializzazione). **Cluster vuoti**: si sceglie il punto che contribuisce di più all'SSE o un punto del cluster con SSE massimo. Pre-processing: normalizzare, eliminare outlier; post-processing: eliminare cluster piccoli, dividere cluster "larghi" (SSE alto), unire cluster vicini con SSE basso. **Limiti**: cluster di dimensioni o densità diverse, forme non globulari, outlier; una soluzione è usare molti cluster e poi riunirli.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "K-means Clustering" del mazzo di clustering. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13 - 11-DMClustering-26-27.pdf` (pp. 16-40).
- **Ricerca operativa** (triennale): k-means come euristica di ricerca locale per minimizzare l'Error Sum of Squares $ESS=\sum_{i=1}^n\|X_i-\bar X_{C(i)}\|^2$, con centroide $\bar X_S=\frac1{|S|}\sum_{i\in S}X_i$. Passi: (1) $K$ centroidi casuali; (2) assegnazione al centroide più vicino; (3) aggiornamento dei centroidi, ripetendo finché qualche oggetto cambia cluster. Converge a un ottimo locale: si ripete da più inizializzazioni casuali. Limiti: serve una media (variabili quantitative) e non si controlla la cardinalità dei cluster, cosa che il modello k-median permette. Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 50-52).
- **Business intelligence per big data** (magistrale): stessa sezione "K-means Clustering" (scelta dei centroidi iniziali, valutazione con SSE, cluster vuoti, pre- e post-processing, bisecting k-means, limiti con dimensioni, densità e forme non globulari diverse). Fonti: `magistrale/Business intelligence per big data/04-DMClustering_BI.pdf` (pp. 16-40).
- **Data science lab** (magistrale): stesso materiale (SSE, centroidi iniziali, bisecting K-means, limiti), con in più l'inizializzazione **K-means++** (centroidi scelti "distanti" dai precedenti) e il grafico a gomito (knee approach) per scegliere $K$; in scikit-learn `KMeans(n_clusters=5)` e `fit_predict(X)`. Nel rilevamento di anomalie la distanza dal centroide più vicino (`model.transform(X).min(axis=1)`) fa da punteggio ([[Rilevamento di anomalie]]). Fonti: `magistrale/Data science lab/slide testo/9-DMClustering.pdf` (p. 15-41); `slide py/9-ScikitLearn-Clustering.pdf` (p. 3-4).

## Prerequisiti
- [[Cluster analysis]]: algoritmo partizionale

## Porta a
- [[Validazione interna dei cluster]]: SSE come misura di coesione

## Collegati
- [[Clustering gerarchico]]: bisecting k-means e confronto
- [[DBSCAN]]: cluster di forma arbitraria contro globulari
- [[K-median]]: modello esatto con mediane e cluster di dimensione controllata (Ricerca operativa)
- [[Problema di ottimizzazione convessa]]: l'ESS ha ottimi locali, la ricerca locale non garantisce l'ottimo globale (Ricerca operativa)
