---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [Pipeline, make_pipeline, sklearn.pipeline, ColumnTransformer, trasformazione per colonne, column-wise transformation, mixed pipelines, pipeline miste, pipeline di data science]
tags: [competenza, area/data-ml]
---

# Pipeline di scikit-learn

> Oggetti che concatenano più passi di scikit-learn in un unico estimatore: una `Pipeline` mette in fila $N-1$ trasformatori e un predittore finale, un `ColumnTransformer` applica trasformazioni diverse a colonne diverse.

## Definizione / enunciato
- **Pipeline**: "oggetti che permettono di concatenare più modelli scikit-learn", con $N-1$ **trasformatori** e **1 predittore finale** (`8-ScikitLearn-Regression.pdf` p. 8). `make_pipeline(...)` la costruisce; `fit` addestra in sequenza (ogni trasformatore con `fit_transform`, il predittore con `fit`), `predict` applica le trasformazioni apprese e poi il predittore.
- **ColumnTransformer** (`10-ScikitLearn-Preprocessing.pdf` p. 9-10): colonne di tipo diverso (numeriche, nominali, ordinali) richiedono preprocessing diverso; per ogni gruppo di colonne si indica un nome, un trasformatore e gli indici. Le colonne non citate sono eliminate (`remainder="drop"`) o lasciate come sono (`remainder="passthrough"`).

## Formule chiave
Esempi delle slide:
```python
reg = make_pipeline(PolynomialFeatures(5), LinearRegression())
reg.fit(X_train, y_train)
y_test_pred = reg.predict(X_test)

preprocessor = ColumnTransformer(transformers=[
    ('num', StandardScaler(), [0, 1]),
    ('cat', OneHotEncoder(handle_unknown='ignore', sparse_output=False), [3]),
    ('ord', OrdinalEncoder(categories=[["Low","Med","High"], ["Type1","Type2"]]), [4, 5])
], remainder='passthrough')
```
(nella slide di regressione la seconda riga è scritta `ret.predict`, refuso per `reg`).

## Intuizione
Una pipeline è un solo estimatore: si passa intera a `cross_val_score` o `GridSearchCV`, e così ogni passo di preprocessing viene riaddestrato **solo sulla parte di training** di ciascuna iterazione, senza fughe di informazione dal test. Il `ColumnTransformer` risolve il problema pratico dei dataset misti, dove `OneHotEncoder` codificherebbe anche i numeri.

## Come si usa
Pipeline tipica del corso: imputazione dei mancanti, scaling delle numeriche, one-hot delle nominali, ordinal encoding delle ordinali (ColumnTransformer), poi PCA o feature polinomiali, poi il modello. Il corso cita fra le novità d'esame un esercizio di "implementazione di una semplice pipeline di data science" (`0-course-intro.pdf` p. 7).

## Nei corsi
- **Data science lab** (magistrale): "Mixed pipelines" nelle slide di preprocessing e `make_pipeline` nella regressione polinomiale. Fonti: `magistrale/Data science lab/slide py/10-ScikitLearn-Preprocessing.pdf` (p. 7-10); `slide py/8-ScikitLearn-Regression.pdf` (p. 8).

## Prerequisiti
- [[API degli estimatori di scikit-learn]]: trasformatori e predittori
- [[Codifica delle variabili categoriche]]: `OneHotEncoder` e `OrdinalEncoder` dentro il ColumnTransformer

## Porta a
- [[Regressione polinomiale]]: `make_pipeline(PolynomialFeatures, LinearRegression)`

## Collegati
- [[Normalizzazione degli attributi]]: `StandardScaler` come passo della pipeline
