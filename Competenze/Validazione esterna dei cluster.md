---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["misure esterne", "entropia del cluster", "purezza", "purity", "Rand index"]
tags: [competenza, area/data-ml]
---

# Validazione esterna dei cluster

> Valutazione di un clustering confrontandolo con etichette di classe note, tramite entropia, purezza e Rand index.

## Definizione / enunciato
Un **indice esterno** misura quanto le etichette dei cluster coincidono con etichette di classe fornite dall'esterno. Per il cluster $j$ si calcola $p_{ij}=m_{ij}/m_j$, "probabilità" che un membro del cluster $j$ appartenga alla classe $i$ ($m_j$ dimensione del cluster, $m_{ij}$ oggetti della classe $i$ nel cluster $j$).

**Rand index**: due oggetti nello stesso cluster dovrebbero essere nella stessa classe e viceversa. Si contano le coppie: $f_{00}$ classe diversa e cluster diverso, $f_{01}$ classe diversa e stesso cluster, $f_{10}$ stessa classe e cluster diverso, $f_{11}$ stessa classe e stesso cluster.

## Formule chiave
Entropia del cluster $j$ ($L$ classi) e totale ($K$ cluster, $m$ punti):
$$e_j=-\sum_{i=1}^{L}p_{ij}\log_2 p_{ij},\qquad e=\sum_{j=1}^{K}\frac{m_j}{m}e_j$$
(verificato sul PDF p. 94: la slide scrive $e_j=\sum_i p_{ij}\log_2 p_{ij}$ senza il segno meno, che va aggiunto perché i valori della tabella sono positivi).
$$purity_j=\max_i p_{ij},\qquad purity=\sum_{j=1}^{K}\frac{m_j}{m}\,purity_j$$
$$\text{Rand Index}=\frac{f_{00}+f_{11}}{f_{00}+f_{01}+f_{10}+f_{11}}$$

## Intuizione
Entropia bassa e purezza alta indicano cluster dominati da una sola classe. Il Rand index conta la frazione di coppie su cui cluster e classi "sono d'accordo". Nelle slide il Rand index compare nell'elenco degli indici interni (p. 89) ma è definito rispetto alle classi (p. 95).

## Come si usa
Esempio delle slide (K-means su documenti LA, 6 cluster, classi Entertainment, Financial, Foreign, Metro, National, Sports): il cluster 3 (quasi tutto Sports, 671) ha entropia 0.1813 e purezza 0.9796; il cluster 4 ha entropia 1.7487 e purezza 0.4390; totale entropia 1.1450 e purezza 0.7203.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Cluster Validity", misure esterne. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13 - 11-DMClustering-26-27.pdf` (pp. 89, 94-95).
- **Business intelligence per big data** (magistrale): stesse misure esterne (entropia, purezza, Rand index). Fonti: `magistrale/Business intelligence per big data/04-DMClustering_BI.pdf` (pp. 84-86).
- **Data science lab** (magistrale): entropia, purezza e Rand index nelle slide di teoria; in laboratorio l'**Adjusted Rand Score** (`adjusted_rand_score(c_truth, c_pred)`): circa 0 per assegnazioni casuali, 1 per accordo perfetto, valori negativi se peggiore del caso; non controlla l'uguaglianza delle etichette ma se i dati sono raggruppati allo stesso modo (con `c_truth = [1,1,2,2,2,1]` e `c_pred = [2,2,1,1,1,2]` vale 1). Citato anche l'indice di Fowlkes-Mallows. Fonti: `magistrale/Data science lab/slide testo/9-DMClustering.pdf` (p. 84-86); `slide py/9-ScikitLearn-Clustering.pdf` (p. 7-8).

## Prerequisiti
- [[Cluster analysis]]: valutare i cluster trovati

## Porta a
- Nessuno.

## Collegati
- [[Validazione interna dei cluster]]: senza e con etichette di classe
- [[Misure di impurità]]: entropia e purezza rispetto alle classi
