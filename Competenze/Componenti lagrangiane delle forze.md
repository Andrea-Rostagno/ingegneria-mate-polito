---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Lagrangian components of forces", "forze generalizzate", "generalized forces", "componenti lagrangiane delle forze attive", "Q_k"]
tags: [competenza, area/fisica]
---

# Componenti lagrangiane delle forze

> Proiezioni delle forze attive sulle direzioni delle coordinate generalizzate: esprimono il lavoro virtuale come $\sum_kQ_k\delta q_k$.

## Definizione / enunciato
Per un sistema olonomo di $n$ punti con coordinate $q_1,\dots,q_N$:
$$Q_k=\sum_{i=1}^n\vec F_i\cdot\frac{\partial(P_i-O)}{\partial q_k}\qquad(8.4),\qquad\delta L^{(a)}=\sum_{h=1}^NQ_h\delta q_h=Q\cdot\delta q\qquad(6.5).$$
Analogamente $\tau_k=\sum_im_i\vec a_i\cdot\frac{\partial(P_i-O)}{\partial q_k}$ è la componente lagrangiana dell'opposto delle forze d'inerzia (8.4).

## Formule chiave
Se le forze derivano da un potenziale $U$ (convenzione del corso, $\vec F=\nabla U$):
$$Q_h=\frac{\partial U}{\partial q_h}$$
Le $\delta q_k$ sono indipendenti, mentre i $\delta P_i$ non lo sono: per questo si lavora con le $Q_k$.

## Intuizione
**Osservazione del docente:** le componenti lagrangiane non sono necessariamente forze (per esempio, per una coordinata angolare $Q_\vartheta$ è un momento). Contengono solo le forze attive, perché i vincoli sono nascosti nelle coordinate.

## Come si usa
Si scrivono $\delta G=\frac{\partial G}{\partial q}\delta q$ per i punti di applicazione e si somma. **Lect7, Ex5:** due aste incernierate di lunghezza $2l$ e massa $m$ appese in $O$; $\delta L^{(a)}=-3mgl\sin\vartheta\,\delta\vartheta-mgl\sin\varphi\,\delta\varphi$, quindi $Q_\vartheta=-3mgl\sin\vartheta$ e $Q_\varphi=-mgl\sin\varphi$, con quattro equilibri $(0,0),(0,\pi),(\pi,0),(\pi,\pi)$. Nel manoscritto, per il peso: $\delta L^{(a)}=-mg\,\hat\jmath\cdot\frac{\partial(G-O)}{\partial q}\delta q$.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (pp. 57-59; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 79, 82, 91); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Statica dei sistemi olonomi", pp. 123-132).

## Prerequisiti
- [[Spostamenti virtuali]]: δL = Σ Q_k δq_k
- [[Coordinate generalizzate]]: derivate ∂P/∂q_k

## Porta a
- [[Teorema di stazionarietà del potenziale]]: Q_h = ∂U/∂q_h = 0
- [[Equazioni di Lagrange]]: membro destro delle equazioni

## Collegati
- [[Principio dei lavori virtuali]]: equilibrio come Q_h = 0
- [[Forza conservativa]]: le Q_h derivano dal potenziale
- [[Principio di d'Alembert]]: Q_k = τ_k equivale alle equazioni della dinamica
