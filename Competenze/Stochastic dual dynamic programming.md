---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["SDDP", "programmazione dinamica duale stocastica", "cut approximations", "approssimazioni tramite tagli", "passo forward", "forward pass", "passo backward", "backward pass"]
tags: [competenza, area/ottimizzazione]
---

# Stochastic dual dynamic programming

> Per problemi multistadio con rumore indipendente fra stadi: si approssimano dal basso le funzioni valore attese con tagli, alternando un passo forward su pochi scenari campionati e un passo backward che aggiunge tagli dai duali.

## Definizione / enunciato
Ipotesi: $\xi_t$ indipendente da $\xi_{[t-1]}$ (albero ricombinante). Le funzioni valore attese $\mathcal Q_t$ sono sostituite da approssimazioni poliedrali esterne $\mathcal V_t$ (max di funzioni affini), da cui
$$\underline Q_t(\mathbf x_{t-1},\xi_t)=\min_{\mathbf x_t,\theta_{t+1}}\ \mathbf c_t(\xi_t)^T\mathbf x_t+\theta_{t+1}\ \ \text{s.t. }\mathbf x_t\in\mathcal X_t(\mathbf x_{t-1},\xi_t),\ \ \theta_{t+1}\ge\alpha^i_{t+1,k}+(\boldsymbol\beta^i_{t+1,k})^T\mathbf x_t\ \ \forall i,k .$$
- **Forward**: si campiona $K\subseteq\mathcal S$, $|K|\ll|\mathcal S|$, e si risolvono in sequenza i problemi lungo ogni scenario ottenendo punti di prova $\mathbf x_t^{ik}$ (all'inizio $\mathcal V_t=0$, una traiettoria euristica o un lower bound).
- **Backward**: da $T$ a 2 si risolvono i problemi in ogni punto di prova per tutte le $q_t$ realizzazioni e si aggiunge un taglio.

## Formule chiave
$$\alpha^i_{tk}=\sum_{j=1}^{q_t}p_{tj}\Big[\underline Q^{i+1}_t(\mathbf x^{ik}_{t-1},\xi_{tj})-(\boldsymbol\beta^i_{tkj})^T\mathbf x^{ik}_{t-1}\Big],\qquad \boldsymbol\beta^i_{tk}=\sum_{j=1}^{q_t}p_{tj}\boldsymbol\beta^i_{tkj},\qquad \boldsymbol\beta^i_{tkj}=-(\boldsymbol\pi^{ikj}_t)^TT_{t-1,j},$$
$$\mathcal V^{i+1}_t(\mathbf x_{t-1})=\max\{\mathcal V^i_t(\mathbf x_{t-1}),\phi^i_{t1},\dots,\phi^i_{t|K|}\},\quad \phi^i_{tk}=\alpha^i_{tk}+(\boldsymbol\beta^i_{tk})^T\mathbf x_{t-1}.$$
Lower bound $v^i=\min_{\mathbf x_1}\mathbf c_1^T\mathbf x_1+\mathcal V_2^{i+1}(\mathbf x_1)$; il costo medio sugli scenari forward $v^i_K$ è solo una stima non distorta dell'upper bound.

## Intuizione
Il backward è una "backpropagation" dei valori: ogni taglio è un iperpiano di supporto valido perché le funzioni valore sono convesse e il duale ha regione indipendente dalla decisione precedente. Con $|K|=1$ la stima dell'upper bound è poco significativa, quindi alla fine si simula la politica con molti cammini ($|K|\in\{1000,10000\}$).

## Come si usa
Esempio a 3 stadi: $\min x_1+\mathcal Q_2(x_1)$, $x_1\in[0,6]$; $\min x_2+\mathcal Q_3(x_2)$, $x_2\ge\xi_2-x_1$; $Q_3(x_2,\xi_3)=|\xi_3-x_2|$; $\xi_2\in\{4,5,6\}$, $\xi_3\in\{1,2,4\}$. Forward con $|K|=1$: $x_1=0$, $x_2=5$, costo 6. Backward: in $x_2=5$ i duali valgono $-1$, taglio $\theta_3\ge-\frac73+x_2$ (pendenza 1 per $(5,\frac83)$); allo stadio 2 il taglio ha pendenza $-2$ e passa per $(0,\frac{23}3)$; alla radice $x_1=6$, $\theta_1=\frac{23}3-12=-\frac{13}3$, $v^1=\frac53$.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Stochastic Dual Dynamic Programming" con calcolo del subgradiente e criterio di arresto. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 16-27).

## Prerequisiti
- [[Programmazione stocastica multistadio]]: il problema risolto
- [[Convessità della funzione di ricorso]]: rende validi i tagli
- [[Metodo L-shaped]]: tagli di ottimalità dai duali

## Collegati
- [[Decomposizione di Benders annidata]]: versione esatta sull'albero intero
- [[Stabilità in-sample e out-of-sample]]: valutazione finale della politica per simulazione
- [[Value iteration]]: anch'essa approssima la funzione valore all'indietro
- [[Teorema di dualità forte]]: i coefficienti $\boldsymbol\beta$ vengono dai duali
