---
tipo: competenza
area: data-ml
corsi: [Data science lab, Business intelligence per big data]
livello: [magistrale]
aliases: [autoencoders, AE, encoder, decoder, codice latente, code, errore di ricostruzione, reconstruction error, RE]
tags: [competenza, area/data-ml]
---

# Autoencoder

> Rete neurale formata da un **encoder**, che comprime l'input in un vettore di dimensione minore (il "codice"), e da un **decoder**, che prova a ricostruire l'input dal codice; l'errore di ricostruzione misura quanto un punto è "atteso".

## Definizione / enunciato
(`DSML-Anomaly-Detection.pdf` p. 9) L'encoder comprime l'input $N$-dimensionale in un vettore $D$-dimensionale (il codice); se $D<N$, come accade di solito, la compressione **perde informazione** se i dati hanno rango pieno. Il decoder prende il codice e cerca di ricostruire l'input originale. Encoder e decoder sono pile di strati lineari alternati a non linearità.
- In addestramento l'AE impara a comprimere e ricostruire bene i dati **tipici**.
- Dopo l'addestramento, un punto ben ricostruito era un punto "atteso" (errore di ricostruzione basso, normale); i punti che l'AE ricostruisce male sono **anomali**, perché ne ha visti pochi di simili.

## Formule chiave
Errore di ricostruzione: una "distanza" fra input e output ricostruito, es. MSE per variabili continue, binary cross-entropy per variabili binarie. Nel notebook, per ogni immagine MNIST (784 pixel in $[0,1]$):
$$RE(x)=\sum_{j}(x_j-\hat x_j)^2 .$$

## Intuizione
La strozzatura del codice costringe la rete a tenere solo la struttura comune dei dati: ciò che è raro non trova posto nel codice e non si ricostruisce.

## Come si usa
Notebook `anomaly-detection.ipynb`: encoder $784\to256\to64\to10$ e decoder $10\to64\to256\to784$ con ReLU e sigmoide finale, `Adam(lr=1e-2)`, `MSELoss`, batch da 256, 10 epoche; poi istogramma degli errori e visualizzazione delle 10 immagini peggio ricostruite.

## Nei corsi
- **Data science lab** (magistrale): metodo neurale del blocco di anomaly detection. Fonti: `magistrale/Data science lab/slide testo/DSML-Anomaly-Detection.pdf` (p. 9); esempio in `slide testo/anomaly-detection.ipynb` ("Neural Network-based methods").
- **Business intelligence per big data** (magistrale): una slide nella sezione sulle reti neurali: l'autoencoder comprime l'input in una rappresentazione compatta e da essa lo ricostruisce; usi: estrazione di feature (la rappresentazione compressa come insieme di feature) e denoising di immagini o segnali (l'immagine ricostruita è ripulita rispetto all'originale rumorosa). Fonti: `magistrale/Business intelligence per big data/05-DMClassification_BI.pdf` (p. 139). Collegamento: [[Riduzione della dimensionalità]], la rappresentazione compressa riduce le dimensioni.

## Prerequisiti
- [[Rete neurale artificiale]]: strati lineari e non linearità
- [[Rilevamento di anomalie]]: l'errore di ricostruzione come punteggio

## Collegati
- [[Analisi delle componenti principali]]: anche la PCA comprime in $D<N$ dimensioni e ricostruisce (autoencoder lineare)
- [[Ciclo di addestramento in PyTorch]]: l'AE del notebook è addestrato con il ciclo standard
