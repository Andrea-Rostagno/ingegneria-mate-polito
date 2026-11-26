---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [anomaly detection, AD, outlier detection, rilevamento di outlier, anomalie puntuali, point anomalies, anomalie contestuali, contextual anomalies, anomalie collettive, collective anomalies, anomaly score, punteggio di anomalia, metodo dello z-score, contamination]
tags: [competenza, area/data-ml]
---

# Rilevamento di anomalie

> Processo che individua punti, eventi o pattern che si discostano in modo significativo dal comportamento atteso, di solito assegnando a ogni campione un **punteggio di anomalia** e applicando una soglia.

## Definizione / enunciato
- **Non supervisionato**: senza etichette, il modello impara i pattern normali e segnala le deviazioni (il caso su cui si concentra il corso). **Supervisionato**: esempi di anomalie disponibili, il modello impara a separarli dai normali.
- **Tipi di anomalie**: *puntuali* (un singolo punto molto diverso dal resto, es. prelievo di 10.000 \$ alle 3 di notte); *contestuali* (anomalo solo in un contesto, es. bonifico di 500.000 \$ fatto da un privato e non da un'azienda); *collettive* (gruppo di punti normali singolarmente ma anomalo insieme, es. più depositi da 9.000 \$ poi trasferiti all'estero).
- **Famiglie di metodi**: statistici (z-score; generalizzazione multivariata con la distanza di Mahalanobis); basati su clustering (DBSCAN, K-means); di prossimità (k-NN, Local Outlier Factor); ad alberi (Isolation Forest); di frontiera (One-Class SVM, con frazione attesa di anomalie $\nu$); con reti neurali (autoencoder ed errore di ricostruzione).

## Formule chiave
Metodo dello z-score: $z=(x-\mu)/\sigma$, anomalo se $|z|$ supera una soglia; nel notebook la soglia è $3$ ($3\sigma$) su altezze simulate. Con K-means il punteggio è la distanza dal centroide più vicino e si marca come anomalo il 5% dei punti più lontani; DBSCAN etichetta direttamente come anomalie i punti di rumore (cluster $-1$ in scikit-learn).

## Intuizione
Un'anomalia è definita rispetto a un modello del "normale": cambiando il modello (distribuzione, cluster, densità locale, facilità di isolamento, capacità di ricostruzione) cambia cosa risulta anomalo. La soglia, o la frazione attesa di anomalie (`contamination`), resta una scelta dell'analista.

## Come si usa
In scikit-learn `LocalOutlierFactor(n_neighbors=10, contamination=0.05)`, `IsolationForest(n_estimators=100, contamination=0.05)` e `fit_predict` restituiscono $1$ (normale) o $-1$ (anomalia); `score_samples` dà i punteggi.

## Nei corsi
- **Data science lab** (magistrale): blocco "Anomaly Detection" (novità dell'A.A. 25/26). Fonti: `magistrale/Data science lab/slide testo/anomaly-detection.ipynb` (celle di testo del docente: definizione, tipi, famiglie di metodi; codice come esempio) e `slide testo/DSML-Anomaly-Detection.pdf`.

## Prerequisiti
- [[Qualità dei dati]]: outlier e rumore come problema dei dati
- [[Normalizzazione degli attributi]]: lo z-score è la standardizzazione

## Porta a
- [[Local Outlier Factor]]: metodo di prossimità basato sulla densità locale
- [[Isolation forest]]: metodo ad alberi casuali
- [[Autoencoder]]: metodo neurale basato sull'errore di ricostruzione

## Collegati
- [[DBSCAN]]: i noise point sono anomalie
- [[K-means]]: distanza dal centroide come punteggio
- [[Misure di distanza]]: la distanza di Mahalanobis generalizza lo z-score
