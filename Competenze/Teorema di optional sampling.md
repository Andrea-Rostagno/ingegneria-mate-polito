---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Doob's optional sampling theorem, optional sampling, campionamento opzionale]
tags: [competenza, area/probabilita]
---

# Teorema di optional sampling

> La proprietà di martingala (sub, super) vale anche tra due tempi d'arresto, purché siano limitati da una costante.

## Definizione / enunciato
**Tempo discreto.** Sia $(X_n)$ martingala, sub- o supermartingala rispetto a $(\mathcal F_n)$ e siano $\sigma,\tau$ tempi d'arresto con, q.c.,
$$\sigma\le\tau\le C,\qquad C\in\mathbb R \text{ costante}.$$
Allora $\mathbb E[|X_\tau|],\mathbb E[|X_\sigma|]<\infty$ e
- martingala: $\mathbb E[X_\tau\mid\mathcal F_\sigma]=X_\sigma$ q.c.;
- submartingala: $\mathbb E[X_\tau\mid\mathcal F_\sigma]\ge X_\sigma$ q.c.;
- supermartingala: $\mathbb E[X_\tau\mid\mathcal F_\sigma]\le X_\sigma$ q.c.

**Tempo continuo** (lezione 22): stesso enunciato per processi con traiettorie càdlàg q.c.

## Formule chiave
Passo centrale della prova (caso sub), per $A\in\mathcal F_\sigma$:
$$\mathbb E[\mathbf 1_A X_\tau]=\sum_{i=0}^{C}\mathbb E[\mathbf 1_{A\cap\{\sigma=i\}}X_{C\wedge\tau}]\ \ge\ \sum_{i=0}^{C}\mathbb E[\mathbf 1_{A\cap\{\sigma=i\}}X_{i\wedge\tau}]=\mathbb E[\mathbf 1_A X_\sigma],$$
usando che $X_{n\wedge\tau}$ è submartingala e $A\cap\{\sigma=i\}\in\mathcal F_i$. Super e martingala seguono con $-X$.

## Intuizione
Senza limitazione il risultato è falso: per la passeggiata simmetrica e $T=\inf\{n\ge i:X_n=5\}$ si ha $\mathbb E[X_T\mid\mathcal F_i]=5\ne X_i$. Con tempi limitati il processo arrestato "vede" solo un numero finito di passi e la martingalità si trasporta.

## Come si usa
In tempo continuo si approssimano $\tau,\sigma$ dall'alto con tempi sulla griglia $\{k/n\}$ e si usa la continuità a destra. È lo strumento di base delle disuguaglianze: con $\tau=\inf\{n:X_n\ge a\}$ e il tempo limitato $\tau\wedge n\le n$ si dimostrano la massimale di Doob e Kolmogorov; nel criterio di Foster-Lyapunov si applica a $n\wedge\tau$; nella formula di Dynkin si usa a $\tau\wedge t$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 12. Il `.tex` lo enuncia solo per martingale con $S\le T$ limitati; le slide danno i tre casi e la versione a tempo continuo. Fonti: `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18), `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `riassunto_del_corso.tex` §Arresto opzionale.

## Prerequisiti
- [[Processo arrestato]]: martingala arrestata resta martingala
- [[Martingala]]: proprietà di martingala ai tempi d'arresto

## Porta a
- [[Teorema di optional stopping]]: corollario con ipotesi sul tempo
- [[Disuguaglianza massimale di Doob]]: arresto al primo superamento della soglia
- [[Disuguaglianza di Kolmogorov per supermartingale]]: arresto al primo superamento della soglia
- [[Criterio di Foster-Lyapunov per la ricorrenza positiva]]: arresto al tempo limitato n e tau
