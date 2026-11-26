---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["plant location", "facility location", "problema di localizzazione", "network design", "capacitated plant location"]
tags: [competenza, area/ottimizzazione]
---

# Localizzazione di impianti

> Generalizzazione MILP del problema del trasporto in cui si decide anche quali sorgenti aprire, pagando un costo fisso: il più semplice modello di network design.

## Definizione / enunciato
Destinazioni con domanda $d_j$, costi di trasporto $c_{ij}$; ogni potenziale sorgente $i\in\mathcal S$ ha costo fisso di apertura $f_i$ e capacità $R_i$; $y_i=1$ se la sorgente è aperta:
$$\min\sum_{i\in\mathcal S}f_iy_i+\sum_{i\in\mathcal S}\sum_{j\in\mathcal D}c_{ij}x_{ij}\quad\text{s.t.}\ \sum_{i\in\mathcal S}x_{ij}=d_j\ \ \forall j,\qquad\sum_{j\in\mathcal D}x_{ij}\le R_iy_i\ \ \forall i,\qquad x_{ij}\ge0,\ y_i\in\{0,1\}.$$

## Formule chiave
Il vincolo $\sum_jx_{ij}\le R_iy_i$ è un vincolo di tipo grande M con $M=R_i$: se l'impianto è chiuso non spedisce nulla.

## Intuizione
Due tipi di variabili molto diversi: le **variabili di progetto** $y_i$ (strategiche) e le **variabili di controllo** $x_{ij}$ (operative). Il termine di costo di trasporto è una funzione di anticipazione: stima l'effetto operativo della scelta strategica.

## Come si usa
Limitazioni del modello delle slide: costi di trasporto lineari (niente economie di scala), domanda e costi deterministici, trasporto punto-punto, modello statico (non considera il tempo). La stessa struttura, "nel tempo" anziché nello spazio, dà la riformulazione forte del lot-sizing CLSP.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 28-29); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 18).

## Prerequisiti
- [[Problema del trasporto]]: ne è la generalizzazione
- [[Vincoli con grande M]]: lega flussi e apertura

## Collegati
- [[Lot-sizing]]: riformulazione plant location nel tempo
- [[Struttura dei costi]]: costo fisso di apertura più costo variabile di trasporto
