---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["approximation by smooth functions", "teorema di Meyers-Serrin", "densità delle funzioni lisce in W^{k,p}", "approssimazione interna", "approssimazione globale"]
tags: [competenza, area/analisi]
---

# Approssimazione con funzioni lisce negli spazi di Sobolev

> Ogni funzione di $W^{k,p}(U)$, $p<\infty$, è limite in norma di Sobolev di funzioni $C^\infty$: localmente per mollificazione, globalmente con partizioni dell'unità, fino al bordo se $\partial U$ è $C^1$.

## Definizione / enunciato
Fissati $k\ge1$ e $1\le p<\infty$, $U_\varepsilon=\{x\in U:\operatorname{dist}(x,\partial U)>\varepsilon\}$.
- **Teor. 1 (locale).** Se $u\in W^{k,p}(U)$ e $u^\varepsilon=\eta_\varepsilon*u$ in $U_\varepsilon$: (i) $u^\varepsilon\in C^\infty(U_\varepsilon)$; (ii) $u^\varepsilon\to u$ in $W^{k,p}_{\rm loc}(U)$ per $\varepsilon\to0$.
- **Teor. 2 (globale).** Se $U$ è limitato e $u\in W^{k,p}(U)$, esistono $u_m\in C^\infty(U)\cap W^{k,p}(U)$ con $u_m\to u$ in $W^{k,p}(U)$ (senza ipotesi su $\partial U$; non si afferma $u_m\in C^\infty(\overline U)$).
- **Teor. 3 (fino al bordo).** Se $U$ è limitato e $\partial U$ è $C^1$, esistono $u_m\in C^\infty(\overline U)$ con $u_m\to u$ in $W^{k,p}(U)$.

## Formule chiave
Punto chiave del Teor. 1: la derivata classica della regolarizzata è la regolarizzata della derivata debole,
$$D^\alpha u^\varepsilon=\eta_\varepsilon*D^\alpha u\quad\text{in }U_\varepsilon,$$
perché $D^\alpha u^\varepsilon(x)=(-1)^{|\alpha|}\int_UD^\alpha_y\eta_\varepsilon(x-y)u(y)\,dy$ e $y\mapsto\eta_\varepsilon(x-y)$ è una funzione test. Teor. 2: $U=\bigcup U_i$, $U_i=\{\operatorname{dist}(x,\partial U)>1/i\}$, partizione dell'unità $\{\zeta_i\}$ subordinata a $V_i=U_{i+3}\setminus\overline{U_{i+1}}$, e $v=\sum_i\eta_{\varepsilon_i}*(\zeta_iu)$ con $\|v-u\|_{W^{k,p}(V)}\le\delta\sum_i2^{-(i+1)}=\delta$. Teor. 3: si trasla $u$ di $\lambda\varepsilon e_n$ verso l'interno ($x^\varepsilon=x+\lambda\varepsilon e_n$) per avere "spazio per mollificare" vicino al bordo.

## Intuizione
Le proprietà delle funzioni di Sobolev si dimostrano prima per funzioni lisce e poi si estendono per densità, purché le stime siano continue in norma $W^{k,p}$: è lo schema di traccia, estensione e disuguaglianze di Sobolev.

## Come si usa
Per provare una stima $\|Tu\|\le C\|u\|_{W^{1,p}}$: la si verifica per $u\in C^\infty(\overline U)$, poi si approssima $u$ con $u_m$ e si passa al limite (i $Tu_m$ formano una successione di Cauchy).

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.3 "Approximation" (5.3.1-5.3.3, Teor. 1-3). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 250-254).

## Prerequisiti
- [[Mollificatori]]: regolarizzazione per convoluzione
- [[Spazi di Sobolev]]: spazio in cui si approssima

## Porta a
- [[Teorema di estensione per spazi di Sobolev]]: estensione definita prima sulle lisce
- [[Teorema di traccia]]: traccia definita come limite delle restrizioni
