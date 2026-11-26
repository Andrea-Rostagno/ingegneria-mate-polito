---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Bellman equation", "equazioni di Bellman", "Bellman expectation equation", "Bellman optimality equation", "equazione di ottimalità di Bellman", "operatore di Bellman", "Bellman operator", "contrazione dell'operatore di Bellman"]
tags: [competenza, area/ottimizzazione]
---

# Equazione di Bellman

> Il valore di uno stato è la ricompensa attesa immediata più il valore scontato dello stato successivo; nella forma di ottimalità si massimizza sull'azione. Gli operatori di Bellman sono contrazioni, quindi la soluzione è un punto fisso unico.

## Definizione / enunciato
Per una politica $\pi$ e all'ottimo:
$$V^\pi(s)=\mathbb E_\pi[R_{t+1}+\gamma V^\pi(S_{t+1})\mid S_t=s],\qquad Q^\pi(s,a)=\mathbb E_\pi[R_{t+1}+\gamma Q^\pi(S_{t+1},A_{t+1})\mid S_t=s,A_t=a],$$
$$V^*(s)=\max_a\Big\{R(s,a)+\gamma\sum_{s'\in\mathcal S}P[s'\mid s,a]V^*(s')\Big\},\qquad R(s,a)=\mathbb E[R_{t+1}\mid S_t=s,A_t=a].$$
Con $\mathcal S$ finito, $V^*\in\mathbb R^n$ è punto fisso dell'operatore $T$: $V=TV$.

## Formule chiave
Operatori di Bellman:
$$[TV](s)=\max_a\{R(s,a)+\gamma\mathbb E[V(S_{t+1})\mid s,a]\},\qquad [T_\pi V](s)=R(s,\pi(s))+\gamma\mathbb E[V(S_{t+1})\mid s,\pi(s)].$$
Proprietà: entrambi **monotoni**; $T_\pi V=R_\pi+\gamma\Pi_\pi V$ è affine; $(TV)(s)=\max_\pi(T_\pi V)(s)$ è convessa in $V$; entrambi sono **$\gamma$-contrazioni** in $\ell_\infty$:
$$\|T_\pi V-T_\pi V'\|_\infty=\gamma\|\Pi_\pi(V-V')\|_\infty\le\gamma\|V-V'\|_\infty,\qquad \|TV-TV'\|_\infty\le\max_a\gamma\|\Pi_a(V-V')\|_\infty\le\gamma\|V-V'\|_\infty,$$
usando $\|\Pi x\|_\infty\le\|x\|_\infty$ per una matrice stocastica e $|\max_af(a)-\max_ag(a)|\le\max_a|f(a)-g(a)|$.

## Intuizione
La ricorsione $G_t=R_{t+1}+\gamma G_{t+1}$ passata al valore atteso con la proprietà di Markov dà un'equazione "a un passo". La contrazione garantisce che iterare l'operatore da qualsiasi $V^{(0)}$ converga all'unico punto fisso: è la giustificazione di value iteration e policy evaluation.

## Come si usa
Per una politica fissata il sistema è lineare: $(I-\gamma\Pi_\pi)V^\pi=R_\pi$. Per l'ottimo si itera $T$ (value iteration) oppure si alternano valutazione e miglioramento (policy iteration). Quando il modello è ignoto si usano campioni del membro destro come target (Monte Carlo, TD, Q-learning).

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Equazioni di Bellman", "Value Iteration, Policy Iteration..." e "Why does it work?". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 14-16, 20, 22-23, 29-30).

## Prerequisiti
- [[Processo decisionale di Markov]]: funzioni valore e politiche
- [[Principio di ottimalità di Bellman]]: ricorsione deterministica di partenza
- [[Speranza condizionata]]: tower property nella derivazione

## Porta a
- [[Value iteration]]: iterazione di punto fisso di $T$
- [[Policy iteration]]: valutazione con $T_\pi$ e miglioramento
- [[Temporal difference learning]]: target campionato $R+\gamma V(S')$

## Collegati
- [[Teorema del punto fisso di Banach]]: la contrazione dà esistenza, unicità e convergenza
- [[Matrice stocastica]]: non aumenta la norma $\ell_\infty$
- [[Programmazione stocastica multistadio]]: ricorsione analoga con funzioni valore attese
