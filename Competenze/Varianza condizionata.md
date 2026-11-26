---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["conditional variance", "Var(X|Y)", "legge della varianza totale", "law of total variance", "formula della varianza totale", "Var(X) = E[Var(X|G)] + Var(E[X|G])"]
tags: [competenza, area/probabilita]
---

# Varianza condizionata

> $\operatorname{Var}(X|\mathcal G)=\mathbb E[(X-\mathbb E[X|\mathcal G])^2|\mathcal G]$; con la speranza condizionata scompone la varianza totale: $\operatorname{Var}(X)=\mathbb E[\operatorname{Var}(X|\mathcal G)]+\operatorname{Var}(\mathbb E[X|\mathcal G])$.

## Definizione / enunciato
Sia $X\in L^2$.
1. **Varianza condizionata all'evento** $(Y=y)$: varianza rispetto a $\mathbb P_{X|Y=y}$, $\operatorname{Var}(X|Y=y)=\mathbb E[(X-\mathbb E[X|Y=y])^2|Y=y]=g(y)$.
2. **Condizionata a $Y$**: la v.a. $\operatorname{Var}(X|Y)=g(Y)=\mathbb E[(X-\mathbb E[X|Y])^2|Y]$.
3. **Condizionata a $\mathcal G\subseteq\mathcal F$**: $\operatorname{Var}(X|\mathcal G)=\mathbb E[(X-\mathbb E[X|\mathcal G])^2|\mathcal G]$ q.o., $\mathcal G$-misurabile.

## Formule chiave
**Proposizione.**
$$\mathbb E[X]=\mathbb E\big[\mathbb E[X|\mathcal G]\big],\qquad\operatorname{Var}(X)=\operatorname{Var}\big(\mathbb E[X|\mathcal G]\big)+\mathbb E\big[\operatorname{Var}(X|\mathcal G)\big].$$
Dimostrazione: con $\hat X=\mathbb E[X|\mathcal G]$, $X-\mathbb E X=(X-\hat X)+(\hat X-\mathbb E X)$; il doppio prodotto è nullo perché $X-\hat X$ è ortogonale a $L^2(\Omega,\mathcal G,\mathbb P)$; poi $\mathbb E[(X-\hat X)^2]=\mathbb E[\operatorname{Var}(X|\mathcal G)]$ per la tower property.

## Intuizione
La variabilità totale = variabilità "dentro i gruppi" (media delle varianze condizionate) + variabilità "fra i gruppi" (varianza delle medie condizionate).

## Come si usa
Esempio (lezione 14): $Z\sim\Gamma(2,\lambda)$, $X|Z=z\sim U(0,z)$: $\mathbb E[X|Z]=\frac Z2$, $\operatorname{Var}(X|Z)=\frac{Z^2}{12}$, quindi $\mathbb E[X]=\frac12\mathbb E Z=\frac1\lambda$ e $\operatorname{Var}(X)=\frac1{12}\mathbb E[Z^2]+\frac14\operatorname{Var}Z=\frac1{12}\cdot\frac6{\lambda^2}+\frac14\cdot\frac2{\lambda^2}=\frac1{\lambda^2}$ (ricalcolato dai dati della lezione). Nel modello Poisson-binomiale $\mathbb E[Y]=\mathbb E[\mathbb E[Y|X]]=\mathbb E[Xp]=\lambda p$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 14; usata nelle slide di statistica per Rao-Blackwell ("medie e varianze iterate"). Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione14(08-11-2023).pdf` (pp. 4-7); `statistica/Stime Puntuali lez5.pdf` (Teorema di Cramer Rao XVIII).

## Prerequisiti
- [[Speranza condizionata]]: $\hat X=\mathbb E[X|\mathcal G]$ e tower property
- [[Varianza]]: caso non condizionato

## Porta a
- [[Teorema di Rao-Blackwell]]: $\operatorname{Var}(W)\ge\operatorname{Var}(\mathbb E[W|T])$

## Collegati
- [[Distribuzione condizionata]]: $\operatorname{Var}(X|Y=y)$ si calcola sulla legge condizionata
