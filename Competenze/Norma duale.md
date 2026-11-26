---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["dual norm", "norma duale di l1", "norma duale di l-infinito", "norma euclidea auto-duale"]
tags: [competenza, area/ottimizzazione]
---

# Norma duale

> La norma duale misura un vettore tramite il massimo prodotto scalare con i vettori della palla unitaria; $\ell_1$ e $\ell_\infty$ sono duali l'una dell'altra, $\ell_2$ è auto-duale.

## Definizione / enunciato
Data una norma $\|\cdot\|$ su $\mathbb R^n$:
$$\|\mathbf u\|_*=\max\{\mathbf u^T\mathbf x:\|\mathbf x\|\le1\}.$$

## Formule chiave
- Duale di $\ell_\infty$: $\max\{\sum_ju_jx_j:|x_j|\le1\}$ si ottiene con $x_j^*=\pm1$ dello stesso segno di $u_j$, quindi vale $\sum_i|u_i|=\|\mathbf u\|_1$. Simmetricamente il duale di $\ell_1$ è $\ell_\infty$.
- Duale di $\ell_2$: l'ottimo è il versore parallelo a $\mathbf u$, $\mathbf x^*=\mathbf u/\|\mathbf u\|_2$, quindi $\|\mathbf u\|_{2*}=\mathbf u^T\mathbf u/\|\mathbf u\|_2=\|\mathbf u\|_2$: la norma euclidea è auto-duale.

## Intuizione
$\|\mathbf u\|_*$ è la massima lunghezza della proiezione di un vettore della palla unitaria su $\mathbf u$. Per $\ell_2$ la palla è rotonda e il massimo si ha in direzione di $\mathbf u$; per $\ell_\infty$ la palla è un cubo e il massimo si ha in un vertice, che "somma i moduli".

## Come si usa
**Vincolo robusto con incertezza box:** $\mathbf a=\mathbf a_0+\mathbf u$, $\|\mathbf u\|_\infty\le1$. Il vincolo $\mathbf a^T\mathbf x\le b$ per ogni $\mathbf a$ nell'insieme di incertezza (infiniti vincoli) equivale a
$$\mathbf a_0^T\mathbf x+\max_{\|\mathbf u\|_\infty\le1}\mathbf u^T\mathbf x\le b\iff\mathbf a_0^T\mathbf x+\|\mathbf x\|_1\le b,$$
lineare in uno spazio aumentato. Con incertezza ellissoidale $\|\mathbf u\|_2\le1$ si ottiene $\mathbf a_0^T\mathbf x+\|\mathbf x\|_2\le b$, un vincolo conico del secondo ordine.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 40-43).
- **Ottimizzazione in condizione di incertezza** (magistrale): $\|\mathbf u\|_*=\max\{\mathbf u^T\mathbf x:\|\mathbf x\|\le1\}$, con la disuguaglianza $\mathbf u^T\mathbf x\le\|\mathbf x\|\,\|\mathbf u\|_*$; duale di $\ell_\infty$ è $\ell_1$ (massimizzatore $x_j=\pm1$ col segno di $u_j$) e viceversa, $\ell_2$ è autoduale. La norma duale è la funzione di supporto della palla unitaria, e la coniugata di una norma è l'indicatrice della palla duale. Strumento chiave per controparti robuste, regressione robusta e portafoglio robusto. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/05a - Analisi convessa (versione completa).pdf` (p. 20-22, 31-32); `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 14, 19, 23).

## Prerequisiti
- [[Norme vettoriali]]: norme $\ell_1$, $\ell_2$, $\ell_\infty$
- [[Disuguaglianza di Cauchy-Schwarz]]: il massimo per $\ell_2$ si ha in direzione di $\mathbf u$

## Porta a
- [[Programmazione lineare robusta]]: riformulazione dei vincoli incerti
- [[Funzione coniugata]]: coniugata della norma e funzione di supporto della palla (Ottimizzazione in condizione di incertezza)
- [[Regressione robusta]]: perturbazione peggiore costruita con il vettore duale (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Cono duale e cono polare]]: il duale del cono di una norma usa la norma duale
- [[Linearizzazione di valore assoluto e min-max]]: $\|\mathbf x\|_1$ si linearizza con variabili ausiliarie
