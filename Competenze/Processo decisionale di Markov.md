---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Markov decision process", "MDP", "processo decisionale markoviano", "politica deterministica e stocastica", "action-value function", "funzione azione-valore", "Q-factor", "Q-fattore", "politica ottima di un MDP", "optimal policy"]
tags: [competenza, area/ottimizzazione]
---

# Processo decisionale di Markov

> Un processo di Markov con ricompensa in cui a ogni passo si sceglie un'azione: una politica trasforma l'MDP in un MRP, e l'obiettivo è la politica che massimizza il ritorno scontato atteso.

## Definizione / enunciato
Un MDP è $(\mathcal S,\mathcal A,\mathcal P,\mathcal R,\gamma)$ con $P[r,s'\mid s,a]=P[R_{t+1}=r,S_{t+1}=s'\mid S_t=s,A_t=a]$; dallo stesso stato e azione si può finire in stati diversi con ricompense diverse. Una **policy** è $\pi:\mathcal S\to\mathcal A$, deterministica ($\pi(s)=a$) o stocastica ($\pi(a\mid s)=P[A=a\mid S=s]$), indipendente dal tempo. Funzioni valore:
$$V^\pi(s)=\mathbb E_\pi[G_t\mid S_t=s],\qquad Q^\pi(s,a)=\mathbb E_\pi[G_t\mid S_t=s,A_t=a].$$
Un **episodio** è una sequenza completa di interazioni da uno stato iniziale a uno terminale.

## Formule chiave
Una politica fissa le transizioni: $P[s'\mid s,\pi(s)]$ se deterministica, $\sum_a\pi(a\mid s)P[s'\mid s,a]$ se stocastica. Ottimalità:
$$V^*(s)=\max_\pi V^\pi(s),\qquad Q^*(s,a)=\max_\pi Q^\pi(s,a),\qquad \pi^*(a\mid s)=\begin{cases}1&a\in\arg\max_xQ^*(s,x)\\0&\text{altrimenti.}\end{cases}$$
I **Q-factor** ottimi: $Q^*(s,a)=R(s,a)+\gamma\sum_{s'}P[s'\mid s,a]\max_{a'}Q^*(s',a')$, con $V^*(s)=\max_aQ^*(s,a)$.

## Intuizione
Con i Q-factor il massimo sta dentro il valore atteso: si possono stimare per campionamento senza conoscere il modello, al prezzo di $|\mathcal S|\cdot|\mathcal A|$ valori invece di $|\mathcal S|$. Gli ingredienti pratici del RL sono ambiente, struttura del controllore, definizione della ricompensa (ricompense sparse, scorciatoie) e algoritmo, con il compromesso esplorazione-sfruttamento.

## Come si usa
Macchina W/D/B con azioni *repair* (torna in W) e *do nothing*. Con $\pi(W)=\pi(D)=$ do nothing e $\pi(B)=$ repair le righe di transizione sono $(0.7,0.3,0)$, $(0,0.6,0.4)$, $(1,0,0)$. Se in D si ripara con probabilità $\frac13$: $P[W\mid D]=\frac13$, $P[D\mid D]=\frac23\cdot0.6=0.4$, $P[B\mid D]=\frac23\cdot0.4=\frac4{15}$. Nel labirinto con costo 1 per mossa ($\gamma=1$) la politica ottima segue la $V^*$ crescente fino a $-1$ accanto all'arrivo.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Markov Decision Process", "Ottimalità" e "Q-factor" della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 2-6, 17-21, 34-35).

## Prerequisiti
- [[Processo di Markov con ricompensa]]: struttura senza decisioni
- [[Equazione di transizione di stato]]: stato, azione e disturbo aleatorio

## Porta a
- [[Equazione di Bellman]]: equazioni per $V^\pi$, $Q^\pi$, $V^*$
- [[Value iteration]]: calcolo di $V^*$
- [[Policy iteration]]: calcolo di $\pi^*$
- [[Q-learning]]: stima di $Q^*$ senza modello

## Collegati
- [[Catena di Markov a tempo discreto]]: con politica fissata l'MDP è una catena
- [[Politica (s,S)]]: esempio di politica parametrica per le scorte
