---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["Fréchet-Hoeffding bounds", "limiti di Frechet-Hoeffding", "copula comonotona", "comonotone copula", "copula M", "copula contromonotona", "countermonotonic copula", "copula W", "copula prodotto", "copula di indipendenza", "independence copula", "copula Pi", "comonotonia", "contromonotonia"]
tags: [competenza, area/probabilita]
---

# Limiti di Fréchet-Hoeffding

> Ogni copula sta tra la copula contromonotona $W$ (massima dipendenza negativa) e la copula comonotona $M$ (massima dipendenza positiva); in mezzo c'è la copula di indipendenza $\Pi$.

## Definizione / enunciato
**Teorema** (Nelsen, Thm 2.2.3 e (2.2.5); Pellerey, slide 56). Per ogni copula bivariata $C$ e ogni $(u,v)\in[0,1]^2$
$$W(u,v)=\max(u+v-1,0)\ \le\ C(u,v)\ \le\ M(u,v)=\min(u,v).$$
In dimensione $d$: $W_d(\mathbf u)=\max\{\sum_i u_i-d+1,0\}\le C(\mathbf u)\le M_d(\mathbf u)=\min_i u_i$; i limiti sono i migliori possibili, ma $W_d$ è una copula solo per $d=2$.

## Formule chiave
Le tre copule fondamentali (Pellerey, slide 37-39):
- $M_d(\mathbf u)=\min\{u_1,\dots,u_d\}$: f.d.r. di $(U,\dots,U)$, **comonotona**;
- $\Pi_d(\mathbf u)=u_1\cdots u_d$: f.d.r. di uniformi indipendenti, **indipendenza**;
- $W_2(u_1,u_2)=\max\{0,u_1+u_2-1\}$: f.d.r. di $(U,1-U)$, **contromonotona**.

Caratterizzazioni (Pellerey, slide 53-55): $X_1,\dots,X_d$ continue sono indipendenti se e solo se $C=\Pi_d$; sono comonotone (copula $M_d$) se e solo se $(X_1,\dots,X_d)\overset{d}{=}(h_1(X),\dots,h_d(X))$ con $h_i$ crescenti; $X_1,X_2$ sono contromonotone (copula $W_2$) se e solo se $X_2\overset{d}{=}h(X_1)$ con $h$ decrescente.

## Intuizione
Dimostrazione (Nelsen): $C(u,v)\le C(u,1)=u$ e $\le v$ danno il limite superiore; la massa non negativa del rettangolo $[u,1]\times[v,1]$ dà $C(u,v)\ge u+v-1$. Le famiglie parametriche si giudicano da quanto riescono a spaziare fra $W$ e $M$.

## Come si usa
La tesi descrive la famiglia di Fréchet-Hoeffding come "limiti inferiore ($W$) e superiore ($M$) della dipendenza" e usa i limiti per leggere i casi estremi delle famiglie: Clayton dà $\Pi$ per $\alpha=0$, il limite inferiore $\max(v+z-1,0)$ per $\alpha=-1$ e il superiore per $\alpha\to+\infty$; Gumbel dà $\Pi$ per $\alpha=1$ e $\min(v,z)$ per $\alpha\to\infty$; Frank va da $W$ a $M$ al variare di $\alpha$ (§3.4.1). La famiglia di Fréchet $C_\theta=\theta\Pi_d+(1-\theta)M_d$ mescola indipendenza e comonotonia (Pellerey, slide 42).

## Nei corsi
- **Prova finale** (triennale): famiglie "Fréchet-Hoeffding" e casi limite delle copule archimedee. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§2.2.1, p. 14; §3.4.1, p. 24); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Thm 2.2.3); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 37-43, 53-56).

## Prerequisiti
- [[Copula]]: proprietà di bordo e 2-crescenza
- [[Indipendenza di variabili aleatorie]]: $C=\Pi$ caratterizza l'indipendenza

## Porta a
- [[Copula di Clayton]]: comprensiva, va da $W$ a $M$
- [[Copula di Frank]]: comprensiva, va da $W$ a $M$
- [[Copula di Marshall-Olkin]]: Cuadras-Augé è media geometrica pesata di $M$ e $\Pi$

## Collegati
- [[Tau di Kendall]]: vale $1$ per $M$, $0$ per $\Pi$, $-1$ per $W$
- [[Massimo e minimo di variabili aleatorie]]: esempio del sistema in parallelo $X_1\vee X_2$ di Pellerey (slide 8-9)
