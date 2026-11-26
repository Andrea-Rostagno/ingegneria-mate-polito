---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["auto-Poisson model", "auto-Poisson", "modello autopoissoniano", "Poisson con dipendenza dai vicini"]
tags: [competenza, area/statistica]
---

# Modello auto-Poisson

> MRF per conteggi in cui ogni $y_i$, dati i vicini, è Poisson con log-intensità crescente nei conteggi vicini; la congiunta esiste solo con interazione negativa, il che lo rende poco utile.

## Definizione / enunciato
$$y_i\mid\mathbf y_{-i}\sim\mathrm{Pois}\Bigl(\exp\bigl(\mu+\sum_{j\sim i}\beta y_j\bigr)\Bigr),\qquad\lambda_i=\exp\bigl(\mu+\sum_{j\sim i}\beta y_j\bigr),\qquad f(y_i\mid\partial y_i)=\frac{e^{-\lambda_i}\lambda_i^{y_i}}{y_i!}.$$
L'idea: se i vicini hanno valori elevati, $y_i$ tende ad avere valori elevati.

## Formule chiave
Poiché $f(0\mid\partial y_i)=e^{-\lambda_i}$ qualunque siano i vicini, $\frac{f(y_i\mid\partial y_i)}{f(0\mid\partial y_i)}=\lambda_i^{y_i}/y_i!$ e, con il lemma di Brook,
$$\frac{f(\mathbf y)}{f(\mathbf 0)}=\exp\Bigl(\sum_i(\mu y_i-\log(y_i!))+\sum_{\substack{j\sim i\\i<j}}\beta y_iy_j\Bigr).$$

## Intuizione
Bisognerebbe verificare che questo kernel sommi a una costante finita, ed è molto complesso: si dimostra che lo fa solo per $\beta<0$, cioè solo con dipendenza negativa tra vicini. "Definire le full conditional non ci assicura niente sull'esistenza della congiunta."

## Come si usa
È il controesempio che motiva lo spostamento della dipendenza al secondo livello della gerarchia: $y_i\mid w_i\sim\mathrm{Pois}(\exp(\mu+w_i))$ con $\mathbf w$ MRF gaussiano (CAR). Nel notebook del corso c'è una funzione R per il log-kernel.

## Nei corsi
- **Statistica computazionale** (magistrale): "Auto-Poisson model" sui dati dei crimini per provincia. Fonti: `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 17-19); notebook `magistrale/Statistica computazionale/auto_modelli_MRF_CAR_R.ipynb` (`auto_poisson_logkernel`).

## Prerequisiti
- [[Lemma di Brook]]: costruzione della congiunta
- [[Distribuzione di Poisson]]: full conditional

## Collegati
- [[Modello CAR]]: alternativa con dipendenza nel livello latente
- [[Markov random field]]: è un MRF definito dalle full conditional
