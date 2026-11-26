---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["robust linear programming", "robust optimization", "controparte robusta", "robust counterpart", "uncertainty set", "insieme di incertezza", "box uncertainty", "incertezza ellissoidale", "incertezza poliedrale", "ottimizzazione semi-infinita"]
tags: [competenza, area/ottimizzazione]
---

# Programmazione lineare robusta

> Vincoli lineari con coefficienti incerti in un insieme di incertezza, imposti per tutti i valori possibili: un problema semi-infinito che la dualità trasforma in un problema finito e trattabile.

## Definizione / enunciato
Vincolo incerto $\mathbf a^T\mathbf x\le b$ con $\mathbf a$ in un **uncertainty set**; $\mathbf x$ è robusto-ammissibile se il vincolo vale per ogni $\mathbf a$ dell'insieme, cioè nel caso peggiore:
$$\max_{\mathbf a\in\mathcal U}\mathbf a^T\mathbf x\le b .$$
Il problema ha un numero finito di variabili ma infiniti vincoli (programmazione semi-infinita).

## Formule chiave
- **Box** $\mathbf a=\mathbf a_0+\mathbf u$, $\|\mathbf u\|_\infty\le1$: $\ \mathbf a_0^T\mathbf x+\|\mathbf x\|_1\le b$ (lineare).
- **Ellissoidale** $\|\mathbf u\|_2\le1$: $\ \mathbf a_0^T\mathbf x+\|\mathbf x\|_2\le b$ (SOCP).
- **Poliedrale** $P_i=\{\mathbf a_i:C_i\mathbf a_i\le\mathbf d_i\}$ per l'LP $\min\mathbf c^T\mathbf x$ s.t. $\mathbf a_i^T\mathbf x\le b_i$: dualizzando $\max\{\mathbf x^T\mathbf a_i:C_i\mathbf a_i\le\mathbf d_i\}=\min\{\mathbf d_i^T\mathbf z_i:C_i^T\mathbf z_i=\mathbf x,\ \mathbf z_i\ge\mathbf 0\}$ si ottiene l'LP
$$\min\mathbf c^T\mathbf x\ \ \text{s.t. }\mathbf d_i^T\mathbf z_i\le b_i,\ \ C_i^T\mathbf z_i=\mathbf x,\ \ \mathbf z_i\ge\mathbf 0,\ \ i\in[m].$$

## Intuizione
Basta trovare una soluzione duale ammissibile $\mathbf z_i$ con valore $\le b_i$: per la dualità debole il massimo primale sui coefficienti non supera allora $b_i$. Ogni vincolo si tratta separatamente.

## Come si usa
La box uncertainty è molto conservativa; modelli più realistici usano trasformazioni affini di box ed ellissoidi, insiemi poliedrali o budget di incertezza. Il modo standard di affrontarli è sempre la dualità (norma duale o dualità LP).

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap4.pdf` (p. 42-43); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap7.pdf` (p. 25-26).
- **Ottimizzazione in condizione di incertezza** (magistrale): quadro generale della **controparte robusta** di $\min f(\mathbf x,\boldsymbol\xi)$ s.t. $g_i(\mathbf x,\boldsymbol\xi)\le0$ con $\boldsymbol\xi\in\mathcal U$ chiuso e limitato, $f,g_i$ convesse in $\mathbf x$: $\min_{\mathbf x}\max_{\boldsymbol\xi\in\mathcal U}f$ con vincoli per ogni $\boldsymbol\xi$ (robustezza di ottimalità e di ammissibilità, visione avversariale). Due semplificazioni: l'incertezza nell'obiettivo si sposta nei vincoli con una variabile epigrafica $z$, e i vincoli si trattano uno per volta. Insiemi di incertezza: scenari finiti (data-driven), box $\mathbf a=\mathbf a_0+P\boldsymbol\xi$ con $P$ diagonale e $\|\boldsymbol\xi\|_\infty\le1$, ellissoidale $\|\boldsymbol\xi\|_2\le1$ ovvero $(\mathbf a-\mathbf a_0)^TQ^{-1}(\mathbf a-\mathbf a_0)\le1$ con $P=Q^{1/2}$, budgettato, poliedrale/politopico (anche $\mathrm{conv}(\mathbf a_1,\dots,\mathbf a_k)$). Palla di norma generica: $\mathbf a_0^T\mathbf x+\rho\|P^T\mathbf x\|_*\le b$, quindi box $\to\|P^T\mathbf x\|_1$ (LP), ellissoide $\to\|P^T\mathbf x\|_2$ (SOCP); con incertezza affine anche su $b$, $[\mathbf a_0]^T\mathbf x+\rho\sqrt{\sum_k([\mathbf a_k]^T\mathbf x-b_k)^2}\le b_0$. Poliedrale $C_i\mathbf a_i\le\mathbf d_i$: basta un duale ammissibile $\mathbf z_i$ con $\mathbf d_i^T\mathbf z_i\le b_i$, quindi la controparte resta un LP. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 3-10, 20-25); `magistrale/Ottimizzazione in condizione di incertezza/01.V2 - Platonic.pdf` (p. 7).

## Prerequisiti
- [[Norma duale]]: riformulazione con incertezza box ed ellissoidale
- [[Dualità nella programmazione lineare]]: riformulazione con incertezza poliedrale

## Collegati
- [[Programmazione conica del secondo ordine]]: il caso ellissoidale è un vincolo SOCP
- [[Linearizzazione di valore assoluto e min-max]]: vincolo nel caso peggiore come max interno
- [[Cono duale e cono polare]]: infiniti vincoli in forma compatta
- [[Incertezza budgettata]]: insieme intermedio fra box ed ellissoide che resta lineare (Ottimizzazione in condizione di incertezza)
- [[Ottimizzazione sotto incertezza]]: il caso peggiore come uno dei paradigmi (Ottimizzazione in condizione di incertezza)
- [[Regressione robusta]]: controparte robusta dei minimi quadrati (Ottimizzazione in condizione di incertezza)
