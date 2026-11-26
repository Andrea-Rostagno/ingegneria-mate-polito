---
tipo: competenza
area: network
corsi: [Dinamiche su network]
livello: [magistrale]
aliases: ["small world", "small-world random graph", "grafo small world", "piccolo mondo", "modello di Watts-Strogatz", "coefficiente di clustering", "clustering coefficient"]
tags: [competenza, area/network]
---

# Modello small-world

> Grafo aleatorio che unisce collegamenti "geografici" (ogni nodo connesso ai più vicini su un anello) e poche scorciatoie a caso: ha insieme diametro piccolo e molti triangoli, come le reti reali.

## Definizione / enunciato
Motivazione: molte reti reali hanno diametro piccolo e alto clustering. Esempio base: $\mathcal V=\{1,\dots,n\}$, ogni nodo collegato ai $k$ nodi più vicini modulo $n$; si aggiungono $l$ archi non orientati con
$$l\sim\mathrm{Binomiale}\Big(\frac{nk}2,p\Big),$$
che collegano coppie di nodi scelte indipendentemente e uniformemente.

## Formule chiave
**Teorema.** Con alta probabilità la distribuzione dei gradi è una Poisson traslata,
$$p_j=0\ (0\le j<k),\qquad p_j=e^{-kp}\frac{(kp)^{j-k}}{(j-k)!}\ (j\ge k);$$
il coefficiente di clustering converge a
$$C=\frac{3(k-2)}{4(k-1)+8kp+4kp^2};$$
il diametro soddisfa $\operatorname{diam}(\mathcal G)\le A\log n$ per una costante $A$ indipendente da $n$.

## Intuizione
L'anello con vicini garantisce che gli amici dei miei amici siano spesso miei amici (molti triangoli); bastano poche scorciatoie casuali per accorciare drasticamente le distanze ("sei gradi di separazione").

## Come si usa
È la risposta al limite di Erdős-Rényi "pochi triangoli": con $p$ piccolo il clustering resta vicino a quello dell'anello, $\frac{3(k-2)}{4(k-1)}$, mentre il diametro diventa logaritmico. Nelle slide sulle dinamiche di media i grafi small world sono citati come expander (convergenza al consenso in tempo $C\log n$).

## Nei corsi
- **Dinamiche su network** (magistrale): Slides 12, "Small World Random Graphs". Fonti: `magistrale/Dinamiche su network/slide/Slides-12-RandomGraphs.pdf` (pp. 40-41).

## Prerequisiti
- [[Grafo di Erdős-Rényi]]: modello di confronto

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Attaccamento preferenziale]]: altra correzione dei limiti di Erdős-Rényi
- [[Velocità di convergenza al consenso]]: gli small world sono expander
- [[Distribuzione di Poisson]]: gradi come Poisson traslata
