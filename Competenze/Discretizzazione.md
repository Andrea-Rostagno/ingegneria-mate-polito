---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["discretization", "binning", "equal width", "equal frequency", "binarizzazione", "binarization"]
tags: [competenza, area/data-ml]
---

# Discretizzazione

> Conversione di un attributo continuo in uno ordinale con poche categorie; la binarizzazione trasforma poi un attributo in variabili binarie.

## Definizione / enunciato
La **discretizzazione** mappa un numero potenzialmente infinito di valori in un piccolo numero di categorie (attributo ordinale). È usata soprattutto nella classificazione, perché molti algoritmi funzionano meglio se variabili indipendenti e dipendenti hanno pochi valori.

- **Non supervisionata**: cerca interruzioni nei valori, senza usare la classe;
- **Supervisionata**: usa le etichette di classe per trovare i punti di taglio.

Tecniche non supervisionate:
- $N$ intervalli di **uguale ampiezza** (approccio incrementale): facile ma sensibile a outlier e dati sparsi;
- $N$ intervalli di **uguale frequenza** (circa la stessa cardinalità, approccio non incrementale): si adatta meglio a dati sparsi e outlier;
- **clustering** (es. k-means);
- analisi della distribuzione (es. 4 intervalli, uno per quartile).

La **binarizzazione** mappa un attributo in una o più variabili binarie: un continuo va prima reso categorico; un categorico diventa un insieme di attributi binari, ad esempio con **one-hot encoding** (basso, medio, alto come 100, 010, 001).

## Formule chiave
$$W=\frac{v_{\max}-v_{\min}}{N}$$
ampiezza degli intervalli nella discretizzazione a uguale ampiezza.

## Intuizione
Con poche categorie le regole diventano leggibili: nell'esempio Iris, "larghezza o lunghezza del petalo bassa implica Setosa", "media implica Versicolour", "alta implica Virginica".

## Come si usa
Esempio delle slide: quattro gruppi di punti più due outlier, discretizzati in 4 valori con uguale ampiezza, uguale frequenza e k-means; l'ampiezza uguale è quella più disturbata dagli outlier. Gli item delle regole di associazione sono attributi binari, quindi la binarizzazione serve anche lì (collegamento nostro).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezioni "Discretization" e "Binarization" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 44-53).
- **Business intelligence per big data** (magistrale): stesse sezioni "Discretization" (esempio Iris, tecniche non supervisionate) e "Binarization" del mazzo di preprocessing. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 43-52).
- **Data science lab** (magistrale): stesso materiale (esempio Iris, discretizzazione non supervisionata a pari ampiezza $W=(v_{max}-v_{min})/N$, a pari frequenza e con K-means, supervisionata, binarizzazione). Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 44-53).

## Prerequisiti
- [[Tipi di attributo]]: da continui a categorici

## Porta a
- Nessuno.

## Collegati
- [[Misure di impurità]]: discretizzazione supervisionata con l'entropia
- [[Regola di associazione]]: attributi binari come item
