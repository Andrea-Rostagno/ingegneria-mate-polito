---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["rolling without slipping", "rotolamento senza strisciamento", "condizione di puro rotolamento", "vCM = omega R", "asse istantaneo di rotazione"]
tags: [competenza, area/fisica]
---

# Moto di puro rotolamento

> Moto di un cilindro o di una sfera su un piano in cui il punto di contatto ha velocità nulla: in ogni istante il corpo ruota attorno all'asse istantaneo per il punto di contatto.

## Definizione / enunciato
Dal teorema delle velocità relative $\vec v_C=\vec v_{CM}+\vec\omega\times\vec r$; la condizione di puro rotolamento $\vec v_C=0$ dà $v_{CM}=\omega r$ e $a_{CM}=\alpha r$. Il punto C resta fermo grazie a una forza di **attrito statico**, che non compie lavoro (agisce su un punto fermo): l'energia meccanica si conserva se le altre forze sono conservative.
Con forza $F$ applicata all'asse: $F-f_a=ma_{CM}$, $f_aR=I\alpha$. Con momento $M$ applicato all'asse (motore) l'attrito ha il verso del moto ed è la forza che accelera il CM.

## Formule chiave
$$a_{CM}=\frac{F}{m\left(1+\frac{I}{mR^2}\right)},\qquad f_a=\frac{I}{R^2}a_{CM},\qquad F\le F_{lim}=\mu_smg\left(1+\frac{mR^2}{I}\right)$$
$$\text{momento motore: } a_{CM}=\frac{M}{mR\left(1+\frac{I}{mR^2}\right)},\qquad M\le M_{lim}=\mu_smgR\left(1+\frac{I}{mR^2}\right)$$

## Intuizione
Oltre il valore limite l'attrito statico non basta e il corpo striscia; quando un motore fa girare una ruota è l'attrito con il suolo che la spinge avanti.

## Come si usa
Esercizio 1 (pp. 15-19): corpo che rotola da quota $h$ su un piano inclinato, con $mgh=\tfrac12mv_{CM}^2+\tfrac12I\omega^2$. Esercizio 2 (pp. 20-25): angolo massimo del piano inclinato per avere puro rotolamento.

## Nei corsi
- **Fisica 1** (triennale): lezione del 2/05/2022 (fonte citata: Mazzoldi, Nigro, Voci). Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione3.pdf` (pp. 2-25).
- **Meccanica** (triennale): come vincolo. Il rotolamento senza strisciamento di una superficie su un'altra è anolonomo ($\vec v_1=\vec v_2$ nel punto di contatto, Ex11). Per il disco su una guida rettilinea $\vec v_C=(\dot x_G-R\dot\vartheta)\hat\imath_1=\vec 0$ si integra in $x=R\vartheta+k$, olonomo (Ex13). L'attrito statico non compie lavoro virtuale ($\delta L^{(v)}=\vec\Phi\cdot\delta C=0$, eq. 6.4), quindi il vincolo è ideale. Fonti: `triennale/ANNO 2/Meccanica/Lect2-Constraints.pdf` (p. 34, numerazione stampata); `triennale/ANNO 2/Meccanica/Lect5-Statics.pdf` (p. 56).

## Prerequisiti
- [[Rotazione attorno a un asse fisso]]: rotazione attorno al CM
- [[Teorema delle velocità relative]]: velocità del punto di contatto
- [[Attrito radente]]: attrito statico nel punto di contatto

## Porta a
- [[Attrito volvente]]: spiega perché il rotolamento si arresta

## Collegati
- [[Teoremi di König]]: energia cinetica di traslazione più rotazione
