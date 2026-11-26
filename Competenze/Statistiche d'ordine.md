---
tipo: competenza
area: statistica
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["order statistics", "statistica d'ordine", "j-esima statistica d'ordine", "X_(j)", "massimo campionario", "minimo campionario", "campione ordinato"]
tags: [competenza, area/statistica]
---

# Statistiche d'ordine

> Le componenti del campione ordinato $X_{(1)}\le\dots\le X_{(n)}$; la $j$-esima ha f.d.r. data da una coda binomiale.

## Definizione / enunciato
Dato un campione casuale $\mathbf X=(X_1,\dots,X_n)$ e il campione ordinato $X_{(1)}\le X_{(2)}\le\dots\le X_{(n)}$, la v.a. $X_{(j)}$ è la **$j$-esima statistica d'ordine**. $X_{(j)}\le x$ significa che almeno $j$ elementi del campione sono $\le x$; ognuno lo è con probabilità $F_X(x)$, indipendentemente.

## Formule chiave
$$F_{X_{(j)}}(x)=\sum_{k=j}^n\binom nkF_X(x)^k\big(1-F_X(x)\big)^{n-k}.$$
Casi particolari:
$$F_{X_{(n)}}(x)=[F_X(x)]^n,\qquad F_{X_{(1)}}(x)=1-[1-F_X(x)]^n .$$

## Intuizione
Il numero di osservazioni sotto $x$ è binomiale $B(n,F_X(x))$: la statistica d'ordine si legge su questa binomiale. Il coefficiente binomiale conta le diverse combinazioni di quali elementi stanno sotto $x$.

## Come si usa
Massimo e minimo sono i casi usati più spesso (affidabilità, stimatori basati sugli estremi). Nelle slide sulla sufficienza compaiono statistiche come $X_{(n)}-X_{(1)}$, $(X_{(1)},X_{(n)})$ e la mediana come candidate per stimare $\mu$; nell'esercizio sulla Gamma il campione ordinato è una delle statistiche sufficienti trovate con la fattorizzazione. Esempio (lezione 19): $X_i$ i.i.d. $U(0,1)$, $Y_n=\max_iX_i$: $\mathbb P(|Y_n-1|>\varepsilon)=(1-\varepsilon)^n\to0$, quindi $Y_n\xrightarrow{\mathbb P}1$.

## Nei corsi
- **Prob e statistica** (triennale): slide di statistica campionaria; massimo e minimo anche nelle lezioni di probabilità. Fonti: `triennale/ANNO 3/prob e statistica/statistica/statistica campionionaria lez2.pdf` (Statistiche d'ordine I-II); `probabilita/2023Lezione19(17-11-2023).pdf` (p. 8).

## Prerequisiti
- [[Campione casuale]]: campione ordinato
- [[Massimo e minimo di variabili aleatorie]]: casi $j=n$ e $j=1$
- [[Distribuzione binomiale]]: numero di osservazioni sotto $x$

## Porta a
- Nessuno nel corso.

## Collegati
- [[Statistica sufficiente]]: il campione ordinato come statistica sufficiente (esempio Gamma)
