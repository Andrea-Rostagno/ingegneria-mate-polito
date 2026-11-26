---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["multiperiod production planning", "modelli dinamici di produzione", "bilancio di magazzino", "formulazione elastica", "elastic formulation", "vincoli morbidi", "soft constraints", "overtime"]
tags: [competenza, area/ottimizzazione]
---

# Pianificazione della produzione multiperiodo

> Modelli LP dinamici in cui domanda e capacità variano nel tempo e i livelli di magazzino, legati da un'equazione di bilancio, collegano i periodi.

## Definizione / enunciato
Dati $d_{it}$ (domanda del prodotto $i$ nel periodo $t\in[T]$), $R_{jt}$ (capacità), costi $c_{it}$ di produzione e $h_i$ di giacenza. Variabili: produzione $x_{it}$, magazzino $I_{it}$ (variabili di stato), vendite $z_{it}$. Massimizzazione del profitto:
$$\max\sum_{i,t}\big(p_iz_{it}-c_{it}x_{it}-h_iI_{it}\big)\ \ \text{s.t.}\ I_{it}=I_{i,t-1}+x_{it}-z_{it},\ \ \sum_ir_{ij}x_{it}\le R_{jt},\ \ z_{it}\le d_{it},\ \ x,z,I\ge0 .$$

## Formule chiave
Soddisfacimento della domanda a costo minimo: $\min\sum_{i,t}h_iI_{it}$ con $I_{it}=I_{i,t-1}+x_{it}-d_{it}$; la non negatività di $I_{it}$ implica $I_{i,t-1}+x_{it}\ge d_{it}$.

**Formulazioni elastiche:** con vendite perse $y_{it}$,
$$\min\sum_{i,t}h_iI_{it}+\omega\sum_{i,t}y_{it},\qquad I_{it}=I_{i,t-1}+x_{it}-(d_{it}-y_{it}),\ 0\le y_{it}\le d_{it};$$
oppure con straordinari $O_{mt}\ge0$: $\sum_ir_{im}x_{it}\le R_{mt}+O_{mt}$ e penalità $\omega\sum O$ nell'obiettivo.

## Intuizione
Il magazzino adatta la variabilità della domanda alla capacità disponibile. Il costo di giacenza $\sum_tI_{it}$ discretizza l'integrale del modello EOQ (la media $\frac{I_{i,t-1}+I_{it}}2$ differisce solo per termini costanti). Il modello di costo minimo può essere non ammissibile se la capacità è insufficiente: rendendo "morbidi" i vincoli duri con una penalità $\omega$ si ottiene sempre una soluzione.

## Come si usa
La produzione di un periodo è vendibile nello stesso periodo; $I_{i0}$ è un dato. Il modello di profitto è sempre ammissibile, quello di costo minimo no: si sceglie quale vincolo rilassare (domanda o capacità).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 5-8).

## Prerequisiti
- [[Mix ottimo di produzione]]: versione statica
- [[Programmazione lineare]]: il modello è un LP

## Porta a
- [[Lot-sizing]]: aggiunge setup e variabili binarie

## Collegati
- [[Modello EOQ]]: la giacenza è la discretizzazione dello stesso integrale
- [[Funzioni di penalità e barriera]]: la penalità $\omega$ trasforma vincoli duri in morbidi
