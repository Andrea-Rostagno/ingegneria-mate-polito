---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["tail formula for the expectation", "valore atteso tramite la funzione di sopravvivenza", "E[X] come integrale della coda", "layer cake formula"]
tags: [competenza, area/probabilita]
---

# Formula della coda per il valore atteso

> Per una variabile non negativa il valore atteso è l'integrale della funzione di sopravvivenza: $\mathbb E[X]=\int_0^{\infty}\mathbb P(X>x)\,dx$.

## Definizione / enunciato
**Proposizione.** Sia $X\ge0$, $X\in L^1$. Allora
$$\mathbb E[X]=\int_0^{+\infty}S_X(x)\,dx=\int_0^{+\infty}\mathbb P(X>x)\,dx .$$

## Formule chiave
- Vale anche $\mathbb E[X]=\int_0^{+\infty}\mathbb P(X\ge x)\,dx$.
- Caso discreto a valori naturali: $\mathbb E[X]=\sum_{k\in\mathbb N}S_X(k)=\sum_{k\ge0}\mathbb P(X>k)$.
- Segno qualsiasi: $\mathbb E[X]=\int_0^{+\infty}S_X(x)\,dx-\int_{-\infty}^0F_X(x)\,dx$ (poco usata).

## Intuizione
L'area sotto la funzione di sopravvivenza conta, per ogni livello $x$, quanta probabilità sta sopra $x$: sommando le "fette orizzontali" si ricostruisce la media.

## Come si usa
**Dimostrazione** (struttura di spazio prodotto): sulla misura prodotto $\mu=\mathbb P_X\otimes m$ in $(\mathbb R^2,\mathcal B(\mathbb R^2))$ si prende $E=\{(x,y):0\le y<x\}$. Le sezioni verticali danno $m(E^2_x)=x$ per $x>0$, quindi $\mu(E)=\int_0^\infty x\,d\mathbb P_X=\mathbb E[X]$; quelle orizzontali danno $\mathbb P_X((y,+\infty))=\mathbb P(X>y)$, quindi $\mu(E)=\int_0^\infty\mathbb P(X>y)dy$.
**Esempi** (lezione 3): $X\sim\mathrm{Exp}(\lambda)$: $\int_0^\infty e^{-\lambda x}dx=\frac1\lambda$. $X\sim G(p)$ su $\mathbb N$: $\sum_{k\ge0}(1-p)^k=\frac1p$. Serve anche per il tempo di vita medio di un sistema: $\mathbb E[T_S]=\int_0^\infty S_{T_S}(t)dt$ (lezione 9).

## Nei corsi
- **Prob e statistica** (triennale): "utilizzo della struttura di spazi prodotto". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione01&02(04&05-10-2023).pdf` (p. 13); `2023Lezione03(06-10-2023).pdf` (pp. 1-2, dimostrazione ed esempi).

## Prerequisiti
- [[Misura prodotto]]: sezioni di $\{0\le y<x\}$
- [[Valore atteso]]: integrale rispetto a $\mathbb P_X$
- [[Funzione di ripartizione]]: $S_X=1-F_X$

## Porta a
- [[Massimo e minimo di variabili aleatorie]]: media del tempo di vita di un sistema

## Collegati
- [[Distribuzione esponenziale]]: esempio $\mathbb E[X]=1/\lambda$
- [[Distribuzione geometrica]]: esempio discreto $\mathbb E[X]=1/p$
