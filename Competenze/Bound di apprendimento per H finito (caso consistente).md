---
tipo: competenza
area: data-ml
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["learning bound finite H consistent case", "caso consistente", "consistent hypothesis", "ipotesi consistente", "complessità campionaria per H finito", "sample complexity", "congiunzioni di letterali booleani", "conjunctions of boolean literals", "k-CNF", "k-term DNF"]
tags: [competenza, area/data-ml]
---

# Bound di apprendimento per H finito (caso consistente)

> Se l'insieme di ipotesi è finito e l'algoritmo restituisce sempre un'ipotesi senza errori sul campione, l'errore vero decresce come $\frac1m(\log|H|+\log\frac1\delta)$.

## Definizione / enunciato
**Teorema.** Sia $H$ un insieme finito di funzioni $\mathcal X\to\{0,1\}$ e $\mathcal A$ un algoritmo che, per ogni concetto target $c\in H$ e campione $S$, restituisce un'ipotesi **consistente** $h_S$, cioè $\hat R_S(h_S)=0$. Allora per ogni $\delta>0$, con probabilità almeno $1-\delta$,
$$R(h_S)\le\frac1m\Big(\log|H|+\log\frac1\delta\Big).$$

## Formule chiave
**Dimostrazione.** Per $\epsilon>0$ sia $H_\epsilon=\{h\in H:R(h)>\epsilon\}$. Per union bound
$$\Pr\big[\exists h\in H_\epsilon:\hat R_S(h)=0\big]\le\sum_{h\in H_\epsilon}\Pr[\hat R_S(h)=0]\le\sum_{h\in H_\epsilon}(1-\epsilon)^m\le|H|(1-\epsilon)^m\le|H|e^{-m\epsilon},$$
e si pone $\delta=|H|e^{-m\epsilon}$. Complessità campionaria: $m\ge\frac1\epsilon\big(\log|H|+\log\frac1\delta\big)$.

## Intuizione
Un'ipotesi "cattiva" (errore $>\epsilon$) sopravvive a $m$ esempi indipendenti con probabilità $(1-\epsilon)^m$; le ipotesi sono al più $|H|$. L'errore è lineare in $1/m$ e solo logaritmico in $|H|$; $\log_2|H|$ è il numero di bit per rappresentare $H$. Il bound è lasco per $|H|$ grande e inutile per $H$ infinito.

## Come si usa
**Congiunzioni di letterali booleani** con al più $n$ variabili: $|H|=|C_n|=3^n$, quindi $m\ge\frac1\epsilon\big((\log3)n+\log\frac1\delta\big)$; con $\delta=0.02$, $\epsilon=0.1$, $n=10$ si ottiene $m\ge149$. Algoritmo: partire da $x_1\wedge\bar x_1\wedge\dots\wedge x_n\wedge\bar x_n$ ed eliminare i letterali incompatibili con gli esempi positivi (costo $O(n)$ per esempio). **k-term DNF**: $|H|=3^{nk}$, complessità campionaria polinomiale ma non efficientemente PAC-apprendibile se $RP\neq NP$; la classe più grande delle **k-CNF** invece lo è, riducendosi alle congiunzioni con $(2n)^k$ nuove variabili.

## Nei corsi
- **Matematica per l'AI** (triennale): Fonti: `triennale/ANNO 3/matematica AI/MIA_01W.pdf` (p. 50-56, 69-71); `FML.pdf` §2.2.

## Prerequisiti
- [[Modello PAC]]: il bound dà la complessità campionaria PAC
- [[Disuguaglianza di Hoeffding]]: union bound e inversione della stima

## Porta a
- [[Bound di apprendimento per H finito (caso inconsistente)]]: quando nessuna ipotesi è consistente
- [[Empirical risk minimization]]: nel caso realizzabile l'algoritmo può essere ERM

## Collegati
- [[Dimensione VC]]: sostituisce $\log|H|$ quando $H$ è infinito
