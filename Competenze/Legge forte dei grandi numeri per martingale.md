---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [more general strong law of large numbers, legge forte generalizzata, lemma di Kronecker, Kronecker's lemma]
tags: [competenza, area/probabilita]
---

# Legge forte dei grandi numeri per martingale

> Legge forte generalizzata, dimostrata con le martingale: somme di variabili indipendenti centrate, divise per $a_n\uparrow\infty$, tendono a zero q.c. e in $L^1$ se $\sum\mathbb E[X_i^2]/a_i^2<\infty$.

## Definizione / enunciato
**Teorema.** Siano $(X_n)_{n\ge1}$ indipendenti con $\mathbb E[X_n]=0$ e $\mathbb E[X_n^2]<\infty$, e sia $0<a_n\uparrow\infty$ con
$$\sum_{i=1}^\infty\frac{\mathbb E[X_i^2]}{a_i^2}<\infty.$$
Allora $\frac1{a_n}\sum_{i=1}^nX_i\to0$ q.c. e $\mathbb E\big[\big|\frac1{a_n}\sum_{i=1}^nX_i\big|\big]\to0$.

**Corollario.** $X_n$ indipendenti con stessa media $\mu$ e $\sup_n\mathrm{Var}(X_n)<\infty$: $\frac1n\sum_{i\le n}X_i\to\mu$ q.c. e in $L^1$ (si applica il teorema a $Y_n=X_n-\mu$ con $a_n=n$, poiché $\sum\mathrm{Var}(X_i)/i^2<\infty$).

**Lemma di Kronecker** (non dimostrato). Se $0<a_n\uparrow\infty$ e $\sum_i x_i/a_i$ converge, allora $\frac1{a_n}\sum_{i\le n}x_i\to0$.

## Formule chiave
$$M_n=\sum_{i=1}^n\frac{X_i}{a_i},\qquad \mathbb E[M_{n+1}\mid\mathcal F_n]=M_n,\qquad \sup_n\mathbb E[M_n^2]=\sum_{i=1}^\infty\frac{\mathbb E[X_i^2]}{a_i^2}<\infty.$$

## Intuizione
Si trasforma la somma normalizzata in una serie martingala: Pitagora dice che il secondo momento della serie è la somma dei secondi momenti dei termini. Se questa è finita la serie converge, e Kronecker trasferisce la convergenza della serie alla media pesata.

## Come si usa
Schema della prova: (1) $M_n$ è martingala limitata in $L^2$, quindi u.i.; (2) per i teoremi di convergenza di Doob $M_n\to X$ finito q.c.; (3) Kronecker dà la tesi q.c.; (4) per $L^1$: $S_n=\sum X_i$ è martingala e $\sup_n\mathbb E[(S_n/a_n)^2]\le\sup_n\sum_{i\le n}\mathbb E[X_i^2]/a_i^2<\infty$, quindi u.i. e la convergenza q.c. diventa $L^1$. È usata nella prova dell'inversione temporale del browniano ($W_n/n\to0$ sugli interi).

## Nei corsi
- **Processi stocastici** (magistrale): applicazione dell'argomento 13 ("Feel the Martingale power!"); assente nel `.tex`. Gli indici nella slide della prova sono rovinati dall'OCR (da verificare sul PDF). Fonti: `magistrale/Processi stocastici/Lezione_20_25_11.pdf` (lezione 20).

## Prerequisiti
- [[Primo teorema di convergenza di Doob]]: convergenza della serie martingala
- [[Incrementi ortogonali delle martingale]]: serie limitata in L2

## Collegati
- [[Legge dei grandi numeri|Legge forte dei grandi numeri]] (Prob e statistica, triennale): caso i.i.d., di cui questa è la generalizzazione
