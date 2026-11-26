---
tipo: competenza
area: probabilita
corsi: [Financial engineering, Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: [geometric Brownian motion, GBM, moto browniano esponenziale, modello lognormale dei prezzi, "GBM(mu,sigma)", rumore moltiplicativo, multiplicative noise]
tags: [competenza, area/probabilita]
---

# Moto browniano geometrico

> Il modello dei prezzi di Black-Scholes: $dS_t=\mu S_tdt+\sigma S_tdW_t$, sempre positivo, con rendimenti logaritmici normali e indipendenti.

## Definizione / enunciato
**Soluzione** (prop. c14-gbm, def. c15-gbm): $dS_t=\mu S_t\,dt+\sigma S_t\,dW_t$, $S_0>0$, ha l'unica soluzione
$$S_t=S_0\exp\Big\{\Big(\mu-\tfrac12\sigma^2\Big)t+\sigma W_t\Big\}.$$
**Proprietà** (teo. c15-gbm-proprieta): (i) $S_t>0$; (ii) $\ln(S_t/S_s)\sim\mathcal N\big((\mu-\frac12\sigma^2)(t-s),\sigma^2(t-s)\big)$ indipendente da $\mathcal F_s$, quindi $S_t$ è lognormale; (iii) incrementi relativi indipendenti e stazionari; (iv) $\mathbb E[S_t\mid\mathcal F_s]=S_se^{\mu(t-s)}$; (v) $S$ è martingala $\iff\mu=0$, $e^{-rt}S_t$ è martingala $\iff\mu=r$.

## Formule chiave
(prop. c15-momenti)
$$\mathbb E[S_t^n]=S_0^n\exp\{n\mu t+\tfrac12n(n-1)\sigma^2t\},\qquad\mathrm{Var}(S_t)=S_0^2e^{2\mu t}(e^{\sigma^2t}-1),$$
mediana $S_0e^{(\mu-\frac12\sigma^2)t}$, moda $S_0e^{(\mu-\frac32\sigma^2)t}$: moda < mediana < media. Stima dai dati giornalieri: $\hat\sigma=s_r\sqrt{252}$, $\hat\mu=252\bar r+\frac12\hat\sigma^2$.

## Intuizione
Il rumore è moltiplicativo: il rendimento percentuale non dipende dal livello del prezzo. Due "drift" da non confondere: $\mu$ fa crescere la **media**, $\mu-\frac12\sigma^2$ il **logaritmo** e la mediana. Nell'esponente compare $\mu-\frac12\sigma^2$, non $\mu$: $S_0e^{\mu t+\sigma W_t}$ risolve un'altra SDE (drift $\mu+\frac12\sigma^2$).

## Come si usa
Esempi del libro: $S_0=100$, $\mu=10\%$, $\sigma=30\%$, $T=1$: media $110.52$, mediana $105.65$, moda $96.56$, dev. st. $33.92$; $\mathbb P(S_1>110.52)=0.4404$, $\mathbb P(S_1>100)=0.5727$; perdita oltre il 10% nel secondo semestre con probabilità $0.2656$ qualunque sia il prezzo a metà anno. Con $x=100$, $b=0.1$, $\sigma=0.3$, $t=2$: $\mathbb E=122.14$, mediana $111.63$, $\mathbb P(X_2<100)=0.3977$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 14 §Il moto browniano geometrico come SDE; cap. 15 §Proprietà del moto browniano geometrico. Fonti: `Libri/Financial engineering/capitoli/cap14.tex`, `cap15.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/35 - lez 17 aprile - moto browniano geometrico.pdf`, `magistrale/Financial engineering/onofrio/Lezione 04 - analisi stocastica - 8 mag 26.pdf`.
- **Ottimizzazione in condizione di incertezza** (magistrale): $dS_t=\mu S_t\,dt+\sigma S_t\,dW_t$, risolta con Itô su $\log S_t$: $S_t=S_0\exp\{(\mu-\sigma^2/2)t+\sigma\sqrt t\,\epsilon\}$, con $\mathbb E[\log(S_t/S_0)]=(\mu-\sigma^2/2)t$, $\mathrm{Var}[\log(S_t/S_0)]=\sigma^2t$, $\mathbb E[S_t/S_0]=e^{\mu t}$, $\mathrm{Var}[S_t/S_0]=e^{2\mu t}(e^{\sigma^2t}-1)$ (Jensen: $\mathbb E[e^X]=e^{\nu+\xi^2/2}\ge e^{\mathbb E[X]}$). Simulazione esatta $S_{t+\delta t}=S_t\exp(\nu\,\delta t+\sigma\sqrt{\delta t}\,\epsilon)$, $\nu=\mu-\sigma^2/2$ (funzioni `AssetPaths` e la versione vettorizzata con `cumsum` sui log-incrementi; esempio $S_0=50$, $\mu=0.1$, $\sigma=0.3$, passo giornaliero), mentre Eulero $S_{t+\delta t}=(1+\mu\,\delta t)S_t+\sigma S_t\sqrt{\delta t}\,\epsilon$ dà marginali normali. Versione quasi-Monte Carlo con Halton (cattiva) e Sobol con scrambling (buona). Fonti: `magistrale/Ottimizzazione in condizione di incertezza/03 - SDEs.pdf` (p. 6, 12, 27-36).

## Prerequisiti
- [[Formula di Itô]]: $d\ln S_t$
- [[Moto browniano con drift]]: il logaritmo è un browniano con drift
- [[Equazione differenziale stocastica]]: rumore moltiplicativo

## Porta a
- [[Distribuzione lognormale]]: legge di $S_t$
- [[Probabilità di esercizio di un'opzione]]: eventi su $S_T$ sotto $\mathbb P$
- [[Formula di Black-Scholes]]: sottostante del modello
- [[Metodo di Euler-Maruyama]]: confronto con lo schema esatto
- [[Tempo di primo passaggio di una diffusione]]: densità gaussiana inversa
- [[Modello di Merton]]: valore delle attività
- [[Pricing di opzioni con Monte Carlo]]: traiettorie simulate per stimare il prezzo (Ottimizzazione in condizione di incertezza)
- [[Successioni a bassa discrepanza]]: simulazione quasi-Monte Carlo delle traiettorie (Ottimizzazione in condizione di incertezza)

## Collegati
- [[Martingale del moto browniano]]: $e^{\sigma W_t-\sigma^2t/2}$ è la parte martingala
- [[Parametri di Cox-Ross-Rubinstein]]: limite dell'albero binomiale
- [[Rendimenti logaritmici]]: normali e i.i.d. nel modello
