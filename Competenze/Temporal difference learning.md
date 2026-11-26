---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["TD learning", "TD(0)", "temporal difference", "differenza temporale", "TD error", "errore TD", "TD target", "bootstrapping nel reinforcement learning", "n-step TD", "n-step TD prediction"]
tags: [competenza, area/data-ml]
---

# Temporal difference learning

> Si aggiorna la stima del valore a ogni passo usando come target la ricompensa osservata più il valore stimato dello stato successivo (bootstrapping), invece di attendere la fine dell'episodio.

## Definizione / enunciato
Al posto dell'aggiornamento Monte Carlo $\hat V^\pi(s_t)\leftarrow\hat V^\pi(s_t)+\alpha[g_t-\hat V^\pi(s_t)]$, **TD(0)** usa
$$\hat V^\pi(s_t)\leftarrow\hat V^\pi(s_t)+\alpha\big[r_{t+1}+\gamma\hat V^\pi(s_{t+1})-\hat V^\pi(s_t)\big].$$
$r_{t+1}+\gamma\hat V^\pi(s_{t+1})$ è il **TD target**, $\delta_t=r_{t+1}+\gamma\hat V^\pi(s_{t+1})-\hat V^\pi(s_t)$ il **TD error**; usare una stima del valore nel target si chiama **bootstrapping**.

## Formule chiave
Il target è distorto, $\mathbb E[R_{t+1}+\gamma\hat V^\pi(S_{t+1})]\ne V^\pi(S_t)$, ma TD(0) è asintoticamente non distorto e ha varianza minore. **n-step TD**: target con $n$ ricompense e poi il valore stimato, $G_t^{(n)}=\sum_{\tau=1}^n\gamma^{\tau-1}R_{t+\tau}+\gamma^n\hat V(S_{t+n})$ (nella slide dell'aggiornamento l'esponente è stampato $n+1$, da verificare sul PDF).

## Intuizione
TD impara da sequenze incomplete e in ambienti continui, MC solo da episodi completi; TD sfrutta fortemente la proprietà di Markov. Esempio con due stati A e B, senza sconto, 8 episodi (A,0,B,0 e poi B,1 sei volte e B,0 una volta): $V(B)=6/8$ per entrambi; $V(A)=0$ con MC, $V(A)=6/8$ con TD(0), che stima l'MDP di massima verosimiglianza. Con approssimazione di funzione MC ha buone proprietà di convergenza mentre TD(0) potrebbe non convergere.

## Come si usa
Nell'albero di lookahead: MC campiona un cammino fino alla fine, TD guarda un solo passo e usa il bootstrapping, DP considera tutti i successori senza campionare. Il TD error è il segnale di base di Sarsa, Q-learning, TD(λ) e actor-critic.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): parte 2 della lezione 3, "Temporal Difference" e "Metodi di stima avanzati". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 41-44, 55).

## Prerequisiti
- [[Valutazione Monte Carlo di una policy]]: aggiornamento da cui si parte
- [[Equazione di Bellman]]: il TD target è un campione del suo membro destro

## Porta a
- [[TD(λ) e tracce di eleggibilità]]: media pesata dei target a $n$ passi
- [[Sarsa]]: controllo TD on-policy
- [[Q-learning]]: controllo TD off-policy
- [[Approssimazione della funzione valore]]: TD semi-gradiente

## Collegati
- [[Discesa stocastica del gradiente]]: aggiornamento con passo $\alpha$ su un campione
