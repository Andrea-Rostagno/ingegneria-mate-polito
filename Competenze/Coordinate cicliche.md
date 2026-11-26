---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["cyclic coordinates", "ignorable coordinates", "coordinata ciclica", "coordinata ignorabile", "momento cinetico", "kinematic moment", "integrali primi di Lagrange", "Lagrange prime integrals"]
tags: [competenza, area/fisica]
---

# Coordinate cicliche

> Una coordinata lagrangiana da cui la lagrangiana non dipende esplicitamente: il momento cinetico a essa coniugato è un integrale primo.

## Definizione / enunciato
Se $\partial L/\partial q_k=0$, l'equazione di Lagrange per $q_k$ diventa $\frac{d}{dt}\frac{\partial L}{\partial\dot q_k}=0$, quindi
$$p_k=\frac{\partial L}{\partial\dot q_k}=\text{cost}\qquad(8.21).$$
$p_k$ si chiama **momento cinetico** (kinematic moment) e la coordinata $q_k$ si dice **ciclica** o **ignorabile**.

## Formule chiave
**Ex2:** punto in un potenziale $U(y,z)$ indipendente da $x$: $L=\frac12m(\dot x^2+\dot y^2+\dot z^2)+U(y,z)$, quindi $p_x=m\dot x$ è costante, coerentemente con $F_x=\partial U/\partial x=0$.
**Ex3:** corpo rigido con angoli di Eulero; se $U$ non dipende da $\psi$ (precessione), si conserva $p_\psi=\partial T/\partial\dot\psi=\vec K_G\cdot\hat\imath_3$, e analogamente $p_\phi=\vec K_G\cdot\hat e_3$.

## Intuizione
L'indipendenza di $L$ da una coordinata è una simmetria (traslazione lungo $x$, rotazione attorno a un asse). L'integrale primo corrispondente è una componente della quantità di moto o del momento angolare: il formalismo lagrangiano ritrova le leggi di conservazione delle equazioni cardinali.

## Come si usa
Si scrive $L$, si cercano le $q_k$ assenti, si fissa la costante $p_k$ con le condizioni iniziali e la si usa per eliminare $\dot q_k$ dalle altre equazioni. Il manoscritto ha un esempio con un'asta e la coordinata $x$, che conclude "$m\vec v_G\cdot\hat\imath=$ costante" (pagine viste solo nelle intestazioni: svolgimento da verificare sul PDF).

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 84, Ex2-Ex3; numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (esempio dell'asta, pp. 159-166).

## Prerequisiti
- [[Equazioni di Lagrange]]: ∂L/∂q_k = 0 nell'equazione k-esima
- [[Integrali primi del moto]]: p_k è un integrale primo

## Porta a
- Nessuno.

## Collegati
- [[Conservazione della quantità di moto]]: p_x = m ẋ per una coordinata cartesiana ciclica
- [[Integrale di Jacobi]]: analogo per il tempo ciclico
- [[Angoli di Eulero]]: ψ ciclica nel corpo rigido
