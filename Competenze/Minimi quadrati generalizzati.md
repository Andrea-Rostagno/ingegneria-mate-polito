---
tipo: competenza
area: statistica
corsi: [Statistica computazionale, Modelli statistici]
livello: [magistrale]
aliases: ["GLS", "generalized least squares", "stimatore GLS", "minimi quadrati con covarianza", "sbiancamento", "whitening", "minimi quadrati pesati", "weighted least squares", "WLS", "nlme::gls", "varPower"]
tags: [competenza, area/statistica]
---

# Minimi quadrati generalizzati

> Stima dei coefficienti di regressione quando gli errori hanno covarianza $\Sigma$ non diagonale: si "sbiancano" dati e covariate con una radice di $\Sigma$ e si applicano i minimi quadrati ordinari.

## Definizione / enunciato
Modello $\mathbf X\sim N(\mathbf Z\boldsymbol\lambda,\Sigma)$, cioè $x_i=\lambda_0+\lambda_1z_{i,1}+\dots+\lambda_pz_{i,p}+\epsilon_i$ con $\boldsymbol\epsilon\sim N(\mathbf 0,\Sigma)$ e $\Sigma=\Sigma(\boldsymbol\alpha,\sigma^2)$ dipendente dai parametri della serie. Verosimiglianza:
$$f(\mathbf x\mid\boldsymbol\lambda,\boldsymbol\alpha,\sigma^2)=(2\pi)^{-n/2}|\Sigma|^{-1/2}\exp\Bigl(-\frac{(\mathbf x-\mathbf Z\boldsymbol\lambda)'\Sigma^{-1}(\mathbf x-\mathbf Z\boldsymbol\lambda)}2\Bigr).$$
Esiste sempre $\mathbf A$ con $\mathbf A\mathbf A'=\Sigma$; posto $\mathbf X^*=\mathbf A^{-1}\mathbf X$, $\mathbf Z^*=\mathbf A^{-1}\mathbf Z$, si ha $\mathbf X^*\sim N(\mathbf Z^*\boldsymbol\lambda,\mathbf I)$.

## Formule chiave
$$\hat{\boldsymbol\lambda}=((\mathbf Z^*)'\mathbf Z^*)^{-1}(\mathbf Z^*)'\mathbf x^*=(\mathbf Z'\Sigma^{-1}\mathbf Z)^{-1}\mathbf Z'\Sigma^{-1}\mathbf x.$$

## Intuizione
Dopo la trasformazione gli errori $\epsilon_i^*$ sono i.i.d. $N(0,1)$ e si torna alla regressione classica. Se si conoscesse $\Sigma$ (cioè $\boldsymbol\alpha$ e $\sigma$) la stima sarebbe immediata; poiché non la si conosce si itera.

## Come si usa
Algoritmo iterativo, "il più semplice e generale": partendo da valori iniziali per $\boldsymbol\alpha$ e $\sigma$ si calcola $\hat\Sigma$, da cui $\hat{\boldsymbol\lambda}$, poi si aggiornano $\boldsymbol\alpha$ e $\sigma$ finché si raggiunge un massimo della verosimiglianza. Usato per stimare modelli AR con covariate.

## Nei corsi
- **Statistica computazionale** (magistrale): "Stima dei parametri" dei modelli AR. Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 27-29).
- **Modelli statistici** (magistrale): $\boldsymbol\varepsilon\sim N_n(\mathbf 0,\sigma^2\mathbf V)$ con $\mathbf V$ nota e definita positiva, $\hat{\boldsymbol\beta}_{\mathrm{GLS}}=(\mathbf X'\mathbf V^{-1}\mathbf X)^{-1}\mathbf X'\mathbf V^{-1}\mathbf Y$, che minimizza $(\mathbf Y-\mathbf X\boldsymbol\beta)'\mathbf V^{-1}(\mathbf Y-\mathbf X\boldsymbol\beta)$, con $\operatorname{VarCov}=\sigma^2(\mathbf X'\mathbf V^{-1}\mathbf X)^{-1}$; con $\mathbf V$ diagonale sono i **minimi quadrati pesati** (WLS), pesi $w_i=1/v_i$ (libro, cap. 10, Def. 10.10). Equivale ai minimi quadrati ordinari sul modello trasformato con $\mathbf V^{-1/2}$: le osservazioni più rumorose contano meno, mentre i minimi quadrati ordinari restano corretti ma non efficienti e con errori standard sbagliati. Rimedio all'**eteroschedasticità**: con $y=2x+\varepsilon$, deviazione standard $0.5x^2$ e $n=100$, i minimi quadrati ordinari danno pendenza 16.0 (errore standard 7.4, $R^2=0.05$); `nlme::gls(y ~ x, weights = varPower(form = ~ x^2))` stima $\hat\delta=0.996$ e pendenza 2.974 (errore standard 0.847); `lm(y ~ x, weights = 1/x^4)` dà 2.976. Con errori autocorrelati nel tempo si usa `correlation = corAR1()`; nei modelli a effetti misti la stima di $\boldsymbol\beta$ è un GLS con $\mathbf V$ diagonale a blocchi (cap. 14). Fonti: `Libri/Modelli statistici/capitoli/cap10.tex` (§10.6, p. 175), `cap14.tex`; codice `magistrale/Modelli statistici/codici/251119 residui-eteroschedastici.R`.

## Prerequisiti
- [[Regressione lineare]]: minimi quadrati ordinari
- [[Fattorizzazione di Cholesky]]: una scelta di $\mathbf A$ con $\mathbf A\mathbf A'=\Sigma$
- [[Vettore gaussiano]]: trasformazioni lineari di normali

## Collegati
- [[Modello AR(p)]]: $\Sigma$ data dalla funzione di autocovarianza
- [[Regressione lineare bayesiana]]: analogo bayesiano con prior sui coefficienti
- [[Stimatore di massima verosimiglianza]]: GLS massimizza la verosimiglianza a $\Sigma$ fissata
- [[Teorema di Gauss-Markov]]: GLS è BLUE quando $\operatorname{VarCov}=\sigma^2\mathbf V$ (Modelli statistici)
- [[Analisi dei residui]]: il grafico a imbuto rivela l'eteroschedasticità (Modelli statistici)
- [[Test di Durbin-Watson]]: errori correlati nel tempo (Modelli statistici)
- [[Modello lineare a effetti misti]]: covarianza marginale non diagonale (Modelli statistici)
