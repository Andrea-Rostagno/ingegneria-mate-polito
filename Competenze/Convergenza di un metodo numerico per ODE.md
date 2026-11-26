---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["convergence of ODE methods", "metodo convergente", "convergenza dei metodi a un passo", "convergenza dei metodi a più passi", "teorema di equivalenza", "consistenza più zero-stabilità", "ordine di convergenza di un metodo per ODE"]
tags: [competenza, area/numerica]
---

# Convergenza di un metodo numerico per ODE

> Un metodo è convergente se l'errore globale in ogni punto fissato tende a zero per $h\to0$; vale l'equivalenza convergenza = consistenza + zero-stabilità, con ordine di convergenza uguale all'ordine di consistenza.

## Definizione / enunciato
Un metodo a un passo è **convergente** se, per ogni problema $y'=f(x,y)$, $y(a)=y_0$ con $f\in F_1(S)$ e per ogni $x\in[a,b]$ con $x=a+Nh$,
$$\lim_{N\to\infty\ (h\to0)}|y_N-y(x)|=0 .$$
Per un multistep a $k$ passi si richiede lo stesso per qualunque valore iniziale $y_1,\dots,y_{k-1}$ purché $y_i\to y(a)$ per $h\to0$.

**Teorema (un passo).** Sia $\varphi(x^*,y^*;h)$ continua in $D=S\times[0,h_0]$ e uniformemente lipschitziana in $y^*$. Allora il metodo converge se e solo se è consistente e zero-stabile; se $f\in F_p(S)$ e l'ordine di consistenza è $p$, $|y_N-y(x)|=O(h^p)$.

**Teorema (multistep lineari).** Convergente se e solo se consistente e zero-stabile; con ordine di consistenza $p$ e valori iniziali calcolati con errore $O(h^p)$, $|y_N-y(x)|=O(h^p)$.

## Formule chiave
Ordini di convergenza del corso: Eulero esplicito $p=1$, Eulero implicito $p=1$, trapezi $p=2$, Heun $p=2$, RK a 4 stadi $p=4$; Adams-Bashforth a $k$ passi $p=k$, Adams-Moulton a $k$ passi $p=k+1$.

## Intuizione
L'errore globale è la somma degli errori locali, ciascuno propagato fino al punto finale. La consistenza li rende piccoli, la zero-stabilità impedisce che la propagazione li amplifichi.

## Come si usa
Verifica sperimentale dell'ordine: si dimezza $h$ e si guarda di quanto si divide l'errore (2 per ordine 1, 4 per ordine 2, 16 per ordine 4). Tabella delle slide per $y'=y$ in $x=1$, $h=2^{-1},\dots,2^{-9}$: Eulero da $4.68\cdot10^{-1}$ a $2.65\cdot10^{-3}$, Heun da $7.77\cdot10^{-2}$ a $1.73\cdot10^{-6}$, RK4 da $9.36\cdot10^{-4}$ a $3.29\cdot10^{-13}$. La convergenza non dice quanto piccolo debba essere $h$ in pratica: per questo serve la stabilità assoluta.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_07_ode_valori_iniziali_print.pdf` (p. 63-69, 83-88, 98-99, 103).

## Prerequisiti
- [[Consistenza di un metodo numerico per ODE]]: errore locale infinitesimo
- [[Zero-stabilità]]: accumulo degli errori controllato

## Porta a
- [[Stabilità assoluta]]: cosa succede con h fissato

## Collegati
- [[Metodi Runge-Kutta espliciti]]: ordini 2 e 4 verificati numericamente
- [[Metodi multistep lineari]]: stesso teorema di equivalenza
- [[Ordine di convergenza di un metodo iterativo]]: nozione analoga ma rispetto alle iterazioni
