---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["KNN", "k-NN", "k vicini più vicini", "instance-based", "lazy learner"]
tags: [competenza, area/data-ml]
---

# K-nearest neighbor

> Classificatore basato sulle istanze che assegna a un record la classe maggioritaria fra i suoi $k$ vicini più prossimi nel training set.

## Definizione / enunciato
I classificatori **instance-based** memorizzano i record di training e li usano direttamente per predire la classe di casi nuovi (il *rote-learner* classifica solo se il record coincide esattamente con un esempio). Il **k-NN** richiede: l'insieme dei record memorizzati, una **metrica di distanza** e il valore di $k$.

Per classificare un record ignoto: si calcola la distanza dai record di training, si individuano i $k$ più vicini (i punti con le $k$ distanze minori) e se ne usano le etichette, ad esempio con voto di maggioranza.

## Formule chiave
$$d(p,q)=\sqrt{\sum_i (p_i-q_i)^2}$$
Voto pesato con la distanza: peso $w=1/d^2$.

## Intuizione
Con $k$ troppo piccolo il classificatore è sensibile ai punti di rumore; con $k$ troppo grande il vicinato include punti di altre classi. Per $k=1$ le regioni di decisione formano un diagramma di Voronoi.

## Come si usa
Accorgimenti delle slide: **normalizzare** i domini degli attributi (altezza 1.5-2.0 m contro reddito da 10K a 1M dollari) e attenzione alla maledizione della dimensionalità. Valutazione: accuratezza comparabile su dataset semplici; (quasi) nessuna costruzione del modello ma classificazione lenta; modello non interpretabile ma la singola predizione è "descritta" dai vicini; incrementale; poco scalabile; il training set deve essere disponibile; robustezza dipendente dal calcolo delle distanze.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "K-Nearest Neighbor" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 74-83).
- **Business intelligence per big data** (magistrale): stessa sezione "K-Nearest Neighbor" (classificatori instance-based, definizione del vicino più vicino, 1-NN, valutazione); citato anche fra gli approcci alternativi di regressione. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 74-83); `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (p. 3).
- **Data science lab** (magistrale): classificatori instance-based, scelta di $k$, normalizzazione degli attributi e maledizione della dimensionalità; in regressione la predizione è la media (eventualmente pesata) dei "voti" dei vicini (`10-DMRegression.pdf` p. 23). Nel laboratorio i vicini servono anche a imputare valori ([[Imputazione dei valori mancanti]]) e a stimare la densità locale ([[Local Outlier Factor]]); $K$ e la distanza sono l'esempio di [[Ottimizzazione degli iperparametri]]. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 60-69).

## Prerequisiti
- [[Misure di distanza]]: vicini scelti per distanza
- [[Classificazione supervisionata]]: un modello di classificazione

## Porta a
- Nessuno.

## Collegati
- Nessuno.
