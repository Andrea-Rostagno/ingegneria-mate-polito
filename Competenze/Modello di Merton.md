---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Merton model, modello strutturale di Merton, structural credit model, equity come call, spread di credito, credit spread, probabilità di default di Merton, modello di Vasicek per il credito, one-factor Gaussian copula model, Basilea, modello a fattore gaussiano]
tags: [competenza, area/finanza]
---

# Modello di Merton

> Modello strutturale del credito: l'impresa fallisce se alla scadenza il valore delle attività è sotto il debito; l'equity è una call sulle attività e il debito un titolo privo di rischio meno una put.

## Definizione / enunciato
Attività $V_t$ GBM sotto $\mathbb Q$, $dV_t=rV_tdt+\sigma_VV_tdW_t$; debito zero-coupon di nominale $D$ con scadenza $T$; $V_t=E_t+D_t$, $E_T=(V_T-D)^+$, $D_T=D-(D-V_T)^+$. **Teorema** (teo. c22-merton), $\tau=T-t$:
$$E_t=V_tN(d_1)-De^{-r\tau}N(d_2),\qquad D_t=De^{-r\tau}-\big[De^{-r\tau}N(-d_2)-V_tN(-d_1)\big],$$
$$d_1=\frac{\ln(V_t/D)+(r+\frac12\sigma_V^2)\tau}{\sigma_V\sqrt\tau},\quad d_2=d_1-\sigma_V\sqrt\tau .$$
**Probabilità di default** (prop. c22-prob-default): $\mathbb P(V_T<D)=N\big(\frac{\ln(D/V_0)-(r-\frac12\sigma_V^2)T}{\sigma_V\sqrt T}\big)=N(-d_2)$; con il drift reale $\mu$ al posto di $r$ si ottiene la probabilità reale. Spread $-\frac1T\ln\frac{D_0}{D}-r$.

**Merton come mixture** (prop. c22-merton-mixture): con $B_{t,i}=\sqrt\rho W_{t,0}+\sqrt{1-\rho}W_{t,i}$ e soglia $C_i=N^{-1}(\pi_i)$, gli $Y_i$ sono indipendenti dato $\Psi$ con
$$p_i(\Psi)=N\Big(\frac{C_i-\sqrt\rho\,\Psi}{\sqrt{1-\rho}}\Big);$$
nel caso omogeneo $\mathbb P(M\le k)=\sum_{i\le k}\binom ni\int p(u)^i(1-p(u))^{n-i}N'(u)\,du$.

## Formule chiave
Perdita al 99.9% di un portafoglio molto granulare: $N\big(\frac{N^{-1}(\pi)+\sqrt\rho\,z_{0.999}}{\sqrt{1-\rho}}\big)$ (legame con Basilea, cenno).

## Intuizione
È Black-Scholes applicato al bilancio. La probabilità con $r$ è quella neutrale al rischio (implicita nei prezzi, in genere maggiore della reale); per il capitale serve quella reale con $\mu$. Nella versione a fattore la correlazione tra le attività allunga la coda del numero di default.

## Come si usa
Esempio del libro: $V_0=100$, $D=80$, $\sigma_V=25\%$, $r=3\%$, $T=1$: $d_1=1.1376$, $d_2=0.8876$, $E_0=24.15$, put $1.78$, $D_0=75.85$, rendimento del debito $5.32\%$, spread 232 punti base; default neutrale al rischio $18.74\%$, reale con $\mu=8\%$ $13.84\%$. Con $\pi=2\%$, $\rho=0.2$: $p(0)=1.08\%$, $p(-2)=9.75\%$; perdita al 99.9% del 22.6% del nominale.

## Nei corsi
- **Financial engineering** (magistrale): cap. 22 §§Il modello di Merton, Modelli mixture nel modello di Merton ($D$ è il debito, non la duration). Fonti: `Libri/Financial engineering/capitoli/cap22.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/41 - 28 aprile b - Credit_risk_modelling_Italiano.pdf`.

## Prerequisiti
- [[Formula di Black-Scholes]]: equity come call
- [[Moto browniano geometrico]]: valore delle attività
- [[Modello Bernoulli mixture]]: versione a fattore

## Collegati
- [[Parità put-call]]: debito = titolo privo di rischio meno put
- [[Copula gaussiana]]: struttura di dipendenza del modello a un fattore
- [[Copule nel rischio di credito]]: modello di Li come alternativa
- [[Tempo di primo passaggio di una diffusione]]: default prima di $T$ come variante
