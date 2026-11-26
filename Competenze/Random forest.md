---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["foresta casuale", "ensemble di alberi", "bagging"]
tags: [competenza, area/data-ml]
---

# Random forest

> Metodo ensemble che combina molti alberi di decisione, addestrati su campioni bootstrap e su sottoinsiemi casuali di feature, con voto di maggioranza.

## Definizione / enunciato
Tecnica di **ensemble learning**: più modelli di base sono combinati per migliorare accuratezza e stabilità ed evitare l'overfitting. Una random forest è un insieme di alberi di decisione costruiti in training; la classe è assegnata a **maggioranza**.

- **Bootstrap aggregation (bagging)**: dato un training set $D$ di $n$ istanze, si estrae $B$ volte un campione **con reinserimento** di $n'\le n$ esempi, ottenendo $D_b$, e si addestra un albero su ciascuno.
- **Feature bagging**: a ogni split candidato si sceglie un sottoinsieme casuale delle feature, così alberi diversi usano attributi diversi e risultano **decorrelati**.

## Formule chiave
Algoritmo (training set $D$, $n$ istanze, $p$ feature): per $b=1,\dots,B$: estrai con reinserimento $n'$ esempi $\to D_b$; addestra un albero su $D_b$, scegliendo a ogni split $m\ll p$ feature casuali (tipicamente $m\approx\sqrt p$) e il migliore split fra queste. Classe = voto di maggioranza fra le $B$ predizioni.

## Intuizione
Ogni albero sbaglia in modo diverso; mediando molti alberi poco correlati gli errori si compensano. Si perde però l'interpretabilità del singolo albero.

## Come si usa
Valutazione delle slide: accuratezza più alta degli alberi; costruzione veloce e classificazione molto veloce; modello e predizioni non interpretabili (una predizione può venire da centinaia di alberi), ma fornisce l'**importanza globale delle feature**; scalabile; robusta a rumore e outlier; non incrementale.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Random Forest" del mazzo di classificazione (bibliografia: Hastie, Tibshirani, Friedman). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 52-58).
- **Business intelligence per big data** (magistrale): stesse slide (bootstrap aggregation, feature bagging, riepilogo dell'algoritmo, valutazione); nel mazzo sulle serie storiche è citato anche come regressore per la previsione. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 52-58); `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (p. 18).
- **Data science lab** (magistrale): ensemble di alberi con voto di maggioranza, bootstrap aggregation ($B$ campioni con reinserimento di $n'\le n$ esempi), feature bagging (circa $\sqrt p$ feature casuali per ogni split, alberi decorrelati), valutazione (più accurata di un albero, non interpretabile ma con importanza globale delle feature, non incrementale, veloce). Per la regressione si **media** l'output degli alberi regressori (`10-DMRegression.pdf` p. 23). Un ensemble di alberi casuali non supervisionato è l'[[Isolation forest]]. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 53-59).

## Prerequisiti
- [[Campionamento]]: campioni bootstrap per ogni albero
- [[Albero di decisione]]: insieme di alberi

## Porta a
- Nessuno.

## Collegati
- Nessuno.
