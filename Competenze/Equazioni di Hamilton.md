---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Hamilton equations", "equazioni canoniche", "canonical equations", "hamiltoniana classica", "funzione di Hamilton", "Hamilton function", "spazio delle fasi", "phase space", "variabili canoniche", "canonical variables", "meccanica hamiltoniana"]
tags: [competenza, area/fisica]
---

# Equazioni di Hamilton

> Riformulazione della dinamica nelle variabili canoniche $(q_k,p_k)$: $2M$ equazioni del primo ordine governate dalla funzione di Hamilton $H$, che coincide con l'energia totale.

## Definizione / enunciato
Dai momenti generalizzati $p_j=\partial L/\partial\dot q_j=h_j(q,\dot q)$ si ricavano le velocità $\dot q_j=f_j(q,p)$: se $K=\frac12\sum A_{nk}(q)\dot q_n\dot q_k$ è quadratica, $p_j=\sum_n A_{nj}\dot q_n$ e la matrice simmetrica $A$ è invertibile (definita positiva, teorema spettrale). La **funzione di Hamilton** è
$$H(q_n,p_i)=\sum_j p_j\dot q_j-L(q_n,\dot q_i),\qquad \dot q_j=f_j(q_i,p_i).$$
Lo spazio $2M$-dimensionale $(q_1,\dots,q_M,p_1,\dots,p_M)$ è lo **spazio delle fasi**.

## Formule chiave
$$\dot q_k=\frac{\partial H}{\partial p_k},\qquad \dot p_k=-\frac{\partial H}{\partial q_k}$$
$$\frac{dH}{dt}=\sum_k\left[\frac{\partial H}{\partial p_k}\frac{\partial H}{\partial q_k}-\frac{\partial H}{\partial q_k}\frac{\partial H}{\partial p_k}\right]=0,\qquad H=2K-K+U=K+U$$
$H$ è una forma quadratica nei momenti: $H=\frac12\sum B_{rk}p_kp_r+U$ con $B=A^{-1}$.

## Intuizione
Le equazioni di Lagrange sono $M$ equazioni del secondo ordine; quelle di Hamilton sono $2M$ equazioni del primo ordine, simmetriche tra $q$ e $p$. Proprio questa struttura (variabili canoniche, energia come generatore del moto) è la base della quantizzazione.

## Come si usa
Esempi (`2022_QP.pdf` pp. 28-30): oscillatore $H=\frac{p^2}{2m}+\frac k2(x-\ell)^2$, da cui $m\ddot x=-k(x-\ell)$; pendolo fisico $H=\frac{p_\alpha^2}{2I}-Mg\frac\ell2\cos\alpha$; pendolo sferico, dove $\dot p_\varphi=-\partial H/\partial\varphi=0$ dà la costante $p_\varphi$; due corpi $H=\frac{P^2}{2M}+\frac{p_r^2}{2\mu}+\frac{p_\varphi^2}{2\mu r^2}-\frac{\gamma m_1m_2}{r}$, con $\vec P$ e $p_\varphi=\mu r^2\dot\varphi$ conservati.

## Nei corsi
- **Quantum physics** (triennale): cap. 3 della dispensa di V. Penna; la forma $H=\frac{p_r^2}{2m}+\frac{L^2}{2mr^2}+V(r)$ è ripresa per il potenziale centrale (§10) e l'hamiltoniana del campo e.m. (§16). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 25-30, 110-112).

## Prerequisiti
- [[Equazioni di Lagrange]]: si passa dalle velocità ai momenti generalizzati
- [[Endomorfismo simmetrico]]: la matrice $A$ dell'energia cinetica è simmetrica, diagonalizzabile e invertibile

## Porta a
- [[Parentesi di Poisson]]: la derivata temporale di una funzione delle variabili canoniche
- [[Quantizzazione canonica]]: le variabili canoniche diventano operatori
- [[Potenziale centrale quantistico]]: forma classica $p_r^2/2m+L^2/2mr^2+V$ prima della quantizzazione

## Collegati
- [[Conservazione dell'energia meccanica]]: $H=K+U$ è costante del moto
- [[Moto armonico semplice]]: esempio dell'oscillatore
