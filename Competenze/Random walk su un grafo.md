---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["random walk on a graph", "passeggiata aleatoria su un grafo", "random walk su grafo", "formula di Kac", "Kac's formula", "tempo medio di ritorno e centralità"]
tags: [competenza, area/network]
---

# Random walk su un grafo

> Un camminatore che da ogni nodo salta su un vicino con probabilità proporzionale al peso del link: è la catena di Markov con matrice $P=D^{-1}W$, e ogni catena di Markov finita è un random walk su un grafo.

## Definizione / enunciato
Dato $\mathcal G=(\mathcal V,\mathcal E,W)$ e $P=D^{-1}W$: si parte da $i$ con probabilità $\pi_i(0)$ e da ogni nodo $i$ si salta in $j$ con probabilità $P_{ij}$. $X(t)$ = posizione al tempo $t$:
1. proprietà di Markov $\mathbb P(X(t+1)=i_{t+1}\mid X(0)=i_0,\dots,X(t)=i_t)=P_{i_ti_{t+1}}$;
2. condizione iniziale $\mathbb P(X(0)=i)=\pi_i(0)$.
Viceversa, una catena con matrice $P$ è il random walk sul grafo con $\mathcal E=\{(i,j):P_{ij}>0\}$, $W_{ij}=P_{ij}$.

## Formule chiave
- Leggi marginali: $\pi(t+1)=P'\pi(t)$, la stessa dinamica dei flussi lineari.
- **Teorema.** Se $\mathcal G$ è connesso esiste un'unica stazionaria $\pi=P'\pi$, con $\pi_i>0$; se è anche aperiodico, $\pi(t)\to\pi$ per ogni $\pi(0)$.
- Grafo non orientato: $\pi_i=w_i/\sum_jw_j$ e il walk è reversibile.
- **Formula di Kac:** se $\mathcal G$ è fortemente connesso, $\pi_i=1/\mathbb E_i[T^+_i]$, con $T^+_i=\min\{t\ge1:X(t)=i\}$ tempo di ritorno. Il tempo di ritorno soddisfa $\mathbb E_i[T^+_i]=1+\sum_jP_{ij}\mathbb E_j[T_i]$.

## Intuizione
La centralità di distribuzione invariante di un nodo è l'inverso di quanto si aspetta prima di tornarci: i nodi centrali si rivisitano spesso.

## Come si usa
Esempio delle slide: grafo orientato a 8 nodi $v_0,\dots,v_7$ (la matrice $W$ non è simmetrica, ad esempio $W_{v_3v_0}=1$ ma $W_{v_0v_3}=0$) con out-degree $w=(2,3,2,1,3,4,2,3)$; la stazionaria, ottenuta risolvendo $P'\pi=\pi$, è $\pi=(0.1887,0.2264,0.1887,0.1132,0.1132,0.0755,0.0377,0.0566)$, non proporzionale ai gradi proprio perché il grafo non è bilanciato. Su questo grafo si calcolano anche tempi e probabilità di impatto su $\mathcal S=\{v_0,v_7\}$. Applicazione storica: Markov (1906) introdusse le catene per estendere la legge dei grandi numeri a variabili dipendenti.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 7, "Random walks", "Random walks and Markov chains", "Return times". Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 3-11, 25-26, 35-36).

## Prerequisiti
- [[Matrice stocastica]]: matrice di transizione $P=D^{-1}W$
- [[Catena di Markov a tempo discreto]]: definizione di catena di Markov

## Porta a
- [[Probabilità di impatto e tempo medio di impatto]]: tempi e probabilità di colpire un insieme

## Collegati
- [[Centralità di distribuzione invariante]]: $\pi$ = frazione di tempo nei nodi
- [[Teorema ergodico per DTMC]]: medie temporali = medie spaziali
- [[Distribuzione stazionaria di una DTMC]]: $\pi=P'\pi$
- [[Ricorrenza positiva]]: tempo medio di ritorno finito
- [[Centralità di Bonacich]]: PageRank come random walk con salti casuali
