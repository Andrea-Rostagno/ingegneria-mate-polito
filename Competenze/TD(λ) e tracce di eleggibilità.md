---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["TD(lambda)", "TD lambda", "eligibility traces", "tracce di eleggibilità", "eligibility trace", "lambda-return", "λ-return", "ritorno lambda", "Sarsa(λ)", "Sarsa(lambda)", "backward view", "forward view"]
tags: [competenza, area/data-ml]
---

# TD(λ) e tracce di eleggibilità

> Si combinano i target TD a $n$ passi con pesi geometrici $\lambda^{n-1}$ (il $\lambda$-return), interpolando fra TD(0) e Monte Carlo; le tracce di eleggibilità rendono l'aggiornamento calcolabile passo per passo, all'indietro.

## Definizione / enunciato
Con $G_t^{(n)}=\sum_{\tau=1}^n\gamma^{\tau-1}R_{t+\tau}+\gamma^nV(S_{t+n})$ e $G_t^{(\infty)}$ il ritorno Monte Carlo:
$$G_t^\lambda=(1-\lambda)\sum_{k=1}^{+\infty}\lambda^{k-1}G_t^{(k)},$$
e per un episodio che termina in $T$: $G_t^\lambda=(1-\lambda)\sum_{k=1}^{T-t-1}\lambda^{k-1}G_t^{(k)}+\lambda^{T-t-1}G_t$. Con $\lambda=0$ (e $0^0=1$) si ha TD(0), con $\lambda=1$ Monte Carlo.

## Formule chiave
Con $\delta_t=R_{t+1}+\gamma V(S_{t+1})-V(S_t)$ vale $G_t^{(n)}-V(S_t)=\sum_{k=0}^{n-1}\gamma^k\delta_{t+k}$ e quindi
$$G_t^\lambda-V(S_t)=\sum_{k=0}^{+\infty}(\gamma\lambda)^k\delta_{t+k}.$$
Scambiando le somme nello sweep di un episodio si ottiene la forma all'indietro:
$$V(s)\leftarrow V(s)+\alpha\,\delta_t\,e_t(s)\ \ \forall s,\qquad e_t(s)=\sum_{\tau=0}^t(\gamma\lambda)^{t-\tau}\mathbf 1_{S_\tau=s}=\begin{cases}\gamma\lambda\,e_{t-1}(s)+1&S_t=s\\\gamma\lambda\,e_{t-1}(s)&\text{altrimenti.}\end{cases}$$

## Intuizione
Ogni TD error $\delta_t$ entra nell'errore di $V(S_t),V(S_{t-1}),V(S_{t-2}),\dots$ con peso che decade con la distanza nel tempo: la traccia ricorda quali stati sono stati visitati di recente e ne "merita" il credito.

## Come si usa
Esempio delle lezioni: $\gamma=1$, $\lambda=0.5$, $\alpha=1$, episodio $s_0\to s_1\to s_2\to$ terminale con ricompense 0, 0, 1 e valori iniziali nulli. I primi due TD error sono nulli; all'ultimo passo $\delta_2=1$ con tracce $e_2=(0.25,0.5,1)$, quindi $V=(0.25,0.5,1)$, gli stessi valori dei $\lambda$-return calcolati in avanti ($G_2^\lambda=1$, $G_1^\lambda=0.5$, $G_0^\lambda=0.25$). Il notebook del corso confronta Sarsa e Sarsa(λ) su una griglia 10x10: le tracce propagano più in fretta la ricompensa.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Metodi di stima avanzati" della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 55-62); notebook `magistrale/Ottimizzazione in condizione di incertezza/codici/sarsa_comparison.ipynb`.

## Prerequisiti
- [[Temporal difference learning]]: TD error e target a $n$ passi
- [[Valutazione Monte Carlo di una policy]]: caso limite $\lambda=1$

## Collegati
- [[Sarsa]]: estensione Sarsa(λ) con tracce sulle coppie stato-azione
- [[Serie geometrica]]: normalizzazione dei pesi $(1-\lambda)\sum\lambda^{k-1}=1$
