---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["JAGS", "Just Another Gibbs Sampler", "rjags", "R2jags", "BUGS", "modello JAGS", "jags.model", "coda.samples", "dnorm con precisione"]
tags: [competenza, area/statistica]
---

# Linguaggio JAGS

> Linguaggio per descrivere un modello bayesiano come DAG (prior e verosimiglianza nodo per nodo); il programma JAGS costruisce da solo il campionatore MCMC e restituisce le catene della posteriori.

## Definizione / enunciato
Un modello JAGS è un testo `model{ ... }` (libro, cap. 4, §4.4):
- relazioni **stocastiche** con `~` (`y[i] ~ dnorm(mu, tau)`), relazioni **deterministiche** con `<-` (`delta <- mu1 - mu2`);
- cicli `for (i in 1:n){...}`, traduzione della plate notation;
- i nodi passati come dati sono osservati, gli altri nodi stocastici sono parametri; l'ordine delle istruzioni non conta, perché JAGS costruisce il grafo.
Il nome significa *Just Another Gibbs Sampler*: per ogni nodo ricava la condizionata completa e la campiona esattamente (casi coniugati) o con metodi tipo Metropolis o slice sampling.

## Formule chiave
Parametrizzazioni: `dnorm(media, precisione)` con $\tau=1/\sigma^2$; `dgamma(forma, tasso)` con media forma/tasso; `dbeta(a,b)`; `dbin(p, n)` (prima la probabilità); `dpois`, `dunif`, `dmulti`, `ddirch`.

## Intuizione
Si scrive il modello, non l'algoritmo: lo stesso DAG disegnato a mano diventa codice. Il prezzo è controllare la convergenza.

## Come si usa
Flusso con `rjags`: (1) `jags.model` (modello, dati, valori iniziali, fase di adattamento `n.adapt`); (2) `update(m, n)` per il burn-in; (3) `coda.samples(m, variable.names, n.iter, thin)` restituisce un `mcmc.list`; (4) `summary`, `plot`, `effectiveSize`, `gelman.diag`. Con `R2jags::jags(...)` tutto in una chiamata, con $\hat R$ e `n.eff`. Esempi del libro: normale con `tau ~ dgamma(0.5,0.5)` e `mu ~ dnorm(0,1.0E-5)` su 500 dati simulati da $N(2,1)$ (media a posteriori di $\mu$ circa 2.00, intervallo $(1.91;\ 2.08)$); controllo Beta-Bernoulli su 1000 prove con 287 successi, da confrontare con i quantili esatti di $\mathrm{Beta}(288,714)$: 0.2598, 0.2873, 0.3158. I valori iniziali dispersi vanno passati con `inits`, altrimenti la diagnostica con inizializzazioni disperse perde senso.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 4 §4.3-4.4 e appendice C (§C.3), cap. 6 (Dirichlet in JAGS), cap. 14 (modello gerarchico). Fonti: `Libri/Modelli statistici/capitoli/cap04.tex`, `appC.tex`; `magistrale/Modelli statistici/codici/251009 Jags.R`, `codici/251022 Jags.R`, `codici/251023 Dirichlet (1).R`.

## Prerequisiti
- [[Rete bayesiana]]: il modello è un DAG
- [[Algoritmo di Metropolis-Hastings]]: MCMC e campionamento di Gibbs

## Porta a
- [[Modello gerarchico bayesiano]]: modello JAGS a più livelli

## Collegati
- [[Dimensione campionaria effettiva]]: `n.eff` nell'output
- [[Diagnostica di Gelman-Rubin]]: colonna `Rhat`
- [[Elicitazione della prior]]: sensibilità ripetendo il modello con prior diverse
