---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["regularity of weak solutions", "regolarità ellittica", "regolarità interna H^2", "interior H^2-regularity", "regolarità al bordo", "boundary regularity", "regolarità C^∞ interna"]
tags: [competenza, area/analisi]
---

# Regolarità delle soluzioni deboli

> Una soluzione debole $u\in H^1$ di $Lu=f$ ellittica ha "due derivate in più di $f$": $f\in L^2\Rightarrow u\in H^2_{\rm loc}$, $f\in H^m\Rightarrow u\in H^{m+2}_{\rm loc}$, e con dati $C^\infty$ è $C^\infty$; con bordo $C^2$ si arriva fino al bordo.

## Definizione / enunciato
$U$ aperto limitato, $L$ uniformemente ellittico in forma di divergenza.
**Teor. 1 (regolarità $H^2$ interna).** Se $a^{ij}\in C^1(U)$, $b^i,c\in L^\infty(U)$, $f\in L^2(U)$ e $u\in H^1(U)$ è soluzione debole di $Lu=f$ in $U$, allora $u\in H^2_{\rm loc}(U)$ e per ogni $V\subset\subset U$
$$\|u\|_{H^2(V)}\le C\big(\|f\|_{L^2(U)}+\|u\|_{L^2(U)}\big),\quad C=C(V,U,\text{coefficienti}).$$
Inoltre $Lu=f$ q.o. in $U$ (non si richiede $u\in H^1_0$).
**Teor. 2 (regolarità interna superiore).** Se $a^{ij},b^i,c\in C^{m+1}(U)$ e $f\in H^m(U)$: $u\in H^{m+2}_{\rm loc}(U)$ e $\|u\|_{H^{m+2}(V)}\le C(\|f\|_{H^m(U)}+\|u\|_{L^2(U)})$.
**Teor. 3 ($C^\infty$ interna).** Se $a^{ij},b^i,c,f\in C^\infty(U)$: $u\in C^\infty(U)$ (le singolarità al bordo non si propagano all'interno).
**Teor. 4 (regolarità $H^2$ al bordo).** Se $a^{ij}\in C^1(\overline U)$, $b^i,c\in L^\infty(U)$, $f\in L^2(U)$, $\partial U$ di classe $C^2$ e $u\in H^1_0(U)$ soluzione debole di $Lu=f$, $u=0$ su $\partial U$: $u\in H^2(U)$ e $\|u\|_{H^2(U)}\le C(\|f\|_{L^2(U)}+\|u\|_{L^2(U)})$; se la soluzione è unica, $\|u\|_{H^2(U)}\le C\|f\|_{L^2(U)}$.

## Formule chiave
Motivazione formale per $-\Delta u=f$ in $\mathbb R^n$ ($u$ liscia, decrescente all'infinito):
$$\int_{\mathbb R^n}f^2dx=\int(\Delta u)^2dx=\sum_{i,j}\int u_{x_ix_i}u_{x_jx_j}dx=\sum_{i,j}\int u_{x_ix_j}u_{x_ix_j}dx=\int|D^2u|^2dx.$$
Dimostrazione rigorosa del Teor. 1: cutoff $\zeta\equiv1$ su $V$, nullo fuori da $W$ ($V\subset\subset W\subset\subset U$); nella forma debole $\sum\int a^{ij}u_{x_i}v_{x_j}=\int\tilde fv$, $\tilde f:=f-\sum b^iu_{x_i}-cu$, si sceglie
$$v:=-D^{-h}_k(\zeta^2D^h_ku)$$
e si ottiene una stima uniforme in $h$ di $\int_V|D^hDu|^2$; i quozienti di differenze danno $Du\in H^1(V)$. Teor. 3: Teor. 2 per ogni $m$ e immersioni di Sobolev. Teor. 4: semipalla, quozienti tangenziali per $u_{x_kx_l}$ con $k+l<2n$, e $u_{x_nx_n}$ dall'equazione in forma non di divergenza usando $a^{nn}\ge\theta>0$.

## Intuizione
L'ellitticità "inverte" due derivate: il calcolo formale mostra che la norma $L^2$ delle derivate seconde è controllata da quella di $f$. La difficoltà è solo giustificare i conti per una $u\in H^1$, e i quozienti di differenze sostituiscono le derivate che non si sa ancora esistere.

## Come si usa
Per passare da soluzione debole a classica: con dati lisci la soluzione debole di Lax-Milgram è $C^\infty$ all'interno, e risolve l'equazione puntualmente. Con bordo $C^2$ e $f\in L^2$, la soluzione di $-\Delta u=f$ in $H^1_0$ sta in $H^2(U)$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §6.3 "Regularity" (motivazione formale, §6.3.1 Teor. 1-3, §6.3.2 Teor. 4); i teoremi di regolarità al bordo di ordine superiore non sono stati letti. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 308-319).

## Prerequisiti
- [[Formulazione debole di un problema ellittico]]: si parte da una soluzione debole
- [[Stime dell'energia per operatori ellittici]]: stime $H^1$ di partenza
- [[Quozienti di differenze]]: strumento della dimostrazione
- [[Immersioni di Sobolev]]: da $H^m$ per ogni $m$ a $C^\infty$

## Collegati
- [[Lemma di Weyl]]: stesso guadagno di regolarità per il laplaciano in senso distribuzionale
