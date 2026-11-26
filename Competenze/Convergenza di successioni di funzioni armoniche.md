---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["limiti di funzioni armoniche", "convergence of harmonic functions", "limite uniforme di armoniche"]
tags: [competenza, area/analisi]
---

# Convergenza di successioni di funzioni armoniche

> Il limite di funzioni armoniche è ancora armonico, anche sotto convergenze deboli ($L^1_{\rm loc}$, debole in $L^1$), e le derivate convergono uniformemente sui compatti.

## Definizione / enunciato
Notazione: $A_\varepsilon=\{x\in A: d_{\partial A}(x)>\varepsilon\}$.
- **Lemma 3.1.10.** Se $u_n$ armoniche in $\Omega$ e $u_n\to u$ uniformemente, allora $u$ è armonica e $D^\alpha u_n\to D^\alpha u$ uniformemente sui compatti di $\Omega$, per ogni $\alpha$.
- **Lemma 3.1.12.** Se $u_n$ armoniche e $u_n\to u$ in $L^1_{\rm loc}(\Omega)$, esiste $v$ armonica con $v=u$ q.o. e $D^\alpha u_n\to D^\alpha v$ uniformemente sui compatti.
- **Lemma 3.1.13.** Se $\{u_n\}\subset L^1(\Omega)$ armoniche e $u_n\rightharpoonup u$ debolmente in $L^1(\Omega)$, esiste $v$ armonica con $u=v$ q.o.

## Formule chiave
Per $x\in\Omega_\varepsilon$, dalla stima a priori applicata a $u_n-u$:
$$|D^\alpha(u_n-u)(x)|\le\Big(\frac{N|\alpha|}{\varepsilon}\Big)^{|\alpha|}\sup_{y\in\Omega}|u_n(y)-u(y)|\to0.\qquad(3.8)$$
Nel caso $L^1_{\rm loc}$, con la media di volume, per $x\in\Omega_{2\varepsilon}$:
$$\sup_{x\in\Omega_{2\varepsilon}}|u_n(x)-v(x)|\le\frac1{\omega_N\varepsilon^N}\int_{\Omega_\varepsilon}|u_n(y)-v(y)|\,dy .$$
Ogni compatto $K\subset\Omega$ sta in qualche $\Omega_\varepsilon$, da cui la convergenza sui compatti.

## Intuizione
La proprietà di media è un'identità integrale, e gli integrali passano al limite sotto ipotesi molto più deboli della convergenza uniforme. Una volta che il limite soddisfa la media, è armonico; le stime a priori trasformano poi una convergenza "in media" in convergenza uniforme di tutte le derivate lontano dal bordo (Oss. 3.1.11: per questo si lavora in $\Omega_\varepsilon$).

## Come si usa
- Lemma 3.1.13: la convergenza debole dà norme $L^1$ equilimitate; con le stime a priori le $D^\alpha u_n$ sono equilimitate ed equicontinue su $\Omega_{2\varepsilon}$, e Ascoli-Arzelà fornisce sottosuccessioni uniformemente convergenti.
- Proprietà (iii) del nucleo di Poisson: $x\mapsto G^x_{B_R}(y)$ è limite uniforme sui compatti di armoniche, quindi armonica.
- Teorema di Harnack (Teor. 3.5.7): una successione monotona di armoniche limitata in un punto converge uniformemente sui compatti a una armonica.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.1, Lemmi 3.1.10, 3.1.12, 3.1.13, Oss. 3.1.11, Esercizio 3.1.14. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 21-22).

## Prerequisiti
- [[Proprietà di media delle funzioni armoniche]]: la media passa al limite
- [[Stime sulle derivate delle funzioni armoniche]]: controllo delle derivate su $\Omega_\varepsilon$
- [[Teorema di Ascoli-Arzelà]]: estrazione di sottosuccessioni uniformemente convergenti

## Porta a
- [[Lemma di Weyl]]: le regolarizzate armoniche convergono in $L^1_{\rm loc}$
- [[Nucleo di Poisson per la palla]]: armonicità del nucleo nella variabile $x$
- [[Disuguaglianza di Harnack]]: teorema di convergenza monotona di Harnack

## Collegati
- [[Convergenza uniforme di successioni di funzioni]]: il caso base del Lemma 3.1.10
