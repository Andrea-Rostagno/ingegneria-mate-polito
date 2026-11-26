---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [Matplotlib, pyplot, Figure e Axes, plt.subplots, subplot_mosaic, line plot, scatter plot, bar chart, istogramma, savefig]
tags: [competenza, area/informatica]
---

# Grafici con Matplotlib

> Uso della libreria Matplotlib per visualizzare dati in Python: una **Figure** contiene uno o più **Axes**, su cui si disegnano line plot, scatter plot, bar chart e istogrammi.

## Definizione / enunciato
- Due interfacce: stile Matlab (*stateful*, funzioni di `pyplot` che agiscono su Figure e Axes correnti) e **orientata agli oggetti** (*stateless*, metodi di una Figure e di un Axes specifici), usata nel corso.
- `fig, ax = plt.subplots(figsize=(5, 3))` crea una Figure con un Axes; `plt.subplots(2, 3)` crea 6 Axes in un array NumPy di forma `(2,3)` (forma `(n,)` se c'è una sola riga o colonna); `plt.tight_layout()` evita spazi vuoti. `plt.subplot_mosaic("""AAABB ...""")` dà layout a tasselli descritti in ASCII (aree contigue e rettangolari) e restituisce un dizionario di Axes.
- Tipi di grafico: `ax.plot(x, y)` (segmenti, chiamate successive aggiungono linee; `linestyle`, `marker`, `c`, `label` + `ax.legend`); `ax.scatter(x, y, c=colors, s=area, cmap=...)` (colore per punto da una colormap, l'intervallo dei valori di `c` copre tutta la colormap; `s` è l'area); `ax.bar(x, height, tick_label=...)` e barre raggruppate spostando le posizioni di `width/2`; `ax.hist(values, bins=25, alpha=0.5)` (usa `np.histogram` per il binning).
- `fig.savefig("./out/test.png")` salva in png, jpg, eps, pdf.

## Formule chiave
Nessuna formula: la competenza è l'uso corretto dell'API. Esempio di scatter delle slide (`6-Matplotlib.pdf` p. 18): con `c = [101, 120, 50, 60]` la colormap viene mappata sull'intervallo $[50, 120]$.

## Intuizione
Separare Figure (la tela) e Axes (il singolo grafico con i suoi assi) permette di comporre più grafici e di modificarne ciascuno senza ambiguità su quale sia "il grafico corrente".

## Come si usa
Nel corso i grafici servono all'esplorazione e alla diagnostica: istogrammi delle distribuzioni (anche dei punteggi di anomalia nel notebook `anomaly-detection.ipynb`), scatter dei cluster, curva di `explained_variance_ratio_` della PCA per trovare il gomito (`10-ScikitLearn-Preprocessing.pdf` p. 18). Seaborn è citata ma non trattata.

## Nei corsi
- **Data science lab** (magistrale): "una introduzione molto breve" perché la visualizzazione non è il fuoco del corso. Fonti: `magistrale/Data science lab/slide py/6-Matplotlib.pdf` (p. 2-25); esempi in `codici/6-Matplotlib_tutorial.ipynb`.

## Prerequisiti
- [[Indicizzazione di array NumPy]]: l'array di Axes si indicizza come un ndarray (`ax[0, 1]`)

## Porta a
- [[Varianza spiegata]]: grafico della varianza spiegata per scegliere il numero di componenti

## Collegati
- [[Coefficiente di correlazione]]: gli scatter plot permettono di valutare a occhio la correlazione
