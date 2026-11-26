---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [asymptotic frequency CTMC, frazione di tempo in uno stato, frazione asintotica di tempo]
tags: [competenza, area/probabilita]
---

# Frequenza asintotica per CTMC

> Teorema che dà la frazione di tempo che una CTMC irriducibile passa, a lungo termine, in uno stato $j$, in termini del tempo medio di ritorno.

## Definizione / enunciato
Frequenza asintotica di $j$: $\lim_{t\to\infty}N_t(j)/t$, con $N_t(j)=\int_0^t\mathbb 1_{\{j\}}(X_s)\,\mathrm ds$ tempo passato in $j$ fino a $t$.
**Teorema.** Sia $(X_t)$ una CTMC irriducibile con legge iniziale qualsiasi e almeno 2 stati. Allora per ogni $j\in S$
$$\lim_{t\to\infty}\frac{N_t(j)}{t}=\frac{1}{\mathbb E_j[T^c_j]\,\lambda(j)}\qquad\text{q.c.}$$
(con $1/\infty=0$ se $j$ è transiente o ricorrente nullo).

## Formule chiave
Conseguenza (lezione 13): se esiste $\pi$ stazionaria, da $\mathbb E_\pi[N_t(j)]=\int_0^t\mathbb P_\pi(X_s=j)\,\mathrm ds=t\pi(j)$ e convergenza dominata ($N_t(j)\le t$)
$$\pi(j)=\frac{1}{\mathbb E_j[T^c_j]\,\lambda(j)}\quad\Rightarrow\quad \pi\ \text{unica, stati ricorrenti positivi.}$$

## Intuizione
I rientri in $j$ spezzano la traiettoria in cicli i.i.d. (proprietà di Markov forte), di durata media $\mathbb E_j[T^c_j]$; in ogni ciclo si passa in $j$ una permanenza di media $1/\lambda(j)$. Per il renewal reward la frazione di tempo è (tempo medio in $j$)/(durata media del ciclo). Rispetto alle DTMC compare il fattore $1/\lambda(j)$.

## Come si usa
- Es. I (barista, coda M/M/1): frazione di tempo inattivo $=\frac{1}{\mathbb E_0[T^c_0]\lambda(0)}$, che vale $1-\lambda/\mu$ se $\lambda<\mu$ e $0$ se $\lambda\ge\mu$. Durata media di un periodo di lavoro: $\mathbb E_0[T^c_0]-\frac1{\lambda(0)}=\frac{1}{\mu-\lambda}$.
- Es. O(c): tempo medio fuori da $(0,C)$ fra due visite $=\frac{1}{\lambda\pi}-\frac1\lambda\approx214.39$ giorni.
- Es. 4.14: frazione di tempo in $\{2,3\}$ $=\pi(2)+\pi(3)=300/311$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 7 ("risultati limite"). Fonti: `magistrale/Processi stocastici/Lezione_13_03_11.pdf` (lezione 13), `suggested_exercises_CTMC.pdf` (es. I, O, 4.14). Il `.tex` non tratta questo teorema; l'interpretazione via renewal reward è il collegamento indicato nella mappa, la dimostrazione è nel "course material".

## Prerequisiti
- [[Ricorrenza e transienza di una CTMC]]: tempi di ritorno quasi certamente finiti
- [[Frequenza asintotica per DTMC]]: stessa idea con tempi di permanenza
- [[Teorema renewal reward]]: tempo in $x$ come ricompensa

## Porta a
- [[Teorema ergodico per CTMC]]: estende a funzioni dello stato

## Collegati
- —
