---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [beta-binomial default model, modello beta-binomiale per il credito, mistura Beta dei default, sovradispersione dei default]
tags: [competenza, area/finanza]
---

# Modello beta-binomiale dei default

> Modello mixture a un fattore con probabilità di default aleatoria Beta: il numero di default è beta-binomiale e la correlazione di default è $1/(a+b+1)$.

## Definizione / enunciato
**Proposizione** (prop. c22-beta-binomiale): se $\tilde p\sim\mathrm{Beta}(a,b)$, $a,b>0$,
$$\pi=\frac a{a+b},\qquad\pi_2=\frac{a(a+1)}{(a+b)(a+b+1)},\qquad\rho_Y=\frac1{a+b+1},$$
$$\mathbb P(M=k)=\binom nk\frac{B(a+k,\,b+n-k)}{B(a,b)},\qquad k=0,\dots,n .$$
Viceversa, dati $\pi$ e $\rho_Y\in(0,1)$: $a+b=\frac1{\rho_Y}-1$, $a=\pi(a+b)$, $b=(1-\pi)(a+b)$.

## Formule chiave
$\mathrm{Var}(M)=n\pi(1-\pi)[1+(n-1)\rho_Y]$: **sovradispersione** rispetto alla binomiale, che ha $\rho_Y=0$.

## Intuizione
La mistura Beta rende più probabili sia gli scenari "tutto bene" sia quelli "molto male": la massa si sposta sugli estremi, la coda si allunga. In MATLAB si calcola con `betaln`/`gammaln` per stabilità numerica.

## Come si usa
Esempio del libro: $n=100$, $\pi=2\%$, $\rho_Y=0.01$: $a+b=99$, $a=1.98$, $b=97.02$. $\mathbb E[M]=2$ in entrambi i modelli; $\mathrm{Var}(M)=1.96$ con l'indipendenza e $3.90$ con il beta-binomiale; $\mathbb P(M=0)=0.1326$ contro $0.2472$; $\mathbb P(M\ge10)=3.4\cdot10^{-5}$ contro $5.2\cdot10^{-3}$ (centocinquanta volte di più).

## Nei corsi
- **Financial engineering** (magistrale): cap. 22 §Il modello beta-binomiale, listato lst:c22-mixture. Fonti: `Libri/Financial engineering/capitoli/cap22.tex`; lezione d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/41 - 28 aprile b - Credit_risk_modelling_Italiano.pdf`.

## Prerequisiti
- [[Modello Bernoulli mixture]]: caso a un fattore
- [[Distribuzione Beta]]: legge di $\tilde p$

## Collegati
- [[Distribuzione binomiale]]: caso indipendente ($\rho_Y=0$)
- [[Value at Risk]]: quantile al 99% del numero di default
- [[Distribuzione predittiva a posteriori]]: la stessa legge beta-binomiale come predittiva del modello Beta-Bernoulli (statistica bayesiana)
- [[Coniugatezza Beta-Bernoulli]]: binomiale con probabilità di successo Beta, letta in chiave bayesiana
