---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Poisson kernel", "nucleo di Poisson", "formula integrale di Poisson", "Poisson integral formula", "k_R(x,y)"]
tags: [competenza, area/analisi]
---

# Nucleo di Poisson per la palla

> $k_R(x,y)=\frac{R^2-|x|^2}{R\sigma_{n-1}|y-x|^n}$: integrato contro un dato continuo sulla sfera produce l'unica funzione armonica nella palla con quel valore al bordo.

## Definizione / enunciato
Per $x\in B_R$, $y\in\partial B_R$, $n\ge2$:
$$\frac{\partial G^x_{B_R}}{\partial\nu}(y)=\frac1{R\sigma_{n-1}}\cdot\frac{R^2-|x|^2}{|y-x|^n}=:k_R(x,y).\qquad(3.24)$$
Se $u\in C^2(\overline{B_R})$ è armonica in $B_R$: $u(x)=\int_{\partial B_R}k_R(x,y)u(y)\,d\sigma(y)$ (3.25).

**Prop. 3.4.3.** $k_R$ è (i) $C^\infty$; (ii) $>0$; (iii) armonica in $x$; (iv) $\int_{\partial B_R}k_R(x,y)\,d\sigma(y)=1$ per ogni $x\in B_R$ (3.26); (v) per $y\ne x\in\partial B_R$ e $x_k\to x$, $k_R(x_k,y)\to0$ (3.27); (vi) $\liminf_{x\to y,\,x\in\partial B_R}k_R=0$ e $\limsup_{x\to y,\,x\in B_R}k_R=+\infty$ (3.28).

**Teorema 3.4.4.** Sia $g\in C^0(\partial B_R)$ e
$$u(x):=\int_{\partial B_R}k_R(x,y)g(y)\,d\sigma(y).\qquad(3.29)$$
Allora $u\in C^2(B_R)\cap C^0(\overline{B_R})$, è armonica in $B_R$ e $u=g$ su $\partial B_R$.

## Formule chiave
Recupero del dato (3.30): fissati $x_0\in\partial B_R$, $\varepsilon>0$ e $\delta$ dalla continuità di $g$, spezzando la sfera in $\{|y-x_0|\le\delta\}$ e complementare e usando (3.26):
$$u(x)\ge g(x_0)-\varepsilon+\int_{\partial B_R\cap\{|y-x_0|>\delta\}}k_R(x,y)[g(y)-g(x_0)+\varepsilon]\,d\sigma(y),$$
dove l'ultimo integrale tende a $0$ per (3.27); così $\liminf_{x\to x_0}u\ge g(x_0)$, e analogamente per il $\limsup$.

## Intuizione
$k_R(x,\cdot)$ è una densità di probabilità sulla sfera (positiva, massa 1) che si concentra attorno a $x_0$ quando $x\to x_0$: $u(x)$ è una media pesata del dato al bordo, che per $x=0$ diventa la media uniforme (proprietà di media).

## Come si usa
- Esistenza per il problema di Dirichlet per Laplace sulla palla (Teor. 3.4.4); per l'armonicità basta $g\in L^1(\partial B_R)$ (nota 1).
- Disuguaglianza di Harnack: si stima $k_R$ dall'alto e dal basso con $|x-y|\ge R'-r$ e $|x-y|\le R'+r$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): (3.24)-(3.25) e §3.4.2 "Il nucleo di Poisson per la palla $B_R$" (Prop. 3.4.3, Teor. 3.4.4; la fonte avverte che la dimostrazione fatta a lezione conteneva un errore ed è corretta negli appunti). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 28-30).

## Prerequisiti
- [[Funzione di Green per il laplaciano]]: $k_R$ è la sua derivata normale
- [[Convergenza di successioni di funzioni armoniche]]: armonicità di $k_R$ in $x$

## Porta a
- [[Disuguaglianza di Harnack]]: stime di $k_R$ dall'alto e dal basso
- [[Problema di Dirichlet per l'equazione di Poisson]]: esistenza sulla palla

## Collegati
- [[Problema di Dirichlet e moto browniano]]: la stessa soluzione $u(x)=\mathbb E_x[f(W_\tau)]$ come media del dato al bordo
