---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [closed martingale, martingala di Doob, Doob's martingale, "E[X dato F_n]"]
tags: [competenza, area/probabilita]
---

# Martingala chiusa

> Martingala ottenuta proiettando una variabile integrabile fissata sull'informazione crescente: $X_i=\mathbb E[X\mid\mathcal F_i]$.

## Definizione / enunciato
**Teorema.** Sia $(\mathcal F_i)_{i\in I}$ una filtrazione contenuta in $\mathcal F$ e $X$ una variabile $\mathcal F$-misurabile con $\mathbb E[|X|]<\infty$. Allora
$$X_i=\mathbb E[X\mid\mathcal F_i]$$
è una martingala rispetto a $(\mathcal F_i)$. Le martingale di questo tipo si dicono **chiuse** (o martingale di Doob).

**Sub/super chiuse.** Una submartingala è chiusa se esiste $X$ integrabile con $X_i\le\mathbb E[X\mid\mathcal F_i]$ per ogni $i$; una supermartingala se $X_i\ge\mathbb E[X\mid\mathcal F_i]$.

## Formule chiave
$$\mathbb E[|X_i|]\le\mathbb E\big[\mathbb E[|X|\mid\mathcal F_i]\big]=\mathbb E[|X|]<\infty$$
$$\mathbb E[X_j\mid\mathcal F_i]=\mathbb E\big[\mathbb E[X\mid\mathcal F_j]\mid\mathcal F_i\big]=\mathbb E[X\mid\mathcal F_i]=X_i\qquad(i<j)$$

## Intuizione
$X_i$ è la miglior stima di una quantità finale $X$ con l'informazione disponibile al tempo $i$; aggiornare la stima non può avere deriva attesa (tower property). Le martingale chiuse sono esattamente quelle che convergono "bene" a $X$.

## Come si usa
Esempio delle slide: CTMC finita con stato transiente $z$, $N(z)=\int_0^\infty \mathbf 1_{\{X_t=z\}}dt$ (tempo totale in $z$). Allora
$$M_t=\mathbb E[N(z)\mid\mathcal F_t]=\mathbb E_{X_t}[N(z)]+\int_0^t\mathbf 1_{\{z\}}(X_s)\,ds$$
è una martingala chiusa e $M_t\to N(z)$ q.c. (illustrato con $S=\{1,2,3,4\}$ e $N(2)$). Nel secondo teorema di convergenza di Doob, per una martingala la convergenza in $L^1$ equivale all'esistenza di $X$ con $X_n=\mathbb E[X\mid\mathcal F_n]$, cioè all'essere chiusa.

## Nei corsi
- **Processi stocastici** (magistrale): parte dell'argomento 11 (non c'è nel `.tex`, solo nelle slide). Fonti: `magistrale/Processi stocastici/Lezione_16_11_11.pdf` (lezione 16), `magistrale/Processi stocastici/Lezione_17_17_11.pdf` (lezione 17), `magistrale/Processi stocastici/Lezione_20_25_11.pdf` (lezione 20, legame con la convergenza $L^1$).

## Prerequisiti
- [[Martingala]]: generata da una variabile terminale
- [[Speranza condizionata]]: tower property garantisce la martingalità

## Porta a
- [[Secondo teorema di convergenza di Doob]]: martingala chiusa equivale a convergenza L1
