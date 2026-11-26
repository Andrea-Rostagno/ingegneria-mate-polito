---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: ["categorical encoding", "label encoding", "one-hot encoding", "codifica one-hot", "LabelEncoder", "get_dummies", "valori categorici"]
tags: [competenza, area/data-ml]
---

# Codifica delle variabili categoriche

> Traduzione di feature e target categorici (sesso, città, modello di auto...) in numeri utilizzabili dagli algoritmi di machine learning, evitando di introdurre relazioni d'ordine inesistenti.

## Definizione / enunciato
Feature e target categorici vanno convertiti in valori numerici; possono essere categorici anche se scritti con numeri (codici postali, prefissi telefonici). In pandas si convertono prima in tipo `'category'` con `astype` (le categorie si leggono con `df[col].cat.categories`).
- **Label encoding:** le classi $c_1,\dots,c_n$ sono rappresentate dai naturali $0,\dots,n-1$ secondo una permutazione $\pi$: $i$ rappresenta $c_j$ se $i=\pi(j)$.
- **One-hot encoding:** le classi $c_1,\dots,c_n$ sono rappresentate dai vettori della base canonica $\mathbf e_1,\dots,\mathbf e_n$ di $\mathbb R^n$.

## Formule chiave
Esempio delle slide: la colonna Città con valori Torino, Parigi, ..., Roma diventa tante colonne binarie; la riga "Torino" è $(1,0,\dots,0)$, "Roma" è $(0,0,\dots,1)$.

## Intuizione
- Label encoding: conversione semplicissima, ma crea relazioni d'ordine ($<,\le,>,\ge$) fra le classi che possono ingannare l'algoritmo. Eccezione: categorie davvero ordinate, come fasce d'età "0-25", "26-50", "51-75", "76+" codificate con 1, 2, 3, 4.
- One-hot: nessuna falsa relazione d'ordine, ma la dimensione del problema cresce rapidamente (con un occhio alla maledizione della dimensionalità).

## Come si usa
`LabelEncoder` di `sklearn.preprocessing` (metodi `fit`, `transform`, `inverse_transform`, `fit_transform`; attenzione: assegna i numeri in ordine crescente o alfabetico, non casuale) per il target; `pd.get_dummies(data, prefix, prefix_sep, dummy_na, ...)` per le feature. Laboratorio sui funghi Agaricus-Lepiota: label encoding della classe commestibile/velenoso, one-hot sulle feature, poi PCA e SVM lineari.

## Nei corsi
- **Matematica per l'AI** (triennale): esercitazione "Gestione di valori categorici". Fonti: `triennale/ANNO 3/matematica AI/MIA2022_pyslides.pdf` (p. 36-45); esempi `PandasIntro_02.ipynb`, `Mushrooms.ipynb`, `linSVMMushrooms.ipynb`.
- **Data science lab** (magistrale): i valori nominali si confrontano solo per uguaglianza, quindi mapparli su interi ('red','green','blue' $\to$ 0,1,2) farebbe inferire un ordine inesistente: si usa il one-hot (`OneHotEncoder`), attenzione però alla dimensione che cresce con i valori distinti (problema per KNN e clustering) e al fatto che codifica anche le colonne numeriche se non le si separa. Per gli ordinali `OrdinalEncoder`, con `categories=[["XS","S","M","L","XL"], ...]` perché di default usa l'ordine lessicografico (L<M<S<XL<XS, sbagliato). Per tabelle miste si usa il `ColumnTransformer` ([[Pipeline di scikit-learn]]). Fonti: `magistrale/Data science lab/slide py/10-ScikitLearn-Preprocessing.pdf` (p. 5-10).

## Prerequisiti
- [[Tipi di attributo]]: distinzione fra attributi nominali e ordinali
- [[DataFrame di pandas]]: struttura su cui si applica la codifica

## Porta a
- [[Softmax e cross-entropy]]: l'etichetta di classe come vettore one-hot

## Collegati
- [[Maledizione della dimensionalità]]: il one-hot fa crescere la dimensione
- [[Normalizzazione degli attributi]]: altra trasformazione di preprocessing
