---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["overdispersion", "sovradispersione", "sottodispersione", "underdispersion", "regressione binomiale negativa", "negative binomial regression", "glm.nb", "mistura Poisson-Gamma", "Poisson-Gamma mixture", "zero-inflated Poisson", "ZIP", "eccesso di zeri"]
tags: [competenza, area/statistica]
---

# Sovradispersione

> Quando i conteggi hanno varianza maggiore della media, la Poisson non basta: si usa la binomiale negativa, che nasce come Poisson con parametro Gamma; l'eccesso di zeri si tratta con i modelli zero-inflated.

## Definizione / enunciato
Il modello di Poisson impone $\mathbb E(y_i)=\operatorname{Var}(y_i)$: se $\operatorname{Var}>\mathbb E$ i dati sono **sovradispersi**, se $\operatorname{Var}<\mathbb E$ **sottodispersi**. **Binomiale negativa** (libro, cap. 17, Prop. 17.18): se $y_i\mid\lambda_i\sim\mathrm{Pois}(\lambda_i)$ e $\lambda_i\sim\mathrm{Gamma}(a,a/\mu_i)$ (forma $a$, tasso $a/\mu_i$: media $\mu_i$, varianza $\mu_i^2/a$),
$$P(y_i=y)=\frac{\Gamma(a+y)}{\Gamma(a)\,y!}\Bigl(\frac{\mu_i}{\mu_i+a}\Bigr)^y\Bigl(\frac a{\mu_i+a}\Bigr)^a,\qquad\mathbb E(y_i)=\mu_i,\quad\operatorname{Var}(y_i)=\mu_i+\frac{\mu_i^2}a .$$

## Formule chiave
- Per $a\to\infty$ la Gamma degenera in $\mu_i$ e si ritrova la Poisson; $a$ misura la vicinanza alla Poisson.
- Media e varianza si ottengono anche con la torre e la varianza totale: $\operatorname{Var}(y)=\mathbb E[\operatorname{Var}(y\mid\lambda)]+\operatorname{Var}[\mathbb E(y\mid\lambda)]=\mu+\mu^2/a$.
- **ZIP**: con probabilità $p$ l'unità è uno "zero strutturale", con probabilità $1-p$ segue una Poisson (cenno).

## Intuizione
Unità diverse hanno tassi diversi non spiegati dai predittori: mescolare Poisson con medie variabili allarga la distribuzione. È lo stesso meccanismo della predittiva bayesiana Gamma-Poisson.

## Come si usa
Diagnosi: devianza residua molto più grande dei gradi di libertà, o varianza campionaria molto maggiore della media. Warpbreaks: Poisson con interazione ha devianza 182.31 su 48; `MASS::glm.nb(breaks ~ tension * wool)` stima $\hat a=12.08$ (errore standard 3.30), con coefficienti che coincidono con quelli del modello di Poisson con interazione (predittori tutti qualitativi, modello saturo nelle celle). Attenzione: gli appunti usano la Gamma in forma-scala, il libro in forma-tasso. Esempi di eccesso di zeri: sigarette al giorno, pesci pescati.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.8 (Prop. 17.18, p. 300). Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251218 GLM-Logit-Poisson.pdf` (scansione, calcolo della mistura); codice `magistrale/Modelli statistici/codici/251218 PoissonGlm.R`.

## Prerequisiti
- [[Regressione di Poisson]]: modello che non basta
- [[Distribuzione Gamma]]: distribuzione del tasso latente
- [[Varianza condizionata]]: formula della varianza totale

## Porta a
- [[Devianza di un GLM]]: confronto tra Poisson e binomiale negativa

## Collegati
- [[Distribuzione di Pascal]]: la binomiale negativa
- [[Coniugatezza Gamma-Poisson]]: stessa mistura come predittiva bayesiana
- [[Distribuzione predittiva a posteriori]]: sovradispersione dovuta all'incertezza sul parametro
