---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["central potential", "problema a potenziale centrale", "central-potential problem", "equazione radiale", "radial equation", "potenziale efficace centrifugo", "centrifugal potential", "momento radiale", "radial momentum"]
tags: [competenza, area/fisica]
---

# Potenziale centrale quantistico

> Per $H=p^2/2m+V(r)$, l'hamiltoniana commuta con $L^2$ e $L_3$: la funzione d'onda si separa in $R(r)Y_{\ell m}(\theta,\varphi)$ e il problema si riduce a un'equazione radiale unidimensionale con potenziale efficace $V+\hbar^2\ell(\ell+1)/2mr^2$.

## Definizione / enunciato
Classicamente $H=\frac{p^2}{2m}+V(r)=\frac{p_r^2}{2m}+\frac{L^2}{2mr^2}+V(r)$ con $\{r,p_r\}=1$, e $\{L_k,H\}=\{L^2,H\}=0$: $H$, $L^2$, $L_3$ sono costanti del moto. Quantisticamente $[H,L^2]=[H,L_z]=[L^2,L_z]=0$: tre buoni numeri quantici.
Il momento radiale corretto non è $-i\hbar\partial_r$ (non hermitiano) ma
$$p_r=-i\hbar\left(\frac{\partial}{\partial r}+\frac1r\right)=-i\hbar\frac1r\frac{\partial}{\partial r}r,$$
perché nel calcolo quantistico di $L^2=(\vec r\wedge\vec p)^2$ compare il termine extra $i\hbar\,\vec r\cdot\vec p$.

## Formule chiave
$$p^2=p_r^2+\frac{L^2}{r^2},\qquad \psi=R(r)Y_{\ell,m}(\theta,\varphi),\quad R=\frac{u(r)}{r}$$
$$\left[-\frac{\hbar^2}{2m}\frac{d^2}{dr^2}+\frac{\hbar^2\ell(\ell+1)}{2mr^2}+V(r)\right]u=Eu$$
Normalizzazione: $\int d^3x|\psi|^2=\int_0^\infty dr|u|^2<\infty$; condizione $u(0)=0$.

## Intuizione
La simmetria sferica fa sì che la parte angolare sia universale (armoniche sferiche) e tutta la fisica del potenziale stia nell'equazione radiale; il termine centrifugo repulsivo è l'analogo del potenziale efficace del problema di Keplero.

## Come si usa
Comportamenti asintotici: per $r\to0$ domina il termine centrifugo, $u=Ar^{\ell+1}+Br^{-\ell}$ e $u(0)=0$ impone $B=0$; per $r\to\infty$, $u\simeq De^{kr}+Ce^{-kr}$ con $D=0$; gli stati legati hanno $E<0$, $k=\sqrt{2m|E|}/\hbar$ reale (`2022_QP.pdf` pp. 115-116). Il caso coulombiano dà l'atomo di idrogeno; nel problema dei due corpi l'equazione vale con la massa ridotta $\mu$.

## Nei corsi
- **Quantum physics** (triennale): §10.1-10.2 della dispensa di V. Penna, con dimostrazioni classiche (parentesi di Poisson in coordinate sferiche) e quantistiche (hermiticità di $p_r$). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 110-116).

## Prerequisiti
- [[Equazioni di Hamilton]]: forma classica dell'hamiltoniana in coordinate sferiche
- [[Commutatore di operatori]]: H, L² e L₃ commutano
- [[Rotore rigido quantistico]]: la parte angolare sono le $Y_{\ell m}$
- [[Quantizzazione canonica]]: definizione hermitiana di $p_r$

## Porta a
- [[Atomo di idrogeno]]: caso del potenziale coulombiano

## Collegati
- [[Forza centrale]]: conservazione del momento angolare classico
- [[Coordinate sferiche]]: separazione delle variabili
