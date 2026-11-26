---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["L-shaped method", "L-shaped decomposition", "L-shaped algorithm", "metodo L-shaped single cut", "multicut L-shaped", "versione multicut", "regularized decomposition", "decomposizione regolarizzata"]
tags: [competenza, area/ottimizzazione]
---

# Metodo L-shaped

> Decomposizione di Benders per la programmazione stocastica a due stadi: il master contiene $\mathbf x$ e una variabile $\theta$ che stima il costo atteso del ricorso, i sottoproblemi di scenario forniscono i tagli.

## Definizione / enunciato
Con scenari finiti la matrice dei vincoli ha forma a "L": $A$ sopra, e per ogni scenario $T_s$ sotto $A$ e $W_s$ sulla diagonale. Si riscrive $\min\mathbf c^T\mathbf x+\sum_s\pi_sQ_s(\mathbf x)$ con $Q_s(\mathbf x)=\min_{\mathbf y_s}\{\mathbf q_s^T\mathbf y_s:T_s\mathbf x+W_s\mathbf y_s=\mathbf h_s,\ \mathbf y_s\ge\mathbf 0\}$ e, con ricorso relativamente completo e dualità forte, $Q_s(\mathbf x)=D_s(\mathbf x)=\max\{(\mathbf h_s-T_s\mathbf x)^T\mathbf u:W_s^T\mathbf u\le\mathbf q\}$.

## Formule chiave
**Single cut**: master all'iterazione $K$
$$\min\ \mathbf c^T\mathbf x+\theta\quad\text{s.t. }A\mathbf x=\mathbf b,\ \ \theta\ge\sum_{s=1}^S\pi_s\big(\mathbf h_s-T_s\mathbf x\big)^T\mathbf u_s^{(k)}\ \ \forall k\in[K-1],\ \ \mathbf x\ge\mathbf 0,$$
con $\mathbf u_s^{(K)}$ ottimi duali in $\mathbf x^*_{(K)}$. Arresto quando $\theta^*_{(K)}\ge\sum_s\pi_s(\mathbf h_s-T_s\mathbf x^*_{(K)})^T\mathbf u_s^*$. **Multicut**: una variabile $\theta_s$ per scenario e tagli $\theta_s\ge(\mathbf h_s-T_s\mathbf x)^T\mathbf u_s^*$. **Regularized decomposition**: multicut più $\frac12\|\mathbf x-\mathbf x_{K-1}\|^2$ nell'obiettivo del master.

## Intuizione
Ogni iterazione aggiunge un iperpiano di supporto di $\mathcal Q(\mathbf x)$, esatto nel punto corrente perché considera tutti gli scenari. Il multicut porta più informazione (empiricamente meno iterazioni, utile se $S$ non è molto maggiore del numero di vincoli di primo stadio); la regolarizzazione evita le prime iterazioni inefficienti e la degenerazione finale. Senza ricorso relativamente completo servono anche i tagli di ammissibilità.

## Come si usa
Esempio delle lezioni: $\min\frac12x+\mathbb E[y_1+y_2]$, $0\le x\le10$, $y_1-y_2=\xi-x$, $\xi\in\{1,2,4\}$ equiprobabili, duale $\max\{(\xi-x)u:-1\le u\le1\}$. Da $x=0$ tutti i duali valgono $u=1$ e il taglio è $\theta\ge\frac73-x$; il master dà $x^*=10$, dove $u=-1$ e il taglio è $\theta\ge x-\frac73$. In versione multicut la prima iterazione darebbe $\theta_1\ge\frac{1-x}3$, $\theta_2\ge\frac{2-x}3$, $\theta_3\ge\frac{4-x}3$. (Nelle lezioni un passaggio scrive $\xi=3$ invece di $\xi=2$, refuso.)

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): sezione "L Shaped" della Parte III; citato nelle slide sulla decomposizione. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 50-57); `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 5-6, 21).

## Prerequisiti
- [[Decomposizione di Benders]]: è il suo caso stocastico
- [[Programmazione stocastica a due stadi]]: il problema risolto
- [[Convessità della funzione di ricorso]]: rende validi i tagli
- [[Ricorso completo e relativamente completo]]: niente tagli di ammissibilità

## Porta a
- [[Decomposizione di Benders annidata]]: estensione multistadio
- [[Stochastic dual dynamic programming]]: versione campionata multistadio

## Collegati
- [[Sample average approximation]]: produce il modello a scenari da decomporre
- [[Progressive hedging]]: decomposizione alternativa per scenari
- [[Metodo trust region]]: la regolarizzazione quadratica limita i passi del master
