---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["value function approximation", "function approximation", "approssimazione di funzione nel RL", "semi-gradient TD", "TD semi-gradiente", "value error", "on-policy distribution", "approssimazione lineare della value function", "experience replay", "deadly triad"]
tags: [competenza, area/data-ml]
---

# Approssimazione della funzione valore

> Con spazi di stato enormi si sostituisce la tabella con una funzione parametrica $\hat V_{\mathbf w}(s)$ o $\hat Q_{\mathbf w}(s,a)$ e si aggiornano i pesi con passi di gradiente stocastico verso un target (MC, TD o TD(λ)).

## Definizione / enunciato
Avendo molti più stati che pesi, si sceglie quali stati contano minimizzando il **value error**
$$\mathrm{VE}(\mathbf w)=\sum_sd(s)\big[V^\pi(s)-\hat V^\pi_{\mathbf w}(s)\big]^2,$$
con $d(s)$ distribuzione on-policy (frazione di tempo in ogni stato; stazionaria sotto $\pi$ nei task continui). Con stati visitati secondo $d$, $\hat V_{\mathbf w}$ differenziabile e un surrogato $U_t$ di $V^\pi(S_t)$:
$$\mathbf w\leftarrow\mathbf w+\alpha\big[U_t-\hat V^\pi_{\mathbf w}(S_t)\big]\nabla_{\mathbf w}\hat V^\pi_{\mathbf w}(S_t),$$
con $U_t=G_t$ (MC), $U_t=R_{t+1}+\gamma\hat V_{\mathbf w}(S_{t+1})$ (TD(0)), $U_t=G_t^\lambda$ (TD(λ)).

## Formule chiave
Se il target è non distorto si converge a un ottimo locale di VE; con il bootstrap $U_t$ dipende da $\mathbf w$, non è un vero gradiente (**semi-gradient TD**) e non ci sono garanzie. Caso lineare $\hat V_{\mathbf w}(s)=\mathbf w^T\mathbf x(s)$: $\mathbf w\leftarrow\mathbf w+\alpha[U_t-\mathbf w^T\mathbf x(S_t)]\mathbf x(S_t)$, problema convesso; con feature indicatrici $\mathbf x(s)=[\mathbf 1_{S=s_1},\dots,\mathbf 1_{S=s_n}]$ si ritrova il caso tabellare. **Experience replay**: con l'esperienza $\mathcal D=\{(s_t,u_t)\}$ si minimizza $LS(\mathbf w)=\sum_t(u_t-\hat V_{\mathbf w}(s_t))^2$ ricampionando coppie da $\mathcal D$ e applicando SGD.

## Intuizione
Generalizzare significa che stati vicini condividono la stima. Il ricampionamento decorrela osservazioni consecutive quasi identiche (i frame di un gioco), che altrimenti confondono la discesa del gradiente. Approssimazione di funzione, addestramento off-policy e bootstrapping insieme possono dare instabilità e divergenza; nelle tabelle delle lezioni, per la predizione MC converge sempre (tabellare, lineare, non lineare, on e off-policy), TD(0) e TD(λ) on-policy non convergono con approssimazione non lineare e off-policy già con quella lineare; per il controllo Sarsa converge in forma tabellare e oscilla vicino all'ottimo con approssimazione lineare, Q-learning converge solo in forma tabellare.

## Come si usa
Pendolo inverso con una rete neurale che produce una stima per ogni azione; Sarsa con approssimazione lineare di $Q$ e miglioramento $\epsilon$-greedy.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): parte 3 della lezione 3, "Metodi basati sulla value function". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 64-72).

## Prerequisiti
- [[Temporal difference learning]]: target con bootstrapping
- [[Discesa stocastica del gradiente]]: aggiornamento dei pesi
- [[Regressione lineare]]: caso lineare ai minimi quadrati

## Porta a
- [[Policy gradient]]: si approssima direttamente la politica
- [[Metodi actor-critic]]: il critic è una funzione valore approssimata

## Collegati
- [[Sarsa]]: Sarsa con approssimazione lineare di $Q$
- [[Distribuzione stazionaria di una DTMC]]: distribuzione on-policy nei task continui
