---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [scikit-learn, sklearn, estimator API, API degli estimatori, fit, predict, transform, fit_transform, fit_predict, predittori e trasformatori, predictors and transformers, features matrix, matrice delle feature, target array, iperparametri dell'estimatore]
tags: [competenza, area/data-ml]
---

# API degli estimatori di scikit-learn

> Schema comune con cui scikit-learn rappresenta ogni modello (classificatori, regressori, clustering, preprocessing): una classe con iperparametri, metodi `fit` e `predict`/`transform` e parametri appresi con nome terminante in `_`.

## Definizione / enunciato
- **Dati**: una **features matrix** 2-D NumPy di forma `(n_samples, n_features)` (righe = campioni, colonne = attributi), con valori reali o interi; le stringhe vanno prima convertite e i valori mancanti risolti (imputazione o rimozione). Per l'apprendimento supervisionato serve anche un **target array**, di solito 1-D di lunghezza `n_samples` (interi per le classi, reali per la regressione; 2-D per modelli multi-output).
- **Estimatori**: classi Python che contengono gli **iperparametri** (scelti dall'utente, con default sensati) e i **parametri appresi** dopo l'addestramento (per convenzione con il trattino basso finale, es. `feature_importances_`, `tree_`).
- **Schema d'uso**: (1) `from sklearn.[...] import ModelName`; (2) `model = ModelName(hyperparam1=value1, ...)`; (3) `model.fit(X_train, y_train)`; (4) `model.predict(...)` o `model.transform(...)`.
- **Predittori**: supportano `predict()` e/o `fit_predict()` (classificatori, regressori, rilevatori di outlier, algoritmi di clustering). **Trasformatori**: supportano `transform()` e/o `fit_transform()` e producono una nuova rappresentazione degli stessi dati (Min-Max scaling, PCA, discretizzatori, TF-IDF).

## Formule chiave
Regola d'oro del preprocessing (`10-ScikitLearn-Preprocessing.pdf` p. 4): i parametri del trasformatore si **apprendono solo sul training set**:
```python
minmax_s.fit(X_train)
X_test_norm = minmax_s.transform(X_test)      # corretto: [ [0.5 0.5] ]
X_test_wrong = minmax_s.fit_transform(X_test) # errato:   [ [0, 0] ]
```
con `X_train = [ [0,10],[0,20],[2,10],[2,20] ]`, `X_test = [ [1,15] ]`. Lo stesso vale per la PCA: `pca.fit_transform(X_train)`, poi solo `pca.transform(X_test)`.

## Intuizione
Un'interfaccia unica rende i modelli intercambiabili: cambiare algoritmo significa cambiare una riga. Separare `fit` da `transform`/`predict` rende esplicito quali informazioni vengono dal training set, così il test set resta davvero "non visto".

## Come si usa
Esempio delle slide: `clf = DecisionTreeClassifier(max_depth=10, min_impurity_decrease=0.01)`, `clf.fit(X_train, y_train)`, `y_pred = clf.predict(X_test)`. Algoritmi come `AgglomerativeClustering` e `DBSCAN` hanno solo `fit`/`fit_predict`: non possono assegnare un punto nuovo (`9-ScikitLearn-Clustering.pdf` p. 5). Scikit-learn non fa calcolo distribuito su più macchine né deep learning.

## Nei corsi
- **Data science lab** (magistrale): introduzione a scikit-learn nelle slide di classificazione, poi ripresa in regressione, clustering e preprocessing. Fonti: `magistrale/Data science lab/slide py/7-ScikitLearn-Classification.pdf` (p. 2-18); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 3-4, 19); `slide py/9-ScikitLearn-Clustering.pdf` (p. 2-5).

## Prerequisiti
- [[Indicizzazione di array NumPy]]: la features matrix è un array 2-D
- [[Tipi di attributo]]: gli attributi categorici vanno codificati in numeri

## Porta a
- [[Pipeline di scikit-learn]]: concatenazione di trasformatori e predittore
- [[Normalizzazione degli attributi]]: `MinMaxScaler` e `StandardScaler` come trasformatori
- [[Classificazione supervisionata]]: `fit` sul training set, `predict` sul test set

## Collegati
- [[Metodi di stima dell'accuratezza]]: `train_test_split`, `cross_val_score` lavorano su estimatori
