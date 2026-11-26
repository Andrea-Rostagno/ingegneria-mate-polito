---
tipo: competenza
area: analisi
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["wave equation on the half-line", "problema ai valori iniziali e al bordo per le onde", "onde sulla semiretta", "onde su un intervallo limitato"]
tags: [competenza, area/analisi]
---

# Equazione delle onde sulla semiretta

> Su $x>0$ servono un dato al bordo oltre ai due dati iniziali; la soluzione coincide con d'Alembert per $x>ct$ e porta l'informazione del bordo per $x<ct$.

## Definizione / enunciato
Con $c>0$ (L22 p. 1):
$$\begin{cases}\partial_t^2u-c^2\partial_x^2u=0&\text{in }(0,+\infty)\times(0,+\infty)\\u=u_0,\ \partial_tu=u_1&t=0\\u=g&x=0,\ t>0\end{cases}$$
La fattorizzazione $(\partial_t+c\partial_x)(\partial_t-c\partial_x)u$ richiederebbe $v(0,t)$, che non è noto; si inverte allora l'ordine: $v=\partial_tu+c\partial_xu$ con $\partial_tv-c\partial_xv=0$, $v(x,0)=u_1+cu_0'$, quindi $v(x,t)=u_1(x+ct)+cu_0'(x+ct)$.

## Formule chiave
Risolvendo $\partial_tu+c\partial_xu=v$ con $u=g$ su $x=0$ (L22 p. 5):
$$u(x,t)=\begin{cases}\frac12\big(u_0(x-ct)+u_0(x+ct)\big)+\frac1{2c}\int_{x-ct}^{x+ct}u_1&x>ct\\[4pt] g\!\left(t-\frac xc\right)+\frac12\big(u_0(ct+x)-u_0(ct-x)\big)+\frac1{2c}\int_{ct-x}^{ct+x}u_1&x<ct\end{cases}$$
Salto lungo $x=ct$: $u((ct)^+,t)-u((ct)^-,t)=u_0(0)-g(0)$. Quindi $u$ è discontinua se $u_0(0)\ne g(0)$; $u_1$ non c'entra.
**Neumann** $\partial_xu(0,t)=h(t)$ (L23 pp. 1-3): si ricava $u(0,t)=\frac1c\int_0^{ct}u_1+u_0(ct)-c\int_0^th(s)ds$ e si procede come con il dato $g$.

## Intuizione
La regione $x>ct$ non è ancora stata raggiunta da nessuna informazione partita dal bordo; per $x<ct$ le caratteristiche che "entrano" dal bordo trasportano il valore $g$.

## Come si usa
Sull'intervallo $(0,1)$ con Dirichlet in $x=0$ e $x=1$ (L23 pp. 4-6) la fattorizzazione non chiude: per $v$ servirebbe $\partial_xu$ in $x=1$, che non è dato né da Dirichlet né da Neumann, e invertendo l'ordine il problema si sposta in $x=0$. Per questo sui domini limitati si passa alla soluzione per serie.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/22 - Lezione 28_11_23.pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/23 - Lezione 29_11_23 (1).pdf` (pp. 1-6). In L31 p. 6 gli esempi in Matlab riguardano la corda su $\mathbb R_+$ con Dirichlet o Neumann omogenei in $x=0$.

## Prerequisiti
- [[Formula di d'Alembert]]: soluzione nella zona x > ct
- [[Equazione del trasporto]]: trasporto con dato al bordo per x < ct
- [[Equazione delle onde]]: equazione risolta
- [[Problema ai limiti]]: condizioni al bordo di Dirichlet e Neumann
