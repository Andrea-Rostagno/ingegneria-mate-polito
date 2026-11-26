---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Ornstein-Uhlenbeck process, OU, processo OU, mean reversion, ritorno alla media, mean-reverting process]
tags: [competenza, area/probabilita]
---

# Processo di Ornstein-Uhlenbeck

> Diffusione gaussiana con ritorno alla media: $dX_t=\theta(\mu-X_t)dt+\sigma dW_t$; modello di base per tassi e grandezze stazionarie.

## Definizione / enunciato
**Proposizione** (prop. c14-ou): $dX_t=\theta(\mu-X_t)dt+\sigma\,dW_t$, $X_0=x$, $\theta>0$ ha l'unica soluzione
$$X_t=xe^{-\theta t}+\mu(1-e^{-\theta t})+\sigma\int_0^te^{-\theta(t-s)}dW_s .$$
$X$ è gaussiano e di Markov con
$$\mathbb E[X_t]=\mu+(x-\mu)e^{-\theta t},\qquad\mathrm{Var}(X_t)=\frac{\sigma^2}{2\theta}(1-e^{-2\theta t}),$$
$$\mathrm{Cov}(X_s,X_t)=\frac{\sigma^2}{2\theta}\big(e^{-\theta(t-s)}-e^{-\theta(t+s)}\big),\quad s\le t .$$
Per $t\to\infty$, $X_t\to\mathcal N(\mu,\frac{\sigma^2}{2\theta})$ in legge (legge **stazionaria**); partendo da essa, $\mathrm{Cov}(X_s,X_t)=\frac{\sigma^2}{2\theta}e^{-\theta|t-s|}$.

## Formule chiave
Fattore integrante: $d(e^{\theta t}X_t)=\theta\mu e^{\theta t}dt+\sigma e^{\theta t}dW_t$. Schema esatto di simulazione:
$$X_{t+h}=\mu+(X_t-\mu)e^{-\theta h}+\sigma\sqrt{\tfrac{1-e^{-2\theta h}}{2\theta}}\,Z .$$

## Intuizione
$\theta$ è la velocità di ritorno verso la media di lungo periodo $\mu$: il drift spinge verso $\mu$, il rumore allontana; l'equilibrio è la normale stazionaria. Tempo di dimezzamento della distanza da $\mu$: $\ln2/\theta$. Essendo gaussiano può assumere valori negativi.

## Come si usa
Esempio del libro (Vasicek con numeri del libro): $r_0=8\%$, $\mu=5\%$, $\theta=0.5$, $\sigma=0.01$: $\mathbb E[r_1]=0.06820$ (dev. st. 0.00795), $\mathbb E[r_5]=0.05246$ (0.00997), dimezzamento $1.386$ anni, legge stazionaria $\mathcal N(0.05,0.0001)$, $\mathbb P(r<0)=N(-5)\approx3\cdot10^{-7}$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 13 es. c13-ou-trucco; cap. 14 §Il processo di Ornstein-Uhlenbeck; cap. 19 (densità stazionaria). Notazione di D'Onofrio $\theta(\mu-X)$; nel cap. 20 il Vasicek usa $\kappa(\theta-r)$. Fonti: `Libri/Financial engineering/capitoli/cap13.tex`, `cap14.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 07 - analisi stocastica - 22 mag 26.pdf`, `Lezione 09 - analisi stocastica - 29 mag 26.pdf`.

## Prerequisiti
- [[SDE lineari]]: caso particolare
- [[Integrale di Wiener]]: termine gaussiano della soluzione
- [[Formula di Itô]]: fattore integrante

## Porta a
- [[Modello di Vasicek]]: OU per il tasso a breve
- [[Densità stazionaria di una diffusione]]: normale $\mathcal N(\mu,\sigma^2/(2\theta))$

## Collegati
- [[Caratterizzazione gaussiana del moto browniano]]: anche l'OU è un processo gaussiano
- [[Momenti infinitesimali]]: $A_1=\theta(\mu-x)$, $A_2=\sigma^2$
- [[Metodo di Euler-Maruyama]]: confronto con lo schema esatto
