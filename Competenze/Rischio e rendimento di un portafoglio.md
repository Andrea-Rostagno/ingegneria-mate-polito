---
tipo: competenza
area: finanza
corsi: [Prova finale, Financial engineering]
livello: [triennale, magistrale]
aliases: ["portfolio return and risk", "rendimento atteso di portafoglio", "volatilità di portafoglio", "portfolio volatility", "sigma_p = sqrt(w' Sigma w)", "frontiera efficiente", "efficient frontier", "portafoglio long", "long-only portfolio", "pesi di portafoglio", "Capital Market Line"]
tags: [competenza, area/finanza]
---

# Rischio e rendimento di un portafoglio

> Con pesi $w$, rendimenti attesi $\mu$ e matrice di covarianza $\Sigma$: rendimento $R_p=\sum w_i\mu_i$ e rischio $\sigma_p=\sqrt{w^T\Sigma w}$. Sono le due coordinate della frontiera efficiente.

## Definizione / enunciato
Due asset (tesi §6.1.2), volatilità annualizzate $\sigma_{open},\sigma_{close}$ e correlazione $\rho$:
$$\Sigma=\begin{pmatrix}\sigma_{open}^2&\rho\,\sigma_{open}\sigma_{close}\\ \rho\,\sigma_{open}\sigma_{close}&\sigma_{close}^2\end{pmatrix},\qquad \mu=\begin{pmatrix}\mu_{open}\\\mu_{close}\end{pmatrix},$$
$$\sigma_p=\sqrt{w^T\Sigma w},\qquad R_p=\sum_iw_i\mu_i .$$
**Vincoli** del portafoglio long: $\sum_iw_i=1$ e $0\le w_i\le1$ (niente vendite allo scoperto).

## Formule chiave
- Valore del portafoglio lungo le traiettorie: $P_t^{(port)}=w_{open}P_t^{(open)}+w_{close}P_t^{(close)}$ (§6.1.3).
- In generale (Pellerey, slide 6): valore $Y=\sum_{i=1}^dw_iX_i$ con $w_i\in[0,1]$, $\sum w_i=1$, di cui si vuole calcolare il rischio, per esempio il $\mathrm{VaR}_\alpha$.

## Intuizione
La correlazione entra solo nel termine misto di $\sigma_p$: più è bassa, più la diversificazione riduce il rischio. Con $\rho=0.95$ i due asset sono quasi lo stesso titolo e la diversificazione serve poco. La copula serve a modellare la dipendenza oltre questo singolo numero.

## Come si usa
Parametri della tesi (tab. 6.1): $\mu_{open}=7\%$, $\mu_{close}=7.5\%$ annui, volatilità 0.0079 e 0.0081, $\rho=0.95$, risk-free 2%. Il grafico della frontiera efficiente (fig. 6.1) mostra i portafogli colorati per Sharpe ratio, i due portafogli ottimi, i singoli asset e la **Capital Market Line** (relazione rischio-rendimento includendo l'attività priva di rischio); la tesi non ne dà le formule.

## Nei corsi
- **Prova finale** (triennale): §6.1.2 "Definizione della matrice di covarianza e dei rendimenti attesi" e §6.1.4 "Frontiera efficiente". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 93-99, 101, 105); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/long-portfolio-simulations.py` (`portfolio_volatility`, `portfolio_return`); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 6).
- **Financial engineering** (magistrale): portafoglio $h=(x,y_1,\dots,y_n)$ con valore $V_h(t)=xB(t)+\sum_iy_iS_i(t)$, ammissibile se $V_h\ge0$ (def. c06-portafoglio, c06-ammissibile); con pesi $w$ e rendimenti **lineari** $\mathbb E[L_P]=w^\top\mu$, $\mathrm{Var}(L_P)=w^\top\Sigma w$, per due titoli $\sigma_P^2=w_1^2\sigma_1^2+w_2^2\sigma_2^2+2w_1w_2\rho\sigma_1\sigma_2$ (prop. c06-media-varianza-portafoglio). Esempio: $\mu=(8\%,12\%)$, $\sigma=(15\%,25\%)$, $\rho=0.3$, pesi 60/40: $\mathbb E=9.6\%$, $\sigma_P=15.33\%$; peso di varianza minima $w_1=0.82$ con $\sigma_P=14.31\%$. Limite della diversificazione: $n$ titoli equicorrelati, $\sigma_P^2\to\rho\sigma^2$ (rischio sistematico). Fonti: `Libri/Financial engineering/capitoli/cap06.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/22 - lez 13 marzo a - rendimenti e portafoglio.pdf`.

## Prerequisiti
- [[Matrice di covarianza]]: $\Sigma$ costruita da volatilità e correlazione
- [[Coefficiente di correlazione]]: $\rho$ fra i due asset
- [[Volatilità rolling]]: volatilità dei singoli asset

## Porta a
- [[Indice di Sharpe]]: portafoglio a massimo Sharpe
- [[Portafoglio a varianza minima]]: minimizzazione di $\sigma_p$
- [[Value at Risk]]: rischio del valore finale

## Collegati
- [[Forma quadratica]]: $\sigma_p^2=w^T\Sigma w$
- [[Simulazione da una copula]]: traiettorie del valore del portafoglio
- [[Rapporto di copertura a varianza minima]]: varianza di una posizione coperta con futures (Financial engineering)
- [[Portafoglio gaussiano ottimo]]: minimizzazione del VaR gaussiano del portafoglio (Financial engineering)
