---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI, Statistica computazionale, Dinamiche su network, Ottimizzazione in condizione di incertezza]
livello: [magistrale, triennale]
aliases: ["DTMC", "discrete-time Markov chain", "matrice di transizione", "proprietà di Markov"]
tags: [competenza, area/probabilita]
---

# Catena di Markov a tempo discreto

> Processo a tempo discreto su spazio numerabile in cui il futuro dipende dal passato solo tramite lo stato presente; è descritto da una matrice di transizione e da una distribuzione iniziale.

## Definizione / enunciato
$(X_n)_{n\ge0}$ con spazio degli stati discreto $S$ è una **DTMC** se per ogni $j,i,i_{n-1},\dots,i_0\in S$
$$\mathbb P(X_{n+1}=j\mid X_n=i,X_{n-1}=i_{n-1},\dots,X_0=i_0)=\mathbb P(X_{n+1}=j\mid X_n=i)=p(i,j).$$
Si assume l'omogeneità temporale ($p(i,j)$ non dipende da $n$). $P=(p(i,j))$ è una **matrice stocastica**: entrate non negative e $\sum_{j}p(i,j)=1$. Definizione generale della proprietà di Markov: $X_j\mid\mathcal F_i\sim X_j\mid X_i$ per $j\ge i$.

## Formule chiave
Probabilità di una traiettoria:
$$\mathbb P(X_n=i_n,\dots,X_0=i_0)=\alpha(i_0)\,p(i_0,i_1)\cdots p(i_{n-1},i_n),\qquad \alpha(i)=\mathbb P(X_0=i).$$
Legge di $X_1$: $\nu=\alpha P$.

## Intuizione
La catena è completamente specificata da spazio degli stati, matrice $P$ e distribuzione iniziale $\alpha$, oppure dal grafo di transizione (archi pesati con $p(x,y)>0$). La proprietà di Markov è la forma più semplice di dipendenza con cui estendere LGN e TLC oltre il caso i.i.d.

