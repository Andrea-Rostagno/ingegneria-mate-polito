---
tipo: competenza
area: finanza
corsi: [Prova finale, Financial engineering]
livello: [triennale, magistrale]
aliases: ["ES", "Conditional Value at Risk", "CVaR", "CVaR 5%", "expected tail loss", "perdita attesa oltre il VaR"]
tags: [competenza, area/finanza]
---

# Expected Shortfall

> Perdita media attesa negli scenari peggiori del VaR: guarda dentro la coda, quindi è una misura più conservativa del VaR.

## Definizione / enunciato
Tesi §3.2.2: "la perdita media attesa in caso di superamento del VaR". Nella simulazione (§6.1.3) il CVaR al 5% è la media dei valori finali che non superano il VaR:
$$\mathrm{CVaR}_{5\%}=\mathbb E\big[P_T^{(portafoglio)}\mid P_T^{(portafoglio)}\le\mathrm{VaR}_{5\%}\big].$$
In Python: `np.mean(final_portfolio_values[final_portfolio_values <= portfolio_var])`.

## Formule chiave
Stima Monte Carlo: media campionaria degli scenari nella coda del 5%, cioè circa 500 dei 10000 scenari simulati (conteggio mio).

## Intuizione
Il VaR dice dove inizia la coda, l'ES quanto è profonda: due portafogli con lo stesso VaR possono avere perdite molto diverse oltre la soglia. Per questo la tesi lo definisce "più conservativo": "tiene conto dell'entità delle perdite oltre la soglia del 5%". Come il VaR, se calcolato con l'ipotesi normale sottostima il rischio quando c'è dipendenza di coda.

## Come si usa
Portafoglio a massimo Sharpe con copula gaussiana (tab. 6.3): $\mathrm{CVaR}_{5\%}=105.96$, contro $\mathrm{VaR}_{5\%}=106.32$ e valore iniziale 100. Lettura della tesi: un CVaR basso indica che anche negli scenari peggiori le perdite restano gestibili. Come per il VaR, però, 105.96 è il valore medio del portafoglio nella coda ed è sopra il valore iniziale 100: anche negli scenari peggiori il portafoglio guadagna, quindi non è una perdita attesa (osservazione mia sui numeri della tab. 6.3; da verificare sul PDF). Nella tesi è chiamato anche Conditional VaR (CVaR) fra gli indicatori di rischio che la stima delle copule permette di calcolare (§5.1).

## Nei corsi
- **Prova finale** (triennale): §3.2.2 e §6.1.3. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (p. 22; p. 41; pp. 102-104); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/long-portfolio-simulations.py`.
- **Financial engineering** (magistrale): $\mathrm{CVaR}_\alpha(L)=\mathrm{ES}_\alpha(L)=\mathbb E[L\mid L\ge\mathrm{VaR}_\alpha(L)]=\frac1{1-\alpha}\int_{\mathrm{VaR}_\alpha}^{\infty}xf_L(x)\,dx$ per perdite con densità (def. c21-cvar); per perdite continue è coerente (prop. c21-coerenza), in generale lo è la media dei quantili di coda $\frac1{1-\alpha}\int_\alpha^1\mathrm{VaR}_u\,du$. **Caso gaussiano** (prop. c21-var-gaussiano): $\mathrm{CVaR}_\alpha=\mu_L+\sigma_L\frac{N'(z_\alpha)}{1-\alpha}$ (moltiplicatori 2.0627 al 95%, 2.6652 al 99%); esempio $L\sim\mathcal N(-0.5\%,2\%^2)$: $\mathrm{CVaR}_{0.95}=3.63\%$, $\mathrm{CVaR}_{0.99}=4.83\%$. Fonti: `Libri/Financial engineering/capitoli/cap21.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/40 - 28 aprile a - Lezione Risk measures VaR1.pdf`.

## Prerequisiti
- [[Value at Risk]]: soglia della coda
- [[Speranza condizionata]]: media condizionata all'evento di coda

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Dipendenza di coda]]: determina quanto è pesante la coda congiunta
- [[Simulazione da una copula]]: scenari su cui si calcola la media
- [[Misure di rischio coerenti]]: il CVaR è coerente (Financial engineering)
- [[Portafoglio gaussiano ottimo]]: portafoglio a CVaR minimo (Financial engineering)
