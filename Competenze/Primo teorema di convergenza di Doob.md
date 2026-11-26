---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [first Doob's convergence theorem, martingale convergence theorem, teorema di convergenza delle martingale, convergenza quasi certa]
tags: [competenza, area/probabilita]
---

# Primo teorema di convergenza di Doob

> Una supermartingala con parte negativa limitata in media converge quasi certamente a un limite integrabile.

## Definizione / enunciato
**Tempo discreto.** Sia $(X_n)$ supermartingala rispetto a $(\mathcal F_n)$ con
$$\sup_n\mathbb E[X_n^-]<\infty.$$
Allora esiste $X$ $\mathcal F$-misurabile con $\mathbb E[|X|]<\infty$ e $\lim_n X_n=X$ q.c.
Per una **submartingala** l'ipotesi è $\sup_n\mathbb E[X_n^+]<\infty$ (si applica il teorema a $-X$).

**Tempo continuo** (lezione 22): stesso enunciato per supermartingale con traiettorie càdlàg e $\sup_t\mathbb E[X_t^-]<\infty$; prova sulle griglie diadiche $\{k/2^n\}$ e continuità a destra.

## Formule chiave
$$\mathbb E[X_n^+]=\mathbb E[X_n]+\mathbb E[X_n^-]\le\mathbb E[X_0]+\sup_n\mathbb E[X_n^-]\ \Rightarrow\ \sup_n\mathbb E[|X_n|]<\infty,$$
$$\mathbb E[|X|]\le\liminf_n\mathbb E[|X_n|]<\infty\quad\text{(Fatou).}$$

## Intuizione
Se il limite non esistesse ci sarebbero $a<b$ con $\liminf X_n<a<b<\limsup X_n$: la traiettoria attraverserebbe $[a,b]$ infinite volte, ma la disuguaglianza di upcrossing dice che gli attraversamenti sono finiti q.c. In particolare **ogni supermartingala non negativa converge q.c.**

## Come si usa
- Criterio di Foster-Lyapunov per la ricorrenza: $V(X_{n\wedge\tau})$ è supermartingala non negativa, quindi converge e resta in un insieme di sottolivello finito; per irriducibilità $\tau<\infty$.
- Non dà convergenza in $L^1$: la passeggiata simmetrica da $X_0=5$ arrestata in $0$ converge q.c. a $0$ ma $\mathbb E[X_{n\wedge T}]=5$.
- Esercizio P (browniano): se $f(W_t)$ con $f\ge0$ è supermartingala, allora $f$ è costante.
- Esercizio "Invented by you" B: convergenza q.c. di un processo a valori in $[0,1]$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 13. Il `.tex` dice solo "supermartingala limitata in $L^1$ in modo appropriato"; l'ipotesi precisa $\sup_n\mathbb E[X_n^-]<\infty$ è nelle slide. Fonti: `magistrale/Processi stocastici/Lezione_20_25_11.pdf` (lezione 20), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `riassunto_del_corso.tex` §Upcrossing, convergenza e disuguaglianze, `suggested_exercises_brownian_motion.pdf` (es. P).

## Prerequisiti
- [[Disuguaglianza di upcrossing]]: numero finito di attraversamenti

## Porta a
- [[Secondo teorema di convergenza di Doob]]: rafforza la convergenza quasi certa
- [[Legge forte dei grandi numeri per martingale]]: convergenza della serie martingala
- [[Criterio di Foster-Lyapunov per la ricorrenza]]: supermartingala non negativa converge
