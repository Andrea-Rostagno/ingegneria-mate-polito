---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["policy gradient theorem", "teorema del gradiente della politica", "REINFORCE", "Monte Carlo policy gradient", "REINFORCE con baseline", "REINFORCE with baseline", "advantage function", "funzione vantaggio", "softmax in action preferences"]
tags: [competenza, area/data-ml]
---

# Policy gradient

> Si parametrizza direttamente una politica stocastica $\pi_\theta(a\mid s)$ e si sale lungo il gradiente del rendimento atteso, stimato con ritorni campionati moltiplicati per la score function $\nabla_\theta\ln\pi_\theta$.

## Definizione / enunciato
Politica differenziabile in $\theta$, per esempio softmax delle preferenze $\pi(a\mid s,\theta)=e^{h(s,a,\theta)}/\sum_be^{h(s,b,\theta)}$. Obiettivo: $J_1(\theta)=V^{\pi_\theta}(s_1)$ negli ambienti episodici, $J_{avV}(\theta)=\sum_sd^{\pi_\theta}(s)V^{\pi_\theta}(s)$ in quelli continui; aggiornamento $\theta\leftarrow\theta+\alpha\nabla_\theta J(\theta)$ (le differenze finite $\frac{J(\theta+\epsilon\mathbf e_k)-J(\theta)}\epsilon$ sono inefficienti e rumorose in alta dimensione).

## Formule chiave
**Policy gradient theorem** ($\gamma=1$):
$$\nabla_\theta J(\theta)\propto\sum_sd(s)\sum_aQ^\pi(s,a)\nabla_\theta\pi_\theta(a\mid s)=\mathbb E_\pi\big[G_t\,\nabla_\theta\ln\pi_\theta(A_t\mid S_t)\big].$$
Policy gaussiana $\pi(a\mid s)\sim N(\mu(s),\sigma^2)$ con $\mu(s)=\mathbf x(s)^T\theta$: $\nabla_\theta\ln\pi_\theta=\frac{a-\mu(s)}{\sigma^2}\mathbf x(s)$. **REINFORCE**: per ogni $t$ dell'episodio $G\leftarrow\sum_{k=t+1}^T\gamma^{k-t-1}R_k$, $\theta\leftarrow\theta+\alpha\gamma^tG\nabla\ln\pi_\theta(A_t\mid S_t)$. **Baseline**: $\sum_ab(s)\nabla_\theta\pi_\theta(a\mid s)=b(s)\nabla_\theta1=0$, quindi sottrarre $b(s)$ non introduce distorsione; con $b=\hat V^\pi$ si usa il **vantaggio** $Q(S_t,A_t)-\hat V^\pi(S_t)$, e $\delta\leftarrow G-\hat V(S_t)$, $\theta\leftarrow\theta+\alpha\gamma^t\delta\nabla\ln\pi_\theta$.

## Intuizione
$\nabla_\theta\pi_\theta(A_t\mid S_t)$ dice quali azioni diventerebbero più probabili perturbando $\theta$; $G_t$ dice quanto è stata buona l'azione. Vantaggi: migliore convergenza, azioni continue senza calcolare $\max_aQ$, politiche stocastiche utili nei giochi o con osservabilità parziale. Svantaggio: stime ad alta varianza, che la baseline riduce (contributo positivo se va meglio del previsto).

## Come si usa
Esempio dei giochi Atari: dall'immagine si decide sinistra, destra o fermo. Il TD error è una stima non distorta del vantaggio, $\mathbb E_\pi[R+\gamma V^\pi(S')-V^\pi(s)\mid s,a]=Q^\pi(s,a)-V^\pi(s)$, idea che porta agli actor-critic.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Metodi basati sulla policy function", "Policy Gradient" e "Baseline" della lezione 3 (Algorithm 7 e 8). Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 73-80).

## Prerequisiti
- [[Processo decisionale di Markov]]: politiche stocastiche e $Q^\pi$
- [[Valutazione Monte Carlo di una policy]]: $G_t$ come stima non distorta di $Q^\pi$

## Porta a
- [[Metodi actor-critic]]: il ritorno MC sostituito da un critic

## Collegati
- [[Softmax e cross-entropy]]: parametrizzazione softmax della politica
- [[Approssimazione della funzione valore]]: la baseline $\hat V$ è una funzione valore approssimata
- [[Discesa stocastica del gradiente]]: ascesa stocastica sul rendimento atteso
