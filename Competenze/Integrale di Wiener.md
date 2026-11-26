---
tipo: competenza
area: probabilita
corsi: [Financial engineering]
livello: [magistrale]
aliases: [Wiener integral, integrale stocastico di una funzione deterministica, integrale di Itô di una funzione deterministica, integrando deterministico, deterministic integrand]
tags: [competenza, area/probabilita]
---

# Integrale di Wiener

> L'integrale di Itô di una funzione deterministica è gaussiano: $\int_0^tf(s)\,dW_s\sim\mathcal N(0,\int_0^tf^2)$, e come processo ha incrementi indipendenti.

## Definizione / enunciato
**Proposizione** (prop. c12-integrale-deterministico): sia $f:[0,T]\to\mathbb R$ misurabile con $\int_0^Tf(s)^2ds<\infty$. Allora per ogni $t\in[0,T]$
$$\int_0^tf(s)\,dW_s\sim\mathcal N\Big(0,\ \int_0^tf(s)^2ds\Big);$$
il processo $I_t=\int_0^tf(s)\,dW_s$ è gaussiano, con media nulla, covarianza
$$\mathrm{Cov}(I_s,I_t)=\int_0^{s\wedge t}f(u)^2du,$$
e incrementi indipendenti: $I_t-I_s$ è indipendente da $\mathcal F_s$.

## Formule chiave
La varianza viene dall'isometria di Itô; la gaussianità dal fatto che le somme approssimanti $\sum f(t_i)\Delta W_i$ sono combinazioni lineari di normali indipendenti.

## Intuizione
"L'integrale di Itô è normale" è vero **solo** per integrandi deterministici: $\int_0^1W\,dW=\frac12(W_1^2-1)$ è una chi-quadrato traslata e $\int_0^1\mathbf 1_{\{W\ge0\}}dW$ non è normale, mentre $\int_0^1(1-s)\,dW_s\sim\mathcal N(0,\frac13)$. È lo strumento per le leggi dell'Ornstein-Uhlenbeck e del Vasicek.

## Come si usa
Esempio del libro (esercizio di lezione): $Y_t=\int_0^t(t-s)\,dW_s\sim\mathcal N(0,t^3/3)$; attenzione, come processo in $t$ non è un integrale di Wiener con $f$ fissa (l'integrando dipende da $t$): coincide con $\int_0^tW_s\,ds$ e non è una martingala. Ponte browniano $Y_t=(1-t)\int_0^t\frac{dW_s}{1-s}$: $\mathbb E[Y_sY_t]=s(1-t)$ (esercizio del capitolo).

## Nei corsi
- **Financial engineering** (magistrale): cap. 12 §Integrali di funzioni deterministiche, es. c12-t-cubo. Fonti: `Libri/Financial engineering/capitoli/cap12.tex`; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 10 - analisi stocastica - 4 giu 26.pdf`.

## Prerequisiti
- [[Integrale di Itô]]: caso particolare
- [[Isometria di Itô]]: varianza $\int f^2$
- [[Vettore gaussiano]]: combinazioni lineari di normali

## Porta a
- [[Processo di Ornstein-Uhlenbeck]]: soluzione con $\int e^{-\theta(t-s)}dW_s$
- [[SDE lineari]]: soluzione gaussiana con coefficienti deterministici

## Collegati
- [[Caratterizzazione gaussiana del moto browniano]]: caso $f\equiv1$
- [[Modello di Vasicek]]: tasso gaussiano
