---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["Lagrange form", "polinomi fondamentali di Lagrange", "Lagrange basis polynomials", "interpolazione di Lagrange"]
tags: [competenza, area/numerica]
---

# Rappresentazione di Lagrange

> Forma del polinomio interpolante come combinazione dei dati $y_j$ con i polinomi fondamentali $\ell_j$: prova costruttivamente l'esistenza.

## Definizione / enunciato
Dati $n+1$ nodi distinti, i **polinomi fondamentali di Lagrange** (grado $n$) sono
$$\ell_j(x)=\frac{(x-x_1)\cdots(x-x_{j-1})(x-x_{j+1})\cdots(x-x_{n+1})}{(x_j-x_1)\cdots(x_j-x_{j-1})(x_j-x_{j+1})\cdots(x_j-x_{n+1})},\quad j=1,\dots,n+1,$$
con $\ell_j(x_i)=1$ se $i=j$ e $0$ se $i\ne j$. La **rappresentazione di Lagrange** del polinomio interpolante è
$$p_n(x)=\sum_{j=1}^{n+1}y_j\,\ell_j(x).$$

## Formule chiave
$$\ell_j(x_i)=\delta_{ij},\qquad p_n(x_i)=\sum_{j}y_j\ell_j(x_i)=y_i$$

## Intuizione
Ogni $\ell_j$ interpola i dati $(x_j,1)$ e $(x_i,0)$ per $i\ne j$; sovrapponendoli con pesi $y_j$ si soddisfano tutte le condizioni. Per l'unicità è lo stesso polinomio della forma monomiale, scritto in un'altra base.

## Come si usa
Esempio delle slide, dati $(0,1),(1,-1),(2,1),(1/2,2)$:
$$p_3(x)=1\cdot\ell_1(x)-1\cdot\ell_2(x)+1\cdot\ell_3(x)+2\cdot\ell_4(x),\quad \ell_1(x)=\frac{(x-1)(x-2)(x-1/2)}{(0-1)(0-2)(0-1/2)},\ \dots$$
Limite pratico: ogni $\ell_j$ dipende da tutti i nodi, quindi aggiungere un dato obbliga a ricalcolarli tutti. Conviene con pochi dati o con nodi fissi e diversi insiemi di valori $y_i$; in pratica si usa la rappresentazione di Newton (solo citata nelle slide). È la base delle formule di integrazione numerica.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn2_approssimazione_print.pdf` (slide 17-23).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): $p_n(x)=\sum_j\ell_j(x)y_j$ con $\ell_j(x_i)=\delta_{ij}$, esempio sui dati $(0,1),(1,-1),(2,1),(1/2,2)$; le slide sottolineano che è la base delle formule di integrazione numerica (pesi $w_j=\int_a^b\ell_j$) e dei metodi per problemi differenziali, ma per il calcolo effettivo conviene solo con pochi dati o nodi fissi, perché aggiungere un nodo obbliga a ricalcolare tutti gli $\ell_j$. I polinomi $\ell_j$ definiscono anche la costante di Lebesgue. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 13-16, 32-34); `triennale/ANNO 2/metodi numerici/CN_MAT_05_integrali_print.pdf` (p. 5).

## Prerequisiti
- [[Interpolazione polinomiale]]: prova costruttiva dell'esistenza

## Porta a
- [[Formule di quadratura interpolatorie]]: i pesi sono gli integrali dei polinomi $\ell_j$ (Metodi numerici)
- [[Costante di Lebesgue]]: è la norma uniforme di $\sum_j|\ell_j|$ (Metodi numerici)

## Collegati
- [[Rappresentazione monomiale del polinomio interpolante]]: due basi per lo stesso polinomio
- [[Formula dei trapezi]]: base delle formule di integrazione numerica
