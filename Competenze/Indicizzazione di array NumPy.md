---
tipo: competenza
area: informatica
corsi: [Data science lab]
livello: [magistrale]
aliases: [NumPy indexing, accesso agli array NumPy, masking, maschere booleane, fancy indexing, indicizzazione combinata, viste e copie, view, copy, reshape, np.newaxis]
tags: [competenza, area/informatica]
---

# Indicizzazione di array NumPy

> Modi di leggere e scrivere sottoinsiemi di un array NumPy (indicizzazione semplice, slicing, masking, fancy indexing, combinata), con la distinzione fra quelli che restituiscono una **vista** e quelli che restituiscono una **copia**.

## Definizione / enunciato
- **Indicizzazione semplice** `x[i, j, k, ...]`: lettura e scrittura di un elemento; indici negativi contano dalla fine (`x[0, -1]` è l'ultimo della prima riga).
- **Slicing** `x[start:stop:step, ...]`: elementi contigui da `start` (incluso) a `stop` (escluso). Crea una **vista**: modificare la vista modifica l'array originale; per evitarlo si usa `.copy()`.
- **Masking** `x[mask]`: `mask` è un array booleano della stessa forma (creato con `x > 4`, `x == 4`, ...; combinabile con `&`, `|`, `^`, `~`); il risultato è un vettore **1-D**, **copia** degli elementi selezionati. L'assegnazione `x[x > 4] = 0` è comunque permessa.
- **Fancy indexing** `x[ [1, 3] ]`: si elencano gli indici; su una matrice `x[ [1, 2] ]` seleziona righe, `x[ [1, 2], [0, 2] ]` seleziona le coppie di coordinate $(1,0)$ e $(2,2)$. Restituisce una **copia**.
- **Indicizzazione combinata**: masking+slicing e fancy+slicing conservano il numero di dimensioni; ogni asse indicizzato in modo semplice **riduce di uno** il numero di dimensioni.

## Formule chiave
Con `x = np.array([ [1,2,3],[4,5,6],[7,8,9] ])`: `x[:, 1:]` dà `[ [2,3],[5,6],[8,9] ]`; `x[:2, ::2]` dà `[ [1,3],[4,6] ]` (`4-Numpy.pdf` p. 47). Su `arr` di forma `(3,2,3)`, `arr[:,:,0]` ha forma `(3,2)` (p. 63).

## Intuizione
Lo slicing descrive una regione regolare della memoria, quindi può condividere i dati; maschere ed elenchi di indici selezionano posizioni arbitrarie, quindi NumPy deve copiarle.

## Come si usa
Le stesse slide trattano le operazioni di forma: `np.concatenate` (asse 0 di default), `hstack`/`vstack`, `np.split`/`hsplit`/`vsplit`, `reshape` (al più una dimensione `-1`, dedotta), `np.newaxis` per passare da vettore riga a colonna (`arr[:, np.newaxis]`, forma `(3,1)`). Errore tipico: modificare una slice credendo di lavorare su una copia.

## Nei corsi
- **Data science lab** (magistrale): sezione "Accessing Numpy arrays" e "Working with arrays" delle slide NumPy. Fonti: `magistrale/Data science lab/slide py/4-Numpy.pdf` (p. 43-64 accesso, p. 65-75 concatenazione, split, reshape); esempi in `codici/4-NumPy_tutorial.ipynb`.

## Prerequisiti
- [[DataFrame di pandas]]: l'`ndarray` di NumPy, con assi e forma

## Porta a
- [[Indicizzazione in pandas]]: `loc`/`iloc` riprendono slicing, masking e fancy indexing
- [[Grafici con Matplotlib]]: l'array di Axes restituito da `subplots` si indicizza come un ndarray
- [[API degli estimatori di scikit-learn]]: la features matrix è un array 2-D da selezionare per righe e colonne

## Collegati
- [[Broadcasting]]: calcolo fra array di forma diversa
- [[Alias e copia di liste]]: stessa distinzione riferimento/copia vista per le liste Python
