---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["relative velocity theorem", "velocità relativa", "velocità assoluta", "velocità di trascinamento", "sistema fisso e sistema mobile"]
tags: [competenza, area/fisica]
---

# Teorema delle velocità relative

> Lega la velocità di un punto misurata da un osservatore fisso a quella misurata da un osservatore in un sistema mobile che trasla e ruota.

## Definizione / enunciato
Con Oxyz fisso e O'x'y'z' mobile: $\vec r=\vec{OO'}+\vec r\,'$. Derivando, compaiono anche le derivate dei versori mobili, che per le formule di Poisson valgono $\vec\omega\times\hat i'$ ecc. Si ottiene
$$\vec v=\vec v_{O'}+\vec v\,'+\vec\omega\times\vec r\,'.$$
La **velocità di trascinamento** $\vec v_t=\vec v-\vec v\,'=\vec v_{O'}+\vec\omega\times\vec r\,'$ è la velocità che il punto avrebbe se fosse fermo nel sistema mobile (termine traslatorio più termine rotatorio).

## Formule chiave
$$\vec v=\vec v_{O'}+\vec v\,'+\vec\omega\times\vec r\,',\qquad \vec v_t=\vec v_{O'}+\vec\omega\times\vec r\,'$$
Casi: solo traslazione $\vec v=\vec v_{O'}+\vec v\,'$; solo rotazione $\vec v=\vec v\,'+\vec\omega\times\vec r\,'$.

## Intuizione
La velocità assoluta è quella relativa più quella "regalata" dal moto del sistema mobile nel punto in cui ci si trova.

## Come si usa
Esercizio 1 (pp. 35-40): fiume largo $d=60$ m con corrente di 1.5 m/s; un nuotatore nuota a 1.2 m/s rispetto all'acqua, perpendicolarmente alla riva. Qui $\vec v=\vec v_{O'}+\vec v\,'$ e il tempo di andata e ritorno risulta 100 s, cioè $2d/(1.2\ \mathrm{m/s})$. Nel puro rotolamento il teorema dà $\vec v_C=\vec v_{CM}+\vec\omega\times\vec r$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 28/03/2022; dimostrazione richiesta all'orale. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/MotiRelativi/MotiRelativi_Lezione1.pdf` (pp. 3-40).
- **Meccanica** (triennale): $\vec v_a=\vec v_r+\vec v_\tau$ con velocità di trascinamento $\vec v_\tau(P)=\vec v_a(Q)+\vec\omega\wedge(P-Q)$, con $Q$ origine della terna mobile (2.77-2.78), cioè la velocità che $P$ avrebbe se fosse solidale alla terna mobile. Composizione delle velocità angolari $\vec\omega_a=\vec\omega_r+\vec\omega$ (2.85). Fonti: `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 23-25, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezione 6 del 14/03/2017, "Cinematica relativa", da p. 40).

## Prerequisiti
- [[Formule di Poisson]]: derivate dei versori del sistema mobile
- [[Prodotto vettoriale]]: termine rotatorio ω × r'

## Porta a
- [[Teorema delle accelerazioni relative]]: si deriva una seconda volta
- [[Sistema di riferimento del centro di massa]]: traslazione senza rotazione
- [[Moto di puro rotolamento]]: velocità del punto di contatto

## Collegati
- Nessuno.
