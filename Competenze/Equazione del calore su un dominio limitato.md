---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["heat equation on a bounded domain", "equazione del calore con condizioni di Neumann", "conservazione della massa per il calore", "positività della soluzione del calore", "convergenza alla distribuzione uniforme"]
tags: [competenza, area/analisi]
---

# Equazione del calore su un dominio limitato

> Con flusso nullo al bordo (Neumann omogeneo) la soluzione conserva massa e positività e tende, per $t\to+\infty$, alla costante $1/|\Omega|$: l'effetto della diffusione.

## Definizione / enunciato
$\Omega\subset\mathbb R^n$ aperto limitato. Scritta l'equazione come legge di conservazione con $F=-D\nabla u$, imporre che la particella non esca, $F\cdot n=0$, dà la **condizione di Neumann omogenea** (L27 p. 4):
$$\partial_tu-D\Delta u=0\ \text{in }\Omega\times(0,+\infty),\qquad u=u_0\ \text{a }t=0,\qquad\frac{\partial u}{\partial n}=0\ \text{su }\partial\Omega .$$
**Teorema (L27 pp. 4-5).** Se $u_0\in L^1$ (scritto $L^1(\mathbb R)$, da leggere $L^1(\Omega)$), $u_0\ge0$ e $\int_\Omega u_0=1$, allora $u(x,t)\ge0$ e $\int_\Omega u(x,t)\,dx=1$ per ogni $t>0$.

## Formule chiave
- Massa: $\frac{d}{dt}\int_\Omega u=D\int_\Omega\mathrm{div}(\nabla u)=D\int_{\partial\Omega}\frac{\partial u}{\partial n}=0$.
- Positività: con $u^-=\max\{0,-u\}$ si ottiene $\frac{d}{dt}\int_\Omega(u^-)^2=-2D\int_\Omega|\nabla u^-|^2\le0$, e $u^-(\cdot,0)=0$, quindi $u^-=0$ q.o. (L28 pp. 1-2).
- Serie (L28 pp. 3-6): $u=\sum_k\hat u_{k,0}e^{-D\lambda_kt}\varphi_k$ con $\lambda_0=0$, $\varphi_0\equiv1$, $\lambda_k>0$ per $k>0$, quindi
$$\lim_{t\to+\infty}u(x,t)=\hat u_{0,0}=\frac1{|\Omega|},$$
dove $\hat u_{0,0}|\Omega|=\int_\Omega u_0=1$ perché $\int_\Omega\varphi_k=0$ per $k\ge1$.

## Intuizione
Il calore non può uscire, quindi la quantità totale resta; nel frattempo la diffusione livella ogni differenza, e l'unico stato stazionario compatibile è quello uniforme.

## Come si usa
Esempio 1D su $(0,1)$ (L29): $u_0=\cos(\pi x)+1$ dà $u=1+e^{-D\pi^2t}\cos(\pi x)$, che converge a 1 uniformemente in $x$ con $\|u(\cdot,t)-1\|_\infty\le e^{-D\pi^2t}$. Su $\mathbb R$ invece la soluzione fondamentale ha supporto tutto $\mathbb R$ per ogni $t>0$ (trasporto a velocità infinita).

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/27 - Lezione 13_12_23.pdf` (pp. 3-6); `triennale/ANNO 3/eq fisica matematica/28 - Lezione 15_12_23.pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/29 - Lezione 19_12_23.pdf` (pp. 1-5).

## Prerequisiti
- [[Equazione del calore]]: equazione e interpretazione probabilistica
- [[Legge di conservazione]]: flusso nullo al bordo ⇒ Neumann omogeneo
- [[Soluzione per serie di autofunzioni]]: sviluppo nella base di Neumann
- [[Teorema della divergenza]]: conservazione della massa

## Collegati
- [[Metodo dell'energia]]: stesso calcolo, usato per l'unicità
