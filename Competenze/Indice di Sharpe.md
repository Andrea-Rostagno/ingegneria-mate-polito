---
tipo: competenza
area: finanza
corsi: [Prova finale]
livello: [triennale]
aliases: ["Sharpe ratio", "rapporto di Sharpe", "indice di Sharpe", "portafoglio a massimo Sharpe", "maximum Sharpe ratio portfolio", "tangency portfolio", "SR"]
tags: [competenza, area/finanza]
---

# Indice di Sharpe

> Extra-rendimento rispetto al tasso privo di rischio per unità di rischio, $SR=(R_p-R_f)/\sigma_p$; il portafoglio che lo massimizza dà il miglior rendimento per unità di rischio.

## Definizione / enunciato
Tesi §6.1.2:
$$SR=\frac{R_p-R_f}{\sigma_p},$$
con $R_p$ rendimento atteso del portafoglio, $\sigma_p=\sqrt{w^T\Sigma w}$ e $R_f$ tasso risk-free. **Portafoglio a massimo Sharpe**: $\max_w SR(w)$ con $\sum w_i=1$, $0\le w_i\le1$; in pratica si **minimizza $-SR$**.

## Formule chiave
In Python (`neg_sharpe_ratio`): `-(p_ret - risk_free_rate) / p_vol`, ottimizzato con `minimize(..., method='SLSQP', bounds=bounds, constraints=constraints)` partendo da $w=(0.5,0.5)$, con il vincolo di uguaglianza `np.sum(x) - 1` e limiti $(0,1)$.

## Intuizione
È il portafoglio da usare "se l'obiettivo è ottenere il miglior rendimento possibile per ogni unità di rischio". Nel grafico della frontiera efficiente (fig. 6.1) è l'asterisco rosso, disegnato insieme alla Capital Market Line.

## Come si usa
Con $\mu=(7\%,7.5\%)$, volatilità $(0.79\%,0.81\%)$, $\rho=0.95$, $R_f=2\%$ (tab. 6.2): allocazione 0% Open e 100% Close, rendimento atteso 7.50%, rischio 0.81%, Sharpe 6.7901. Il portafoglio a varianza minima ha Sharpe 6.6461. La tesi nota che entrambi gli Sharpe sono "molto elevati": infatti $(7.5\%-2\%)/0.81\%\approx6.79$ (calcolo mio), perché le volatilità fissate sono molto piccole rispetto ai rendimenti attesi. I pesi a massimo Sharpe sono poi usati nella simulazione Monte Carlo del valore del portafoglio.

## Nei corsi
- **Prova finale** (triennale): §6.1.2 "Portafoglio con massimo Sharpe Ratio". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 96-99); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/long-portfolio-simulations.py` (`neg_sharpe_ratio`).

## Prerequisiti
- [[Rischio e rendimento di un portafoglio]]: $R_p$ e $\sigma_p$

## Porta a
- [[Simulazione da una copula]]: pesi del portafoglio simulato

## Collegati
- [[Portafoglio a varianza minima]]: obiettivo alternativo, rischio minore e rendimento minore
- [[Moltiplicatori di Lagrange]]: ottimizzazione con vincolo di bilancio $\sum w_i=1$
