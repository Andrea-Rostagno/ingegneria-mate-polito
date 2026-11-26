---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["simplex method", "simplesso primale", "primal simplex", "algoritmo del simplesso", "costi ridotti", "reduced costs", "regola di Dantzig", "fase 1 del simplesso", "variabili artificiali", "forma di inammissibilità", "test del rapporto minimo"]
tags: [competenza, area/ottimizzazione]
---

# Metodo del simplesso

> Algoritmo di Dantzig (1947) per l'LP: si passa da una soluzione basica ammissibile a una adiacente migliore, scegliendo la variabile entrante con i costi ridotti e quella uscente con il test del rapporto minimo.

## Definizione / enunciato
Data una base ammissibile, $\mathbf x_B=A_B^{-1}(\mathbf b-A_N\mathbf x_N)=\bar{\mathbf b}-A_B^{-1}A_N\mathbf x_N$ e
$$\mathbf c^T\mathbf x=\hat f+\hat{\mathbf c}_N^T\mathbf x_N,\qquad\hat{\mathbf c}_N^T=\mathbf c_N^T-\mathbf c_B^TA_B^{-1}A_N\quad(\text{costi ridotti}),\qquad\hat f=\mathbf c_B^T\bar{\mathbf b}.$$
**Test di ottimalità:** se $\hat{\mathbf c}_N\ge\mathbf 0$ la base è ottima; equivalentemente $\mathbf c^T-\mathbf c_B^TA_B^{-1}A\ge\mathbf 0$ (per le basiche $\hat{\mathbf c}_B=\mathbf 0$).

## Formule chiave
Se $\hat c_q<0$, $x_q$ entra (regola di Dantzig: $\hat c_q=\min_{j\notin B}\hat c_j$). Con $\mathbf d=A_B^{-1}A_q$, $\mathbf b=\sum_i(x_{B(i)}-\theta d_i)A_{B(i)}+\theta A_q$:
- se $d_i\le0$ per ogni $i$, $x_q$ cresce senza limite: problema **illimitato**;
- altrimenti $x_q=\theta=\min_{i:d_i>0}\bar b_i/d_i$ e la variabile che raggiunge il minimo esce dalla base.

**Fase 1:** con $\mathbf b\ge\mathbf 0$ si aggiungono variabili artificiali, $A\mathbf x+\mathbf z=\mathbf b$, e si minimizza $\varphi=\sum_iz_i$ partendo da $\mathbf x=\mathbf 0$, $\mathbf z=\mathbf b$; se $\varphi^*=0$ si ha una base ammissibile per il problema originale.

## Intuizione
Il costo ridotto è la variazione marginale del costo portando in base una variabile, tenendo conto di come le basiche cambiano per rispettare $A\mathbf x=\mathbf b$. Il passo è determinato dal fatto che tutte le variabili sono vincolate in segno.

## Come si usa
Esempio delle slide (mix ottimo con slack $s_1,s_2,s_3$): base iniziale $\{s_1,s_2,s_3\}$, costi ridotti $(-45,-60)$, entra $x_2$, $\theta=\min\{68.57,160,50\}=50$, esce $s_3$; poi entra $x_1$ ($\theta=43.33$, esce $s_1$, profitto 4950); poi rientra $s_3$ ($\theta=13.08$, esce $s_2$); base finale $\{x_1,x_2,s_3\}$ con costi ridotti $(1.2692,1.0385)\ge0$: ottimo $(73.8462,36.9231)$, contributo $5538.46$. La regola di Dantzig non è quella delle implementazioni reali (non considera il passo effettivo, è costosa su grandi problemi; con vertici degeneri si può ciclare).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 8-19).

## Prerequisiti
- [[Soluzione basica ammissibile]]: il simplesso visita basi ammissibili
- [[Programmazione lineare]]: forma standard
- [[Metodo di eliminazione di Gauss]]: si risolvono sistemi con $A_B$

## Porta a
- [[Dualità nella programmazione lineare]]: simplesso duale e costi ridotti come variabili duali
- [[Algoritmo branch and bound]]: si risolve un LP in ogni nodo

## Collegati
- [[Mix ottimo di produzione]]: esempio risolto passo per passo
- [[Metodo di Nelder-Mead]]: omonimo "simplex search", tutt'altro metodo
