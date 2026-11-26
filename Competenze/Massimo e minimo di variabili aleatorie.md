---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["maximum and minimum of random variables", "max e min di v.a.", "affidabilità di un sistema", "system reliability", "componenti in serie e in parallelo", "minimo di esponenziali"]
tags: [competenza, area/probabilita]
---

# Massimo e minimo di variabili aleatorie

> Per v.a. indipendenti la funzione di ripartizione del massimo è il prodotto delle funzioni di ripartizione, la sopravvivenza del minimo è il prodotto delle sopravvivenze: è il calcolo base dell'affidabilità di sistemi.

## Definizione / enunciato
Sia $Z=(X,Y)$, $U=\max(X,Y)$, $V=\min(X,Y)$. Allora
$$F_U(u)=\mathbb P(X\le u,Y\le u)=F_Z(u,u)\overset{X\perp Y}=F_X(u)F_Y(u),$$
$$S_V(v)=\mathbb P(X>v,Y>v)\overset{X\perp Y}=S_X(v)S_Y(v),\qquad F_V(v)=1-(1-F_X(v))(1-F_Y(v)).$$

## Formule chiave
- $X\sim\mathrm{Exp}(\lambda)\perp Y\sim\mathrm{Exp}(\mu)\Rightarrow\min(X,Y)\sim\mathrm{Exp}(\lambda+\mu)$.
- **Affidabilità** (tempi di vita $T_1\perp T_2$): componenti **in serie** $T_S=\min(T_1,T_2)$, $S_{T_S}=S_{T_1}S_{T_2}$; **in parallelo** $T_S=\max(T_1,T_2)$, $F_{T_S}=F_{T_1}F_{T_2}$.

## Intuizione
Il massimo è sotto $u$ solo se lo sono tutti; il minimo è sopra $v$ solo se lo sono tutti. Un sistema in serie si rompe al primo guasto, uno in parallelo all'ultimo.

## Come si usa
Esercizio (lezione 9): 4 componenti i.i.d. $\mathrm{Exp}(\lambda)$, $T_{12}=\min(T_1,T_2)\sim\mathrm{Exp}(2\lambda)$, $T_{123}=\max(T_{12},T_3)$, $T_S=\min(T_{123},T_4)$:
$$S_{T_S}(t)=e^{-2\lambda t}+e^{-3\lambda t}-e^{-4\lambda t},\qquad\mathbb E[T_S]=\int_0^\infty S_{T_S}=\frac1{2\lambda}+\frac1{3\lambda}-\frac1{4\lambda}=\frac7{12\lambda}<\frac1\lambda.$$
Esempio discreto (lezione 8): $p_{(X,Y)}(i,j)=(1-a)^2a^{i+j}$, $U=\min$, $V=X-Y$: $U\perp V$ con $p_U(m)=(1-a^2)a^{2m}$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 8 (caso particolare delle trasformazioni) e lezione 9 (applicazione all'affidabilità). Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione08(19-10-2023).pdf` (pp. 3-6, 14); `2023Lezione09(20-10-2023).pdf` (pp. 1-5).

## Prerequisiti
- [[Indipendenza di variabili aleatorie]]: fattorizzazione di $F$ e $S$
- [[Funzione di ripartizione]]: $F$ e funzione di sopravvivenza

## Porta a
- [[Statistiche d'ordine]]: massimo e minimo campionari

## Collegati
- [[Corsa di esponenziali]]: minimo di esponenziali indipendenti
- [[Formula della coda per il valore atteso]]: tempo di vita medio del sistema
- [[Distribuzione esponenziale]]: tempi di vita dei componenti
