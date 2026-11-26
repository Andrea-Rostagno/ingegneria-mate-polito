---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["MA(q)", "MA(1)", "moving average", "media mobile", "modello a media mobile", "invertibilità di un MA", "invertibility"]
tags: [competenza, area/statistica]
---

# Modello MA(q)

> Il valore al tempo $t$ è una combinazione lineare del rumore corrente e dei $q$ precedenti: sempre stazionario, con autocorrelazione nulla oltre il lag $q$; per essere identificabile deve essere invertibile.

## Definizione / enunciato
$$x_t=w_t+\beta_1w_{t-1}+\dots+\beta_qw_{t-q}=\phi_q(B)w_t,\qquad\phi_q(B)=1+\beta_1B+\dots+\beta_qB^q.$$
Il modello è identificabile se $\phi_q(B)$ è invertibile, e lo è se e solo se tutte le radici hanno valore assoluto maggiore di 1.

## Formule chiave
- **MA(1)** $x_t=w_t+\beta w_{t-1}$: $E(X_t)=0$, $\mathrm{Var}(X_t)=\sigma^2(1+\beta^2)$, $\gamma(1)=\beta\sigma^2$, $\gamma(k)=0$ per $k>1$, $\rho(1)=\frac{\beta}{1+\beta^2}$.
- **MA(q)** (con $\beta_0=1$): $\mathrm{Var}(X_t)=\sigma^2\sum_{j=0}^q\beta_j^2$,
$$\gamma(k)=\begin{cases}\sigma^2\sum_{j=0}^q\beta_j^2&k=0\\\sigma^2\sum_{j=0}^{q-k}\beta_j\beta_{j+k}&k=1,\dots,q\\0&k>q\end{cases},\qquad\rho(k)=\frac{\sum_{j=0}^{q-k}\beta_j\beta_{j+k}}{\sum_{j=0}^q\beta_j^2}\ (1\le k\le q).$$
- **Invertibilità**: se $|\beta|<1$, $(1+\beta B)^{-1}x_t=x_t+\sum_{j\ge1}c_jx_{t-j}=w_t$, cioè un AR($\infty$); per sostituzione $x_t=w_t+\sum_{i=1}^\infty(-1)^{i+1}\beta^ix_{t-i}$. Un MA($q$) non è mai markoviano.

## Intuizione
Con $\beta$ e $\sigma^2$ oppure $1/\beta$ e $\beta^2\sigma^2$ si ottengono la stessa media e la stessa covarianza, quindi lo stesso processo gaussiano: per identificare si impone $|\beta|\le1$ (con $|\beta|<1$ è anche invertibile). Nella sostituzione $w_{t-1}=x_{t-1}-\beta w_{t-2}$ bisogna ricordare che $\mathrm{Cov}(x_{t-1},w_{t-2})\ne0$.

## Come si usa
L'ACF si azzera dopo $q$: è la firma per riconoscere l'ordine. Simulazioni delle slide con $\beta=0.3,0.9,-0.3$ e MA(3) con $\beta=(0.8,-0.5,0.3)$, $\sigma^2=1.5$. Media non nulla: $x_t=\mu+w_t+\beta_1w_{t-1}+\dots$; previsione dalle condizionate, ad esempio $x_{t+1}=w_{t+1}+\beta w_t$.

## Nei corsi
- **Statistica computazionale** (magistrale): "Modello MA(1) I-XIX" e "Modello Moving Average di ordine q I-VII". Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 30-55).

## Prerequisiti
- [[Rumore bianco]]: i termini $w_{t-j}$
- [[Funzione di autocorrelazione]]: si annulla oltre $q$

## Porta a
- [[Modello ARMA]]: parte MA del modello misto

## Collegati
- [[Identificabilità di un modello statistico]]: $\beta$ e $1/\beta$ danno lo stesso processo
- [[Modello AR(1)]]: un AR(1) è un MA($\infty$), un MA(1) invertibile è un AR($\infty$)
- [[Modello AR(p)]]: rappresentazione duale
