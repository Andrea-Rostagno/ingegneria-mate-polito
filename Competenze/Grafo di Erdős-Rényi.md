---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Erdos-Renyi random graph", "Erdős-Rényi random graph", "grafo di Erdos-Renyi", "G(n,p)", "grafo aleatorio di Erdős-Rényi", "random graph", "grafo casuale"]
tags: [competenza, area/network]
---

# Grafo di Erdős-Rényi

> Grafo aleatorio semplice su $n$ nodi in cui ogni coppia è collegata indipendentemente con probabilità $p$: il modello di riferimento dei grafi aleatori, con gradi binomiali (Poisson nel regime sparso) e struttura localmente ad albero.

## Definizione / enunciato
$G(n,p)$: grafo semplice con $n\ge2$ nodi, ogni coppia $\{i,j\}$, $i\neq j$, è un arco indipendentemente con probabilità $p\in[0,1]$ ($p=0$: nodi isolati; $p=1$: completo). Motivazione: quando il grafo non è noto ma se ne conoscono statistiche, lo si suppone estratto a caso da un insieme con quelle statistiche e si cercano risultati "con alta probabilità".

## Formule chiave
- Grado: $\mathbb P(w_i=k)=\binom{n-1}kp^k(1-p)^{n-1-k}$. I gradi di nodi diversi sono debolmente correlati: $\mathbb P(w_i=0,w_j=0)=(1-p)^{2n-3}=\frac{\mathbb P(w_i=0)\mathbb P(w_j=0)}{1-p}$, e per $n\to\infty$, $p\to0$, $\mathbb P(w_i=k,w_j=k)=\mathbb P(w_i=k)\mathbb P(w_j=k)(1+o(1))$.
- **Proposizione** ($p=\lambda/n$): la distribuzione empirica dei gradi converge in probabilità a Poisson, $\frac1n|\{i:w_i=k\}|\to e^{-\lambda}\frac{\lambda^k}{k!}$.
- Conteggi attesi: archi $\binom n2p\sim\frac{n^2p}2$; triangoli $\binom n3p^3\sim\frac{(np)^3}6$ (che tende a $\lambda^3/6$ se $p=\lambda/n$); $k$-cicli $\frac{n(n-1)\cdots(n-k+1)}{2k}p^k\sim\frac{(np)^k}{2k}$.

## Intuizione
Nel regime sparso ($p=\lambda/n$) un nodo ha in media $\lambda$ vicini, i cicli corti sono pochi e l'esplorazione del vicinato di un nodo è un processo di Galton-Watson Poisson($\lambda$).

## Come si usa
**Limiti del modello:** per essere connesso $G(n,p)$ non può essere sparso; per avere la componente gigante deve essere localmente ad albero, con pochi triangoli e gradi Poisson. Non si possono ottenere insieme connessione (o componente gigante) con grafo sparso, distribuzione dei gradi arbitraria (ad esempio legge di potenza) e molti triangoli: da qui modello di configurazione, attaccamento preferenziale, small world.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "Why random graphs?", "The Erdős-Rényi Random Graph", "Degree distribution", "Erdos-Renyi in two slides", "Limitations". Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 2, 14-15, 18, 20-22).

## Prerequisiti
- [[Grafo]]: grafo semplice
- [[Distribuzione binomiale]]: legge del grado

## Porta a
- [[Connettività del grafo di Erdős-Rényi]]: soglia $p=\log n/n$
- [[Componente gigante]]: soglia $p=1/n$
- [[Attaccamento preferenziale]]: alternativa con legge di potenza
- [[Modello small-world]]: alternativa con molti triangoli

## Collegati
- [[Distribuzione di Poisson]]: limite della distribuzione dei gradi
- [[Velocità di convergenza al consenso]]: i grafi aleatori sono expander
