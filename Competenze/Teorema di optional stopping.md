---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Doob's optional stopping theorem, optional stopping, arresto opzionale]
tags: [competenza, area/probabilita]
---

# Teorema di optional stopping

> Estende l'optional sampling a tempi d'arresto non limitati ma finiti, sotto ipotesi di integrabilità: è lo strumento per calcolare probabilità e tempi di uscita.

## Definizione / enunciato
**Corollario (tempo discreto).** Sia $(X_n)$ martingala, sub- o supermartingala rispetto a $(\mathcal F_n)$ e $\sigma,\tau$ tempi d'arresto con:
1. q.c. $\sigma\le\tau<\infty$;
2. $\mathbb E[|X_\sigma|],\mathbb E[|X_\tau|]<\infty$;
3. $\lim_{n\to\infty}\mathbb E[|X_n|\mathbf 1_{\{\tau>n\}}]=0$.

Allora $\mathbb E[X_\tau\mid\mathcal F_\sigma]=X_\sigma$ (martingala), $\ge$ (sub), $\le$ (super). Con $\sigma=0$: $\mathbb E[X_\tau]=\mathbb E[X_0]$.

La dimostrazione usa l'optional sampling (non chiesta all'esame) ma il teorema è strettamente più generale. In tempo continuo vale per processi càdlàg (lezione 22), per approssimazione discreta.

## Formule chiave
Passeggiata simmetrica da $x_0$, $\tau$ = uscita da $(-A,B)$:
$$P(X_\tau=-A)=\frac{B-x_0}{A+B},\qquad P(X_\tau=B)=\frac{A+x_0}{A+B},\qquad \mathbb E[\tau]=(A+x_0)(B-x_0)$$
(la seconda con la martingala $X_n^2-n$). Passeggiata asimmetrica: $Y_n=(q/p)^{X_n}$ è martingala e
$$P(X_\tau=-A)=\frac{(q/p)^{x_0}-(q/p)^B}{(q/p)^{-A}-(q/p)^B}.$$

## Intuizione
Le tre ipotesi impediscono che massa di probabilità "scappi all'infinito" prima di $\tau$. Senza di esse, la [[Trasformata di martingala]] del raddoppio sembra garantire un guadagno certo: è proprio l'integrabilità a mancare.

## Come si usa
Ricetta: trovare una martingala, verificare le tre ipotesi (es. $\tau$ dominato da una geometrica, $|X_\tau|\le A+B$, $\mathbb E[|X_n|\mathbf 1_{\{\tau>n\}}]\le(A+B)P(\tau>n)\to0$), scrivere $\mathbb E[X_\tau]=\mathbb E[X_0]$ e risolvere. Esempi delle slide: tabella "vincere 100 prima di perderne 100" ($p=0.49$: $0.017977$ puntando 1 euro, $0.401300$ puntando 10); ricorrenza della passeggiata parzialmente riflessa ($P_0(T_0<\infty)=2q$ se $p>q$); Wright-Fisher. Per il browniano: uscita da $[-A,B]$.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 12. Il `.tex` lo enuncia "sotto ipotesi appropriate"; le ipotesi precise sono nelle slide. Fonti: `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18), `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `riassunto_del_corso.tex` §Arresto opzionale, `suggested_exercises_martingales.pdf` (es. G, Invented by you A).

## Prerequisiti
- [[Teorema di optional sampling]]: corollario con ipotesi sul tempo

## Porta a
- [[Formula di Dynkin]]: valutazione in un tempo d'arresto
- [[Modello di Wright-Fisher]]: probabilità di fissazione di un tratto
- [[Probabilità di uscita del moto browniano]]: ipotesi sul tempo di uscita

## Collegati
- [[Rovina del giocatore]]: probabilità di rovina via martingala arrestata
- [[Trasformata di martingala]]: il raddoppio fallisce senza ipotesi
