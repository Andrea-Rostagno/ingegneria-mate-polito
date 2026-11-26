---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Modelli statistici, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["distance measures", "distanza euclidea", "distanza di Minkowski", "distanza di Manhattan", "distanza supremum", "distanza di Mahalanobis", "dissimilarità", "proprietà metriche"]
tags: [competenza, area/data-ml]
---

# Misure di distanza

> Misure numeriche di dissimilarità tra oggetti (euclidea, di Minkowski, di Mahalanobis) e proprietà che le rendono metriche.

## Definizione / enunciato
La **dissimilarità** misura quanto due oggetti sono diversi: è più bassa per oggetti simili, ha minimo spesso 0 e limite superiore variabile. *Prossimità* indica una similarità o una dissimilarità.

Una distanza è una **metrica** se soddisfa:
1. positività: $d(\mathbf x,\mathbf y)\ge0$, e $=0$ solo se $\mathbf x=\mathbf y$;
2. simmetria: $d(\mathbf x,\mathbf y)=d(\mathbf y,\mathbf x)$;
3. disuguaglianza triangolare: $d(\mathbf x,\mathbf z)\le d(\mathbf x,\mathbf y)+d(\mathbf y,\mathbf z)$.

## Formule chiave
Distanza di **Minkowski** ($n$ attributi, $r$ parametro):
$$d(\mathbf x,\mathbf y)=\Big(\sum_{k=1}^{n}|x_k-y_k|^r\Big)^{1/r}$$
- $r=1$: city block (Manhattan, $L_1$); per vettori binari è la distanza di Hamming;
- $r=2$: **euclidea**, $d(\mathbf x,\mathbf y)=\sqrt{\sum_{k=1}^n (x_k-y_k)^2}$;
- $r\to\infty$: supremum ($L_{\max}$), massima differenza fra le componenti.

Distanza di **Mahalanobis** ($\Sigma$ matrice di covarianza):
$$\text{mahalanobis}(\mathbf x,\mathbf y)=(\mathbf x-\mathbf y)^T\Sigma^{-1}(\mathbf x-\mathbf y)$$

## Intuizione
$r$ non va confuso con $n$: tutte queste distanze valgono in ogni dimensione. Mahalanobis tiene conto della forma (covarianza) della nuvola di punti: nelle slide per due punti rossi la distanza euclidea è 14.7 e quella di Mahalanobis 6.

## Come si usa
Esempio delle slide con $p_1=(0,2)$, $p_2=(2,0)$, $p_3=(3,1)$, $p_4=(5,1)$: $d(p_1,p_2)$ vale 4 in $L_1$, 2.828 in $L_2$, 2 in $L_\infty$; $d(p_1,p_4)$ vale 6, 5.099, 5. Con covarianza $\begin{pmatrix}0.3&0.2\\0.2&0.3\end{pmatrix}$ e $A=(0.5,0.5)$, $B=(0,1)$, $C=(1.5,1.5)$: Mahal$(A,B)=5$, Mahal$(A,C)=4$. Prima di calcolare distanze conviene normalizzare gli attributi.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Similarity and dissimilarity" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 59-69).
- **Modelli statistici** (magistrale): la **distanza di Mahalanobis** come risultato distributivo (libro, cap. 8, Teorema 8.7): se $\mathbf X\sim N_m(\boldsymbol\mu,\Sigma)$ con $\Sigma$ definita positiva, $\mathbf Z=\Sigma^{-1/2}(\mathbf X-\boldsymbol\mu)\sim N_m(\mathbf 0,\mathbf I)$ e $(\mathbf X-\boldsymbol\mu)'\Sigma^{-1}(\mathbf X-\boldsymbol\mu)=\|\mathbf Z\|^2\sim\chi^2(m)$; le regioni di equidensità sono ellissoidi di probabilità. Esempio: $\boldsymbol\mu=(1,2)'$, $\Sigma=\begin{pmatrix}4&2\\2&3\end{pmatrix}$, $\mathbf x=(3,1)'$: distanza $\sqrt3\approx1.73$ contro la euclidea $\sqrt5\approx2.24$; poiché $\chi^2(2)$ è esponenziale di tasso $1/2$, la probabilità di un punto più lontano è $e^{-3/2}\approx0.223$ (calcolo mio dalla formula del libro). Il pivot $F$ del modello lineare e la statistica di Pearson sono distanze di Mahalanobis. Fonti: `Libri/Modelli statistici/capitoli/cap08.tex` (§8.3, p. 130), `appA.tex` (radice $\Sigma^{-1/2}$).
- **Business intelligence per big data** (magistrale): stessa sezione "Similarity and dissimilarity" (euclidea, Minkowski, proprietà di una distanza, Mahalanobis). Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 55-66).
- **Data science lab** (magistrale): euclidea, Minkowski ($r=1$ Manhattan, $r=2$ euclidea, $r\to\infty$ supremum), proprietà metriche, Mahalanobis (esempio: euclidea 14.7 contro Mahalanobis 6). Nel laboratorio compare la variante "NaN-aware" della distanza euclidea usata da `KNNImputer` ([[Imputazione dei valori mancanti]]) e la Mahalanobis come generalizzazione multivariata dello z-score per le anomalie. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 76-89); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 22).

## Prerequisiti
- [[Tipi di attributo]]: la misura dipende dal tipo
- [[Normalizzazione degli attributi]]: evita che un attributo domini la distanza

## Porta a
- [[Riduzione della dimensionalità]]: in alta dimensione le distanze perdono significato
- [[K-nearest neighbor]]: vicini scelti per distanza
- [[Cluster analysis]]: prossimità tra oggetti
- [[Teorema di Cochran]]: forme quadratiche di normali con legge chi-quadro (Modelli statistici)
- [[Regione di confidenza ellissoidale]]: ellissoide di Mahalanobis attorno a $\mathbf C\hat{\boldsymbol\beta}$ (Modelli statistici)

## Collegati
- [[Misure di similarità]]: dissimilarità contro similarità
