---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["convergence in Lp", "convergenza in media di ordine p", "convergenza in norma p", "convergenza in media", "convergenza in media quadratica", "mean square convergence", "L2 convergence"]
tags: [competenza, area/probabilita]
---

# Convergenza in Lp

> $X_n\xrightarrow{L^p}X$ se $\mathbb E[|X_n-X|^p]\to0$: per $p=2$ è la convergenza in media quadratica, che verso una costante equivale a media convergente e varianza che si annulla.

## Definizione / enunciato
Siano $X_n,X\in L^p$, $p\ge1$. $(X_n)$ converge a $X$ **in $L^p$** (in norma $p$, in media di ordine $p$) se
$$\|X_n-X\|_{L^p}\to0\iff\mathbb E\big[|X_n-X|^p\big]\to0 .$$
$p=1$: convergenza in media; $p=2$: in media quadratica.

## Formule chiave
1. Se $p\ge q\ge1$: $X_n\xrightarrow{L^p}X\Rightarrow X_n\xrightarrow{L^q}X$, perché $\|X\|_{L^q}\le\|X\|_{L^p}$ (Jensen con $\psi(x)=x^{p/q}$ convessa).
2. $X_n\xrightarrow{L^1}X\Rightarrow\mathbb E[X_n]\to\mathbb E[X]$.
3. $X_n\xrightarrow{L^p}X\Rightarrow\mathbb E|X_n|^p\to\mathbb E|X|^p$ (disuguaglianza triangolare inversa sulle norme).
4. $X_n\xrightarrow{L^2}a$ costante $\iff\mathbb E[X_n]\to a$ e $\operatorname{Var}(X_n)\to0$, perché $\mathbb E[(X_n-a)^2]=\operatorname{Var}(X_n)+(\mathbb E[X_n]-a)^2$.
Conseguenza di 1-3: $X_n\xrightarrow{L^2}X\Rightarrow\operatorname{Var}(X_n)\to\operatorname{Var}(X)$; non vale il viceversa.

## Intuizione
È la convergenza nello spazio normato $L^p$: lo scarto deve diventare piccolo "in media", e grandi scarti su insiemi piccoli possono impedirla anche se c'è convergenza q.c.

## Come si usa
Il punto 4 è il modo standard per provare la consistenza in media quadratica: $\bar X_n$ ha $\mathbb E[\bar X_n]=\mu$ e $\operatorname{Var}(\bar X_n)=\sigma^2/n\to0$, quindi $\bar X_n\xrightarrow{L^2}\mu$ (parte $L^2$ della legge dei grandi numeri). Esempio (lezione 16): $X_n$ i.i.d. $b(p)$, $Y_n=X_n+X_{n+1}$, $T_n=\frac1n\sum Y_i$: $\mathbb E[T_n]=2p$ e $\operatorname{Var}(T_n)$ è di ordine $\frac1n$ (somma delle varianze più le covarianze fra $Y_i$ consecutive; coefficiente esatto da verificare sul PDF), quindi $T_n\xrightarrow{L^2}2p$.

## Nei corsi
- **Prob e statistica** (triennale): lezione 15. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione15(09-11-2023).pdf` (pp. 11-13); `2023Lezione16(10-11-2023).pdf` (pp. 8, 12).

## Prerequisiti
- [[Spazi Lp]]: norma $\|\cdot\|_{L^p}$
- [[Disuguaglianza di Jensen condizionata]]: inclusione $L^p\subseteq L^q$

## Porta a
- [[Convergenza in probabilità]]: $L^p$ implica in probabilità

## Collegati
- [[Legge dei grandi numeri]]: $\bar X_n\to\mu$ in $L^2$
