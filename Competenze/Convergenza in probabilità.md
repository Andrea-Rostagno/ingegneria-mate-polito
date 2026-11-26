---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["convergence in probability", "convergenza in misura", "convergence in measure", "X_n -> X in P", "relazioni fra le convergenze", "convergenza quasi certa implica in probabilità"]
tags: [competenza, area/probabilita]
---

# Convergenza in probabilità

> $X_n\xrightarrow{\mathbb P}X$ se per ogni $\varepsilon>0$ $\mathbb P(|X_n-X|>\varepsilon)\to0$: è implicata sia dalla convergenza quasi certa sia da quella in $L^p$, ma non le implica.

## Definizione / enunciato
Su $(\Omega,\mathcal F,\mathbb P)$, $(X_n)$ converge a $X$ **in probabilità** (in misura) se
$$\forall\varepsilon>0\qquad\mathbb P(\{\omega:|X_n(\omega)-X(\omega)|>\varepsilon\})\xrightarrow[n\to\infty]{}0 .$$
Converge **quasi certamente** ($X_n\xrightarrow{q.c.}X$) se $\mathbb P(X_n\not\to X)=0$.

## Formule chiave
- **Caratterizzazione**: $X_n\xrightarrow{\mathbb P}X\iff\mathbb E\Big[\dfrac{|X_n-X|}{|X_n-X|+1}\Big]\to0$.
- **Teorema**: $X_n\xrightarrow{L^p}X\Rightarrow X_n\xrightarrow{\mathbb P}X$ (Markov); $X_n\xrightarrow{q.c.}X\Rightarrow X_n\xrightarrow{\mathbb P}X$ (convergenza dominata sulla caratterizzazione).
- Risultati parziali inversi: $X_n\xrightarrow{\mathbb P}X$ e $|X_n|\le Y\in L^p$ $\Rightarrow X_n\xrightarrow{L^p}X$; se $|X_n|\le M$ allora converge in ogni $L^p$; $X_n\xrightarrow{\mathbb P}X\Rightarrow$ esiste una sottosuccessione $X_{n_k}\xrightarrow{q.c.}X$.
- Funzioni continue: $f(X_n)\to f(X)$ q.c. o in probabilità se $X_n\to X$ nello stesso senso.

## Intuizione
La convergenza q.c. guarda ogni traiettoria; quella in probabilità solo che la probabilità di uno scarto grande si annulli, anche se il punto in cui avviene lo scarto "si sposta".

## Come si usa
Controesempi su $([0,1],\mathcal B,m)$:
- $X_n=2^n\mathbb 1_{(0,1/n)}$: $\to0$ q.c. e in probabilità ($\mathbb P(|X_n|>\varepsilon)\le\frac1n$), ma non in $L^p$ ($\mathbb E|X_n|^p=\frac{2^{np}}n\to\infty$);
- indicatori di intervalli di ampiezza $\frac1k$ che scorrono su $[0,1]$ ("macchina da scrivere"): $\to0$ in $L^p$ e in probabilità, ma $\liminf=0$, $\limsup=1$ in ogni punto, quindi non q.c.

## Nei corsi
- **Prob e statistica** (triennale): lezioni 15-16 "convergenza di successioni di v.a.". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione15(09-11-2023).pdf` (pp. 10-11); `2023Lezione16(10-11-2023).pdf` (pp. 1-6).

## Prerequisiti
- [[Disuguaglianza di Chebyshev]]: Markov dà $L^p\Rightarrow\mathbb P$
- [[Convergenza in Lp]]: modo di convergenza più forte
- [[Funzione misurabile]]: convergenza quasi ovunque
- [[Teorema di convergenza dominata]]: q.c. implica in probabilità

## Porta a
- [[Convergenza in legge]]: la convergenza in probabilità la implica
- [[Legge dei grandi numeri]]: legge debole in probabilità
- [[Teorema di Slutsky]]: $Y_n\xrightarrow{\mathbb P}a$
