---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["similarity measures", "Simple Matching Coefficient", "SMC", "coefficiente di Jaccard", "similarità del coseno", "cosine similarity", "correlazione", "similarità combinata"]
tags: [competenza, area/data-ml]
---

# Misure di similarità

> Misure numeriche di quanto due oggetti si assomigliano: SMC e Jaccard per vettori binari, coseno per documenti, correlazione di Pearson per relazioni lineari.

## Definizione / enunciato
La **similarità** è più alta per oggetti più simili e spesso sta in $[0,1]$. Proprietà: $s(\mathbf x,\mathbf y)=1$ (massimo) solo se $\mathbf x=\mathbf y$; simmetria $s(\mathbf x,\mathbf y)=s(\mathbf y,\mathbf x)$.

**Vettori binari**: $M_{01}$, $M_{10}$, $M_{00}$, $M_{11}$ contano gli attributi in cui $p$ e $q$ valgono rispettivamente 0-1, 1-0, 0-0, 1-1.

La **correlazione** misura la relazione lineare tra due oggetti con variabili binarie o continue; è utile nell'esplorazione, e le feature correlate andrebbero rimosse.

## Formule chiave
$$SMC=\frac{M_{11}+M_{00}}{M_{01}+M_{10}+M_{11}+M_{00}},\qquad J=\frac{M_{11}}{M_{01}+M_{10}+M_{11}}$$
$$\cos(d_1,d_2)=\frac{d_1\cdot d_2}{\|d_1\|\,\|d_2\|}$$
Similarità combinata su attributi eterogenei, con $\delta_k=0$ se l'attributo $k$ è asimmetrico e vale 0 in entrambi o se manca un valore, $\delta_k=1$ altrimenti, e pesi $\omega_k\ge0$:
$$\text{similarity}(\mathbf x,\mathbf y)=\frac{\sum_{k=1}^n\omega_k\delta_k s_k(\mathbf x,\mathbf y)}{\sum_{k=1}^n\omega_k\delta_k}$$
Correlazione di Pearson:
$$\text{corr}(\mathbf x,\mathbf y)=\frac{s_{xy}}{s_x s_y},\quad s_{xy}=\frac{1}{n-1}\sum_{k=1}^n(x_k-\bar x)(y_k-\bar y)$$

## Intuizione
Jaccard ignora le coppie 0-0, utili poco per dati asimmetrici e sparsi (molti zeri). Il coseno ignora la lunghezza dei documenti e guarda solo la direzione dei vettori dei termini. La correlazione vede solo relazioni lineari: con $y_i=x_i^2$ e $x=(-3,\dots,3)$ vale 0.

## Come si usa
Esempio delle slide: $p=1000000000$, $q=0000001001$: $M_{01}=2$, $M_{10}=1$, $M_{00}=7$, $M_{11}=0$, quindi $SMC=0.7$ e $J=0$. Coseno: $d_1=3\,2\,0\,5\,0\,0\,0\,2\,0\,0$, $d_2=1\,0\,0\,0\,0\,0\,0\,1\,0\,2$, $d_1\cdot d_2=5$, $\|d_1\|=6.481$, $\|d_2\|=2.245$, $\cos=0.3150$.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezioni "Similarity Between Binary Vectors", "Cosine Similarity", combinazione di similarità e "Correlation" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 59-60, 67, 70-79).
- **Business intelligence per big data** (magistrale): stesse slide su vettori binari (SMC e Jaccard), similarità del coseno e combinazione pesata di similarità. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 67-71).
- **Data science lab** (magistrale): SMC contro Jaccard su vettori binari, similarità del coseno fra vettori di documenti $\cos(d_1,d_2)=(d_1\cdot d_2)/(\|d_1\|\,\|d_2\|)$, combinazione di similarità per attributi eterogenei anche con pesi $\omega_k$. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 90-94).

## Prerequisiti
- [[Tipi di attributo]]: binari, documenti, vettori

## Porta a
- Nessuno.

## Collegati
- [[Misure di distanza]]: dissimilarità contro similarità
- [[Vector space model]]: similarità del coseno tra documenti
- [[Misure di interesse delle regole]]: lift e correlazione misurano la dipendenza
