---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["independence of events", "eventi indipendenti", "indipendenza stocastica", "sigma-algebre indipendenti", "indipendenza condizionata", "conditional independence", "affidabilità di un sistema", "sistemi in serie e in parallelo"]
tags: [competenza, area/probabilita]
---

# Indipendenza di eventi

> Due eventi sono indipendenti se sapere che uno si è verificato non cambia la probabilità dell'altro: $\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$.

## Definizione / enunciato
$A,B\in\mathcal F$ sono **indipendenti** ($A\perp\!\!\!\perp B$) se vale una delle condizioni: $\mathbb P(B\mid A)=\mathbb P(B)$ (se $\mathbb P(A)>0$), $\mathbb P(A\mid B)=\mathbb P(A)$ (se $\mathbb P(B)>0$), $\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$. Se $\mathbb P(A),\mathbb P(B)>0$ sono equivalenti.
- Una famiglia $(A_i)_{i\in I}$ è indipendente se $\mathbb P\big(\bigcap_{j\in J}A_j\big)=\prod_{j\in J}\mathbb P(A_j)$ per ogni $J\subseteq I$ finito (per tre eventi servono tutte e quattro le uguaglianze).
- Sotto-σ-algebre $(\mathcal F_i)$ indipendenti: la stessa condizione per ogni scelta $A_j\in\mathcal F_j$. $(A_i)$ indipendenti $\iff(\sigma(A_i))$ indipendenti.
- **Indipendenza condizionata** a $C$ ($\mathbb P(C)>0$): $\mathbb P(A\cap B\mid C)=\mathbb P(A\mid C)\mathbb P(B\mid C)$.

## Formule chiave
- Un evento trascurabile è indipendente da tutti; se $A\perp\!\!\!\perp B$ anche $A^c\perp\!\!\!\perp B$, $A\perp\!\!\!\perp B^c$, $A^c\perp\!\!\!\perp B^c$.
- Affidabilità con componenti indipendenti: serie $\mathbb P(S)=\mathbb P(C_1)\mathbb P(C_2)$; parallelo $\mathbb P(S)=\mathbb P(C_1)+\mathbb P(C_2)-\mathbb P(C_1)\mathbb P(C_2)$.

## Intuizione
Indipendenti **non** significa incompatibili: due eventi incompatibili di probabilità positiva hanno $\mathbb P(A\cap B)=0\ne\mathbb P(A)\mathbb P(B)$. L'indipendenza dipende dalla misura $\mathbb P$, non solo dagli insiemi.

## Come si usa
Due lanci di moneta (lezione 6): $C$ = "testa al 1° lancio" e $D$ = "croce al 2°" sono indipendenti ($\frac14=\frac12\cdot\frac12$); $A$ = "almeno una testa" e $B$ = "due teste" no ($\frac14\ne\frac34\cdot\frac14$). Urne $U_1$ (2B, 4N), $U_2$ (4B, 2N): le estrazioni sono indipendenti condizionatamente all'urna, ma $\mathbb P(B_1\cap B_2)=\frac5{18}\ne\mathbb P(B_1)\mathbb P(B_2)=\frac14$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 6 (appunto manoscritto). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione06(30-03-23) (4).pdf` (lezione 6, pp. 3-12).

## Prerequisiti
- [[Probabilità condizionata]]: $\mathbb P(A\mid B)=\mathbb P(A)$

## Porta a
- [[Lemma di Borel-Cantelli]]: seconda parte
- [[Distribuzione binomiale]]: prove indipendenti
- [[Distribuzione geometrica]]: schema di Bernoulli infinito

## Collegati
- Nessuno.
