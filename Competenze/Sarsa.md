---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["SARSA", "state-action-reward-state-action", "controllo TD on-policy", "on-policy TD control", "Sarsa con approssimazione lineare"]
tags: [competenza, area/data-ml]
---

# Sarsa

> Controllo TD on-policy: si aggiorna $Q(S,A)$ verso $R+\gamma Q(S',A')$, dove $A'$ è l'azione davvero scelta dalla politica (tipicamente $\epsilon$-greedy) nello stato successivo.

## Definizione / enunciato
Per ogni episodio: si inizializza $S$, si sceglie $A$ con la politica derivata da $Q$; a ogni passo si esegue $A$, si osservano $R$ e $S'$, si sceglie $A'$ da $S'$ con la stessa politica e
$$Q(S,A)\leftarrow Q(S,A)+\alpha\big[R+\gamma Q(S',A')-Q(S,A)\big],\qquad S\leftarrow S',\ A\leftarrow A'.$$
Il nome viene dalla quintupla $(S,A,R,S',A')$ usata a ogni iterazione.

## Formule chiave
Converge sotto una successione GLIE di politiche e passi che soddisfano
$$\sum_{t=1}^\infty\alpha_t=\infty,\qquad\sum_{t=1}^\infty\alpha_t^2<\infty,$$
anche se in pratica può convergere senza queste condizioni. Con approssimazione lineare $Q_{\mathbf w}(S,A)=\mathbf w^T\mathbf x(S,A)$: $\delta\leftarrow R+\gamma Q_{\mathbf w}(S',A')-Q_{\mathbf w}(S,A)$, $\mathbf w\leftarrow\mathbf w+\alpha\delta\,\mathbf x(S,A)$.

## Intuizione
Sarsa stima $Q^\pi$ della politica che sta eseguendo: è l'equivalente TD della policy iteration generalizzata sulla funzione $Q$. Poiché incorpora gli effetti dell'esplorazione, tende ad apprendere politiche più sicure o conservative rispetto a Q-learning. Con approssimazione lineare oscilla attorno alla funzione valore quasi ottima.

## Come si usa
Notebook del corso: griglia 10x10, partenza in (0,0), obiettivo in (5,5) con ricompensa +10 e costo −1 per passo, quattro azioni deterministiche, politica $\epsilon$-greedy; Sarsa(λ) con tracce di eleggibilità apprende più velocemente di Sarsa. Si estende facilmente con la n-step TD prediction.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Sarsa" (Algorithm 4), "Off-policy vs On-policy" e "SARSA con approssimazione lineare" (Algorithm 6) della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 49-52, 55, 69-70); notebook `magistrale/Ottimizzazione in condizione di incertezza/codici/sarsa_comparison.ipynb`.

## Prerequisiti
- [[Temporal difference learning]]: aggiornamento con TD error
- [[Politica ε-greedy]]: politica che genera $A$ e $A'$
- [[Policy iteration]]: Sarsa ne è la versione TD generalizzata

## Porta a
- [[Q-learning]]: variante off-policy con il massimo nel target
- [[Approssimazione della funzione valore]]: Sarsa con funzione $Q$ lineare

## Collegati
- [[TD(λ) e tracce di eleggibilità]]: Sarsa(λ)
