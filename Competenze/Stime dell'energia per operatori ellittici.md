---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["energy estimates", "stime dell'energia", "primo teorema di esistenza per soluzioni deboli", "first existence theorem for weak solutions"]
tags: [competenza, area/analisi]
---

# Stime dell'energia per operatori ellittici

> La forma bilineare di un operatore uniformemente ellittico è continua su $H^1_0$ e coerciva a meno di un termine $\gamma\|u\|^2_{L^2}$; aggiungendo $\mu u$ con $\mu\ge\gamma$ si applica Lax-Milgram.

## Definizione / enunciato
**Teorema 2 (stime dell'energia).** Esistono $\alpha,\beta>0$ e $\gamma\ge0$ tali che per ogni $u,v\in H^1_0(U)$
$$\text{(i)}\ |B[u,v]|\le\alpha\|u\|_{H^1_0(U)}\|v\|_{H^1_0(U)},\qquad\text{(ii)}\ \beta\|u\|^2_{H^1_0(U)}\le B[u,u]+\gamma\|u\|^2_{L^2(U)}.$$
**Teorema 3 (primo teorema di esistenza).** Esiste $\gamma\ge0$ tale che per ogni $\mu\ge\gamma$ e ogni $f\in L^2(U)$ esiste un'unica soluzione debole $u\in H^1_0(U)$ di
$$Lu+\mu u=f\ \text{in }U,\qquad u=0\ \text{su }\partial U.\qquad(8)$$
Più in generale vale per $f=f^0-\sum f^i_{x_i}$, $f^i\in L^2$, e $L_\mu=L+\mu I:H^1_0(U)\to H^{-1}(U)$ è un isomorfismo.

## Formule chiave
(i) da $|B[u,v]|\le\sum\|a^{ij}\|_{L^\infty}\int|Du||Dv|+\sum\|b^i\|_{L^\infty}\int|Du||v|+\|c\|_{L^\infty}\int|u||v|$. (ii) dall'ellitticità
$$\theta\int_U|Du|^2dx\le B[u,u]+\sum_i\|b^i\|_{L^\infty}\int_U|Du||u|\,dx+\|c\|_{L^\infty}\int_Uu^2dx,$$
con la disuguaglianza di Cauchy con $\varepsilon$, $\int|Du||u|\le\varepsilon\int|Du|^2+\frac1{4\varepsilon}\int u^2$, scegliendo $\varepsilon\sum\|b^i\|_{L^\infty}<\frac\theta2$: $\frac\theta2\int|Du|^2\le B[u,u]+C\int u^2$; infine Poincaré $\|u\|_{L^2}\le C\|Du\|_{L^2}$.
Teor. 3: $B_\mu[u,v]:=B[u,v]+\mu(u,v)$ soddisfa le ipotesi di Lax-Milgram e $v\mapsto(f,v)$ è limitato su $H^1_0$.

## Intuizione
L'ellitticità controlla il gradiente; i termini di ordine inferiore ($b^i$, $c$) possono "rovinare" la coercività ma solo a livello $L^2$, che è più debole: aggiungere abbastanza $\mu u$ ripristina la coercività.

## Come si usa
Esempio: per $Lu=-\Delta u$, $B[u,v]=\int Du\cdot Dv$, e con Poincaré il Teor. 2 vale con $\gamma=0$; lo stesso per $Lu=-\sum(a^{ij}u_{x_i})_{x_j}+cu$ con $c\ge0$. Allora $-\Delta u=f$, $u\in H^1_0$, ha un'unica soluzione debole per ogni $f\in L^2$ (o $H^{-1}$). Se $\gamma>0$ il caso $\mu=0$ si tratta con l'alternativa di Fredholm.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §6.2.2 "Energy estimates" (Teor. 2 e 3, osservazione sul caso $f\in H^{-1}$, esempi). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 299-302).

## Prerequisiti
- [[Formulazione debole di un problema ellittico]]: la forma bilineare $B$
- [[Teorema di Lax-Milgram]]: esistenza e unicità per $B_\mu$
- [[Disuguaglianza di Poincaré]]: dal gradiente alla norma $H^1_0$
- [[Operatore uniformemente ellittico]]: la condizione (4) dà il controllo del gradiente

## Porta a
- [[Alternativa di Fredholm]]: caso $\mu=0$ via $L_\gamma^{-1}$ compatto
- [[Regolarità delle soluzioni deboli]]: stime di partenza per $H^2$
