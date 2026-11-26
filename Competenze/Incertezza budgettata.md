---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["budgeted uncertainty", "budget di incertezza", "uncertainty budget", "insieme di incertezza budgettato", "budgeted uncertainty set", "incertezza a budget"]
tags: [competenza, area/ottimizzazione]
---

# Incertezza budgettata

> Insieme di incertezza ottenuto intersecando la box $\|\boldsymbol\xi\|_\infty\le\rho$ con una palla $\|\boldsymbol\xi\|_1\le B$: limita quanti fattori di rischio possono essere estremi insieme e lascia il vincolo robusto lineare.

## Definizione / enunciato
Con $\mathbf a=\mathbf a_0+P\boldsymbol\xi$, $P\in\mathbb R^{n\times l}$ con colonne $\mathbf p_k$:
$$\mathcal U_{\boldsymbol\xi}=\{\boldsymbol\xi\in\mathbb R^l:\|\boldsymbol\xi\|_\infty\le\rho,\ \|\boldsymbol\xi\|_1\le B\}.$$
$\mathbf x$ è robusto-ammissibile per $(\mathbf a_0+P\boldsymbol\xi)^T\mathbf x\le b$ se
$$\max_{\|\boldsymbol\xi\|_\infty\le\rho,\ \|\boldsymbol\xi\|_1\le B}\ \sum_{k\in[l]}(\mathbf p_k^T\mathbf x)\,\xi_k\le b-\mathbf a_0^T\mathbf x .$$

## Formule chiave
Linearizzando i valori assoluti e scrivendo il duale LP (variabili $y_k^\pm$, $z_k^\pm$, $\theta$), poi ricomponendo $y_k=y_k^+-y_k^-$, $z_k=z_k^+-z_k^-$:
$$\mathbf a_0^T\mathbf x+\rho\|\mathbf y\|_1+B\|\mathbf z\|_\infty\le b,\qquad y_k+z_k=\mathbf p_k^T\mathbf x,\ k\in[l].$$
Stessa formula con le funzioni coniugate: $I^*_{\mathcal U_\infty\cap\mathcal U_1}(\mathbf w)=\min_{\mathbf y+\mathbf z=\mathbf w}\{\rho\|\mathbf y\|_1+B\|\mathbf z\|_\infty\}$.

## Intuizione
La box è troppo conservativa (tutti i coefficienti possono essere al limite contemporaneamente); l'ellissoide "taglia gli angoli" ma porta a un SOCP; il budget taglia gli angoli restando poliedrale, quindi il problema robusto resta un LP. $B$ regola il compromesso fra prudenza e costo.

## Come si usa
Esempio introduttivo: vincolo $a_1x_1+a_2x_2\le b$ con $a_i=a_{0,i}+\xi_i\delta_i$, $\|\boldsymbol\xi\|_\infty\le1$, $\|\boldsymbol\xi\|_1\le B$. Il duale con variabili $w_1,w_2,t\ge0$ dà le condizioni equivalenti
$$a_{0,1}x_1+a_{0,2}x_2+w_1+w_2+tB\le b,\quad w_1+t\ge\delta_1|x_1|,\quad w_2+t\ge\delta_2|x_2| .$$

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Budgeted uncertainty" fra gli insiemi di incertezza e "Uncertain LPs: Budgeted uncertainty". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 7, 9-10, 26-34).

## Prerequisiti
- [[Programmazione lineare robusta]]: vincolo robusto e insiemi box e poliedrali
- [[Dualità nella programmazione lineare]]: si sostituisce il max interno con il min duale
- [[Linearizzazione di valore assoluto e min-max]]: parti positive e negative dei $\xi_k$

## Collegati
- [[Funzione coniugata]]: riformulazione tramite convoluzione infimale delle indicatrici
- [[Norma duale]]: $\ell_\infty$ e $\ell_1$ sono duali fra loro
