---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [M/M/infinity queue, "M/M/∞", M/M/inf, infiniti server]
tags: [competenza, area/probabilita]
---

# Coda M-M-infinito

> Coda markoviana con infiniti server: ogni cliente è servito subito, il tasso di uscita è $j\mu$ e la stazionaria è sempre Poisson di media $\lambda/\mu$.

## Definizione / enunciato
Arrivi Poisson di tasso $\lambda$, servizi $\mathrm{Exp}(\mu)$, infiniti server:
$$q(j,j+1)=\lambda\ (j\ge0),\qquad q(j,j-1)=j\mu\ (j\ge1).$$
**Teorema (riassunto).** La M/M/$\infty$ è sempre non esplosiva e ricorrente positiva per ogni $\lambda,\mu>0$; l'unica distribuzione stazionaria è Poisson di parametro $\lambda/\mu$.

## Formule chiave
$$\prod_{n=0}^{j-1}\frac{q(n,n+1)}{q(n+1,n)}=\Big(\frac\lambda\mu\Big)^j\frac1{j!},\qquad M=\sum_{j\ge0}\Big(\frac\lambda\mu\Big)^j\frac1{j!}=e^{\lambda/\mu},$$
$$\pi(j)=e^{-\lambda/\mu}\Big(\frac\lambda\mu\Big)^j\frac1{j!}.$$
Generatore: $\mathcal Lf(x)=(f(x+1)-f(x))\lambda+(f(x-1)-f(x))\mu x$.

## Intuizione
I tassi non sono limitati, ma la catena sale di al più 1 per salto: se $Y_0=k$, $Y_n\le k+n$ e $\lambda(Y_n)\le\lambda+(k+n)\mu$, quindi $\sum_n 1/\lambda(Y_n)\ge\sum_n\frac1{\lambda+(k+n)\mu}=\infty$: niente esplosione. Il servizio cresce con la coda, quindi la coda non può divergere: $M$ è sempre finito.

## Come si usa
Modella sistemi senza attesa:
- museo: visitatori in arrivo con tasso $\lambda$ che escono dopo un tempo $\mathrm{Exp}(\mu)$;
- proteine che entrano in una cellula con tasso $\lambda$ e degradano con tasso $\mu$.

Nella coda in tandem della lezione 15 il primo nodo (compilazione dei documenti) è una M/M/$\infty$ con tasso $p_1\lambda$: è sempre positivo ricorrente e contribuisce a $\pi(n_1,n_2)$ con il fattore $e^{-p_1\lambda/\mu_1}\frac{(p_1\lambda/\mu_1)^{n_1}}{n_1!}$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 9. Fonti: `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14), `magistrale/Processi stocastici/Lezione_15_10_11.pdf` (lezione 15, tandem), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22, generatore), `riassunto_del_corso.tex` §Code markoviane e reti di Jackson.

## Prerequisiti
- [[Catena di nascita e morte continua]]: tasso di morte proporzionale a $n$

## Porta a
- —

## Collegati
- [[Coda M-M-s]]: M-M-infinito è M-M-s con infiniti server
- [[Generatore infinitesimale]]: esempio di calcolo del generatore
