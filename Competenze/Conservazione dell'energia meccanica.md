---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["conservation of mechanical energy", "energia meccanica", "mechanical energy", "lavoro delle forze non conservative", "teorema del lavoro con forze conservative"]
tags: [competenza, area/fisica]
---

# Conservazione dell'energia meccanica

> Se agiscono solo forze conservative la somma di energia cinetica e potenziale resta costante; altrimenti la sua variazione è il lavoro delle forze non conservative.

## Definizione / enunciato
Con $\vec F_{TOT}=\vec F_C+\vec F_{NC}$, il teorema dell'energia cinetica dà $W_C+W_{NC}=\Delta E_k$, e $W_C=U(A)-U(B)$. Quindi
$$W_{NC}=E_{mecc,B}-E_{mecc,A},\qquad E_{mecc}=E_k+U.$$
In assenza di forze non conservative $E_{mecc}$ si conserva. Vale anche per i sistemi di punti, sommando energie potenziali interne ed esterne.

## Formule chiave
$$\tfrac12mv_A^2+U(A)=\tfrac12mv_B^2+U(B)\quad(W_{NC}=0),\qquad W_{NC}=\Delta E_k+\Delta U$$

## Intuizione
L'energia passa da cinetica a potenziale e viceversa; le forze dissipative (attrito) la sottraggono al sistema meccanico, e la termodinamica dirà dove va.

## Come si usa
Esercizio di `Dinamica_Sistemi_Lezione2.pdf` (pp. 44-50): dopo un urto completamente anelastico due blocchi strisciano per un tratto $l$; da $\tfrac12(m_1+m_2)v_{fin}^2=\mu_d(m_1+m_2)gl$ si ricava $\mu_d=v_{fin}^2/(2gl)=0.15$.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 21/03 e 4/04/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_punto_materiale/Dinamica_Puntomateriale_Lezione2.pdf` (p. 37); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Dinamica_Sistemi_di_punti/Dinamica_Sistemi_Lezione1.pdf` (pp. 56-57).
- **Meccanica** (triennale): Thm 7.10, per forze conservative di potenziale $U$ e vincoli ideali, bilateri e fissi: $E=T-U=\text{cost}$ (7.46). Il segno meno nasce dalla convenzione $U$ = potenziale ($V=-U$). Con vincoli mobili e $L$ indipendente dal tempo si conserva invece l'integrale di Jacobi $H=\sum_k\dot q_k\partial L/\partial\dot q_k-L$, che vale $T_2-T_0-U$ (calcolo mio: il testo stampa $T_2-T_1+U$, da verificare sul PDF); per il corpo con asse fisso $\frac12I_3\dot\psi^2-U(\psi)=E$ (Lect6 p. 77). Fonti: `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 74, 77, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 85).

## Prerequisiti
- [[Teorema dell'energia cinetica]]: si spezza il lavoro in conservativo e non
- [[Forza conservativa]]: il lavoro conservativo è -ΔU

## Porta a
- [[Velocità di fuga]]: tra superficie e infinito
- [[Primo principio della termodinamica]]: estende il bilancio energetico al calore

## Collegati
- [[Attrito radente]]: il lavoro dell'attrito è la variazione di energia meccanica
- [[Urto completamente anelastico]]: si applica prima e dopo l'urto, non durante
