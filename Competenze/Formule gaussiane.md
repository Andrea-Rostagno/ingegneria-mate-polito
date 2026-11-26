---
tipo: competenza
area: numerica
corsi: [Metodi numerici, Ottimizzazione in condizione di incertezza]
livello: [triennale, magistrale]
aliases: ["Gaussian quadrature", "quadratura gaussiana", "formule di Gauss", "Gauss-Legendre", "Gauss-Chebyshev", "Gauss-Jacobi", "Gauss-Laguerre", "Gauss-Hermite", "polinomi ortogonali", "orthogonal polynomials", "polinomi di Legendre", "polinomi di Jacobi"]
tags: [competenza, area/numerica]
---

# Formule gaussiane

> Formule interpolatorie pesate con nodi negli zeri dei polinomi ortogonali rispetto al peso: raggiungono il grado di precisione massimo $2n-1$ e convergono per ogni integranda continua.

## Definizione / enunciato
Un peso $w$ su $[a,b]$ definisce, a meno di costanti, polinomi **ortogonali** $\{P_n\}$: $\int_a^bwP_nP_m\,dx=0$ per $n\ne m$, $\ne0$ per $n=m$. $P_n$ ha esattamente $n$ zeri reali, distinti, in $(a,b)$. La formula interpolatoria pesata
$$\int_a^bw(x)g(x)\,dx\approx\sum_{j=1}^n\bar w_jg(x_j),\quad \bar w_j=\int_a^bw\ell_j\,dx,$$
con $x_j$ zeri di $P_n$ è detta **gaussiana**. Nodi e pesi si calcolano in pratica da un problema agli autovalori di una matrice tridiagonale simmetrica.

**Teorema.** Una formula a $n$ nodi è gaussiana se e solo se è esatta per tutti i polinomi di grado $\le2n-1$ (dimostrazione: divisione $d_m=P_nq_{m-n}+r_{n-1}$ e ortogonalità di $P_n$).

**Teorema.** I pesi gaussiani sono positivi, $\bar w_i=\int_a^bw\ell_i^2>0$; quindi $\sum|\bar w_j|=\int_a^bw$ e le formule convergono per ogni $g\in C^0$, con $|R_n(g)|=O(n^{-(k+\mu)})$ se $g\in C^{k,\mu}$.

## Formule chiave
Su $[-1,1]$:
- **Jacobi** $w=(1-x)^\alpha(1+x)^\beta$, $\alpha,\beta>-1$;
- **Legendre** $w=1$ ($\alpha=\beta=0$);
- **Chebyshev di prima specie** $w=1/\sqrt{1-x^2}$: $\bar w_j=\pi/n$, $x_j=\cos\frac{(2j-1)\pi}{2n}$;
- **Chebyshev di seconda specie** $w=\sqrt{1-x^2}$: $\bar w_j=\frac\pi{n+1}\sin^2\theta_j$, $x_j=\cos\theta_j$, $\theta_j=\frac{j\pi}{n+1}$.

Intervalli illimitati: Gauss-Laguerre ($e^{-x}$ e $x^\alpha e^{-x}$ su $(0,\infty)$), Gauss-Hermite ($e^{-x^2}$ su $\mathbb R$). Da $[a,b]$ a $[-1,1]$ con $x=\frac{b-a}2t+\frac{b+a}2$.

## Intuizione
Scegliere anche i nodi, oltre ai pesi, raddoppia i gradi di libertà; gli zeri dei polinomi ortogonali sono la scelta che li sfrutta tutti. I pesi positivi rendono la formula stabile.

## Come si usa
Gauss-Legendre a 2 nodi ($\bar w=1$, $x=\pm1/\sqrt3$) integra esattamente $\int_{-1}^1(x^3+1)dx=2$. Su $\int_0^1x^3e^x\,dx$ l'errore è $1.79\cdot10^{-2}$ con $n=2$, $4.00\cdot10^{-7}$ con $n=4$, $6.66\cdot10^{-16}$ con $n=7$. Conviene se l'integranda è regolare (molte derivate, poche oscillazioni, singolarità complesse lontane). Function `GaussLegendre(g,a,b,xL,wL)` e `GaussChebyshev(g,a,b,n)`.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 14-24, 32-35, 41-42, 63); codice `triennale/ANNO 2/metodi numerici/GaussLegendre.m`, `GaussChebyshev.m`.
- **Ottimizzazione in condizione di incertezza** (magistrale): quadratura come **discretizzazione di una distribuzione** (nodi = valori, pesi = probabilità), legata al moment matching: con nodi $0,0.5,1$ su $[0,1]$ l'esattezza fino al grado 2 dà $w_0=1/6$, $w_1=2/3$, $w_2=1/6$ (Simpson). Con $Y\sim N(\mu,\sigma^2)$ e il cambio $y=\sqrt2\sigma x+\mu$, Gauss-Hermite dà $\mathbb E[f(Y)]\approx\frac1{\sqrt\pi}\sum_{i=1}^nw_if(\sqrt2\sigma x_i+\mu)$ (funzione `GaussHermiteNormal`). Con $\mu=4$, $\sigma=2$ e 5 nodi si riproducono media, varianza, asimmetria 0 e curtosi 3; per $\mathbb E[e^Y]=e^{\mu+\sigma^2/2}\approx403.43$ l'errore è 1.18% con 5 nodi e $5.54\cdot10^{-5}\%$ con 10, contro la forte variabilità del Monte Carlo con 1000 campioni (268.47, 458.70, 462.10). Le regole prodotto in $d$ dimensioni diventano impraticabili, il che motiva il Monte Carlo. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/02 - IntroSimulation.pdf` (p. 34-40, 44-45); codice `magistrale/Ottimizzazione in condizione di incertezza/codici/GaussHermite.m`.

## Prerequisiti
- [[Formule di quadratura interpolatorie]]: formule pesate con nodi scelti
- [[Grado di precisione di una formula di quadratura]]: grado massimo $2n-1$
- [[Autovalori e autovettori]]: nodi e pesi da una matrice tridiagonale simmetrica

## Porta a
- [[Convergenza delle formule di quadratura]]: pesi positivi, quindi convergenza per ogni $g$ continua

## Collegati
- [[Nodi di Chebyshev]]: gli stessi zeri di $T_n$ sono i nodi di Gauss-Chebyshev
- [[Formule di Newton-Cotes]]: nodi fissi equispaziati, pesi di segno variabile
- [[Formule di quadratura composte]]: Gauss-Legendre composta con errore $O(h^{2k-1})$
- [[Metodo Monte Carlo]]: alternativa casuale, preferibile in dimensione alta (Ottimizzazione in condizione di incertezza)
- [[Distribuzione normale]]: Gauss-Hermite discretizza una normale (Ottimizzazione in condizione di incertezza)
