---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Matematica per l'AI, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["dimensionality reduction", "curse of dimensionality", "PCA"]
tags: [competenza, area/data-ml]
---

# Riduzione della dimensionalità

> Tecniche che riducono il numero di dimensioni dei dati per combattere la maledizione della dimensionalità; la principale è la PCA.

## Definizione / enunciato
**Maledizione della dimensionalità** (*curse of dimensionality*): al crescere della dimensione i dati diventano sempre più sparsi nello spazio che occupano, e le nozioni di densità e di distanza tra punti, decisive per clustering e outlier detection, perdono significato. Esperimento delle slide: si generano 500 punti casuali e si calcola la differenza tra distanza massima e minima fra coppie di punti al variare della dimensione.

Scopi della riduzione: evitare la maledizione della dimensionalità, ridurre tempo e memoria degli algoritmi, permettere la visualizzazione, eliminare attributi irrilevanti o ridurre il rumore.

Tecniche: **Principal Component Analysis (PCA)**, Singular Value Decomposition, altre tecniche supervisionate e non lineari.

## Formule chiave
L'obiettivo della PCA nelle slide è descritto a parole: trovare una proiezione che catturi la massima variazione dei dati (prima direzione $e$ nel piano $x_1,x_2$). Nessuna formula esplicita.

## Intuizione
Le nuove dimensioni della PCA sono combinazioni degli attributi originali lungo le direzioni di massima variabilità: si tengono le prime e si scartano quelle con poca varianza, che spesso sono rumore.

## Come si usa
Si applica prima di algoritmi basati su distanze (clustering, KNN) quando gli attributi sono molti. In alternativa si può selezionare un sottoinsieme degli attributi originali (feature selection) o crearne di nuovi.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezioni "Curse of Dimensionality" e "Dimensionality Reduction" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 36-39).
- **Matematica per l'AI** (triennale): impostazione generale negli appunti di lezione: dato $\mathcal X\subset\mathbb R^d$ con $d$ grande si cerca $\varphi:\mathbb R^d\to\mathbb R^e$, $e<d$, che mantenga invariante qualcosa, minimizzi un errore (loss) o massimizzi una quantità di interesse (varianza spiegata); il caso più semplice, $\varphi$ lineare, è la PCA, vista anche come coppia codifica/decodifica $\mathbb R^d\xrightarrow{U}\mathbb R^e\xrightarrow{V}\mathbb R^d$. La maledizione della dimensionalità e la PCA hanno qui note proprie. Nei laboratori: confronto fra PCA, LDA e analisi discriminante di Fisher per proiettare i dati in 2-3 dimensioni (`DimReduction_wine.ipynb`, `DimRedFaces.ipynb`). Fonti: `triennale/ANNO 3/matematica AI/PCA.pdf` (p. 1-5); `curse.pdf` (p. 50).
- **Business intelligence per big data** (magistrale): stesse slide "Dimensionality Reduction" e "PCA" del mazzo di preprocessing; nel mazzo di classificazione gli [[Autoencoder|autoencoder]] comprimono l'input in una rappresentazione compatta da cui lo ricostruiscono, usata come insieme di feature o per il denoising di immagini e segnali. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 37-38); `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (p. 139).
- **Data science lab** (magistrale): maledizione della dimensionalità, PCA e SVD nelle slide di teoria; nel laboratorio la riduzione serve per i grafici e per dare a classificazione e clustering una matrice più compatta (`PCA(n_components=...)`, da adattare solo sul training set). Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 36-39); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 15-19).

## Prerequisiti
- [[Misure di distanza]]: in alta dimensione le distanze perdono significato

## Porta a
- Nessuno.

## Collegati
- [[Campionamento]]: riduzione dei dati per righe e per colonne
- [[Feature selection]]: due modi di ridurre gli attributi
- [[Maledizione della dimensionalità]]: il problema che la riduzione affronta (Matematica per l'AI)
- [[Analisi delle componenti principali]]: il metodo lineare principale (Matematica per l'AI)
