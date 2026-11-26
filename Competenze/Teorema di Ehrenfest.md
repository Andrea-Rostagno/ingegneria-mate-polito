---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Ehrenfest theorem", "evoluzione dei valori medi", "time evolution of expectation values", "principio di corrispondenza", "correspondence principle"]
tags: [competenza, area/fisica]
---

# Teorema di Ehrenfest

> I valori medi di posizione e impulso evolvono secondo le stesse equazioni delle corrispondenti variabili classiche: $\frac{d}{dt}\langle x_j\rangle=\langle p_j\rangle/m$, $\frac d{dt}\langle p_j\rangle=-\langle\partial U/\partial x_j\rangle$.

## Definizione / enunciato
Il valor medio di $A$ nello stato $\psi$ è $\langle A\rangle=(\psi,A\psi)=\int_Vd^3x\,\psi^*A\psi$. Si mostra prima che $H$ è **hermitiano**: per il potenziale è immediato, per $\nabla^2$ si integra due volte per parti (termini di bordo nulli). Usando $i\hbar\partial_t\psi=H\psi$ e $-i\hbar\partial_t\psi^*=H\psi^*$, per $\partial_tA=0$:
$$\frac{\partial}{\partial t}\langle A\rangle=\frac{1}{i\hbar}(\psi,[A,H]\psi).$$
Con $[x_j,H]=\frac{i\hbar}{m}p_j$ e $[p_j,H]=-i\hbar\frac{\partial U}{\partial x_j}$ si ottiene il teorema.

## Formule chiave
$$\frac{d}{dt}\langle x_j\rangle=\frac{1}{m}\langle p_j\rangle,\qquad \frac{d}{dt}\langle p_j\rangle=-\left\langle\frac{\partial U}{\partial x_j}\right\rangle$$
Analogo classico: $\dot A=\{A,H\}$, $\dot x_j=p_j/m$, $\dot p_j=-\partial U/\partial x_j$.

## Intuizione
La meccanica classica riemerge "in media". La corrispondenza è esatta solo se $U$ contiene termini al più quadratici nelle coordinate ($U=\sum U_{ik}x_ix_k+\sum c_ix_i$), perché allora $\langle\partial U/\partial x_n\rangle=\partial U/\partial x_n(\langle x\rangle)$; è in accordo con il principio di corrispondenza di Bohr.

## Come si usa
Se $[B,H]=0$ allora $\frac{d}{dt}\langle B\rangle=0$: $B$ è l'analogo quantistico di una costante del moto classica con $\{B,H\}=0$ (`2022_QP.pdf` p. 87). Gli stati coerenti dell'oscillatore sono l'esempio in cui $\langle x\rangle(t)$ e $\langle p\rangle(t)$ seguono esattamente la traiettoria classica (p. 96).

## Nei corsi
- **Quantum physics** (triennale): §4.6 della dispensa di V. Penna, con la dimostrazione dell'hermiticità di H. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 51-52, 87, 96).

## Prerequisiti
- [[Operatori quantistici]]: valor medio e hermiticità di H
- [[Quantizzazione canonica]]: commutatori $[x_j,H]$ e $[p_j,H]$
- [[Parentesi di Poisson]]: forma classica $\dot A=\{A,H\}$

## Porta a
- [[Rappresentazione di Heisenberg]]: la stessa equazione per gli operatori dipendenti dal tempo
- [[Stati coerenti]]: verifica esplicita del comportamento semiclassico

## Collegati
- [[Leggi di Newton]]: $\frac{d}{dt}\langle p\rangle=\langle F\rangle$ è la seconda legge in media
- [[Commutatore di operatori]]: un operatore che commuta con H è conservato
