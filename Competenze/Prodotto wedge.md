---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["wedge product", "prodotto esterno", "exterior product", "k-forma differenziale", "differential k-form", "forma differenziale di grado k", "elemento di volume", "dx ∧ dy"]
tags: [competenza, area/algebra-geometria]
---

# Prodotto wedge

> Le $k$-forme sono campi di tensori $(0,k)$ antisimmetrici e si costruiscono dalle 1-forme con il prodotto wedge. $dx\wedge dy$ misura l'area (con segno) e $dx\wedge dy\wedge dz$ il volume.

## Definizione / enunciato
Una **$k$-forma differenziale** su un aperto $\Omega\subseteq\mathbb R^n$ è un'applicazione multilineare **antisimmetrica**
$$\theta:\underbrace{T\Omega\times\dots\times T\Omega}_{k}\to\mathbb R,\qquad \theta(\dots,X,Y,\dots)=-\theta(\dots,Y,X,\dots),$$
cioè un campo tensoriale $(0,k)$ antisimmetrico. Le 0-forme sono le funzioni, le 1-forme sono le forme differenziali, per esempio $df$.

**Prodotto wedge di 1-forme:**
$$\rho\wedge\theta=\rho\otimes\theta-\theta\otimes\rho,\qquad (\rho\wedge\theta)(X,Y)=\rho(X)\theta(Y)-\theta(X)\rho(Y).$$
Per una funzione: $f\wedge\theta=f\theta$. Per tre 1-forme, $\theta_1\wedge\theta_2\wedge\theta_3$ è la somma con segno sulle 6 permutazioni. Il docente dice che sulla formula generale "non insisteremo".

**Proposizione.** $\{dx_i\wedge dx_j\}_{i<j}$ è una base delle 2-forme, con
$$\theta=\sum_{i<j}\theta(\partial_{x_i},\partial_{x_j})\,dx_i\wedge dx_j .$$
È dimostrata per $n=3$. La dimensione è $\frac{n(n-1)}2$, come quella delle matrici antisimmetriche. Le 3-forme hanno base $dx_i\wedge dx_j\wedge dx_k$ con $i<j<k$. Su $\mathbb R^n$ non ci sono $k$-forme non nulle con $k>n$.

## Formule chiave
$$(dx\wedge dy)(v,w)=v_1w_2-v_2w_1=\det\begin{pmatrix}v_1&v_2\\w_1&w_2\end{pmatrix},\qquad (dx\wedge dy\wedge dz)(u,v,w)=\det(u;v;w)$$

## Intuizione
L'antisimmetria rende nulla la forma su vettori dipendenti: è il comportamento di un'area o di un volume orientato. Per questo $dx\wedge dy$ è "l'elemento d'area infinitesimo" di $\mathbb R^2$ e $dx\wedge dy\wedge dz$ quello di volume di $\mathbb R^3$.

## Come si usa
- È la base del differenziale esterno.
- Sulle superfici, la 2-forma $\|P_u\times P_v\|\,du\wedge dv=\sqrt{EG-F^2}\,du\wedge dv$ è l'elemento d'area.

## Nei corsi
- **Geometria differenziale** (triennale): fonti `triennale/ANNO 2/geometria differenziale/Lezione24_GD.pdf` (pp. 1-12); `triennale/ANNO 2/geometria differenziale/Lezione25_GD.pdf` (pp. 21-23).

## Prerequisiti
- [[Forma differenziale]]: i fattori del prodotto sono 1-forme
- [[Tensore]]: le k-forme sono tensori (0,k) antisimmetrici

## Porta a
- [[Differenziale esterno]]: d manda k-forme in (k+1)-forme
- [[Integrale di superficie]]: elemento d'area come 2-forma

## Collegati
- [[Determinante]]: dx∧dy e dx∧dy∧dz valutate sono determinanti
- [[Prodotto misto]]: l'elemento di volume è il prodotto misto
