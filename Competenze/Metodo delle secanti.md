---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["secant method", "metodo della secante", "metodo di Muller", "Muller's method"]
tags: [competenza, area/numerica]
---

# Metodo delle secanti

> Metodo iterativo per $f(x)=0$ che sostituisce $f$ con la retta per gli ultimi due punti calcolati e ne prende lo zero come nuova approssimazione.

## Definizione / enunciato
Partendo da $x_0,x_1$, $x_{n+1}$ è l'intersezione con l'asse $x$ della retta per $(x_{n-1},f(x_{n-1}))$ e $(x_n,f(x_n))$. Rispetto alla bisezione usa i **valori** di $f$, non solo i segni.

**Teorema di convergenza locale.** Se tutte le iterate stanno in $[a,b]$, $\alpha$ è radice semplice in $[a,b]$, $f\in C^2([a,b])$ e $|\alpha-x_0|$, $|\alpha-x_1|$ sono sufficientemente piccoli, allora $x_n\to\alpha$ con ordine
$$p=\frac{1+\sqrt5}{2}\approx1.618 .$$
Se la radice ha molteplicità $\mu\ge2$ ($f(\alpha)=\dots=f^{(\mu-1)}(\alpha)=0$, $f^{(\mu)}(\alpha)\ne0$) in generale il metodo non converge.

## Formule chiave
$$x_{n+1}=x_n-f(x_n)\,\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})},\qquad n=1,2,\dots$$
Equivale a risolvere $p_1(x)=0$ con $p_1$ interpolante in $x_{n-1},x_n$: $f(x_n)+f[x_{n-1},x_n](x-x_n)=0$. Aggiungendo il termine $f[x_{n-2},x_{n-1},x_n](x-x_n)(x-x_{n-1})$ si ottiene il **metodo di Muller** (ordine $p\approx1.84$; si prende la radice reale della parabola più vicina a $x_n$).

## Intuizione
È Newton con la derivata sostituita dal rapporto incrementale sugli ultimi due punti: un'unica valutazione di $f$ per passo e niente derivata, al prezzo di un ordine un po' più basso di 2.

## Come si usa
Function del corso `secanti(f,x0,x1,nmax,tol)`: si arresta quando $|x-x_1|\le$ `tol`. Esempio delle slide: $x^4-4=0$, $x_0=1$, $x_1=2$, `tol` $=10^{-10}$; l'errore $|\alpha-x_n|$ scende da $5.86\cdot10^{-1}$ a $3.65\cdot10^{-11}$ in 8 iterazioni ($\alpha=\sqrt2$).

## Nei corsi
- **Metodi numerici** (triennale): secondo metodo per equazioni non lineari, dopo la bisezione. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_04_sistemi_non_lineari_print.pdf` (p. 17-23); codice `triennale/ANNO 2/metodi numerici/secanti.m`.

## Prerequisiti
- [[Ordine di convergenza di un metodo iterativo]]: ordine $1.618$
- [[Rappresentazione di Newton]]: la secante è il polinomio interpolante con differenze divise

## Porta a
- Nessuno.

## Collegati
- [[Metodo di Newton]]: tangente al posto della secante, ordine 2
- [[Teorema degli zeri]]: la bisezione usa solo i segni di $f$
- [[Criteri di arresto dei metodi iterativi]]: arresto sull'incremento $|x_{n+1}-x_n|$
- [[Metodo del punto fisso]]: le secanti non sono un metodo di punto fisso ($x_{n+1}$ dipende anche da $x_{n-1}$)
