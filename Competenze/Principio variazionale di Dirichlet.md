---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Dirichlet principle", "principio di Dirichlet (calcolo delle variazioni)", "funzionale dell'energia di Dirichlet", "energia di Dirichlet", "Dirichlet energy"]
tags: [competenza, area/analisi]
---

# Principio variazionale di Dirichlet

> Risolvere il problema di Dirichlet per l'equazione di Poisson equivale a minimizzare l'energia $\frac12\int|\nabla u|^2-\int fu$ fra le funzioni con il dato al bordo assegnato.

## Definizione / enunciato
Dati $f\in C^0(\Omega)$, $g\in C^0(\partial\Omega)$, si definiscono il funzionale dell'energia e l'insieme dei competitori
$$\mathcal E(u):=\frac12\int_\Omega|\nabla u(x)|^2dx-\int_\Omega f(x)u(x)\,dx,\qquad\mathcal A:=\{w\in C^2(\overline\Omega):w=g\ \text{su }\partial\Omega\}.\qquad(3.41)\text{-}(3.42)$$
**Teorema 3.6.1.** $u\in C^2(\overline\Omega)$ risolve $-\Delta u=f$ in $\Omega$, $u=g$ su $\partial\Omega$ (3.12) se e solo se
$$\mathcal E(u)=\min_{w\in\mathcal A}\mathcal E(w).\qquad(3.43)$$

## Formule chiave
($\Leftarrow$) Per una variazione $\varphi\in C^2(\Omega)\cap C^1(\overline\Omega)$ con $\varphi=0$ su $\partial\Omega$, $u+t\varphi\in\mathcal A$ e $\mathcal E(u)\le\mathcal E(u+t\varphi)$ dà, per ogni $t\in\mathbb R$,
$$0\le t\int_\Omega\nabla u\cdot\nabla\varphi\,dx+t^2\int_\Omega|\nabla\varphi|^2dx-t\int_\Omega f\varphi\,dx.\qquad(3.44)$$
Dividendo per $t>0$ e $t<0$ e mandando $t\to0^\pm$: $\int_\Omega\nabla u\cdot\nabla\varphi=\int_\Omega f\varphi$; integrando per parti $\int_\Omega(-\Delta u-f)\varphi=0$ e il lemma fondamentale dà $-\Delta u=f$.
($\Rightarrow$) Per $w\in\mathcal A$, $(u-w)|_{\partial\Omega}=0$, quindi $0=\int(-\Delta u-f)(u-w)=\int[-f(u-w)+\nabla u\cdot\nabla(u-w)]$; con Schwarz e Young $\int\nabla u\cdot\nabla w\le\frac12\int|\nabla u|^2+\frac12\int|\nabla w|^2$, cioè $\mathcal E(u)\le\mathcal E(w)$.

## Intuizione
L'equazione di Poisson è l'equazione di Eulero-Lagrange dell'energia di Dirichlet: il gradiente si annulla nella direzione di ogni variazione ammissibile. È un **principio di selezione**: tra tutte le funzioni con il dato al bordo, la soluzione è quella di energia minima.

## Come si usa
Tecnica variazionale: invece di risolvere l'EDP si minimizza un funzionale. Negli appunti si osserva che l'ambiente naturale di questa tecnica sono gli spazi di Sobolev, dove si possono ridurre le pretese di regolarità sui competitori (in $C^2$ l'esistenza del minimo non è garantita): è la motivazione della formulazione debole.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.6 "Il principio di Dirichlet", Teor. 3.6.1 con dimostrazione delle due implicazioni. Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (pp. 35-37).

## Prerequisiti
- [[Lemma fondamentale del calcolo delle variazioni]]: dall'identità integrale a $-\Delta u=f$
- [[Teorema della divergenza]]: integrazione per parti con $\varphi=0$ al bordo

## Porta a
- [[Formulazione debole di un problema ellittico]]: la stessa identità $\int\nabla u\cdot\nabla\varphi=\int f\varphi$ in $H^1_0$

## Collegati
- [[Problema di Dirichlet per l'equazione di Poisson]]: caratterizzazione variazionale della soluzione
- [[Derivata funzionale]]: condizione di stazionarietà di un funzionale
