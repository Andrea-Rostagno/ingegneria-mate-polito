---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["d'Alembert's principle", "D'Alembert principle", "forza d'inerzia", "force of inertia", "forze perdute", "lost forces", "relazione simbolica della dinamica", "binomio di Lagrange", "Lagrange binomial"]
tags: [competenza, area/fisica]
---

# Principio di d'Alembert

> Si passa dalle equazioni dell'equilibrio a quelle della dinamica aggiungendo le forze d'inerzia $-m\vec a$: con vincoli ideali bilateri, il lavoro virtuale delle "forze perdute" è nullo.

## Definizione / enunciato
In un riferimento che trasla con il punto, questo sente la **forza d'inerzia** $\vec F_\tau=-m\vec a$ (8.1), e la legge della dinamica relativa diventa
$$(\vec F+\vec F_\tau)+\vec\Phi=(\vec F-m\vec a)+\vec\Phi=\vec 0\qquad(8.2):$$
i vincoli bilanciano in ogni istante le **forze perdute** $\vec F-m\vec a$.
**Principio di d'Alembert:** per un sistema di punti si passa dalle equazioni di equilibrio a quelle dinamiche aggiungendo le forze d'inerzia.

## Formule chiave
Con vincoli olonomi, ideali e bilateri ($\delta L^{(v)}=0$):
$$\sum_{i=1}^n(\vec F_i-m_i\vec a_i)\cdot\delta P_i=0\ \Rightarrow\ \sum_{k=1}^N(Q_k-\tau_k)\delta q_k=0\qquad(8.3)$$
**Thm 8.1:** le equazioni della dinamica equivalgono a $Q_k=\tau_k$, $k=1,\dots,N$ (8.5).
**Thm 8.2 (binomio di Lagrange):** $\tau_k=\frac{d}{dt}\frac{\partial T}{\partial\dot q_k}-\frac{\partial T}{\partial q_k}$ (8.6). Si dimostra con le identità $\frac{\partial\vec v_i}{\partial\dot q_k}=\frac{\partial(P_i-O)}{\partial q_k}$ e $\frac{\partial\vec v_i}{\partial q_k}=\frac{d}{dt}\frac{\partial(P_i-O)}{\partial q_k}$ (8.8-8.9).

## Intuizione
È il [[Principio dei lavori virtuali]] applicato al sistema "in equilibrio dinamico" con le forze d'inerzia. Le $\delta q_k$ sono indipendenti, quindi ogni coefficiente deve annullarsi: le reazioni vincolari spariscono dalle equazioni.

## Come si usa
È il passo da cui nascono le [[Equazioni di Lagrange]]: sostituendo il binomio in $Q_k=\tau_k$ si ottiene $\frac{d}{dt}\frac{\partial T}{\partial\dot q_k}-\frac{\partial T}{\partial q_k}=Q_k$ (8.10).

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 79-80, eqq. 8.1-8.9; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Meccanica lagrangiana", pp. 151-155 circa).

## Prerequisiti
- [[Principio dei lavori virtuali]]: si estende alla dinamica
- [[Spostamenti virtuali]]: δP_i = Σ ∂P_i/∂q_k δq_k

## Porta a
- [[Equazioni di Lagrange]]: Q_k = τ_k con il binomio di Lagrange

## Collegati
- [[Componenti lagrangiane delle forze]]: Q_k e τ_k
- [[Forze apparenti]]: anche la forza d'inerzia −m a è una forza apparente
