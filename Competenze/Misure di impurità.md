---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Modelli statistici, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["indice di Gini", "Gini index", "entropia di un nodo", "information gain", "guadagno informativo", "gain ratio", "errore di classificazione"]
tags: [competenza, area/data-ml]
---

# Misure di impurità

> Misure (indice di Gini, entropia, errore di classificazione) del grado di disomogeneità delle classi in un nodo, usate per scegliere l'attributo di split in un albero di decisione.

## Definizione / enunciato
Si preferiscono attributi che producono nodi con distribuzione di classe **omogenea** (bassa impurità). Il guadagno di uno split è la differenza fra l'impurità del padre $M_0$ e l'impurità pesata dei figli: si confronta $M_0-M_{12}$ con $M_0-M_{34}$. Misure: **indice di Gini**, **entropia**, **errore di classificazione**; algoritmi diversi usano misure diverse.

## Formule chiave
$p(j|t)$ = frequenza relativa della classe $j$ nel nodo $t$, $n_c$ numero di classi.
$$GINI(t)=1-\sum_j[p(j|t)]^2,\qquad \text{max } 1-\tfrac{1}{n_c},\ \text{min } 0$$
$$GINI_{split}=\sum_{i=1}^{k}\frac{n_i}{n}\,GINI(i)\quad(\text{CART, SLIQ, SPRINT})$$
$$Entropy(t)=-\sum_j p(j|t)\log_2 p(j|t),\qquad \text{max } \log n_c,\ \text{min } 0$$
$$GAIN_{split}=Entropy(p)-\sum_{i=1}^{k}\frac{n_i}{n}Entropy(i)\quad(\text{ID3, C4.5})$$
$$GainRATIO_{split}=\frac{GAIN_{split}}{SplitINFO},\qquad SplitINFO=-\sum_{i=1}^{k}\frac{n_i}{n}\log\frac{n_i}{n}\quad(\text{C4.5})$$

## Intuizione
L'information gain premia split in molte partizioni piccole ma pure (al limite un ramo per ID); il gain ratio corregge penalizzando le partizioni con entropia alta. Per attributi continui si ordinano i valori e si scandiscono linearmente le posizioni di taglio aggiornando la matrice dei conteggi.

## Come si usa
Esempi delle slide (6 record): classi (0,6) $\to$ Gini 0, entropia 0; (1,5) $\to$ Gini 0.278, entropia 0.65; (2,4) $\to$ Gini 0.444, entropia 0.92; (3,3) $\to$ Gini 0.500. Split binario su B: padre (6,6) con Gini 0.500; N1 = (5,2) con Gini 0.408, N2 = (1,4) con Gini 0.32; $GINI_{split}=\tfrac{7}{12}\cdot0.408+\tfrac{5}{12}\cdot0.32=0.371$. Taxable Income: il taglio migliore a 97 ha Gini 0.300.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione sulla scelta del miglior attributo. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/12 - DSTBD_10-DMClassification.pdf` (pp. 26-41).
- **Modelli statistici** (magistrale): stesse formule come indici di eterogeneità di una variabile categorica con probabilità $\pi_1,\dots,\pi_D$: entropia di Shannon $H=-\sum\pi_i\log\pi_i$ (con $0\log0=0$) e diversità di Gini $G=1-\sum\pi_i^2$, probabilità che due osservazioni indipendenti abbiano livelli diversi; $0\le H\le\log D$, $0\le G\le(D-1)/D$, massimi con livelli equiprobabili (libro, cap. 15, Def. 15.8-15.9, Prop. 15.10). Fonti: `Libri/Modelli statistici/capitoli/cap15.tex` (§15.3, pp. 252-253).
- **Business intelligence per big data** (magistrale): stesse slide su GINI (attributi booleani, categorici, continui) ed entropia (INFO) con il confronto fra criteri di split. Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (pp. 28-41).
- **Data science lab** (magistrale): indice di Gini, entropia e information gain, gain ratio, errore di classificazione per scegliere lo split; negli alberi di regressione l'impurità diventa la varianza (`10-DMRegression.pdf` p. 22). Fonti: `magistrale/Data science lab/slide testo/8-DMClassification.pdf` (p. 28-46).

## Prerequisiti
- [[Albero di decisione]]: scelta dell'attributo di split

## Porta a
- [[Distribuzione Multinoulli]]: indici di variabilità di una variabile categorica (Modelli statistici)
- [[Distribuzione multinomiale]]: le frequenze relative dei conteggi stimano le $\pi_i$ negli indici (Modelli statistici)

## Collegati
- [[Discretizzazione]]: discretizzazione supervisionata con l'entropia
- [[Validazione esterna dei cluster]]: entropia e purezza rispetto alle classi
