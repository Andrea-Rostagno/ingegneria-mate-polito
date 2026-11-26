---
tipo: competenza
area: probabilita
corsi: [Matematica per l'AI]
livello: [triennale]
aliases: ["invariant measure", "misura invariante di una mappa", "misura ergodica", "ergodic measure", "teorema ergodico", "media temporale", "time average", "evoluzione delle densità", "operatore di trasferimento"]
tags: [competenza, area/probabilita]
---

# Misura invariante di un sistema dinamico

> Misura sullo spazio delle fasi che non cambia sotto la dinamica, $\mathcal M(A)=\mathcal M(F^{-1}(A))$; se è ergodica, le medie temporali lungo quasi ogni traiettoria coincidono con le medie rispetto alla misura.

## Definizione / enunciato
Si distribuiscono $N$ punti in $[0,1]$ con densità $\rho_0$: $\mathcal M_0(a,b)=\int_a^b\rho_0(x)dx$ (uniforme: $\rho_0=N$, $\mathcal M_0(a,b)=N(b-a)$). Applicando $F_\mu$ la misura evolve come $\mathcal M_{n+1}(a,b)=\mathcal M_n(F_\mu^{-1}(a,b))$. La misura $\mathcal M$ è **invariante** per $F_\mu$ se
$$\mathcal M(a,b)=\mathcal M\big(F_\mu^{-1}(a,b)\big)\qquad\forall a,b\in[0,1].$$

## Formule chiave
Prima iterata della mappa logistica partendo dalla densità uniforme:
$$\rho_1(x)=\begin{cases}\dfrac{2N}{\sqrt{\mu^2-4\mu x}},&x\le\mu/4,\\[2mm]0,&x>\mu/4.\end{cases}$$
Per $\mu=4$ si ricava la misura invariante **ergodica**
$$\mathcal M(a,b)=\int_a^b\rho(x)\,dx,\qquad\rho(x)=\frac1{\pi\sqrt{x-x^2}} .$$
**Teorema ergodico**: per $\phi:[0,1]\to\mathbb R$ continua, la media temporale $\bar\phi(x)=\lim_{n\to\infty}\frac1n\sum_{i=0}^{n-1}\phi(F_4^i(x))$ vale $\int_0^1\phi(s)\rho(s)\,ds$ per tutte le $x\in[0,1]$ tranne un insieme di misura nulla.

## Intuizione
Invece di seguire un punto, si segue una "nuvola" di punti: la densità si trasforma a ogni passo e, se converge a una densità fissa, quella descrive la statistica di lungo periodo. L'integrale rispetto a $\rho$ è molto più rapido e comodo da calcolare della media lungo la traiettoria.

## Come si usa
Si calcola $F^{-1}(a,b)$ (le preimmagini sono due rami, $\frac{1\mp\sqrt{1-4z/\mu}}2$), si scrive $\mathcal M_{n+1}(a,b)$ come integrale di $\rho_n$ sulle preimmagini e si deriva in $b$ per ottenere $\rho_{n+1}$. Nei sistemi iperbolici la misura con questa proprietà è la misura SRB.

## Nei corsi
- **Matematica per l'AI** (triennale): sezione "Misure e misure invarianti" della dispensa. Fonti: `triennale/ANNO 3/matematica AI/IntroToDynamicalSystems (1).pdf` (p. 17-19).

## Prerequisiti
- [[Spazio di misura]]: nozione di misura
- [[Insiemi invarianti e attrattori]]: la misura è supportata sugli insiemi invarianti
- [[Equazione logistica discreta]]: l'esempio della dispensa

## Porta a
- [[Caos deterministico]]: statistica dei sistemi caotici

## Collegati
- [[Misura stazionaria]]: l'analogo per le catene di Markov
- [[Distribuzione stazionaria di una DTMC]]: stessa idea di invarianza sotto la dinamica
- [[Frequenza asintotica per DTMC]]: medie temporali uguali a medie sulla misura
- [[Insieme iperbolico]]: la misura SRB
