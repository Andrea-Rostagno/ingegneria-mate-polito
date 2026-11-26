---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale]
livello: [triennale]
aliases: ["independence of random variables", "variabili aleatorie indipendenti", "v.a. indipendenti", "iid", "indipendenti e identicamente distribuite", "fattorizzazione della densità congiunta"]
tags: [competenza, area/probabilita]
---

# Indipendenza di variabili aleatorie

> Le v.a. $(X_i)_{i\in I}$ sono indipendenti se lo sono le $\sigma$-algebre che generano; per un vettore $(X,Y)$ equivale a dire che la legge congiunta è il prodotto delle marginali.

## Definizione / enunciato
$(X_i)_{i\in I}$ sono **indipendenti** se lo sono le $\sigma$-algebre $\sigma(X_i)=\{X_i^{-1}(A):A\in\mathcal B(\mathbb R)\}$. Per $Z=(X,Y)$:
$$X\perp Y\iff\mathbb P(X\in A,Y\in B)=\mathbb P(X\in A)\mathbb P(Y\in B)\ \ \forall A,B\iff\mathbb P_Z=\mathbb P_X\otimes\mathbb P_Y$$
(unicità della misura prodotto). **i.i.d.** = indipendenti e identicamente distribuite.

## Formule chiave
- $X\perp Y\iff F_Z(x,y)=F_X(x)F_Y(y)$ per ogni $(x,y)$.
- Discreto: $X\perp Y\iff p_Z(x_i,y_j)=p_X(x_i)p_Y(y_j)$ per ogni $i,j$.
- Continuo: se $f_Z(x,y)=f_X(x)f_Y(y)$ $\mathbf m$-q.o. allora $X\perp Y$; viceversa se $X,Y$ a.c. e indipendenti, $Z$ è a.c. con $f_Z=f_Xf_Y$.
- **Criterio rapido**: se $f_Z(x,y)=h(x)g(y)$ q.o. allora $X\perp Y$ (le marginali sono proporzionali a $h$ e $g$).
- Funzioni di v.a. indipendenti: $X\perp Y\Rightarrow h(X)\perp g(Y)$; più in generale $h(X_1..X_n)\perp g(Y_1..Y_m)$ (es. $X_1X_2\perp X_3+X_4+X_5$ se tutte indipendenti).

## Intuizione
Conoscere $Y$ non cambia la legge di $X$. Attenzione al supporto: se la densità è positiva su un insieme non rettangolare (triangolo, corona circolare) le v.a. non possono essere indipendenti, perché $f_Xf_Y>0$ su un insieme di misura positiva dove $f_Z=0$.

## Come si usa
Lezione 5: $f=4xy\mathbb 1_{(0,1)^2}$ si fattorizza ($2x\cdot2y$), quindi $X\perp Y$; $f=8xy$ sul triangolo $0<x\le y<1$ no; uniforme sulla corona $1\le x^2+y^2\le9$ no. Lo schema di Bernoulli: $X=\sum Y_i$ con $Y_i=\mathbb 1_{A_i}$ i.i.d. $b(p)$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 5 "indipendenza di v.a.". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione05(12-10-2023).pdf` (pp. 1-14).
- **Prova finale** (triennale): $X_1,\dots,X_d$ sono indipendenti se $F(x_1,\dots,x_d)=F_1(x_1)\cdots F_d(x_d)$, e con densità $f=f_1\cdots f_d$; attenzione, l'indipendenza a coppie non implica quella congiunta. Con marginali continue l'indipendenza equivale ad avere copula $\Pi_d(\mathbf u)=u_1\cdots u_d$. Fonti: `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 10-11, 38, 53).

## Prerequisiti
- [[Indipendenza di eventi]]: indipendenza di $\sigma$-algebre
- [[Densità congiunta]]: criteri di fattorizzazione
- [[Misura prodotto]]: $\mathbb P_Z=\mathbb P_X\otimes\mathbb P_Y$

## Porta a
- [[Covarianza]]: indipendenti implica scorrelate
- [[Somma di variabili aleatorie indipendenti]]: convoluzione
- [[Massimo e minimo di variabili aleatorie]]: fattorizzazione di $F$ e $S$
- [[Campione casuale]]: campione i.i.d.

## Collegati
- [[Funzione caratteristica]]: criterio di indipendenza $\Phi_{\mathbf X}=\prod\Phi_{X_j}$
- [[Limiti di Fréchet-Hoeffding]]: la copula di indipendenza $\Pi$ sta fra $W$ e $M$
