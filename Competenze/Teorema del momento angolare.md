---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["angular momentum theorem", "seconda equazione cardinale", "II equazione cardinale della dinamica", "seconda legge di Newton in forma angolare", "teorema dei momenti", "polo mobile"]
tags: [competenza, area/fisica]
---

# Teorema del momento angolare

> La derivata del momento angolare rispetto a un polo è uguale al momento delle forze (esterne, per un sistema), più un termine che dipende dal moto del polo.

## Definizione / enunciato
**Punto:** derivando $\vec L_O=(\vec r-\vec r_O)\times m\vec v$ si ottiene
$$\frac{d\vec L_O}{dt}=-\dot{\vec r}_O\times m\vec v+\vec\tau_O^{T}.$$
**Sistema di punti (II equazione cardinale):** i momenti delle forze interne si annullano a coppie (azione e reazione sulla stessa retta), quindi
$$\frac{d\vec L}{dt}=\vec M^{(E)}-\vec v_O\times m\vec v_{CM}.$$
Il termine $\vec v_O\times m\vec v_{CM}$ è nullo se il polo è fermo, se coincide con il centro di massa o se $\vec v_O\parallel\vec v_{CM}$.

## Formule chiave
$$\frac{d\vec L}{dt}=\vec M^{(E)}=\sum_i\vec r_i\times\vec F_i^{(E)}\qquad(\text{polo fisso o CM})$$

## Intuizione
È l'analogo rotazionale della seconda legge di Newton, non una legge nuova: ne è una conseguenza. Le forze interne non possono cambiare il momento angolare totale.

## Come si usa
Se il momento esterno è nullo rispetto a un polo opportuno, $\vec L$ si conserva rispetto a quel polo; per il corpo rigido dà l'equazione della rotazione $M_z=I_z\alpha$.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 28/03 (punto) e 4/04/2022 (sistemi, polo mobile). Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_PuntoMateriale_Lezione4.pdf` (pp. 9-18); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione1.pdf` (pp. 31-44).
- **Meccanica** (triennale): seconda equazione della dinamica $\vec M_\Omega^{(e)}=\dot{\vec K}_\Omega+\vec v_\Omega\wedge\vec Q$ (7.39), con $\vec Q=m\vec v_G$: stessa forma della versione di Fisica 1. Le forze interne si eliminano perché sono dirette lungo le congiungenti. Per il corpo rigido, con $Q=G$ o $Q$ fisso, diventa $I_Q\dot{\vec\omega}+\vec\omega\wedge I_Q\vec\omega=\vec M_Q^{(e)}$ (equazioni di Eulero). Fonti: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 72, 74, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (pp. 94-106).

## Prerequisiti
- [[Momento angolare]]: se ne calcola la derivata
- [[Momento di una forza]]: uguaglia la derivata di L
- [[Leggi di Newton]]: si sostituisce F=ma

## Porta a
- [[Conservazione del momento angolare]]: con momento esterno nullo
- [[Rotazione attorno a un asse fisso]]: derivata di L uguale al momento esterno

## Collegati
- Nessuno.
