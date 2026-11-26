---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Matematica per l'AI]
livello: [magistrale, triennale]
aliases: ["strong Markov property", "rigenerazione"]
tags: [competenza, area/probabilita]
---

# Proprietà di Markov forte

> La catena riparte da capo, indipendentemente dal passato, anche a un tempo aleatorio, purché sia un tempo d'arresto.

## Definizione / enunciato
**Teorema.** Se $\tau$ è un tempo d'arresto, per ogni $n$ finito
$$\mathbb P(X_{\tau+1}=y\mid X_\tau=x,\ \tau=n,\ A)=\mathbb P(X_1=y\mid X_0=x)=p(x,y)$$
per ogni evento $A\in\mathcal F_\tau$.

**Corollario.** Se $\tau$ è q.c. finito, $\mathbb P(X_{\tau+1}=y\mid X_\tau=x,A)=p(x,y)$ per ogni $A\in\mathcal F_\tau$.

Forma del `.tex`: condizionatamente a $\{T<\infty,X_T=i\}$, il processo dopo $T$ ha la legge della catena che parte da $i$ ed è indipendente dal passato fino a $T$.

## Formule chiave
Applicazione ai ritorni ($T_y^{(k)}$ è il tempo della $k$-esima visita a $y$):
$$\mathbb P_y(T_y^{(k+1)}<\infty)=\mathbb P_y(T_y<\infty)\,\mathbb P_y(T_y^{(k)}<\infty)=\rho_{yy}^{k+1}.$$

## Intuizione
Ogni ritorno a uno stato è un "nuovo inizio" (rigenerazione). Senza l'ipotesi di tempo d'arresto la tesi è falsa. Per $\tau=\min\{n\ge0: X_{n+1}=y\}$, che guarda il futuro, si ha $\mathbb P(X_{\tau+1}=y\mid X_\tau=x)=1\ne p(x,y)$.

## Come si usa
- Dimostrare che gli stati ricorrenti sono visitati infinite volte e quelli transienti un numero finito di volte.
- Ricorrenza e raggiungibilità: il numero di ritorni a $x$ prima di visitare $y$ è geometrico.
- Visite a uno stato come processo di rinnovo, da cui la frequenza asintotica.
- Esercizio A (`suggested_exercises_DTMC.pdf`): con $R_2=\max\{n:X_n=2\}$, $\mathbb P(X_{R_2+1}=4\mid X_{R_2}=2,R_2=8)$ **non** si calcola con $p(2,4)$, perché $R_2$ non è un tempo d'arresto.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 6 ("Regeneration", "The strong Markov property", "Back to recurrence and transience"); la versione per CTMC è nella lezione 13; `magistrale/Processi stocastici/riassunto_del_corso.tex` § Catene di Markov a tempo discreto; argomento 3 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_06_07_10.pdf` (lezione 6), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Catene di Markov a tempo discreto.
- **Matematica per l'AI** (triennale): enunciato negli appunti di De Gregorio: $(X_n)_{n\ge0}$ Markov$(\lambda,P)$ e $T$ tempo d'arresto; se $T<\infty$ e $X_T=i$, allora $(X_{T+n})_{n\ge0}$ è Markov$(\delta_i,P)$, indipendentemente da $X_0,\dots,X_T$. Fonti: `triennale/ANNO 3/matematica AI/De Gregorio Mia 2 (1).pdf` (p. 6).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: proprietà di Markov estesa
- [[Tempo d'arresto]]: istante aleatorio che non guarda il futuro

## Porta a
- [[Ricorrenza e transienza]]: ritorni successivi sono indipendenti
- [[Frequenza asintotica per DTMC]]: cicli tra ritorni sono i.i.d.

## Collegati
- [[Proprietà di Markov forte del moto browniano]]: versioni per catene e per browniano
