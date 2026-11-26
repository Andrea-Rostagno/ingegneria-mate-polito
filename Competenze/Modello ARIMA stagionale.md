---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["SARIMA", "seasonal ARIMA", "ARIMA(p,d,q)(P,D,Q)_s", "stagionalità", "seasonality", "effetto stagionale", "decomposizione di una serie storica"]
tags: [competenza, area/statistica]
---

# Modello ARIMA stagionale

> ARIMA con polinomi aggiuntivi in $B^s$ che descrivono la dipendenza tra osservazioni distanti un periodo $s$ (12 mesi, 32 secondi...).

## Definizione / enunciato
Con $\Theta_P(B^s)=1-\alpha_1^*B^s-\alpha_2^*B^{2s}-\dots-\alpha_P^*B^{Ps}$ e $\Phi_Q(B^s)=1+\beta_1^*B^s+\dots+\beta_Q^*B^{Qs}$, un modello stagionale si scrive
$$\Theta_P(B^s)\theta_p(B)(1-B^s)^D(1-B)^dx_t=\Phi_Q(B^s)\phi_q(B)w_t,$$
ed è un **ARIMA$(p,d,q)(P,D,Q)_s$**.

## Formule chiave
Casi elementari, con $x_t$ temperatura e $t$ il mese:
1. $x_t=a_{t\bmod12}+w_t$, media che cambia ogni mese e si ripete ogni 12: $(1-B^{12})x_t=(1-B^{12})w_t$;
2. $x_t=x_{t-12}+w_t$, integrato stagionale: $(1-B^{12})x_t=w_t$;
3. $x_t=\alpha_1x_{t-12}+\alpha_2x_{t-24}+w_t$: $(1-\alpha_1B^{12}-\alpha_2B^{24})x_t=w_t$;
4. $x_t=w_t+\beta_1w_{t-12}+\beta_2w_{t-24}$: $x_t=(1+\beta_1B^{12}+\beta_2B^{24})w_t$.
Combinato: $x_t=x_{t-1}+\alpha x_{t-12}-\alpha x_{t-13}+w_t\Rightarrow(1-\alpha B^{12})(1-B)x_t=w_t$.

## Intuizione
Un effetto stagionale di periodo $s$ introduce correlazione tra osservazioni distanti $s$, che si vede subito nel correlogramma. Effetti deterministici classici: un "fattore" come nei modelli regressivi, $x_t=a_{t\bmod s}+w_t$, o una funzione ciclica $x_t=\psi\sin(2\pi\lambda t+\phi)+w_t$.

## Come si usa
Descrittivamente si parte dalla decomposizione trend + stagionale + resto (AirPassengers, dove la stagionalità non costante resta in parte nel resto e il log aiuta); poi si sceglie la differenziazione stagionale e gli ordini $(P,Q)$ guardando l'ACF ai lag multipli di $s$. Esempio simulato: AR(1) con $\alpha=0.8$ più un effetto fisso di periodo 12.

## Nei corsi
- **Statistica computazionale** (magistrale): "Modello ARIMA stagionale I-VII" e decomposizione nell'introduzione. Fonti: `magistrale/Statistica computazionale/Time Series Modelli.pdf` (p. 85-91); `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 3-5).

## Prerequisiti
- [[Modello ARIMA]]: struttura non stagionale

## Collegati
- [[Funzione di autocorrelazione]]: massimi ai multipli del periodo
- [[Serie di Fourier]]: componenti cicliche seno-coseno
