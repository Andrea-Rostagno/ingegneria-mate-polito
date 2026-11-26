---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [Isolation Forest, IsolationForest, foresta di isolamento, iForest, alberi casuali di isolamento, path length, lunghezza del cammino]
tags: [competenza, area/data-ml]
---

# Isolation forest

> Metodo di rilevamento di anomalie ad alberi: un insieme di alberi generati a caso partiziona lo spazio, e i punti isolati con **pochi split** (cammino radice-foglia corto) sono anomalie.

## Definizione / enunciato
Un Isolation Forest è una collezione di **alberi generati casualmente**: in ogni nodo si sceglie a caso una feature e un valore di split, e si divide su "feature < valore"; ogni albero spezza lo spazio in partizioni casuali (`DSML-Anomaly-Detection.pdf` p. 8).
- **Anomalie**: isolate in pochi split (cammino radice-foglia corto).
- **Punti normali**: più difficili da isolare (cammino lungo).
- Si ripete su molti alberi casuali per avere più cammini e mediare.

## Formule chiave
$$\text{Anomaly score}(x)=2^{-\frac{\mathbb E(h(x))}{c(n)}}$$
con $\mathbb E(h(x))$ lunghezza media del cammino che isola $x$ e $c(n)$ fattore di normalizzazione che dipende dalla dimensione del dataset (più punti, alberi più profondi in media, cammini più lunghi). La slide non dà la formula di $c(n)$.

## Intuizione
Isolare un punto in una regione affollata richiede molti tagli, perché ogni taglio casuale lascia con lui molti vicini; un punto lontano da tutti finisce da solo dopo pochi tagli. Con l'esponente negativo un cammino corto dà un punteggio vicino a 1.

## Come si usa
`IsolationForest(n_estimators=100, contamination=0.05, random_state=1)`, `fit_predict` per le etichette e `score_samples` per la mappa dei punteggi (notebook, sezione "Tree-based methods").

## Nei corsi
- **Data science lab** (magistrale): Fonti: `magistrale/Data science lab/slide testo/DSML-Anomaly-Detection.pdf` (p. 8); esempio in `slide testo/anomaly-detection.ipynb`.

## Prerequisiti
- [[Rilevamento di anomalie]]: punteggio e soglia
- [[Albero di decisione]]: struttura ad alberi con split su una feature

## Collegati
- [[Random forest]]: anche questo è un ensemble di alberi, ma con split scelti a caso e senza etichette
