---
tipo: competenza
area: probabilita
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Markov reward process", "MRP", "processo markoviano con ricompensa", "ritorno scontato", "discounted return", "value function di un MRP"]
tags: [competenza, area/probabilita]
---

# Processo di Markov con ricompensa

> Catena di Markov con una ricompensa a ogni transizione e un fattore di sconto $\gamma$: il valore di uno stato è il ritorno scontato atteso e soddisfa un sistema lineare.

## Definizione / enunciato
Un MRP è $(\mathcal S,\mathcal P,\mathcal R,\gamma)$: stati, transizioni, ricompense e sconto. Con $P[R_{t+1}=r,S_{t+1}=s'\mid S_t=s]$ si ottengono le transizioni marginalizzando su $r$. Ritorno e funzione valore:
$$G_t=R_{t+1}+\gamma R_{t+2}+\dots=\sum_{k=0}^\infty\gamma^kR_{t+k+1},\qquad V(s)=\mathbb E[G_t\mid S_t=s].$$

## Formule chiave
Da $G_t=R_{t+1}+\gamma G_{t+1}$, tower property e proprietà di Markov:
$$V(s)=\mathbb E\big[R_{t+1}+\gamma V(S_{t+1})\mid S_t=s\big],\qquad V=R+\gamma\Pi V\ \Rightarrow\ V=(I-\gamma\Pi)^{-1}R,$$
con $\Pi$ matrice di transizione.

## Intuizione
Si sconta per convenienza matematica, per evitare ritorni infiniti nei processi ciclici, perché il modello non rappresenta tutta l'incertezza futura, perché le ricompense finanziarie immediate fruttano interessi e perché il comportamento umano preferisce ricompense immediate; $\gamma=1$ va bene se tutti gli episodi terminano.

## Come si usa
Macchina con stati Funzionante (W), Degradata (D), Rotta (B), transizioni $W\to W$ 0.7, $W\to D$ 0.3, $D\to D$ 0.6, $D\to B$ 0.4, $B$ assorbente. Ricavi per periodo: in W 20 k€ con probabilità 0.9 e 10 k€ con 0.1; in D 20 k€ con 0.7 e 10 k€ con 0.3; in B 0. Il guadagno medio da ogni stato risolve
$$V(B)=0,\quad V(D)=20\cdot0.7+10\cdot0.3+0.6V(D)+0.4V(B),\quad V(W)=20\cdot0.9+10\cdot0.1+0.7V(W)+0.3V(D),$$
scritto nella slide senza sconto ($\gamma=1$): è finito perché B è assorbente con ricompensa nulla.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Processi di Markov" e "Markov Reward Process" nella lezione su DP e RL. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 10-16).

## Prerequisiti
- [[Catena di Markov a tempo discreto]]: la dinamica senza ricompense
- [[Speranza condizionata]]: tower property nella derivazione

## Porta a
- [[Processo decisionale di Markov]]: si aggiungono le azioni
- [[Equazione di Bellman]]: forma generale con politica e ottimalità

## Collegati
- [[Teorema ergodico per DTMC]]: ricompensa media di lungo periodo invece che scontata
- [[Valutazione Monte Carlo di una policy]]: stima di $V$ da traiettorie simulate
