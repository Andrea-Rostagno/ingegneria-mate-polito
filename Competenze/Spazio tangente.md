---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["tangent space", "T_pS", "T_qΩ", "vettori tangenti come derivazioni", "operatore di derivazione direzionale", "base ∂/∂x_i"]
tags: [competenza, area/algebra-geometria]
---

# Spazio tangente

> In ogni punto c'è uno spazio vettoriale di vettori tangenti. Su un aperto di $\mathbb R^n$ è $\mathbb R^n$ "con origine in $q$"; su una superficie è $\mathrm{Span}\{P_u,P_v\}$. I vettori si identificano con le derivate direzionali.

## Definizione / enunciato
**Superficie.** Se $P:(u,v)\to\mathbb R^3$ è una superficie parametrizzata e $S=\mathrm{Im}P$:
$$T_{P(u_0,v_0)}S=\mathrm{Span}\{P_u(u_0,v_0),P_v(u_0,v_0)\}=\{\gamma'(0)\ :\ \gamma:I\to S,\ \gamma(0)=P_0\}.$$
È l'insieme dei vettori tangenti alle curve di $S$ per $P_0$, ed è uno spazio vettoriale (il piano tangente "immaginato infinito"). Se ci sono autointersezioni conviene parlare di piano tangente "in $(u_0,v_0)$".

**Aperto di $\mathbb R^n$.** $T_q\Omega=\mathbb R^n$, inteso come spazio vettoriale con origine $q$.

**Definizione intrinseca:**
$$T_q\Omega:=\{\text{operatori di derivazione direzionale in }q\}.$$
Il vettore $v$ corrisponde all'operatore $D_v:f\mapsto\lim_{t\to0}\frac{f(q+tv)-f(q)}{t}=\nabla f(q)\cdot v$.

**Proposizione.** $\big(\partial_{x_1}|_q,\dots,\partial_{x_n}|_q\big)$ è una base di $T_q\Omega$.

## Formule chiave
$$v=a_ie_i\ \longleftrightarrow\ a_i\frac{\partial}{\partial x_i}\Big|_q,\qquad X_q=X_q(x_i)\frac{\partial}{\partial x_i}\Big|_q,\qquad \gamma'(0)=\gamma_i'(0)\frac{\partial}{\partial x_i}\Big|_{\gamma(0)}$$
Le componenti si leggono applicando il vettore alle funzioni coordinate. Inoltre $\gamma'(0)(h)=(h\circ\gamma)'(0)$.

## Intuizione
Un vettore tangente "è" il modo in cui deriva le funzioni. Questa definizione non usa lo spazio ambiente, ed è quella che funziona in qualsiasi sistema di coordinate (polari, cilindriche…).

## Come si usa
- $T_pS$ non dipende dalla parametrizzazione: per un cambio di parametri $\alpha$ con jacobiano non singolare, $\mathrm{Span}\{P_u,P_v\}=\mathrm{Span}\{\tilde P_{\tilde u},\tilde P_{\tilde v}\}$ (L11 p. 17).
- Il complemento ortogonale di $T_pS$ è la direzione della normale, quindi della mappa di Gauss.

## Nei corsi
- **Geometria differenziale** (triennale): fonti
  - `triennale/ANNO 2/geometria differenziale/Lezione11_GD.pdf` (pp. 5-17);
  - `triennale/ANNO 2/geometria differenziale/Lezione12_GD.pdf` (pp. 1-13, 23-24);
  - `triennale/ANNO 2/geometria differenziale/Lezione13_GD.pdf` (pp. 1-6).

## Prerequisiti
- [[Curve parametriche]]: i vettori tangenti sono velocità γ'(0)
- [[Superficie parametrica]]: T_pS = Span{P_u, P_v}
- [[Derivata direzionale]]: un vettore agisce come derivata direzionale

## Porta a
- [[Campo vettoriale]]: un vettore tangente in ogni punto
- [[Applicazione tangente]]: f_* trasporta i vettori tangenti
- [[Forma differenziale]]: covettori su T_qΩ

## Collegati
- Nessuno.
