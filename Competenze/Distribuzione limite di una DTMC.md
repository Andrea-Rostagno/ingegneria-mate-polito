---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["convergence to stationary distribution", "limit distribution", "coupling di catene"]
tags: [competenza, area/probabilita]
---

# Distribuzione limite di una DTMC

> Per una catena irriducibile, aperiodica e con distribuzione stazionaria, $p^{(n)}(x,y)\to\pi(y)$ da ogni stato iniziale; la prova usa il coupling.

## Definizione / enunciato
$\alpha$ è una **distribuzione limite** se $\lim_n\mathbb P_y(X_n=x)=\alpha(x)$ per ogni $x$, qualunque sia lo stato iniziale. Ogni distribuzione limite è stazionaria (per convergenza dominata, $\alpha=\alpha P$), ma non viceversa: serve l'aperiodicità.

**Teorema.** Se la DTMC è irriducibile, aperiodica e ha una distribuzione stazionaria $\pi$, allora
$$\lim_{n\to\infty}p^{(n)}(x,y)=\pi(y)\qquad\forall x,y\in S.$$

## Formule chiave
Prova per **coupling**. Si prendono $X_0=x$ e $Y_0\sim\pi$ indipendenti, $\tau=\min\{n\ge1:X_n=Y_n\}$, e $\hat X_n=X_n$ per $n<\tau$, $\hat X_n=Y_n$ per $n\ge\tau$. $\hat X$ è ancora una DTMC con matrice $P$, quindi
$$|p^{(n)}(x,y)-\pi(y)|\le\mathbb P(\hat X_n\ne Y_n)=\mathbb P(\tau>n)\le\mathbb P(T_{(x,x)}>n)\to0.$$
La catena prodotto è irriducibile (grazie all'aperiodicità) e ha stazionaria $\tilde\pi(x,x')=\pi(x)\pi(x')$, quindi è ricorrente.
Per un coupling $(X,Y)$ di $\mu,\nu$ vale $|\mu(y)-\nu(y)|\le\mathbb P(X\ne Y)$.

## Intuizione
Due copie della catena, una partita da $x$ e una in equilibrio, prima o poi si incontrano. Da quel momento sono indistinguibili, quindi la catena da $x$ «dimentica» il punto di partenza.

## Come si usa
- Taxi (lezione 9): la catena è aperiodica, quindi la probabilità limite di trovarsi in 1 coincide con la frazione di tempo, $76/221$.
- Durrett 1.14 (nota in `suggested_exercises_DTMC.pdf`): determinare per ogni $x,y$ se $\lim_n\mathbb P_x(X_n=y)$ esiste.
- Va distinta dalla frequenza asintotica, che vale anche nel caso periodico.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 9 ("Limit distributions", "Couplings", "Coupling of DTMCs"; la distanza in variazione totale è marcata "Extra"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Distribuzioni stazionarie e limiti; argomento 4 di `magistrale/Processi stocastici/topics_2025_26.pdf`. Fonti principali: `magistrale/Processi stocastici/Lezione_09_20_10.pdf` (lezione 9); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Distribuzioni stazionarie e limiti.

## Prerequisiti
- [[Periodo di uno stato]]: richiede catena aperiodica
- [[Esistenza e unicità della distribuzione stazionaria]]: il limite coincide con pi

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- [[Distribuzione limite di una CTMC]]: aperiodicità richiesta solo a tempo discreto
- [[Frequenza asintotica per DTMC]]: convergenza in media contro convergenza puntuale
