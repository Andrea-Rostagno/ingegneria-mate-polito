---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["exponential family", "famiglia esponenziale con parametro di dispersione", "exponential dispersion family", "parametro naturale", "parametro canonico", "natural parameter", "parametro di dispersione", "dispersion parameter", "b(theta)"]
tags: [competenza, area/statistica]
---

# Famiglia esponenziale

> Classe di distribuzioni (normale, Poisson, binomiale e altre) la cui densità si scrive $\exp\{(y\theta-b(\theta))/a(\phi)+c(y,\phi)\}$: media e varianza si ottengono derivando $b$, ed è la componente casuale dei modelli lineari generalizzati.

## Definizione / enunciato
$y_i$ appartiene alla famiglia esponenziale (forma con parametro di dispersione) se (libro, cap. 17, Def. 17.1)
$$f(y_i;\theta_i,\phi_i)=\exp\Bigl\{\frac{y_i\theta_i-b(\theta_i)}{a(\phi_i)}+c(y_i,\phi_i)\Bigr\},$$
con $\theta_i$ **parametro naturale** (canonico), $\phi_i$ **parametro di dispersione**, $a,b,c$ note e $b$ derivabile due volte.

## Formule chiave
(Prop. 17.2) $\mu_i=\mathbb E(y_i)=b'(\theta_i)$, $\operatorname{Var}(y_i)=b''(\theta_i)\,a(\phi_i)$; si dimostra derivando sotto il segno di integrale $\int f\,dy=1$ una e due volte.
Membri (Es. `c17-membri`):
- normale: $\theta=\mu$, $b(\theta)=\theta^2/2$, $a(\phi)=\phi=\sigma^2$, $c(y,\phi)=-\frac12\log(2\pi\phi)-\frac{y^2}{2\phi}$;
- Poisson: $\theta=\log\lambda$, $b(\theta)=e^\theta$, $a(\phi)=1$, da cui media e varianza $\lambda$;
- binomiale: $\theta=\operatorname{logit}\pi$, con $a(\phi)=1$ (esercizio del libro: trovare $b$ e il link canonico).

## Intuizione
Tutta l'informazione sulla relazione media-varianza sta nella funzione $b$: la varianza è funzione della media, $\operatorname{Var}=b''(b'^{-1}(\mu))a(\phi)$. Questo permette una teoria unica di stima e test per risposte molto diverse.

## Come si usa
Per riconoscere un membro della famiglia si riscrive la densità come esponenziale di qualcosa e si isolano il termine $y\theta$, la funzione $b(\theta)$ e il resto; poi il link canonico è quello che rende $\theta_i$ uguale al predittore lineare. Per binomiale e Poisson $a(\phi)=1$ è fisso; con `quasibinomial` o `quasipoisson` lo si stima.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 17, §17.2 (Def. 17.1, Prop. 17.2, p. 284). Fonti: `Libri/Modelli statistici/capitoli/cap17.tex`; `magistrale/Modelli statistici/codici/251211 GLM.pdf` (slide Amongero-Mastrantonio, trasposta scritta $^T$); `magistrale/Modelli statistici/codici/251218 GLM-Logit-Poisson.pdf` (scansione).

## Prerequisiti
- [[Distribuzione normale]]: membro con $a(\phi)=\sigma^2$
- [[Distribuzione di Poisson]]: membro con $b(\theta)=e^\theta$
- [[Distribuzione binomiale]]: membro con $\theta=\operatorname{logit}\pi$

## Porta a
- [[Modello lineare generalizzato]]: componente casuale del GLM

## Collegati
- [[Informazione di Fisher]]: nei GLM la matrice $\mathbf J$ usa le varianze $b''(\theta_i)a(\phi_i)$
- [[Regressione di Poisson]]: membro di Poisson con link canonico logaritmico
- [[Regressione logistica]]: membro binomiale con link canonico logit
