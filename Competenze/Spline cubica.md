---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["cubic spline", "spline cubica naturale", "spline not-a-knot", "spline vincolata", "natural spline", "clamped spline"]
tags: [competenza, area/numerica]
---

# Spline cubica

> Interpolante cubica a tratti di classe $C^2$, fissata da due condizioni aggiuntive (naturale, not-a-knot, vincolata); converge come $O(h^4)$.

## Definizione / enunciato
Su ogni $[x_i,x_{i+1}]$, $S_3(x)=a_ix^3+b_ix^2+c_ix+d_i$: $4n$ coefficienti. Le condizioni di spline danno $3(n-1)$ continuità di $S_3,S_3',S_3''$ nei nodi interni più $n+1$ interpolazioni, cioè $4n-2$ condizioni; ne servono **due aggiuntive**, che garantiscono esistenza e unicità:
1. **naturale**: $S_3''(x_1)=0$, $S_3''(x_{n+1})=0$;
2. **not-a-knot**: $S_3'''$ continua in $x_2$ e in $x_n$;
3. **vincolata**: $S_3'(x_1)=f'(x_1)$, $S_3'(x_{n+1})=f'(x_{n+1})$.

**Teorema.** Con 1), 2) o 3), se $f\in C^2([a,b])$ allora $\|f-S_3\|_\infty=O(h^2)$. Con 2) o 3), se $f\in C^4([a,b])$ e $h/h_i\le\gamma<\infty$, allora
$$\|f^{(p)}-S_3^{(p)}\|_\infty=O(h^{4-p}),\qquad p=0,1,2,3.$$

## Formule chiave
$$3(n-1)+(n+1)=4n-2\ \text{condizioni},\qquad \|f^{(p)}-S_3^{(p)}\|_\infty=O(h^{4-p})$$

## Intuizione
Il grado locale basso evita le oscillazioni del polinomio interpolante; la regolarità $C^2$ dà curve lisce. $O(h^4)$ è l'ordine massimo anche per $f$ più regolari (saturazione), e anche le derivate fino al terzo ordine convergono (simultanea approssimazione).

## Come si usa
Matlab: `s = spline(x,y,z)` dà la not-a-knot, `s = spline(x,[yd1 y ydn],z)` la vincolata con $f'(x_1)$, $f'(x_{n+1})$. La condizione $h/h_i\le\gamma$ chiede una partizione uniforme o quasi. Usata in grafica al posto del polinomio interpolante perché le oscillazioni di quest'ultimo al crescere di $n$ non sono accettabili (esempi della funzione di Runge e degli ossidi di azoto).

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 44-51, 61).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): cinque scelte delle due condizioni aggiuntive (naturale, derivate seconde esatte, not-a-knot, vincolata, periodica), ciascuna con spline esistente e unica; in pratica si risolve un sistema nelle $n+1$ incognite $M_i=S_3''(x_i)$, simmetrico, a diagonale dominante e tridiagonale per le scelte 1-4 (algoritmo di Thomas). Teorema: se $f\in C^4$ e $h/h_i\le\gamma$, $\|f^{(p)}-S_3^{(p)}\|_\infty=O(h^{4-p})$, $p=0,\dots,3$ (approssimazione simultanea delle derivate). Basi "alla Lagrange" e B-spline cubiche. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 59-60, 63-71, 76-77).

## Prerequisiti
- [[Spline lineare]]: stessa definizione di spline con d = 3

## Porta a
- [[B-spline]]: base a supporto locale dello spazio delle spline cubiche (Metodi numerici)

## Collegati
- [[Convergenza del polinomio interpolante]]: le spline convergono sempre, i polinomi no
- [[Nodi di Chebyshev]]: confronto sulla funzione di Runge in 13 nodi
