---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Q learning", "controllo TD off-policy", "off-policy TD control", "off-policy learning", "apprendimento off-policy", "behavior policy", "politica comportamentale", "target policy", "politica obiettivo", "on-policy vs off-policy"]
tags: [competenza, area/data-ml]
---

# Q-learning

> Controllo TD off-policy: si aggiorna $Q(S,A)$ verso $R+\gamma\max_aQ(S',a)$, cioè verso il valore dell'azione greedy, qualunque sia l'azione effettivamente eseguita; stima direttamente $Q^*$.

## Definizione / enunciato
Stessa struttura di Sarsa (azioni scelte dalla politica derivata da $Q$, es. $\epsilon$-greedy), ma con aggiornamento
$$Q(S,A)\leftarrow Q(S,A)+\alpha\big[R+\gamma\max_aQ(S',a)-Q(S,A)\big].$$
È l'equivalente TD della value iteration sulla funzione $Q$: il target è un campione dell'equazione di ottimalità dei Q-factor.

## Formule chiave
**Off-policy** in generale: i dati sono generati da una *behavior policy* $b(a\mid s)$ ma si vuole $Q^\pi(s,a)=\mathbb E_\pi[G_t\mid S_t=s,A_t=a]$ di una *target policy* $\pi$. Con importance sampling
$$\mathbb E_\pi[G_t\mid s,a]=\mathbb E_b\Big[\frac{p_\pi(G_t)}{p_b(G_t)}G_t\ \Big|\ s,a\Big],\qquad\frac{p_\pi(G_t)}{p_b(G_t)}=\prod_{\tau=t+1}^{T-1}\frac{\pi(A_\tau\mid S_\tau)}{b(A_\tau\mid S_\tau)};$$
i rapporti possono diventare molto piccoli e dare varianza enorme, quindi si fa bootstrapping: $V(S_t)\leftarrow V(S_t)+\alpha\big[\frac{\pi(A_t\mid S_t)}{b(A_t\mid S_t)}(R_{t+1}+\gamma V(S_{t+1}))-V(S_t)\big]$. Q-learning non richiede importance sampling.

## Intuizione
Il disaccoppiamento fra politica comportamentale (che esplora) e politica obiettivo (greedy) permette di apprendere la politica ottima indipendentemente da come sono generati i dati. Il prezzo: con approssimazione di funzione, l'unione di approssimazione, off-policy e bootstrapping può dare instabilità e divergenza (Q-learning non ha garanzie con approssimazione lineare o non lineare).

## Come si usa
Si usa quando si vogliono riutilizzare dati raccolti con un'altra politica o esplorare in modo aggressivo; Sarsa invece apprende il valore della politica esplorativa stessa.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Q-learning" (Algorithm 5) e "Off-policy vs On-policy" della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 51-54, 70).

## Prerequisiti
- [[Temporal difference learning]]: aggiornamento con TD error
- [[Processo decisionale di Markov]]: equazione di ottimalità dei Q-factor
- [[Campionamento per importanza]]: correzione per dati generati da un'altra politica

## Collegati
- [[Sarsa]]: versione on-policy con $Q(S',A')$ nel target
- [[Value iteration]]: Q-learning ne è l'equivalente campionato
- [[Politica ε-greedy]]: politica comportamentale tipica
