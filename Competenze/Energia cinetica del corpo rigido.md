---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["kinetic energy of a rigid body", "energia cinetica di un sistema rigido", "T = ½ m v_G² + ½ I_G ω·ω", "energia cinetica rispetto a un punto del corpo"]
tags: [competenza, area/fisica]
---

# Energia cinetica del corpo rigido

> L'energia cinetica di un corpo rigido si scrive con la velocità di un punto e il tensore d'inerzia; rispetto al baricentro è la somma di traslazione e rotazione.

## Definizione / enunciato
Def. 7.1: $T=\frac12\sum_im_iv_i^2$ oppure $T=\frac12\int_{\mathcal B}\rho v^2d\tau$ (7.36). Per un corpo rigido, sostituendo $\vec v_P=\vec v_Q+\vec\omega\wedge(P-Q)$:
$$T=\frac12mv_Q^2+m\vec v_Q\cdot\vec\omega\wedge(G-Q)+\frac12I_Q\vec\omega\cdot\vec\omega$$
(Lect6 p. 71; il manoscritto ha la stessa formula, con $M(G-Q)$).

## Formule chiave
$$T=\frac12mv_G^2+\frac12I_G\vec\omega\cdot\vec\omega$$
(caso $Q=G$, coerente con König $T=\frac12mv_G^2+T^{(G)}$, eq. 7.37). Con un punto fisso $O$: $T=\frac12I_O\vec\omega\cdot\vec\omega$. Nel moto piano: $T=\frac12mv_G^2+\frac12I_G\omega^2$ (8.20).

## Intuizione
Il termine misto $m\vec v_Q\cdot\vec\omega\wedge(G-Q)$ è nullo se $Q=G$ oppure se $\vec v_Q=\vec 0$ (punto fisso o centro di istantanea rotazione): per questo si sceglie quasi sempre il baricentro o un punto fisso.

## Come si usa
**Lect7, Ex5:** prima asta che ruota attorno a $O$ fisso, $T_{OA}=\frac12(\frac13ml^2+ml^2)\dot\vartheta^2=\frac23ml^2\dot\vartheta^2$ (Huygens-Steiner); seconda asta con König, $T_{AB}=2ml^2\dot\vartheta^2+\frac23ml^2\dot\varphi^2+2ml^2\cos(\vartheta-\varphi)\dot\vartheta\dot\varphi$. **Lect7, Ex1** (carrucole): $T=\frac12mv_C^2+\frac14mr^2\dot\vartheta^2+\frac14MR^2\dot\varphi^2+\frac12\mu v_P^2=(\frac34m+M+2\mu)\dot y_B^2$.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (p. 71, Def. 7.1 e Thm 7.4; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 83, 92); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` ("Energia cinetica di un sistema rigido", pp. 141-146).

## Prerequisiti
- [[Tensore d'inerzia]]: termine ½ I ω·ω
- [[Formula fondamentale della cinematica rigida]]: si eleva al quadrato v_P
- [[Teoremi di König]]: T = ½ m v_G² + T^(G)

## Porta a
- [[Energia cinetica in coordinate lagrangiane]]: T scritta nelle q e q̇

## Collegati
- [[Teorema dell'energia cinetica]]: T' = Π
- [[Teorema di Huygens-Steiner]]: I rispetto al punto fisso
