---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["errore di interpolazione", "interpolation error", "fenomeno di Runge", "Runge phenomenon", "funzione di Runge", "convergenza uniforme", "norma infinito di funzione"]
tags: [competenza, area/numerica]
---

# Convergenza del polinomio interpolante

> Studio di $\|f-p_n\|_\infty$ al crescere del grado: con nodi equispaziati può divergere (fenomeno di Runge).

## Definizione / enunciato
L'**errore di interpolazione** è $E_n(x)=f(x)-p_n(x)$: si annulla nei nodi ed è identicamente nullo se $f$ è un polinomio di grado $\le n$. Per $g$ continua su $[a,b]$ la **norma uniforme** è $\|g\|_\infty=\max_{x\in[a,b]}|g(x)|$; $\{p_n\}$ converge uniformemente a $f$ se $\lim_{n\to\infty}\|f-p_n\|_\infty=0$.

**Teorema (risultato negativo).** Per qualunque successione di nodi distinti in $[a,b]$ esiste una funzione continua su $[a,b]$ i cui polinomi interpolanti su quei nodi non convergono uniformemente a $f$.

## Formule chiave
$$E_n(x)=f(x)-p_n(x),\qquad \|E_n\|_\infty=\max_{x\in[a,b]}|f(x)-p_n(x)|$$
Nodi equispaziati: $x_i=a+(i-1)h$, $h=\frac{b-a}{n}$. Funzione di Runge: $f(x)=\dfrac1{1+x^2}$.

## Intuizione
Aumentare il grado non migliora necessariamente l'approssimazione: la convergenza dipende dalla scelta dei nodi e dalla regolarità di $f$. Con nodi equispaziati il polinomio oscilla sempre di più vicino agli estremi dell'intervallo.

## Come si usa
Esempio di Runge: con nodi equispaziati in $[-5,5]$ si ha $\lim_n\|E_n\|_\infty=\infty$ (grafici di $p_9$ e $p_{13}$), anche se $f$ è infinitamente derivabile; con nodi equispaziati in $[1,2]$ invece $\|E_n\|_\infty\to0$. Rimedi: nodi di Chebyshev oppure spline.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 24-30, 36).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): il corso dimostra la formula dell'errore: se $f\in C^{n+1}([a,b])$, per ogni $x$ esiste $\xi\in(a,b)$ con $E_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}\omega_{n+1}(x)$, $\omega_{n+1}(x)=(x-x_1)\cdots(x-x_{n+1})$ (applicando più volte il teorema di Rolle a $G(t)=f(t)-p_n(t)-R_n(x)\omega_{n+1}(t)$). Conseguenza: su $I=[x,x+h]$ si ha $\|f-p_n\|_\infty\le\frac{h^{n+1}}{(n+1)!}M_{n+1}=O(h^{n+1})$, che motiva l'interpolazione a tratti. Seconda forma: $E_n(x)=f[x,x_1,\dots,x_{n+1}]\omega_{n+1}(x)$. Teorema positivo: se $f$ è analitica in una regione che contiene $[a,b]$ e le sue singolarità distano da $[a,b]$ più di $b-a$, allora $\|f-p_n\|_\infty\to0$ (spiega il caso di Runge su $[1,2]$). Stima con la costante di Lebesgue: $\|f-p_n\|_\infty\le(1+\Lambda_n)\|E_n^*\|_\infty$. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 36-54).

## Prerequisiti
- [[Interpolazione polinomiale]]: errore f - p_n al crescere di n
- [[Teorema di Rolle]]: applicato n+1 volte nella dimostrazione della formula dell'errore (Metodi numerici)

## Porta a
- [[Nodi di Chebyshev]]: rimedio al fenomeno di Runge

## Collegati
- [[Costante di Lebesgue]]: stima $\|f-p_n\|_\infty\le(1+\Lambda_n)\|E_n^*\|_\infty$ (Metodi numerici)
- [[Spline cubica]]: le spline convergono sempre, i polinomi no
