---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["first integrals of motion", "integrale primo", "first integral", "conserved quantity", "grandezza conservata", "integrale primo della quantità di moto", "integrale primo del momento angolare", "integrale primo dell'energia"]
tags: [competenza, area/fisica]
---

# Integrali primi del moto

> Funzioni di posizioni, velocità e tempo che restano costanti lungo ogni moto del sistema; dimezzano l'ordine del problema e spesso bastano a risolverlo.

## Definizione / enunciato
Dato il sistema $\{(P_i,m_i)\}_{i=1}^n$, una funzione $f(P_1,\dots,P_n,\vec v_1,\dots,\vec v_n;t)$ è un **integrale primo** se
$$f(P_1(t),\dots,\vec v_n(t);t)=f(P_1(t_0),\dots,\vec v_n(t_0);t_0)\quad\forall t\qquad(7.40).$$

## Formule chiave
- **Quantità di moto:** $\vec R^{(e)}\cdot\hat\imath_j=0\Rightarrow\vec Q\cdot\hat\imath_j=mv_{G,j}=\text{cost}$ (7.41).
- **Momento angolare:** se $\vec v_\Omega\wedge\vec Q=\vec 0$ e $\vec M_\Omega^{(e)}\cdot\hat\imath_j=0$, allora $\vec K_\Omega\cdot\hat\imath_j=\text{cost}$ (7.42).
- **Energia:** con forze conservative e vincoli ideali, bilateri e fissi, $E=T-U=\text{cost}$ (Thm 7.10, 7.46).
- **Lagrangiani:** se $\partial L/\partial q_k=0$, allora $p_k=\partial L/\partial\dot q_k$ è costante (8.21); se $\partial L/\partial t=0$, si conserva $H$.

## Intuizione
Ogni simmetria del problema (direzione senza forza esterna, asse senza momento, indipendenza dal tempo) dà una grandezza conservata. Il manoscritto enuncia il teorema dell'integrale primo del momento della quantità di moto per un polo $Q$ con $\vec v_Q\wedge\vec Q=\vec 0$.

## Come si usa
**Esempio del manoscritto** (p. 113): disco che rotola senza strisciare su un piano inclinato, con polo nel punto di contatto $C$; il manoscritto scrive $\dot{\vec K}_C=(G-C)\times\vec P$, dove $\vec P$ è il peso (svolgimento completo da verificare sul PDF). **Lect6, Ex1:** due masse con molle su una guida liscia; la prima equazione cardinale $m\ddot x_G=-k_1x_1-k_2x_2$ si chiude in $x_G$ solo se $k_1m_2=k_2m_1$.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 72-73, eqq. 7.40-7.46; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Integrali primi del moto", pp. 111-115).

## Prerequisiti
- [[Teorema del moto del centro di massa]]: dà la conservazione di Q
- [[Teorema del momento angolare]]: dà la conservazione di K

## Porta a
- [[Coordinate cicliche]]: integrali primi lagrangiani
- [[Integrale di Jacobi]]: integrale primo dell'energia generalizzata

## Collegati
- [[Conservazione della quantità di moto]]: caso con risultante esterna nulla
- [[Conservazione del momento angolare]]: caso con momento esterno nullo
- [[Conservazione dell'energia meccanica]]: E = T − U costante
- [[Moti alla Poinsot]]: K_Q e T_0 costanti
