---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["trapezoidal rule", "regola dei trapezi", "integrazione numerica", "formula composta dei trapezi", "composite trapezoidal rule"]
tags: [competenza, area/numerica]
---

# Formula dei trapezi

> Approssimazione di un integrale con l'integrale, calcolabile esattamente, della spline lineare interpolante l'integranda.

## Definizione / enunciato
Quando un integrale non si calcola analiticamente (es. la funzione degli errori $\mathrm{erf}(x)=\frac{2}{\sqrt\pi}\int_0^xe^{-t^2}dt$) si sostituisce $f$ con la spline lineare $S_1$ interpolante $f$ in nodi dell'intervallo, per esempio equispaziati, e si integra $S_1$ esattamente. Il valore ottenuto è la **formula dei trapezi**, dal significato geometrico: somma delle aree dei trapezi sotto la spezzata.

## Formule chiave
$$\int_a^b f(x)\,dx\approx\int_a^b S_1(x)\,dx$$
(la formula esplicita come somma non è scritta nelle slide; Matlab: `t = trapz(x,y)`)

## Intuizione
Integrare un'approssimante semplice al posto della funzione: l'errore dell'integrale è controllato dall'errore della spline, quindi diminuisce al crescere del numero di nodi.

## Come si usa
Esempio delle slide: $\mathrm{erf}(2)\approx0.9953222650189527$ approssimato con `2/sqrt(pi)*trapz(xi,yi)` su $2^i+1$ nodi in $[0,2]$. L'errore vale $1.65\cdot10^{-3}$ con 5 nodi, $4.26\cdot10^{-4}$ con 9, e scende fino a $1.05\cdot10^{-7}$ con 513 nodi. Osservazione mia, calcolata dalla tabella: l'errore si divide circa per 4 a ogni raddoppio dei nodi, coerente con $O(h^2)$ della spline lineare.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 52-55).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): la formula del trapezio $\frac{b-a}2[f(a)+f(b)]$ è la Newton-Cotes chiusa a 2 nodi (grado di precisione 1, errore $-\frac{h^3}{12}f''(\xi)$ con $h=b-a$); la "formula dei trapezi" è la sua versione composta, qui scritta esplicitamente: con $h=\frac{b-a}m$, $x_i=a+(i-1)h$,
$$I^{TT}_m=\frac h2\Big[f(x_1)+2\sum_{i=2}^mf(x_i)+f(x_{m+1})\Big],\qquad R^{TT}_m(f)=-\frac{(b-a)}{12}h^2f''(\bar\xi)$$
per $f\in C^2$ (si sommano gli errori locali e si usa la continuità di $f''$); converge per ogni $f\in C^0$. Se $f$ è periodica di periodo $b-a$, $f\in C^{2k+1}$ e $f^{(2j-1)}(a)=f^{(2j-1)}(b)$, $j=1,\dots,k$, l'errore è $O(h^{2k+1})$. Esempio $\int_0^1x^3e^x\,dx$: errore $5.62\cdot10^{-2}$ con $m=4$, $1.41\cdot10^{-2}$ con $m=8$, $8.44\cdot10^{-10}$ con $m=32768$ (divisione per 4 a ogni raddoppio). Function `trapezi(f,a,b,m)`. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 9, 30, 44, 47-51, 59-60); codice `triennale/ANNO 2/metodi numerici/trapezi.m`. Lo stesso schema, applicato a $y'=f(x,y)$, dà il metodo dei trapezi per le equazioni differenziali.

## Prerequisiti
- [[Spline lineare]]: integrale esatto della spline lineare

## Porta a
- [[Metodo dei trapezi per ODE]]: la formula del trapezio applicata a $\int_{x_n}^{x_{n+1}}y'$ (Metodi numerici)
- [[Formula di Simpson]]: Newton-Cotes successiva, errore O(h^4) invece di O(h^2) (Metodi numerici)

## Collegati
- [[Rappresentazione di Lagrange]]: base delle formule di integrazione numerica
- Funzione degli errori (non trattato nei corsi): esempio $\mathrm{erf}(2)$
- [[Integrale di Riemann]]: la quantità che la formula approssima
- [[Formule di quadratura composte]]: è la composta della formula del trapezio (Metodi numerici)
