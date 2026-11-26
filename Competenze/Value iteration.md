---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["iterazione dei valori", "value iteration algorithm", "iterazione di valore", "lookahead a un passo", "one-step lookahead"]
tags: [competenza, area/ottimizzazione]
---

# Value iteration

> Si applica ripetutamente l'operatore di ottimalità di Bellman a una stima della funzione valore fino a convergenza, poi si ricava la politica greedy.

## Definizione / enunciato
È l'iterazione di punto fisso $V^{(k+1)}=TV^{(k)}$ applicata all'equazione $V=TV$:
1. si parte da $V^{(0)}$;
2. per ogni $s\in\mathcal S$: $\displaystyle V^{(k+1)}(s)=\max_{a\in\mathcal A(s)}\Big\{R(s,a)+\gamma\sum_{s'\in\mathcal S}P[s'\mid s,a]V^{(k)}(s')\Big\}$;
3. ci si ferma quando $\|V^{(k+1)}-V^{(k)}\|_\infty<\epsilon$.

## Formule chiave
Politica finale:
$$\mu^*(s)=\arg\max_{a\in\mathcal A(s)}\Big\{R(s,a)+\gamma\sum_{s'}P[s'\mid s,a]V^{(K)}(s')\Big\}\qquad\forall s\in\mathcal S .$$
Convergenza: $T$ è una $\gamma$-contrazione in $\ell_\infty$, quindi $\|V^{(k)}-V^*\|_\infty\le\gamma^k\|V^{(0)}-V^*\|_\infty$ (conseguenza del teorema delle contrazioni).

## Intuizione
In ogni stato si fa un albero di lookahead a un passo usando la stima corrente del futuro; il valore corretto si propaga all'indietro di un passo per iterazione, come nella ricorsione del cammino minimo partendo da $V^{(0)}=[+\infty,\dots,0]$.

## Come si usa
Ogni iterazione risolve un problema di ottimizzazione per stato. Accelerazioni: aggiornamento in-place, aggiornamento prioritizzato (prima gli stati che cambiano di più), real time (si simula l'agente e si aggiornano solo gli stati visitati). È un metodo esatto: richiede il modello $P[r,s'\mid s,a]$ e soffre con spazi di stato grandi o continui.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Value Iteration" (Algorithm 1) della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 22-25, 32).

## Prerequisiti
- [[Equazione di Bellman]]: equazione di punto fisso da risolvere
- [[Metodo del punto fisso]]: schema iterativo $x_{n+1}=f(x_n)$

## Porta a
- [[Q-learning]]: versione TD della value iteration sulla funzione $Q$

## Collegati
- [[Policy iteration]]: alternativa con valutazione esatta della politica
- [[Teorema del punto fisso di Banach]]: garantisce la convergenza
- [[Problema dei cammini minimi]]: caso deterministico della stessa ricorsione
