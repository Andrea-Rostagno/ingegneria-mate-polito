---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["trapezoidal method", "trapezoidal rule for ODEs", "metodo di Crank-Nicolson", "Crank-Nicolson", "metodo dei trapezi", "Adams-Moulton a un passo"]
tags: [competenza, area/numerica]
---

# Metodo dei trapezi per ODE

> Metodo a un passo implicito $y_{n+1}=y_n+\frac h2[f(x_n,y_n)+f(x_{n+1},y_{n+1})]$, di ordine 2 e A-stabile.

## Definizione / enunciato
Se $g\in C^2$, $g(x_{n+1/2})=\frac{g(x_n)+g(x_{n+1})}2+O(h^2)$. Valutando l'equazione in $x_{n+1/2}=x_n+h/2$, con $y'(x_{n+1/2})=\frac{y(x_{n+1})-y(x_n)}h+O(h^2)$ e trascurando gli $O(h^2)$:
$$y_{n+1}=y_n+\frac h2\big[f(x_n,y_n)+f(x_{n+1},y_{n+1})\big].$$
**Costruzione alternativa:** $y(x_{n+1})=y(x_n)+\int_{x_n}^{x_{n+1}}y'(x)\,dx$ con l'integrale approssimato dalla formula del trapezio. È il metodo di Adams-Moulton a un passo. Ordine di convergenza $p=2$ per $f\in F_2(S)$.

## Formule chiave
Caso lineare $y'=g_1y+g_2$:
$$y_{n+1}=\frac{\left(1+\frac h2g_1(x_n)\right)y_n+\frac h2\big(g_2(x_n)+g_2(x_{n+1})\big)}{1-\frac h2g_1(x_{n+1})}.$$
Problema test: $y_{n+1}=\left(\frac{1+h\lambda/2}{1-h\lambda/2}\right)^{n+1}y_0$; regione di stabilità assoluta $\{h\lambda:\mathrm{Re}(h\lambda)<0\}$. Un metodo è **A-stabile** se la sua regione contiene tutto il semipiano $\mathrm{Re}(h\lambda)<0$: lo sono Eulero implicito e trapezi. I metodi A-stabili sono necessariamente impliciti e hanno ordine $p\le2$.

## Intuizione
Media delle pendenze ai due estremi del passo: simmetrico, quindi gli errori di primo ordine si cancellano. È implicito come Eulero implicito, ma un ordine più accurato.

## Come si usa
$y'=y$, $h=0.1$: $y_{n+1}=\frac{1+h/2}{1-h/2}y_n$, $y_1=1.1052\dots$, $y_2=1.2216\dots$, errore $0.2\cdot10^{-3}$. Sistema stiff delle slide (autovalori $-1$ e $-100$): $(I-\frac h2A)\mathbf y_{n+1}=(I+\frac h2A)\mathbf y_n$ resta stabile per ogni $h$ (errore $4.09\cdot10^{-1}$ con $h=0.2$, $3.74\cdot10^{-4}$ con $h=1.56\cdot10^{-3}$). In Matlab è alla base di `ode23t`. Function `trapezi_lineare(g1,g2,x0,y0,xN,N)`.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 38, 48-54, 85, 96, 112-115, 119-120, 133, 135).

## Prerequisiti
- [[Formula dei trapezi]]: approssima l'integrale di $y'$ su un passo
- [[Teorema fondamentale del calcolo integrale]]: $y(x_{n+1})=y(x_n)+\int y'$

## Porta a
- [[Problemi stiff]]: metodo A-stabile, stabile per ogni h

## Collegati
- [[Metodo di Eulero implicito]]: altro metodo A-stabile, di ordine 1
- [[Metodi di Adams]]: è l'Adams-Moulton a un passo
- [[Stabilità assoluta]]: regione uguale al semipiano sinistro
- [[Metodi Runge-Kutta espliciti]]: Heun usa la stessa media di due pendenze, con $y_{n+1}$ stimato da Eulero (collegamento concettuale, non nelle slide)
