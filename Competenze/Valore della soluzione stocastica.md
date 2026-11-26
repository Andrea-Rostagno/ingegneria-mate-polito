---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["VSS", "value of the stochastic solution", "EEV", "expected value of the expected value solution", "expected value solution", "soluzione del valore medio", "EV problem", "problema del valore atteso"]
tags: [competenza, area/ottimizzazione]
---

# Valore della soluzione stocastica

> Quanto si perde decidendo con lo scenario medio invece di risolvere il problema stocastico: differenza fra il valore atteso della soluzione "del valore medio" (EEV) e il valore della soluzione stocastica (RP).

## Definizione / enunciato
**Expected value solution**: $\bar{\mathbf x}\in\arg\min_{\mathbf x\in X}f_1(\mathbf x)+f_2(\mathbf x,\mathbb E_\xi[\xi])$, ottenuta sostituendo $\xi$ con la media. **EEV** (expected value of the expected value solution) $=\mathbb E_\xi[z(\bar{\mathbf x},\xi)]$: la soluzione del valore medio, valutata però sotto l'incertezza vera (con il ricorso).

## Formule chiave
Nelle lezioni:
$$\mathrm{VSS}=\mathrm{RP}-\mathrm{EEV}\ \ (\text{per min}),\qquad \mathrm{VSS}=\mathrm{EEV}-\mathrm{RP}\ \ (\text{per max}),$$
ma poiché per un minimo vale $\mathrm{WS}\le\mathrm{RP}\le\mathrm{EEV}$, il valore non negativo è $\mathrm{EEV}-\mathrm{RP}$ per un minimo e $\mathrm{RP}-\mathrm{EEV}$ per un massimo: i segni della slide sembrano scambiati (da verificare sul PDF).

## Intuizione
L'EVPI misura il valore di sapere il futuro, il VSS il valore di modellare l'incertezza con il futuro ancora ignoto. Un VSS piccolo dice che il modello deterministico medio basta; un VSS grande giustifica lo sforzo computazionale della programmazione stocastica.

## Come si usa
- **Farmer problem** (massimo): con la soluzione delle rese medie (120, 80, 300 acri) i profitti nei tre scenari sono 148 000, 118 600 e 55 120 €, quindi $\mathrm{EEV}=107\,240$ €; con $\mathrm{RP}=108\,390$ € si ha $\mathrm{VSS}=1\,150$ € (sottrazione fatta sui numeri delle lezioni).
- **TSP con domanda aleatoria** (minimo): il percorso ottimo per la domanda media $(0,A,B,C,D,0)$ costa 10 o 18 (fallimento con viaggio di ritorno), $\mathrm{EEV}=14$; il ricorso $(0,C,B,A,D,0)$ dà $\mathrm{RP}=12.5$, quindi la soluzione stocastica fa risparmiare 1.5 (calcolo dai dati).

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Indicatori" della Parte II. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 12-13, 18-20, 36-37).

## Prerequisiti
- [[Programmazione stocastica a due stadi]]: definisce RP e il ricorso
- [[Valore dell'informazione perfetta]]: la catena $\mathrm{WS}\le\mathrm{RP}\le\mathrm{EEV}$

## Collegati
- [[Problema del newsvendor]]: esempio su cui calcolare gli indicatori
- [[Ottimizzazione sotto incertezza]]: perché non basta la previsione puntuale
