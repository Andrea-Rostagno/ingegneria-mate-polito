---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["problema di Cauchy per l'equazione del calore", "representation formula for the heat equation", "formula di Duhamel", "velocità di propagazione infinita", "effetto regolarizzante del calore"]
tags: [competenza, area/analisi]
---

# Formule di rappresentazione per l'equazione del calore

> Le soluzioni del problema di Cauchy per il calore in $\mathbb R^n$ si scrivono come convoluzione della soluzione fondamentale con la forzante (in spazio-tempo) e con il dato iniziale (in spazio).

## Definizione / enunciato
Problemi: $(P^f_0)$: $\partial_tu-\Delta_xu=f$ in $\mathbb R^n\times(0,+\infty)$, $u(\cdot,0)=0$; $(P^0_{u_0})$: $\partial_tu-\Delta_xu=0$, $u(\cdot,0)=u_0$; il completo $(P^f_{u_0})$ per sovrapposizione.

**Teorema 6.2.1.** Se $f\in C^2_c(\mathbb R^n\times(0,+\infty))$ (6.13),
$$u(x,t):=(U*_{(x,t)}f)(x,t)=\int_0^t\int_{\mathbb R^n}\frac{e^{-\|y\|^2/4s}}{(4\pi s)^{n/2}}f(x-y,t-s)\,dy\,ds\qquad(6.14)$$
è soluzione classica di $(P^f_0)$.

**Teorema 6.2.2.** Se $u_0\in C^0(\mathbb R^n)\cap L^\infty(\mathbb R^n)$ (6.15),
$$u(x,t):=(U*_xu_0)(x,t)=\frac1{(4\pi t)^{n/2}}\int_{\mathbb R^n}e^{-\|x-y\|^2/4t}u_0(y)\,dy\qquad(6.16)$$
è soluzione classica di $(P^0_{u_0})$, è $C^\infty(\mathbb R^n\times(0,+\infty))$ e $\lim_{(x,t)\to(x_0,0)}u(x,t)=u_0(x_0)$ (6.17).

**Teorema 6.2.4.** Sotto (6.13) e (6.15), $u=u_1+u_2$ (somma di (6.14) e (6.16)) risolve $(P^f_{u_0})$.

## Formule chiave
In 6.2.1 si estende $f$ a zero per $t\le0$; $U(y,s)=0$ per $s<0$ e $\bar f(x-y,t-s)=0$ per $s>t$ riducono l'integrale a $[0,t]$; il dato si recupera da $|u(x,t)|\le t\|f\|_{L^\infty}$. In 6.2.2 la (6.17) si prova spezzando $\int U(x-y,t)|u_0(y)-u_0(x_0)|\,dy=I_\delta+II_\delta$ con $I_\delta\le\varepsilon$ e
$$II_\delta\le2\|u_0\|_\infty\frac1{\pi^{n/2}}\int_{\{\|z\|\ge\delta/4\sqrt t\}}e^{-\|z\|^2}dz\xrightarrow{t\to0^+}0.\qquad(6.20b)$$

## Intuizione
Oss. 6.2.3: (1) la continuità di $u_0$ serve solo per recuperare il dato; (2) se $u_0\ge0$, $u_0\not\equiv0$, allora $u>0$ ovunque per ogni $t>0$: **velocità di propagazione infinita**; (3) $u$ è $C^\infty$ per $t>0$ anche con dati irregolari: **effetto regolarizzante**; (4) basta $|u_0(x)|\le Ae^{a\|x\|^2}$ (6.21) per avere $u$ ben definita per $t\in(0,1/4a)$.

## Come si usa
Per un dato iniziale esplicito si calcola l'integrale gaussiano (6.16), di solito completando il quadrato. Oss. 6.2.5: le formule danno **una** soluzione, non l'unicità; questa si ottiene col principio del massimo o col metodo dell'energia su domini limitati.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §6.2 "Formule di rappresentazione", Teor. 6.2.1, 6.2.2, 6.2.4, Oss. 6.2.3 e 6.2.5. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 61-65).

## Prerequisiti
- [[Soluzione fondamentale dell'equazione del calore]]: il nucleo $U$ e le proprietà (6.10)-(6.12)
- [[Convoluzione]]: convoluzione in $(x,t)$ e in $x$
- [[Disuguaglianza di Young per la convoluzione]]: $u(\cdot,t)\in L^\infty$
- [[Teorema di convergenza dominata]]: passaggi al limite per $t\to0^+$

## Collegati
- [[Equazione del calore]]: soluzione del problema di Cauchy su $\mathbb R^n$
- [[Principio del massimo per l'equazione del calore]]: l'unicità non viene dalle formule
