---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["transformation of a random variable", "legge di g(X)", "densità di Y = g(X)", "metodo della funzione di ripartizione", "CDF method", "change of variable formula"]
tags: [competenza, area/probabilita]
---

# Trasformazione di una variabile aleatoria

> Data $X$ e $g$ misurabile, la legge di $Y=g(X)$ è $\mathbb P_Y(A)=\mathbb P_X(g^{-1}(A))$; nel caso continuo si calcola con il metodo della funzione di ripartizione o con la formula del cambio di variabile.

## Definizione / enunciato
$Y=g\circ X$ è una v.a. con $\mathbb P_Y(A)=\mathbb P(X\in g^{-1}(A))$.
- **Caso discreto**: $Y(\Omega)=g(X(\Omega))$ e $p_Y(y)=\sum_{x\in g^{-1}(\{y\})}p_X(x)$.
- **Metodo della funzione di ripartizione**: $F_Y(y)=\mathbb P_X\big(g^{-1}((-\infty,y])\big)=\int_{g^{-1}((-\infty,y])}f_X(x)dx$, poi, quando possibile, si deriva.

## Formule chiave
**Proposizione.** $X$ a.c. con $f_X$ continua, $g\in C^1(\mathbb R)$ con $g'\ne0$ (strettamente monotona). Allora $Y=g(X)$ è a.c. con
$$f_Y(y)=f_X(g^{-1}(y))\,\Big|\frac{d}{dy}g^{-1}(y)\Big|\,\mathbb 1_{g(\mathbb R)}(y).$$
**Corollario** (monotonia a tratti): se $\mathbb P(X\in A)=1$ e $A=I_0\cup I_1\cup\dots\cup I_m$ (aperti disgiunti, $m(I_0)=0$) con $g_i=g|_{I_i}$ invertibili di classe $C^1$,
$$f_Y(y)=\sum_{i=1}^mf_X(g_i^{-1}(y))\Big|\frac d{dy}g_i^{-1}(y)\Big|\mathbb 1_{g(I_i)}(y).$$
Caso affine: $f_{aX+b}(y)=\frac1{|a|}f_X\big(\frac{y-b}a\big)$.

## Intuizione
La probabilità si conserva: un intervallino $dy$ riceve la massa degli intervallini $dx$ che vi sono mandati, riscalata dalla pendenza della trasformazione.

## Come si usa
- $X\sim\mathcal N(0,1)$, $Y=X^2$: $f_Y(y)=\frac1{2\sqrt y}[f_X(\sqrt y)+f_X(-\sqrt y)]=\frac1{\sqrt{2\pi y}}e^{-y/2}\mathbb 1_{(0,\infty)}$, cioè $Y\sim\Gamma(\frac12,\frac12)=\chi^2(1)$; confrontando le costanti $\Gamma(\frac12)=\sqrt\pi$.
- $X\sim\mathcal N(0,1)$, $Y=\sigma X+\mu$: $Y\sim\mathcal N(\mu,\sigma^2)$.
- $X\sim\mathrm{Exp}(\lambda)$, $Y=\lfloor X\rfloor$: $p_Y(k)=e^{-\lambda k}(1-e^{-\lambda})$, quindi $Y+1\sim G(1-e^{-\lambda})$ ("la discretizzazione di una Exp è una geometrica"); $T=X-\lfloor X\rfloor$ ha densità $\frac{\lambda e^{-\lambda t}}{1-e^{-\lambda}}\mathbb 1_{(0,1)}$ (esponenziale troncata).
- $X,Y$ i.i.d. $U(0,1)$: $-\log X\sim\mathrm{Exp}(1)$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 7 "trasformazioni di variabili aleatorie". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione07(18-10-2023).pdf` (pp. 1-12); `2023Lezione10(26-10-2023).pdf` (pp. 1-6).

## Prerequisiti
- [[Variabile aleatoria assolutamente continua]]: densità di $X$
- [[Funzione di ripartizione]]: metodo della funzione di ripartizione
- [[Misura immagine]]: $\mathbb P_Y=\mathbb P_X\circ g^{-1}$

## Porta a
- [[Metodo dello jacobiano]]: versione vettoriale

## Collegati
- [[Distribuzione chi-quadro]]: $X^2\sim\chi^2(1)$
- [[Distribuzione geometrica]]: parte intera di un'esponenziale
- [[Integrazione per sostituzione]]: stesso cambio di variabile negli integrali
