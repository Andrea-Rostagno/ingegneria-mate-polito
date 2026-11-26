---
tipo: competenza
area: algebra-geometria
corsi: [Geometria differenziale]
livello: [triennale]
aliases: ["integral curves", "curva integrale", "linee di flusso", "flow lines", "orbite di un campo", "punto stazionario di un campo"]
tags: [competenza, area/algebra-geometria]
---

# Curve integrali di un campo vettoriale

> Sono le curve la cui velocità coincide in ogni istante con il campo: trovarle significa risolvere un sistema di equazioni differenziali ordinarie.

## Definizione / enunciato
Sia $X$ un campo vettoriale su un aperto $\Omega\subseteq\mathbb R^n$. Una curva $P:I\to\Omega$ è una **curva integrale** di $X$ se
$$P'(t)=X_{P(t)}\qquad\forall t\in I.$$
Se $X=(a_1,\dots,a_n)$, la condizione è il sistema di $n$ EDO
$$x_k'(t)=a_k(x_1(t),\dots,x_n(t)),\qquad k=1,\dots,n.$$
"Teoricamente è sempre possibile trovarle; in pratica è laborioso." Un punto in cui $X=0$ è **stazionario**.

**Proposizione (dimostrata).** Sia $P:\Omega\to S$ iniettiva e $X$ un campo su $\Omega$. Allora $\gamma$ è curva integrale di $P_*(X)\circ P^{-1}$ (campo su $S$) se e solo se $\alpha=P^{-1}\circ\gamma$ è curva integrale di $X$. In pratica le curve integrali sulla superficie sono le immagini $P(\alpha(t))$.

## Formule chiave
Esempi della lezione:
- $X=u\partial_u+v\partial_v$: $u=u_0e^t$, $v=v_0e^t$. Semirette uscenti dall'origine, che è stazionaria.
- $X=u^2\partial_u+v\partial_v$: $u=\frac{u_0}{1-u_0t}$, $v=v_0e^t$, quindi $v=v_0e^{1/u_0-1/u}$.
- $X=v\partial_u-u\partial_v$: $u=u_0\cos t+v_0\sin t$, $v=-u_0\sin t+v_0\cos t$. Circonferenze concentriche, campo rotazionale.

## Intuizione
Il campo è un "vento" e le curve integrali sono le traiettorie di un granello trasportato. Il sistema è autonomo, perché il campo non dipende da $t$.

## Come si usa
- Sul paraboloide $P=(u,v,u^2+v^2)$ con $X=v\partial_u-u\partial_v$, le curve integrali sono circonferenze orizzontali a quota $u_0^2+v_0^2$.
- Su $P=(u^2+v,uv,u+v)$ con $X=u\partial_u+v\partial_v$, sono $P(\alpha(t))=\big(u_0^2e^{2t}+v_0e^t,\ u_0v_0e^{2t},\ (u_0+v_0)e^t\big)$.
- Le linee di curvatura di una superficie sono curve integrali dei campi delle direzioni principali.

## Nei corsi
- **Geometria differenziale** (triennale): fonti `triennale/ANNO 2/geometria differenziale/Lezione14_GD.pdf` (pp. 13-21); `triennale/ANNO 2/geometria differenziale/Lezione15_GD.pdf` (pp. 10-16).

## Prerequisiti
- [[Campo vettoriale]]: la curva segue il campo
- [[Problema di Cauchy]]: il sistema di EDO con dato iniziale P(0)

## Porta a
- [[Linee di curvatura]]: curve integrali delle direzioni principali

## Collegati
- [[Teorema di esistenza e unicità locale]]: garantisce l'esistenza delle curve integrali
