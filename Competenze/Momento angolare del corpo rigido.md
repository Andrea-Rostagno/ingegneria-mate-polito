---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["angular momentum of a rigid body", "momento della quantità di moto del corpo rigido", "K_Q = I_Q ω", "momento angolare rispetto al baricentro", "quantità di moto totale Q = m v_G"]
tags: [competenza, area/fisica]
---

# Momento angolare del corpo rigido

> Per un corpo rigido il momento angolare rispetto a un punto si esprime con il tensore d'inerzia e la velocità angolare: $\vec K_Q=m(G-Q)\wedge\vec v_Q+I_Q\vec\omega$.

## Definizione / enunciato
Quantità di moto e momento angolare di un sistema: $\vec Q=\sum_im_i\vec v_i=m\vec v_G$ (Thm 7.1, 7.27-7.29) e $\vec K_O=\sum_i(P_i-O)\wedge m_i\vec v_i$ (7.30a), con $\vec K_Q=(O-Q)\wedge\vec Q+\vec K_O$.
**Thm 7.2:** $\vec K_Q=(G-Q)\wedge m\vec v_G+\vec K_G=(G-Q)\wedge m\vec v_G+\vec K_Q^{(G)}$, e $\vec K_G=\vec K_Q^{(G)}$ (momento nel moto relativo al baricentro).
**Thm 7.3:** per un corpo rigido, con $\vec v_Q$ velocità del punto del corpo che passa per $Q$,
$$\vec K_Q=m(G-Q)\wedge\vec v_Q+I_Q\vec\omega\qquad(7.33).$$

## Formule chiave
$$\vec K_G=I_G\vec\omega\qquad(7.34),\qquad\vec K_Q=m(G-Q)\wedge\vec v_G+I_G\vec\omega\qquad(7.35)$$
Se $Q=C$ è un centro di istantanea rotazione ($\vec v_C=\vec 0$) oppure $(G-C)\parallel\vec v_C$: $\vec K_C=I_C\vec\omega$.

## Intuizione
La dimostrazione sostituisce $\vec v_P=\vec v_Q+\vec\omega\wedge(P-Q)$ e sviluppa il doppio prodotto vettoriale $\int\rho(P-Q)\wedge(\vec\omega\wedge(P-Q))d\tau$: le componenti sono esattamente le righe di $I_Q\vec\omega$. In generale $\vec K$ **non** è parallelo a $\vec\omega$: lo è solo lungo un asse principale.

## Come si usa
Si sceglie il polo ($G$, un punto fisso o il centro di istantanea rotazione) in modo da annullare il termine $m(G-Q)\wedge\vec v_Q$, poi si usa la seconda equazione cardinale.
## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 68-71, eqq. 7.27-7.35; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (sezione dopo le equazioni cardinali della dinamica, "Equazioni cardinali della dinamica", pp. 94-106, dove "per un sistema rigido vale $k_G=I_G\omega$").

## Prerequisiti
- [[Tensore d'inerzia]]: K_Q = I_Q ω
- [[Formula fondamentale della cinematica rigida]]: si sostituisce v_P nella definizione
- [[Momento angolare]]: definizione per il punto materiale

## Porta a
- [[Equazioni di Eulero]]: si deriva K_Q = I_Q ω nella terna solidale
- [[Moti alla Poinsot]]: K_Q costante

## Collegati
- [[Teoremi di König]]: Thm 7.2 è il teorema di König per il momento angolare
- [[Centro di istantanea rotazione]]: polo con K_C = I_C ω
