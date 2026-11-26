---
tipo: competenza
area: analisi
corsi: [Equazioni alle derivate parziali]
livello: [triennale]
aliases: ["uniformly elliptic operator", "ellitticità uniforme", "operatore ellittico del secondo ordine", "forma di divergenza", "divergence form", "forma non di divergenza"]
tags: [competenza, area/analisi]
---

# Operatore uniformemente ellittico

> Operatore del secondo ordine $Lu=-\sum(a^{ij}u_{x_i})_{x_j}+\sum b^iu_{x_i}+cu$ la cui matrice dei coefficienti principali è definita positiva con autovalore minimo $\ge\theta>0$ uniformemente in $x$.

## Definizione / enunciato
Problema modello (Evans (1)): $Lu=f$ in $U$, $u=0$ su $\partial U$ (condizione di Dirichlet), $U$ aperto limitato. $L$ è in **forma di divergenza** se
$$Lu=-\sum_{i,j=1}^n\big(a^{ij}(x)u_{x_i}\big)_{x_j}+\sum_{i=1}^nb^i(x)u_{x_i}+c(x)u,\qquad(2)$$
in **forma non di divergenza** se $Lu=-\sum a^{ij}u_{x_ix_j}+\sum b^iu_{x_i}+cu$ (3). Si assume $a^{ij}=a^{ji}$.

**Def.** $L$ è **(uniformemente) ellittico** se esiste $\theta>0$ tale che
$$\sum_{i,j=1}^na^{ij}(x)\xi_i\xi_j\ge\theta|\xi|^2\qquad\text{per q.o. }x\in U,\ \forall\xi\in\mathbb R^n.\qquad(4)$$
Cioè $A(x)=(a^{ij}(x))$ è definita positiva con autovalore minimo $\ge\theta$.

## Formule chiave
Se $a^{ij}\in C^1$, le due forme si convertono: (2) diventa $-\sum a^{ij}u_{x_ix_j}+\sum\tilde b^iu_{x_i}+cu$ con $\tilde b^i=b^i-\sum_ja^{ij}_{x_j}$ (2'). Esempio: $a^{ij}=\delta_{ij}$, $b^i=0$, $c=0$ dà $L=-\Delta$.

## Intuizione
Interpretazione fisica (Evans): $u$ è una densità (es. concentrazione) all'equilibrio; $\sum a^{ij}u_{x_ix_j}$ descrive la diffusione anisotropa, $F=-A\,Du$ è il flusso diffusivo e l'ellitticità dà $F\cdot Du\le0$ (il flusso va dalle alte alle basse concentrazioni); $b\cdot Du$ è trasporto, $cu$ creazione o consumo. Le soluzioni di $Lu=0$ somigliano alle armoniche, ma senza formule esplicite: si lavora con la struttura (4).

## Come si usa
La forma di divergenza è adatta ai metodi dell'energia (integrazione per parti, §6.1-6.3), quella non di divergenza ai principi del massimo (§6.4). Nelle stime dell'energia (4) dà $\theta\int|Du|^2\le\int\sum a^{ij}u_{x_i}u_{x_j}$.

## Nei corsi
- **Equazioni alle derivate parziali** (triennale): Evans §6.1.1 "Elliptic equations" (forme (2), (3), (2'), definizione (4), interpretazione fisica); negli appunti §2.4 ne dà solo lo schema (classificazione con gli autovalori di $A(x)$). Fonti: `triennale/ANNO 3/eq derivate parziali/partial-differential-equations-by-evans.pdf` (pp. 293-295); `triennale/ANNO 3/eq derivate parziali/EDP.pdf` (p. 15).

## Prerequisiti
- [[Equazione alle derivate parziali]]: operatori lineari del secondo ordine
- [[Autovalori e autovettori]]: definita positività e autovalore minimo di $A(x)$

## Porta a
- [[Formulazione debole di un problema ellittico]]: forma bilineare associata a $L$
- [[Stime dell'energia per operatori ellittici]]: l'ellitticità dà la coercività

## Collegati
- [[Funzione armonica]]: soluzioni del caso modello $L=-\Delta$
