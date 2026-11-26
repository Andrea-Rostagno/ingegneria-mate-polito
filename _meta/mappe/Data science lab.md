---
tipo: meta
tags: [meta, mappa]
corso: Data science lab
livello: magistrale
cartella: magistrale/Data science lab
---

# Mappa delle competenze: Data science lab

Mappa concettuale del corso `magistrale/Data science lab` (Data Science & Machine Learning Lab, Politecnico di Torino, DBDMG, A.A. 2025/26; docenti F. Giobergia, A. Pasini; slide di teoria di E. Baralis, T. Cerquitelli, S. Chiusano). **71 competenze: 17 nuove e 54 esistenti estese** con un punto "Data science lab" nella sezione "Nei corsi". I nomi sono in testo semplice (non wikilink), così la mappa non entra nel grafo. Le note esistenti sono segnate `(esistente)`.

**Fonti.**
- **Primarie (slide di teoria)**, cartella `slide testo/`: `0-course-intro.pdf`, `1-DSML-intro.pdf`, `2-DMPreProc.pdf`, `7-DMassrules.pdf`, `8-DMClassification.pdf`, `9-DMClustering.pdf`, `10-DMRegression.pdf`, `DSML-Anomaly-Detection.pdf`, `DSML-Deep-Learning-Intro.pdf`.
- **Primarie (slide di laboratorio Python)**, cartella `slide py/`: `4-Numpy.pdf`, `5-Pandas.pdf`, `6-Matplotlib.pdf`, `7-ScikitLearn-Classification.pdf`, `8-ScikitLearn-Regression.pdf`, `9-ScikitLearn-Clustering.pdf`, `10-ScikitLearn-Preprocessing.pdf`, `11-PyTorch.pdf`.
- **Notebook del docente usato per il testo**: `slide testo/anomaly-detection.ipynb` (Giobergia): sta fra le slide di teoria e contiene la tassonomia delle anomalie e dei metodi che il PDF di 9 pagine non ha; le sue celle di testo sono usate come fonte per "Rilevamento di anomalie", le celle di codice solo come esempi.
- **Solo esempi di codice**: `codici/4-NumPy_tutorial.ipynb`, `codici/5-Pandas_tutorial.ipynb`, `codici/6-Matplotlib_tutorial.ipynb`.
- **Scartati (non fonti)**: tutta la cartella `esame/` (consegna del progetto, regole d'esame, `project.ipynb`); `codici/Lab09.ipynb` e `codici/lab1.ipynb` (laboratori svolti, accanto ai CSV di sottomissione); `codici/DSML_lab_riassunto_teoria_pratica.ipynb` (riassunto dell'utente, usato solo per l'ordine degli argomenti); `codici/dev/`, `codici/eval/` e tutti i dataset (`.csv`).

**Convenzione sulle pagine**: "p." indica sempre la pagina del PDF (indice del file), non il numero stampato sulla slide; nei mazzi di teoria i due numeri differiscono (es. `2-DMPreProc.pdf` p. 73 porta stampato 74).

Testo estratto con `pdftotext -layout` e `pymupdf`; formule lette sulle pagine renderizzate di `10-DMRegression.pdf` (p. 4-14, 20), `DSML-Deep-Learning-Intro.pdf` (p. 3, 6, 12-13, 15-19, 23-26), `DSML-Anomaly-Detection.pdf` (p. 3, 5, 8, 9), `2-DMPreProc.pdf` (p. 60, 73, 96), `10-ScikitLearn-Preprocessing.pdf` (p. 22).

Regola delle aree: le tecniche di data mining, machine learning e deep learning sono `data-ml`; le competenze sulle librerie (NumPy, pandas, Matplotlib, PyTorch come strumento) sono `informatica`.

## Introduzione e Python per la data science

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Processo KDD** (esistente) | data-ml | — | `1-DSML-intro.pdf` p. 5-7 | — | Tipi di attributo | — |
| **DataFrame di pandas** (esistente) | informatica | — | `5-Pandas.pdf`; `4-Numpy.pdf` | — | Indicizzazione di array NumPy, Indicizzazione in pandas, Merge di DataFrame | — |
| **Broadcasting** | informatica | broadcasting di NumPy; regole del broadcasting; ufunc | `4-Numpy.pdf` p. 38-42 | DataFrame di pandas | Normalizzazione degli attributi, Indicizzazione in pandas | Indicizzazione di array NumPy |
| **Indicizzazione di array NumPy** | informatica | slicing; masking; fancy indexing; viste e copie | `4-Numpy.pdf` p. 43-64 | DataFrame di pandas | Indicizzazione in pandas, Grafici con Matplotlib, API degli estimatori di scikit-learn | Broadcasting, Alias e copia di liste |
| **Indicizzazione in pandas** | informatica | loc; iloc; allineamento degli indici; Series | `5-Pandas.pdf` p. 3-47 | DataFrame di pandas, Indicizzazione di array NumPy | Raggruppamento e tabelle pivot in pandas, Imputazione dei valori mancanti | Broadcasting |
| **Raggruppamento e tabelle pivot in pandas** | informatica | groupby; pivot_table; MultiIndex; stack; unstack | `5-Pandas.pdf` p. 64-90 | Indicizzazione in pandas | — | GROUP BY e HAVING, Merge di DataFrame |
| **Merge di DataFrame** | informatica | pd.merge; pd.concat; join di DataFrame | `5-Pandas.pdf` p. 54-63 | DataFrame di pandas | — | Join relazionale, Raggruppamento e tabelle pivot in pandas |
| **Grafici con Matplotlib** | informatica | Figure; Axes; subplots; scatter; istogramma | `6-Matplotlib.pdf` | Indicizzazione di array NumPy | Varianza spiegata | Coefficiente di correlazione |

## Preprocessing dei dati

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Tipi di attributo** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 3-18 | Processo KDD | Preprocessing dei documenti, API degli estimatori di scikit-learn | — |
| **Qualità dei dati** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 19-25 | — | Imputazione dei valori mancanti, Rilevamento di anomalie | — |
| **Campionamento** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 27-35 | — | — | — |
| **Riduzione della dimensionalità** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 36-39 | — | — | — |
| **Analisi delle componenti principali** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 38; `10-ScikitLearn-Preprocessing.pdf` p. 15-19 | — | — | Autoencoder |
| **Varianza spiegata** (esistente) | data-ml | — | `10-ScikitLearn-Preprocessing.pdf` p. 18 | — | — | Grafici con Matplotlib |
| **Feature selection** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 40-43 | — | — | — |
| **Discretizzazione** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 44-53 | — | — | — |
| **Normalizzazione degli attributi** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 54-57; `10-ScikitLearn-Preprocessing.pdf` p. 3-4 | Broadcasting, API degli estimatori di scikit-learn | Rilevamento di anomalie | Pipeline di scikit-learn |
| **Misure di distanza** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 76-89 | — | Imputazione dei valori mancanti | Rilevamento di anomalie |
| **Misure di similarità** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 90-94 | — | — | Vector space model |
| **Coefficiente di correlazione** (esistente) | probabilita | — | `2-DMPreProc.pdf` p. 95-99 | — | — | Grafici con Matplotlib |
| **Codifica delle variabili categoriche** (esistente) | data-ml | — | `10-ScikitLearn-Preprocessing.pdf` p. 5-10 | — | Pipeline di scikit-learn | — |
| **API degli estimatori di scikit-learn** | data-ml | estimator API; fit; predict; transform; fit_transform; predittori e trasformatori; features matrix; target array | `7-ScikitLearn-Classification.pdf` p. 2-14 | Indicizzazione di array NumPy, Tipi di attributo | Pipeline di scikit-learn, Normalizzazione degli attributi, Classificazione supervisionata | Metodi di stima dell'accuratezza |
| **Pipeline di scikit-learn** | data-ml | Pipeline; make_pipeline; ColumnTransformer; pipeline miste | `10-ScikitLearn-Preprocessing.pdf` p. 9-10; `8-ScikitLearn-Regression.pdf` p. 8 | API degli estimatori di scikit-learn, Codifica delle variabili categoriche | Regressione polinomiale | Normalizzazione degli attributi |
| **Imputazione dei valori mancanti** | data-ml | missing values imputation; SimpleImputer; KNNImputer; dropna; fillna; distanza euclidea NaN-aware | `10-ScikitLearn-Preprocessing.pdf` p. 20-23; `5-Pandas.pdf` p. 46-53 | Qualità dei dati, Misure di distanza | — | K-nearest neighbor, Indicizzazione in pandas |
| **Preprocessing dei documenti** (esistente) | data-ml | — | `2-DMPreProc.pdf` p. 58-66 | Tipi di attributo | Vector space model | Analisi del testo |
| **Vector space model** (esistente) | informatica | — | `2-DMPreProc.pdf` p. 67-72; `10-ScikitLearn-Preprocessing.pdf` p. 11 | Preprocessing dei documenti | TF-IDF | Misure di similarità |
| **TF-IDF** (esistente) | informatica | — | `2-DMPreProc.pdf` p. 73-74; `10-ScikitLearn-Preprocessing.pdf` p. 12-14 | Vector space model | — | — |

## Regole di associazione

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Regola di associazione** (esistente) | data-ml | — | `7-DMassrules.pdf` p. 1-14 | — | — | — |
| **Algoritmo Apriori** (esistente) | data-ml | — | `7-DMassrules.pdf` p. 15-40 | — | — | — |
| **FP-growth** (esistente) | data-ml | — | `7-DMassrules.pdf` p. 41-72 | — | — | — |
| **Itemset massimali e chiusi** (esistente) | data-ml | — | `7-DMassrules.pdf` p. 73-80 | — | — | — |
| **Misure di interesse delle regole** (esistente) | data-ml | — | `7-DMassrules.pdf` p. 81-87 | — | — | — |
| **Regole di associazione generalizzate** (esistente) | data-ml | — | `7-DMassrules.pdf` p. 88-98 | — | — | — |

## Classificazione

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Classificazione supervisionata** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 2-7; `7-ScikitLearn-Classification.pdf` | API degli estimatori di scikit-learn | — | — |
| **Albero di decisione** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 8-52; `10-DMRegression.pdf` p. 22 | — | Isolation forest | — |
| **Misure di impurità** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 28-46 | — | — | — |
| **Overfitting e pruning** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 43-52; `10-DMRegression.pdf` p. 17-19 | — | — | Regressione polinomiale |
| **Random forest** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 53-59 | — | Isolation forest | — |
| **K-nearest neighbor** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 60-69 | — | Local Outlier Factor | Imputazione dei valori mancanti, Ottimizzazione degli iperparametri |
| **Classificatore bayesiano** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 70-77 | — | — | — |
| **Support vector machine** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 78-87 | — | — | — |
| **Metodi di stima dell'accuratezza** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 89-98; `7-ScikitLearn-Classification.pdf` p. 21, 27-33 | — | Ottimizzazione degli iperparametri | API degli estimatori di scikit-learn |
| **Metriche di valutazione della classificazione** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 99-107; `7-ScikitLearn-Classification.pdf` p. 22-25 | — | — | Metriche di valutazione della regressione |
| **Curva ROC** (esistente) | data-ml | — | `8-DMClassification.pdf` p. 108-113 | — | — | — |
| **Ottimizzazione degli iperparametri** | data-ml | hyperparameter tuning; ricerca casuale; randomized search; ottimizzazione bayesiana; GridSearchCV; RandomizedSearchCV; iperparametri e parametri | `8-DMClassification.pdf` p. 93-98; `8-ScikitLearn-Regression.pdf` p. 11-15 | Metodi di stima dell'accuratezza | — | Ottimizzazione surrogata, K-nearest neighbor, Regressione regolarizzata |

## Regressione

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Regressione lineare** (esistente) | statistica | — | `10-DMRegression.pdf` p. 2-9; `8-ScikitLearn-Regression.pdf` p. 2 | — | Regressione polinomiale, Metriche di valutazione della regressione | — |
| **Analisi dei residui** (esistente) | statistica | — | `10-DMRegression.pdf` p. 5, 15 | — | — | — |
| **Regressione polinomiale** | data-ml | polynomial regression; PolynomialFeatures; feature polinomiali; termini di interazione | `10-DMRegression.pdf` p. 10-11; `8-ScikitLearn-Regression.pdf` p. 7-10 | Regressione lineare, Pipeline di scikit-learn | Regressione regolarizzata | Effetto di interazione, Overfitting e pruning |
| **Metriche di valutazione della regressione** (esistente) | data-ml | — | `10-DMRegression.pdf` p. 6, 13-14; `8-ScikitLearn-Regression.pdf` p. 3-4 | Regressione lineare | — | Coefficiente di determinazione, Metriche di valutazione della classificazione |
| **Coefficiente di determinazione** (esistente) | statistica | — | `10-DMRegression.pdf` p. 14 | — | — | Metriche di valutazione della regressione |
| **Regressione regolarizzata** (esistente) | statistica | — | `10-DMRegression.pdf` p. 20; `8-ScikitLearn-Regression.pdf` p. 9 | Regressione polinomiale | — | Ottimizzazione degli iperparametri |

## Clustering

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Cluster analysis** (esistente) | data-ml | — | `9-DMClustering.pdf` p. 1-14; `9-ScikitLearn-Clustering.pdf` | — | — | — |
| **K-means** (esistente) | data-ml | — | `9-DMClustering.pdf` p. 15-41 | — | — | Rilevamento di anomalie |
| **Clustering gerarchico** (esistente) | data-ml | — | `9-DMClustering.pdf` p. 42-67 | — | — | — |
| **DBSCAN** (esistente) | data-ml | — | `9-DMClustering.pdf` p. 68-77 | — | — | Rilevamento di anomalie, Local Outlier Factor |
| **Validazione interna dei cluster** (esistente) | data-ml | — | `9-DMClustering.pdf` p. 78-83; `9-ScikitLearn-Clustering.pdf` p. 6 | — | — | — |
| **Validazione esterna dei cluster** (esistente) | data-ml | — | `9-DMClustering.pdf` p. 84-86; `9-ScikitLearn-Clustering.pdf` p. 7-8 | — | — | — |

## Rilevamento di anomalie

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Rilevamento di anomalie** | data-ml | anomaly detection; anomalie puntuali; anomalie contestuali; anomalie collettive; anomaly score; metodo dello z-score | `slide testo/anomaly-detection.ipynb` | Qualità dei dati, Normalizzazione degli attributi | Local Outlier Factor, Isolation forest, Autoencoder | DBSCAN, K-means, Misure di distanza |
| **Local Outlier Factor** | data-ml | LOF; densità locale; local reachability distance; LRD | `DSML-Anomaly-Detection.pdf` p. 2-7 | Rilevamento di anomalie, K-nearest neighbor | — | DBSCAN |
| **Isolation forest** | data-ml | isolation forest; foresta di isolamento; alberi casuali; path length | `DSML-Anomaly-Detection.pdf` p. 8 | Rilevamento di anomalie, Random forest, Albero di decisione | — | — |
| **Autoencoder** | data-ml | autoencoders; AE; encoder; decoder; codice latente; errore di ricostruzione; reconstruction error | `DSML-Anomaly-Detection.pdf` p. 9 | Rete neurale artificiale, Rilevamento di anomalie | — | Analisi delle componenti principali, Ciclo di addestramento in PyTorch |

## Deep learning

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Rete neurale artificiale** (esistente) | data-ml | — | `DSML-Deep-Learning-Intro.pdf` p. 2-10 | — | Autoencoder, Teorema di approssimazione universale | Ciclo di addestramento in PyTorch |
| **Funzioni di attivazione** (esistente) | data-ml | — | `DSML-Deep-Learning-Intro.pdf` p. 5-14; `11-PyTorch.pdf` p. 10-13 | — | Teorema di approssimazione universale | — |
| **Softmax e cross-entropy** (esistente) | data-ml | — | `DSML-Deep-Learning-Intro.pdf` p. 11-13, 25-26; `11-PyTorch.pdf` p. 16 | — | — | Ciclo di addestramento in PyTorch |
| **Teorema di approssimazione universale** | data-ml | universal approximation theorem; teorema di Cybenko; teorema di Hornik | `DSML-Deep-Learning-Intro.pdf` p. 10 | Rete neurale artificiale, Funzioni di attivazione | — | Teorema di approssimazione di Kolmogorov |
| **Metodo del gradiente** (esistente) | numerica | — | `DSML-Deep-Learning-Intro.pdf` p. 15-19 | — | — | — |
| **Differenziazione automatica** (esistente) | numerica | — | `DSML-Deep-Learning-Intro.pdf` p. 20-24; `11-PyTorch.pdf` p. 4-7 | Regola della catena in più variabili | Backpropagation, Ciclo di addestramento in PyTorch | — |
| **Backpropagation** (esistente) | data-ml | — | `DSML-Deep-Learning-Intro.pdf` p. 20-24 | Differenziazione automatica | — | Differenziazione automatica |
| **Discesa stocastica del gradiente** (esistente) | ottimizzazione | — | `11-PyTorch.pdf` p. 19 | — | Ciclo di addestramento in PyTorch | — |
| **Metodi a gradiente adattivo** (esistente) | ottimizzazione | — | `DSML-Deep-Learning-Intro.pdf` p. 19; `11-PyTorch.pdf` p. 17 | — | — | Ciclo di addestramento in PyTorch |

## PyTorch

| **Nome** | area | alias | fonte principale | Prerequisiti | Porta a | Collegati |
|---|---|---|---|---|---|---|
| **Ciclo di addestramento in PyTorch** | informatica | training loop; nn.Module; nn.Linear; optimizer.step; zero_grad; DataLoader; epoca | `11-PyTorch.pdf` p. 8-20 | Discesa stocastica del gradiente | — | Rete neurale artificiale, Softmax e cross-entropy, Metodi a gradiente adattivo, Autoencoder |

## Concetti esterni (da collegare)

Nessuno: tutti i concetti esterni citati dalle note esistono già nel wiki (Join relazionale, GROUP BY e HAVING, Differenziazione automatica, Alias e copia di liste, Effetto di interazione, Errore quadratico medio, Ottimizzazione surrogata, Regola della catena in più variabili, Teorema di approssimazione di Kolmogorov, Analisi del testo).

## Dubbi

- **Nomi**: "Anomaly detection" e "Regressione" sono basename di vecchie note, quindi le nuove note si chiamano "Rilevamento di anomalie" e "Regressione polinomiale"/"Metriche di valutazione della regressione". "Array NumPy" non è stata creata perché `NumPy`, `ndarray` e `array NumPy` sono alias di "DataFrame di pandas": le basi degli array (assi, shape, ufunc, aggregazioni) sono nel punto "Data science lab" di quella nota; broadcasting e indicizzazione hanno note proprie.
- **Grid search**: è alias di "Metodi di stima dell'accuratezza"; la nota nuova "Ottimizzazione degli iperparametri" confronta grid, randomized search e ottimizzazione bayesiana e non usa "grid search" come alias.
- **Formule sospette nelle slide**: `10-DMRegression.pdf` p. 14 scrive per il terzo caso limite "MSE < σ², R² < 0", in contrasto con $R^2 = 1 - MSE/\sigma^2$ (servirebbe MSE > σ²): riportato come refuso. Lasso e Ridge (p. 20) sono scritti con $\lambda\|\theta\|_1$ e $\lambda\|\theta\|_2$ (senza quadrato): tenuta la notazione della slide. In `8-DMClassification.pdf` p. 105 il denominatore dell'F1 è "Recall + Recall": si usa la forma di p. 104.
- **LOF**: la slide dichiara di semplificare (densità locale = distanza dal k-esimo vicino, invece della Local Reachability Distance); la formula vera dell'LRD non è nelle fonti e non è scritta.
- **Isolation forest**: il fattore di normalizzazione $c(n)$ non è definito nella slide; resta descritto solo a parole.
- **TF-IDF**: i numeri dell'esempio `TfidfVectorizer` (`10-ScikitLearn-Preprocessing.pdf` p. 13) non derivano dalla formula di `2-DMPreProc.pdf` p. 73 (scikit-learn usa una variante normalizzata, non descritta nelle slide): non sono presentati come applicazione di quella formula.
- **Notebook citati dalle slide** (`2-Numpy Examples.ipynb`, `4a-Scikitlearn-Classification.ipynb`, `4b/4c/4d-...`) non sono nella cartella; i `*_tutorial.ipynb` presenti sono usati solo come esempi di codice.
- **Classificatori basati su regole, classificazione associativa, reti neurali nel mazzo di classificazione**: elencati fra le tecniche (`8-DMClassification.pdf` p. 6) ma senza slide dedicate; le note relative non sono state estese per questo corso (le reti neurali sì, dal mazzo di deep learning).
- **Differenziazione automatica**: compare anche in "Backpropagation" (Matematica per l'AI); qui è nota a sé perché il mazzo lo definisce e lo usa per l'esempio svolto e PyTorch lo costruisce esplicitamente (`torchviz`).
