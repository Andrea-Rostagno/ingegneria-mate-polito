---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["vector field", "campo vettoriale su un aperto", "campo lungo un'applicazione", "vector field along a map", "campo rotazionale", "a ∂_u + b ∂_v"]
tags: [competenza, area/algebra-geometria]
---

# Campo vettoriale

> Assegna a ogni punto $q$ un vettore tangente $X_q\in T_q\Omega$. In coordinate è un operatore differenziale del primo ordine $a_i\,\partial_{x_i}$ con coefficienti funzioni.

## Definizione / enunciato
Un **campo vettoriale** su un aperto $\Omega\subseteq\mathbb R^n$ è una corrispondenza
$$q\in\Omega\mapsto X_q\in T_q\Omega .$$
In coordinate si scrive
$$X=a_1\partial_{x_1}+\dots+a_n\partial_{x_n},\qquad a_i:\Omega\to\mathbb R,$$
e agisce come $f\mapsto a_i\frac{\partial f}{\partial x_i}$. Ogni campo è combinazione lineare, a coefficienti funzioni, dei $\partial_{x_i}$. Le componenti sono $a_i=X(x_i)$.

Un **campo lungo un'applicazione** $P:\Omega\to\mathbb R^m$ è $Y:q\mapsto Y(q)\in T_{P(q)}\mathbb R^m$. Esempi:
- $X\circ P$, con $X$ campo su $\mathbb R^m$;
- $P_*(X)$, con $X$ campo su $\Omega$: è tangente a $\mathrm{Im}P$.

Su una superficie, $P_*(a\partial_u+b\partial_v)=aP_u+bP_v$.

## Formule chiave
$$X=X(x_i)\frac{\partial}{\partial x_i},\qquad P_*(\partial_u)=P_u,\quad P_*(\partial_v)=P_v,\qquad P_*\Big(a(t)\tfrac{d}{dt}\Big)=a(t)P'(t)$$
Un campo vettoriale è un campo tensoriale di tipo $(1,0)$.

## Intuizione
È un "vento" sul dominio. La scrittura come derivazione rende naturale cambiare coordinate: basta trasformare con l'applicazione tangente.

## Come si usa
Esempi della lezione:
- $X=-v\partial_u+u\partial_v$: campo rotazionale, tangente alle circonferenze centrate nell'origine. In polari diventa $\partial_\varphi$.
- $X=u\partial_u+v\partial_v$: campo radiale. In polari diventa $r\,\partial_r$.
- Sul paraboloide $P=(u,v,u^2+v^2)$: $P_*(v\partial_u-u\partial_v)=v\partial_x-u\partial_y$, applicato in $P(u,v)$.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione12_GD.pdf` (pp. 4-15);
  - `triennale/ANNO 2/geometria differenziale/Lezione13_GD.pdf` (pp. 5-6);
  - `triennale/ANNO 2/geometria differenziale/Lezione15_GD.pdf` (pp. 1-9, 12-16).

## Prerequisiti
- [[Spazio tangente]]: X_q appartiene a T_qΩ

## Porta a
- [[Curve integrali di un campo vettoriale]]: curve con velocità X

## Collegati
- [[Forma differenziale]]: dualità W(X) = W_i a_i
- [[Applicazione tangente]]: f_*(X)∘f⁻¹ è il campo nelle nuove coordinate
- [[Campo conservativo]]: in Analisi 2 il campo è una funzione a valori vettoriali
