---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità, Analisi funzionale]
livello: [triennale]
aliases: ["measure space", "misura", "measure", "sigma-additività", "misura finita", "misura sigma-finita", "misura di Dirac", "misura discreta", "misura che conta", "formula di inclusione-esclusione", "formula di Poincaré"]
tags: [competenza, area/analisi]
---

# Spazio di misura

> Una terna $(X,\mathcal A,\mu)$ dove $\mu$ assegna a ogni insieme misurabile una "grandezza" non negativa, additiva su unioni numerabili disgiunte.

## Definizione / enunciato
Su un'algebra $\mathcal A$, $\mu:\mathcal A\to[0,+\infty]$ con $\mu(\emptyset)=0$ è **additiva** se $\mu(A\cup B)=\mu(A)+\mu(B)$ per $A\cap B=\emptyset$, **σ-additiva** se per $(A_m)$ disgiunti con $\bigcup A_m\in\mathcal A$
$$\mu\Big(\bigcup_{m\ge1}A_m\Big)=\sum_{m\ge1}\mu(A_m).$$
Una **misura** è una funzione σ-additiva su una σ-algebra; $(X,\mathcal A,\mu)$ è uno **spazio di misura**. È *finita* se $\mu(X)<+\infty$, *σ-finita* se $X=\bigcup A_m$ con $\mu(A_m)<+\infty$. $\mu$ è *concentrata* su $A$ se $\mu(A^c)=0$; la *restrizione* è $\mu|_A(B)=\mu(A\cap B)$.

## Formule chiave
- Monotonia $A\subseteq B\Rightarrow\mu(A)\le\mu(B)$; sub-additività numerabile $\mu(\bigcup A_m)\le\sum\mu(A_m)$.
- Se $\mu$ è finita: $\mu(A\cup B)=\mu(A)+\mu(B)-\mu(A\cap B)$ e (Poincaré)
$$\mu(A_1\cup\dots\cup A_m)=\sum_{k=1}^m(-1)^{k+1}\!\!\sum_{1\le i_1<\dots<i_k\le m}\!\!\mu(A_{i_1}\cap\dots\cap A_{i_k}).$$
- Misura di Dirac $\delta_{x_0}(A)=1$ se $x_0\in A$, $0$ altrimenti; misura discreta $\mu=\sum_{i\in I}\alpha_i\delta_{x_i}$, $\mu(A)=\sum_{x_i\in A}\alpha_i$.

## Intuizione
La σ-additività è ciò che permette di passare al limite; la sola additività non basta: su $\mathbb N$ con l'algebra finiti/cofiniti, $\mu(A)=\sum_{m\in A}2^{-m}$ per $A$ finito e $+\infty$ altrimenti è additiva ma $\mu(\mathbb N)=+\infty\ne\sum_m 2^{-m}$ (esempio della lezione 2).

## Come si usa
Esempi base: misura che conta ($\operatorname{card}A$), Dirac, misure discrete; se $X$ è numerabile con $\mathcal P(X)$ ogni misura si assegna sui punti. Lo spazio di probabilità è uno spazio di misura di massa 1.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 2; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione02(09-03-23) (2).pdf` (lezione 2, pp. 4-13).
- **Analisi funzionale** (triennale): cap. 3 "Richiami di teoria della misura" (Def. 3.1-3.2, senza dimostrazioni): spazio di misura $(M,\mathcal M,\mu)$, finito se $\mu(M)<\infty$, **$\sigma$-finito** se $M=\bigcup_nA_n$ con $\mu(A_n)<\infty$; insiemi $\mu$-trascurabili e proprietà $\mu$-quasi ovunque; misura prodotto (Teor. 3.9), di Lebesgue (Teor. 3.10) e del conteggio (Teor. 3.11). La $\sigma$-finitezza è l'ipotesi per $L^p(M)'\cong L^q(M)$ e per gli operatori integrali su $L^2$ del prodotto. Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (pp. 22-27).

## Prerequisiti
- [[Sigma-algebra]]: dominio della misura

## Porta a
- [[Continuità della misura]]: conseguenza della sigma-additività
- [[Misura di Lebesgue]]: estensione da un'algebra
- [[Integrale di Lebesgue]]: integrale rispetto a mu
- [[Misura immagine]]: trasporto della misura
- [[Spazio di probabilità]]: misura finita di massa 1
- [[Duale degli spazi Lp]]: la σ-finitezza dà Lp' = Lq (Analisi funzionale)
- [[Spazi Lp]]: spazi di funzioni p-integrabili su (M, 𝓜, µ) (Analisi funzionale)

## Collegati
- [[Delta di Dirac]]: misura di Dirac
