---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Matematica per l'AI, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["attribute transformation", "normalizzazione min-max", "z-score", "standardizzazione", "scaling decimale", "StandardScaler", "MinMaxScaler", "centramento dei dati", "z-normalizzazione"]
tags: [competenza, area/data-ml]
---

# Normalizzazione degli attributi

> Trasformazione dei valori di un attributo in un intervallo piccolo o su una scala standard, per rendere confrontabili attributi diversi.

## Definizione / enunciato
Una **trasformazione di attributo** è una funzione che mappa l'intero insieme dei valori di un attributo in nuovi valori, in modo che ogni valore vecchio corrisponda a uno nuovo. Funzioni semplici: $x^k$, $\log x$, $e^x$, $|x|$.

La **normalizzazione** riscala i valori in un intervallo piccolo, tipicamente $[-1,+1]$ o $[0,+1]$, e più in generale corregge differenze tra attributi in frequenza, media, varianza, intervallo, o rimuove un segnale comune indesiderato (es. stagionalità). In statistica la **standardizzazione** sottrae la media e divide per la deviazione standard.

## Formule chiave
Min-max:
$$v'=\frac{v-\min_A}{\max_A-\min_A}\,(\text{new\_max}_A-\text{new\_min}_A)+\text{new\_min}_A$$
z-score:
$$v'=\frac{v-\text{mean}_A}{\text{stand\_dev}_A}$$
Scaling decimale:
$$v'=\frac{v}{10^{j}},\quad j \text{ minimo intero tale che } \max(|v'|)<1$$

## Intuizione
Senza normalizzazione un attributo con valori grandi (un reddito in migliaia) domina una distanza euclidea rispetto a uno con valori piccoli (un'età): le slide sulla distanza euclidea ricordano che "la standardizzazione è necessaria se le scale differiscono".

## Come si usa
Esempio delle slide (produzione primaria netta, serie temporali di Minneapolis, Atlanta e San Paolo): le correlazioni tra le serie grezze sono alte in valore assoluto (0.7591, -0.7581), ma dopo uno z-score mensile, che toglie la stagionalità, scendono vicino a zero (0.0492, 0.0906, -0.0154).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezioni "Attribute Transformation" e "Normalization" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 54-57, 61).
- **Matematica per l'AI** (triennale): nel laboratorio sulla PCA (Della Santa), dati $X\in\mathbb R^{N\times n}$ con medie $\boldsymbol\mu$ e deviazioni standard campionarie $\boldsymbol\sigma^2=\frac1{N-1}\sum_i(\mathbf x^{(i)}-\boldsymbol\mu)\odot(\mathbf x^{(i)}-\boldsymbol\mu)$: **centramento** $\bar X$ (si sottrae $\boldsymbol\mu$) e **standardizzazione** $\tilde X$ (si sottrae $\boldsymbol\mu$ e si divide per $\boldsymbol\sigma$ elemento per elemento); la PCA su $\mathrm{Corr}(X)$ equivale alla PCA su $\mathrm{Cov}(\tilde X)$, da preferire con unità di misura diverse (`StandardScaler` con `fit`, `transform`, `inverse_transform`). Nelle slide ISLR: "scaling of the variables matters", con l'alternativa min-max $x\mapsto\frac{x-\min}{\max-\min}$ annotata a mano; nella lezione sulla maledizione della dimensionalità si suggerisce MinMaxScaler per lavorare in $[0,1]^p$. Fonti: `triennale/ANNO 3/matematica AI/PCAintro.ipynb`; `PCA.pdf` (p. 44); `curse.pdf` (p. 7).
- **Business intelligence per big data** (magistrale): stesse slide "Attribute Transformation" e "Normalization" del mazzo di preprocessing. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 53-54).
- **Data science lab** (magistrale): teoria come nel mazzo di preprocessing (con l'esempio delle serie temporali di crescita delle piante, correlate solo dopo la normalizzazione); in laboratorio `MinMaxScaler` (in $[0,1]$) e `StandardScaler` (media 0, varianza 1), colonna per colonna, **adattati solo sul training set**: con `X_train = [[0,10],[0,20],[2,10],[2,20]]` il punto di test `[1,15]` diventa `[0.5, 0.5]`, mentre rifare `fit` sul test darebbe `[0, 0]`. In NumPy/pandas lo z-score si scrive con il [[Broadcasting]]; lo z-score è anche il metodo statistico di [[Rilevamento di anomalie]]. Il KNN richiede attributi normalizzati (`8-DMClassification.pdf` p. 68). Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 54-57); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 3-4); `slide py/5-Pandas.pdf` (p. 45).

## Prerequisiti
- [[Tipi di attributo]]: si applica agli attributi numerici

## Porta a
- [[Misure di distanza]]: evita che un attributo domini la distanza

## Collegati
- Nessuno.
- [[Analisi delle componenti principali]]: si standardizza prima della PCA se le unità differiscono (Matematica per l'AI)
- [[Trucco della riparametrizzazione]]: stessa trasformazione $z=(x-\mu)/\sigma$ per una gaussiana (Matematica per l'AI)
