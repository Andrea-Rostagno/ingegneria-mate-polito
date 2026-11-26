---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [explosion, tempo di esplosione, non esplosività, explosive CTMC]
tags: [competenza, area/probabilita]
---

# Esplosione di una CTMC

> Fenomeno per cui una CTMC compie infiniti salti in un tempo finito; va escluso prima di usare Kolmogorov, $\pi Q=0$ e i teoremi limite.

## Definizione / enunciato
Con $\tau^{(m)}$ permanenze lungo la embedded, $T_\infty=\lim_m T_m=\sum_{i\ge0}\tau^{(i)}$. La CTMC è **esplosiva** se $\mathbb P_x(T_\infty<\infty)>0$ per qualche $x$. Dopo $T_\infty$ la costruzione non definisce il processo: si può usare uno stato cimitero $\Delta$ (processo minimale), ripartire da una legge $\nu$, ecc.

**Lemma.** Se $u_n\sim\mathrm{Exp}(\lambda_n)$ indipendenti: $\mathbb P(\sum u_n<\infty)=1\iff\sum 1/\lambda_n<\infty$, altrimenti la probabilità è 0.
**Risultati.**
1. Dato $(Y_m)$, si esplode q.c. se e solo se $\sum_m 1/\lambda(Y_m)<\infty$.
2. Tassi limitati ($\lambda(x)\le K$) $\Rightarrow$ non esplosiva; spazio finito $\Rightarrow$ non esplosiva.
3. Esplosiva $\Rightarrow$ embedded transiente (equivalente: embedded ricorrente $\Rightarrow$ non esplosiva).
4. Embedded transiente **e** una distribuzione $\gamma$ con $\gamma Q=0$ $\Rightarrow$ esplosiva.

## Formule chiave
$$\mathbb E\Big[\sum_n u_n\Big]=\sum_n\frac1{\lambda_n},\qquad \text{esplosione}\iff\sum_{m\ge0}\frac1{\lambda(Y_m)}<\infty .$$

## Intuizione
Se l'embedded torna infinite volte in $x_0$ la serie contiene infiniti termini $1/\lambda(x_0)$ e diverge. Il punto 4 è per assurdo: senza esplosione l'embedded transiente renderebbe la CTMC transiente, ma $\gamma$ sarebbe stazionaria e la renderebbe ricorrente positiva.

## Come si usa
- Nascita pura $\lambda(n)=\kappa n^2$: $\sum 1/(\kappa(m+1)^2)<\infty$, esplode. Es. K(a) $q(i,i+1)=2^i$: esplode.
- $q(x,x\pm1)=x$: tassi illimitati ma $Y_n\le x_0+n$, $\sum 1/(2(x_0+n))=\infty$, non esplode.
- Nascita-morte $2\cdot3^j$ / $3^j$ (lezione 14) ed es. M: embedded transiente e $M<\infty$, quindi esplosive. Il programma (argomento 5) chiede proprio perché una nascita-morte con embedded transiente e $M<\infty$ esplode.
- Es. L: embedded ricorrente nulla, quindi nessuna esplosione.

Il `.tex` scrive il tempo di esplosione $\zeta=\sum H_n$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 5. Fonti: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10), `magistrale/Processi stocastici/Lezione_11_27_10.pdf` (lezione 11, criteri), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13, punto 4), `riassunto_del_corso.tex` §Catene di Markov a tempo continuo, `topics_2025_26.pdf` (argomento 5), `suggested_exercises_CTMC.pdf` (es. G, J, K, L, M).

## Prerequisiti
- [[Catena embedded]]: permanenze lungo la traiettoria embedded
- [[Catena di Markov a tempo continuo]]: infiniti salti in tempo finito

## Porta a
- [[Equazioni di Kolmogorov]]: valgono per catene non esplosive
- [[Criterio di Foster-Lyapunov di non esplosività]]: esclude infiniti salti in tempo finito

## Collegati
- [[Catena di nascita e morte continua]]: criterio di esplosione per nascita-morte
- [[Misure stazionarie di CTMC ed embedded]]: embedded transiente con stazionaria implica esplosione
