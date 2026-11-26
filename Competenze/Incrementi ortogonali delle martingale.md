---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [orthogonal increments, uncorrelated increments, teorema di Pitagora per martingale, incrementi incorrelati]
tags: [competenza, area/probabilita]
---

# Incrementi ortogonali delle martingale

> Gli incrementi di una martingala di quadrato integrabile su intervalli disgiunti sono incorrelati, e il secondo momento cresce additivamente (Pitagora).

## Definizione / enunciato
Sia $(X_i)$ una martingala rispetto a $(\mathcal F_i)$ con $\mathbb E[X_i^2]<\infty$ per ogni $i$.

**Incrementi incorrelati.** Per $i_1<i_2\le i_3<i_4$:
$$\mathrm{Cov}(X_{i_2}-X_{i_1},\,X_{i_4}-X_{i_3})=0.$$

**Teorema di Pitagora per martingale.** Per $i<j$:
$$\mathbb E[(X_j-X_i)^2\mid\mathcal F_i]=\mathbb E[X_j^2-X_i^2\mid\mathcal F_i],\qquad \mathbb E[(X_j-X_i)^2]=\mathbb E[X_j^2]-\mathbb E[X_i^2].$$

## Formule chiave
Dimostrazione (condizionando su $\mathcal F_{i_3}$):
$$\mathbb E[(X_{i_2}-X_{i_1})(X_{i_4}-X_{i_3})]=\mathbb E\big[(X_{i_2}-X_{i_1})\,\mathbb E[X_{i_4}-X_{i_3}\mid\mathcal F_{i_3}]\big]=0,$$
e le medie degli incrementi sono nulle. Per Pitagora: si sviluppa il quadrato e si usa $\mathbb E[X_iX_j\mid\mathcal F_i]=X_i^2$.

## Intuizione
La martingala è una somma di "rumori" ciascuno a media nulla dato il passato: come vettori ortogonali in $L^2$, le loro energie si sommano. **Incorrelati non vuol dire indipendenti**: per $X_n=\prod(1+B_i)$ si ha $P(X_5-X_4=0,\,X_9-X_8>0)=0$ anche se entrambi gli eventi hanno probabilità positiva.

## Come si usa
Strumento chiave nella dimostrazione della legge forte generalizzata: per $M_n=\sum_{i\le n}X_i/a_i$ Pitagora dà $\sup_n\mathbb E[M_n^2]=\sum_i\mathbb E[X_i^2]/a_i^2<\infty$, quindi limitatezza in $L^2$ e uniforme integrabilità. Nell'esempio della passeggiata simmetrica, $\mathbb E[W_{n+1}^2-W_n^2\mid\mathcal F_n]=\mathbb E[(W_{n+1}-W_n)^2\mid\mathcal F_n]=1$ fornisce il compensatore di $W_n^2$. Esercizio "Invented by you" C: per una martingala $\psi(t)=\mathbb E[M_t^2]$ è monotona.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 11 ("incrementi ortogonali"). Il `.tex` riporta solo l'incorrelazione; Pitagora è nelle slide. Fonti: `magistrale/Processi stocastici/Lezione_17_17_11.pdf` (lezione 17), `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18), `riassunto_del_corso.tex` §Martingale, `suggested_exercises_martingales.pdf` (Invented by you, es. C).

## Prerequisiti
- [[Martingala]]: martingale di quadrato integrabile

## Porta a
- [[Legge forte dei grandi numeri per martingale]]: serie limitata in L2

## Collegati
- [[Decomposizione di Doob]]: compensatore del quadrato di martingala
- [[Variazione quadratica del moto browniano]]: somma dei quadrati degli incrementi
