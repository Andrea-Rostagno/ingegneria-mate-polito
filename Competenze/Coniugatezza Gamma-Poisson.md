---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Gamma-Poisson conjugacy", "prior Gamma per la Poisson", "Poisson-Gamma"]
tags: [competenza, area/statistica]
---

# Coniugatezza Gamma-Poisson

> Per conteggi di Poisson una prior Gamma (forma-tasso) dà una posteriori Gamma: si somma il totale dei conteggi alla forma e il numero di osservazioni al tasso.

## Definizione / enunciato
Se $X_1,\dots,X_n\mid\lambda\overset{iid}\sim\mathrm{Pois}(\lambda)$ e $\lambda\sim\mathrm{Gamma}(\alpha,\beta)$ (forma $\alpha$, tasso $\beta$, media $\alpha/\beta$), allora (libro, cap. 3, Teorema 3.15)
$$\lambda\mid x_1,\dots,x_n\sim\mathrm{Gamma}\Bigl(\alpha+\sum_{i=1}^nx_i,\ \beta+n\Bigr).$$
Infatti $\pi(\lambda\mid\mathbf x)\propto\lambda^{\alpha-1}e^{-\beta\lambda}\cdot e^{-n\lambda}\lambda^{\sum x_i}$; il fattore $1/\prod x_i!$ si elimina, $e^{-n\lambda}$ no.

## Formule chiave
- Media a posteriori $(\alpha+\sum x_i)/(\beta+n)$: media pesata della media a priori e di $\bar x$.
- Predittiva per una nuova unità: con posteriori $\mathrm{Gamma}(\alpha',\beta')$,
$$P(X_{\text{new}}=x\mid\text{dati})=\frac{\Gamma(\alpha'+x)}{x!\,\Gamma(\alpha')}\Bigl(\frac{\beta'}{\beta'+1}\Bigr)^{\alpha'}\Bigl(\frac1{\beta'+1}\Bigr)^x,$$
una binomiale negativa con media $\alpha'/\beta'$ e varianza $\frac{\alpha'}{\beta'}(1+\frac1{\beta'})$, maggiore della media.

## Intuizione
$\beta$ conta le "unità osservate in anticipo" e $\alpha$ gli eventi osservati in esse. L'incertezza su $\lambda$ rende la previsione sovradispersa rispetto alla Poisson: è lo stesso meccanismo della binomiale negativa nei GLM.

## Come si usa
Una prior data come funzione va riconosciuta dal nucleo: $\lambda e^{-\lambda}=\frac{1^2}{\Gamma(2)}\lambda^{2-1}e^{-\lambda}$ è la densità $\mathrm{Gamma}(2,1)$, quindi la posteriori è $\mathrm{Gamma}(2+\sum x_i,\,1+n)$. Con i dati dei graffi sulle carrozzerie ($n=10$, $\sum x_i=16$) si ottiene $\mathrm{Gamma}(18,11)$ e $P(X_{\text{new}}=0\mid\text{dati})=(11/12)^{18}\approx0.209$, contro la stima plug-in $e^{-1.6}\approx0.202$ (Es. `c03-predittiva-poisson`). Attenzione alla parametrizzazione: R `dgamma(x, shape, rate)` e JAGS usano il tasso, altre fonti la scala.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 3, §3.8 (Teorema 3.15, p. 51). Fonti: `Libri/Modelli statistici/capitoli/cap03.tex`; `magistrale/Modelli statistici/251008 Statistica Bayesiana con carta e penna.pdf`.

## Prerequisiti
- [[Distribuzione di Poisson]]: modello dei dati
- [[Distribuzione Gamma]]: prior e posteriori
- [[Famiglia coniugata]]: schema generale

## Porta a
- [[Distribuzione predittiva a posteriori]]: binomiale negativa per la prossima unità
- [[Sovradispersione]]: mistura Poisson-Gamma nei GLM

## Collegati
- [[Distribuzione di Pascal]]: la predittiva è una binomiale negativa
- [[Stimatore di massima verosimiglianza]]: $\hat\lambda=\bar x$, limite della media a posteriori
