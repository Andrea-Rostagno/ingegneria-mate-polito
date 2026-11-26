---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [stationary distribution CTMC, "pi Q = 0", distribuzione invariante di una CTMC]
tags: [competenza, area/probabilita]
---

# Distribuzione stazionaria di una CTMC

> Legge $\pi$ che resta invariata nel tempo ($X_0\sim\pi\Rightarrow X_t\sim\pi$); per catene non esplosive si trova risolvendo $\pi Q=0$.

## Definizione / enunciato
$\pi$ è stazionaria se è una distribuzione e $\sum_i\pi(i)p_t(i,j)=\pi(j)$ per ogni $j$ e $t\ge0$.
**Teorema.** Se la CTMC è **non esplosiva**, $\pi$ è stazionaria se e solo se $\pi Q=0$ e $\sum_x\pi(x)=1$.
**Esistenza e unicità.** Se la CTMC è irriducibile, $\pi$ esiste se e solo se gli stati sono ricorrenti positivi; in tal caso $\pi(j)>0$ per ogni $j$ ed è unica:
$$\pi(j)=\frac{1}{\mathbb E_j[T^c_j]\,\lambda(j)}\qquad(|S|\ge2).$$
**Corollario.** Una CTMC irriducibile su spazio finito ha un'unica stazionaria, con $\pi(j)>0$.

## Formule chiave
$$\pi Q=0\iff \sum_{i\ne j}\pi(i)q(i,j)=\pi(j)\lambda(j)\quad\forall j .$$

## Intuizione
$\pi Q=0$ è un bilancio globale: il flusso di probabilità che entra in $j$ uguaglia quello che esce. Derivando $\pi=\pi P_t$ con la forward si ha $\pi P_tQ=\pi Q=0$; viceversa con la backward $(\pi P_t)'=\pi QP_t=0$, quindi $\pi P_t=\pi P_0=\pi$.

## Come si usa
Schema: scrivere $Q$, risolvere $\pi Q=0$ con $\sum\pi=1$ (per nascita-morte conviene il bilancio dettagliato), poi **verificare la non esplosività**: nell'esempio $q(j,j+1)=2\cdot3^j$, $q(j,j-1)=3^j$ esiste $\gamma$ con $\gamma Q=0$, $\sum\gamma=1$, ma la catena esplode e $\gamma$ non è stazionaria.
- Lezione 12: $Q=\begin{pmatrix}-1/3&1/3&0\\0&-1/4&1/4\\1&0&-1\end{pmatrix}$ dà $\pi=(3/8,1/2,1/8)$.
- Due stati: $\pi=\big(\frac{\beta}{\alpha+\beta},\frac{\alpha}{\alpha+\beta}\big)$.
- Es. 4.14 (stampanti): $\pi=(1,10,50,250)/311$, frazione di tempo con due macchine attive $300/311\approx0.965$.
- Es. H: $\pi=(1/5,2/5,2/5)$.

## Nei corsi
- **Processi stocastici** (magistrale): argomenti 6 e 7. Fonti: `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13, formula con $\mathbb E_j[T^c_j]$), `magistrale/Processi stocastici/Lezione_14_04_11.pdf` (lezione 14, controesempio esplosivo), `riassunto_del_corso.tex` §Equazioni di Kolmogorov, `suggested_exercises_CTMC.pdf` (es. 4.14, H).

## Prerequisiti
- [[Equazioni di Kolmogorov]]: stazionarietà equivale a $\pi Q$ nullo
- [[Distribuzione stazionaria di una DTMC]]: estende $\pi=\pi P$ al continuo
- [[Ricorrenza e transienza di una CTMC]]: esiste se ricorrente positiva

## Porta a
- [[Misure stazionarie di CTMC ed embedded]]: lega le due stazionarie
- [[Teorema ergodico per CTMC]]: media temporale uguale a media in $\pi$
- [[Distribuzione limite di una CTMC]]: il limite coincide con $\pi$

## Collegati
- —
