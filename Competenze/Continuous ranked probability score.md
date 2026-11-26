---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["CRPS", "continuous ranked probability score", "punteggio di probabilità continuo", "scoring rule per la predittiva"]
tags: [competenza, area/statistica]
---

# Continuous ranked probability score

> Punteggio che confronta un'intera distribuzione predittiva (la sua cumulata $F$) con il valore osservato: più è piccolo, migliore è la previsione; a differenza dell'MSE tiene conto dell'incertezza della posteriori.

## Definizione / enunciato
Per una cumulata $F$ e un valore puntuale $y$:
$$CRPS(F,y)=\int\bigl(F-\eta(x-y)\bigr)^2\,d\lambda(x),$$
dove $\eta(x-y)$ è la funzione gradino di Heaviside (0 se l'argomento è negativo, 1 se positivo). Sotto opportune condizioni, valide in genere per variabili discrete o continue univariate ma non per esempio per variabili circolari,
$$CRPS(F,y)=E_X(|X-y|)-\frac12E_{X,X'}(|X-X'|),$$
con $X,X'$ indipendenti da $F$.

## Formule chiave
Se $F=F(y_{0,j}\mid\mathbf y_{obs})$ è la cumulata della predittiva e si hanno $B$ campioni $y_{0,j}^b$ dalla predittiva, la stima Monte Carlo è
$$CRPS(F(y_{0,j}\mid\mathbf y_{obs}),y_{0,j})\approx\frac{\sum_{b=1}^B|y_{0,j}^b-y_{0,j}|}{B}-\frac12\,\frac{\sum_{b=1}^B\sum_{h=1}^B|y_{0,j}^b-y_{0,j}^h|}{B^2}.$$

## Intuizione
Il primo termine misura quanto la predittiva sta lontana dal dato vero, il secondo sottrae la sua dispersione interna: una predittiva concentrata attorno al valore giusto ha punteggio basso. Confrontare solo la media a posteriori $\hat y_{0,j}$ con il dato (MSE o errore assoluto) "sta negando tutta l'incertezza presente nella a posteriori".

## Come si usa
Nella cross validation bayesiana: si stima il modello su $\mathbf y_{obs}$, si campiona $\mathbf y_0$ dalla predittiva, si calcola il CRPS per ogni $y_{0,j}$ e si confrontano i modelli sul valore medio.

## Nei corsi
- **Statistica computazionale** (magistrale): parte "Bontà del modello" degli algoritmi MCMC. Fonti: `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 53-54).

## Prerequisiti
- [[Distribuzione predittiva a posteriori]]: la $F$ da valutare
- [[Funzione di ripartizione]]: il CRPS integra lo scarto tra cumulate
- [[Metodo Monte Carlo]]: le attese si stimano con i campioni

## Collegati
- [[Metodi di stima dell'accuratezza]]: si applica ai dati tenuti da parte nella cross validation
- [[Errore quadratico medio]]: alternativa puntuale che ignora l'incertezza
- [[Criteri di informazione AIC e BIC]]: l'altra famiglia di criteri di bontà del modello
