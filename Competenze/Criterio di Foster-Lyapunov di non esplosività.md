---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: ["Foster-Lyapunov non-explosivity criterion"]
tags: [competenza, area/probabilita]
---

# Criterio di Foster-Lyapunov di non esplosività

> Se il generatore applicato a una funzione di Lyapunov cresce al più linearmente in $V$, la CTMC non può fare infiniti salti in tempo finito.

## Definizione / enunciato
**Teorema (CTMC).** Sia $\{X_t\}$ una CTMC irriducibile. Supponiamo che esistano $V\ge0$ e costanti $c,d\ge0$ tali che
- $B_K=\{x:V(x)\le K\}$ è finito per ogni $0<K<\infty$;
- $\mathcal LV(x)\le c\,V(x)+d$ per ogni stato $x$.

Allora $\{X_t\}$ è non esplosiva.

## Formule chiave
Generatore di una CTMC (lezione 22): $\mathcal Lf(x)=\sum_{y}(f(y)-f(x))\,q(x,y)$.
Sketch della prova (non chiesto all'esame): con $Y_t=e^{-ct}V(X_t)$, la formula di Dynkin rende il processo arrestato all'uscita da un compatto $C$ una supermartingala non negativa. Per la disuguaglianza di Kolmogorov,
$$\mathbb P_x\Big(\sup_{0\le t\le\tau_C}e^{-ct}V(X_t)>a\Big)\le\frac{V(x)}a,$$
quindi la probabilità di raggiungere l'infinito in tempo finito è 0.

## Intuizione
Raggiungere l'infinito significa far esplodere $V$, perché i sottolivelli sono finiti. Se $V$ cresce al più esponenzialmente in media, questo non può accadere in tempo finito. È il primo criterio da usare prima di quelli di ricorrenza per le CTMC.

## Come si usa
- Si sceglie $V$ (per esempio $V(x)=x$ su $\mathbb N$), si calcola $\mathcal LV(x)=\sum_y(V(y)-V(x))q(x,y)$ e si verifica la crescita lineare. Per nascita-morte con $V(x)=x$: $\mathcal LV(x)=\lambda_x-\mu_x$.
- Esercizio della lezione 22: CTMC su $\mathbb N$ con tassi quadratici in $x$, da dimostrare non esplosiva e ricorrente positiva (tassi esatti da verificare sul PDF).

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 22 ("A non-explosivity criterion for CTMCs", riferimento Meyn-Tweedie 1993). Il `.tex` non tratta questo criterio: la nota si basa sulle slide. Fonti principali: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22).

## Prerequisiti
- [[Esplosione di una CTMC]]: esclude infiniti salti in tempo finito
- [[Disuguaglianza di Kolmogorov per supermartingale]]: controlla il sup di V
- [[Generatore infinitesimale]]: drift espresso tramite il generatore

## Porta a
- Nessuna competenza del corso dipende direttamente da questa.

## Collegati
- Nessuno.
