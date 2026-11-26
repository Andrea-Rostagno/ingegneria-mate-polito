---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [loc e iloc, loc, iloc, indice esplicito, indice implicito, Series di pandas, allineamento degli indici, index alignment, accesso ai DataFrame]
tags: [competenza, area/informatica]
---

# Indicizzazione in pandas

> Accesso agli elementi di Series e DataFrame per indice **esplicito** (`loc`) o **implicito** (`iloc`), con slicing, masking e fancy indexing, e regola di **allineamento degli indici** nelle operazioni.

## Definizione / enunciato
Una **Series** è una sequenza 1-D di elementi omogenei associati a un indice esplicito (stringhe o interi); un **DataFrame** è una tabella le cui colonne sono Series che condividono lo stesso indice.
- `s.loc['a']`: indice **esplicito** (quello dato alla creazione); nello slicing esplicito `s.loc['b':'c']` lo **stop è incluso**.
- `s.iloc[0]`: indice **implicito** (posizione, come in NumPy); `s.iloc[1:3]` esclude lo stop.
- Masking `s[(s>2) & (s<10)]`, fancy `s.loc[ ['a','c'] ]`, `s.iloc[ [0,2] ]`.
- DataFrame: `df['Price']` restituisce una Series (colonna); `df.loc['a']`/`df.iloc[0]` una riga come Series; `df.loc[mask, 'Quantity':]` combina masking e slicing, `df.loc[mask, ['Price','Liters'] ]` masking e fancy.
- Se il risultato sia vista o copia "dipende dal contesto" ed è difficile fare ipotesi (`5-Pandas.pdf` p. 25).

## Formule chiave
Differenza con NumPy (p. 32): `df.values[ [0,2],[0,2] ]` seleziona le **coppie** $(0,0)$ e $(2,2)$, mentre `df.iloc[ [0,2],[0,2] ]` seleziona **in cascata** righe e colonne e restituisce un DataFrame $2\times 2$.

Operazioni fra Series/DataFrame: elemento per elemento **dopo l'allineamento** di indici (e colonne); le etichette che non combaciano danno `NaN`, e l'indice del risultato è ordinato (p. 40-42).

## Intuizione
pandas aggiunge etichette agli array NumPy: le operazioni seguono le etichette, non le posizioni, per cui sommare due Series con indici diversi produce valori mancanti invece di un errore.

## Come si usa
Aggiunta di colonne (`df['Available'] = ...`, in place), `drop` e `rename` (restituiscono una copia salvo `inplace=True`), I/O con `pd.read_csv(path, sep=',', skiprows=..., na_values=[...])`, `to_csv(index=False)`, `read_json`. Le maschere `isnull()`/`notnull()` servono a trattare i valori mancanti.

## Nei corsi
- **Data science lab** (magistrale): slide pandas su Series, DataFrame, I/O e "Computation with Pandas". Fonti: `magistrale/Data science lab/slide py/5-Pandas.pdf` (p. 3-45); esempi in `codici/5-Pandas_tutorial.ipynb`.

## Prerequisiti
- [[DataFrame di pandas]]: Series e DataFrame
- [[Indicizzazione di array NumPy]]: slicing, masking e fancy indexing di base

## Porta a
- [[Raggruppamento e tabelle pivot in pandas]]: selezione di gruppi e livelli di indice
- [[Imputazione dei valori mancanti]]: `isnull`, `dropna`, `fillna`

## Collegati
- [[Broadcasting]]: un'operazione DataFrame–Series si applica a ogni riga
