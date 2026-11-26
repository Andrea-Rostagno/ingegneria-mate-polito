---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [existence of Brownian motion, costruzione di Lévy, Lévy construction, funzioni di Schauder, teorema di continuità di Kolmogorov]
tags: [competenza, area/probabilita]
---

# Esistenza del moto browniano

> Il moto browniano esiste: lo si costruisce su $[0,1]$ come serie di funzioni a tenda pesate da gaussiane i.i.d. e poi lo si incolla su $[0,\infty)$.

## Definizione / enunciato
**Teorema.** Esiste un processo che soddisfa la definizione di moto browniano.

**Lemma.** Se $(Z_n)$ sono gaussiane standard i.i.d., esiste $C<\infty$ q.c. con $|Z_n|\le C\sqrt{\log n}$ per ogni $n\ge2$ (da $P(|Z_n|>x)\le\sqrt{2/\pi}\,e^{-x^2/2}$ e Borel-Cantelli).

**Funzioni a tenda.** $\Delta(t)=2t$ su $[0,\frac12]$, $2-2t$ su $[\frac12,1]$, $0$ altrove; per $n=2^j+k$ ($0\le k<2^j$), $\Delta_n(t)=\Delta(2^jt-k)$. Vale
$$\sum_{j\ge0}\sum_{k=0}^{2^j-1}2^{-j-2}\Delta_{2^j+k}(s)\Delta_{2^j+k}(t)=\min\{s,t\}$$
(prova via Parseval, saltata).

## Formule chiave
$$X_t=\sum_{j=0}^\infty\sum_{k=0}^{2^j-1}\sqrt{2^{-j-2}}\,Z_{2^j+k}\,\Delta_{2^j+k}(t),\quad t\in[0,1];\qquad W_t=\sum_{n=0}^{\lfloor t\rfloor-1}X^{(n)}_1+X^{(\lfloor t\rfloor)}_{t-\lfloor t\rfloor}.$$

## Intuizione
Ogni livello $j$ aggiunge dettagli su scala $2^{-j}$ con ampiezza $\approx2^{-j/2}$: i livelli fini contano sempre meno, quindi la serie converge uniformemente a una funzione continua; la scelta dei pesi riproduce esattamente la covarianza $\min(s,t)$.

## Come si usa
Schema della prova su $[0,1]$:
1. $X_0=0$ perché $\Delta_n(0)=0$;
2. continuità: con il lemma la coda $j\ge J$ è dominata da $C\sum_{j\ge J}\sqrt{(j+1)\log2/2^{j+2}}\to0$, quindi convergenza uniforme e assoluta di funzioni continue;
3. gaussianità e covarianza: con la funzione caratteristica e l'indipendenza delle $Z_n$, $\mathbb E[e^{iu\sum\theta_\ell X_{t_\ell}}]=\exp(-\frac{u^2}2\sum_{\ell,m}\theta_\ell\theta_m\min\{t_\ell,t_m\})$.

Poi si incollano copie i.i.d. (esercizio C). Il programma consente di consultare all'esame il teorema di continuità di Kolmogorov e la serie per $\min\{s,t\}$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 16. Assente nel `.tex`. Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23), `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25, teorema di continuità di Kolmogorov), `topics_2025_26.pdf`, `suggested_exercises_brownian_motion.pdf` (es. C).

## Prerequisiti
- [[Caratterizzazione gaussiana del moto browniano]]: la costruzione verifica le covarianze

## Collegati
- [[Hölderianità delle traiettorie browniane]]: stesso teorema di continuità di Kolmogorov
