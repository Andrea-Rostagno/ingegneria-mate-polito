---
tipo: competenza
area: fisica
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["vibrating string", "equazione della corda vibrante", "corda elastica con estremi fissi", "c² = T/ρ"]
tags: [competenza, area/fisica]
---

# Corda vibrante

> Modello di una corda tesa che oscilla trasversalmente: nell'approssimazione di piccole pendenze lo spostamento soddisfa l'equazione delle onde con $c^2=T/\rho$.

## Definizione / enunciato
$u(x,t)$ è lo spostamento verticale al tempo $t$ del punto che a riposo sta in $x$. Ipotesi (L31 pp. 1-2):
1. nessun moto orizzontale;
2. tensione di modulo costante $|T(x)|=T>0$;
3. angolo di inflessione $\theta(x)$ "sufficientemente piccolo".
Bilancio sull'elemento di corda (densità lineare $\rho$ costante), proiettato lungo la verticale:
$$\rho\,\Delta s\,\partial_t^2u=T\sin\theta(x+\Delta x)-T\sin\theta(x).$$

## Formule chiave
Con $\Delta s\approx\Delta x\sqrt{1+(\Delta u/\Delta x)^2}$ e $\sin\theta=\frac{\tan\theta}{\sqrt{1+\tan^2\theta}}\approx\frac{\Delta u/\Delta x}{\sqrt{1+(\Delta u/\Delta x)^2}}$, per $\Delta x\to0^+$:
$$\partial_t^2u=\frac T\rho\,\frac1{\sqrt{1+(\partial_xu)^2}}\,\partial_x\!\left(\frac{\partial_xu}{\sqrt{1+(\partial_xu)^2}}\right).$$
Con $\theta$ piccolo, $(\partial_xu)^2\ll1$ e
$$\partial_t^2u=\frac T\rho\,\partial_x^2u,\qquad c=\sqrt{T/\rho}.$$

## Intuizione
Le oscillazioni sono tanto più veloci quanto più la corda è tesa e tanto più lente quanto più è densa. L'equazione esatta è non lineare: la linearità dell'equazione delle onde è frutto dell'approssimazione di piccole pendenze.

## Come si usa
Corda di lunghezza 1 con estremi bloccati: $u=0$ in $x=0,1$, e $u=\sum_k\hat u_k(t)\sin(k\pi x)$ con $\hat u_k(t)=\frac12(\hat u_{0,k}-i\frac{\hat u_{1,k}}{k\pi c})e^{ik\pi ct}+\frac12(\hat u_{0,k}+i\frac{\hat u_{1,k}}{k\pi c})e^{-ik\pi ct}$ (L25 p. 2). Se la corda parte ferma con $u_0=\sin(\pi x)$: $u=\cos(\pi ct)\sin(\pi x)$. Esempi Matlab (L31 p. 6): corda su $\mathbb R_+$ con Dirichlet o Neumann omogenei in $x=0$, e su $[0,1]$ con Dirichlet omogenei.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonti `triennale/ANNO 3/eq fisica matematica/31 - Lezione 09_01_24 (1).pdf` (pp. 1-6); `triennale/ANNO 3/eq fisica matematica/25 - Lezione 06_12_23.pdf` (pp. 2-4).

## Prerequisiti
- [[Soluzione per serie di autofunzioni]]: soluzione con estremi fissi

## Collegati
- [[Equazione delle onde]]: equazione ottenuta linearizzando
