---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [limit distribution CTMC, convergenza alla stazionaria, convergence to stationary distribution CTMC]
tags: [competenza, area/probabilita]
---

# Distribuzione limite di una CTMC

> Per una CTMC irriducibile con distribuzione stazionaria le probabilità di transizione convergono a $\pi$, senza bisogno di ipotesi di aperiodicità.

## Definizione / enunciato
**Lemma (niente periodicità).** Se $(X_t)$ è irriducibile, allora $p_t(i,j)>0$ per ogni $i,j$ (anche $i=j$) e ogni $t>0$.
**Teorema.** Se una CTMC è irriducibile e ha distribuzione stazionaria $\pi$, allora per ogni $i,j\in S$
$$\lim_{t\to\infty}p_t(i,j)=\pi(j).$$
**Attenzione:** per sapere che $\gamma$ è stazionaria non basta $\gamma Q=0$, $\sum\gamma=1$: serve anche la non esplosività.

## Formule chiave
Prova del lemma (caso non esplosivo), con un cammino $i=i_0,\dots,i_k=j$ di $r(i_n,i_{n+1})>0$:
$$p_t(i,j)\ge\prod_{n=0}^{k-1}\mathbb P\Big(\tau_n<\frac tk\Big)r(i_n,i_{n+1})\cdot\mathbb P(\tau_k>t)>0 .$$
Esempio a due stati:
$$P_t=e^{Qt}=\begin{pmatrix}\frac{\beta}{\alpha+\beta}+\frac{\alpha}{\alpha+\beta}e^{-(\alpha+\beta)t}&\frac{\alpha}{\alpha+\beta}(1-e^{-(\alpha+\beta)t})\\ \frac{\beta}{\alpha+\beta}(1-e^{-(\alpha+\beta)t})&\frac{\alpha}{\alpha+\beta}+\frac{\beta}{\alpha+\beta}e^{-(\alpha+\beta)t}\end{pmatrix}\xrightarrow[t\to\infty]{}\begin{pmatrix}\pi(1)&\pi(2)\\\pi(1)&\pi(2)\end{pmatrix}.$$

## Intuizione
Gli esponenziali possono essere corti quanto serve, quindi in ogni tempo $t>0$ si raggiunge ogni stato: non ci sono "orari" obbligati e la periodicità, unico ostacolo nel caso discreto, sparisce. La dimostrazione è identica a quella per DTMC, anzi più semplice.

## Come si usa
- Due stati: le righe di $P_t$ convergono a $\pi$, mentre la embedded ($P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$) è periodica e non ha limite.
- Es. H: catena finita, irriducibile, non esplosiva con $\pi=(1/5,2/5,2/5)$, quindi $\lim_t\mathbb P(X_t=3\mid X_0=1)=2/5$; per la embedded $\lim_n\mathbb P(Y_n=3\mid Y_0=1)$ non esiste (periodica).

## Nei corsi
- **Processi stocastici** (magistrale): argomento 7 ("convergenza alla distribuzione stazionaria"). Fonti: `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12, lemma di aperiodicità), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13, teorema ed esempio), `suggested_exercises_CTMC.pdf` (es. H). La dimostrazione del teorema è lasciata come esercizio nelle slide.

## Prerequisiti
- [[Distribuzione stazionaria di una CTMC]]: il limite coincide con $\pi$
- [[Equazioni di Kolmogorov]]: evoluzione nel tempo di $p_t$

## Porta a
- —

## Collegati
- [[Distribuzione limite di una DTMC]]: aperiodicità richiesta solo a tempo discreto
