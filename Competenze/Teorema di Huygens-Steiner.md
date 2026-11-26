---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["parallel axis theorem", "teorema degli assi paralleli", "teorema di Steiner", "Huygens-Steiner"]
tags: [competenza, area/fisica]
---

# Teorema di Huygens-Steiner

> Il momento d'inerzia rispetto a un asse è quello rispetto all'asse parallelo passante per il centro di massa più $ma^2$, con $a$ distanza tra gli assi.

## Definizione / enunciato
Siano $z$ e $z'$ assi paralleli a distanza $a$, con $z'$ passante per il CM. Allora
$$I_z=I_C+ma^2.$$
Dimostrazione: con $x=x'$, $y=y'+a$, $I_z=\sum m_i(x_i'^2+y_i'^2)+\sum m_ia^2+2a\sum m_iy'_i$, e l'ultimo termine è nullo perché $y'_{CM}=0$.

## Formule chiave
$$I_z=I_C+ma^2,\qquad E_{cin}=\tfrac12I_z\omega^2=\tfrac12I_C\omega^2+\tfrac12mv_{CM}^2$$

## Intuizione
Tra tutti gli assi paralleli, quello per il CM ha il momento d'inerzia minimo; spostarsi aggiunge l'inerzia di una massa puntiforme posta nel CM.

## Come si usa
Esercizio 3 (pp. 39-47): un proiettile si conficca in un anello sospeso a un perno; $I_{sistema}=(MR^2+MR^2)_{anello}+m(2R)^2$, che con $m=M/8$ dà $\tfrac52MR^2$; poi l'energia dà la quota massima $h=0.11$ m e la deflessione $53.7^\circ$.

## Nei corsi
- **Fisica 1** (triennale): lezione del 2/05/2022; dimostrazione richiesta all'orale. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione3.pdf` (pp. 33-50).
- **Meccanica** (triennale): conseguenza per due assi paralleli $a_1,a_2$ non baricentrici, a distanze $d_1,d_2$ dall'asse parallelo per $G$: $I_{a_2}=I_{a_1}+m(d_2^2-d_1^2)$ (4.27). L'asse baricentrico dà il momento minimo in una data direzione. Usato anche nella lagrangiana dell'asta con estremo fisso, $T_{OA}=\frac12(\frac13ml^2+ml^2)\dot\vartheta^2$ (Lect7, Ex5). Fonti: `triennale/ANNO 2/Meccanica/Lect3-GeometryOfMasses.pdf` (pp. 38-40, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (p. 92).

## Prerequisiti
- [[Momento d'inerzia]]: lo si trasporta su un asse parallelo
- [[Centro di massa]]: l'asse di riferimento passa per il CM

## Porta a
- [[Pendolo composto]]: momento d'inerzia rispetto al perno

## Collegati
- [[Teoremi di König]]: insieme danno l'energia di rotazione
