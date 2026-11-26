---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["actor-critic", "actor-critic methods", "one-step actor-critic", "attore-critico"]
tags: [competenza, area/data-ml]
---

# Metodi actor-critic

> Un attore (la politica $\pi_\theta$) sceglie le azioni e un critico (una funzione valore $\hat V_{\mathbf w}$) le valuta con il TD error; il bootstrapping del critico riduce la varianza del policy gradient Monte Carlo.

## Definizione / enunciato
Nei metodi basati sulla value function la politica è implicita, in quelli basati sulla politica non c'è funzione valore; gli actor-critic hanno entrambe. In REINFORCE $\mathbb E_\pi[G_t\nabla_\theta\ln\pi_\theta(A_t\mid S_t)]=\mathbb E_\pi[Q^\pi(S_t,A_t)\nabla_\theta\ln\pi_\theta(A_t\mid S_t)]$; il critico sostituisce $Q^\pi$ con $\hat Q^\pi_{\mathbf w}$, oppure, nel caso TD, si usa $\hat V$ per il bootstrapping passando da $(G_t-\hat V(S_t))$ a $(R_{t+1}+\gamma\hat V(S_{t+1})-\hat V(S_t))$.

## Formule chiave
**One-step actor-critic**, per ogni passo dell'episodio (con $I\leftarrow1$ all'inizio):
$$A\sim\pi(\cdot\mid S),\qquad\delta\leftarrow R+\gamma\hat V_{\mathbf w}(S')-\hat V_{\mathbf w}(S)\ \ (\hat V_{\mathbf w}(S')=0\text{ se }S'\text{ terminale}),$$
$$\mathbf w\leftarrow\mathbf w+\alpha_{\mathbf w}\delta\nabla\hat V_{\mathbf w}(S),\qquad\theta\leftarrow\theta+\alpha_\theta I\delta\nabla\ln\pi_\theta(A\mid S),\qquad I\leftarrow\gamma I,\ S\leftarrow S'.$$

## Intuizione
Il TD error è una stima non distorta del vantaggio: dice all'attore se l'azione appena presa è andata meglio o peggio del previsto, senza aspettare la fine dell'episodio. REINFORCE con baseline **non** è un actor-critic: lì $\hat V(S_t)$ è usato come baseline, non come critico, cioè non per il bootstrapping.

## Come si usa
Si scelgono due approssimatori (anche reti neurali), si aggiornano entrambi a ogni passo con passi $\alpha_{\mathbf w}$ e $\alpha_\theta$; l'algoritmo si generalizza a TD(λ) con tracce di eleggibilità.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Metodi Actor-Critic" (Algorithm 9) della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 64, 81-82).

## Prerequisiti
- [[Policy gradient]]: aggiornamento dell'attore
- [[Temporal difference learning]]: TD error del critico
- [[Approssimazione della funzione valore]]: il critico $\hat V_{\mathbf w}$

## Collegati
- [[TD(λ) e tracce di eleggibilità]]: estensione con tracce
