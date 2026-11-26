---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica]
livello: [triennale]
aliases: ["variance", "Var(X)", "momenti di una variabile aleatoria", "momento di ordine p", "momento centrato", "deviazione standard", "standard deviation", "standardizzazione"]
tags: [competenza, area/probabilita]
---

# Varianza

> Il momento centrato di ordine 2: misura in termini quadratici la dispersione di $X$ attorno alla media.

## Definizione / enunciato
$X$ ha **momento finito di ordine $p\ge1$** se $X\in L^p(\Omega,\mathcal F,\mathbb P)$, cioè $\mathbb E[|X|^p]<+\infty$; momento di ordine $p$: $\mathbb E[X^p]$; momento centrato: $\mathbb E[(X-\mathbb E[X])^p]$. Se $X\in L^p$ allora $X\in L^1$ e la media è finita.
Per $X\in L^2$, la **varianza** è
$$\sigma_X^2=\operatorname{Var}(X)=\mathbb E\big[(X-\mathbb E[X])^2\big],$$
e la **deviazione standard** è $\sigma_X=\sqrt{\sigma_X^2}$ (stessa unità di misura di $X$).

## Formule chiave
$$\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2,\qquad \operatorname{Var}(aX+b)=a^2\operatorname{Var}(X),$$
$$\operatorname{Var}(X)\ge0,\qquad \operatorname{Var}(X)=0\iff X=\mathbb E[X]\ \text{q.o.}$$
**Standardizzazione**: $Y=\dfrac{X-\mu_X}{\sigma_X}$ ha $\mathbb E[Y]=0$, $\operatorname{Var}(Y)=1$.

## Intuizione
Le traslazioni non cambiano la dispersione, i cambi di scala la moltiplicano per $a^2$. Varianza nulla significa che $X$ è (quasi certamente) costante.

## Come si usa
Lezione 12: $X\sim U(\{-1,0,1\})$ e $Y\sim U(\{-2,0,2\})$ hanno entrambe media 0, ma $\operatorname{Var}(X)=\frac23$ e $\operatorname{Var}(Y)=\frac83$: $Y$ è più dispersa. Varianze dei modelli (lezione 13 e formulario): Bernoulli $p(1-p)$, binomiale $np(1-p)$, Poisson $\lambda$, geometrica $\frac{1-p}{p^2}$, uniforme $\frac{(b-a)^2}{12}$, esponenziale $\frac1{\lambda^2}$, normale $\sigma^2$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 12 (appunto manoscritto). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione12(25-05-23) (1).pdf` (lezione 12, pp. 8-12); `2023Lezione13(01-06-23).pdf` (lezione 13, p. 1); `formularioprobabilita (1).pdf`.
- **Prob e statistica** (triennale): varianza di combinazioni lineari tramite la covarianza, $\operatorname{Var}(aX+bY+c)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y)$, che per v.a. scorrelate dà $\operatorname{Var}(X\pm Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$; varianza totale $\operatorname{Var}(X)=\mathbb E[\operatorname{Var}(X|\mathcal G)]+\operatorname{Var}(\mathbb E[X|\mathcal G])$; $\operatorname{Var}(\bar X_n)=\sigma^2/n$ nella legge dei grandi numeri; derivate della funzione caratteristica, $\Phi_X''(0)=-\mathbb E[X^2]$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (p. 7); `2023Lezione14(08-11-2023).pdf` (p. 5); `2023Lezione16(10-11-2023).pdf` (p. 7); `2023Lezione11(27-10-2023).pdf` (p. 6).

## Prerequisiti
- [[Valore atteso]]: momento centrato di ordine 2
- [[Spazi Lp]]: $X\in L^2$

## Porta a
- [[Distribuzione normale]]: standardizzazione
- [[Covarianza]]: varianza di una somma (Prob e statistica)
- [[Varianza condizionata]]: scomposizione della varianza totale (Prob e statistica)

## Collegati
- [[Media e deviazione standard delle misure]]: deviazione standard delle misure
