---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["Green's representation formula", "terza identità di Green", "formula di rappresentazione", "representation formula"]
tags: [competenza, area/analisi]
---

# Formula di rappresentazione di Green

> Ogni $u\in C^2(\overline\Omega)$ si ricostruisce dal suo laplaciano in $\Omega$ e dai valori di $u$ e di $\partial_\nu u$ sul bordo, usando la soluzione fondamentale centrata nel punto.

## Definizione / enunciato
**Teorema 3.4.1.** Sia $\Omega\subset\mathbb R^n$ aperto limitato con bordo $C^1$ e $u\in C^2(\overline\Omega)$. Per ogni $x\in\Omega$
$$u(x)=-\int_\Omega G^x(y)\Delta u(y)\,dy+\int_{\partial\Omega}\Big(G^x(y)\frac{\partial u}{\partial\nu}(y)-\frac{\partial G^x}{\partial\nu}(y)u(y)\Big)d\sigma(y),\qquad(3.16)$$
con $G^x(y)=G(y-x)$ soluzione fondamentale centrata in $x$.

## Formule chiave
La dimostrazione è la stessa della verifica $-\Delta G=\delta_0$: si applica la formula di Green su $\Omega\setminus B_\varepsilon(x)$ e si manda $\varepsilon\to0$; il termine su $\partial B_\varepsilon(x)$ con $\partial_\nu G^x$ produce $u(x)$.

## Intuizione
Formalmente è $u(x)=\langle\delta_x,u\rangle=\langle-\Delta G^x,u\rangle$, con il laplaciano spostato su $u$ tramite la formula di Green: le due integrazioni per parti lasciano i termini di bordo.

## Come si usa
Oss. 3.4.2: per conoscere $u$ servono
1. $\Delta u$ in $\Omega$ (noto se $u$ risolve un problema di Poisson);
2. $\partial_\nu u$ su $\partial\Omega$ (noto per un problema di Neumann);
3. $u$ su $\partial\Omega$ (noto per un problema di Dirichlet).
Nei problemi tipici si conosce solo uno dei due dati al bordo: per eliminare il termine con $\partial_\nu u$ si corregge $G^x$ con un correttore armonico $v^x$ uguale a $G^x$ sul bordo, ottenendo la funzione di Green.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): §3.4 "Formule di rappresentazione", Teor. 3.4.1 e Oss. 3.4.2 (Lezione 6). Fonti: `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (p. 26).

## Prerequisiti
- [[Soluzione fondamentale del laplaciano]]: il nucleo $G^x$
- [[Teorema della divergenza]]: formule di Green per spostare il laplaciano

## Porta a
- [[Funzione di Green per il laplaciano]]: si elimina il termine con la derivata normale di $u$

## Collegati
- [[Formula integrale di Cauchy]]: anche lì i valori interni sono determinati da un integrale sul bordo
