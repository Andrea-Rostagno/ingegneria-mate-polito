---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["leverage", "leva", "hat values", "distanza di Cook", "Cook's distance", "punti influenti", "influential points", "DFBETA", "DFFIT", "influence.measures", "residui standardizzati", "standardized residuals"]
tags: [competenza, area/statistica]
---

# Leva e distanza di Cook

> Misure dell'influenza di una singola osservazione sul modello lineare: la leva dice quanto il punto è anomalo nei predittori, la distanza di Cook quanto cambierebbero i valori interpolati togliendolo.

## Definizione / enunciato
- **Leva** (libro, cap. 10, Def. 10.14): $h_{ii}=\mathbf x_i'(\mathbf X'\mathbf X)^{-1}\mathbf x_i=[\mathbf P]_{ii}$, con $0\le h_{ii}\le1$ e $\sum_ih_{ii}=\operatorname{tr}\mathbf P=p$; leva media $p/n$, alta leva se $h_{ii}>2p/n$ (o $3p/n$).
- **Residuo standardizzato** (Def. 10.9): $r_i=\hat\varepsilon_i/(S\sqrt{1-h_{ii}})$, approssimativamente $N(0,1)$ se il modello è corretto; $|r_i|>3$ è sospetto.
- **Distanza di Cook** (Def. 10.15):
$$D_i=\frac{\|\hat{\mathbf Y}-\hat{\mathbf Y}_{(-i)}\|^2}{pS^2}=\frac{(\hat{\boldsymbol\beta}-\hat{\boldsymbol\beta}_{(-i)})'\mathbf X'\mathbf X(\hat{\boldsymbol\beta}-\hat{\boldsymbol\beta}_{(-i)})}{pS^2}=\frac{r_i^2}p\cdot\frac{h_{ii}}{1-h_{ii}}.$$

## Formule chiave
La leva dipende solo dai predittori: è alta per osservazioni lontane dal centro della nuvola (in regressione semplice cresce con $(x_i-\bar x)^2$). Il fattore $\sqrt{1-h_{ii}}$ nel residuo standardizzato tiene conto che i punti ad alta leva "tirano" la retta verso di sé. Regole pratiche per Cook: $D_i>4/n$ oppure $D_i>1$, o semplicemente molto più grande delle altre.

## Intuizione
L'influenza nasce dalla combinazione di posizione estrema nei predittori (leva) e cattivo adattamento (residuo grande): la formula di Cook ne è il prodotto, e non richiede di ristimare il modello $n$ volte.

## Come si usa
Dati Advertising, modello `Sales ~ sqrt(TV) + Radio` ($n=200$, $p=3$, leva media 0.015): l'osservazione 131 ha `cook.d` $=0.235$ (la seconda è 0.10), leva 0.045 (tre volte la media), residuo standardizzato $-3.88$, `dffit` $=-0.87$: un mercato con spesa televisiva quasi nulla e vendite bassissime (libro, Es. `c10-influenza`). In R: `hatvalues`, `rstandard`, `cooks.distance`, `influence.measures` (DFBETA, DFFIT).

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 10, §10.5 e §10.8 (Def. 10.9, 10.14, 10.15, pp. 172-177). Fonti: `Libri/Modelli statistici/capitoli/cap10.tex`; codici `magistrale/Modelli statistici/codici/251113 lm-dignostica.R`, `codici/251119 Regressione Lineare Advertising.R`.

## Prerequisiti
- [[Matrice di proiezione]]: $h_{ii}$ è la diagonale di $\mathbf P$
- [[Geometria dei minimi quadrati]]: valori interpolati e residui
- [[Analisi dei residui]]: residui standardizzati e grafici diagnostici

## Porta a
- [[Criteri di informazione AIC e BIC]]: la selezione del modello può cambiare togliendo i punti influenti

## Collegati
- [[Regressione lineare]]: diagnostica del modello stimato
