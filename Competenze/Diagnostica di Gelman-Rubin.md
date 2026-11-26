---
tipo: competenza
area: statistica
corsi: [Prova finale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["Gelman-Rubin diagnostic", "R-hat", "R hat", "potential scale reduction factor", "PSRF", "convergenza delle catene MCMC", "varianza tra le catene", "varianza entro le catene"]
tags: [competenza, area/statistica]
---

# Diagnostica di Gelman-Rubin

> Si fanno girare più catene MCMC da punti iniziali diversi e si confronta la varianza fra le catene con quella entro le catene: $\hat R\approx1$ indica convergenza.

## Definizione / enunciato
Con $m$ catene di lunghezza $n$ (dopo il burn-in), medie $\bar\theta_j$ e varianze campionarie $s_j^2$ (tesi §5.2.9, funzione `gelman_rubin`):
$$B=n\cdot\operatorname{Var}_j(\bar\theta_j),\qquad W=\frac1m\sum_{j=1}^ms_j^2,$$
$$\widehat{\operatorname{Var}}=\frac{n-1}{n}W+\frac1nB,\qquad \hat R=\sqrt{\frac{\widehat{\operatorname{Var}}}{W}} .$$
Le varianze sono con `ddof=1`.

## Formule chiave
Regola della tesi: $\hat R\approx1$ catene convergenti; $\hat R>1.1$ possibili problemi di convergenza e necessità di più iterazioni.

## Intuizione
Se le catene hanno dimenticato il punto di partenza ed esplorano la stessa distribuzione, le loro medie sono vicine ($B$ piccolo) e $\widehat{\operatorname{Var}}\approx W$. Se invece qualche catena è ancora "bloccata" vicino al suo inizio, $B$ è grande e $\hat R$ supera 1.

## Come si usa
Nella tesi si applica alle 4 catene di Metropolis-Hastings per il $\rho$ della copula gaussiana, avviate da $-0.8,\dots,0.8$, scartando i primi 5000 passi; si riportano poi media, deviazione standard, mediana e intervallo di credibilità al 95% del campione unito. La tesi non riporta il valore di $\hat R$ ottenuto sul DAX.

## Nei corsi
- **Prova finale** (triennale): §5.2.9 "Verifichiamo la convergenza del metodo tramite la diagnostica di Gelman-Rubin". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (p. 60); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/mcmc.py` (`gelman_rubin`).
- **Modelli statistici** (magistrale): stessa formula con $M\ge2$ catene di lunghezza $N$, $W$ media delle varianze entro le catene e $B/N$ varianza tra le medie, $\hat R=\sqrt{(\frac{N-1}NW+\frac1NB)/W}$; soglia pratica 1.1, o 1.01 per analisi accurate (libro, cap. 4, Def. 4.9). Due catene di Metropolis con passo piccolo partite da 0.05 e 0.95: $\hat R=3.48$ sulle prime 100 iterazioni e 1.35 sulle prime 400 (con `autoburnin = FALSE`; il default di `coda::gelman.diag` scarta la prima metà). La diagnostica può rivelare la mancata convergenza, non dimostrarla. Fonti: `Libri/Modelli statistici/capitoli/cap04.tex` (§4.5, p. 67).

## Prerequisiti
- [[Algoritmo di Metropolis-Hastings]]: genera le catene da confrontare
- [[Varianza]]: varianze fra ed entro le catene

## Porta a
- [[Stima bayesiana]]: valida le sintesi della posteriori
- [[Linguaggio JAGS]]: colonna `Rhat` di `R2jags` (Modelli statistici)

## Collegati
- [[Media e varianza campionaria nel caso normale]]: varianze campionarie delle catene
- [[Distribuzione stazionaria di una DTMC]]: si verifica di averla raggiunta
