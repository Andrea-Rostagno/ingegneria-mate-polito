---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["difference quotients", "quoziente di differenze", "caratterizzazione di W^{1,p} con i quozienti di differenze", "caratterizzazione di W^{1,∞}", "funzioni lipschitziane e W^{1,∞}"]
tags: [competenza, area/analisi]
---

# Quozienti di differenze

> I rapporti incrementali discreti $D^h_iu$ sono limitati in $L^p$ se e solo se $u$ ha derivate deboli in $L^p$ ($1<p<\infty$): è lo strumento per dimostrare la regolarità delle soluzioni deboli.

## Definizione / enunciato
Sia $u\in L^1_{\rm loc}(U)$, $V\subset\subset U$. Il quoziente di differenze $i$-esimo di passo $h$ ($0<|h|<\operatorname{dist}(V,\partial U)$):
$$D^h_iu(x)=\frac{u(x+he_i)-u(x)}h,\qquad D^hu:=(D^h_1u,\dots,D^h_nu).$$
**Teorema 3.** (i) Se $1\le p<\infty$ e $u\in W^{1,p}(U)$, per ogni $V\subset\subset U$
$$\|D^hu\|_{L^p(V)}\le C\|Du\|_{L^p(U)}\qquad\text{per }0<|h|<\tfrac12\operatorname{dist}(V,\partial U).$$
(ii) Se $1<p<\infty$, $u\in L^p(V)$ e $\|D^hu\|_{L^p(V)}\le C$ per $0<|h|<\frac12\operatorname{dist}(V,\partial U)$, allora $u\in W^{1,p}(V)$ e $\|Du\|_{L^p(V)}\le C$. (Falso per $p=1$.)

**Teorema 4 (caratterizzazione di $W^{1,\infty}$).** Se $U$ è aperto limitato con $\partial U$ di classe $C^1$, $u:U\to\mathbb R$ è lipschitziana se e solo se $u\in W^{1,\infty}(U)$.

## Formule chiave
(i): per $u$ liscia $u(x+he_i)-u(x)=\int_0^1u_{x_i}(x+the_i)\,dt\cdot h$, da cui $\int_V|D^hu|^p\le C\int_U|Du|^p$, poi per approssimazione.
(ii): "integrazione per parti discreta"
$$\int_Vu\,(D^h_i\phi)\,dx=-\int_V(D^{-h}_iu)\,\phi\,dx\qquad(\phi\in C_c^\infty(V));$$
la limitatezza in $L^p$, $1<p<\infty$, dà $D^{-h_k}_iu\rightharpoonup v_i$ debolmente in $L^p(V)$ e passando al limite $\int u\phi_{x_i}=-\int v_i\phi$, cioè $v_i=u_{x_i}$ debole.
Teor. 4: per $u\in W^{1,\infty}$, $u^\varepsilon=\eta_\varepsilon*u$ verifica $|u^\varepsilon(x)-u^\varepsilon(y)|\le\|Du\|_{L^\infty}|x-y|$, e per $\varepsilon\to0$ $u$ è lipschitziana; viceversa $\|D^{-h}_iu\|_{L^\infty}\le\operatorname{Lip}(u)$.

## Intuizione
Il quoziente di differenze è una derivata "che esiste sempre"; se resta limitato al tendere di $h$ a zero, la riflessività di $L^p$ fornisce un limite debole che è la derivata cercata. In $L^1$ manca la riflessività, e il risultato cade.

## Come si usa
Nella regolarità $H^2$ interna si testa la formulazione debole con $v=-D^{-h}_k(\zeta^2D^h_ku)$ e si stima $\int\zeta^2|D^h_kDu|^2$ uniformemente in $h$: per (ii) $Du\in H^1_{\rm loc}$. Esiste una variante sul semipalla $U=B^0(0,1)\cap\{x_n>0\}$ per le direzioni tangenziali (usata nella regolarità al bordo).

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.8.2 "Difference quotients" (a. Teor. 3; b. Teor. 4 "Lipschitz functions and $W^{1,\infty}$"). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 277-280).

## Prerequisiti
- [[Spazi di Sobolev]]: derivate deboli in $L^p$
- [[Convergenza debole in spazi normati]]: compattezza debole dei limitati di $L^p$, $1<p<\infty$

## Porta a
- [[Regolarità delle soluzioni deboli]]: stime uniformi sui quozienti di differenze

## Collegati
- [[Funzione lipschitziana tra spazi metrici]]: coincidono con $W^{1,\infty}$ (Teor. 4)
