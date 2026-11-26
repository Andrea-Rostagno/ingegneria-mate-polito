---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["connectivity threshold of Erdos-Renyi", "soglia di connessione", "connectivity threshold", "nodi isolati in Erdos-Renyi", "isolated nodes", "transizione di fase per la connessione"]
tags: [competenza, area/network]
---

# Connettività del grafo di Erdős-Rényi

> Con $p=a\log n/n$ il grafo $G(n,p)$ passa bruscamente da sconnesso ($a<1$) a connesso con diametro logaritmico ($a>1$): la soglia coincide con quella della scomparsa dei nodi isolati.

## Definizione / enunciato
**Proposizione (nodi isolati).** $N_0=|\{i:w_i=0\}|$, $p=\frac an\log n$ con $a>0$ costante. Con alta probabilità:
- $a>1\Rightarrow N_0=0$;
- $a<1\Rightarrow N_0\asymp n^{1-a}\to+\infty$.
**Teorema (transizione di fase per la connessione).** Con $p=\frac an\log n$, con alta probabilità per $n\to\infty$:
- $a<1$: $G(n,p)$ è sconnesso;
- $a>1$: $G(n,p)$ è connesso e $\operatorname{diam}(G(n,p))\le A\log n$ per una costante $A$ indipendente da $n$.

## Formule chiave
Calcolo ricavato qui come controllo (non nelle slide): $\mathbb E[N_0]=n(1-p)^{n-1}\approx ne^{-np}=n\cdot n^{-a}=n^{1-a}$, che tende a 0 se $a>1$ e all'infinito se $a<1$.
Al di sopra della soglia il numero atteso di archi è $\mathbb E[L]\sim\frac a2n\log n$: il grafo connesso **non** è sparso.

## Intuizione
L'ultimo ostacolo alla connessione sono i nodi isolati: quando $np$ supera $\log n$ ogni nodo ha, con alta probabilità, almeno un vicino, e a quel punto anche il resto del grafo è già tutto collegato.

## Come si usa
Per decidere se un grafo aleatorio "denso" è connesso si confronta $p$ con $\log n/n$. Il diametro logaritmico spiega perché, sopra soglia, le dinamiche di media e i contagi si propagano in tempi brevi.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "Isolated nodes in Erdős-Rényi", "Phase transition for connectivity of Erdős-Rényi", "Erdos-Renyi in two slides". Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 16-17, 21).

## Prerequisiti
- [[Grafo di Erdős-Rényi]]: il modello

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Componenti connesse di un grafo]]: connessione e diametro
- [[Componente gigante]]: soglia più bassa, $p=\lambda/n$
