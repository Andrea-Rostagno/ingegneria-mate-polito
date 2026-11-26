---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["interpolatory quadrature", "formula di quadratura", "quadrature rule", "nodi di quadratura", "pesi di quadratura", "formule interpolatorie pesate", "funzione peso", "weight function", "errore di quadratura", "sistema dei momenti"]
tags: [competenza, area/numerica]
---

# Formule di quadratura interpolatorie

> Si approssima $\int_a^bf$ con l'integrale del polinomio che interpola $f$ in $n$ nodi: si ottiene una somma pesata $\sum w_jf(x_j)$ esatta per i polinomi di grado $\le n-1$.

## Definizione / enunciato
Una **formula di quadratura** è $\int_a^bf(x)\,dx\approx\sum_{j=1}^nw_jf(x_j)$, con nodi distinti $x_j\in[a,b]$ e pesi $w_j\in\mathbb R$. È **interpolatoria** se si ottiene integrando $p_{n-1}(f;x)$, interpolante $f$ negli $n$ nodi:
$$\int_a^bf\approx\int_a^b\sum_{j=1}^n\ell_j(x)f(x_j)\,dx=\sum_{j=1}^nw_jf(x_j),\qquad w_j=\int_a^b\ell_j(x)\,dx .$$
È esatta per ogni polinomio di grado $\le n-1$. Imponendo l'esattezza su $x^k$ si ottiene il sistema di Vandermonde $\sum_jw_jx_j^k=m_k:=\int_a^bx^kdx$, $k=0,\dots,n-1$: fissati i nodi, la formula interpolatoria è unica.

**Formule pesate.** Se $f=w\,g$ con $w$ semplice e "singolare" (peso) e $g$ regolare, si interpola solo $g$:
$$\int_a^bw(x)g(x)\,dx\approx\sum_{j=1}^n\bar w_jg(x_j),\qquad\bar w_j=\int_a^bw(x)\ell_j(x)\,dx .$$
Funzione peso ammissibile: $w\ge0$, $w\not\equiv0$, $\int_a^bw(x)x^kdx<\infty$ per ogni $k$.

## Formule chiave
Errore di quadratura $R_n(g)=\int_a^bwg-\sum_j\bar w_jg(x_j)=\int_a^bw(x)E_n(g;x)\,dx$, con $E_n$ errore di interpolazione. La formula è convergente se $R_n(g)\to0$ per $n\to\infty$.

## Intuizione
Integrare un polinomio è facile, quindi si integra l'interpolante al posto di $f$. Separare la parte singolare nel peso fa sì che il polinomio debba approssimare solo la parte regolare, dove funziona bene.

## Come si usa
Motivazione delle slide: $\int_0^1e^{-x^2}dx$ non ha primitiva elementare. Esempio di peso: $f(x)=xe^{-x}/\sqrt{x-a}$ con $w=1/\sqrt{x-a}$ e $g=xe^{-x}$. Nodi equispaziati danno le formule di Newton-Cotes, zeri di polinomi ortogonali le formule gaussiane.

## Nei corsi
- **Metodi numerici** (triennale): apertura del capitolo sugli integrali. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 2-7, 12-14, 25-27).

## Prerequisiti
- [[Rappresentazione di Lagrange]]: i pesi sono integrali dei polinomi $\ell_j$
- [[Integrale di Riemann]]: la quantità da approssimare
- [[Convergenza del polinomio interpolante]]: l'errore di quadratura è l'integrale dell'errore di interpolazione

## Porta a
- [[Formule di Newton-Cotes]]: nodi equispaziati
- [[Formule gaussiane]]: nodi negli zeri dei polinomi ortogonali
- [[Grado di precisione di una formula di quadratura]]: grado almeno $n-1$
- [[Convergenza delle formule di quadratura]]: comportamento di $R_n$ per $n\to\infty$

## Collegati
- [[Rappresentazione monomiale del polinomio interpolante]]: il sistema dei momenti ha matrice di Vandermonde
