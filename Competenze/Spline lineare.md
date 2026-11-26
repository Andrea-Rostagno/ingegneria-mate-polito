---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["linear spline", "spline di ordine 1", "interpolazione lineare a tratti", "funzione polinomiale a tratti"]
tags: [competenza, area/numerica]
---

# Spline lineare

> Interpolante continua lineare a tratti: converge uniformemente a qualunque $f$ continua quando il passo tende a zero.

## Definizione / enunciato
Una **funzione polinomiale a tratti** di grado $d$ su una partizione di $[a,b]$ è continua e su ogni sottointervallo è un polinomio di grado $\le d$; in genere non è derivabile nei raccordi. La **spline di ordine $d$** interpolante $f$ nei nodi $a\le x_1<\dots<x_{n+1}\le b$ è una $S_d$ tale che: (i) $S_d$ è un polinomio di grado $\le d$ su ogni $[x_i,x_{i+1}]$; (ii) $S_d^{(k)}$ è continua in $[a,b]$ per $k=0,\dots,d-1$; (iii) $S_d(x_i)=y_i$.

Per $d=1$:
$$S_1(x)=f(x_i)+\frac{f(x_{i+1})-f(x_i)}{x_{i+1}-x_i}(x-x_i),\qquad x\in[x_i,x_{i+1}].$$

**Teorema.** Se $f\in C^2([a,b])$ e $h=\max_i(x_{i+1}-x_i)$, allora $\|f-S_1\|_\infty=O(h^2)$ per $h\to0$.

## Formule chiave
$$\|f-S_1\|_\infty=O(h^2),\qquad h=\max_{1\le i\le n}(x_{i+1}-x_i)$$

## Intuizione
Ogni tratto usa solo due nodi vicini, quindi non ci sono oscillazioni globali: la convergenza uniforme vale per ogni $f$ continua e ogni scelta dei nodi con $h\to0$. Il prezzo è l'ordine: $O(h^2)$ è il massimo, anche per $f$ molto regolari.

## Come si usa
In Matlab `s = interp1(x,y,z)`. Il comando `plot(x,y)` disegna proprio la spline lineare interpolante, non $f$: per un grafico liscio servono molti punti (esempio $\sin x$ su $[0,\pi]$ con 5, 8, 11 nodi). Nell'esempio degli ossidi di azoto la spline lineare dà un grafico affidabile dove il polinomio di grado 19 oscilla.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 37-43, 61).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): prima le funzioni polinomiali a tratti di grado $d$ ($d+1$ nodi in ogni $[x_i,x_{i+1}]$; continue se gli estremi sono nodi; $\|f-f_n\|_\infty=O(h^{d+1})$ se $f\in C^{d+1}$, e mai meglio anche se $f$ è più regolare), poi la spline $S_d\in C^{d-1}$ con $(d+1)n$ parametri e $d-1$ condizioni aggiuntive. Spline lineare: $S_1(x)=f(x_i)+\frac{f(x_{i+1})-f(x_i)}{x_{i+1}-x_i}(x-x_i)$ su $[x_i,x_{i+1}]$, `interp1(x,y,z)`, $\|f-S_1\|_\infty=O(h^2)$ per $f\in C^2$, convergenza uniforme per ogni $f$ continua. Base a supporto locale: funzioni "a cappuccio". Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 55-62, 72-75).

## Prerequisiti
- [[Interpolazione polinomiale]]: condizioni di interpolazione imposte a tratti

## Porta a
- [[B-spline]]: le funzioni a cappuccio sono la base a supporto locale delle poligonali (Metodi numerici)
- [[Spline cubica]]: stessa definizione di spline con d = 3
- [[Formula dei trapezi]]: integrale esatto della spline lineare

## Collegati
- Nessuno.
