---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["big M", "big-M constraints", "trucco della grande M", "grande M", "costo fisso di attivazione", "variabili semi-continue", "semi-continuous variables"]
tags: [competenza, area/ottimizzazione]
---

# Vincoli con grande M

> Tecnica per legare una variabile continua a una binaria con un vincolo lineare $x\le M\delta$: modella costi fissi, variabili semi-continue e setup, al prezzo di rilassamenti deboli se $M$ è grande.

## Definizione / enunciato
Costo variabile più fisso: $TC(x)=cx+f\gamma(x)$ con $\gamma(x)=1$ se $x>0$, $0$ se $x=0$ (funzione gradino, discontinua e non lineare). Si introduce $\delta\in\{0,1\}$ ($\delta=1$ se $x>0$) e si scrive
$$TC(x)=cx+f\delta,\qquad x\le M\delta,$$
con $M$ costante sufficientemente grande (upper bound valido su $x$).

## Formule chiave
**Variabili semi-continue** ($x_i\in\{0\}\cup[m_i,M_i]$, insieme non convesso):
$$x_i\ge m_i\delta_i,\qquad x_i\le M_i\delta_i .$$
Nel lot-sizing CLSP: $x_{it}\le M_{it}\delta_{it}$ con $M_{it}=\sum_{\tau=t}^Td_{i\tau}$.

## Intuizione
Se $\delta=0$ il vincolo forza $x=0$; se $\delta=1$ non pone limiti effettivi. Nel rilassamento continuo ($\delta\in[0,1]$) la regione diventa il triangolo sotto la retta di pendenza $M$: più $M$ è grande, più il triangolo è largo e il bound è debole.

## Come si usa
Avvertenze delle slide:
- la rappresentazione non è perfettamente equivalente, perché si può pagare il costo fisso con $\delta=1$ e $x=0$; all'ottimo però non accade;
- vincoli con $M$ grande rendono inefficaci le strategie di enumerazione implicita: conviene il più piccolo upper bound possibile su $x$;
- evitare prodotti come $x\delta$, che introducono non linearità.

Rimedio radicale: riformulare il modello (per esempio la riformulazione plant location del CLSP, che sostituisce $M_{it}$ con $d_{ip}$).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap2.pdf` (p. 10-12); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 13); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 17-19).

## Prerequisiti
- [[Vincoli logici con variabili binarie]]: binarie come decisioni di attivazione
- [[Struttura dei costi]]: costo fisso più variabile

## Porta a
- [[Lot-sizing]]: setup legati alla produzione
- [[Localizzazione di impianti]]: apertura legata ai flussi ($x\le R_iy_i$)

## Collegati
- [[Rilassamento continuo]]: una grande M indebolisce il bound
- [[Regressione regolarizzata]]: $-\delta_j\le\beta_j/M\le\delta_j$ per contare i coefficienti