## Come si usa
- Meteo (lezione 6): stato 1 = pioggia, 2 = sole, con $p(2,2)=0.8$ e $p(1,1)=0.6$. Partendo da sole, la probabilità di sole dopodomani è $p^{(2)}(2,2)=0.8\cdot0.8+0.2\cdot0.4=0.72$.
- Passeggiata aleatoria su $\mathbb Z$: $p(i,i+1)=p$, $p(i,i-1)=q=1-p$.
- Giocatore (lezione 6): stesso schema con lo stato 0 assorbente.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 6 ("The Markov property", "Markov Property in discrete time", "Transition probabilities", "Consequence 1"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Catene di Markov a tempo discreto; argomento 3 di `magistrale/Processi stocastici/topics_2025_26.pdf`; esercizi in `magistrale/Processi stocastici/suggested_exercises_DTMC.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Catene di Markov a tempo discreto; `magistrale/Processi stocastici/suggested_exercises_DTMC.pdf`.
- **Matematica per l'AI** (triennale): appunti a mano di De Gregorio. Motivazione fisica (descrizione microscopica newtoniana contro descrizione statistica, misure di equilibrio di Maxwell-Boltzmann $P(v)\propto e^{-mv^2/k_BT}$ e del sistema canonico $P\propto e^{-\beta H}$; "tramite processi stocastici la misura può evolvere"). Convenzione: stati come vettori riga moltiplicati a destra da $A$; esempio a due stati con $A=\begin{pmatrix}1-\alpha&\alpha\\\beta&1-\beta\end{pmatrix}$, grafo delle transizioni, esempio meteo (soleggiato, nuvoloso, piovoso). Definizione: $(X_n)_{n\ge0}$ è Markov$(\lambda,P)$ se $P(X_0=i_0)=\lambda_{i_0}$ e $P(X_{n+1}=i_{n+1}\mid X_0=i_0,\dots,X_n=i_n)=p_{i_ni_{n+1}}$; teorema: equivale a $P(X_0=i_0,\dots,X_n=i_n)=\lambda_{i_0}p_{i_0i_1}\cdots p_{i_{n-1}i_n}$. Nella parte sui sistemi dinamici, la dinamica deterministica su una partizione di Markov diventa una catena di Markov sulle celle. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 1 (2).pdf` (p. 1-8); `IntroToDynamicalSystems (1).pdf` (p. 8-9).
- **Statistica computazionale** (magistrale): tre usi. (1) **Serie storiche a stati continui**: proprietà di Markov $f(X_{t_i}=x_i\mid X_{t_{i-1}},\dots,X_{t_1})=f(X_{t_i}=x_i\mid X_{t_{i-1}}=x_{i-1})$, "un processo che ha la proprietà di Markov è una Markov chain", con fattorizzazione $f(\mathbf x)=f(x_1)\prod_{i=2}^nf(x_i\mid x_{i-1})$ ed estensione all'**ordine $h$** (dipendenza dagli $h$ tempi precedenti). (2) **MCMC**: il tempo della catena è l'iterazione $b$ e la catena è costruita in modo che la posteriori sia la sua stazionaria. (3) **Stati latenti** di un HMM: $z_i\mid z_{i-1}\sim\mathrm{Disc}(\boldsymbol\pi_{z_{i-1}})$ con matrice di transizione $\mathbf P$ stimata (dati del vento, HMM a 4 stati: forte persistenza, diagonale a posteriori 0.762, 0.878, 0.790, 0.777). Fonti: `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 18-22); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 2, 4); `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 34-36, 54).
- **Dinamiche su network** (magistrale): introdotta come random walk su un grafo $\mathcal G=(\mathcal V,\mathcal E,W)$ con $P=D^{-1}W$ su insieme finito; viceversa ogni catena con matrice $P$ è il random walk sul grafo $W_{ij}=P_{ij}$. Leggi finito-dimensionali $\pi_{i_0}(0)P_{i_0i_1}\cdots P_{i_{t-1}i_t}$, marginali $\pi(t+1)=P'\pi(t)$ (stessa evoluzione della dinamica lineare di flusso). Tabella finale di confronto tempo discreto/continuo. Contesto storico: Markov (1906) le inventa per estendere la legge dei grandi numeri a variabili dipendenti. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 3-10, 56).
- **Ottimizzazione in condizione di incertezza** (magistrale): $(\mathcal S,\mathcal P)$ come base dei processi decisionali; esempio dello stato di una macchina Funzionante/Degradata/Rotta con righe $(0.7,0.3,0)$, $(0,0.6,0.4)$, $(0,0,1)$ e traiettoria W W W D D D B; distribuzioni che cambiano nel tempo si descrivono ancora come catene. Spesso servono simulazioni anche per valori attesi o probabilità semplici. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 10-12); `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 3).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Equazioni di Chapman-Kolmogorov]]: prodotto di matrici di transizione
- [[Proprietà di Markov forte]]: proprietà di Markov estesa
- [[Classi di comunicazione]]: raggiungibilità sul grafo di transizione
- [[Distribuzione stazionaria di una DTMC]]: vettore invariante della matrice P
- [[Rovina del giocatore]]: passeggiata con due stati assorbenti
- [[Catena di Markov a tempo continuo]]: analogo a tempo continuo
- [[Catena embedded]]: è essa stessa una DTMC
- [[Random walk su un grafo]]: ogni catena finita è un random walk su un grafo pesato (Dinamiche su network)
- [[Processo di Markov con ricompensa]]: si aggiungono ricompense e sconto (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Modello di Wright-Fisher]]: catena con due stati assorbenti
- [[Probabilità di impatto e tempo medio di impatto]]: probabilità e tempi di raggiungimento di un insieme (Matematica per l'AI)
- [[Partizione di Markov e dinamica simbolica]]: catena di Markov indotta da una dinamica iperbolica (Matematica per l'AI)
- [[Modello di diffusione probabilistico]]: il processo di rumore in avanti è una catena di Markov gaussiana (Matematica per l'AI)
- [[Autocorrelazione parziale]]: proprietà di Markov di ordine $h$ e PACF nulla oltre $h$ (Statistica computazionale)
- [[Gibbs sampler]]: catena costruita con la posteriori come stazionaria (Statistica computazionale)
- [[Hidden Markov model]]: catena di Markov sugli stati latenti (Statistica computazionale)
