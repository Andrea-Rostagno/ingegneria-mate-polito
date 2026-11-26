---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["classification", "training set", "test set", "etichetta di classe", "criteri di valutazione dei classificatori"]
tags: [competenza, area/data-ml]
---

# Classificazione supervisionata

> Tecnica che, da oggetti già etichettati con una classe, costruisce un modello capace di assegnare la classe giusta a oggetti nuovi.

## Definizione / enunciato
**Dati**: un insieme di etichette di classe e una collezione di oggetti etichettati. **Obiettivo**: trovare un profilo descrittivo di ogni classe che permetta di assegnare gli oggetti non etichettati alla classe appropriata. Gli scopi sono due: predire l'etichetta e ottenere un modello interpretabile del fenomeno.

- **Training set**: oggetti etichettati usati per apprendere il modello.
- **Test set**: oggetti etichettati usati per validarlo.

Tecniche viste nel corso: alberi di decisione, regole di classificazione, regole di associazione, reti neurali, Naive Bayes e reti bayesiane, k-NN, SVM.

## Formule chiave
Nessuna formula generale; le misure di valutazione sono nelle note dedicate.

## Intuizione
Il processo ha due fasi: *apprendimento* (training data $\to$ modello) e *applicazione* (dati non classificati $\to$ modello $\to$ dati classificati). È "supervisionata" perché le etichette del training guidano l'apprendimento, a differenza del clustering.

## Come si usa
Applicazioni delle slide: propensione di un cliente ad abbandonare l'azienda (churn), rilevamento di frodi, classificazione di patologie. Ogni tecnica del corso è valutata con la stessa griglia, utile per le domande di confronto:
- **accuratezza** (qualità della predizione);
- **interpretabilità** (del modello, compattezza);
- **incrementalità** (aggiornamento con nuovi record etichettati);
- **efficienza** (tempo di costruzione e di classificazione);
- **scalabilità** (dimensione del training set, numero di attributi);
- **robustezza** (rumore, dati mancanti).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): apertura del mazzo "Classification fundamentals" (E. Baralis). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 2-7); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (p. 37).
- **Business intelligence per big data** (magistrale): stesso mazzo "Classification fundamentals" (Baralis): definizione, tecniche e criteri di valutazione (accuratezza, interpretabilità, incrementalità, efficienza, scalabilità, robustezza). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 2-7; i numeri di pagina sono del PDF, quelli stampati sulle slide sono spostati fino a 4).
- **Data science lab** (magistrale): definizione, training e test set, tecniche e criteri di valutazione (accuratezza, interpretabilità, incrementalità, efficienza, scalabilità, robustezza) dal mazzo di Baralis; in laboratorio la classificazione con scikit-learn: dalla features matrix `X` (`n_samples, n_features`) si predice `y_pred` di forma `(n_samples,)`, con `clf.fit(X_train, y_train)` e `clf.predict(X_test)` ([[API degli estimatori di scikit-learn]]). Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 2-7); `slide py/7-ScikitLearn-Classification.pdf` (p. 14-18).

## Prerequisiti
- [[Processo KDD]]: tecnica di data mining

## Porta a
- [[Albero di decisione]]: un modello di classificazione
- [[Classificatori basati su regole]]: un modello di classificazione
- [[K-nearest neighbor]]: un modello di classificazione
- [[Classificatore bayesiano]]: un modello di classificazione
- [[Support vector machine]]: un modello di classificazione
- [[Rete neurale artificiale]]: un modello di classificazione
- [[Metodi di stima dell'accuratezza]]: valutare il modello
- [[Metriche di valutazione della classificazione]]: valutare il modello

## Collegati
- [[Feature selection]]: attributi rilevanti per il classificatore
