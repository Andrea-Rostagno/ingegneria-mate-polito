---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["thinning", "splitting", "scomposizione di un processo di Poisson"]
tags: [competenza, area/probabilita]
---

# Thinning di Poisson

> Classificando a caso e in modo indipendente gli arrivi di un Poisson, si ottengono processi di Poisson indipendenti, uno per tipo.

## Definizione / enunciato
Sia $N$ Poisson di tasso $\lambda$. Ogni arrivo ha un tipo $Y_i\in\{1,\dots,k\}$, con $Y_i$ i.i.d. di legge $\mathbb P(Y_i=j)=p_j$ e indipendenti da $N$. Sia
$$N_j(t)=\sum_{i=1}^{N(t)}\mathbf 1\{Y_i=j\}.$$
**Teorema.** I processi $(N_j(t))_{t\ge0}$, $j=1,\dots,k$, sono processi di Poisson **indipendenti** di tassi $\lambda p_j$.

## Formule chiave
Schema della prova ($k=2$, $p_1=p$):
$$\mathbb P[N_1(t)-N_1(s)=n,\ N_2(t)-N_2(s)=m]=e^{-\lambda(t-s)}\frac{(\lambda(t-s))^{m+n}}{(m+n)!}\binom{m+n}{n}p^n(1-p)^m$$
$$=e^{-\lambda p(t-s)}\frac{(\lambda p(t-s))^n}{n!}\cdot e^{-\lambda(1-p)(t-s)}\frac{(\lambda(1-p)(t-s))^m}{m!}.$$

## Intuizione
La probabilità congiunta si fattorizza nel prodotto di due Poisson. Le due marginali sono quindi Poisson e indipendenti, anche se nascono dallo stesso flusso.

## Come si usa
- Esempio controintuitivo (lezione 4): clienti Poisson con tasso 100 al giorno, a ciascuno un buono di tipo 1 o 2 con probabilità $1/2$. Sapere quanti buoni di tipo 1 sono stati dati **non cambia** il numero atteso di buoni di tipo 2, che resta $\lambda\cdot\frac12$ per giorno, perché i due flussi sono indipendenti.
- Thinning con probabilità dipendente dal tempo: dà un Poisson non omogeneo, che è la tecnica di simulazione.
- Nelle reti di code serve a instradare i clienti con probabilità fisse.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 4-5 ("Thinning", "Thinning, a sketch of the proof", "Thinning, a counter-intuitive example"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Processo di Poisson; argomento 2 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_04_30_09.pdf` (lezione 4), `magistrale/Processi stocastici/Lezione_05_06_10.pdf` (lezione 5); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Processo di Poisson.

## Prerequisiti
- [[Processo di Poisson]]: classificazione indipendente di ogni arrivo

## Porta a
- [[Processo di Poisson non omogeneo]]: simulazione tramite thinning non omogeneo
- [[Rete di Jackson]]: instradamento probabilistico dei clienti

## Collegati
- [[Sovrapposizione di processi di Poisson]]: operazioni inverse: separare e unire flussi
