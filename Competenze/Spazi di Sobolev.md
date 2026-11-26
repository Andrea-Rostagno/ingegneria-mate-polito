---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Sobolev spaces", "spazio di Sobolev", "W^{k,p}", "H^k", "W_0^{k,p}", "H^1_0", "H^1", "norma di Sobolev", "convergenza forte e debole in H^1"]
tags: [competenza, area/analisi]
---

# Spazi di Sobolev

> $W^{k,p}(U)$: funzioni $L^p$ con tutte le derivate deboli fino all'ordine $k$ in $L^p$; sono spazi di Banach (di Hilbert per $p=2$) e l'ambiente naturale per la teoria debole delle EDP.

## Definizione / enunciato
Fissati $1\le p\le\infty$, $k\ge0$ intero: $W^{k,p}(U)$ è l'insieme delle $u\in L^1_{\rm loc}(U)$ tali che per ogni $|\alpha|\le k$ la derivata debole $D^\alpha u$ esiste e sta in $L^p(U)$. Norma:
$$\|u\|_{W^{k,p}(U)}:=\begin{cases}\Big(\sum_{|\alpha|\le k}\int_U|D^\alpha u|^pdx\Big)^{1/p} & 1\le p<\infty\\ \sum_{|\alpha|\le k}\operatorname{ess\,sup}_U|D^\alpha u| & p=\infty.\end{cases}$$
- $H^k(U)=W^{k,2}(U)$, $H^0=L^2$; si identificano funzioni uguali q.o.
- $u_m\to u$ in $W^{k,p}_{\rm loc}(U)$ se $u_m\to u$ in $W^{k,p}(V)$ per ogni $V\subset\subset U$.
- $W^{k,p}_0(U)$ = chiusura di $C_c^\infty(U)$ in $W^{k,p}(U)$ ("$D^\alpha u=0$ su $\partial U$" per $|\alpha|\le k-1$); $H^k_0=W^{k,2}_0$.

**Teor. 1 (§5.2.3).** Per $u,v\in W^{k,p}$, $|\alpha|\le k$: $D^\alpha u\in W^{k-|\alpha|,p}$ e $D^\beta D^\alpha u=D^{\alpha+\beta}u$; linearità; restrizione a $V\subset U$; Leibniz con $\zeta\in C_c^\infty$: $D^\alpha(\zeta u)=\sum_{\beta\le\alpha}\binom\alpha\beta D^\beta\zeta D^{\alpha-\beta}u$.
**Teor. 2.** $W^{k,p}(U)$ è uno spazio di Banach.

## Formule chiave
Esempio 3 (Evans): $U=B^0(0,1)$, $u(x)=|x|^{-\alpha}$; per $x\ne0$, $u_{x_i}=\frac{-\alpha x_i}{|x|^{\alpha+2}}$, $|Du|=\frac{|\alpha|}{|x|^{\alpha+1}}$, e
$$u\in W^{1,p}(U)\iff\alpha<\frac{n-p}p;$$
in particolare $u\notin W^{1,p}$ per $p\ge n$. Esempio 4: con $\{r_k\}$ denso, $\sum 2^{-k}|x-r_k|^{-\alpha}$ è in $W^{1,p}$ ma illimitata su ogni aperto.

**Convergenza in $H^1$** (nota del corso): con $\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|\nabla u\|_{L^2}^2$,
$u_n\to u$ in $H^1\iff u_n\to u$ e $(u_n)_{x_i}\to u_{x_i}$ in $L^2$; $u_n\rightharpoonup u$ in $H^1\iff u_n\rightharpoonup u$ e $(u_n)_{x_i}\rightharpoonup u_{x_i}$ in $L^2$ (con Riesz e i funzionali $u\mapsto\int vu$, $u\mapsto\int vu_{x_i}$).

## Intuizione
Gli spazi di Hölder chiedono troppa regolarità per fare stime; i Sobolev misurano le derivate in media ($L^p$), il che rende possibili le stime "dell'energia". Il prezzo: una funzione di Sobolev può essere discontinua o illimitata (per $n=1$, invece, $W^{1,p}$ = assolutamente continue con derivata in $L^p$).

## Come si usa
$H^1_0(U)$ incorpora la condizione di Dirichlet omogenea nella formulazione debole; la completezza permette di usare Lax-Milgram, la struttura hilbertiana di $H^k$ il teorema di Riesz.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.2.2-5.2.3 (definizioni, Esempi 3-4, Teor. 1-2); nota manoscritta sulla convergenza forte e debole in $H^1(\Omega)$. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 244-249); `triennale/ANNO 3/eq derivate parziali/09_convergenza_ese.pdf` (pp. 1-4).

## Prerequisiti
- [[Derivata distribuzionale]]: derivate deboli in $L^1_{\rm loc}$
- [[Spazi Lp]]: le derivate stanno in $L^p$
- [[Spazio di Banach]]: completezza (Teor. 2)

## Porta a
- [[Approssimazione con funzioni lisce negli spazi di Sobolev]]: densità delle funzioni lisce
- [[Teorema di estensione per spazi di Sobolev]]: estensione a $\mathbb R^n$
- [[Teorema di traccia]]: valori al bordo
- [[Disuguaglianza di Gagliardo-Nirenberg-Sobolev]]: immersione in $L^{p^*}$
- [[Quozienti di differenze]]: caratterizzazione di $W^{1,p}$
- [[Spazio H-1]]: duale di $H^1_0$

## Collegati
- [[Spazio di Hilbert]]: $H^k$ con prodotto scalare
- [[Convergenza debole in spazi normati]]: convergenza debole in $H^1$
