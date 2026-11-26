---
tipo: competenza
area: finanza
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["robust mean-variance portfolio optimization", "robust portfolio optimization", "portafoglio media-varianza robusto", "robust mean-variance", "incertezza ellissoidale sui rendimenti attesi"]
tags: [competenza, area/finanza]
---

# Ottimizzazione di portafoglio robusta

> Media-varianza con rendimenti attesi incerti in un ellissoide attorno alla stima: il caso peggiore aggiunge una penalità $\delta\sqrt{\mathbf w^T\Sigma_\mu\mathbf w}$ che scoraggia i titoli con stime poco affidabili.

## Definizione / enunciato
$$\max_{\mathbf w\in S}\Big[\min_{\boldsymbol\mu\in\mathcal U_\mu}\boldsymbol\mu^T\mathbf w-\lambda\,\mathbf w^T\Sigma\mathbf w\Big],\qquad \mathcal U_\mu=\{\boldsymbol\mu:(\boldsymbol\mu-\hat{\boldsymbol\mu})^T\Sigma_\mu^{-1}(\boldsymbol\mu-\hat{\boldsymbol\mu})\le\delta^2\},$$
con $S=\{\mathbf w:\sum_iw_i=1,\ w_i\ge0\}$ (niente vendite allo scoperto), $\Sigma\succ0$ supposta stimata perfettamente, $\lambda>0$ avversione al rischio, $\Sigma_\mu\succ0$ legata all'errore di stima.

## Formule chiave
Il problema interno, lineare su un convesso, ha il vincolo attivo; con il moltiplicatore $\gamma\ge0$:
$$\boldsymbol\mu=\hat{\boldsymbol\mu}-\frac1{2\gamma}\Sigma_\mu\mathbf w,\qquad \frac1{2\gamma}=\frac{\delta}{\sqrt{\mathbf w^T\Sigma_\mu\mathbf w}},$$
e il valore ottimo interno è $\mathbf w^T\hat{\boldsymbol\mu}-\delta\sqrt{\mathbf w^T\Sigma_\mu\mathbf w}$. Problema convesso equivalente:
$$\max_{\mathbf w\in S}\Big[\hat{\boldsymbol\mu}^T\mathbf w-\lambda\,\mathbf w^T\Sigma\mathbf w-\delta\sqrt{\mathbf w^T\Sigma_\mu\mathbf w}\Big].$$

## Intuizione
Si lavora con le stime puntuali, ma un termine di regolarizzazione penalizza i pesi sui titoli i cui rendimenti attesi sono più incerti (evidente con $\Sigma_\mu$ diagonale). Lo stesso risultato si ottiene con la norma duale: con $\boldsymbol\mu=\hat{\boldsymbol\mu}+\delta\Sigma_\mu^{1/2}\mathbf y$, $\|\mathbf y\|_2\le1$, il minimo è $\mathbf w^T\hat{\boldsymbol\mu}-\delta\|\Sigma_\mu^{1/2}\mathbf w\|_2$ per l'autodualità di $\ell_2$.

## Come si usa
Le slide lo presentano come problema di ottimizzazione convessa con stime puntuali; osservazione mia: la radice è la norma euclidea $\|\Sigma_\mu^{1/2}\mathbf w\|_2$, quindi la penalità si può scrivere come vincolo conico del secondo ordine.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Robust mean-variance portfolio optimization". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 16-19).

## Prerequisiti
- [[Rischio e rendimento di un portafoglio]]: modello media-varianza nominale
- [[Condizioni di Karush-Kuhn-Tucker]]: soluzione del problema interno
- [[Norma duale]]: derivazione alternativa del caso peggiore

## Collegati
- [[Programmazione conica del secondo ordine]]: la penalità è un termine conico
- [[Programmazione lineare robusta]]: stessa logica worst case con insieme ellissoidale
