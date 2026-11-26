---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["hierarchical clustering", "agglomerativo", "divisivo", "dendrogramma", "MIN", "MAX", "group average", "metodo di Ward"]
tags: [competenza, area/data-ml]
---

# Clustering gerarchico

> Clustering che produce cluster annidati, rappresentati da un dendrogramma, unendo (agglomerativo) o dividendo (divisivo) un cluster alla volta.

## Definizione / enunciato
Produce un insieme di cluster annidati organizzati come albero, visualizzabile con un **dendrogramma** (registra la sequenza di fusioni o divisioni). Non serve fissare il numero di cluster: si "taglia" il dendrogramma al livello voluto; i cluster possono corrispondere a tassonomie significative (es. filogenesi).
- **Agglomerativo**: si parte da cluster di un punto e a ogni passo si fondono i due più vicini, fino a uno (o $K$) cluster.
- **Divisivo**: si parte da un unico cluster e lo si divide finché ogni cluster ha un punto (o ci sono $K$ cluster).

Algoritmo agglomerativo: calcola la matrice di prossimità; ogni punto è un cluster; ripeti: fondi i due cluster più vicini e aggiorna la matrice; finché resta un solo cluster.

## Formule chiave
Prossimità tra cluster:
- **MIN** (single link): coppia di punti più vicini;
- **MAX** (complete link): coppia di punti più lontani;
- **group average**: $\displaystyle \text{proximity}(C_i,C_j)=\frac{\sum_{p_i\in C_i,\,p_j\in C_j}\text{proximity}(p_i,p_j)}{|C_i|\,|C_j|}$;
- distanza tra centroidi;
- **Ward**: aumento dell'errore quadratico dopo la fusione.

Costo: spazio $O(N^2)$ per la matrice di prossimità, tempo $O(N^3)$ in molti casi, riducibile a $O(N^2\log N)$.

## Intuizione
MIN gestisce forme non ellittiche ma è sensibile a rumore e outlier; MAX è meno sensibile al rumore ma tende a spezzare cluster grandi e preferisce cluster globulari; group average è un compromesso. Ward è l'analogo gerarchico di K-means e può servire a inizializzarlo.

## Come si usa
Esempio svolto delle slide (6 punti, matrice delle distanze). **Single link**: fusioni $p_3+p_6$ a 0.11, $p_2+p_5$ a 0.14, $\{p_3,p_6\}+\{p_2,p_5\}$ a 0.15 (parità a 0.15), $+p_4$ a 0.15, $+p_1$ a 0.22. **Complete link**: $p_3+p_6$ a 0.11, $p_2+p_5$ a 0.14, $\{p_3,p_6\}+p_4$ a 0.22, $\{p_2,p_5\}+p_1$ a 0.34, fusione finale a 0.39. Ad esempio $d(\{p_3,p_6\},p_1)=\min(0.22,0.23)=0.22$ con MIN e $\max(0.22,0.23)=0.23$ con MAX.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Hierarchical Clustering" del mazzo di clustering ed esempio svolto dedicato. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13 - 11-DMClustering-26-27.pdf` (pp. 41-70); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13b - hierarchical_clustering_example.pdf` (pp. 1-16).
- **Business intelligence per big data** (magistrale): stessa sezione "Hierarchical Clustering": algoritmo agglomerativo, similarità fra cluster MIN, MAX, group average e metodo di Ward, confronto, requisiti di tempo e spazio. Fonti: `magistrale/Business intelligence per big data/04-DMClustering_BI.pdf` (pp. 41-67).
- **Data science lab** (magistrale): agglomerativo e divisivo, dendrogramma, similarità fra cluster MIN, MAX, group average, Ward; in scikit-learn `AgglomerativeClustering(5, linkage='average')`, solo `fit`/`fit_predict`. Fonti: `magistrale/Data science lab/slide testo/9-DMClustering.pdf` (p. 42-67); `slide py/9-ScikitLearn-Clustering.pdf` (p. 5).

## Prerequisiti
- [[Cluster analysis]]: algoritmo gerarchico

## Porta a
- Nessuno.

## Collegati
- [[K-means]]: bisecting k-means e confronto
