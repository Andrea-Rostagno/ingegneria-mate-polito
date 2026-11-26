---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["condensation graph", "grafo di condensazione", "componenti fortemente connesse", "strongly connected components", "sink component", "componente pozzo", "insieme trapping", "trapping set", "insieme globalmente raggiungibile", "globally reachable set"]
tags: [competenza, area/network]
---

# Grafo di condensazione

> Il grafo che ha per nodi le componenti fortemente connesse di un grafo orientato: è sempre un DAG, e le sue componenti pozzo decidono il comportamento asintotico di tutte le dinamiche lineari su rete.

## Definizione / enunciato
Su $\mathcal G=(\mathcal V,\mathcal E,W)$ la relazione $v\sim w$ se $v$ è raggiungibile da $w$ **e** $w$ da $v$ è di equivalenza; le classi sono le **componenti (fortemente) connesse** $\mathcal C$. Il **grafo di condensazione** è $\mathcal H=(\mathcal C,\mathcal F)$ con $(C_1,C_2)\in\mathcal F$ se c'è un arco da un nodo di $C_1$ a un nodo di $C_2$.
- $\mathcal H$ è un DAG; se $\mathcal G$ è non orientato, $\mathcal H$ è fatto di nodi isolati.
- $\mathcal U\subseteq\mathcal V$ è **trapping** se $i\in\mathcal U$, $(i,j)\in\mathcal E\Rightarrow j\in\mathcal U$; è **globalmente raggiungibile** se da ogni $i$ parte un cammino che arriva in $\mathcal U$.

## Formule chiave
Per un grafo qualsiasi:
- le componenti pozzo (sink) di $\mathcal H$ sono trapping;
- da ogni nodo c'è un cammino verso una componente pozzo;
- se c'è **una sola** componente pozzo $C$, allora $C$ è trapping e globalmente raggiungibile.
Se $\mathcal G$ è connesso, ogni $\mathcal U\neq\emptyset$ è globalmente raggiungibile e l'unico trapping non vuoto è $\mathcal V$. $s_{\mathcal G}$ indica il numero di pozzi di $\mathcal H$.

## Intuizione
Una componente pozzo è un "club chiuso": chi ci entra non ne esce, e nessuno al suo interno ascolta l'esterno. Per questo, nei modelli di opinione e di flusso, conta solo ciò che accade nelle componenti pozzo.

## Come si usa
Esempio di Slides-1 (grafo con nodi $a_1,\dots,a_{10}$, $b_1,\dots,b_8$): si costruiscono le componenti visitando i nodi e si trova che $\{a_8\}$ è trapping e globalmente raggiungibile. Il numero $s_{\mathcal G}$ decide quante distribuzioni invarianti estremali ha la matrice stocastica e se le dinamiche di media arrivano al consenso.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 1, parte "Advanced connectivity concepts". Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 71-87).

## Prerequisiti
- [[Grafo]]: grafi orientati pesati e raggiungibilità
- [[Componenti connesse di un grafo]]: caso non orientato della stessa costruzione

## Porta a
- [[Matrice stocastica]]: le distribuzioni invarianti sono indicizzate dai pozzi
- [[Agenti testardi]]: i nodi testardi diventano pozzi del grafo
- [[Probabilità di impatto e tempo medio di impatto]]: tempi finiti se il bersaglio è globalmente raggiungibile

## Collegati
- [[Classi di comunicazione]]: stessa partizione vista sulla catena di Markov; i pozzi sono le classi chiuse
- [[Ordinamento topologico]]: il grafo di condensazione è un DAG e ammette un ordine topologico
- [[Dinamica di best response]]: i pozzi del grafo di best response contengono solo equilibri di Nash
