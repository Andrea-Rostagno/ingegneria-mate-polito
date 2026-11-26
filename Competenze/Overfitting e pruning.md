---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["overfitting", "underfitting", "pruning", "pre-pruning", "post-pruning", "potatura"]
tags: [competenza, area/data-ml]
---

# Overfitting e pruning

> L'overfitting è l'adattamento eccessivo del modello al training set; il pruning, preventivo o successivo, lo contrasta semplificando l'albero.

## Definizione / enunciato
- **Underfitting**: modello troppo semplice, errori alti sia sul training sia sul test.
- **Overfitting**: il modello continua a ridurre l'errore di training mentre l'errore di test cresce; ad esempio il confine di decisione è distorto da un punto di rumore.

**Pre-pruning** (regola di arresto anticipato): si ferma la crescita prima dell'albero completo. Condizioni tipiche: tutte le istanze della stessa classe, tutti gli attributi uguali. Condizioni più restrittive: numero di istanze sotto una soglia dell'utente; distribuzione di classe indipendente dalle feature (es. test $\chi^2$); espansione che non migliora l'impurità (Gini o information gain).

**Post-pruning**: si fa crescere l'albero completo e lo si pota dal basso; se l'**errore di generalizzazione** migliora, il sottoalbero è sostituito da una foglia con la classe maggioritaria delle sue istanze.

## Formule chiave
Nessuna formula nelle slide: il grafico mostra errore di training e di test al crescere del numero di nodi.

## Intuizione
Un albero molto profondo "memorizza" anche il rumore e le foglie con pochi record (frammentazione dei dati). Potare scambia un po' di accuratezza sul training con una migliore accuratezza su dati nuovi.

## Come si usa
Domanda tipica: spiegare la differenza tra pre- e post-pruning e quando conviene ciascuno. Per decidere se potare serve una stima dell'errore di generalizzazione, cioè una partizione dei dati in training, validazione e test.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Underfitting and Overfitting" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 42-47).
- **Business intelligence per big data** (magistrale): stesse slide su underfitting, overfitting dovuto al rumore e rimedi (pre- e post-pruning); nel mazzo di regressione l'overfitting dei polinomi di grado alto si combatte con più dati, meno complessità e regolarizzazione (Ridge, Lasso). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 43-46); `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 23-24).
- **Data science lab** (magistrale): overfitting e pruning degli alberi nel mazzo di classificazione; nel mazzo di regressione la versione generale: **overfitting** = modello troppo complesso che aderisce troppo al training (alta varianza, prestazioni scarse sul test), **underfitting** = modello troppo semplice (alto bias, prestazioni scarse su training e test); rimedi: ridurre la capacità (es. il grado di una [[Regressione polinomiale]]), aumentare i dati, regolarizzare. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 43-52); `slide testo/10-DMRegression.pdf` (p. 17-19).

## Prerequisiti
- [[Albero di decisione]]: alberi troppo profondi

## Porta a
- [[Metodi di stima dell'accuratezza]]: stima dell'errore di generalizzazione

## Collegati
- Nessuno.
