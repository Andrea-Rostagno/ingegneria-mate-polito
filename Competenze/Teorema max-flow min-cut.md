---
tipo: competenza
area: ottimizzazione
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["max-flow min-cut theorem", "teorema del massimo flusso e minimo taglio", "taglio o-d", "o-d cut", "capacità di un taglio", "cut capacity", "min-cut", "taglio minimo", "minimal cut"]
tags: [competenza, area/ottimizzazione]
---

# Teorema max-flow min-cut

> Il massimo throughput da $o$ a $d$ in una rete con capacità è uguale alla minima capacità di un taglio che separa $o$ da $d$.

## Definizione / enunciato
Capacità $c\in\mathbb R^{\mathcal E}$, $c>0$. Un **taglio $o$-$d$** è $\mathcal U\subseteq\mathcal V$ con $o\in\mathcal U$, $d\notin\mathcal U$; il suo bordo uscente è $\partial_{\mathcal U}=\{e:\theta(e)\in\mathcal U,\ \kappa(e)\notin\mathcal U\}$ e la sua capacità
$$c_{\mathcal U}=\sum_{e\in\partial_{\mathcal U}}c_e,\qquad c^*_{od}=\min_{\mathcal U:\,o\in\mathcal U,\,d\notin\mathcal U}c_{\mathcal U}.$$
**Teorema.** Per un multigrafo con capacità e $o\neq d$: $\tau^*_{od}=c^*_{od}$, dove $\tau^*_{od}$ è il valore del problema di flusso massimo. Con capacità intere esiste un flusso massimo intero.

## Formule chiave
Passo facile $\tau^*_{od}\le c^*_{od}$: sommando i bilanci sui nodi di $\mathcal U$,
$$\tau=\sum_{i\in\mathcal U}\nu_i=\sum_{e\in\partial_{\mathcal U}}f_e-\sum_{e\in\partial^-_{\mathcal U}}f_e\ \Longrightarrow\ \sum_{e\in\partial_{\mathcal U}}c_e\ge\sum_{e\in\partial_{\mathcal U}}f_e=\tau+\sum_{e\in\partial^-_{\mathcal U}}f_e\ge\tau .$$
Passo difficile $\ge$: l'algoritmo di Ford-Fulkerson costruisce un flusso con throughput pari alla capacità di un taglio.
**Corollario (più origini e destinazioni).** Dato $\nu$ con $\mathbb 1'\nu=0$, esiste un flusso ammissibile ($Bf=\nu$, $0\le f\le c$) se e solo se $\sum_{i\in\mathcal U}\nu_i\le c_{\mathcal U}$ per ogni $\mathcal U\subseteq\mathcal V$ (sufficienza: si aggiungono una super-sorgente e un super-pozzo).

## Intuizione
Ogni unità di flusso deve attraversare ogni taglio, quindi il taglio più stretto è un collo di bottiglia; il teorema dice che è l'unico vincolo. Lettura di resilienza: la minima capacità da rimuovere per staccare $d$ da $o$ è $c^*_{od}$.

## Come si usa
Esempio delle slide ($c_{e_1}=2,c_{e_2}=2,c_{e_3}=1,c_{e_4}=4,c_{e_5}=2$): i tagli $\{o\},\{o,a\},\{o,b\},\{o,a,b\}$ hanno capacità $4,7,4,6$, quindi $c^*_{od}=4$ con tagli minimi $\{o\}$ e $\{o,b\}$, e infatti esiste un flusso con throughput 4. Con capacità 0-1 il teorema diventa Menger; con la rete bipartita ausiliaria dà il teorema di Hall.

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 3, "Min cut capacity", "Max-flow min-cut theorem", "Multiple origin-destination". Fonti: `magistrale/Dinamiche su network/slide/Slides-3-Connectivity+NetworkFlows.pdf` (pp. 26-31, 47-48).

## Prerequisiti
- [[Flusso massimo]]: il programma lineare del massimo throughput
- [[Decomposizione dei flussi]]: flussi $o$-$d$ e throughput

## Porta a
- [[Algoritmo di Ford-Fulkerson]]: prova costruttiva del passo difficile
- [[Teorema di Hall]]: corollario sui grafi bipartiti
- [[Ottimizzazione convessa di flussi su rete]]: condizione di ammissibilità sui tagli

## Collegati
- [[Teorema di Menger]]: caso con capacità unitarie
- [[Teorema di dualità forte]]: il min-cut è il duale del max-flow
