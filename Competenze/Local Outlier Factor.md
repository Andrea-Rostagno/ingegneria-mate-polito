---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [LOF, densità locale, local density, local reachability distance, LRD, LocalOutlierFactor]
tags: [competenza, area/data-ml]
---

# Local Outlier Factor

> Metodo di rilevamento di anomalie basato sulla prossimità: un punto è anomalo se la sua **densità locale** è minore di quella dei suoi $k$ vicini più prossimi.

## Definizione / enunciato
LOF considera anomali i punti che si trovano in regioni poco dense dello spazio. Poiché regioni diverse possono avere densità diverse, stima una densità **locale** per ogni regione (`DSML-Anomaly-Detection.pdf` p. 2-7):
- la densità locale di un punto è inversamente proporzionale alla distanza dal suo $k$-esimo vicino più prossimo: distanza grande, vicini lontani, regione poco densa; distanza piccola, regione densa;
- se tutte le regioni dense avessero la stessa densità basterebbe una soglia di distanza unica, ma non è così, quindi la soglia va **stimata punto per punto**;
- la densità "attesa" attorno a un punto si stima con la distanza media dal $k$-esimo vicino **dei vicini** del punto: per un punto anomalo il $k$-esimo vicino è lontano, mentre i suoi vicini (se normali) hanno vicini molto più vicini.

## Formule chiave
La slide dichiara la propria versione una **semplificazione**: il LOF vero usa la *Local Reachability Distance* (LRD) come stima della densità locale. La formula dell'LRD non è nelle fonti (da verificare sul PDF / testo di riferimento).

## Intuizione
Il confronto è relativo: un punto in un cluster rado non è anomalo se tutti i suoi vicini sono altrettanto radi, mentre un punto isolato accanto a un cluster denso lo è, anche a parità di distanza assoluta.

## Come si usa
`LocalOutlierFactor(n_neighbors=10, contamination=0.05)` con `fit_predict` ($-1$ = anomalia). Nel notebook su un dataset con regioni di densità simile LOF dà risultati simili a DBSCAN; dopo aver sottocampionato un cluster (densità diversa) DBSCAN con `eps` fisso sbaglia, LOF no.

## Nei corsi
- **Data science lab** (magistrale): Fonti: `magistrale/Data science lab/slide testo/DSML-Anomaly-Detection.pdf` (p. 2-7); esempio in `slide testo/anomaly-detection.ipynb` (sezione "Proximity-based methods").

## Prerequisiti
- [[Rilevamento di anomalie]]: il compito e il punteggio di anomalia
- [[K-nearest neighbor]]: ricerca dei $k$ vicini più prossimi

## Collegati
- [[DBSCAN]]: densità con soglia globale (`eps`) contro densità locale
