---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["H^{-1}(U)", "spazio H^{-1}", "duale di H^1_0", "dual of H^1_0", "caratterizzazione di H^{-1}"]
tags: [competenza, area/analisi]
---

# Spazio H-1

> $H^{-1}(U)$ è il duale di $H^1_0(U)$; ogni suo elemento si scrive come $f^0-\sum_if^i_{x_i}$ con $f^0,\dots,f^n\in L^2$: è lo spazio naturale dei termini noti dei problemi ellittici in forma debole.

## Definizione / enunciato
$H^{-1}(U)$ è lo **spazio duale** di $H^1_0(U)$: $f\in H^{-1}(U)$ se è un funzionale lineare limitato su $H^1_0(U)$; $\langle\,,\rangle$ indica l'accoppiamento. Norma:
$$\|f\|_{H^{-1}(U)}=\sup\{\langle f,u\rangle:\ u\in H^1_0(U),\ \|u\|_{H^1_0(U)}\le1\}.$$
**Teorema 1 (caratterizzazione).** (i) Se $f\in H^{-1}(U)$ esistono $f^0,f^1,\dots,f^n\in L^2(U)$ con
$$\langle f,v\rangle=\int_Uf^0v+\sum_{i=1}^nf^iv_{x_i}\,dx\qquad(v\in H^1_0(U));\qquad(1)$$
si scrive $f=f^0-\sum_{i=1}^nf^i_{x_i}$.
(ii) $\|f\|_{H^{-1}(U)}=\inf\Big\{\Big(\int_U\sum_{i=0}^n|f^i|^2dx\Big)^{1/2}:\ f\text{ soddisfa (1) con }f^0,\dots,f^n\in L^2(U)\Big\}$.

## Formule chiave
Dimostrazione: con il prodotto scalare $(u,v)=\int_UDu\cdot Dv+uv\,dx$ su $H^1_0$, il teorema di rappresentazione di Riesz dà un unico $u\in H^1_0$ con
$$\int_UDu\cdot Dv+uv\,dx=\langle f,v\rangle\qquad\forall v\in H^1_0(U),$$
quindi (1) vale con $f^0=u$, $f^i=u_{x_i}$; e per questa scelta $\|f\|_{H^{-1}}=\big(\int_U\sum_{i=0}^n|f^i|^2\big)^{1/2}$, che è il minimo fra tutte le rappresentazioni.

## Intuizione
$H^{-1}$ contiene oggetti più irregolari di $L^2$: "derivate prime di funzioni $L^2$". È ciò che si ottiene applicando un operatore del secondo ordine a una funzione di $H^1_0$, e quindi il codominio giusto per $L:H^1_0\to H^{-1}$.

## Come si usa
Nel problema $Lu=f^0-\sum_if^i_{x_i}$ in $U$, $u=0$ su $\partial U$ il termine noto sta in $H^{-1}$, e la soluzione debole è $u\in H^1_0$ con $B[u,v]=\langle f,v\rangle$. Per $\mu\ge\gamma$, $L_\mu=L+\mu I:H^1_0(U)\to H^{-1}(U)$ è un isomorfismo.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §5.9.1 "The space $H^{-1}$" (definizioni, Teor. 1 con dimostrazione); §5.9.2 è esclusa dal corso. Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 283-284).

## Prerequisiti
- [[Spazi di Sobolev]]: $H^1_0(U)$
- [[Spazio duale]]: definizione di $H^{-1}$
- [[Teorema di rappresentazione di Riesz-Fréchet]]: dimostrazione della caratterizzazione

## Porta a
- [[Formulazione debole di un problema ellittico]]: termini noti in $H^{-1}$
