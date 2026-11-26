---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [martingale transform, processo prevedibile, predictable process, strategia del raddoppio, doubling strategy, integrale stocastico discreto]
tags: [competenza, area/probabilita]
---

# Trasformata di martingala

> Ricchezza ottenuta puntando, a ogni round, una quantità decisa solo col passato: una strategia prevedibile non cambia la natura (equo/sfavorevole/favorevole) del gioco.

## Definizione / enunciato
**Processo prevedibile.** $(H_n)_{n\ge1}$ è prevedibile rispetto a $(\mathcal F_n)_{n\ge0}$ se $H_n$ è $\mathcal F_{n-1}$-misurabile.

**Trasformata.** Data $(X_n)$ e $H$ prevedibile,
$$W_n=X_0+\sum_{i=1}^n H_i\,(X_i-X_{i-1}).$$

**Teorema ("bad news").** Se $(X_n)$ è martingala (super-, sub-) e $H$ è positivo, prevedibile e $H_n<c_n<\infty$ per ogni $n$, allora $(W_n)$ è martingala (super-, sub-) rispetto alla stessa filtrazione.

**Corollario.** Una martingala prevedibile è costante: $X_n=X_0$ q.c.

## Formule chiave
$$\mathbb E[W_{n+1}\mid\mathcal F_n]=W_n+H_{n+1}\big(\mathbb E[X_{n+1}\mid\mathcal F_n]-X_n\big)$$
Il segno del termine tra parentesi resta quello di $X$ perché $H_{n+1}\ge0$ è noto al tempo $n$.

## Intuizione
Non si può trasformare un gioco sfavorevole in uno favorevole con strategie basate solo sul passato. È l'antenato discreto dell'integrale stocastico.

## Come si usa
**Strategia del raddoppio**: si punta $H_n=2^m$ con $m$ = numero di sconfitte consecutive; alla prima vittoria al round $j$ il guadagno netto è $2^j-\sum_{i<j}2^i=1$. Però $W_n=\#\text{vittorie}-2^g$ con $g$ = lunghezza dell'ultima serie di sconfitte: resta una martingala e occasionalmente si perde moltissimo. Con puntata limitata $2^g\wedge(M+X_n)$ la probabilità di rovina è $B/(M+B)$, la stessa della puntata costante (lezione 19). La trasformata con $C_m=\mathbf 1\{\exists i:\sigma_i\le m-1<\tau_i\}$ ("compra sotto $a$, vendi sopra $b$") è la chiave della prova dell'upcrossing; quella con $\mathbf 1_{\{\tau\ge n\}}$ dà il processo arrestato.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 11 ("predictable processes"). Il `.tex` richiede $C$ prevedibile e limitato (e $C\ge0$ per le supermartingale); le slide richiedono $H$ positivo con $H_n<c_n$. Fonti: `magistrale/Processi stocastici/Lezione_18_18_11.pdf` (lezione 18), `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19, raddoppio realistico), `riassunto_del_corso.tex` §Martingale.

## Prerequisiti
- [[Martingala]]: integrale discreto di una strategia

## Porta a
- [[Decomposizione di Doob]]: parte prevedibile del processo
- [[Processo arrestato]]: arresto come strategia prevedibile
- [[Disuguaglianza di upcrossing]]: strategia compra basso vendi alto

## Collegati
- [[Teorema di optional stopping]]: il raddoppio fallisce senza ipotesi
