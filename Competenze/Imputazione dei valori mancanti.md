---
tipo: competenza
area: data-ml
corsi: [Data science lab]
livello: [magistrale]
aliases: [missing values imputation, imputazione, SimpleImputer, KNNImputer, imputazione univariata, imputazione multivariata, distanza euclidea NaN-aware, dropna, fillna, isnull, NaN]
tags: [competenza, area/data-ml]
---

# Imputazione dei valori mancanti

> Tecniche per trattare i valori mancanti prima di addestrare un modello: eliminarli o **riempirli** con valori stimati, in modo univariato (costante o statistica della colonna) o multivariato (dai dati noti, es. dai vicini più prossimi).

## Definizione / enunciato
- **Rappresentazione** (pandas): `None` (oggetto Python, rende l'array di tipo `object`) o `np.nan` (float, più efficiente nei calcoli); pandas converte fra i due con dtype `float64`. `isnull()`/`notnull()` danno maschere booleane, `dropna()` elimina (per un DataFrame le righe con almeno un NaN; `how='all'` solo quelle tutte NaN; `axis='columns'` le colonne), `fillna(v)` riempie con un valore o con `method='ffill'`/`'bfill'` (ultimo/prossimo valore valido).
- **Imputazione univariata** (`sklearn.impute.SimpleImputer`): `strategy="constant", fill_value=...` oppure `strategy="mean" | "median" | "most_frequent"`.
- **Imputazione multivariata** (es. `sklearn.impute.KNNImputer`): si trovano i $k$ vicini più prossimi con una distanza calcolata solo sulle feature non mancanti e si imputa la **media dei vicini**.

## Formule chiave
Distanza euclidea "NaN-aware" (`10-ScikitLearn-Preprocessing.pdf` p. 22), con $\perp$ = valore mancante:
$$d^2(a,b)=w(a,b)\sum_{i}^{n}\mathbb 1(a_i\neq\perp\wedge b_i\neq\perp)\,(a_i-b_i)^2,\qquad w(a,b)=\frac{n}{\sum\mathbb 1(a_i\neq\perp\wedge b_i\neq\perp)}.$$
Esempio della slide (p. 23): $a=[1,\text{NaN},2,\text{NaN}]$, $b=[5,3,2,\text{NaN}]$, $n=4$, due colonne comuni, $w=4/2=2$; somma $=(1-5)^2+(2-2)^2=16$; $d^2(a,b)=2\cdot 16=32$.

## Intuizione
Il peso $w$ riscala la somma come se fosse calcolata su tutte le $n$ dimensioni: più dimensioni mancano, più pesano quelle disponibili. L'imputazione multivariata sfrutta le correlazioni fra attributi, quella univariata no.

## Come si usa
Scikit-learn richiede che i mancanti siano risolti "con imputazione o rimuovendo righe/colonne" prima di applicare un modello (`7-ScikitLearn-Classification.pdf` p. 6). Come ogni trasformatore, l'imputer si addestra sul training set e si applica al test. Le slide di teoria elencano le strategie generali: eliminare oggetti o variabili, stimare i valori mancanti, ignorarli durante l'analisi (`2-DMPreProc.pdf` p. 24).

## Nei corsi
- **Data science lab** (magistrale): "Missing values imputation" nelle slide di preprocessing con scikit-learn e "Missing values" nelle slide pandas. Fonti: `magistrale/Data science lab/slide py/10-ScikitLearn-Preprocessing.pdf` (p. 20-23); `slide py/5-Pandas.pdf` (p. 46-53); `slide testo/2-DMPreProc.pdf` (p. 23-24).

## Prerequisiti
- [[Qualità dei dati]]: i valori mancanti come problema di qualità
- [[Misure di distanza]]: distanza euclidea, qui ristretta alle dimensioni note

## Collegati
- [[K-nearest neighbor]]: stesso principio dei vicini, usato per stimare un valore invece di una classe
- [[Indicizzazione in pandas]]: maschere `isnull` per selezionare i mancanti
