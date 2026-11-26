---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["ACF", "autocorrelation function", "funzione di autocovarianza", "autocovariance function", "correlogramma", "correlogram", "autocorrelazione campionaria"]
tags: [competenza, area/statistica]
---

# Funzione di autocorrelazione

> Correlazione tra il processo a un tempo e lo stesso processo spostato di un lag $l$: il suo grafico (correlogramma) è il primo strumento per leggere la dipendenza temporale di una serie.

## Definizione / enunciato
Per un processo stazionario di ordine 2 l'**autocovarianza** è $\gamma(l)=\mathrm{Cov}(X_{t_i},X_{t_i+l})$ e l'**autocorrelazione**
$$\rho(l)=\frac{\mathrm{Cov}(X_{t_i},X_{t_i+l})}{\mathrm{Var}(X_{t_i})}=\frac{\gamma(l)}{\gamma(0)}.$$
Per serie non stazionarie dipendono anche da $t_i$:
$$\rho_{t_i}(l)=\frac{\mathrm{Cov}(X_{t_i},X_{t_i+l})}{\sqrt{\mathrm{Var}(X_{t_i})\mathrm{Var}(X_{t_i+l})}},\qquad\gamma_{t_i}(l)=\mathrm{Cov}(X_{t_i},X_{t_i+l}).$$
Il grafico di $\rho$ in funzione del lag è il **correlogramma**.

## Formule chiave
Da una realizzazione $(x_1,\dots,x_n)$ equispaziata:
$$\hat\gamma(l)=\frac1n\sum_{i=l+1}^n(x_i-\bar x)(x_{i-l}-\bar x),\qquad\hat\rho(l)=\frac{\sum_{i=l+1}^n(x_i-\bar x)(x_{i-l}-\bar x)}{\sum_{i=1}^n(x_i-\bar x)^2}.$$
Per $l$ elevati lo stimatore perde efficienza: il numeratore usa molti meno termini del denominatore.

## Intuizione
Le linee orizzontali del correlogramma di R indicano la banda (circa al 95%) entro cui le correlazioni non sono significative. Massimi locali periodici segnalano stagionalità (ogni 32 punti nell'esperimento fMRI, ogni 12 mesi nei passeggeri); un decadimento lento può essere dovuto al trend.

## Come si usa
Firma dei modelli: rumore bianco $\rho(k)=0$ per $k\ne0$; AR(1) $\rho(k)=\alpha^k$; MA($q$) $\rho(k)=0$ per $k>q$; random walk $\rho_t(k)=1/\sqrt{1+k/t}$, che dipende da $t$ (il correlogramma campionario non ne è una stima). La stessa formula, applicata ai campioni MCMC, misura la dipendenza della catena.

## Nei corsi
- **Statistica computazionale** (magistrale): "Processi stocastici IV-X" nell'introduzione alle serie temporali, con i dati AirPassengers e fMRI. Fonti: `magistrale/Statistica computazionale/Time Series - Introduzione.pdf` (p. 9-15); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 18-19).

## Prerequisiti
- [[Stazionarietà di un processo stocastico]]: $\gamma$ dipende solo dal lag
- [[Covarianza]]: definizione di $\gamma$
- [[Coefficiente di correlazione]]: $\rho$ è una correlazione

## Porta a
- [[Autocorrelazione parziale]]: correlazione depurata dagli istanti intermedi
- [[Modello MA(q)]]: ACF nulla oltre il lag $q$

## Collegati
- [[Dimensione campionaria effettiva]]: ACF delle catene MCMC per scegliere il thin
- [[Modello ARIMA stagionale]]: la stagionalità si vede nel correlogramma
