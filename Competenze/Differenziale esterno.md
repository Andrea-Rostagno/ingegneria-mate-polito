---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["exterior derivative", "differenziale di una k-forma", "d^2 = 0", "dd = 0", "regola di Leibniz per d"]
tags: [competenza, area/algebra-geometria]
---

# Differenziale esterno

> $d$ manda $k$-forme in $(k+1)$-forme: estende $f\mapsto df$, soddisfa Leibniz e ha $d\circ d=0$.

## Definizione / enunciato
- **0-forme:** $df=\frac{\partial f}{\partial x_i}dx_i$.
- **1-forme**, $\theta=\theta_i\,dx_i$:
$$d\theta:=d\theta_i\wedge dx_i=\frac{\partial\theta_i}{\partial x_j}\,dx_j\wedge dx_i .$$
- **2-forme**, $\omega=\omega_{ij}\,dx_i\wedge dx_j$:
$$d\omega:=\frac{\partial\omega_{ij}}{\partial x_k}\,dx_k\wedge dx_i\wedge dx_j .$$
- **Caso generale:**
$$d\omega=\frac{\partial\omega_{i_1\dots i_k}}{\partial x_m}\,dx_m\wedge dx_{i_1}\wedge\dots\wedge dx_{i_k}.$$

**Proprietà:**
- **Leibniz** (dimostrata in coordinate): $d(f\theta)=df\wedge\theta+f\,d\theta$.
- **$d^2=0$:** $d(df)=\frac{\partial^2f}{\partial x_i\partial x_j}dx_j\wedge dx_i=0$, perché il coefficiente è simmetrico e il wedge antisimmetrico. Allo stesso modo $d(d\theta)=0$ per le 1-forme. È dimostrato per 0-forme e 1-forme.

## Formule chiave
In $\mathbb R^2$:
$$d(\theta_1dx+\theta_2dy)=(\partial_x\theta_2-\partial_y\theta_1)\,dx\wedge dy$$
In $\mathbb R^3$, per $\omega=a\,dx\wedge dy+b\,dx\wedge dz+c\,dy\wedge dz$:
$$d\omega=(\partial_za-\partial_yb+\partial_xc)\,dx\wedge dy\wedge dz$$

## Intuizione
$d$ è "la derivata che non dipende dalle coordinate". Sulle 1-forme in $\mathbb R^3$ si riconosce il rotore, sulle 2-forme la divergenza. $d^2=0$ è il teorema di Schwarz detto in modo antisimmetrico.

## Come si usa
Esempi della lezione:
- $\theta=x\,dx+xy\,dy+xz^2dz$: $d\theta=y\,dx\wedge dy+z^2\,dx\wedge dz$.
- $\omega=x\,dy\wedge dz+yz\,dx\wedge dz$: $d\omega=(1-z)\,dx\wedge dy\wedge dz$.

## Nei corsi
- **Geometria differenziale** (triennale): fonte `triennale/ANNO 2/geometria differenziale/Lezione25_GD.pdf` (pp. 1-7, 15-17).

## Prerequisiti
- [[Prodotto wedge]]: d produce wedge di differenziali
- [[Forma differenziale]]: caso base f ↦ df

## Porta a
- [[Forme chiuse ed esatte]]: chiusa se dω = 0, esatta se ω = dθ

## Collegati
- [[Teorema di Schwarz]]: d² = 0 segue dalla simmetria delle derivate seconde
