---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Kolmogorov's inequality for non-negative supermartingales, disuguaglianza di Kolmogorov, Kolmogorov's inequality]
tags: [competenza, area/probabilita]
---

# Disuguaglianza di Kolmogorov per supermartingale

> Per una supermartingala non negativa, la probabilità che la traiettoria superi $a$, anche su tutto l'orizzonte infinito, è al più $\mathbb E[X_0]/a$.

## Definizione / enunciato
**Tempo discreto** (slide, lezione 22). Sia $(X_n)$ supermartingala **non negativa** rispetto a $(\mathcal F_n)$ e $a>0$. Allora
$$P\Big(\max_{0\le m\le n}X_m\ge a\Big)\le\frac{\mathbb E[X_0]}{a},$$
e per convergenza monotona
$$P\Big(\sup_{0\le m<\infty}X_m>a\Big)\le\frac{\mathbb E[X_0]}{a}.$$
**Tempo continuo.** Stesso enunciato per supermartingale non negative con traiettorie càdlàg q.c.: $P(\sup_{0\le t\le T}X_t\ge a)\le\mathbb E[X_0]/a$ e, al limite, su $[0,\infty)$.

## Formule chiave
Prova: $\tau=\inf\{n:X_n\ge a\}$; $\tau\wedge n\le n$ è limitato, quindi per optional sampling e non negatività
$$\mathbb E[X_0]\ge\mathbb E[X_{\tau\wedge n}]=\mathbb E[X_\tau\mathbf 1_{\{\tau\le n\}}]+\mathbb E[X_n\mathbf 1_{\{\tau>n\}}]\ge aP(\tau\le n).$$
Nella slide il passaggio al limite ha indici misti ($T$ al posto di $n$): da verificare sul PDF.

## Intuizione
Una supermartingala non negativa è un gioco sfavorevole che non può andare sotto zero: per arrivare in alto deve "spendere" la ricchezza iniziale, e la probabilità di toccare quota $a$ è come in Markov con $\mathbb E[X_0]$ al posto di $\mathbb E[X_n]$. La novità rispetto alla massimale di Doob è che il bound non dipende da $n$, quindi vale fino all'infinito.

## Come si usa
Nel criterio di Foster-Lyapunov di non esplosività: $e^{-ct}V(X_t)$, arrestato all'uscita da un compatto, è supermartingala non negativa e $P_x(\sup e^{-ct}V(X_t)>a)\le V(x)/a$, quindi la catena non raggiunge l'infinito in tempo finito (sketch non chiesto all'esame).

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 14. **Discrepanza fra le fonti**: questa nota segue le slide (lezione 22: supermartingale non negative, bound $\mathbb E[X_0]/a$). Il `.tex` riporta invece la versione classica per somme parziali di variabili indipendenti centrate, $P(\max_{k\le n}|S_k|\ge a)\le\mathrm{Var}(S_n)/a^2$; il programma d'orale (argomento 14) parla di "Kolmogorov's inequality for non-negative **sub**martingales". All'orale conviene esporre la versione delle slide e saper citare la classica (da verificare sul PDF). Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `riassunto_del_corso.tex` §Upcrossing, convergenza e disuguaglianze, `topics_2025_26.pdf` (argomento 14).

## Prerequisiti
- [[Teorema di optional sampling]]: arresto al primo superamento della soglia

## Porta a
- [[Criterio di Foster-Lyapunov di non esplosività]]: controlla il sup di V

## Collegati
- [[Disuguaglianza massimale di Doob]]: stessa tecnica di dimostrazione
