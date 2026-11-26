---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Financial engineering]
livello: [magistrale]
aliases: [infinitesimal generator, generator of a Markov process, L f, generatore del moto browniano, "L = 1/2 Delta", laplaciano, generatore di una SDE, operatore infinitesimale]
tags: [competenza, area/probabilita]
---

# Generatore infinitesimale

> Operatore $\mathcal L$ che misura la "derivata" attesa di $f(X_t)$ in zero per un processo di Markov; unifica la matrice $Q$ delle CTMC e il mezzo laplaciano del moto browniano.

## Definizione / enunciato
Sia $(X_t)$ un processo a tempo continuo con la proprietà di Markov su $(S,\mathcal A)$ e $f$ misurabile. Se il limite seguente esiste ed è misurabile in $x$,
$$\mathcal Lf(x)=\lim_{h\to0^+}\frac{\mathbb E_x[f(X_h)]-f(x)}{h}.$$
**CTMC.** $\displaystyle\mathcal Lf(x)=\sum_{y\in S}(f(y)-f(x))\,q(x,y)$ (analogo discreto: $\sum_y(f(y)-f(x))p(x,y)$).

## Formule chiave
Coda M/M/$\infty$: $\mathcal Lf(x)=(f(x+1)-f(x))\lambda+(f(x-1)-f(x))\mu x$.

## Sezione: moto browniano
**Teorema.** Per $W$ browniano $d$-dimensionale e $f:\mathbb R^d\to\mathbb R$ due volte differenziabile con derivate seconde limitate,
$$\mathcal Lf(x)=\tfrac12\Delta f(x)=\tfrac12\sum_{i=1}^d\frac{\partial^2f}{\partial x_i^2}(x).$$
Prova: $f(W_h)\sim f(x+\sqrt hZ)$, $Z$ gaussiana standard; con Taylor al second'ordine i termini lineari e misti hanno media nulla ($\mathbb E[Z_i]=0$, $\mathbb E[Z_iZ_j]=0$ per $i\ne j$, $\mathbb E[Z_i^2]=1$) e il resto $R/h\to0$ per convergenza dominata. In dimensione 1 il `.tex` scrive $\mathcal Lf=\frac12f''$.

## Intuizione
Il generatore è il drift istantaneo di $f(X_t)$. Per una CTMC pesa ogni salto con il suo tasso; per il browniano gli incrementi $\sqrt h Z$ hanno media nulla, quindi resta solo il termine di curvatura. Le funzioni armoniche ($\Delta f=0$) sono esattamente quelle con $\mathcal Lf=0$.

## Come si usa
- Ingrediente della formula di Dynkin: $f(X_t)-\int_0^t\mathcal Lf(X_s)\mathrm ds$ è martingala.
- Criteri di Foster-Lyapunov per CTMC: non esplosività se $\mathcal LV\le cV+d$ con sottolivelli finiti; ricorrenza positiva se $\mathcal LV\le-\varepsilon$ fuori da un insieme finito.
- Browniano: problemi di uscita e comportamento a lungo termine tramite $\tfrac12\Delta u=0$ con condizioni al bordo.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 17 ("calcolo del generatore e utilizzo per il comportamento a lungo termine") e argomento 15. Fonti: `magistrale/Processi stocastici/Lezione_22_02_12.pdf` (lezione 22, definizione e caso CTMC), `magistrale/Processi stocastici/Lezione_23_09_12.pdf` (lezione 23, teorema $\frac12\Delta$), `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24, funzioni armoniche), `riassunto_del_corso.tex` §Moto browniano.
- **Financial engineering** (magistrale): generatore della SDE $dX=b(t,X)dt+\sigma(t,X)dW$, $\mathcal L_t\phi=\frac12\sigma^2(t,x)\partial_{xx}\phi+b(t,x)\partial_x\phi$ (def. c19-generatore); esempi: browniano $\frac12\partial_{xx}$, OU $\frac12\sigma^2\partial_{xx}+\theta(\mu-x)\partial_x$, GBM $\frac12\sigma^2x^2\partial_{xx}+\mu x\partial_x$ (con $\phi=x^2$: $\mathcal L\phi=(2\mu+\sigma^2)x^2$). Per Itô, $d\phi(t,X_t)=(\partial_t\phi+\mathcal L\phi)dt+\sigma\partial_x\phi\,dW_t$; è l'operatore della formula di Feynman-Kac. Fonti: `Libri/Financial engineering/capitoli/cap19.tex` §Generatore e formula di Feynman-Kac; lezione d'origine `magistrale/Financial engineering/onofrio/Lezione 05 - analisi stocastica - 12 mag 26.pdf`.

## Prerequisiti
- [[Generatore di una CTMC]]: generalizza $Q$ ai processi di Markov

## Porta a
- [[Formula di Dynkin]]: compensatore come integrale del generatore
- [[Criterio di Foster-Lyapunov di non esplosività]]: drift espresso tramite il generatore
- [[Problema di Dirichlet e moto browniano]]: funzioni armoniche annullano il generatore

## Collegati
- [[Coda M-M-infinito]]: esempio di calcolo del generatore
- [[Moto browniano]]: generatore del browniano è mezzo laplaciano
- [[Formula di Itô]]: seguito naturale del generatore (il drift di $f(X_t)$ è $\mathcal Lf$)
- [[Equazione differenziale stocastica]]: citate in lezione 22; il generatore di una SDE è $\frac12\sigma^2\partial_{xx}+b\,\partial_x$
- [[Formula di Feynman-Kac]]: problema di Cauchy all'indietro con il generatore (Financial engineering)
- [[Momenti infinitesimali]]: $A_1$ e $A_2$ sono i coefficienti del generatore (Financial engineering)
