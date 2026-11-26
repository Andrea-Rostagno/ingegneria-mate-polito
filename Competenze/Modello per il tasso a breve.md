---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [short rate model, modello del tasso istantaneo, tasso a breve, short rate, PDE dello zero-coupon bond, bond pricing equation, modelli CKLS, CKLS, famiglia CKLS, prezzo di mercato del rischio di tasso]
tags: [competenza, area/finanza]
---

# Modello per il tasso a breve

> Una diffusione per il tasso istantaneo $r_t$ sotto $\mathbb Q$: il prezzo di uno zero-coupon bond è $\mathbb E^{\mathbb Q}[e^{-\int_t^Tr_sds}\mid\mathcal F_t]$ e risolve una PDE di tipo Feynman-Kac.

## Definizione / enunciato
**Modello** (def. c20-tasso-breve): $r_t$ soluzione sotto $\mathbb Q$ di $dr_t=b^{\mathbb Q}(t,r_t)dt+\sigma(t,r_t)dW^{\mathbb Q}_t$; prezzo dello ZCB e struttura a termine indotta:
$$B(t,T)=\mathbb E^{\mathbb Q}\Big[e^{-\int_t^Tr_sds}\,\Big|\,\mathcal F_t\Big],\qquad y(t,T)=-\frac{\ln B(t,T)}{T-t}.$$
**PDE dello ZCB** (prop. c20-pde-zcb): se $F\in C^{1,2}$ a crescita polinomiale risolve
$$\partial_tF+b^{\mathbb Q}(t,r)\partial_rF+\tfrac12\sigma^2(t,r)\partial_{rr}F-rF=0,\qquad F(T,r)=1,$$
allora $B(t,T)=F(t,r_t)$ (Feynman-Kac con $k(r)=r$).

**Famiglia CKLS** (def. c20-ckls): $dr_t=(\alpha+\beta r_t)dt+\sigma r_t^\gamma dW_t$, $A_1=\alpha+\beta r$, $A_2=\sigma^2r^{2\gamma}$; $\gamma=0$ Vasicek/Merton, $\gamma=\frac12$ CIR, $\gamma=1$ GBM/Dothan/Brennan-Schwartz, $\gamma=\frac32$ CIR VR.

## Formule chiave
Nei modelli affini $B(t,T)=e^{A(\tau)-B(\tau)r_t}$, $\tau=T-t$, e il rendimento è affine in $r_t$.

## Intuizione
La PDE va scritta con il drift **sotto $\mathbb Q$**: il drift storico dà prezzi sbagliati, salvo prezzo di mercato del rischio nullo. Feynman-Kac chiede $k\ge0$, ma nel Vasicek $r$ può essere negativo: la rappresentazione vale ugualmente perché $\int r$ è gaussiano.

## Come si usa
Esempio del libro: $dr=(0.012-0.3r)dt+0.05\sqrt r\,dW$ è un CIR con $\kappa=0.3$, $\theta=0.04$, $\sigma=0.05$, e la condizione di Feller $0.024\ge0.0025$ vale.

## Nei corsi
- **Financial engineering** (magistrale): cap. 20 §§Tasso a breve e prezzo degli ZCB, La famiglia CKLS (notazione: $\kappa$ velocità, $\theta$ media, $\lambda$ prezzo del rischio). Fonti: `Libri/Financial engineering/capitoli/cap20.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 08 - analisi stocastica - 26 mag 26.pdf` (tabella CKLS).

## Prerequisiti
- [[Zero-coupon bond]]: oggetto da prezzare
- [[Formula di Feynman-Kac]]: PDE con $k(r)=r$
- [[Valutazione neutrale al rischio]]: attesa sotto $\mathbb Q$

## Porta a
- [[Modello di Vasicek]]: caso gaussiano
- [[Modello CIR]]: caso con radice quadrata

## Collegati
- [[Struttura a termine dei tassi]]: curva indotta dal modello
- [[Momenti infinitesimali]]: $A_1$, $A_2$ della famiglia CKLS
