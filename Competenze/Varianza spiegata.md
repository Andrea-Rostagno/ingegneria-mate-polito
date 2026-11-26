---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI, Data science lab]
livello: [triennale, magistrale]
aliases: ["proportion of variance explained", "PVE", "varianza spiegata cumulativa", "CPVE", "percentuale di varianza spiegata", "scree plot", "regola del gomito", "elbow rule", "varianza totale", "scelta del numero di componenti principali"]
tags: [competenza, area/data-ml]
---

# Varianza spiegata

> Frazione della varianza totale dei dati catturata da ciascuna componente principale; serve a decidere quante componenti tenere.

## Definizione / enunciato
Per variabili centrate la **varianza totale** è
$$\sum_{j=1}^p\mathrm{Var}(X_j)=\sum_{j=1}^p\frac1n\sum_{i=1}^nx_{ij}^2=\mathrm{tr}(\Sigma)=\sum_i\lambda_i ,$$
e la varianza spiegata dalla $m$-esima componente è $\mathrm{Var}(Z_m)=\frac1n\sum_{i=1}^nz_{im}^2=\lambda_m$. Vale $\sum_{j=1}^p\mathrm{Var}(X_j)=\sum_{m=1}^M\mathrm{Var}(Z_m)$ con $M=\min(n-1,p)$.

## Formule chiave
$$\mathrm{PVE}_m=\frac{\sum_{i=1}^nz_{im}^2}{\sum_{j=1}^p\sum_{i=1}^nx_{ij}^2}=\frac{\lambda_m}{\mathrm{tr}(A)}=\frac{\lambda_m}{\sum_j\lambda_j}\in[0,1],\qquad \mathrm{CPVE}_k=\frac{\sum_{i=1}^k\lambda_i}{\sum_{i=1}^d\lambda_i}.$$
Le PVE sommano a 1. Nel notebook: $\Lambda=\sum_i\lambda_i=\sum_i(\mathrm{Cov}(X))_{ii}$ è la varianza totale, la varianza spiegata con $m$ componenti è $\sum_{i=1}^m\lambda_i$.

## Intuizione
Poiché la traccia è invariante per cambio di base ortonormale, la varianza totale si ridistribuisce fra le componenti in ordine decrescente: se le prime poche raccolgono quasi tutto, i dati vivono vicino a un sottospazio di dimensione bassa. Il rumore bianco $\mathcal N(0,I_d)$ è il caso opposto: tutti gli autovalori uguali, nessuna direzione privilegiata (appunti).

## Come si usa
Due criteri, entrambi soggettivi: (1) compromesso fra $m$ piccolo e percentuale di varianza spiegata alta (es. soglia 0.90 nel laboratorio sui funghi); (2) **scree plot** dei $\lambda_i$ o delle PVE e ricerca del "gomito". Non esiste una risposta semplice: le slide osservano che la cross-validation non è disponibile per questo scopo e chiedono quando lo diventi (la PCA da sola è non supervisionata). Attenzione alla scala: con unità diverse si standardizza (PCA su $\mathrm{Corr}(X)$), che però "appiattisce" la distribuzione della varianza fra le componenti.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/PCA.pdf` (p. 24-26, 44-49); esempi `PCAintro.ipynb` (scelta di $m$, scree plot), `linSVMMushrooms.ipynb`.
- **Data science lab** (magistrale): "Choosing the correct number of components": `PCA(n_components=130)`, poi `plt.plot(pca.explained_variance_ratio_, marker='o', linestyle='')` e si cerca un gomito per decidere quante componenti tenere (vedi [[Grafici con Matplotlib]]). Fonti: `magistrale/Data science lab/slide py/10-ScikitLearn-Preprocessing.pdf` (p. 18).

## Prerequisiti
- [[Analisi delle componenti principali]]: le componenti di cui si misura la varianza
- [[Invarianti di un endomorfismo]]: la traccia è somma degli autovalori

## Porta a
- [[Legge di Marchenko-Pastur]]: in alta dimensione gli autovalori campionari sono distorti

## Collegati
- [[Varianza]]: la varianza di ciascuna variabile e componente
- [[Metodi di stima dell'accuratezza]]: perché la cross-validation non sceglie $m$
