---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: [CTMC, continuous-time Markov chain, costruzioni equivalenti, definizioni equivalenti, matrice dei tassi di transizione, transition rate matrix, uniformizzazione]
tags: [competenza, area/probabilita]
---

# Catena di Markov a tempo continuo

> Processo a tempo continuo su spazio discreto senza memoria: resta in ogni stato un tempo esponenziale e poi salta; è il modello base per code, popolazioni e sistemi a stati.

## Definizione / enunciato
$(X_t)_{t\ge0}$ su $S$ discreto è una CTMC se per ogni $t,s\ge0$, $x\in S$:
$$\mathbb P(X_{t+s}=x\mid\mathcal F^X_t)=\mathbb P(X_{t+s}=x\mid X_t),$$
e si assume sempre l'omogeneità $\mathbb P(X_{t+s}=y\mid X_t=x)=\mathbb P(X_s=y\mid X_0=x)$. Detto $\tau_x=\inf\{t:X_t\ne x\}$ il tempo di permanenza, la catena è **regolare** se $\mathbb E_x[\tau_x]>0$ per ogni $x$ (sempre sottinteso).

**Costruzione 1.** Una DTMC $(Y_n)$ con $r(i,i)=0$ (salvo stati assorbenti) dà la sequenza degli stati; in $Y_m$ si resta $\tau^{(m)}\sim\mathrm{Exp}(\lambda(Y_m))$, indipendente da tutto il resto.
**Costruzione 2.** Arrivati in $i$, si pone una sveglia $\tau_{ij}\sim\mathrm{Exp}(q(i,j))$, con $q(i,j)=\lambda(i)r(i,j)$, su ogni $j$; si salta allo stato della prima sveglia che suona.
**Teorema.** Le due costruzioni danno la stessa legge del processo.

## Formule chiave
$$\min_j\tau_{ij}\sim\mathrm{Exp}\Big(\sum_{j\ne i}q(i,j)\Big)=\mathrm{Exp}(\lambda(i)),\qquad \mathbb P(\text{vince }y)=\frac{q(i,y)}{\lambda(i)}=r(i,y).$$

## Intuizione
La costruzione 1 è markoviana per l'assenza di memoria: sapendo $X_t=x$, il tempo residuo in $x$ è ancora $\mathrm{Exp}(\lambda(x))$ e il prossimo stato non dipende dalla durata. Tempo di permanenza e stato successivo sono indipendenti.

## Come si usa
Si modella un sistema scegliendo lo spazio degli stati e i tassi. Es. A (taxi, arrivi Poisson di tasso 2 e 3): $S=\{(n,m):\min\{n,m\}=0\}$, $q((n,0),(n+1,0))=2$, $q((n,0),(n-1,0))=3$, ecc. Es. B (banca con 5 sportelli, clienti impazienti): $q(n,n+1)=30$ e $q(n,n-1)=6n$ per $n\le5$, $30+2(n-5)$ per $n>5$. Vale anche la proprietà di Markov forte rispetto ai tempi d'arresto (lezione 13).

## Nei corsi
- **Processi stocastici** (magistrale): argomento 5 del programma ("definizioni equivalenti ed esplosioni"). Fonti: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10), `magistrale/Processi stocastici/Lezione_11_27_10.pdf` (lezione 11), `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13, Markov forte), `riassunto_del_corso.tex` §Catene di Markov a tempo continuo, `suggested_exercises_CTMC.pdf` (es. A, B).
- **Dinamiche su network** (magistrale): definita da una matrice dei tassi $\Lambda\ge0$ con $\Lambda_{ii}=0$, $\omega=\Lambda\mathbb 1$, $\omega^*=\max_i\omega_i$, con tre definizioni equivalenti: (1) attesa $\mathrm{Exp}(\omega_i)$ e salto con $P_{ij}=\Lambda_{ij}/\omega_i$; (2) orologi di Poisson indipendenti di tasso $\Lambda_{ij}$ sugli archi; (3) un solo orologio di tasso $\omega^*$ e catena dei salti con $\bar P_{ij}=\Lambda_{ij}/\omega^*$, $\bar P_{ii}=1-\sum_{j\neq i}\bar P_{ij}$, $X(t)=U(N_t)$. Leggi marginali $\frac{d}{dt}\pi(t)=-L'\pi(t)$ con $L=D-\Lambda$ laplaciano; stazionaria $L'\bar\pi=0$, stazionaria anche per $\bar P$; in genere $\bar\pi\neq\pi$ (stazionaria di $P=D^{-1}\Lambda$), con $\bar\pi_i\propto\pi_i/\omega_i$. Teorema: se $\mathcal G_\Lambda$ è fortemente connesso, $\bar\pi$ è unica, $\pi(t)\to\bar\pi$ e vale il teorema ergodico, **senza** ipotesi di aperiodicità; ritorno $\mathbb E_i[T_i^+]=1/(\omega_i\bar\pi_i)$. È il modello dei sistemi a interazione a coppie (epidemie, votante) sullo spazio delle configurazioni. Fonti: `magistrale/Dinamiche su network/slide/Slides-7-MarkovChains+RandomWalks.pdf` (pp. 45-49, 56).

## Prerequisiti
- [[Corsa di esponenziali]]: salto al primo orologio esponenziale
- [[Catena di Markov a tempo discreto]]: analogo a tempo continuo

## Porta a
- [[Generatore di una CTMC]]: derivata in zero delle probabilità
- [[Esplosione di una CTMC]]: infiniti salti in tempo finito
- [[Sistemi di interazione a coppie]]: CTMC sullo spazio delle configurazioni $\mathcal A^{\mathcal V}$ (Dinamiche su network)
- [[Laplaciano di un grafo]]: $\frac{d}{dt}\pi=-L'\pi$ con $L=D-\Lambda$ (Dinamiche su network)

## Collegati
- [[Processo di Poisson]]: il Poisson è la CTMC più semplice ($r(i,i+1)=1$, $\tau_i\sim\mathrm{Exp}(\lambda)$)
