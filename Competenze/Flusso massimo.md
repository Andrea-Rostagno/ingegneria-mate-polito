---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["maximum flow problem", "max flow", "problema del flusso massimo", "conservazione del flusso", "nodi di transshipment"]
tags: [competenza, area/ottimizzazione]
---

# Flusso massimo

> Trovare il massimo flusso inviabile da un nodo sorgente a un nodo destinazione di una rete orientata con capacità sugli archi, rispettando la conservazione del flusso.

## Definizione / enunciato
Rete orientata aciclica con sorgente $s$, destinazione $d$, nodi intermedi (di transshipment) $\mathcal T=\mathcal N\setminus\{s,d\}$, capacità $u_{ij}$ sugli archi. Il flusso $t$ entra in $s$ ed esce da $d$ (rete in equilibrio). Con $x_{ij}$ flusso sull'arco $(i,j)$:
$$\max\ t\quad\text{s.t.}\ \sum_{i\in\mathcal N_j^-}x_{ij}=\sum_{i\in\mathcal N_j^+}x_{ji}\ \ (j\in\mathcal T),\qquad\sum_{i\in\mathcal N_s^+}x_{si}=t,\qquad\sum_{i\in\mathcal N_d^-}x_{id}=t,\qquad0\le x_{ij}\le u_{ij}.$$

## Formule chiave
I tre gruppi di vincoli esprimono la conservazione del flusso rispettivamente nei nodi intermedi, in $s$ e in $d$; $\mathcal N_j^+$ e $\mathcal N_j^-$ sono successori e predecessori di $j$.

## Intuizione
In ogni nodo intermedio quanto entra esce; il flusso totale è limitato dalle capacità degli archi lungo i cammini da $s$ a $d$.

## Come si usa
Il modello si può risolvere come LP generico oppure con algoritmi dedicati che sfruttano la struttura speciale (non trattati nelle slide). Esempio delle slide: rete con nodi $1,\dots,6$, $\mathcal N_2^+=\{3,4,5,6\}$, $\mathcal N_6^-=\{2,4\}$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 25-26).
- **Dinamiche su network** (magistrale): formulazione con la matrice di incidenza su un multigrafo con capacità $c>0$: $\tau^*_{od}=\max\tau$ s.t. $\tau\ge0$, $0\le f\le c$, $Bf=\tau(\delta^{(o)}-\delta^{(d)})$; è un programma lineare sempre ammissibile ($f=0$, $\tau=0$). Esempio con $c_{e_1}=2,c_{e_2}=2,c_{e_3}=1,c_{e_4}=4,c_{e_5}=2$: un flusso ha throughput 3, uno migliore 4, che è il massimo. Qui gli algoritmi dedicati sono trattati: teorema max-flow min-cut e Ford-Fulkerson. Fonti: `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 23-25).

## Prerequisiti
- [[Grafo]]: rete orientata con successori e predecessori
- [[Programmazione lineare]]: formulazione come LP

## Porta a
- [[Teorema max-flow min-cut]]: il valore ottimo è la capacità del taglio minimo (Dinamiche su network)

## Collegati
- [[Algoritmo di Ford-Fulkerson]]: algoritmo dedicato per il flusso massimo (Dinamiche su network)
- [[Decomposizione dei flussi]]: il flusso sugli archi come somma di flussi sui cammini (Dinamiche su network)
- [[Flusso a costo minimo]]: stessa conservazione, obiettivo di costo
- [[Equazione di continuità]]: analogo della conservazione del flusso nei fluidi (collegamento concettuale, non nelle slide)
