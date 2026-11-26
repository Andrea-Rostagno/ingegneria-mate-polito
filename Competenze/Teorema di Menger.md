---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["Menger's theorem", "link-connectivity", "connettività per archi", "edge connectivity", "cammini indipendenti sugli archi", "link-independent paths", "cammini arc-disgiunti"]
tags: [competenza, area/network]
---

# Teorema di Menger

> Il minimo numero di archi da togliere per scollegare $j$ da $i$ è uguale al massimo numero di cammini da $i$ a $j$ che non condividono archi.

## Definizione / enunciato
In un (multi)grafo $\mathcal G=(\mathcal V,\mathcal E)$ due cammini $o$-$d$ $\gamma=(e_1,\dots,e_l)$ e $\tilde\gamma=(\tilde e_1,\dots,\tilde e_{\tilde l})$ sono **indipendenti sugli archi** se $e_h\neq\tilde e_k$ per ogni $h,k$.
$$c_{\text{link}}(o,d)=\max\#\{\text{cammini }o\text{-}d\text{ indipendenti sugli archi}\},\qquad c_{\text{link}}(\mathcal G)=\min_{o\neq d}c_{\text{link}}(o,d).$$
**Teorema (Menger).** Per $i\neq j$:
- $\min\#\{\text{archi da togliere perché }j\text{ non sia raggiungibile da }i\}=c_{\text{link}}(i,j)$;
- $\min\#\{\text{archi da togliere perché }\mathcal G\text{ non sia connesso}\}=c_{\text{link}}(\mathcal G)$.

## Formule chiave
La disuguaglianza $\ge$ si vede direttamente: ogni insieme separante deve tagliare ciascuno dei cammini disgiunti. La $\le$ è un caso particolare del teorema max-flow min-cut con capacità $c_e\in\{0,1\}$: i flussi interi ammissibili hanno $f_e\in\{0,1\}$ e $\{e:f_e=1\}$ è unione di cammini $o$-$d$ indipendenti sugli archi.

## Intuizione
Si passa da proprietà qualitative (connesso sì/no, raggiungibile sì/no) a una quantitativa: **quanto** è connesso un grafo, cioè quanti guasti di link sopporta prima di spezzarsi.

## Come si usa
Esempio delle slide (nodi $o,a,b,d$): i cammini $\gamma_1=(e_1,e_4)$ e $\gamma_3=(e_2,e_5)$ sono indipendenti, $\gamma_2=(e_1,e_3,e_5)$ condivide archi con entrambi; quindi $c_{\text{link}}(o,d)=2$, mentre $c_{\text{link}}(\mathcal G)=0$ perché il grafo non è (fortemente) connesso. Interpretazione di resilienza: numero minimo di link da rompere per isolare la destinazione.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 3, "From Reachability and Connectedness to Connectivity", "Menger's Theorem". Fonti: `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 7-12, 29).

## Prerequisiti
- [[Componenti connesse di un grafo]]: raggiungibilità e connessione

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Teorema max-flow min-cut]]: Menger ne è il caso con capacità unitarie
- [[Matrice di incidenza]]: cammini descritti dalla matrice arco-cammino
