---
tipo: competenza
area: statistica
corsi: [Prova finale, Statistica computazionale, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["Akaike Information Criterion", "AIC", "Bayesian Information Criterion", "BIC", "criterio di Akaike", "criterio di Schwarz", "information criteria", "selezione del modello", "model selection", "selezione della copula"]
tags: [competenza, area/statistica]
---

# Criteri di informazione AIC e BIC

> Penalizzano la log-verosimiglianza massima con il numero di parametri per scegliere fra modelli non annidati: vince il valore più basso.

## Definizione / enunciato
Con $L$ verosimiglianza massima del modello stimato, $k$ numero di parametri e $n$ numero di osservazioni (tesi (4.3), (5.1), (5.2)):
$$\mathrm{AIC}=-2\log L+2k,\qquad \mathrm{BIC}=-2\log L+k\log n .$$
Si sceglie il modello con AIC (o BIC) più basso.

## Formule chiave
- Il BIC penalizza di più i modelli complessi (tesi): confrontando le penalità, accade appena $\log n>2$, cioè per $n\ge8$ (osservazione mia).
- Per le copule della tesi: $k=1$ per gaussiana, Clayton, Gumbel, Frank; $k=2$ per la t di Student ($\rho,\nu$).
- Per le marginali normale ($k=2$) e t ($k=3$): `aic = -2 * loglik + 2 * k`.

## Intuizione
Aumentare i parametri fa sempre crescere la verosimiglianza; il termine di penalità impedisce di scegliere il modello solo perché più flessibile, cioè evita l'overfitting. I due criteri cercano un equilibrio fra bontà di adattamento e complessità.

## Come si usa
Due usi nella tesi.
1. **Marginali** (§4.4.1, serie Open e Close che il codice prende dalle volatilità rolling): la t di Student batte la normale per Open ($-410122.46$ contro $-366834.42$) e Close ($-406841.51$ contro $-364325.59$), tab. 4.3.
2. **Copule** (§5.3.5): con i parametri medi dei tre metodi di stima, AIC e BIC (tab. 5.15):

| copula | AIC | BIC |
|---|---|---|
| t di Student | $-238869.37$ | $-238851.83$ |
| gaussiana | $-62772.52$ | $-62763.76$ |
| Clayton | $-40428.25$ | $-40419.48$ |
| Gumbel | $-15906.58$ | $-15897.82$ |
| Frank | $177237.88$ | $177246.65$ |

La copula migliore è la t con $\rho=0.8603$, $\nu=6.3485$. Il criterio bayesiano analogo usato con MCMC è il WAIC, che invece premia la Gumbel.

## Nei corsi
- **Prova finale** (triennale): selezione delle marginali (§4.4.1) e "Scelta della copula migliore" (§5.3.5). Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (pp. 31-32, 85-89); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/formule.ipynb` (§7); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Final comparison.py`.
- **Statistica computazionale** (magistrale): "bontà del modello" bayesiana. Con $\hat\theta$ stima bayesiana (es. media a posteriori): AIC $=-2\log f(\mathbf y\mid\hat\theta)+2\#\text{param}$, BIC $=-2\log f(\mathbf y\mid\hat\theta)+\log(n)\#\text{param}$, e il **WAIC**, versione bayesiana dell'AIC calcolata per integrazione Monte Carlo con i $B$ campioni a posteriori:
$$\mathrm{WAIC}=-2\sum_{i=1}^n\log\Bigl(\frac1B\sum_{b=1}^Bf(y_i\mid\theta^b)\Bigr)+2\sum_{i=1}^n\mathrm{Var}_{\text{posterior}}(\log f(y_i\mid\theta)),$$
sensato solo se i dati sono indipendenti dato il processo; il DIC è solo nominato. Si sceglie il modello con indice più piccolo, confrontando solo modelli per la stessa $\mathbf y$; il problema è definire $f(\mathbf y\mid\hat\theta)$ con latenti e dati mancanti (le $w_t$ sono parametri o vanno marginalizzate?). Usato per scegliere $L$ nelle misture (WAIC 10715.38, 9730.153, 9180.096 per $L=2,3,4$; HMM a 4 stati 8344.04) e tra modelli GP e ICAR. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 48-50); `magistrale/Statistica computazionale/modelli mistura.pdf` (p. 29, 51).
- **Modelli statistici** (magistrale): $\mathrm{AIC}=-2\ell(\hat{\boldsymbol\theta})+2k$, si sceglie il minimo (libro, cap. 10, Def. 10.8); nel modello lineare normale $k=p+1$ e $\mathrm{AIC}=n\log(2\pi\,\mathrm{RSS}/n)+n+2(p+1)$. Selezione automatica con `step` sul dataset Advertising (TV, Radio, Newspaper), con trasformazioni ($\sqrt{\mathrm{TV}}$) e interazioni; la scelta cambia togliendo due osservazioni influenti. Usato anche per confrontare effetti fissi e misti (cap. 14) e i GLM (cap. 17). Fonti: `Libri/Modelli statistici/capitoli/cap10.tex` (§10.4, p. 169); codice `magistrale/Modelli statistici/codici/251119 Regressione Lineare Advertising.R`.

## Prerequisiti
- [[Funzione di verosimiglianza]]: $\log L$ massima
- [[Massima verosimiglianza per copule]]: fornisce $\log L$ per ogni famiglia

## Porta a
- [[Stima delle copule sul DAX]]: criterio finale di scelta
- [[Bontà di adattamento di una copula]]: selezione e validazione del modello
- [[Confronto di modelli annidati]]: alternativa con test per modelli annidati (Modelli statistici)

## Collegati
- [[Stima bayesiana]]: WAIC come analogo bayesiano
- [[Continuous ranked probability score]]: alternativa basata sulla previsione di dati tenuti da parte (Statistica computazionale)
- [[Modello mistura finita]]: scelta del numero di componenti $L$ col WAIC (Statistica computazionale)
- [[Metodo IFM]]: scelta della marginale nel primo stadio
- [[Copula t di Student]]: vincitrice per AIC e BIC
- [[Test del rapporto di verosimiglianza]]: altro confronto fra modelli basato su $\log L$
