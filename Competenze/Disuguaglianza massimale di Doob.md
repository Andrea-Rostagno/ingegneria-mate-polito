---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Doob's maximal inequality, disuguaglianza massimale, Doob maximal inequality]
tags: [competenza, area/probabilita]
---

# Disuguaglianza massimale di Doob

> Analogo della disuguaglianza di Markov per l'intera traiettoria: per una submartingala, la probabilità che il massimo fino a $n$ superi $a$ è al più $\mathbb E[X_n^+]/a$.

## Definizione / enunciato
**Tempo discreto.** Sia $(X_n)$ submartingala rispetto a $(\mathcal F_n)$ e $a>0$. Allora
$$P\Big(\max_{0\le m\le n}X_m\ge a\Big)\le\frac{\mathbb E[X_n^+]}{a},\qquad c^+=\max\{0,c\}.$$
**Tempo continuo** (lezione 22). Se $(X_t)$ è submartingala con traiettorie càdlàg q.c.,
$$P\Big(\sup_{0\le t\le T}X_t\ge a\Big)\le\frac{\mathbb E[X_T^+]}{a}$$
(si applica il caso discreto alle griglie $\{T\}\cup\{k/n\}$ e si usa la continuità a destra).

## Formule chiave
Prova: $\tau=\inf\{n:X_n\ge a\}$, $\tau\wedge n\le n$ limitati, quindi per optional sampling
$$\mathbb E[X_n]\ge\mathbb E[X_{\tau\wedge n}]\ge aP(\tau\le n)+\mathbb E[X_n\mathbf 1_{\{\tau>n\}}],$$
$$P\Big(\max_{m\le n}X_m\ge a\Big)\le\frac{\mathbb E[X_n\mathbf 1_{\{\tau\le n\}}]}a\le\frac{\mathbb E[X_n^+]}a.$$

## Intuizione
La submartingala "tende a salire": il valore finale $X_n$ porta con sé l'informazione su tutti i superamenti precedenti, perché fermarsi al primo superamento non può dare più del valore al tempo $n$.

## Come si usa
Esempi delle slide:
- **Convergenza di processi**: per la passeggiata riscalata $Y^N_i=X_{Ni}/N$, applicata alla submartingala $|X_{Ni}/N-(p-q)i|$, dà $P(\sup_{i\le T}|Y^N_i-(p-q)i|>\varepsilon)\to0$.
- **Tempi di hitting**: per la passeggiata simmetrica, $P(\tau_k\le n)\le\mathbb E[X_n^+]/k$ e $P(\tau'_k\le n)\le\mathbb E[|X_n|]/k$.
- **Inversione temporale del browniano**: con la submartingala $W_t^2$, $P(\sup_{0\le t\le1}W_t^2>n\sqrt n)\le1/(n\sqrt n)$, sommabile (Borel-Cantelli).

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 14. Il `.tex` la enuncia per submartingale **non negative** con $\mathbb E[X_n]/a$; le slide per submartingale qualsiasi con $\mathbb E[X_n^+]/a$ (che per $X\ge0$ coincide). Fonti: `magistrale/Processi stocastici/Lezione_21_01_12.pdf` (lezione 21), `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22), `magistrale/Processi stocastici/Lezione_25_16_12.pdf` (lezione 25, uso nell'inversione), `riassunto_del_corso.tex` §Upcrossing, convergenza e disuguaglianze.

## Prerequisiti
- [[Teorema di optional sampling]]: arresto al primo superamento della soglia

## Collegati
- [[Disuguaglianza di Kolmogorov per supermartingale]]: stessa tecnica di dimostrazione
