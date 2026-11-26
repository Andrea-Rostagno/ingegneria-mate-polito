---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Matematica per l'AI, Statistica computazionale, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["holdout", "cross-validation", "validazione incrociata", "leave-one-out", "stratified sampling", "metodi di stima", "n-fold cross-validation", "validation set", "ricerca a griglia", "grid search", "train_test_split"]
tags: [competenza, area/data-ml]
---

# Metodi di stima dell'accuratezza

> Tecniche per partizionare i dati etichettati in training, validazione e test (holdout, cross validation, bootstrap) e ottenere una stima affidabile delle prestazioni del modello.

## Definizione / enunciato
Obiettivo: una stima **affidabile** delle prestazioni, che dipendono anche da distribuzione delle classi, costo degli errori e dimensioni di training e test. La **learning curve** mostra come varia l'accuratezza con la dimensione del campione di training; un campione piccolo dà stime distorte e con alta varianza.

Tecniche di partizionamento:
- **Holdout**: partizione fissa, tipicamente 80% training e 20% test; adatto a dataset grandi; si può ripetere (*repeated holdout*).
- **Cross validation**: $k$ sottoinsiemi disgiunti (fold); si addestra su $k-1$ e si testa sul restante, per tutti i fold. Stima affidabile, non adatta a dataset molto grandi. **Leave-one-out**: $k=n$, solo per dataset molto piccoli.
- Partizioni generate con **campionamento stratificato** senza reinserimento, oppure **bootstrap** (con reinserimento).

## Formule chiave
Dimensioni tipiche: training 60%, validazione 20%, test 20% dei dati etichettati.

## Intuizione
Tre passi distinti: *training* (costruire il modello), *validazione* (tuning degli iperparametri, scelta dell'algoritmo), *test* (stima finale). Si usa l'holdout per separare training+validazione dal test e la cross validation per separare training e validazione.

## Come si usa
Domanda tipica: quale tecnica usare in base alla dimensione del dataset (holdout per dataset grandi, cross validation per medi, leave-one-out per piccolissimi) e perché il test set non va usato per il tuning.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Model evaluation" del mazzo di classificazione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 140-148).
- **Matematica per l'AI** (triennale): la cross-validation come metodo di **selezione del modello** (Mohri). Si divide $S$ in $S_1$ di taglia $(1-\alpha)m$ e $S_2$ di taglia $\alpha m$; per ogni $k$ si calcola $h^{S_1,k}_{\rm erm}$ (ERM su $S_1$ con $H_k$) e si sceglie $h_{\rm cv}=\arg\min_{h\in\{h^{S_1,k}_{\rm erm}:k\ge1\}}\hat R_{S_2}(h)$. **Bound:** per ogni $\alpha>0$ e $m\ge1$, $\Pr\big[\sup_{k\ge1}|R(h^{S_1,k}_{\rm erm})-\hat R(h^{S_1,k}_{\rm erm})|>\epsilon+\sqrt{\log k/(\alpha m)}\big]\le4\exp(-2\alpha m\epsilon^2)$. Se i dati etichettati sono pochi si usa la **n-fold cross-validation**; il caso $n=m$ è il leave-one-out. Nei laboratori (Della Santa): training, validation e test set con `train_test_split`, **ricerca a griglia** degli iperparametri delle SVM (`GridSearchCV`), e in `SVMandGridSearch.ipynb` il validation set come previsione delle prestazioni sul test set; per le reti neurali il validation set serve al criterio di arresto. Fonti: `triennale/ANNO 3/matematica AI/ERM_SRM_CV.pdf` (p. 21-24); `FML.pdf` §4.4-4.5; `SVMandGridSearch.ipynb`, `DimReduction_wine.ipynb`.
- **Statistica computazionale** (magistrale): **cross validation** per modelli bayesiani, alternativa ai criteri informazionali: si dividono i dati in $\mathbf y_{obs}$ e $\mathbf y_0=(y_{0,1},\dots,y_{0,m})$, si stima la posteriori con $\mathbf y_{obs}$, si prevede $\mathbf y_0$ dalla predittiva (o trattandolo come dato mancante, con lo stesso risultato) e si confronta con i valori veri tramite MSE $\frac1m\sum_j(y_{0,j}-\hat y_{0,j})^2$, errore assoluto medio o, più correttamente, il CRPS. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 48, 51-54).
- **Business intelligence per big data** (magistrale): stessa sezione "Model evaluation" (holdout tipicamente 80/20 e ripetuto, cross-validation k-fold, leave-one-out per dataset molto piccoli, campionamento stratificato senza reinserimento, bootstrap con reinserimento; fasi di training, validazione per iperparametri e scelta dell'algoritmo, test), più la **learning curve**: come varia l'accuratezza con la dimensione del training set, costruita con un piano di campionamento aritmetico o geometrico; con pochi campioni la stima ha bias e varianza. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 143-151).
- **Data science lab** (magistrale): testare sul training non è significativo; **hold-out** (es. 80/20, adatto a dataset grandi, eventualmente ripetuto), **k-fold cross-validation** (affidabile, non per dataset molto grandi), **leave-one-out** ($k=n$, solo per dataset molto piccoli); ripartizione tipica 60/20/20 fra training, validazione e test (vedi [[Ottimizzazione degli iperparametri]]); curva di apprendimento (accuratezza al variare della dimensione del training). In scikit-learn: `train_test_split(X, y, test_size=0.2)`; `KFold(n_splits=3, shuffle=True)` con `kfold.split(X, y)` che restituisce gli indici di training e test; `cross_val_score(clf, X, y, cv=5, scoring='accuracy')` (un punteggio per fold, **non mescola** i dati); `cross_val_predict` (le predizioni di ogni fold, da valutare insieme: il risultato differisce dalla media dei punteggi). Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 89-98, 107); `slide py/7-ScikitLearn-Classification.pdf` (p. 21, 27-33).

## Prerequisiti
- [[Campionamento]]: partizione casuale in training e test
- [[Classificazione supervisionata]]: valutare il modello
- [[Overfitting e pruning]]: stima dell'errore di generalizzazione

## Porta a
- Nessuno.
- [[Continuous ranked probability score]]: punteggio per confrontare la predittiva con i dati tenuti da parte (Statistica computazionale)

## Collegati
- [[Metriche di valutazione della classificazione]]: procedura e misura della valutazione
- [[Curva ROC]]: confronto tra modelli
- [[Empirical risk minimization]]: la cross-validation sceglie fra soluzioni ERM delle classi $H_k$ (Matematica per l'AI)
- [[Structural risk minimization]]: alternativa a SRM per la selezione del modello (Matematica per l'AI)
- [[Discesa stocastica del gradiente]]: il validation set come criterio di arresto (Matematica per l'AI)
