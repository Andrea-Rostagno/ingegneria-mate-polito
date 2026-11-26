---
tipo: competenza
area: informatica
corsi: [Base di dati, Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: [pandas, DataFrame, Series, pd.DataFrame, groupby di pandas, NumPy, ndarray, array NumPy]
tags: [competenza, area/informatica]
---

# DataFrame di pandas

> Struttura dati tabellare bidimensionale della libreria pandas (basata su NumPy): ogni colonna è una Series con un nome; si usa per caricare, pulire, filtrare, aggregare e salvare dati in Python.

## Definizione / enunciato
**NumPy** (Numeric Python) lavora con dati numerici in array multidimensionali, `ndarray` (N-dimensional array), le cui dimensioni si chiamano *axes*; aumenta flessibilità ed efficienza rispetto alle strutture native ed è la base di pandas e scikit-learn.

**pandas** ha due strutture fondamentali: **Series** (sequenza 1-D di elementi omogenei) e **DataFrame** (array 2-D pensato come tabella, ogni colonna è una Series con un nome). Funzioni: caricamento (da Series, array NumPy, dizionari, JSON, CSV), pulizia (duplicati, valori mancanti, conversione di tipi), manipolazione (filtri, ordinamenti, nuove colonne, aggregazioni), analisi (statistiche descrittive, tabelle pivot) e grafici con Matplotlib.

## Formule chiave
Esempio delle slide:
```python
import pandas as pd
data = {'Nome': ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Mauro'],
        'Eta': [25, 33, 47, 19, 28, 17],
        'Citta': ['Roma', 'Milano', 'Napoli', 'Torino', 'Firenze', 'Torino']}
df = pd.DataFrame(data)
df_filtrato = df[df['Eta'] > 30]                  # filtro sulle righe
df_aggregato = df.groupby('Citta')['Eta'].mean()  # media per città
df['Maggiorenne'] = df['Eta'].apply(lambda x: 'Sì' if x >= 18 else 'No')
df_output = df.drop(columns=['Eta'])
df_output.to_csv('persone.csv', index=False)
```

## Intuizione
Un DataFrame è una tabella relazionale in memoria: il filtro booleano fa il lavoro della WHERE, `groupby(...).mean()` quello di GROUP BY con AVG (analogia nostra, non nelle slide).

## Come si usa
Nel corso il DataFrame è il ponte tra le query e Streamlit: le righe lette dal DBMS diventano un `pd.DataFrame(righe, columns=[...])` che si passa a `st.dataframe`, `st.bar_chart` o `st.metric` (`HW base di dati/home.py`).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/streamlit.pdf` (pp. 4-9; esempi NumPy solo come immagini a p. 6).
- **Matematica per l'AI** (triennale): esercitazioni di Della Santa su Jupyter e pandas: Series e DataFrame, attributi e metodi di esplorazione, statistica di base, trasformazione, esportazione (`to_csv`, `to_excel`), grafici (`plot`, `boxplot`), importazione da file (`read_csv`), operazioni fra DataFrame; conversione in dati categorici con `astype('category')` prima della codifica; ndarray di NumPy per l'algebra lineare (`LinAlgebra.ipynb`). Fonti: `triennale/ANNO 3/matematica AI/MIA2022_pyslides.pdf` (p. 9-37); esempi `PandasIntro_01.ipynb`, `PandasIntro_02.ipynb`.
- **Data science lab** (magistrale): slide dedicate a NumPy e pandas. Array NumPy: tipo fisso e memoria contigua (contro le liste Python, che tengono un PyObject per elemento), tipi `int8`...`float64`, `bool`; assi (anche negativi, `-1` è il più interno) e `shape` (`(3,)` vettore riga, `(3,1)` colonna, che è una matrice 2-D); creazione con `np.zeros`, `np.ones`, `np.full`, `np.linspace`, `np.arange`, `np.random.normal`; attributi `ndim`, `shape`, `size`; aggregazioni (`sum`, `mean`, `argmax`, ...) anche lungo un asse, che sparisce dall'output; `np.sort`/`argsort`; prodotto `@`. pandas: Series con indice esplicito, DataFrame come colonne-Series con indice comune, creazione da Series, dizionari, liste di dizionari, array 2-D. Fonti: `magistrale/Data science lab/slide py/4-Numpy.pdf` (p. 2-37), `slide py/5-Pandas.pdf` (p. 2-24). Vedi anche [[Broadcasting]], [[Indicizzazione di array NumPy]], [[Indicizzazione in pandas]], [[Raggruppamento e tabelle pivot in pandas]], [[Merge di DataFrame]].

## Prerequisiti
- [[Dizionario in Python]]: il DataFrame si costruisce da un dizionario di liste

## Porta a
- [[Streamlit]]: tabelle e grafici dell'app

## Collegati
- [[GROUP BY e HAVING]]: groupby fa in memoria ciò che GROUP BY fa nel DBMS
- [[Formato CSV]]: to_csv salva il DataFrame su file
- [[Codifica delle variabili categoriche]]: get_dummies e LabelEncoder sulle colonne di un DataFrame (Matematica per l'AI)
- [[Normalizzazione degli attributi]]: StandardScaler applicato alle colonne prima della PCA (Matematica per l'AI)
