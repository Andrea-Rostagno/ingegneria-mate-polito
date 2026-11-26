---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["covariance", "Cov(X,Y)", "variabili scorrelate", "uncorrelated", "varianza di una somma", "variance of a sum"]
tags: [competenza, area/probabilita]
---

# Covarianza

> Indice numerico dell'evoluzione comune di due v.a.: $\operatorname{Cov}(X,Y)=\mathbb E[(X-\mathbb E X)(Y-\mathbb E Y)]$; è bilineare e governa la varianza delle combinazioni lineari.

## Definizione / enunciato
Per $X,Y\in L^2$ (così $XY\in L^1$ per Cauchy-Schwarz)
$$\operatorname{Cov}(X,Y)=\mathbb E\big[(X-\mathbb E[X])(Y-\mathbb E[Y])\big].$$
$X,Y$ sono **positivamente correlate** se $\operatorname{Cov}>0$, **negativamente** se $<0$, **scorrelate** se $=0$.

## Formule chiave
- Regola di calcolo: $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$.
- $X,Y\in L^1$ indipendenti $\Rightarrow XY\in L^1$ e $\mathbb E[XY]=\mathbb E[X]\mathbb E[Y]$, quindi $\operatorname{Cov}(X,Y)=0$. **Il viceversa è falso**.
- Proprietà: $\operatorname{Cov}(X,Y)=\operatorname{Cov}(Y,X)$; $\operatorname{Cov}(X,X)=\operatorname{Var}(X)$; $\operatorname{Cov}(aX+bY+c,Z)=a\operatorname{Cov}(X,Z)+b\operatorname{Cov}(Y,Z)$ (bilineare).
- $\operatorname{Var}(aX+bY+c)=a^2\operatorname{Var}(X)+b^2\operatorname{Var}(Y)+2ab\operatorname{Cov}(X,Y)$; se scorrelate $\operatorname{Var}(X\pm Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$.

## Intuizione
Misura solo la dipendenza **lineare**: due v.a. possono essere funzione l'una dell'altra ed essere scorrelate.

## Come si usa
**Controesempio** (lezione 6): $X\sim U(-1,1)$, $Y=X^2$. $\mathbb E[X]=0$, $\mathbb E[XY]=\mathbb E[X^3]=\int_{-1}^1\frac{x^3}2dx=0$, quindi $\operatorname{Cov}=0$ ma $X\not\perp Y$.
**Binomiale**: $X=\sum_{i=1}^mY_i$, $Y_i$ i.i.d. $b(p)$: $\operatorname{Var}(X)=\sum\operatorname{Var}(Y_i)=mp(1-p)$.
**Esercizio** (lezione 6): $\mathbb E X=1$, $\operatorname{Var}X=\frac34$, $\mathbb E Y=1$, $\operatorname{Var}Y=\frac13$, $\operatorname{Cov}=\frac14$: $\operatorname{Var}(2X-Y+3)=4\cdot\frac34+\frac13-4\cdot\frac14=\frac73$, $\operatorname{Cov}(2X-Y,2X+2Y)=4\cdot\frac34-2\cdot\frac13+2\cdot\frac14=\frac{17}6$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 6 "valori attesi, covarianza e correlazione". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (pp. 3-8, 12).

## Prerequisiti
- [[Valore atteso]]: $\mathbb E[g(X,Y)]$ rispetto alla congiunta
- [[Varianza]]: caso $X=Y$
- [[Indipendenza di variabili aleatorie]]: indipendenti implica scorrelate
- [[Disuguaglianza di Cauchy-Schwarz]]: $XY\in L^1$ se $X,Y\in L^2$

## Porta a
- [[Coefficiente di correlazione]]: covarianza normalizzata
- [[Matrice di covarianza]]: covarianze di tutte le coppie di componenti

## Collegati
- [[Media e varianza campionaria nel caso normale]]: $\operatorname{Cov}(\bar X,X_j-\bar X)=0$
