---
tipo: competenza
area: data-ml
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Monte Carlo policy evaluation", "Monte Carlo prediction", "MC every-visit", "MC first-visit", "every-visit Monte Carlo", "first-visit Monte Carlo", "stima incrementale della media", "incremental mean", "GLIE Monte Carlo control", "MC control"]
tags: [competenza, area/data-ml]
---

# Valutazione Monte Carlo di una policy

> Si stima $V^\pi(s)=\mathbb E_\pi[G_t\mid S_t=s]$ facendo la media dei ritorni osservati dopo ogni visita a $s$ in episodi simulati con $\pi$, senza conoscere il modello.

## Definizione / enunciato
Con $M$ traiettorie $\tau_m=(s_0,a_0,r_1,s_1,\dots,s_{T_m})$ generate seguendo $\pi$ (con $\pi$ fissata si ha un MRP):
$$\mathbb E_\pi[G_t\mid S_t=s]\approx\frac1{C(s)}\sum_{m=1}^M\sum_{i=0}^{T_m-1}g_i^m\,\mathbf 1_{s_i^m=s},\qquad g_i^m=r_{i+1}^m+\gamma r_{i+2}^m+\dots,$$
con $C(s)$ numero di visite a $s$ in tutte le traiettorie (**every-visit**; esiste la variante **first-visit**). Algoritmo: per ogni episodio si scorre all'indietro $G\leftarrow\gamma G+R_{t+1}$ e si aggiunge $G$ ai ritorni di $S_t$.

## Formule chiave
Media incrementale: $\bar g_N=\bar g_{N-1}+\frac1N(g_N-\bar g_{N-1})$, da cui
$$C(s_t^m)\leftarrow C(s_t^m)+1,\qquad \hat V^\pi(s_t^m)\leftarrow\hat V^\pi(s_t^m)+\frac1{C(s_t^m)}\big[g_t^m-\hat V^\pi(s_t^m)\big].$$
Forma generale "nuova stima = vecchia + passo $\times$ (target − vecchia)": è un passo di discesa stocastica del gradiente su $L(v)=\frac12\mathbb E[(\text{Target}-v)^2]$, $v\leftarrow v+\alpha(\text{Target}_i-v)$.

## Intuizione
La convergenza segue dalla legge dei grandi numeri, ma solo per gli stati che la politica visita abbastanza spesso. Difetti: si aggiorna solo a fine episodio, e un'ultima azione cattiva penalizza tutte le azioni dell'episodio.

## Come si usa
Esempio con $M=2$, $\gamma=0.9$: traiettoria 1 $A\,(1)\,B\,(2)\,A\,(0)$, traiettoria 2 $B\,(1)\,A\,(3)$; ritorni $g_0^1=1+0.9\cdot2=2.8$, $g_1^1=2$, $g_2^1=0$, $g_0^2=1+0.9\cdot3=3.7$, $g_1^2=3$; A è visitato 3 volte e $\hat V(A)=(2.8+0+3)/3=1.93$. Per il controllo (**GLIE MC control**) si stima $\hat Q(S_t,A_t)\leftarrow\hat Q+\frac1{N(S_t,A_t)}(G_t-\hat Q)$ e si migliora con $\epsilon\leftarrow1/k$, $\pi\leftarrow\epsilon$-greedy$(\hat Q)$: converge a $Q^*$ ma lentamente. Notebook del corso: riscaldamento di una stanza con politica a soglia.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Stima Monte Carlo", "Stime incrementali" e "GLIE MC control" della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 36-41, 47-48); notebook `magistrale/Ottimizzazione in condizione di incertezza/codici/monte_carlo_heating_room.ipynb`.

## Prerequisiti
- [[Metodo Monte Carlo]]: media campionaria dei ritorni
- [[Processo decisionale di Markov]]: ritorno e funzione valore da stimare
- [[Legge dei grandi numeri]]: giustifica la convergenza

## Porta a
- [[Temporal difference learning]]: aggiornamento a ogni passo con bootstrapping
- [[Politica ε-greedy]]: miglioramento della politica nel controllo MC

## Collegati
- [[Discesa stocastica del gradiente]]: l'aggiornamento incrementale è un passo SGD
- [[Processo di Markov con ricompensa]]: con politica fissata si stima il valore di un MRP
