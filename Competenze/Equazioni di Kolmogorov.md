---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Kolmogorov backward and forward equations, Kolmogorov equations, equazioni all'indietro e in avanti, forward equation, backward equation, "P_t = e^{Qt}"]
tags: [competenza, area/probabilita]
---

# Equazioni di Kolmogorov

> Equazioni differenziali che, partendo dai tassi $Q$, determinano le probabilità di transizione $P_t$ di una CTMC non esplosiva.

## Definizione / enunciato
Sia $p_t(x,y)=\mathbb P(X_t=y\mid X_0=x)$, $P_t=(p_t(x,y))$. Vale Chapman-Kolmogorov $p_{s+t}(x,y)=\sum_k p_s(x,k)p_t(k,y)$, cioè $P_{t+h}=P_tP_h=P_hP_t$. Con $P_0'=Q$ segue, per $S$ finito:
$$P_t'=P_tQ\ \ (\text{forward}),\qquad P_t'=QP_t\ \ (\text{backward}).$$
**$S$ infinito.** Se la CTMC è **non esplosiva** le equazioni in componenti valgono e le serie convergono. Nel caso esplosivo la backward segue ancora da Chapman-Kolmogorov ma la soluzione non è unica; la forward non descrive più $p_t$ e le serie possono divergere.
**Teorema.** Per una CTMC non esplosiva $P_t=e^{Qt}=\sum_{k\ge0}t^kQ^k/k!$.

## Formule chiave
$$p_t'(x,y)=\sum_{k\ne y}p_t(x,k)q(k,y)-p_t(x,y)\lambda(y)\qquad(\text{forward})$$
$$p_t'(x,y)=\sum_{k\ne x}q(x,k)p_t(k,y)-\lambda(x)p_t(x,y)\qquad(\text{backward})$$

## Intuizione
La forward condiziona sull'ultimo salto prima di $t$ (cosa entra ed esce da $y$), la backward sul primo salto dopo 0. In dimensione 1, $p'=qp$ dà $p_t=p_0e^{qt}$: l'esponenziale di matrice è la stessa idea.

## Come si usa
- Catena a due stati $Q=\begin{pmatrix}-\alpha&\alpha\\\beta&-\beta\end{pmatrix}$: $p_t(1,1)=\frac{\beta}{\alpha+\beta}+\frac{\alpha}{\alpha+\beta}e^{-(\alpha+\beta)t}$ (lezione 13).
- Es. D: $P_t=e^{Qt}$ calcolata con software, $p_2(2,1)=\tfrac35-\tfrac35e^{-10}$.
- Es. C: Chapman-Kolmogorov con passo 0.3 dà $\mathbb P(X_{0.6}=C\mid X_0=A)=0.31$; in alternativa $X_{0.3n}$ è una DTMC e $\mathbb P(X_{0.9}=C\mid X_0=A)=(P^3)_{1,3}=0.371$.
- Derivando $\pi P_t=\pi$ si ottiene $\pi Q=0$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 6 ("equazioni di Kolmogorov e connessioni con la distribuzione stazionaria"). Fonti: `magistrale/Processi stocastici/Lezione_11_27_10.pdf` (lezione 11, derivazione), `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12, $e^{Qt}$), `riassunto_del_corso.tex` §Equazioni di Kolmogorov, `suggested_exercises_CTMC.pdf` (es. C, D, E).

## Prerequisiti
- [[Equazioni di Chapman-Kolmogorov]]: derivazione nel limite $h$ piccolo
- [[Generatore di una CTMC]]: coefficienti delle equazioni differenziali
- [[Esplosione di una CTMC]]: valgono per catene non esplosive

## Porta a
- [[Distribuzione stazionaria di una CTMC]]: stazionarietà equivale a $\pi Q=0$
- [[Distribuzione limite di una CTMC]]: evoluzione nel tempo di $p_t$

## Collegati
- [[Esponenziale di una matrice]]: soluzione $P_t=e^{Qt}$ su spazio finito
