---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Sobolev embedding", "teorema di immersione di Sobolev", "disuguaglianze di Sobolev generali", "general Sobolev inequalities", "W^{k,p} in L^q", "W^{k,p} in C^{m,γ}"]
tags: [competenza, area/analisi]
---

# Immersioni di Sobolev

> Concatenando GNS e Morrey: $W^{k,p}(U)$ sta in $L^q$ con $\frac1q=\frac1p-\frac kn$ se $k<n/p$, e in uno spazio di Hölder $C^{k-[n/p]-1,\gamma}$ se $k>n/p$.

## Definizione / enunciato
**Teorema 6 (disuguaglianze di Sobolev generali).** Sia $U$ limitato con bordo $C^1$ e $u\in W^{k,p}(U)$.
(i) Se $k<\frac np$, allora $u\in L^q(U)$ con
$$\frac1q=\frac1p-\frac kn,\qquad\|u\|_{L^q(U)}\le C\|u\|_{W^{k,p}(U)},\quad C=C(k,p,n,U).$$
(ii) Se $k>\frac np$, allora $u\in C^{k-[\frac np]-1,\gamma}(\overline U)$ con
$$\gamma=\begin{cases}\big[\frac np\big]+1-\frac np & \text{se }\frac np\notin\mathbb N,\\ \text{qualunque numero positivo }<1 & \text{se }\frac np\in\mathbb N,\end{cases}\qquad\|u\|_{C^{k-[\frac np]-1,\gamma}(\overline U)}\le C\|u\|_{W^{k,p}(U)}.$$

## Formule chiave
(i): GNS applicata alle derivate, $\|D^\beta u\|_{L^{p^*}}\le C\|u\|_{W^{k,p}}$ per $|\beta|=k-1$, quindi $u\in W^{k-1,p^*}$; poi $W^{k-2,p^{**}}$ con $\frac1{p^{**}}=\frac1{p^*}-\frac1n=\frac1p-\frac2n$, e dopo $k$ passi $W^{0,q}=L^q$.
(ii), $n/p\notin\mathbb N$: si sceglie $l=[n/p]$; $u\in W^{k-l,r}$ con $\frac1r=\frac1p-\frac ln$, e $r=\frac{pn}{n-pl}>n$; Morrey dà $D^\alpha u\in C^{0,1-\frac nr}$ per $|\alpha|\le k-l-1$, con $1-\frac nr=[\frac np]+1-\frac np$.

## Intuizione
Ogni derivata in $L^p$ "vale" $1/n$ di integrabilità ($\frac1p\to\frac1p-\frac1n$); quando l'integrabilità supera la dimensione si convertono le derivate residue in regolarità classica (continuità hölderiana). Il "budget" è $k-\frac np$.

## Come si usa
Regolarità: se $u\in H^m_{\rm loc}(U)$ per ogni $m$, allora $u\in C^k(U)$ per ogni $k$ (Teor. 3 di §6.3, regolarità $C^\infty$ all'interno). Per stabilire in quale spazio sta una funzione di Sobolev si confronta $k$ con $n/p$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.6.3 "General Sobolev inequalities" (Teor. 6); le dimostrazioni delle immersioni sono in parte omesse nel corso (dichiarazione degli appunti). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 269-271).

## Prerequisiti
- [[Disuguaglianza di Gagliardo-Nirenberg-Sobolev]]: caso $k<n/p$, iterata
- [[Disuguaglianza di Morrey]]: caso $k>n/p$
- [[Spazi di Hölder]]: spazi di arrivo nel caso $k>n/p$

## Porta a
- [[Regolarità delle soluzioni deboli]]: da $H^m$ per ogni $m$ a $C^\infty$
