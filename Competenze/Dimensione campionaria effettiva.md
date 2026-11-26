---
tipo: competenza
area: statistica
corsi: [Modelli statistici, Statistica computazionale]
livello: [magistrale]
aliases: ["effective sample size", "ESS", "n.eff", "effectiveSize", "errore Monte Carlo di una catena", "Time-series SE", "Naive SE", "traceplot", "autocorrelazione della catena"]
tags: [competenza, area/statistica]
---

# Dimensione campionaria effettiva

> Il numero di estrazioni indipendenti che darebbero la stessa precisione della media di una catena MCMC autocorrelata: misura quanta informazione contiene davvero la catena.

## Definizione / enunciato
Per una catena stazionaria di lunghezza $N$ con autocorrelazioni $\rho_k$ di ritardo $k$ (libro, cap. 4, Def. 4.8):
$$\mathrm{ESS}=\frac{N}{1+2\sum_{k=1}^\infty\rho_k}.$$
L'errore Monte Carlo della media a posteriori è $\mathrm{SD}/\sqrt{\mathrm{ESS}}$ (colonna *Time-series SE* di `summary` in `coda`), non $\mathrm{SD}/\sqrt N$ (colonna *Naive SE*).

## Formule chiave
Se $\rho_k=\rho^k$ (catena che si comporta come un AR(1)), $\sum_{k\ge1}\rho^k=\rho/(1-\rho)$ e
$$\mathrm{ESS}=N\,\frac{1-\rho}{1+\rho}.$$

## Intuizione
Valori successivi molto correlati ripetono quasi la stessa informazione. Un algoritmo che si muove male (passo di Metropolis troppo piccolo o troppo grande) produce catene lunghe ma "povere".

## Come si usa
Fa parte della diagnostica delle catene insieme a traceplot (una catena stazionaria somiglia a un "bruco peloso"), densità stimate, funzione di autocorrelazione (`acf`) e $\hat R$. Numeri del libro (cap. 4, §4.5):
- catena di Metropolis con passo 0.02 per una posteriori Beta: autocorrelazione di ordine 1 pari a 0.97, quindi $10\,000$ iterazioni valgono circa 150 estrazioni indipendenti; su $20\,000$ iterazioni per due catene, dopo burn-in, $\hat R=1.00$ ma ESS solo 607 su $38\,000$ valori;
- campionatore di Gibbs per la normale con 500 dati: ESS circa $19\,500$ e $20\,300$ su $20\,000$, valori quasi indipendenti.
In R: `coda::effectiveSize` o `mcmcse::ess`; `R2jags` stampa `n.eff`. Il thinning riduce l'autocorrelazione dei valori conservati ma butta informazione: serve soprattutto a risparmiare memoria.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 4, §4.5 (Def. 4.8, p. 67). Fonti: `Libri/Modelli statistici/capitoli/cap04.tex`; `magistrale/Modelli statistici/codici/251009 Jags.R`, `codici/251022 Jags.R`.
- **Statistica computazionale** (magistrale): diagnostica grafica senza la formula della ESS. La serie $(\theta_p^1,\dots,\theta_p^B)$ si guarda come una serie temporale (**traceplot**): tre catene tipo, una a convergenza, una con forte effetto dell'inizializzazione ($\theta=10$, circa 1500 campioni per arrivare a convergenza), una stazionaria ma molto autocorrelata. Rimedi: **burnin** (si buttano i primi campioni, es. 2000) e **thin** (un campione ogni thin, es. con thin=2 si tengono $\theta^1,\theta^3,\theta^5,\dots$). Autocorrelazione al lag $h$: $r(h)=\frac{\sum_{b=1}^{N-h}(\theta_j^b-\bar\theta_j)(\theta_j^{b+h}-\bar\theta_j)}{\sum_{b=1}^N(\theta_j^b-\bar\theta_j)^2}$; se l'ACF si annulla per lag $\ge c$, un thin di $c$ dà campioni (circa) indipendenti. Nelle tabelle STAN dei processi gaussiani compaiono `n_eff` e `Rhat`. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 15-19); `magistrale/Statistica computazionale/Processi Gaussiani.pdf` (p. 36-37).

## Prerequisiti
- [[Algoritmo di Metropolis-Hastings]]: genera la catena autocorrelata
- [[Metodo Monte Carlo]]: errore standard $\sigma/\sqrt N$ nel caso indipendente

## Porta a
- [[Linguaggio JAGS]]: lettura di `n.eff` e `summary(coda)`

## Collegati
- [[Diagnostica di Gelman-Rubin]]: controllo complementare tra più catene
- [[Teorema ergodico per DTMC]]: giustifica le medie lungo la catena
- [[Gibbs sampler]]: catene da diagnosticare (Statistica computazionale)
- [[Funzione di autocorrelazione]]: la stessa ACF delle serie storiche, applicata alla catena (Statistica computazionale)
- [[Label switching]]: catene che saltano tra più punti nei modelli mistura (Statistica computazionale)
