---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Young's convolution inequality", "teorema di Young", "disuguaglianza di Young L1-Lp", "convoluzione L1 * Lp"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Young per la convoluzione

> Se $f\in L^1$ e $g\in L^p$, la convoluzione $f*g$ è definita quasi ovunque, sta in $L^p$ e $\|f*g\|_p\le\|f\|_1\|g\|_p$.

## Definizione / enunciato
**Teorema 4.1.4 (Young).** Siano $f\in L^1(\mathbb R^n)$ e $g\in L^p(\mathbb R^n)$ con $1\le p\le\infty$. Allora per quasi ogni $x\in\mathbb R^n$ la funzione $y\mapsto f(x-y)g(y)$ è integrabile (4.2), il prodotto di convoluzione $(f*g)(x)=\int_{\mathbb R^n}f(x-y)g(y)\,dy$ è definito, e
$$f*g\in L^p(\mathbb R^n),\qquad\|f*g\|_p\le\|f\|_1\,\|g\|_p.\qquad(4.3)$$

## Formule chiave
- $p=\infty$: $\int|f(x-y)g(y)|\,dy\le\|g\|_\infty\|f\|_1$ (cambio di variabile $z=x-y$).
- $p=1$: con $F(x,y)=|f(x-y)g(y)|$, $\int\!\!\int F\,dx\,dy=\|f\|_1\|g\|_1<\infty$ (4.4); Tonelli dà $F\in L^1(\mathbb R^n\times\mathbb R^n)$ e Fubini permette lo scambio.
- $1<p<\infty$: si scrive $|f(x-y)||g(y)|=|f(x-y)|^{1/p'}\cdot|f(x-y)|^{1/p}|g(y)|$ e con Hölder
$$|(f*g)(x)|^p\le\|f\|_1^{p/p'}\,(|f|*|g|^p)(x),\qquad(4.5)$$
dove il secondo fattore è in $L^1$ per il caso $p=1$; integrando $\|f*g\|_p^p\le\|f\|_1^{p/p'}\|f\|_1\|g\|_p^p$ e $\frac1{p'}+\frac1p=1$.

## Intuizione
Convolvere con una $f\in L^1$ è fare una media pesata (con peso di massa totale $\|f\|_1$) delle traslate di $g$, e la norma $L^p$ è invariante per traslazione: la convoluzione eredita l'integrabilità migliore delle due (Oss. 4.1.5).

## Come si usa
- Esempio 4.0.1: $-u''+u=f$ in $L^2(\mathbb R)$ ha soluzione $u=f*\frac{e^{-|x|}}2$, e Young dà $u\in L^2$.
- Mollificatori: $\|\rho_k*(f-f_1)\|_p\le\|f-f_1\|_p\|\rho_k\|_1=\|f-f_1\|_p$, passo chiave della densità in $L^p$.
- Calore: con $U(\cdot,t)\in L^1$ e $u_0\in L^\infty$, $u(\cdot,t)=U*u_0\in L^\infty$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §4.1, Teor. 4.1.4 con dimostrazione nei tre casi, Oss. 4.1.5; Es. 4.0.1. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 39-42).

## Prerequisiti
- [[Convoluzione]]: l'operazione stimata
- [[Disuguaglianza di Hölder]]: caso $1<p<\infty$
- [[Teorema di Fubini]]: scambio degli integrali nel caso $p=1$

## Porta a
- [[Mollificatori]]: stima uniforme delle regolarizzate
- [[Formule di rappresentazione per l'equazione del calore]]: $U(\cdot,t)*u_0\in L^\infty$

## Collegati
- [[Spazi Lp]]: la convoluzione con $L^1$ è un operatore limitato su $L^p$
