---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["fundamental formula of rigid body velocities", "formula fondamentale dei moti rigidi", "legge di distribuzione delle velocità", "legge di distribuzione delle accelerazioni", "formula di Rivals", "moto rototraslatorio", "moto rigido elicoidale", "moto sferico"]
tags: [competenza, area/fisica]
---

# Formula fondamentale della cinematica rigida

> Lega le velocità (e le accelerazioni) di due punti qualsiasi di un corpo rigido tramite la sola velocità angolare: è l'equazione caratteristica del moto rigido.

## Definizione / enunciato
Sia $\mathcal B$ rigido, $Q\in\mathcal B$ e $\{\hat e_h\}$ una terna solidale. Scrivendo $P(t)=Q(t)+\sum_h y_h(P)\hat e_h(t)$ con $y_h$ costanti e usando le [[Formule di Poisson]] $\dot{\hat e}_h=\vec\omega\wedge\hat e_h$ si ottiene la formula fondamentale delle velocità e, derivando ancora, quella delle accelerazioni. Vale anche il viceversa: se la formula delle velocità vale, il moto è rigido.

## Formule chiave
$$\vec v_P=\vec v_Q+\vec\omega\wedge(P-Q)\qquad(2.51)$$
$$\vec a_P=\vec a_Q+\dot{\vec\omega}\wedge(P-Q)+\vec\omega\wedge[\vec\omega\wedge(P-Q)]\qquad(2.53)$$
Proiettando la prima su $P-Q$: $\vec v_P\cdot(P-Q)=\vec v_Q\cdot(P-Q)$ (2.57), cioè le velocità di due punti hanno la stessa componente lungo la congiungente (rigidità).

## Intuizione
Ogni moto rigido istantaneo è la somma di una traslazione con velocità $\vec v_Q$ e di una rotazione con velocità angolare $\vec\omega$ attorno a un asse per $Q$; $\vec\omega$ non dipende dal punto scelto.

## Come si usa
Classificazione dei moti rigidi secondo $\vec\omega$ (Lect1 p. 20): traslatorio ($\vec\omega=\vec 0$), rototraslatorio (direzione di $\vec\omega$ costante), elicoidale, piano ($\vec\omega\perp\pi$), sferico (esiste $C$ fermo, $\vec v_P=\vec\omega\wedge(P-C)$, eq. 2.54). Negli esercizi si scrive $\vec v$ del baricentro o del punto di contatto, per esempio $\vec v_C=(\dot x_G-R\dot\vartheta)\hat\imath_1$ per il disco sulla guida (Lect2 p. 34, eq. 3.23).

## Nei corsi
- **Meccanica** (triennale): notazione $\wedge$ per il prodotto vettoriale e $(P-Q)$ per i vettori posizione. Fonti: `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 19-20, eqq. 2.46-2.54; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezioni 4-5 del 13/03/2017, pp. 26-39, "legge di distribuzione delle accelerazioni").

## Prerequisiti
- [[Formule di Poisson]]: derivate dei versori solidali
- [[Corpo rigido]]: distanze costanti tra i punti
- [[Prodotto vettoriale]]: termine rotatorio ω∧(P−Q)

## Porta a
- [[Asse di Mozzi]]: punti di velocità minima
- [[Centro di istantanea rotazione]]: punto di velocità nulla nei moti piani
- [[Spostamenti virtuali]]: la rigidità vincola le velocità virtuali (3.17)
- [[Momento angolare del corpo rigido]]: si sostituisce v_P nella definizione
- [[Energia cinetica del corpo rigido]]: si eleva al quadrato v_P
- [[Potenza delle forze su un corpo rigido]]: dP = dQ + ε∧(P−Q)

## Collegati
- [[Angoli di Eulero]]: danno ω in funzione di tre angoli
- [[Teorema delle velocità relative]]: la velocità di trascinamento ha la stessa forma
