---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["Rao-Blackwell theorem", "Rao-Blackwellizzazione", "Rao-Blackwellization", "phi(T) = E(W|T)", "Rao-Blackwell estimator", "stimatore di Rao-Blackwell Monte Carlo"]
tags: [competenza, area/statistica]
---

# Teorema di Rao-Blackwell

> Condizionando uno stimatore non distorto a una statistica sufficiente si ottiene uno stimatore ancora non distorto e con varianza non maggiore.

## Definizione / enunciato
**Teorema.** Se $W$ è uno stimatore non distorto di $\theta$ e $T$ è una statistica sufficiente per $\theta$, allora $\phi(T)=\mathbb E(W|T)$ è uno stimatore non distorto di $\theta$ con
$$\operatorname{Var}(\phi(T))\le\operatorname{Var}(W).$$

## Formule chiave
Medie e varianze iterate:
$$\mathbb E(W)=\mathbb E\big(\mathbb E(W|T)\big)=\mathbb E(\phi(T))=\theta,$$
$$\operatorname{Var}(W)=\operatorname{Var}\big(\mathbb E(W|T)\big)+\mathbb E\big(\operatorname{Var}(W|T)\big)\ge\operatorname{Var}(\phi(T)).$$

## Intuizione
La sufficienza non serve per le disuguaglianze ma perché $\phi(T)$ sia uno **stimatore**: $\phi(T)=\int W(\mathbf x)f(\mathbf x|T(\mathbf x))d\mathbf x$ non deve dipendere da $\theta$, e la legge di $\mathbf X$ dato $T$ è libera da $\theta$ proprio per definizione di sufficienza. Condizionare toglie la parte di variabilità di $W$ che non porta informazione su $\theta$.

## Come si usa
Collega stimatori e statistiche sufficienti: lo stimatore ottimo va cercato fra le funzioni della statistica sufficiente. Nel corso è enunciato e dimostrato alla fine della parte su Cramér-Rao, senza esercizi.

## Nei corsi
- **Prob e statistica** (triennale): slide "Stime puntuali". Fonti: `triennale/ANNO 3/prob e statistica/statistica/Stime Puntuali lez5.pdf` (Teorema di Cramer Rao XVII-XVIII).
- **Statistica computazionale** (magistrale): **Rao-Blackwellization** di uno stimatore Monte Carlo. Da $E_x(h(X))=\int_{\mathcal Y}E_x(h(X)\mid y)f(y)\,d\lambda(y)$ si possono usare i campioni di $X$, $\frac1n\sum_ih(X_i)$, oppure quelli di $Y$, $\frac1n\sum_iE_x(h(X)\mid Y_i)$, se $E(h(X)\mid Y_i)$ è calcolabile. Con campioni indipendenti le varianze sono $\frac1{n^2}\sum_i\mathrm{var}_x(h(X_i))$ e $\frac1{n^2}\sum_i\mathrm{var}_y(E_x(h(X)\mid Y_i))$ e, per la legge della varianza totale $\mathrm{var}_x(h(X))=\mathrm{var}_y(E_x(h(X)\mid Y))+E_y(\mathrm{var}_x(h(X)\mid Y))\ge\mathrm{var}_y(E_x(h(X)\mid Y))$, lo stimatore condizionato ("Rao-Blackwell estimator") è migliore in termini di varianza. Qui non serve la sufficienza: $Y$ è una variabile di cui si conosce la condizionata. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 20-22).

## Prerequisiti
- [[Statistica sufficiente]]: $f(\mathbf x|T(\mathbf x))$ non dipende da $\theta$
- [[Varianza condizionata]]: scomposizione della varianza
- [[Speranza condizionata]]: $\phi(T)=\mathbb E(W|T)$ e tower property

## Porta a
- Nessuno nel corso.

## Collegati
- [[Disuguaglianza di Cramér-Rao]]: altro criterio di ottimalità
- [[Metodo Monte Carlo]]: versione Monte Carlo, si media $E(h(X)\mid Y_i)$ invece di $h(X_i)$ (Statistica computazionale)
- [[Campionamento per importanza]]: altra tecnica di riduzione della varianza (Statistica computazionale)
