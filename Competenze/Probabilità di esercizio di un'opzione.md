---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [exercise probability, probabilità che S_T superi K, probabilità di esercizio sotto la misura reale, d2 cappuccio, quantile di S_T, probabilità di profitto, shortfall probability, probabilità di raddoppio]
tags: [competenza, area/finanza]
---

# Probabilità di esercizio di un'opzione

> Probabilità che il prezzo GBM superi lo strike alla scadenza: $N(\hat d_2)$ con il drift reale $\mu$ sotto $\mathbb P$, $N(d_2)$ con $r$ sotto $\mathbb Q$.

## Definizione / enunciato
**Sotto la misura reale** (prop. c15-prob-esercizio): $S\sim\mathrm{GBM}(\mu,\sigma)$, $K,T>0$,
$$\hat d_2=\frac{\ln(S_0/K)+(\mu-\frac12\sigma^2)T}{\sigma\sqrt T},\qquad\mathbb P(S_T>K)=N(\hat d_2),\quad\mathbb P(S_T<K)=N(-\hat d_2),$$
$\mathbb P(a<S_T<b)=N(\hat d_2(a))-N(\hat d_2(b))$; quantile $q_\alpha(S_T)=S_0\exp\{(\mu-\frac12\sigma^2)T+\sigma\sqrt Tz_\alpha\}$.

**Sotto la misura neutrale al rischio** (prop. c16-prob-neutrale): $\mathbb Q(S_T>K)=N(d_2)$, con $r$ al posto di $\mu$; un'opzione digitale che paga 100 se $S_T>K$ vale $100e^{-rT}N(d_2)$.

## Formule chiave
Ricetta: tradurre l'evento (esercizio, profitto di uno spread, raddoppio del capitale) in una condizione $S_T\gtrless a$, poi usare $\ln S_T\sim\mathcal N(\ln S_0+(\mu-\frac12\sigma^2)T,\sigma^2T)$.

## Intuizione
Domande del tipo "qual è la probabilità che…" si fanno sotto $\mathbb P$ e usano $\mu$; nel prezzo di Black-Scholes compare invece $r$. $N(\hat d_2)$ e $N(d_2)$ sono numeri diversi con significati diversi. Errore frequente: usare $\mu$ invece di $\mu-\frac12\sigma^2$.

## Come si usa
Esempio del libro: $\mu=16\%$, $\sigma=35\%$, $S_0=38$, $K=40$, 6 mesi: $\ln S_T\sim\mathcal N(3.6870,0.06125)$, $\mathbb P(S_T>40)=0.4969$ (con le tavole 0.4960), put $0.5031$: quasi uguali perché la mediana $39.92$ è vicina allo strike. Con $S_0=100$, $\mu=10\%$, $\sigma=30\%$, $T=1$: $\mathbb P(S_1>\mathbb E[S_1]=110.52)=0.4404<\frac12$, mentre $\mathbb P(S_1>100)=N(0.1833)=0.5727$, perché la mediana $105.65$ sta sopra 100.

## Nei corsi
- **Financial engineering** (magistrale): cap. 15 §Probabilità di eventi sotto la misura reale (sec:c15-probabilita-eventi), cap. 16 prop. c16-prob-neutrale, cap. 8 §Probabilità di profitto. Fonti: `Libri/Financial engineering/capitoli/cap15.tex`, `cap16.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/35 - lez 17 aprile - moto browniano geometrico.pdf`, `39 - 24 aprile c - esercizi delta gamma Black Scholes.pdf`.

## Prerequisiti
- [[Moto browniano geometrico]]: legge di $S_T$
- [[Distribuzione lognormale]]: passaggio al logaritmo

## Porta a
- [[Formula di Black-Scholes]]: $N(d_2)=\mathbb Q(S_T>K)$

## Collegati
- [[Opzioni call e put]]: eventi di esercizio
- [[Bull e bear spread]]: probabilità di profitto
- [[Misura neutrale al rischio]]: stessa probabilità sotto $\mathbb Q$
- [[Value at Risk]]: quantile di $S_T$
