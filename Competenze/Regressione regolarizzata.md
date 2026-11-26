---
tipo: competenza
area: statistica
corsi: [Ricerca operativa, Ottimizzazione in condizione di incertezza, Numerical opt, Business intelligence per big data, Data science lab]
livello: [triennale, magistrale]
aliases: ["regularized regression", "regressione ridge", "ridge regression", "regressione lasso", "lasso", "regressione sparsa", "sparse regression", "norma l0", "penalità l1", "penalità l2"]
tags: [competenza, area/statistica]
---

# Regressione regolarizzata

> Regressione con un termine di penalità sui coefficienti: la penalità $\ell_2$ (ridge) rende il problema ben posto, la penalità $\ell_1$ (lasso) produce modelli sparsi.

## Definizione / enunciato
**Ridge:** $\min\|A\mathbf x-\mathbf b\|_2^2+\gamma\|\mathbf x\|_2^2$, $\gamma>0$.

**Lasso:**
$$\min\sum_{i=1}^n\Big(y_i-\beta_0-\sum_{j=1}^p\beta_jx_{ij}\Big)^2+\lambda\sum_{j=1}^p|\beta_j| .$$
Ciò che si vorrebbe penalizzare è il numero di coefficienti non nulli $\|\boldsymbol\beta\|_0=\mathrm{card}\{\beta_j:\beta_j\ne0\}$, che nonostante la notazione non è una norma.

## Formule chiave
$$\mathbf x^*=(A^TA+\gamma I_p)^{-1}A^T\mathbf b\quad\text{(ridge)} .$$
Per contare i coefficienti non nulli con binarie $\delta_j$: $-\delta_j\le\beta_j/M\le\delta_j$, con $M$ upper bound su $|\beta_j|$.

## Intuizione
Un modello con troppi coefficienti fa **overfitting**: funziona sul campione di apprendimento (in sample) ma non generalizza (out of sample). Nel ridge $\gamma$ sposta gli autovalori della matrice gramiana $A^TA$ rendendola definita positiva e quindi invertibile. Nel lasso la penalità "di conteggio" (discontinua, non convessa) è sostituita dalla migliore approssimazione convessa, il valore assoluto: si ottiene sparsità al prezzo della non differenziabilità.

## Come si usa
Ridge: quando le colonne di $A$ non sono indipendenti. Lasso: per selezionare le variabili esplicative (regressione sparsa). L'alternativa esatta con binarie e cardinalità porta a un MIQP.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap3.pdf` (p. 42-43); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 6).
- **Ottimizzazione in condizione di incertezza** (magistrale): ridge e lasso reinterpretate come problemi robusti: il caso peggiore su perturbazioni dei dati limitate in norma dà $\|A\mathbf x-\mathbf b\|_g+\rho\|\mathbf x\|_h$ (con $\ell_2$ e $\ell_1$ si ottiene la lasso, con residuo non al quadrato). Fonti: `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 11-15).
- **Numerical opt** (magistrale): LASSO (Least Absolute Shrinkage and Selection Operator) $\min_x\frac12\|Ex-b\|_2^2+\tau\|x\|_1$, con $\tau>0$, da un sistema lineare sottodeterminato $Ex=b$. Si risolve con [[ADMM]] in forma scalata introducendo $z=x$: il passo in $x$ è un problema ai minimi quadrati, quello in $z$ un soft thresholding componente per componente. Fonti: `magistrale/Numerical opt/Pieraccini/Part_7_Constrained_Optimization_Penalty_methods.pdf` (p. 13-16).
- **Business intelligence per big data** (magistrale): Ridge e Lasso come metodi che fanno selezione delle variabili e regolarizzazione, utili quando le variabili superano le osservazioni o il modello generalizza male. Funzioni di costo: $RSS+\lambda\sum_{j=1}^p\beta_j^2$ (Ridge, penalità L2) e $RSS+\lambda\sum_{j=1}^p|\beta_j|$ (Lasso, penalità L1), con $RSS=\sum_i\big(y_i-\beta_0-\sum_j\beta_jx_{ij}\big)^2$ e $\lambda$ quantità di shrinkage (lette sulla pagina renderizzata 27); equivalenti a minimizzare la RSS con vincolo sulla somma dei quadrati o dei valori assoluti dei coefficienti. Ridge restringe i coefficienti, Lasso (Tibshirani, 1996) ne porta alcuni a zero e quindi seleziona le feature. Fonti: `magistrale/Business intelligence per big data/06-Regression-Analysis_BI_2026.pdf` (pp. 24-30). Usata contro l'overfitting della [[Regressione polinomiale]].
- **Data science lab** (magistrale): la regolarizzazione permette alta capacità ma penalizza quella usata inutilmente, con un termine di penalità nella funzione di costo: **L1 (Lasso)** $Cost=MSE+\lambda\|\theta\|_1$ penalizza linearmente tutti i pesi non nulli e porta a 0 i $\theta$ non strettamente necessari; **L2 (Ridge)** $Cost=MSE+\lambda\|\theta\|_2$ (scritto così, senza quadrato, nella slide) penalizza i valori vicini a 0 meno di quelli lontani da 0 e lascia $\theta\approx0$ per contributi piccoli. Usata contro l'overfitting della [[Regressione polinomiale]]; in scikit-learn `Ridge(alpha=0.5)`, `Lasso(alpha=0.5)`, con `alpha` scelto con `GridSearchCV` ([[Ottimizzazione degli iperparametri]]). Fonti: `magistrale/Data science lab/slide testo/10-DMRegression.pdf` (p. 19-20); `slide py/8-ScikitLearn-Regression.pdf` (p. 9, 12-14).

## Prerequisiti
- [[Regressione lineare]]: modello di partenza
- [[Autovalori e autovettori]]: $\gamma$ sposta gli autovalori di $A^TA$

## Collegati
- [[Overfitting e pruning]]: stesso problema di generalizzazione nei classificatori
- [[Vincoli con grande M]]: conteggio esatto dei coefficienti non nulli
- [[Vincoli logici con variabili binarie]]: vincolo di cardinalità
- [[Feature selection]]: il lasso seleziona le variabili esplicative
- [[Subgradiente]]: la penalità $\ell_1$ non è differenziabile in 0
- [[Regressione robusta]]: la regolarizzazione come caso peggiore su perturbazioni dei dati (Ottimizzazione in condizione di incertezza)
