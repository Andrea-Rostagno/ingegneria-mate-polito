---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["explicit Euler method", "forward Euler", "metodo di Eulero", "Eulero in avanti", "metodi a un passo", "one-step methods", "metodi espliciti e impliciti"]
tags: [competenza, area/numerica]
---

# Metodo di Eulero esplicito

> Il più semplice metodo a un passo per $y'=f(x,y)$: si sostituisce $y'(x_n)$ con il rapporto incrementale in avanti e si avanza con $y_{n+1}=y_n+hf(x_n,y_n)$.

## Definizione / enunciato
**Classificazione.** Sulla partizione $x_0<x_1<\dots$, $x_{n+1}=x_n+h$, un metodo produce $y_n\approx y(x_n)$. È **a un passo** se $y_{n+1}$ dipende solo da $y_n$: esplicito se $y_{n+1}=y_n+h\varphi(x_n,y_n;h,f)$, implicito se $\varphi$ dipende anche da $x_{n+1},y_{n+1}$. È **a $k$ passi** se $y_{n+1}$ dipende da $y_n,\dots,y_{n-k+1}$ (esempio: $y_{n+1}=y_{n-1}+2hf(x_n,y_n)$ è a 2 passi esplicito).

**Eulero esplicito.** Da $y'(x_n)=f(x_n,y(x_n))$ e $y'(x_n)\approx\frac{y(x_{n+1})-y(x_n)}h$:
$$y_{n+1}=y_n+hf(x_n,y_n),\qquad n=0,1,2,\dots$$
È consistente di ordine 1 (errore locale unitario $\frac12hu''(\eta)$) e convergente di ordine $p=1$ per $f\in F_1(S)$.

## Formule chiave
Sul problema test $y'=\lambda y$: $y_{n+1}=(1+h\lambda)^{n+1}y_0$. Regione di stabilità assoluta $\{h\lambda:|1+h\lambda|<1\}$ (cerchio di centro $-1$ e raggio 1); per $\lambda<0$ reale serve $h<2/|\lambda|$. Per i sistemi si applica lo stesso schema componente per componente.

## Intuizione
Si segue la retta tangente alla soluzione per un passo $h$. A ogni passo si introduce un errore locale $O(h^2)$ e si eredita l'errore dei passi precedenti: su $N=O(1/h)$ passi l'errore globale è $O(h)$.

## Come si usa
$y'=y$, $y(0)=1$, $h=0.1$: $y_n=(1.1)^n$, quindi $y_2=1.21$ contro $e^{0.2}=1.2214\dots$, errore $0.11\cdot10^{-1}$. Riducendo $h$ l'errore in $0.2$ scende ($0.59\cdot10^{-2}$ con $h=0.05$, $0.12\cdot10^{-4}$ con $h=10^{-4}$). In $x=1$ dimezzare $h$ dimezza l'errore ($4.68\cdot10^{-1}$ con $h=2^{-1}$, $2.65\cdot10^{-3}$ con $h=2^{-9}$). Function `eulero(f,x0,y0,xN,N)` ed `eulero_system`.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 34-43, 64-69, 74-75, 85-88, 95, 105-111, 130-132).

## Prerequisiti
- [[Problema di Cauchy]]: problema in forma canonica da risolvere
- [[Formule di derivazione numerica]]: $y'(x_n)$ sostituita dalla differenza in avanti

## Porta a
- [[Consistenza di un metodo numerico per ODE]]: primo esempio di ordine di consistenza 1
- [[Stabilità assoluta]]: condizione $h<2/|\lambda|$
- [[Metodi Runge-Kutta espliciti]]: generalizzazione con più valutazioni di $f$ per passo

## Collegati
- [[Metodo di Eulero implicito]]: stessa differenza valutata in $x_{n+1}$
- [[Metodi di Adams]]: Eulero esplicito è Adams-Bashforth a un passo
- [[Formule di Newton-Cotes]]: corrisponde alla formula del rettangolo su $[x_n,x_{n+1}]$
