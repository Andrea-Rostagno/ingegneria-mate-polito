---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Adams methods", "Adams-Bashforth", "Adams-Moulton", "metodi di Adams-Bashforth", "metodi di Adams-Moulton"]
tags: [competenza, area/numerica]
---

# Metodi di Adams

> Metodi multistep ottenuti integrando $y'$ su $[x_n,x_{n+1}]$ con una formula di quadratura interpolatoria sui punti precedenti (Adams-Bashforth, espliciti) o anche su $x_{n+1}$ (Adams-Moulton, impliciti).

## Definizione / enunciato
Dall'identità $y(x_{n+1})=y(x_n)+\int_{x_n}^{x_{n+1}}y'(x)\,dx$ (caso $m=0$ di $y(x^*+h)=y(x^*-mh)+\int y'$):
- **Adams-Bashforth a $k$ passi** (nodi $x_n,\dots,x_{n-k+1}$):
$$y_{n+1}=y_n+h\sum_{i=1}^k\beta_if(x_{n-i+1},y_{n-i+1}),\qquad h\beta_i=\int_{x_n}^{x_{n+1}}\ell_i(x)\,dx;$$
- **Adams-Moulton a $k$ passi** (nodi $x_{n+1},x_n,\dots,x_{n-k+1}$):
$$y_{n+1}=y_n+h\sum_{i=0}^k\beta_i^*f(x_{n-i+1},y_{n-i+1}),\qquad h\beta_i^*=\int_{x_n}^{x_{n+1}}\ell_i(x)\,dx,$$
con $\ell_i$ polinomi di Lagrange sui rispettivi nodi.

## Formule chiave
- $k=1$ con la formula del rettangolo ($\beta_1=1$): Eulero esplicito.
- $k=1$ con la formula del trapezio ($\beta_0^*=\beta_1^*=\frac12$): metodo dei trapezi.
- Ordini: $p=k$ per Adams-Bashforth ($f\in F_k$), $p=k+1$ per Adams-Moulton ($f\in F_{k+1}$).
- Equazione caratteristica $t^k-t^{k-1}=0$: condizione delle radici soddisfatta, quindi zero-stabili e convergenti.
- Adams-Moulton: a ogni passo $y_{n+1}=h\beta_0^*f(x_{n+1},y_{n+1})+g_n$, risolta analiticamente se $f$ è lineare in $y$, altrimenti con Newton o punto fisso.

## Intuizione
È la quadratura interpolatoria applicata a $y'=f$: si interpola la pendenza sui valori noti e la si integra sull'ultimo passo.

## Come si usa
Si sceglie $k$, si calcolano i $\beta_i$ integrando i polinomi di Lagrange e si avvia il metodo con $k-1$ valori ottenuti da un metodo a un passo dello stesso ordine.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 90-97, 99, 102).

## Prerequisiti
- [[Metodi multistep lineari]]: forma generale a k passi
- [[Formule di quadratura interpolatorie]]: pesi come integrali dei polinomi di Lagrange
- [[Teorema fondamentale del calcolo integrale]]: $y(x_{n+1})-y(x_n)=\int y'$

## Porta a
- Nessuno.

## Collegati
- [[Metodo di Eulero esplicito]]: Adams-Bashforth a un passo
- [[Metodo dei trapezi per ODE]]: Adams-Moulton a un passo
- [[Zero-stabilità]]: radici 0 e 1 dell'equazione caratteristica
- [[Metodo di Newton]]: risolve l'equazione implicita di Adams-Moulton
