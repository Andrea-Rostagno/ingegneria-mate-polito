---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["stochastic matrix", "matrice dei pesi normalizzata", "normalized weight matrix", "P = D^{-1}W", "Perron-Frobenius per matrici stocastiche", "invariant distribution of a graph", "simplesso delle distribuzioni invarianti"]
tags: [competenza, area/network]
---

# Matrice stocastica

> La matrice $P=D^{-1}W$ ottenuta normalizzando per righe i pesi di un grafo: è la matrice di transizione del random walk e il motore di tutte le dinamiche lineari di media; le sue proprietà spettrali riflettono la topologia del grafo.

## Definizione / enunciato
Dato $\mathcal G=(\mathcal V,\mathcal E,W)$ con out-degree $w_i=\sum_jW_{ij}>0$, la **matrice dei pesi normalizzata** è
$$P_{ij}=w_i^{-1}W_{ij},\qquad P=D^{-1}W,\quad D=\operatorname{diag}(w).$$
È **stocastica**: $P_{ij}\ge0$ e $P\mathbb 1=\mathbb 1$. Una **distribuzione invariante** è $\pi\ge0$ con $\mathbb 1'\pi=1$ e $P'\pi=\pi$.

**Teorema (proprietà spettrali delle matrici stocastiche).**
- $\lambda_P=1$, $P\mathbb 1=\mathbb 1$ ed esiste $\pi\ge0$, $\mathbb 1'\pi=1$, $P'\pi=\pi$;
- ogni autovalore $\mu$ ha $|\mu|\le1$;
- se $\mathcal G$ è connesso, 1 è semplice e $\pi_i>0$ per ogni $i$;
- se $\mathcal G$ è connesso e aperiodico, ogni $\mu\neq1$ ha $|\mu|<1$.

**Risultato raffinato.** Sia $s_{\mathcal G}$ il numero di pozzi del grafo di condensazione. Le distribuzioni invarianti formano un simplesso in $\mathbb R^{\mathcal V}$ con $s_{\mathcal G}$ vertici; per ogni componente pozzo con nodi $\mathcal W$ c'è una $\pi$ con $\pi_i>0$ se e solo se $i\in\mathcal W$; $\pi$ è unica se e solo se $s_{\mathcal G}=1$.

## Formule chiave
Grafo **bilanciato** ($w_i=w_i^-$):
$$\sum_iw_iP_{ij}=\sum_iW_{ij}=w_j^-=w_j\ \Longrightarrow\ P'w=w,\qquad \pi=\frac{w}{\mathbb 1'w}.$$
Se il grafo è connesso è l'unica distribuzione invariante. Il simplesso $K=\{x\ge0,\ \sum_ix_i=1\}$ delle distribuzioni è invariante: $p\in K\Rightarrow P'p\in K$.

## Intuizione
$P_{ij}$ è la frazione dell'influenza (o della massa) che $i$ riceve da (o manda a) $j$. Il vettore $\mathbb 1$ a destra dice "il consenso è un equilibrio"; il vettore $\pi$ a sinistra dice "quanto pesa ciascun nodo alla fine".

## Come si usa
Nelle slide: la stessa $P$ descrive il modello di French-DeGroot $x(t+1)=Px(t)$, la dinamica di flusso $y(t+1)=P'y(t)$ e l'evoluzione della legge del random walk $\pi(t+1)=P'\pi(t)$. Per calcolare $\pi$ si risolve $P'\pi=\pi$; nei grafi non orientati basta normalizzare i gradi.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 2 ("The normalized weight matrix", "PF theory for stochastic matrices", "balanced graphs"), richiamata in Slides 5. Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 25, 33-50); `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (p. 13).

## Prerequisiti
- [[Grafo]]: pesi, out-degree, grafi bilanciati
- [[Teorema di Perron-Frobenius]]: autovalore dominante di matrici non negative
- [[Grafo di condensazione]]: i pozzi indicizzano le distribuzioni invarianti
- [[Periodo di uno stato]]: l'aperiodicità separa 1 dagli altri autovalori

## Porta a
- [[Centralità di distribuzione invariante]]: $\pi$ come misura di centralità
- [[Modello di French-DeGroot]]: dinamica $x(t+1)=Px(t)$
- [[Random walk su un grafo]]: $P$ come matrice di transizione
- [[Proprietà contrattive delle matrici stocastiche]]: prova alternativa della convergenza
- [[Dinamica lineare di flusso su rete]]: $y(t+1)=P'y(t)$

## Collegati
- [[Laplaciano di un grafo]]: $L=D(I-P)$, analogo in tempo continuo
- [[Distribuzione stazionaria di una DTMC]]: stesso oggetto nel linguaggio delle catene di Markov
- [[Potenze della matrice di adiacenza]]: positività di $P^t$ e connessione
