---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["ARMA(p,q)", "autoregressive moving average", "modello autoregressivo a media mobile", "ARMA(1,1)", "teorema di rappresentazione di Wold", "Wold decomposition"]
tags: [competenza, area/statistica]
---

# Modello ARMA

> Unione di parte autoregressiva e media mobile, $\theta_p(B)x_t=\phi_q(B)w_t$: descrive i processi gaussiani stazionari con meno parametri di un AR o MA puro.

## Definizione / enunciato
$$x_t=\alpha_1x_{t-1}+\dots+\alpha_px_{t-p}+w_t+\beta_1w_{t-1}+\dots+\beta_qw_{t-q},\qquad\theta_p(B)x_t=\phi_q(B)w_t.$$
- stazionario se le radici di $\theta_p(B)$ sono maggiori di 1 in valore assoluto;
- invertibile se lo sono quelle di $\phi_q(B)$;
- ARMA($p$,0) è un AR($p$), ARMA(0,$q$) un MA($q$).

**Teorema di rappresentazione di Wold**: ogni processo $\{X_t\}_{t\in\mathbb Z}$ debolmente stazionario di ordine 2 a media nulla si scrive $X_t=\sum_{j=0}^\infty b_jw_{t-j}$ con $w_t$ rumore bianco (media zero, varianza finita, non per forza gaussiano) e $\sum_j|b_j|^2<\infty$. Quindi un processo gaussiano si rappresenta sempre con un MA($\infty$), eventualmente finito.

## Formule chiave
**ARMA(1,1)** $x_t=\alpha x_{t-1}+w_t+\beta w_{t-1}$: $x_t=(1-\alpha B)^{-1}(1+\beta B)w_t=w_t+(\alpha+\beta)\sum_{j=1}^\infty\alpha^{j-1}w_{t-j}$, quindi
$$E(x_t)=0,\quad\mathrm{Var}(X_t)=\sigma^2+\sigma^2(\alpha+\beta)^2\frac1{1-\alpha^2},$$
$$\gamma(k)=(\alpha+\beta)\alpha^{k-1}\sigma^2+(\alpha+\beta)^2\sigma^2\alpha^k\frac1{1-\alpha^2},\qquad\rho(k)=\frac{\alpha^{k-1}(\alpha+\beta)(1+\alpha\beta)}{1+2\alpha\beta+\beta^2}=\alpha\rho(k-1).$$

## Intuizione
Se $\theta_p(B)$ e $\phi_q(B)$ hanno un fattore comune e il modello è stazionario si semplifica: $(1-\frac12B)(1-\frac13B)x_t=(1-\frac12B)w_t$ è in realtà $(1-\frac13B)x_t=w_t$. Per questo un ARMA richiede meno parametri di un AR($\infty$) o MA($\infty$) equivalente.

## Come si usa
Previsione e media non nulla si trattano come nei modelli AR e MA. Una serie non stazionaria si porta in forma ARMA differenziando (ARIMA).

## Nei corsi
- **Statistica computazionale** (magistrale): "ARMA model I-V". Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 56-60).

## Prerequisiti
- [[Modello AR(p)]]: parte autoregressiva
- [[Modello MA(q)]]: parte a media mobile

## Porta a
- [[Modello ARIMA]]: ARMA sulle differenze

## Collegati
- [[Stazionarietà di un processo stocastico]]: Wold vale per processi debolmente stazionari
- [[Processo gaussiano]]: un GP stazionario a tempi discreti è un MA($\infty$)
