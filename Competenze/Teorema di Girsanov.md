---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Girsanov theorem, Girsanov, cambio di misura, change of measure, prezzo di mercato del rischio, market price of risk, theta*, inclinazione esponenziale, exponential tilting]
tags: [competenza, area/probabilita]
---

# Teorema di Girsanov

> Cambiando la probabilità con la densità esponenziale $e^{-\theta W_T-\theta^2T/2}$, il browniano acquista un drift: $W_t+\theta t$ diventa browniano. Così si costruisce la misura neutrale al rischio in tempo continuo.

## Definizione / enunciato
**Misure equivalenti e densità** (def. c16-misure-equivalenti, prop. c16-radon-nikodym): se $L\ge0$, $\mathbb E[L]=1$, allora $\tilde{\mathbb P}(A)=\mathbb E[\mathbf 1_AL]$ è una probabilità, $\mathbb E_{\tilde{\mathbb P}}[X]=\mathbb E_{\mathbb P}[XL]$; se $L>0$ q.c. allora $\tilde{\mathbb P}\sim\mathbb P$.

**Martingala esponenziale** (prop. c16-martingala-esponenziale): $\mathcal E_t(\theta)=\exp\{-\theta W_t-\frac12\theta^2t\}$ è una martingala positiva, $\mathbb E[\mathcal E_t]=1$, $d\mathcal E_t=-\theta\mathcal E_t\,dW_t$.

**Teorema di Girsanov** (teo. c16-girsanov, enunciato senza dimostrazione): sotto $\mathbb P^\theta$ di densità $\mathcal E_T(\theta)$ rispetto a $\mathbb P$, il processo $W^\theta_t=W_t+\theta t$, $t\in[0,T]$, è un moto browniano standard.

**Misura neutrale al rischio** (cor. c16-misura-neutrale): sotto $\mathbb P^\theta$ il GBM ha drift $\mu-\sigma\theta$ e stessa $\sigma$; con
$$\theta^*=\frac{\mu-r}{\sigma}\quad(\text{prezzo di mercato del rischio}),\qquad\mathbb Q=\mathbb P^{\theta^*}:\quad dS_t=rS_t\,dt+\sigma S_t\,dW^{\mathbb Q}_t,$$
e $e^{-rt}S_t$ è una $\mathbb Q$-martingala.

## Formule chiave
Caso di una sola normale (lem. c16-inclinazione): con $L=e^{-\theta Z-\theta^2/2}$, sotto $\tilde{\mathbb P}$ si ha $Z\sim\mathcal N(-\theta,1)$.

## Intuizione
Il cambio di misura sposta la media della normale, non la varianza: cambia il drift, non la volatilità. Nel binomiale la densità è $L=q/p$ stato per stato: $\mathbb Q$ è "pessimista", abbassa il peso dello stato favorevole quanto basta a cancellare il premio per il rischio.

## Come si usa
Esempi del libro: albero con $S_0=100$, $u=1.2$, $d=0.9$, $p_u=0.6$, $r=5\%$: $q_u=0.5$, $L=0.8333$ e $1.25$, call $K=100$: $9.524$ con entrambe le misure; $\mathbb E_{\mathbb P}[S_1]=108$, $\mathbb E_{\mathbb Q}[S_1]=105$. Con $\mu=10\%$, $\sigma=40\%$, $r=4\%$: $\theta^*=0.15$; con $S_0=16$, $\mathbb P(S_1>18)=0.4034$ e $\mathbb Q(S_1>18)=0.3466$. La lezione usa $e^{\theta W_t-\theta^2t/2}$ (segno opposto di $\theta$, ugualmente corretto).

## Nei corsi
- **Financial engineering** (magistrale): cap. 16 §§Cambiare la misura di probabilità, Il teorema di Girsanov. Fonti: `Libri/Financial engineering/capitoli/cap16.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/35 - lez 17 aprile - moto browniano geometrico.pdf`, `36 - lez 21 aprile - Black Scholes e Girsanov.pdf`.

## Prerequisiti
- [[Teorema di Radon-Nikodym]]: densità di una misura rispetto a un'altra
- [[Martingale del moto browniano]]: martingala esponenziale
- [[Moto browniano geometrico]]: drift che cambia sotto $\mathbb P^\theta$

## Porta a
- [[Valutazione neutrale al rischio]]: prezzo come attesa sotto $\mathbb Q$
- [[Formula di Black-Scholes]]: calcolo dell'attesa sotto $\mathbb Q$

## Collegati
- [[Misura neutrale al rischio]]: versione discreta
- [[Formula di Itô multidimensionale]]: dinamica del prezzo scontato
