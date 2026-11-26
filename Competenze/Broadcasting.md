---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [broadcasting di NumPy, NumPy broadcasting, regole del broadcasting, broadcasting rules, operazioni tra array di forma diversa]
tags: [competenza, area/informatica]
---

# Broadcasting

> Insieme di regole con cui NumPy (e, allo stesso modo, pandas e PyTorch) esegue operazioni elemento per elemento fra array di forma (`shape`) diversa, "stirando" virtualmente le dimensioni di lunghezza 1.

## Definizione / enunciato
Le *universal functions* (ufunc) di NumPy sono operazioni elemento per elemento: binarie (`+ - * / % // **`) fra array della stessa forma, unarie (`np.abs`, `np.exp`, `np.log`, `np.sin`, ...) applicate a ogni elemento senza modificare l'originale. Il **broadcasting** estende le binarie ad array di forma diversa con tre regole (`4-Numpy.pdf` p. 39):
1. la forma dell'array con meno dimensioni viene completata con **uni a sinistra** (es. `x.shape = (2,3)`, `y.shape = (3,)` diventa `(1,3)`);
2. se lungo una dimensione un array ha lunghezza 1 e l'altro $>1$, quello di lunghezza 1 viene **stirato** fino a coincidere (`(1,3)` diventa `(2,3)`);
3. se lungo una dimensione entrambi hanno lunghezza $>1$ e diversa, il broadcasting **non è possibile** e NumPy solleva un'eccezione.

## Formule chiave
Esempio delle slide (p. 40): `x = np.array([1,2,3])` (forma `(3,)`), `y = np.array([[11],[12],[13]])` (forma `(3,1)`). Regola 1: `x` diventa `(1,3)`; regola 2: `x` si estende in verticale, `y` in orizzontale:
$$x+y=\begin{bmatrix}12&13&14\\13&14&15\\14&15&16\end{bmatrix}.$$
Controesempio (p. 41): `x` di forma `(3,2)` e `y` di forma `(3,)`: `y` diventa `(1,3)`, e le forme `(3,2)` e `(1,3)` sono incompatibili (regola 3).

## Intuizione
Il broadcasting evita cicli espliciti e copie: si scrive l'operazione "come se" gli array avessero la stessa forma. Per non sbagliare si confrontano le forme partendo dall'ultima dimensione.

## Come si usa
Applicazione citata dalle slide: **normalizzazione di un dataset** (notebook "Broadcasting: dataset normalization"): sottrarre a una matrice `(n_samples, n_features)` il vettore delle medie per colonna e dividere per le deviazioni standard. In pandas la stessa idea vale fra DataFrame e Series: l'operazione si applica fra la Series e ogni riga del DataFrame "seguendo le regole del broadcasting" (`5-Pandas.pdf` p. 43), come nell'esempio `df_norm = (df - mean_series)/std_series` (p. 45). I tensori PyTorch hanno la stessa interfaccia (`11-PyTorch.pdf` p. 3).

## Nei corsi
- **Data science lab** (magistrale): sezione "Broadcasting" delle slide NumPy, dopo ufunc e aggregazioni. Fonti: `magistrale/Data science lab/slide py/4-Numpy.pdf` (p. 21-24 ufunc, p. 38-42 broadcasting); `slide py/5-Pandas.pdf` (p. 43-45).

## Prerequisiti
- [[DataFrame di pandas]]: array NumPy (`ndarray`), assi e forma

## Porta a
- [[Normalizzazione degli attributi]]: z-score di un intero dataset in una riga
- [[Indicizzazione in pandas]]: operazioni fra DataFrame e Series per riga

## Collegati
- [[Indicizzazione di array NumPy]]: l'altra metà dell'uso degli array (selezione invece di calcolo)
- [[Ciclo di addestramento in PyTorch]]: i tensori PyTorch seguono le stesse regole di broadcasting
