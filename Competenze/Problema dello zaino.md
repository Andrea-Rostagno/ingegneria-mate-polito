---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["knapsack problem", "knapsack", "problema knapsack", "zaino binario", "0-1 knapsack"]
tags: [competenza, area/ottimizzazione]
---

# Problema dello zaino

> Problema binario puro: scegliere un sottoinsieme di oggetti (opportunità di investimento) di peso totale entro un budget che massimizzi il valore complessivo.

## Definizione / enunciato
Dati $n$ oggetti con capitale richiesto (peso) $w_j$ e payoff $p_j$, $j\in[n]$, e un budget $B$; $x_j=1$ se l'oggetto $j$ è selezionato:
$$\max\sum_{j=1}^np_jx_j\quad\text{s.t.}\ \sum_{j=1}^nw_jx_j\le B,\quad x_j\in\{0,1\}.$$

## Formule chiave
Esempio numerico delle slide:
$$\max\ 10x_1+7x_2+25x_3+24x_4\ \ \text{s.t. }2x_1+x_2+6x_3+5x_4\le7,\ x_i\in\{0,1\}.$$
Rilassamento continuo ($0\le x_i\le1$): $\mathbf x=(1,1,0,0.8)$, $f=36.2$; ottimo intero $\mathbf x=(1,0,0,1)$, $f=34$.

## Intuizione
Con $n$ variabili binarie ci sono $2^n$ assegnamenti: l'enumerazione completa (albero che ramifica su una variabile per livello) non è praticabile se non per problemi piccoli. Il rilassamento continuo dà un bound: con dati interi, $36.2$ dice che l'ottimo intero non supera 36.

## Come si usa
È l'esempio su cui il corso mostra il branch and bound (albero $P_0,\dots,P_6$: si ramifica su $x_4$, poi $x_1$, poi $x_3$; $P_1$ con bound $33.67$ viene potato dall'incombente 34) e le disuguaglianze di cover ($x_1+x_3\le1$, $x_3+x_4\le1$, $x_1+x_2+x_4\le2$), che abbassano il bound alla radice da $36.2$ a $34.67$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 4); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 4-8, 15-16).

## Prerequisiti
- [[Programmazione lineare mista-intera]]: è un problema binario puro

## Porta a
- [[Algoritmo branch and bound]]: esempio di enumerazione implicita
- [[Disuguaglianze di cover]]: tagli derivati dal vincolo di capacità

## Collegati
- [[Rilassamento continuo]]: bound 36.2 sull'ottimo 34
- [[Problema di assegnamento]]: il vincolo di capacità dell'assegnamento generalizzato è di tipo zaino
