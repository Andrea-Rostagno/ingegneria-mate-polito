---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica]
livello: [triennale]
aliases: ["Borel-Cantelli lemma", "Borel-Cantelli", "legge 0-1 di Borel-Cantelli", "eventi che si verificano infinite volte"]
tags: [competenza, area/probabilita]
---

# Lemma di Borel-Cantelli

> Dice se infiniti eventi di una successione si realizzano: con probabilità 0 se le probabilità sono sommabili, con probabilità 1 se non lo sono e gli eventi sono indipendenti.

## Definizione / enunciato
$(\Omega,\mathcal F,\mathbb P)$ spazio di probabilità, $(A_m)_{m\ge1}$ eventi.
1. **Parte 1**: se $\sum_{m=1}^\infty\mathbb P(A_m)<+\infty$ allora $\mathbb P(\limsup_mA_m)=0$ (vale in ogni spazio di misura, lezione 3).
2. **Parte 2**: se gli $A_m$ sono **indipendenti** e $\sum_{m=1}^\infty\mathbb P(A_m)=+\infty$ allora $\mathbb P(\limsup_mA_m)=1$.

## Formule chiave
$$\limsup_mA_m=\bigcap_{m\ge1}\bigcup_{k\ge m}A_k,\qquad 0\le\mu(A)\le\mu\Big(\bigcup_{k\ge m}A_k\Big)\le\sum_{k=m}^\infty\mu(A_k)\xrightarrow[m\to\infty]{}0$$
(dimostrazione della parte 1: resto di una serie convergente).

## Intuizione
$\omega\in\limsup_mA_m$ se e solo se $\omega$ appartiene a infiniti $A_m$. Con eventi indipendenti il lemma è una **legge 0-1**: $\mathbb P(\limsup A_m)\in\{0,1\}$, cioè quasi certamente si verificano o infiniti eventi o solo un numero finito.

## Come si usa
Esempio della lezione 6: moneta equa lanciata infinite volte, $A_m=$ "testa al lancio $m$". Gli $A_m$ sono indipendenti e $\sum_m\frac12=+\infty$, quindi con probabilità 1 esce testa infinite volte. Per la parte 1 basta stimare la serie delle probabilità.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): parte 1 nella lezione 3 (teoria della misura), enunciato completo nella lezione 6; fonte manoscritta. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione03(16-03-23) (2).pdf` (lezione 3, p. 7), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione06(30-03-23) (4).pdf` (lezione 6, pp. 12-13).
- **Prob e statistica** (triennale): usato (prima parte) nella dimostrazione della legge forte dei grandi numeri in $L^2$: con $A_n=\{|\bar X_{n^2}-\mu|>\varepsilon\}$ la disuguaglianza di Chebyshev dà $\sum_n\mathbb P(A_n)\le\sum_n\frac{\sigma^2}{n^2\varepsilon^2}<\infty$, quindi $\mathbb P(\limsup_nA_n)=0$ e $\bar X_{n^2}\to\mu$ q.c. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione16(10-11-2023).pdf` (p. 9).

## Prerequisiti
- [[Continuità della misura]]: limsup di insiemi
- [[Indipendenza di eventi]]: seconda parte

## Porta a
- [[Legge dei grandi numeri]]: convergenza q.c. della sottosuccessione $\bar X_{n^2}$ (Prob e statistica)

## Collegati
- Nessuno.
