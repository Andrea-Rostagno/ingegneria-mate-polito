---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["min-max problems", "problemi min-max", "minimax", "regressione in norma l1", "regressione in norma l-infinito", "parte positiva e negativa", "variabile epigrafica"]
tags: [competenza, area/ottimizzazione]
---

# Linearizzazione di valore assoluto e min-max

> Trucchi standard per riscrivere come LP problemi con valori assoluti (norma $\ell_1$) e problemi di tipo $\min\max$ (norma $\ell_\infty$).

## Definizione / enunciato
**Valore assoluto:** con parte positiva e negativa
$$e=e^+-e^-=\max\{0,e\}-\max\{0,-e\},\qquad|e|=e^++e^-,\qquad e^\pm\ge0 .$$
**Min-max:** $\min_{\mathbf x\in S}\max_{i=1,\dots,N}g_i(\mathbf x)$ diventa, con una variabile ausiliaria $z$,
$$\min z\quad\text{s.t. }z\ge g_i(\mathbf x),\ i=1,\dots,N;\quad\mathbf x\in S .$$

## Formule chiave
Regressione in norma $\ell_1$:
$$\min\sum_{i\in[n]}(e_i^++e_i^-)\ \ \text{s.t. }e_i^+-e_i^-=y_i-\beta_0-\sum_{j=1}^p\beta_jx_{ij},\ e_i^\pm\ge0;$$
oppure, con una sola variabile ausiliaria per residuo e più vincoli: $\min\sum_iz_i$ s.t. $-z_i\le y_i-\beta_0-\sum_j\beta_jx_{ij}\le z_i$.

Regressione in norma $\ell_\infty$: $\min z$ s.t. $-z\le y_i-\beta_0-\sum_j\beta_jx_{ij}\le z$, $i\in[n]$.

## Intuizione
$|e|$ è lineare a tratti e convessa, quindi minimizzandola il solver non ha interesse a rendere positive insieme $e^+$ ed $e^-$. Nel min-max $z$ è un "tetto" che deve stare sopra tutte le $g_i$; minimizzare il tetto equivale a minimizzare il massimo.

## Come si usa
Si applica a regressione robusta, sintesi di filtri (minimax della deviazione dalla risposta target; con funzioni di trasferimento complesse si ottiene però un SOCP), e alla stessa trasformazione di variabili libere $x_j=x_j^+-x_j^-$ in forma standard.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 40-41, 60); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 29).

## Prerequisiti
- [[Valore assoluto]]: funzione lineare a tratti da linearizzare
- [[Funzioni lineari a tratti]]: caso convesso linearizzabile senza binarie
- [[Programmazione lineare]]: il risultato è un LP

## Porta a
- [[Programmazione conica del secondo ordine]]: il minimax con moduli complessi è un SOCP

## Collegati
- [[Regressione lineare]]: norme alternative $\ell_1$ e $\ell_\infty$
- [[Norme vettoriali]]: le norme 1 e infinito dei residui
