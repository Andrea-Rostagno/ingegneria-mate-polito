---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["AR(1)", "autoregressive model of order 1", "modello autoregressivo del primo ordine", "processo autoregressivo di ordine 1", "previsione AR(1)"]
tags: [competenza, area/statistica]
---

# Modello AR(1)

> $x_t=\alpha x_{t-1}+w_t$: ogni valore è una frazione del precedente più un rumore; con $|\alpha|<1$ è un processo gaussiano stazionario con autocorrelazione $\alpha^k$.

## Definizione / enunciato
$$x_t=\alpha x_{t-1}+w_t,\qquad w_t\ \text{rumore bianco }N(0,\sigma^2),$$
con serie di lunghezza infinita. Sostituendo, $x_t=\alpha(\alpha x_{t-2}+w_{t-1})+w_t=\alpha^2x_{t-2}+\alpha w_{t-1}+w_t=\dots$, che la slide scrive come $x_t=\alpha^\infty x_{t-\infty}+\sum_{i=0}^\infty\alpha^iw_{t-i}$; con $|\alpha|<1$, $x_t=\sum_{i=0}^\infty\alpha^iw_{t-i}$: combinazione lineare di gaussiane, quindi gaussiano.

## Formule chiave
- $E(X_t)=0$, $\gamma_t(k)=\alpha^k\sigma^2\sum_{i=0}^\infty\alpha^{2i}=\frac{\alpha^k\sigma^2}{1-\alpha^2}$, $\gamma(0)=\frac{\sigma^2}{1-\alpha^2}$ (serie geometrica); divergono per $|\alpha|\ge1$.
- $\rho(k)=\alpha^k$: decade con $k$ e alterna segno se $\alpha<0$.
- Simulazione esatta: $x_1\sim N\bigl(0,\frac{\sigma^2}{1-\alpha^2}\bigr)$, poi $x_i\mid x_{i-1}\sim N(\alpha x_{i-1},\sigma^2)$.
- Con media $\mu$: $x_t=\mu+\alpha(x_{t-1}-\mu)+w_t$.
- **Previsione** a parametri fissi: $x_{t+1}\mid x_t\sim N(\alpha x_t,\sigma^2)$, $x_{t+2}\mid x_t\sim N(\alpha^2x_t,(1+\alpha^2)\sigma^2)$ e in generale $x_{t+k}=\alpha^kx_t+\sum_{i=0}^{k-1}\alpha^iw_{t+k-i}$, $E(x_{t+k}\mid x_t)=\alpha^kx_t$, $\mathrm{Var}(x_{t+k}\mid x_t)=(1+\alpha^2+\dots+\alpha^{2k})\sigma^2$ (così nella slide) che tende a $\sigma^2/(1-\alpha^2)$.

## Intuizione
Media nulla e covarianza funzione solo del lag: stazionario debole e quindi forte (gaussiano). $\alpha=1$ è il random walk (non stazionario, si fissa il primo tempo), $\alpha=0$ il rumore bianco. È anche un MA($\infty$): $(1-\alpha B)^{-1}w_t=\sum_j\alpha^jw_{t-j}$.

## Come si usa
Simulazioni delle slide con $\alpha=0.3,0.9,-0.3,-0.9$ e $\sigma^2=1.5$ (100 punti, codice R): l'ACF decade geometricamente, con segni alterni per $\alpha<0$. Nella previsione a distanza $c$ nel condizionante vanno solo le osservazioni; se i parametri non sono fissi la predittiva si ottiene con Monte Carlo.

## Nei corsi
- **Statistica computazionale** (magistrale): "Modello autoregressivo del primo ordine (AR(1)) I-XIV" e previsione. Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 2-15, 24-26); notebook `magistrale/Statistica computazionale/time_series_modelli_R.ipynb` (simulazioni in R).

## Prerequisiti
- [[Rumore bianco]]: innovazione $w_t$
- [[Serie geometrica]]: somma di $\alpha^{2i}$ per la varianza
- [[Stazionarietà di un processo stocastico]]: condizione $|\alpha|<1$

## Porta a
- [[Modello AR(p)]]: più ritardi

## Collegati
- [[Passeggiata aleatoria gaussiana]]: caso $\alpha=1$
- [[Modello MA(q)]]: un AR(1) è un MA($\infty$)
- [[Regressione con processo gaussiano]]: costruzione condizionata con coefficiente $\exp(-\phi|x_i-x_{i-1}|)$, analoga a un AR(1)
- [[Modello CAR]]: versione spaziale "conditional autoregressive"
