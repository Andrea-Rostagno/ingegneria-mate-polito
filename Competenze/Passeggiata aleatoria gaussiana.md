---
tipo: competenza
area: probabilita
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Gaussian random walk", "random walk gaussiano", "camminata aleatoria", "x_t = x_{t-1} + w_t"]
tags: [competenza, area/probabilita]
---

# Passeggiata aleatoria gaussiana

> Serie che a ogni tempo si sposta di un passo gaussiano dall'ultimo valore: markoviana, ma non stazionaria, con varianza che cresce linearmente nel tempo.

## Definizione / enunciato
Dato un rumore bianco $(w_1,\dots,w_n)$ con $W_t\sim N(0,\sigma^2)$:
$$x_t=x_{t-1}+w_t,\qquad x_1=w_1.$$
Si assume che la serie inizi in $t=1$ ("non ne possiamo fare a meno"). La condizionata è markoviana del primo ordine: $X_t\mid x_{t-1}\sim N(x_{t-1},\sigma^2)$.

## Formule chiave
Sostituendo all'indietro $x_t=\sum_{i=1}^tw_i$, quindi marginalmente $X_t\sim N(0,t\sigma^2)$ e
$$\gamma_t(k)=\mathrm{Cov}(X_t,X_{t+k})=\sum_{i=1}^t\sum_{j=1}^{t+k}\mathrm{Cov}(w_i,w_j)=t\sigma^2,\qquad\mathbf X\sim N(\mathbf 0,\Sigma),\ [\Sigma]_{i,j}=\min\{i,j\}\sigma^2.$$
$$\rho_t(k)=\frac{t\sigma^2}{\sqrt{t\sigma^2(t+k)\sigma^2}}=\frac1{\sqrt{1+k/t}},\qquad\psi_t(1)=\frac1{\sqrt{1+1/t}},\quad\psi_t(k)=0\ (k>1).$$

## Intuizione
Non è stazionaria neanche in senso debole: la varianza cresce senza limite. È un AR(1) con $\alpha=1$, il caso in cui le serie geometriche divergono; per questo si fissa il primo tempo. L'autocorrelazione dipende da $t$ attraverso $k/t$: il correlogramma campionario mostra una dipendenza forte ma non stima $\rho_t(k)$ (nelle slide, stime MC per $t=1,10,50$).

## Come si usa
È il prototipo di serie **integrata di ordine 1**: le differenze prime $x_t^*=x_t-x_{t-1}=w_t$ sono rumore bianco. Compare come livello latente nei modelli gerarchici ($w_t\mid w_{t-1}\sim N(w_{t-1},\tau^2)$).

## Nei corsi
- **Statistica computazionale** (magistrale): "Camminata aleatoria (Random walk) I-V". Fonti: `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 26-30); `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 5, 61).

## Prerequisiti
- [[Rumore bianco]]: gli incrementi
- [[Somma di variabili aleatorie indipendenti]]: $x_t=\sum w_i$ è normale con varianza $t\sigma^2$

## Porta a
- [[Modello ARIMA]]: serie integrata di ordine 1

## Collegati
- [[Moto browniano]]: analogo a tempo continuo, stessa covarianza $\min\{s,t\}$
- [[Ricorrenza della passeggiata aleatoria]]: passeggiata su $\mathbb Z^d$ studiata in Processi stocastici
- [[Modello AR(1)]]: caso limite $\alpha=1$, non stazionario
- [[Autocorrelazione parziale]]: nulla oltre il lag 1
