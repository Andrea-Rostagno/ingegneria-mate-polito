---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["iterazione delle politiche", "policy iteration algorithm", "policy evaluation", "valutazione della politica", "policy improvement", "miglioramento della politica", "generalized policy iteration", "GPI", "policy iteration generalizzata"]
tags: [competenza, area/ottimizzazione]
---

# Policy iteration

> Si alternano valutazione esatta della politica corrente (un sistema lineare) e miglioramento greedy rispetto al suo valore, finché la politica non cambia più; la versione generalizzata valuta solo approssimativamente.

## Definizione / enunciato
Data $\pi$, il suo valore soddisfa
$$V^\pi(s)=R(s,\pi(s))+\gamma\sum_{s'\in\mathcal S}P[s'\mid s,\pi(s)]V^\pi(s'),\qquad\text{cioè}\quad (I-\gamma\Pi_\pi)V^\pi=R_\pi,$$
senza alcuna ottimizzazione (operatore $T_\pi$). Algoritmo: da $\pi^{(0)}$,
1. **valutazione**: si risolve $(I-\gamma\Pi_{\pi^{(k)}})V^{\pi^{(k)}}=R_{\pi^{(k)}}$;
2. **miglioramento**: $\pi^{(k+1)}(s)\in\arg\max_{a}\{R(s,a)+\gamma\sum_{s'}P[s'\mid s,a]V^{\pi^{(k)}}(s')\}$, equivalente a massimizzare $Q^{\pi^{(k)}}(s,a)$;
3. stop quando $\pi^{(k)}=\pi^{(k+1)}$.

## Formule chiave
Sequenza $\pi_0\xrightarrow{E}V^{\pi_0}\xrightarrow{I}\pi_1\xrightarrow{E}V^{\pi_1}\xrightarrow{I}\dots$ **Generalized policy iteration**: se il sistema lineare non si può risolvere, si valuta con l'iterazione di punto fisso $\hat V^\pi(s)\leftarrow R(s,\pi(s))+\gamma\sum_{s'}P[s'\mid s,\pi(s)]\hat V^\pi(s')$, fermandosi dopo $K$ passi e migliorando su $\hat V^\pi$: con $K=0$ si ha la value iteration, con $K$ fino a convergenza la policy iteration.

## Intuizione
Ogni iterazione migliora la politica attuale e, se la politica non cambia, si è raggiunto l'ottimo: l'algoritmo converge alla politica ottima. Ogni iterazione costa più di un'iterazione di value iteration, perché richiede la valutazione completa della politica.

## Come si usa
Esempio della macchina: con la politica "ripara solo in B" le equazioni sono $V(D)=17+\gamma[0.6V(D)+0.4V(B)]$, $V(W)=19+\gamma[0.7V(W)+0.3V(D)]$, $V(B)=\gamma V(W)$ (ricompense attese 17 e 19 dai ricavi della slide), da risolvere per poi migliorare la politica. Come value iteration, richiede il modello completo delle transizioni.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Policy Iteration" (Algorithm 2) e "Generalized Policy Iteration" della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 19, 26-28, 31).

## Prerequisiti
- [[Equazione di Bellman]]: valutazione con $T_\pi$
- [[Processo decisionale di Markov]]: politiche e funzioni valore
- [[Soluzioni di un sistema lineare]]: la valutazione esatta è un sistema lineare

## Porta a
- [[Sarsa]]: versione TD della policy iteration generalizzata sulla funzione $Q$
- [[Politica ε-greedy]]: miglioramento con esplorazione

## Collegati
- [[Value iteration]]: caso limite $K=0$ della versione generalizzata
