---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["expected number of visits", "funzione di Green", "G(i,i)"]
tags: [competenza, area/probabilita]
---

# Criterio delle visite attese

> Uno stato è ricorrente se e solo se il numero atteso di ritorni è infinito, cioè se la serie $\sum_n p^{(n)}(y,y)$ diverge.

## Definizione / enunciato
Sia $N(y)=\sum_{n\ge1}\mathbf 1\{X_n=y\}$ il numero totale di visite a $y$. Allora $\mathbb E_x[N(y)]=\sum_{n\ge1}p^{(n)}(x,y)$ e
$$\mathbb E_x[N(y)]=\begin{cases}0&\rho_{xy}=0\\ \infty&\rho_{xy}>0,\ \rho_{yy}=1\\ \dfrac{\rho_{xy}}{1-\rho_{yy}}&\rho_{xy}>0,\ \rho_{yy}<1.\end{cases}$$
**Corollario.** $y$ è ricorrente se e solo se $\mathbb E_y[N(y)]=\infty$.

## Formule chiave
Trucco: se $X$ ha valori interi non negativi, $\mathbb E[X]=\sum_{i\ge1}\mathbb P(X\ge i)$. Quindi
$$\mathbb E_x[N(y)]=\sum_{k\ge1}\mathbb P_x(T_y^{(k)}<\infty)=\sum_{k\ge1}\rho_{xy}\rho_{yy}^{k-1}.$$
Nel `.tex` la serie è $G(i,i)=\sum_{n\ge0}p^{(n)}(i,i)$, che include $n=0$; il criterio non cambia.

## Intuizione
Si traduce una probabilità di ritorno, difficile da calcolare, in una serie di probabilità a $n$ passi, che si stimano con Chapman-Kolmogorov o Stirling.

## Come si usa
- Passeggiata aleatoria: $\sum_n p^{(2n)}(0,0)$ diverge se e solo se $p=1/2$.
- Es. D di `suggested_exercises_DTMC.pdf`: calcolare $\mathbb E_3[N(3)]$ ed $\mathbb E_4[N(4)]$ dal grafo, trovando $\rho_{yy}$ e usando $\rho_{yy}/(1-\rho_{yy})$.
- La formula serve anche a mostrare che una stazionaria $\pi$ con $\pi(y)>0$ rende $y$ ricorrente: $\mathbb E_\pi[N(y)]=\infty$.

## Nei corsi
- **Processi stocastici** (magistrale): Lezioni 6-7 ("Recurrence and expected number of visits", "Cute trick"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Classificazione degli stati (criterio tramite visite). Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6), `magistrale/Processi stocastici/Lezione_07_13_10.pdf` (lezione 7); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Classificazione degli stati.

## Prerequisiti
- [[Ricorrenza e transienza]]: caratterizza tramite numero atteso di visite
- [[Equazioni di Chapman-Kolmogorov]]: somma delle probabilità a n passi

## Porta a
- [[Ricorrenza della passeggiata aleatoria]]: serie delle probabilità di ritorno

## Collegati
- Nessuno.
