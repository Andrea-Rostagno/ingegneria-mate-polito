---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["Chebyshev nodes", "nodi di Chebyshev-Lobatto", "Chebyshev-Lobatto nodes", "nodi di Čebyšëv"]
tags: [competenza, area/numerica]
---

# Nodi di Chebyshev

> Nodi addensati agli estremi dell'intervallo che garantiscono la convergenza uniforme del polinomio interpolante per $f\in C^1$.

## Definizione / enunciato
**Nodi di Chebyshev-Lobatto** in $[-1,1]$:
$$z_i=-\cos\frac{(i-1)\pi}{n},\qquad i=1,\dots,n+1.$$
**Nodi di Chebyshev** in $(-1,1)$:
$$z_i=-\cos\frac{(2i-1)\pi}{2(n+1)},\qquad i=1,\dots,n+1.$$
Su $[a,b]$ si usano $x_i=\frac{b-a}2z_i+\frac{b+a}2$.

**Teorema.** Se $p_n$ interpola $f$ nei nodi di Chebyshev-Lobatto o di Chebyshev di $[a,b]$ e $f\in C^k([a,b])$, $k\ge1$, allora
$$\|f-p_n\|_\infty=O\Big(\frac{\log n}{n^k}\Big),\qquad n\to\infty.$$

## Formule chiave
$$x_i=\frac{b-a}{2}z_i+\frac{b+a}{2},\qquad \|f-p_n\|_\infty=O\Big(\frac{\log n}{n^k}\Big)$$

## Intuizione
I nodi sono le proiezioni sull'asse di punti equispaziati su una semicirconferenza (figura per $n=8$), quindi si addensano agli estremi, proprio dove i nodi equispaziati lasciano oscillare il polinomio. Più $f$ è regolare, più la convergenza è rapida.

## Come si usa
Per la funzione di Runge in $[-5,5]$ con nodi di Chebyshev ($n=9,13$) si ha $\|f-p_n\|_\infty\to0$. La convergenza uniforme **non** è garantita se $f$ è solo continua. Con 13 nodi di Chebyshev le slide confrontano $p_{12}$ e la spline cubica not-a-knot sulla funzione di Runge.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 31-36, 50).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): nodi di Chebyshev $x_i=\frac{b-a}2\cos\frac{(2i-1)\pi}{2(n+1)}+\frac{b+a}2$ e di Chebyshev-Lobatto $x_i=\frac{b-a}2\cos\frac{(i-1)\pi}{n}+\frac{b+a}2$, $i=1,\dots,n+1$, entrambi con $\Lambda_n=O(\log n)$ (equispaziati $O(e^n)$); se $f$ è hölderiana di ordine $\mu$, $\|f-p_n\|_\infty=O(\log n/n^\mu)$, quindi la convergenza uniforme è garantita. Gli zeri dei polinomi di Chebyshev ritornano come nodi della formula di Gauss-Chebyshev. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 35, 51-54); `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 21-22).

## Prerequisiti
- [[Convergenza del polinomio interpolante]]: rimedio al fenomeno di Runge

## Porta a
- Nessuno.

## Collegati
- [[Costante di Lebesgue]]: per questi nodi cresce solo come log n (Metodi numerici)
- [[Formule gaussiane]]: gli stessi zeri sono i nodi di Gauss-Chebyshev (Metodi numerici)
- [[Spline cubica]]: confronto sulla funzione di Runge in 13 nodi
