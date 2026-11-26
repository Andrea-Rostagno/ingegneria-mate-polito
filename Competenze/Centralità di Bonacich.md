---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Bonacich centrality", "PageRank", "Page-rank", "Random walk su grafi e PageRank", "algoritmo PageRank", "Google PageRank", "centralità intrinseca", "intrinsic centrality"]
tags: [competenza, area/network]
---

# Centralità di Bonacich

> Combinazione convessa tra la centralità di distribuzione invariante e una centralità intrinseca: è definita su ogni grafo, si espande come somma sui walk entranti e, con $\mu$ uniforme e $\beta\approx0.15$, è il PageRank di Google.

## Definizione / enunciato
Con $P=D^{-1}W$, $\beta\in(0,1)$ e $\mu\ge0$ (centralità intrinseca):
$$z=(1-\beta)P'z+\beta\mu\qquad\Longrightarrow\qquad z=\big(I-(1-\beta)P'\big)^{-1}\beta\mu .$$
**PageRank (Google):** $\mu=n^{-1}\mathbb 1$, $\beta\sim0.15$.

## Formule chiave
Espansione in serie:
$$z_i=\beta\sum_{k=0}^{\infty}(1-\beta)^k\sum_j\mu_j(P^k)_{ji}
=\beta\Big[\mu_i+(1-\beta)\sum_{j}\mu_jP_{ji}+(1-\beta)^2\sum_{j,h}\mu_hP_{hj}P_{ji}+\cdots\Big].$$
- È definita in modo unico per ogni grafo $\mathcal G$.
- $\beta=0$: nessuna rete, $z=\mu$ è la centralità intrinseca. $\beta\to1$: conta solo la rete e si ritrova la centralità di distribuzione invariante. *(Così nelle slide, p. 74; con la formula sopra $\beta\to1$ sembra dare $\mu$ e $\beta\to0$ la parte di rete: da verificare sul PDF.)*
- Calcolo dinamico (Slides 6): $y(t+1)=(1-\beta)P'y(t)+\beta\mu$ converge a $z$ per ogni $y(0)$, perché tutti i nodi dissipano.

## Intuizione
Ogni walk di lunghezza $k$ che arriva in $i$ da $j$ porta il valore intrinseco $\mu_j$, scontato di $(1-\beta)^k$. Nel random surfer di Google: con probabilità $1-\beta$ si segue un link, con probabilità $\beta$ si salta in una pagina a caso.

## Come si usa
- Ranking di pagine web (PageRank) e di attori sociali: si risolve il sistema lineare o si itera la dinamica di flusso con input esogeno.
- Risolve i due difetti delle centralità ad autovettore e di distribuzione invariante (non unicità con più pozzi, valori nulli fuori dal pozzo).
- Ha la stessa struttura del modello di Leontief: $x=(I-W)^{-1}d$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 2 ("Bonacich centrality", "The structure of Bonacich centrality"), Slides 6 ("A way of computing the Bonacich centrality"). Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 69-75); `magistrale/Dinamiche su network/slide/Slides-6-Flows-Reversibility.pdf` (pp. 17-19).

## Prerequisiti
- [[Centralità di distribuzione invariante]]: la parte di rete usa $P'$

## Porta a
- [[Dinamica lineare di flusso su rete]]: calcolo di $z$ come limite di una dinamica con input

## Collegati
- [[Centralità di Katz]]: stessa costruzione con $W'/\lambda_W$
- [[Metodo delle potenze]]: l'iterazione di $P'$ è il modo classico di calcolare PageRank
- [[Modello input-output di Leontief]]: stessa inversa $(I-\cdot)^{-1}$ espressa come serie geometrica
- [[Random walk su un grafo]]: il random surfer è un random walk con salti a caso
