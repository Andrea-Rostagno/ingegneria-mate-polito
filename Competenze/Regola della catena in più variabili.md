---
tipo: competenza
area: analisi
corsi: [Analisi 2]
livello: [triennale]
aliases: ["multivariable chain rule", "derivata della funzione composta in più variabili", "derivata lungo una curva", "derivata di f lungo una curva", "chain rule in più variabili"]
tags: [competenza, area/analisi]
---

# Regola della catena in più variabili

> La derivata di $f(g(t))$ è $\nabla f(g(t))\cdot g'(t)$; in generale la jacobiana della composta è il prodotto delle jacobiane.

## Definizione / enunciato
**Teorema (derivata lungo una curva).** Se $g:I\to\mathbb R^n$ è differenziabile in $t_0$ e $f:\mathbb R^n\to\mathbb R$ è differenziabile in $g(t_0)$, allora $h(t)=f(g(t))$ è derivabile in $t_0$ e
$$h'(t_0)=\nabla f(g(t_0))\cdot g'(t_0).$$
**Teorema (chain rule).** Se $g:\mathbb R^m\to\mathbb R^n$ è differenziabile in $P_0$ e $f:\mathbb R^n\to\mathbb R$ in $g(P_0)$, allora $h=f\circ g$ è differenziabile in $P_0$ e
$$\frac{\partial h}{\partial x_k}(P_0)=\sum_{j=1}^n\frac{\partial f}{\partial x_j}(g(P_0))\,\frac{\partial g_j}{\partial x_k}(P_0),\quad k=1,\dots,m.$$
**Caso generale.** Per $g:\mathbb R^m\to\mathbb R^n$ e $f:\mathbb R^n\to\mathbb R^p$ differenziabili, $J_h(P_0)=J_f(g(P_0))\cdot J_g(P_0)$ (matrici $p\times m=(p\times n)(n\times m)$).

## Formule chiave
In coordinate polari $f(r\cos\theta,r\sin\theta)$:
$$\frac{\partial f}{\partial r}=f_x\cos\theta+f_y\sin\theta=\nabla f\cdot(\cos\theta,\sin\theta),\qquad \frac{\partial f}{\partial\theta}=-f_x\,r\sin\theta+f_y\,r\cos\theta=r\,\nabla f\cdot(-\sin\theta,\cos\theta).$$

## Intuizione
Idea della dimostrazione: $g(t_0+\tau)=g(t_0)+g'(t_0)\tau+o(\tau)$ si inserisce nello sviluppo $f(g(t_0)+V)=f(g(t_0))+\nabla f\cdot V+o(\|V\|)$. La $\partial/\partial r$ è la derivata direzionale radiale, la $\partial/\partial\theta$ è $r$ volte quella tangenziale antioraria. Tutti i casi (Analisi I compresa, $m=n=1$) sono casi particolari della formula con le jacobiane.

## Come si usa
Esempio: $h(a,b)=f(a^2b,\ a+b^2a^3,\ b-a^2)$ dà $\frac{\partial h}{\partial a}=f_x\cdot2ab+f_y\cdot(1+3a^2b^2)+f_z\cdot(-2a)$. In coordinate polari $f=(x^2+y^2)(1-x^2-y^2)^4$ diventa $r^2(1-r^2)^4$ (esercizio sui punti critici).

## Nei corsi
- **Analisi 2** (triennale): lezioni del 17/10 e 19/10/2022. Fonti: `triennale/ANNO 2/analisi 2/AII 06 2022 max min chain rule.pdf` (pp. 13-16); `triennale/ANNO 2/analisi 2/AII 07 2022 integrali doppi.pdf` (pp. 1-8).

## Prerequisiti
- [[Differenziabilità in più variabili]]: ipotesi di differenziabilità di f e g
- [[Curve parametriche]]: derivata di f lungo una curva
- [[Regole di derivazione]]: caso m=n=1 di Analisi I
- [[Matrice jacobiana]]: forma matriciale J_h = J_f · J_g
- [[Prodotto di matrici]]: J_h = J_f · J_g

## Porta a
- [[Campo conservativo]]: derivata di f(γ(t))

## Collegati
- [[Coordinate polari e cilindriche]]: ∂f/∂r e ∂f/∂θ in coordinate polari
