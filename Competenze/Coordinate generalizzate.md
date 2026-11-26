---
tipo: competenza
area: fisica
corsi: [Quantum physics, Meccanica]
livello: [triennale]
aliases: ["generalized coordinates", "spazio delle configurazioni", "configuration space", "gradi di libertà di un sistema meccanico", "vincoli olonomi", "holonomic constraints", "sistema olonomo", "velocità generalizzate", "coordinate lagrangiane", "coordinate libere"]
tags: [competenza, area/fisica]
---

# Coordinate generalizzate

> Insieme minimo di variabili $q_1,\dots,q_M$ che fissa la configurazione di un sistema tenendo conto dei vincoli: sono le variabili naturali della formulazione lagrangiana.

## Definizione / enunciato
Per $N$ particelle libere servono $3N$ coordinate cartesiane (più $3N$ velocità). Vincoli interni o esterni riducono il numero di variabili indipendenti: le nuove variabili $q_1,\dots,q_M$ sono le **coordinate generalizzate**, e posizioni e velocità diventano $\vec r_i=\vec r_i(q_1,\dots,q_M)$, $\vec v_i=\vec v_i(q,\dot q)$.
I vincoli si scrivono $f_r(q_1,\dots,q_M)=0$, $r\in[1,N_c]$. Il sistema è **olonomo** se le equazioni dei vincoli si possono risolvere ($q_r=g_r(\{q_\alpha\})$); allora il numero di **gradi di libertà** è $S=M-N_c$.
Lo **spazio delle configurazioni** $\mathcal C$ è l'insieme delle configurazioni descritte dalle coordinate generalizzate e ne riflette la geometria.

## Formule chiave
$$S=M-N_c,\qquad \vec r_i=\vec r_i(q_1,\dots,q_M)$$
Esempi di $\mathcal C$: asta libera $\mathcal C_1=\mathbb R^3\times S^2$ ($X,Y,Z,\varphi,\theta$); asta con perno nel centro di massa $\mathcal C_3=S^2$.

## Intuizione
Le coordinate generalizzate "incorporano" i vincoli: invece di imporre le forze vincolari si sceglie una descrizione in cui il moto vincolato è automaticamente rispettato.

## Come si usa
Esempi della dispensa (`2022_QP.pdf` pp. 12-17): asta rigida libera (5 coordinate: 6 cartesiane meno il vincolo di lunghezza), corpo rigido generico (6: centro di massa più tre angoli), pendolo sferico (2 angoli $\varphi,\alpha$), particella in un toro sottile (1 angolo), problema dei due corpi (centro di massa e coordinate relative; con la conservazione del momento angolare il moto è piano e restano $r,\varphi$), doppio pendolo (2 angoli). Un corpo rigido di $N$ particelle è un sistema intrinsecamente vincolato da $|\vec r_i-\vec r_n|^2-d_{in}^2=0$.

## Nei corsi
- **Quantum physics** (triennale): §2.2 della dispensa di V. Penna, con sette esempi e i relativi spazi delle configurazioni. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 12-17).
- **Meccanica** (triennale): "coordinate libere o generalizzate" (Def. 3.1): una mappa $m:\mathbb R^N\to\mathcal C$ (insieme delle configurazioni) che associa a $(q_1,\dots,q_N)\in U$, aperto connesso eventualmente con bordo, una configurazione; $N$ è il numero di gradi di libertà, e le $P(q_1(t),\dots,q_N(t);t)$ devono essere almeno due volte differenziabili. Spostamento elementare $dP=\sum_k\frac{\partial(P-O)}{\partial q_k}dq_k$ (3.6). Esempi: asta con cerniera scorrevole $(s,\vartheta)$; due aste nel piano, 6 coordinate ridotte a 1 da 5 condizioni. Sistemi labili, isostatici e iperstatici secondo il numero di vincoli. Nel manoscritto 2017 si chiamano "coordinate lagrangiane". Fonti: `triennale/ANNO 2/Meccanica/Lect2-Constraints.pdf` (pp. 28-32); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezioni 7-8 del 16/03/2017, da p. 48).

## Prerequisiti
- [[Leggi di Newton]]: descrizione cartesiana da cui si parte
- [[Reazione vincolare]]: i vincoli che le coordinate generalizzate incorporano

## Porta a
- [[Equazioni di Lagrange]]: la lagrangiana si scrive in $q_i,\dot q_i$
- [[Spostamenti virtuali]]: δP = Σ ∂P/∂q_k δq_k (Meccanica)
- [[Componenti lagrangiane delle forze]]: proiezione delle forze sulle q_k (Meccanica)
- [[Energia cinetica in coordinate lagrangiane]]: T come forma quadratica nelle velocità generalizzate (Meccanica)

## Collegati
- [[Sistema di riferimento del centro di massa]]: nei due corpi le coordinate del centro di massa si eliminano
- [[Coordinate sferiche]]: scelta naturale per il pendolo sferico
- [[Classificazione dei vincoli]]: i vincoli olonomi bilateri permettono di sceglierle (Meccanica)
