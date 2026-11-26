---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Modelli statistici, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["ROC curve", "Receiver Operating Characteristic", "AUC", "true positive rate", "false positive rate"]
tags: [competenza, area/data-ml]
---

# Curva ROC

> Grafico del tasso di veri positivi contro il tasso di falsi positivi al variare della soglia di un classificatore, usato per confrontare modelli.

## Definizione / enunciato
La curva **ROC** (Receiver Operating Characteristic, anni '50, teoria della rilevazione dei segnali) descrive il compromesso tra successi positivi e falsi allarmi: TPR sull'asse $y$ contro FPR sull'asse $x$.

Punti notevoli $(FPR,TPR)$: $(0,0)$ dichiara tutto negativo; $(1,1)$ dichiara tutto positivo; $(0,1)$ è ideale; la diagonale corrisponde a una scelta casuale; sotto la diagonale la predizione è opposta alla classe vera.

## Formule chiave
$$TPR=\frac{TP}{TP+FN},\qquad FPR=\frac{FP}{FP+TN}$$
Area sotto la curva: 1.0 per il modello ideale, 0.5 per la scelta casuale.

## Intuizione
**Costruzione**: serve un classificatore che dia per ogni istanza di test la probabilità a posteriori $P(+|A)$; si ordinano le istanze per $P(+|A)$ decrescente, si applica una soglia a ogni valore distinto e si contano TP, FP, TN, FN.

## Come si usa
Esempio delle slide (10 istanze, 5 positive e 5 negative): con soglia 0.25 tutto è positivo, TP=5, FP=5, $(FPR,TPR)=(1,1)$; con soglia 0.76 TP=3, FP=4, $(0.8,0.6)$; con soglia 0.93 TP=2, FP=0, $(0,0.4)$; con soglia 1.00 $(0,0)$. Confronto tra modelli: nessuno domina sempre; $M_1$ è migliore per FPR piccolo, $M_2$ per FPR grande; l'area sotto la curva riassume il confronto.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): parte finale del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 140, 156-160).
- **Modelli statistici** (magistrale): per un classificatore con punteggi $\hat\pi_i$ (regressione logistica), curva dei punti $(1-\text{specificità}(c),\ \text{sensibilità}(c))$ al variare della soglia $c$ da 1 a 0, da $(0,0)$ a $(1,1)$, punto ideale $(0,1)$; AUC come area sotto la curva (libro, cap. 17, Def. 17.14). Taglio cesareo: con soglia 0.5 accuratezza 0.655, sensibilità 0.69, specificità 0.62; AUC 0.721 con la regola dei trapezi, calcolata a mano con un ciclo sulle soglie. Fonti: `Libri/Modelli statistici/capitoli/cap17.tex` (§17.6, p. 295); codice `magistrale/Modelli statistici/codici/251211 regressione logistica.R`.
- **Business intelligence per big data** (magistrale): stesse slide (costruzione della curva ROC e confronto fra modelli). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 159-163).
- **Data science lab** (magistrale): TPR $=TP/P=TP/(TP+FN)$ in ordinata contro FPR $=FP/N=FP/(FP+TN)$ in ascissa; la curva si ottiene variando la soglia $\tau$ su $P(+|x)$ (predire "+" se $P(+|x)>\tau$); punti notevoli $(0,0)$, $(1,1)$, $(0,1)$ ideale, diagonale = scelta casuale (area 0.5), sotto la diagonale predizioni opposte alla classe vera. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 108-113).

## Prerequisiti
- [[Metriche di valutazione della classificazione]]: TPR e FPR dalla matrice di confusione
- [[Regressione logistica]]: punteggi $\hat\pi_i$ da classificare con una soglia (Modelli statistici)
- [[Formula di Bayes]]: sensibilità e specificità come nello screening diagnostico (Modelli statistici)

## Porta a
- Nessuno.

## Collegati
- [[Metodi di stima dell'accuratezza]]: confronto tra modelli
