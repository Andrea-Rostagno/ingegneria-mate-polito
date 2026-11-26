---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [first passage time of a diffusion, first-passage time density, densità del tempo di primo passaggio, barriera, trasformata di Laplace del primo passaggio, gaussiana inversa, inverse Gaussian, T_H]
tags: [competenza, area/probabilita]
---

# Tempo di primo passaggio di una diffusione

> Il primo istante in cui una diffusione attraversa una barriera: per processi omogenei la sua trasformata di Laplace è un rapporto di trasformate della densità di transizione; per il GBM la legge è una gaussiana inversa.

## Definizione / enunciato
Con $X_{t_0}=x_0$ e barriera continua $H(t)$ (def. c19-primo-passaggio):
$$T_H=\inf\{t\ge t_0:X_t\ge H(t)\}\ (x_0<H(t_0)),\qquad T_H=\inf\{t\ge t_0:X_t\le H(t)\}\ (x_0>H(t_0)),$$
con $\inf\emptyset=+\infty$; densità $g(H,t\mid x_0,t_0)$. La barriera inferiore modella, ad esempio, il default.

**Teorema** (teo. c19-laplace-primo-passaggio): diffusione omogenea, barriera costante $H>x_0$, per ogni $x>H$ e $\lambda>0$
$$g_\lambda(H\mid x_0)=\frac{f_\lambda(x\mid x_0)}{f_\lambda(x\mid H)},$$
(il rapporto non dipende da $x$); $g_0=\mathbb P(T_H<\infty)$ e $\mathbb E[T_H^m]=(-1)^m\frac{d^m}{d\lambda^m}g_\lambda\big|_{\lambda=0}$.

## Formule chiave
**GBM** (prop. c19-primo-passaggio-gbm), $\nu=\mu-\frac12\sigma^2$, $a=\ln(H/x_0)>0$:
$$g(H,t\mid x_0)=\frac{\ln(H/x_0)}{\sqrt{2\pi\sigma^2t^3}}\exp\Big\{-\frac{[\ln(H/x_0)-\nu t]^2}{2\sigma^2t}\Big\},$$
$\mathbb P(T_H<\infty)=1$ se $\nu\ge0$, altrimenti $(x_0/H)^{1-2\mu/\sigma^2}$; per $\nu>0$, $\mathbb E[T_H]=a/\nu$, $\mathrm{Var}(T_H)=a\sigma^2/\nu^3$. Browniano con drift $b>0$: $\mathbb E[T_H]=(H-x_0)/b$.

## Intuizione
L'equazione integrale $f=\int g\,f$ dice che per arrivare oltre la barriera bisogna prima toccarla; per processi omogenei è una convoluzione, che la trasformata di Laplace trasforma in prodotto. Conta il drift logaritmico $\nu$, non $\mu$: con $\mu=2\%$ e $\sigma=30\%$ la barriera $1.2x_0$ è raggiunta solo con probabilità $0.904$.

## Come si usa
Esempio del libro: GBM con $x_0=100$, $\mu=15\%$, $\sigma=25\%$, barriera $H=130$: $\nu=0.11875$, $a=0.26236$, $\mathbb E[T_H]=2.21$ anni (dev. st. 3.13), $\mathbb P(T_H\le1)=0.4555$, mediana 1.13 anni: coda destra lunghissima.

## Nei corsi
- **Financial engineering** (magistrale): cap. 19 §Tempi di primo passaggio (barriera $H$ al posto di $S(t)$ di D'Onofrio); cap. 22 (default come primo passaggio, cenno). Fonti: `Libri/Financial engineering/capitoli/cap19.tex`; lezioni d'origine `magistrale/Financial engineering/onofrio/Lezione 08 - analisi stocastica - 26 mag 26.pdf`, `Lezione 09 - analisi stocastica - 29 mag 26.pdf`.

## Prerequisiti
- [[Tempo d'arresto]]: $T_H$ è un tempo d'arresto
- [[Processo di diffusione]]: densità di transizione
- [[Trasformata di Laplace]]: convoluzione in prodotto

## Collegati
- [[Moto browniano geometrico]]: densità gaussiana inversa
- [[Principio di riflessione]]: legge del primo passaggio del browniano
- [[Probabilità di uscita del moto browniano]]: uscita da un intervallo
- [[Modello di Merton]]: default prima di $T$ come modello alternativo
