---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["Kolmogorov's approximation", "teorema di Kolmogorov-Arnold", "Kolmogorov-Arnold representation theorem", "teorema di rappresentazione di Kolmogorov", "rappresentazione di Kolmogorov"]
tags: [competenza, area/data-ml]
---

# Teorema di approssimazione di Kolmogorov

> Ogni funzione continua di più variabili su un cubo si scrive come composizione e somma di funzioni continue di una sola variabile: è l'idea matematica che ispira la struttura a strati delle reti neurali.

## Definizione / enunciato
**Teorema** (Kolmogorov, 1957). Ogni funzione continua $g^*:[0,1]^p\to\mathbb R$ con $p\ge2$ si può scrivere come
$$g^*(\mathbf x)=\sum_{j=1}^{2p+1}h_j\Big(\sum_{i=1}^ph_{ij}(x_i)\Big),$$
dove $\{h_j,h_{ij}\}$ sono funzioni continue di una variabile che dipendono da $g^*$.

## Formule chiave
Rappresentazione come rete: lo strato di input ha i $p$ nodi $x_i$, uno strato nascosto applica le $h_{ij}$ e somma, un secondo applica le $h_j$, l'output somma: in totale $(2p+1)(p+1)$ funzioni univariate sconosciute. Nelle reti neurali queste sono sostituite da un numero molto maggiore di funzioni **note**, le funzioni di attivazione, per esempio la logistica $S(z)=(1+\exp(-z))^{-1}$.

## Intuizione
Qualunque mappa continua ad alta dimensione è composizione di mappe 1D molto più semplici. Il teorema però garantisce solo l'**esistenza** delle $h_j,h_{ij}$ e non dice come costruirle, perché dipendono dalla $g^*$ ignota: si spera che una rete con abbastanza attivazioni abbia capacità rappresentativa simile.

## Come si usa
Motivazione teorica della rete feed-forward: composizione ripetuta di mappe lineari e non lineari componente per componente. Un altro modo per aumentare la capacità rappresentativa è aggiungere strati nascosti (deep learning).

## Nei corsi
- **Matematica per l'AI** (triennale): lezione *Deep Learning* (Kroese et al.). Fonti: `triennale/ANNO 3/matematica AI/neuralnet (3).pdf` (p. 6-10).

## Prerequisiti
- [[Errore di stima ed errore di approssimazione]]: si cerca una classe abbastanza ricca da approssimare $g^*$

## Porta a
- [[Rete neurale artificiale]]: la struttura a strati imita la rappresentazione
- [[Funzioni di attivazione]]: sostituiscono le funzioni univariate ignote

## Collegati
- [[Teorema no free lunch]]: l'esistenza di una rappresentazione non dice come impararla
