---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [hyperparameter tuning, hyperparameter optimization, scelta degli iperparametri, selezione degli iperparametri, iperparametri e parametri, ricerca casuale, randomized search, ottimizzazione bayesiana, Bayesian optimization, GridSearchCV, RandomizedSearchCV, ParameterGrid, BayesSearchCV, validazione del modello]
tags: [competenza, area/data-ml]
---

# Ottimizzazione degli iperparametri

> Scelta, usando un insieme di validazione (o la cross-validation), dei valori degli **iperparametri** di un algoritmo: le strategie del corso sono ricerca manuale, a griglia, casuale e ottimizzazione bayesiana.

## Definizione / enunciato
Gli **iperparametri** sono scelti dall'utente (es. profondità massima di un albero, $K$ del KNN, `alpha` di Ridge); i **parametri** sono calcolati dall'algoritmo durante l'addestramento. La stima delle prestazioni si divide in tre fasi: **addestramento** (costruzione del modello), **validazione** (taratura degli iperparametri, scelta dell'algoritmo), **test** (stima finale delle prestazioni) (`8-DMClassification.pdf` p. 93-94). Gli iperparametri **non** si scelgono guardando il test set: si farebbe overfitting del test set (`8-ScikitLearn-Regression.pdf` p. 11).
- **Grid search**: per ogni iperparametro un insieme di valori candidati, si addestrano tutte le configurazioni del prodotto cartesiano. Costosa ma parallelizzabile; garantisce il migliore fra i candidati.
- **Randomized search**: si fissa un *budget* (quanti modelli provare) e si campiona a caso un sottoinsieme delle configurazioni. Economica e parallelizzabile, ma può non trovare il migliore e non impara dai risultati precedenti.
- **Ottimizzazione bayesiana**: cerca il massimo di una funzione obiettivo costosa e a scatola nera (configurazione $\to$ prestazione), stimandone i valori con incertezza e provando le configurazioni che promettono un miglioramento, con un compromesso esplorazione/sfruttamento. Più efficiente perché usa l'informazione passata, ma non facilmente parallelizzabile e con il costo del modello surrogato.

## Formule chiave
Esempio delle slide (p. 95-97), KNN con iperparametri $K\in\{1,2,3,4,5\}$ e distanza $\in\{\text{coseno}, L_1, L_2\}$: la grid search prova $5\cdot 3=15$ configurazioni; random search e ottimizzazione bayesiana ne provano 5 (budget scelto dall'utente).

Ripartizione tipica (p. 98): training 60%, validazione 20%, test 20% dei dati etichettati; hold-out per separare (training+validazione) dal test, cross-validation per separare training e validazione.

## Intuizione
Il test set deve restare l'ultima, onesta stima delle prestazioni; la scelta degli iperparametri è essa stessa una forma di apprendimento e va fatta su dati diversi.

## Come si usa
In scikit-learn (`8-ScikitLearn-Regression.pdf` p. 12-15): si definisce `param_grid = {'alpha': [0.1, 0.2], 'fit_intercept': [True, False]}` (4 combinazioni, enumerate da `ParameterGrid`), poi `GridSearchCV(Ridge(), param_grid, scoring='r2', cv=5).fit(X_train, y_train)`; `n_jobs=-1` usa tutti i processori; il risultato è in `best_params_` e `best_estimator_`, quest'ultimo riaddestrato su tutto il dataset passato a `fit`. `RandomizedSearchCV` aggiunge `n_iter`; `BayesSearchCV` sta in scikit-optimize.

## Nei corsi
- **Data science lab** (magistrale): "Model validation" nel mazzo di classificazione (parte di Giobergia) e "Hyperparameters selection" nelle slide di regressione con scikit-learn. Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 93-98); `slide py/8-ScikitLearn-Regression.pdf` (p. 11-15).

## Prerequisiti
- [[Metodi di stima dell'accuratezza]]: hold-out, validation set e k-fold cross-validation

## Collegati
- [[Ottimizzazione surrogata]]: l'ottimizzazione bayesiana è un metodo con modello surrogato di una funzione costosa
- [[K-nearest neighbor]]: esempio delle slide ($K$ e distanza come iperparametri)
- [[Regressione regolarizzata]]: `alpha` di Ridge scelto con `GridSearchCV`
