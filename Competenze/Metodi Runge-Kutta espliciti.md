---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["explicit Runge-Kutta methods", "Runge-Kutta", "RK4", "metodo di Heun", "Heun's method", "Eulero modificato", "modified Euler", "Runge-Kutta a 4 stadi", "ode45"]
tags: [competenza, area/numerica]
---

# Metodi Runge-Kutta espliciti

> Metodi a un passo che combinano $r$ valutazioni di $f$ dentro il passo (stadi) per ottenere ordini alti senza derivate di $f$: Heun (ordine 2), Runge-Kutta classico a 4 stadi (ordine 4).

## Definizione / enunciato
Forma generale a $r$ stadi:
$$y_{n+1}=y_n+h\sum_{i=1}^ra_iK_i,\quad K_1=f(x_n,y_n),\quad K_i=f\Big(x_n+b_ih,\ y_n+h\sum_{j=1}^{i-1}c_{ij}K_j\Big),\ i=2,\dots,r.$$
$\sum_ia_iK_i$ è una media pesata di valori di $y'$ in un intorno destro di $x_n$. $\sum_ia_i=1$ garantisce la consistenza; di solito si impone anche $\sum_{j<i}c_{ij}=b_i$; i parametri restanti si scelgono per massimizzare l'ordine (infinite soluzioni).

## Formule chiave
- **Heun** ($r=2$, $a_1=a_2=\frac12$, $b_2=c_{21}=1$): $y_{n+1}=y_n+\frac h2(K_1+K_2)$, $K_2=f(x_n+h,y_n+hK_1)$.
- **Eulero modificato** ($a_1=0$, $a_2=1$, $b_2=\frac12$): $y_{n+1}=y_n+hK_2$, $K_2=f(x_n+\frac h2,y_n+\frac h2K_1)$.
- Ordine 2 per due stadi se e solo se $a_1+a_2=1$ e $a_2b_2=\frac12$ (da Taylor di $\tau$).
- **RK a 4 stadi:** $y_{n+1}=y_n+\frac h6(K_1+2K_2+2K_3+K_4)$, $K_2=f(x_n+\frac h2,y_n+\frac h2K_1)$, $K_3=f(x_n+\frac h2,y_n+\frac h2K_2)$, $K_4=f(x_n+h,y_n+hK_3)$.
- Ordine massimo con $r$ stadi: $p^*(r)=r$ per $r\le4$, $r-1$ per $r=5,6,7$, $r-2$ per $r=8,9$, $\le r-3$ per $r\ge10$.
- Sul problema test $y_{n+1}=(p_r(h\lambda))^{n+1}y_0$ con $p_r$ polinomio di grado $r$; Heun: regione $|1+h\lambda+\frac12(h\lambda)^2|<1$.

## Intuizione
Invece di derivare $f$ (come richiederebbe Taylor di ordine alto) si "assaggia" la pendenza in punti intermedi e la si media con pesi scelti per far coincidere lo sviluppo con quello della soluzione.

## Come si usa
$y'=y$, $h=0.1$, in $0.2$: Heun $1.221025\dots$ (errore $0.38\cdot10^{-3}$), RK4 $1.221402570\dots$ (errore $0.19\cdot10^{-6}$). In $x=1$ dimezzando $h$ l'errore si divide circa per 4 (Heun, $7.77\cdot10^{-2}\to1.73\cdot10^{-6}$) e per 16 (RK4, $9.36\cdot10^{-4}\to3.29\cdot10^{-13}$). Sono espliciti, quindi non A-stabili: con $\lambda=-100$ Heun esplode per $h$ grande. `ode45` usa una coppia RK di ordini 4 e 5 ed è il primo tentativo per un problema nuovo.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 55-62, 77-80, 85-88, 112-116, 121-122, 134-140).

## Prerequisiti
- [[Metodo di Eulero esplicito]]: caso $r=1$
- [[Consistenza di un metodo numerico per ODE]]: i coefficienti si scelgono per massimizzare l'ordine
- [[Formula di Taylor in più variabili]]: sviluppo di $f(x+b_2h,y+b_2hK_1)$

## Porta a
- Nessuno.

## Collegati
- [[Stabilità assoluta]]: regione $|p_r(h\lambda)|<1$, limitata
- [[Metodo dei trapezi per ODE]]: Heun media le stesse due pendenze ma in modo esplicito (collegamento concettuale, non nelle slide)
- [[Convergenza di un metodo numerico per ODE]]: ordine 2 per Heun, 4 per RK4
