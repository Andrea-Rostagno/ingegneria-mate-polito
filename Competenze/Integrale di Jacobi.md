---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Jacobi integral", "hamiltoniana lagrangiana", "funzione hamiltoniana H(q, q̇, t)", "conservazione dell'hamiltoniana", "energia generalizzata", "teorema di Eulero sulle funzioni omogenee", "Euler's homogeneous function theorem"]
tags: [competenza, area/fisica]
---

# Integrale di Jacobi

> La funzione $H=\sum_k\dot q_k\,\partial L/\partial\dot q_k-L$ si conserva quando la lagrangiana non dipende dal tempo; con vincoli fissi coincide con l'energia meccanica.

## Definizione / enunciato
**Def. 8.1:** per un sistema olonomo, l'**hamiltoniana** è
$$H(q,\dot q,t)=\sum_{k=1}^N\dot q_k\frac{\partial L}{\partial\dot q_k}-L\qquad(8.22).$$
**Prop. 8.1:** con forze conservative,
$$\frac{dH}{dt}=-\frac{\partial L}{\partial t}\qquad(8.23),$$
quindi $H$ si conserva se vincoli e forze non dipendono dal tempo.
**Thm 8.4:** per vincoli indipendenti dal tempo e forze conservative, $H=T-U=T+V=E$.

## Formule chiave
**Teorema di Eulero:** se $f(\lambda x)=\lambda^\alpha f(x)$, allora $\sum_ix_i\frac{\partial f}{\partial x_i}=\alpha f$ (8.24-8.25). Dato che $T_2,T_1,T_0$ sono omogenee di grado 2, 1, 0 nelle $\dot q$:
$$\sum_k\dot q_k\frac{\partial L}{\partial\dot q_k}=2T_2+T_1,\qquad H=2T_2+T_1-(T_2+T_1+T_0+U)=T_2-T_0-U.$$
Con vincoli fissi ($T_1=T_0=0$): $H=T-U$. *Nota:* nel testo l'ultimo passaggio è stampato come "$T_2-T_1+U$"; il calcolo riportato qui è mio, svolto dai termini della stessa riga (da verificare sul PDF, p. 85).

## Intuizione
Se il tempo non compare in $L$, il sistema ha una simmetria per traslazioni temporali e $H$ è la quantità conservata. Con vincoli mobili $H$ può conservarsi anche se l'energia $T-U$ non si conserva.

## Come si usa
Si scrive $L=T+U$, si controlla che $\partial L/\partial t=0$, e si usa $H=T_2-T_0-U=\text{cost}$ come integrale primo, al posto di un'equazione di Lagrange.

## Nei corsi
- **Meccanica** (triennale): il testo la chiama "Hamiltonian"; "integrale di Jacobi" è il nome tradizionale della sua conservazione. $H$ è definita sulle velocità $\dot q$, non sui momenti: le equazioni canoniche non si trattano. Convenzione $L=T+U$. Fonte: `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 85, Def. 8.1, Prop. 8.1, Thm 8.4; numerazione stampata).

## Prerequisiti
- [[Equazioni di Lagrange]]: si usano nella derivata di H
- [[Energia cinetica in coordinate lagrangiane]]: T = T_2 + T_1 + T_0
- [[Integrali primi del moto]]: H è un integrale primo

## Porta a
- Nessuno.

## Collegati
- [[Conservazione dell'energia meccanica]]: con vincoli fissi H = E
- [[Equazioni di Hamilton]]: stessa H espressa nei momenti generalizzati
- [[Coordinate cicliche]]: integrale primo analogo per una coordinata assente da L
