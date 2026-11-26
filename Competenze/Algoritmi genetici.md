---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["genetic algorithms", "algoritmo genetico", "crossover", "mutazione", "fitness", "elitarismo", "selezione a torneo"]
tags: [competenza, area/ottimizzazione]
---

# Algoritmi genetici

> Metaeuristiche stocastiche basate su una popolazione di soluzioni che evolve per selezione, crossover e mutazione, imitando la selezione naturale, per cercare di non restare intrappolati in minimi locali.

## Definizione / enunciato
Ogni soluzione è codificata come un **cromosoma** (collezione di attributi = geni): in origine binaria, nel continuo meglio una codifica naturale; nei problemi combinatori servono codifiche apposite (per esempio permutazioni). La **fitness** $g$ non coincide necessariamente con $f$; spesso la si rende positiva e si definisce la probabilità di selezione dell'individuo $j$:
$$\frac{g(\mathbf x_j)}{\sum_{i=1}^pg(\mathbf x_i)}.$$

## Formule chiave
Schema: (0) popolazione iniziale $P^{(0)}$ di dimensione $p$, probabilità di mutazione $\gamma$; (1) valutazione della fitness; (2) a caso sopravvivenza o riproduzione; (3) **sopravvivenza**: un individuo scelto secondo la fitness passa a $P^{(k+1)}$; (4) **riproduzione**: crossover fra due genitori scelti secondo la fitness e, con probabilità $\gamma$, mutazione; (5) aggiornamento di $\mathbf x_{\rm best}$ (secondo $f$), finché $P^{(k+1)}$ ha $p$ elementi, poi criterio di arresto.

Crossover a un breakpoint $k$:
$$\begin{pmatrix}x_1,\dots,x_k,x_{k+1},\dots,x_n\\y_1,\dots,y_k,y_{k+1},\dots,y_n\end{pmatrix}\Rightarrow\begin{pmatrix}x_1,\dots,x_k,y_{k+1},\dots,y_n\\y_1,\dots,y_k,x_{k+1},\dots,x_n\end{pmatrix}.$$

## Intuizione
Equilibrio fra **intensificazione** (elitarismo: mantenere gli individui migliori) e **diversificazione** (riproduzione: esplorare regioni nuove). Un algoritmo troppo elitario converge prematuramente a una soluzione scarsa.

## Come si usa
Con la selezione proporzionale un individuo scarso non viene quasi mai scelto: i **mini-tornei** applicano le probabilità a un sottoinsieme casuale e ne aumentano le chance. Varianti del crossover: doppio breakpoint, combinazione convessa di due o più genitori. Limiti: costosi se valutare $f$ è oneroso, confronti inaffidabili con $f$ rumorosa (simulazione Monte Carlo), nessuno sfruttamento della continuità di $f$.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 24, 31-33, 35).

## Prerequisiti
- [[Modello di ottimizzazione]]: obiettivo valutato come scatola nera

## Porta a
- [[Ottimizzazione surrogata]]: rimedio ai limiti dei metodi a popolazione

## Collegati
- [[Particle swarm optimization]]: altro metodo stocastico a popolazione
- [[Metodo Monte Carlo]]: valutazioni rumorose rendono incerti i confronti
- [[Funzioni di penalità e barriera]]: la penalità $\ell_1$ non smooth non è un problema per un algoritmo genetico
