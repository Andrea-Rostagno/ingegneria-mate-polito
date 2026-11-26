---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Bayesian linear regression", "modello lineare bayesiano", "regressione bayesiana normale-gamma inversa", "posteriori di beta", "M_p e V_p"]
tags: [competenza, area/statistica]
---

# Regressione lineare bayesiana

> Il modello lineare normale con prior normale sui coefficienti e gamma inversa sulla varianza: con $\sigma^2$ nota la posteriori di $\boldsymbol\beta$ è normale in forma chiusa, altrimenti si campiona con un Gibbs a due blocchi.

## Definizione / enunciato
Modello: $\mathbf y\sim N_n(\mathbf X\boldsymbol\beta,\sigma^2\mathbf I)$ (cioè $y_i=\beta_0+\beta_1x_i+\varepsilon_i$, $\varepsilon_i\sim N(0,\sigma^2)$ indipendenti), con prior $\boldsymbol\beta\sim N_p(\mathbf M,\mathbf V)$ e, se non nota, $\sigma^2\sim IG(a,b)$, indipendenti.

**Caso $\sigma^2$ nota.** Raccogliendo il kernel in $\boldsymbol\beta$:
$$f(\boldsymbol\beta\mid\mathbf y)\propto\exp\Bigl(-\tfrac12\bigl(\boldsymbol\beta^T(\tfrac1{\sigma^2}\mathbf X^T\mathbf X+\mathbf V^{-1})\boldsymbol\beta-2\boldsymbol\beta^T(\tfrac1{\sigma^2}\mathbf X^T\mathbf y+\mathbf V^{-1}\mathbf M)\bigr)\Bigr),$$
quindi $\boldsymbol\beta\mid\mathbf y\sim N_p(\mathbf M_p,\mathbf V_p)$.

## Formule chiave
$$\mathbf V_p=\Bigl(\frac1{\sigma^2}\mathbf X^T\mathbf X+\mathbf V^{-1}\Bigr)^{-1},\qquad\mathbf M_p=\mathbf V_p\Bigl(\frac1{\sigma^2}\mathbf X^T\mathbf y+\mathbf V^{-1}\mathbf M\Bigr).$$
Con $\sigma^2$ ignota (MCMC p. 27-29) le full conditional sono $\boldsymbol\beta\mid\mathbf y,\sigma^2\sim N_p(\mathbf M_p,\mathbf V_p)$ e
$$\sigma^2\mid\boldsymbol\beta,\mathbf y\sim IG\Bigl(\frac n2+a,\ \frac12(\mathbf y-\mathbf X\boldsymbol\beta)^T(\mathbf y-\mathbf X\boldsymbol\beta)+b\Bigr).$$
Stimatori frequentisti di confronto: $\hat\beta_1=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sum(x_i-\bar x)^2}$, $\hat\beta_0=\bar y-\hat\beta_1\bar x$, $\hat\sigma^2=\frac{\sum(y_i-\hat\beta_0-\hat\beta_1x_i)^2}{n-2}$, $\hat{\boldsymbol\beta}=(\mathbf X^T\mathbf X)^{-1}\mathbf X^T\mathbf y$.

## Intuizione
Se $\mathbf V$ è diagonale con varianze molto grandi, $\mathbf V^{-1}\approx0\mathbf I$, $\mathbf V_p\approx(\frac1{\sigma^2}\mathbf X^T\mathbf X)^{-1}$ e $\mathbf M_p\approx(\mathbf X^T\mathbf X)^{-1}\mathbf X^T\mathbf y$: la media a posteriori coincide con lo stimatore di massima verosimiglianza. Bayesiano e frequentista non differiscono molto con molti dati e prior poco informative.

## Come si usa
Esempio guida degli algoritmi MCMC: Gibbs alternando $\boldsymbol\beta$ e $\sigma^2$; se non si riconoscesse il kernel IG, si userebbe un passo Metropolis su $\sigma^2$ o su $\tau^2=\log\sigma^2$ con proposta normale. Con $\sigma^2\sim G(a,b)$ invece di $IG$ la full conditional non ha forma nota.

## Nei corsi
- **Statistica computazionale** (magistrale): "I modelli Bayesiani" e "Esempio regressivo". Fonti: `magistrale/Statistica computazionale/Modelli Bayesiani (1).pdf` (p. 15-18, 29-33); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 20, 27-33).

## Prerequisiti
- [[Regressione lineare]]: il modello e lo stimatore dei minimi quadrati
- [[Famiglia coniugata]]: prior normale coniugata per $\boldsymbol\beta$
- [[Vettore gaussiano]]: kernel della normale multivariata

## Porta a
- [[Gibbs sampler]]: esempio a due blocchi $(\boldsymbol\beta,\sigma^2)$

## Collegati
- [[Stimatore di massima verosimiglianza]]: limite con prior piatte
- [[Algoritmo di Metropolis-Hastings]]: passo per $\sigma^2$ se la full conditional non è nota
- [[Minimi quadrati generalizzati]]: caso frequentista con covarianza non diagonale
