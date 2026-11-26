---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["invariant distribution centrality", "centralità della distribuzione invariante", "potere sociale", "social power"]
tags: [competenza, area/network]
---

# Centralità di distribuzione invariante

> La centralità data dalla distribuzione invariante $\pi=P'\pi$ della matrice stocastica del grafo: è insieme frazione di tempo del random walk, peso nel consenso di French-DeGroot e distribuzione asintotica della massa.

## Definizione / enunciato
Si chiede $z_i\propto\sum_{j\in N_i^-}\frac{1}{w_j}z_j=\sum_jP_{ji}z_j$, cioè
$$z=P'z\ \Longrightarrow\ z=\pi,$$
la distribuzione invariante di $P=D^{-1}W$. Rispetto alla centralità ad autovettore, ogni nodo $j$ divide la propria importanza tra i suoi $w_j$ link uscenti.

## Formule chiave
- Se $\mathcal G$ è bilanciato: $\pi\propto w=w^-$, quindi centralità di distribuzione invariante = centralità di grado.
- È unica se e solo se c'è un solo pozzo nel grafo di condensazione; altrimenti le invarianti formano un simplesso.
- Ruoli di $\pi$ (Slides 7): misura la centralità; fissa il valore di consenso $\pi'x(0)$; dà la frazione di tempo del random walk in ogni nodo; descrive l'asintotica di altre dinamiche (gossip, votante); $\pi_i=1/\mathbb E_i[T_i^+]$.

## Intuizione
È il "voto" di un nodo nell'opinione finale della rete: un agente è potente se ascoltato da agenti potenti che ascoltano poche altre persone.

## Come si usa
Esempi delle slide (French-DeGroot su 5 nodi): per il grafo non orientato non pesato $\pi=(1/6,1/3,1/4,1/6,1/12)$, proporzionale ai gradi; per un grafo orientato si risolve il sistema $P'\pi=\pi$ e si trova $\pi=(1/8,3/8,1/4,1/8,1/8)$. Difetti: con un solo pozzo solo i nodi del pozzo hanno centralità non nulla. La centralità di Bonacich risolve il problema.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 2 ("Invariant distribution centrality"), poi Slides 5 (potere sociale) e Slides 7 ("The many roles of the invariant distribution centrality"). Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 61-67); `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (pp. 26-32); `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (p. 11).

## Prerequisiti
- [[Matrice stocastica]]: definizione e unicità di $\pi$

## Porta a
- [[Centralità di Bonacich]]: miscela con una centralità intrinseca
- [[Modello di French-DeGroot]]: il consenso è $\pi'x(0)$

## Collegati
- [[Centralità ad autovettore]]: versione con pesi non normalizzati
- [[Random walk su un grafo]]: $\pi$ è la frazione di tempo nei nodi
- [[Distribuzione stazionaria di una DTMC]]: stessa equazione $\pi=\pi P$
