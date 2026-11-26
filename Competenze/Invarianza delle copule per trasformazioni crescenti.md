---
tipo: competenza
area: probabilita
corsi: [Prova finale]
livello: [triennale]
aliases: ["rank-invariant property", "invarianza per trasformazioni monotone", "invariance under strictly increasing transformations", "invarianza della copula", "statistiche di rango"]
tags: [competenza, area/probabilita]
---

# Invarianza delle copule per trasformazioni crescenti

> La copula di $(X,Y)$ non cambia se si applicano trasformazioni strettamente crescenti alle componenti: dipende solo dai ranghi, non dalla scala.

## Definizione / enunciato
**Teorema** (Nelsen, Thm 2.4.3; Pellerey, slide 52). Siano $X,Y$ continue con copula $C_{XY}$ e $\alpha,\beta$ strettamente crescenti su $\operatorname{Ran}X$, $\operatorname{Ran}Y$. Allora
$$C_{\alpha(X)\beta(Y)}=C_{XY}.$$
In dimensione $d$: con $h_1,\dots,h_d$ strettamente crescenti, $C$ è anche la copula di $(h_1(X_1),\dots,h_d(X_d))$.

## Formule chiave
Dimostrazione (Nelsen): con $F_2(x)=F_1(\alpha^{-1}(x))$ e $G_2(y)=G_1(\beta^{-1}(y))$,
$$C_{\alpha(X)\beta(Y)}(F_2(x),G_2(y))=\mathbb P[X\le\alpha^{-1}(x),Y\le\beta^{-1}(y)]=C_{XY}(F_2(x),G_2(y)),$$
e poiché $\operatorname{Ran}F_2=\operatorname{Ran}G_2=[0,1]$ le due copule coincidono su tutto il quadrato.

## Intuizione
Una trasformazione crescente non cambia l'ordine delle osservazioni. Per questo lo studio delle statistiche di rango coincide con lo studio delle proprietà delle copule (Pellerey, slide 52), e le misure di concordanza basate sui ranghi ($\tau$, $\rho_S$) sono invarianti, a differenza del coefficiente di Pearson, invariante solo per trasformazioni affini con coefficiente positivo.

## Come si usa
È ciò che giustifica il preprocessing della tesi: passare dai prezzi ai rendimenti logaritmici, standardizzarli (trasformazione affine crescente) e infine portarli in $[0,1]$ non altera la struttura di dipendenza che la copula deve stimare. La tesi elenca la proprietà fra quelle che rendono le copule "strumenti preziosi" (§2.2.2).

## Nei corsi
- **Prova finale** (triennale): proprietà "invarianza rispetto a trasformazioni monotone crescenti". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§2.2.2, p. 15); `triennale/ANNO 3/Prove finali/An Introduction to Copulas - Nelsen.pdf` (Thm 2.4.3); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 13, 52, 63).

## Prerequisiti
- [[Copula]]: oggetto invariante
- [[Teorema di Sklar]]: unicità della copula nel caso continuo

## Porta a
- [[Tau di Kendall]]: misura invariante perché funzione della sola copula
- [[Rho di Spearman]]: idem
- [[Pseudo-osservazioni]]: i ranghi conservano tutta l'informazione sulla copula

## Collegati
- [[Coefficiente di correlazione]]: invariante solo per trasformazioni affini crescenti
- [[Trasformazione di una variabile aleatoria]]: legge di $h(X)$
