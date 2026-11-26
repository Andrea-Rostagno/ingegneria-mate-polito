---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["König's theorems", "teorema di König", "teorema di Koenig", "teorema di König per l'energia cinetica", "teorema di König del momento angolare"]
tags: [competenza, area/fisica]
---

# Teoremi di König

> Scompongono momento angolare ed energia cinetica di un sistema nel contributo del centro di massa più il contributo del moto relativo al centro di massa.

## Definizione / enunciato
Con $\vec r_i=\vec r_{CM}+\vec r\,'_i$ e $\vec v_i=\vec v_{CM}+\vec v\,'_i$, e usando $\sum m_i\vec r\,'_i=0$, $\sum m_i\vec v\,'_i=0$:
- **momento angolare:** $\vec L_O=\vec r_{CM}\times\vec P+\vec L\,'=\vec L_{CM}+\vec L\,'$;
- **energia cinetica:** $E_{cin}=\tfrac12mv_{CM}^2+E'_{k}$, con $E'_k=\sum\tfrac12m_iv_i'^2$.

## Formule chiave
$$\vec L_O=\vec L_{CM}+\vec L\,',\qquad E_{cin}=\tfrac12mv_{CM}^2+\sum_i\tfrac12m_iv_i'^2$$
Corpo rigido in rotazione: $E_{cin}=\tfrac12I_C\omega^2+\tfrac12mv_{CM}^2$ (da Huygens-Steiner con $a\omega=v_{CM}$).

## Intuizione
L'energia cinetica "del CM" non può essere dissipata dalle forze interne (il CM non cambia moto), mentre quella relativa al CM sì: è proprio quella persa in un urto completamente anelastico.

## Come si usa
- Urti: $E_k=\tfrac12(m_1+m_2)v_{CM}^2+E'_k$, e $E'_k$ è l'energia che può essere assorbita.
- Rotolamento: energia cinetica di un cilindro che rotola e trasla.

## Nei corsi
- **Fisica 1** (triennale): lezione del 6/04/2022 (con dimostrazione), ripresa per il corpo rigido il 2/05/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione2.pdf` (pp. 14-21, 30); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione3.pdf` (pp. 49-50).
- **Meccanica** (triennale): Thm 7.2 $\vec K_Q=(G-Q)\wedge m\vec v_G+\vec K_Q^{(G)}$ con $\vec K_G=\vec K_Q^{(G)}$ per ogni $Q$ (7.31); Thm 7.4 $T=\frac12mv_G^2+T^{(G)}$ (7.37), dimostrato con $\vec v_{i,a}=\vec v_{i,r}+\vec v_G$ e $\vec Q^{(G)}=\vec 0$. Il "moto rispetto al baricentro" è definito in una terna con origine in $G$ che non ruota. Fonti: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 69, 71, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (p. 141).

## Prerequisiti
- [[Sistema di riferimento del centro di massa]]: si scompone il moto rispetto al CM
- [[Teorema dell'energia cinetica]]: energia cinetica di un sistema

## Porta a
- [[Urto completamente anelastico]]: energia dissipata = energia cinetica nel CM

## Collegati
- [[Teorema di Huygens-Steiner]]: insieme danno l'energia di rotazione
- [[Moto di puro rotolamento]]: energia cinetica di traslazione più rotazione
