---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["cluster validity", "coesione", "separazione", "silhouette", "coefficiente di silhouette", "misure interne"]
tags: [competenza, area/data-ml]
---

# Validazione interna dei cluster

> Valutazione della bontà di un clustering usando solo i dati, tramite coesione, separazione e coefficiente di silhouette.

## Definizione / enunciato
Validare i cluster serve a evitare di trovare pattern nel rumore (anche su punti casuali DBSCAN, K-means e complete link trovano "cluster"), a confrontare algoritmi, clustering o singoli cluster. Aspetti: tendenza al clustering, confronto con etichette esterne, adattamento ai dati senza informazione esterna, confronto tra clustering, numero "corretto" di cluster.

Le misure si dividono in **esterne**, **interne** (bontà della struttura senza informazione esterna: SSE, coesione, separazione, silhouette) e **relative** (confronto tra clustering, usando un indice interno o esterno).
- **Coesione**: quanto sono legati gli oggetti di un cluster (somma dei quadrati entro i cluster, WSS = SSE);
- **Separazione**: quanto un cluster è distinto dagli altri (somma dei quadrati tra cluster, BSS).
In alternativa, su un grafo di prossimità: coesione = somma dei pesi dei link interni, separazione = somma dei pesi verso l'esterno.

## Formule chiave
$$WSS=\sum_i\sum_{x\in C_i}(x-m_i)^2,\qquad BSS=\sum_i|C_i|\,(m-m_i)^2$$
Silhouette dell'oggetto $i$: $a(i)$ = dissimilarità media da tutti gli altri oggetti del suo cluster; $b(i)$ = minimo, sugli altri cluster, della dissimilarità media di $i$ dagli oggetti di quel cluster:
$$s(i)=\frac{b(i)-a(i)}{\max\{a(i),b(i)\}}$$

## Intuizione
$s(i)$ sta tra $-1$ e $+1$, tipicamente tra 0 e 1, e più è vicino a 1 meglio è: $i$ è vicino al suo cluster e lontano dagli altri. La media di $s(i)$ su un cluster misura quanto è compatto; la media su tutto il dataset misura la bontà del clustering.

## Come si usa
Usi tipici: scegliere $K$ in K-means (gomito dell'SSE, silhouette media), confrontare due clustering degli stessi dati. Citazione finale delle slide (Jain e Dubes): la validazione è la parte più difficile e frustrante della cluster analysis.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Cluster Validity" del mazzo di clustering. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/13 - 11-DMClustering-26-27.pdf` (pp. 85-93, 96).
- **Business intelligence per big data** (magistrale): stessa sezione "Cluster Validity" (cluster trovati in dati casuali, coesione e separazione, silhouette). Fonti: `magistrale/Business intelligence per big data/04-DMClustering_BI.pdf` (pp. 75-83).
- **Data science lab** (magistrale): coesione, separazione e silhouette; in scikit-learn `silhouette_score(X, clusters)` (media) e `silhouette_samples` (per punto), valori in $[-1,1]$, più alti = cluster coesi e separati, calcolo costoso $O(n^2)$; anche l'SSE è una misura interna. Fonti: `magistrale/Data science lab/slide testo/9-DMClustering.pdf` (p. 78-83); `slide py/9-ScikitLearn-Clustering.pdf` (p. 6).

## Prerequisiti
- [[Cluster analysis]]: valutare i cluster trovati
- [[K-means]]: SSE come misura di coesione

## Porta a
- Nessuno.

## Collegati
- [[Validazione esterna dei cluster]]: senza e con etichette di classe
