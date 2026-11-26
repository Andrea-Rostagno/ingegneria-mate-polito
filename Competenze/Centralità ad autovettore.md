---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["eigenvector centrality", "centralità ad autovettore", "centralità di grado", "degree centrality", "in-degree centrality", "centralità di rete"]
tags: [competenza, area/network]
---

# Centralità ad autovettore

> Un nodo è centrale se è puntato da nodi centrali: la centralità è l'autovettore di Perron di $W'$. Nasce come correzione della centralità di grado, che conta tutti i link entranti allo stesso modo.

## Definizione / enunciato
Una centralità è un vettore $z\ge0$ con $z_i$ = importanza del nodo $i$.
- **Centralità di grado:** $z_i=w_i^-$ (in-degree). Esempi: numero di citazioni di un articolo, di follower su Twitter.
- **Centralità ad autovettore:** si chiede $z_i\propto\sum_{j\in N_i^-}z_j=\sum_jW_{ji}z_j$, cioè
$$\lambda z=W'z,\qquad \lambda=\lambda_W,$$
con $\lambda_W$ autovalore dominante (di Perron-Frobenius).

## Formule chiave
- Se tutti i nodi hanno lo stesso in-degree $\delta$: $W'\mathbb 1=\delta\mathbb 1$, quindi $z=\mathbb 1$.
- Limite: il nodo $j$ contribuisce in proporzione al suo out-degree $w_j$ (chi punta a molti "distribuisce" troppa importanza); da qui la centralità di distribuzione invariante, che divide per $w_j$.
- In generale non è unica se il grafo di condensazione ha più pozzi, e con un solo pozzo è nulla fuori dalla componente pozzo.

## Intuizione
Il prestigio si eredita: essere citati da un articolo molto citato vale più che da uno ignorato. È un punto fisso, e Perron-Frobenius garantisce che esista non negativo.

## Come si usa
Esempio delle slide: la rete dei matrimoni delle famiglie fiorentine del Quattrocento, "chi è il nodo più centrale?" (i Medici); per grado emergono due nodi. Su un grafo di 21 nodi le slide confrontano grado, autovettore e distribuzione invariante: per il nodo 5 i valori sono $0.0517$, $0.0680$, $0.0869$, per il nodo 21 $0.0172$, $0.0166$, $0.0204$. Il calcolo pratico si fa per iterazione $z\leftarrow W'z/\|W'z\|$.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 2, "Network centralities". Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 53-60, 65-67).

## Prerequisiti
- [[Teorema di Perron-Frobenius]]: esistenza dell'autovettore non negativo
- [[Grafo]]: in-degree e vicinato entrante

## Porta a
- [[Centralità di Katz]]: miscela con una centralità intrinseca

## Collegati
- [[Centralità di distribuzione invariante]]: stessa idea con i pesi normalizzati
- [[Metodo delle potenze]]: calcolo iterativo dell'autovettore dominante
- [[Matrice di adiacenza]]: $W$ non pesata è la matrice di adiacenza
