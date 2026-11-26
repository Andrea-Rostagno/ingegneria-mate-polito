---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["AR(p)", "autoregressive model of order p", "modello autoregressivo di ordine p", "operatore di ritardo", "backshift operator", "polinomio autoregressivo", "equazioni di Yule-Walker", "Yule-Walker equations"]
tags: [competenza, area/statistica]
---

# Modello AR(p)

> Il valore al tempo $t$ dipende linearmente dai $p$ precedenti più un rumore: processo markoviano di ordine $p$, stazionario se le radici del polinomio autoregressivo stanno fuori dal cerchio unitario.

## Definizione / enunciato
$$x_t=\alpha_1x_{t-1}+\alpha_2x_{t-2}+\dots+\alpha_px_{t-p}+w_t.$$
Con l'**operatore di ritardo** $Bx_t=x_{t-1}$, $B^px_t=x_{t-p}$ (lineare) e il polinomio autoregressivo $\theta_p(B)=1-\alpha_1B-\dots-\alpha_pB^p$:
$$\theta_p(B)x_t=w_t,\qquad x_t=\theta_p(B)^{-1}w_t,\qquad\theta_p(B)^{-1}=\sum_{i=0}^\infty c_iB^i,\ c_i\to0.$$
**Stazionarietà**: la serie converge se e solo se tutte le radici di $\theta_p(B)=0$ hanno modulo strettamente maggiore di 1. La condizione riguarda le radici, non i coefficienti: per AR(1), $1-\alpha B=0\Rightarrow B=1/\alpha$ e $|1/\alpha|>1\iff|\alpha|<1$.

## Formule chiave
- $E(X_t)=0$, $\mathrm{Var}(X_t)=\sigma^2\bigl(1+\sum_{i=1}^\infty c_i^2\bigr)<\infty$: è una rappresentazione MA($\infty$).
- **Yule-Walker**: moltiplicando per $x_{t-k}$ e prendendo l'atteso, per $k\ge1$
$$\gamma(k)=\alpha_1\gamma(k-1)+\alpha_2\gamma(k-2)+\dots+\alpha_p\gamma(k-p),\qquad\gamma(0)=\alpha_1\gamma(1)+\dots+\alpha_p\gamma(p)+\sigma^2;$$
il sistema determina $\gamma(0),\dots,\gamma(p)$, i restanti per ricorsione.
- **PACF** nulla per $k>p$ (taglio netto dopo $p$).
- Media $\mu$: $x_t=\mu+\alpha_1(x_{t-1}-\mu)+\dots+\alpha_p(x_{t-p}-\mu)+w_t$.
- Previsione: $x_{t+1}\mid x_t,\dots,x_{t-p+1}\sim N(\alpha_1x_t+\dots+\alpha_px_{t-p+1},\sigma^2)$ con i parametri stimati considerati fissi.

## Intuizione
Ogni AR($p$) è un'equazione alle differenze lineare forzata dal rumore: se il polinomio ha una radice dentro il cerchio unitario gli effetti degli shock esplodono invece di smorzarsi.

## Come si usa
Simulazione delle slide con $\alpha_1=0.7$, $\alpha_2=-0.5$, $\alpha_3=0.3$, $\sigma^2=1.5$: 500 valori, scartando i primi 400 come burn-in perché i valori iniziali sono fissati a mano. Si identifica l'ordine dalla PACF e si stimano i parametri, per esempio con l'algoritmo iterativo GLS.

## Nei corsi
- **Statistica computazionale** (magistrale): "Modello autoregressivo di ordine p (AR(p)) I-XIV". Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 16-29).

## Prerequisiti
- [[Modello AR(1)]]: caso $p=1$
- [[Autocorrelazione parziale]]: diagnostica dell'ordine

## Porta a
- [[Modello ARMA]]: aggiunta di una parte MA
- [[Minimi quadrati generalizzati]]: stima dei coefficienti con covarianza AR

## Collegati
- [[Modello MA(q)]]: un AR($p$) stazionario è un MA($\infty$)
- [[Teorema fondamentale dell'algebra]]: le $p$ radici del polinomio autoregressivo
