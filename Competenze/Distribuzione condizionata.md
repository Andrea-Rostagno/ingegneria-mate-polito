---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["conditional distribution", "legge condizionata", "densità condizionata", "conditional density", "p_{X|Y=y}", "f_{X|Y=y}", "mistura", "mixture", "binomiale negativa come mistura Gamma-Poisson"]
tags: [competenza, area/probabilita]
---

# Distribuzione condizionata

> Legge di $X$ quando si sa che $Y=y$: nel discreto $p_{X|Y=y}=p_{(X,Y)}/p_Y$, nel continuo $f_{X|Y=y}=f_{(X,Y)}/f_Y$; permette di costruire congiunte "a cascata" e di calcolare la speranza condizionata.

## Definizione / enunciato
**Discreto.** Per $p_Y(y)>0$, $p_{X|Y=y}(x)=\mathbb P(X=x|Y=y)=\frac{p_{(X,Y)}(x,y)}{p_Y(y)}$ (arbitraria, di solito 0, se $p_Y(y)=0$): è una densità discreta e induce la **legge di $X$ condizionata a $Y=y$**, $\mathbb P_{X|Y=y}(A)=\mathbb P(X\in A|Y=y)$.
**Continuo.** Per $(X,Y)$ a.c.
$$f_{X|Y=y}(x)=\begin{cases}\dfrac{f_{(X,Y)}(x,y)}{f_Y(y)}&f_Y(y)\ne0\\0\ \text{(arbitrario)}&f_Y(y)=0\end{cases}$$
è la **densità di $X$ condizionata a $Y=y$**.

## Formule chiave
- Congiunta "a cascata": $f_{(X,Y)}(x,y)=f_{X|Y=y}(x)f_Y(y)$ q.o. (idem nel discreto, e con leggi miste).
- Criterio di indipendenza: $X\perp Y\iff f_{X|Y=y}=f_X$ q.o. per gli $y$ con $f_Y(y)\ne0$.
- $\mathbb E[X|Y=y]=\int x\,f_{X|Y=y}(x)dx=h(y)$ e $\mathbb E[X|Y]=h(Y)$.

## Intuizione
Condizionare significa fissare una "fetta" della congiunta e rinormalizzarla. Spesso il modello è dato proprio così: prima la legge di $Y$, poi quella di $X$ dato $Y$.

## Come si usa
- $X\sim\mathcal P(\lambda)\perp Y\sim\mathcal P(\mu)$, $Z=X+Y$: $X|Z=m\sim B(m,\frac\lambda{\lambda+\mu})$, $\mathbb E[X|Z]=Z\frac\lambda{\lambda+\mu}$ (sportelli postali).
- $X,Y$ i.i.d. $\mathrm{Exp}(\lambda)$, $Z=X+Y$: $X|Z=z\sim U(0,z)$, $\mathbb E[X|Z]=\frac Z2$.
- $X\sim\mathcal P(\lambda)$, $Y|X=m\sim B(m,p)$: $Y\sim\mathcal P(\lambda p)$, $X-Y\perp Y$ e $X-Y\sim\mathcal P(\lambda(1-p))$.
- $X\sim\Gamma(\alpha,\lambda)$, $Y|X=x\sim\mathcal P(x)$ (manutenzioni con propensione al guasto aleatoria): $p_Y(m)=\frac{\Gamma(m+\alpha)}{\Gamma(\alpha)m!}(\frac\lambda{\lambda+1})^\alpha(1-\frac\lambda{\lambda+1})^m$, binomiale negativa; $\mathbb E[Y]=\frac\alpha\lambda$ e $X|Y=m\sim\Gamma(m+\alpha,\lambda+1)$.

## Nei corsi
- **Prob e statistica** (triennale): lezioni 12-15 "condizionamento". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione12(02-11-2023) (1).pdf` (pp. 1-5); `2023Lezione13(03-11-2023).pdf` (pp. 1-4); `2023Lezione14(08-11-2023).pdf` (pp. 7-8); `2023Lezione15(09-11-2023).pdf` (pp. 1-8).
- **Statistica computazionale** (magistrale): uso per la **simulazione**. Da $f(x_1,x_2)=f(x_1)f(x_2\mid x_1)$ un campione di $(X_1,X_2)$ si ottiene simulando $X_1=x_1$ dalla marginale e poi $X_2$ dalla condizionata; poiché anche $f(x_1,x_2)=f(x_2)f(x_1\mid x_2)$, il valore $x_2$ è un campione della marginale: simulare dalla congiunta e tenere solo $X_2$ è una marginalizzazione, $f(x_2)=\int f(x_2\mid x_1)f(x_1)\,d\lambda(x_1)$. In generale $f(\mathbf z\mid\psi)=f(z_1\mid\psi)f(z_2\mid z_1,\psi)\cdots f(z_g\mid z_{g-1},\dots,z_1,\psi)$ si simula in sequenza e ogni componente (o coppia di componenti) del campione proviene dalla rispettiva marginale: è ciò che permette di leggere le marginali a posteriori dai campioni MCMC. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 34-35); `magistrale/Statistica computazionale/Algoritmi MCMC.pdf` (p. 43-46); `magistrale/Statistica computazionale/esercitazioni/Monte Carlo.R` (sezione "marginali e congiunte per variabili discrete").

## Prerequisiti
- [[Densità congiunta]]: congiunta e marginali
- [[Probabilità condizionata]]: $\mathbb P(X=x|Y=y)$ fra eventi

## Porta a
- [[Speranza condizionata]]: valore atteso rispetto alla legge condizionata
- [[Statistica sufficiente]]: la legge di $\mathbf X$ dato $T(\mathbf X)$ non dipende da $\theta$
- [[Full conditional]]: condizionata di una componente dato tutto il resto (Statistica computazionale)
- [[Gibbs sampler]]: simula a turno dalle condizionate (Statistica computazionale)

## Collegati
- [[Thinning di Poisson]]: $Y|X\sim B(X,p)$ con $X$ Poisson dà due Poisson indipendenti
- [[Distribuzione di Pascal]]: binomiale negativa come mistura Gamma-Poisson
- [[Condizionamento di un vettore gaussiano]]: caso gaussiano in forma chiusa
- [[Formula di Bayes]]: $p_{X|Y=k}$ calcolata invertendo il condizionamento
