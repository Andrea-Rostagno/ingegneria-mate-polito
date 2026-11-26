---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["robust regression", "robust least squares", "minimi quadrati robusti", "regressione robusta worst case", "robustezza e regolarizzazione", "robustness and regularization"]
tags: [competenza, area/ottimizzazione]
---

# Regressione robusta

> Minimizzare il residuo nel caso peggiore su perturbazioni dei dati limitate in norma equivale a minimizzare il residuo più una penalità sulla norma dei coefficienti: robustezza e regolarizzazione sono la stessa cosa.

## Definizione / enunciato
Minimi quadrati $\min_{\mathbf x}\|A\mathbf x-\mathbf b\|_2$ con perturbazioni non stocastiche $\Delta$ su $A$ e $\boldsymbol\delta$ su $\mathbf b$. Con norma spettrale e euclidea:
$$\min_{\mathbf x}\Big[\max_{\|\Delta\|_2\le\rho_A,\ \|\boldsymbol\delta\|_2\le\rho_b}\big\|(A+\Delta)\mathbf x-(\mathbf b+\boldsymbol\delta)\big\|_2\Big]\ \Longleftrightarrow\ \min_{\mathbf x}\big[\|A\mathbf x-\mathbf b\|_2+\rho_A\|\mathbf x\|_2+\rho_b\big].$$

## Formule chiave
Con la norma indotta $\|\Delta\|_{(h,g)}=\sup_{\mathbf x\ne\mathbf 0}\|\Delta\mathbf x\|_g/\|\mathbf x\|_h$ e perturbazioni solo su $A$:
$$\min_{\mathbf x}\Big[\max_{\|\Delta\|_{(h,g)}\le\rho}\|(A+\Delta)\mathbf x-\mathbf b\|_g\Big]=\min_{\mathbf x}\ \|A\mathbf x-\mathbf b\|_g+\rho\|\mathbf x\|_h .$$
Con $\|\cdot\|_g=\ell_2$ e $\|\cdot\|_h=\ell_1$ si ottiene (a meno del quadrato sul residuo) la **lasso**.

## Intuizione
La dimostrazione ha due passi: la disuguaglianza triangolare dà il limite superiore $\|\mathbf z+\Delta\mathbf x\|_g\le\|\mathbf z\|_g+\rho\|\mathbf x\|_h$ con $\mathbf z=A\mathbf x-\mathbf b$; poi una perturbazione di rango uno lo raggiunge, $\Delta^\circ=\rho\,\frac{\mathbf z}{\|\mathbf z\|_g}\mathbf v^T$ con $\mathbf v\in\arg\max_{\|\mathbf v\|_{h*}\le1}\mathbf x^T\mathbf v$ (norma duale, per cui $\mathbf x^T\mathbf v=\|\mathbf x\|_h$). Nel caso euclideo serve $\mathbf z\ne\mathbf 0$ e si usa l'autodualità di $\ell_2$.

## Come si usa
Spiega perché le penalità ridge/lasso danno modelli più stabili: proteggono dagli errori nei dati. Nel caso $\ell_2$ la forma assomiglia alla ridge ma con il residuo non al quadrato.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "The link between regularized regression and robust optimization". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/06b - WorstCaseRobust.pdf` (p. 11-15).

## Prerequisiti
- [[Norma duale]]: costruzione della perturbazione peggiore
- [[Norma spettrale]]: misura delle perturbazioni della matrice dei dati
- [[Programmazione lineare robusta]]: logica del caso peggiore su un insieme di incertezza

## Collegati
- [[Regressione regolarizzata]]: ridge e lasso come forme robuste
- [[Regressione lineare]]: il problema nominale ai minimi quadrati
