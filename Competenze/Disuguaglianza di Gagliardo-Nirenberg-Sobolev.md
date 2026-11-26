---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Gagliardo-Nirenberg-Sobolev inequality", "disuguaglianza di Sobolev", "GNS", "esponente di Sobolev", "coniugato di Sobolev p*", "Sobolev conjugate"]
tags: [competenza, area/analisi]
---

# Disuguaglianza di Gagliardo-Nirenberg-Sobolev

> Per $1\le p<n$ la norma $L^{p^*}$ di una funzione a supporto compatto è controllata dalla norma $L^p$ del gradiente, con $p^*=\frac{np}{n-p}$: quindi $W^{1,p}\subset L^{p^*}$.

## Definizione / enunciato
**Coniugato di Sobolev** di $p\in[1,n)$: $p^*:=\dfrac{np}{n-p}$, cioè $\dfrac1{p^*}=\dfrac1p-\dfrac1n$, $p^*>p$.

**Teorema 1 (GNS).** Sia $1\le p<n$. Esiste $C=C(p,n)$ tale che
$$\|u\|_{L^{p^*}(\mathbb R^n)}\le C\|Du\|_{L^p(\mathbb R^n)}\qquad\text{per ogni }u\in C^1_c(\mathbb R^n).$$
**Teorema 2.** Se $U$ è limitato, $\partial U$ è $C^1$, $1\le p<n$, $u\in W^{1,p}(U)$, allora $u\in L^{p^*}(U)$ e $\|u\|_{L^{p^*}(U)}\le C\|u\|_{W^{1,p}(U)}$, $C=C(p,n,U)$.
**Teorema 3.** Se $U$ è limitato, $u\in W^{1,p}_0(U)$, $1\le p<n$: $\|u\|_{L^q(U)}\le C\|Du\|_{L^p(U)}$ per ogni $q\in[1,p^*]$ (talvolta detta disuguaglianza di Poincaré).

## Formule chiave
**Perché $p^*$** (analisi di scala): se valesse $\|u\|_{L^q}\le C\|Du\|_{L^p}$ per ogni $u\in C_c^\infty$, con $u_\lambda(x)=u(\lambda x)$ si avrebbe
$$\|u\|_{L^q(\mathbb R^n)}\le C\lambda^{1-\frac np+\frac nq}\|Du\|_{L^p(\mathbb R^n)},$$
assurdo per $\lambda\to0$ o $\infty$ salvo $1-\frac np+\frac nq=0$, cioè $q=p^*$.
**Dimostrazione**, $p=1$: $|u(x)|\le\int_{-\infty}^\infty|Du(x_1,\dots,y_i,\dots,x_n)|\,dy_i$ per ogni $i$; prodotto delle $n$ stime, Hölder generalizzata e integrazioni successive danno $\int|u|^{\frac n{n-1}}\le\big(\int|Du|\big)^{\frac n{n-1}}$. Caso $1<p<n$: si applica a $v=|u|^\gamma$ con $\gamma=\frac{p(n-1)}{n-p}>1$.

## Intuizione
L'esponente non è arbitrario: è l'unico compatibile con le dilatazioni. Il supporto compatto serve ($u\equiv1$ viola la stima), ma la costante non dipende dall'ampiezza del supporto. Per $p\to n$ si ha $p^*\to\infty$, ma $W^{1,n}\not\subset L^\infty$ se $n>1$: $\log\log(1+\frac1{|x|})\in W^{1,n}(B^0(0,1))$ non è limitata.

## Come si usa
Teor. 2 = Teor. 1 + estensione + densità; Teor. 3 estende a zero le approssimanti in $C_c^\infty(U)$ e usa $|U|<\infty$. Oss.: su $W^{1,p}_0(U)$ con $U$ limitato, $\|Du\|_{L^p}$ è una norma equivalente a $\|u\|_{W^{1,p}}$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.6.1 (Teor. 1-3, Osservazioni); gli appunti dichiarano alcune dimostrazioni delle immersioni omesse. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 261-266).

## Prerequisiti
- [[Spazi di Sobolev]]: spazio di partenza dell'immersione
- [[Teorema di estensione per spazi di Sobolev]]: passaggio da $\mathbb R^n$ a $U$
- [[Disuguaglianza di Hölder]]: forma generalizzata nella dimostrazione

## Porta a
- [[Immersioni di Sobolev]]: iterando su $W^{k,p}$
- [[Teorema di Rellich-Kondrachov]]: immersione compatta per $q<p^*$
- [[Disuguaglianza di Poincaré]]: stima di $u$ col solo gradiente in $W^{1,p}_0$

## Collegati
- [[Disuguaglianza di Morrey]]: il caso complementare $p>n$
