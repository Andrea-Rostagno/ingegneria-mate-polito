---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["relative acceleration theorem", "accelerazione di Coriolis", "accelerazione complementare", "accelerazione di trascinamento", "accelerazione centripeta di trascinamento", "teorema di Coriolis"]
tags: [competenza, area/fisica]
---

# Teorema delle accelerazioni relative

> Lega le accelerazioni misurate nel sistema fisso e in quello mobile: compaiono l'accelerazione di trascinamento e l'accelerazione complementare (di Coriolis).

## Definizione / enunciato
Derivando $\vec v=\vec v_{O'}+\vec v\,'+\vec\omega\times\vec r\,'$ e usando di nuovo le formule di Poisson ($\frac{d\vec v\,'}{dt}=\vec a\,'+\vec\omega\times\vec v\,'$, $\vec\omega\times\frac{d\vec r\,'}{dt}=\vec\omega\times\vec v\,'+\vec\omega\times(\vec\omega\times\vec r\,')$):
$$\vec a=\vec a\,'+\vec a_{O'}+\vec\omega\times(\vec\omega\times\vec r\,')+\frac{d\vec\omega}{dt}\times\vec r\,'+2\vec\omega\times\vec v\,'.$$

## Formule chiave
$$\vec a_t=\vec a_{O'}+\vec\omega\times(\vec\omega\times\vec r\,')+\frac{d\vec\omega}{dt}\times\vec r\,',\qquad \vec a_c=2\vec\omega\times\vec v\,'$$

## Intuizione
L'accelerazione di trascinamento dipende solo dal moto relativo dei due sistemi; quella di Coriolis compare solo se il punto si muove ($\vec v\,'\ne0$) in un sistema che ruota.

## Come si usa
È la base delle forze apparenti: moltiplicando per $-m$ i termini di trascinamento e di Coriolis si ottengono forza centrifuga e forza di Coriolis.

## Nei corsi
- **Fisica 1** (triennale): lezione del 28/03/2022; alcuni passaggi sono dichiarati "non dimostrati" a lezione. Fonte: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/MotiRelativi/MotiRelativi_Lezione1.pdf` (pp. 41-49).
- **Meccanica** (triennale): $\vec a_a=\vec a_r+\vec a_\tau+\vec a_c$ con $\vec a_\tau=\vec a_a(Q)+\dot{\vec\omega}\wedge(P-Q)+\vec\omega\wedge(\vec\omega\wedge(P-Q))$ e accelerazione di Coriolis $\vec a_c=2\vec\omega\wedge\vec v_r$ (2.82-2.84), nulla se $\vec\omega=\vec 0$ o $\vec v_r=\vec 0$. Nel manoscritto si chiama "Teorema di Coriolis". Derivata di un vettore in due terne: $\dot{\vec u}=\vec u'+\vec\omega\wedge\vec u$ (Thm 2.4). Fonti: `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 24-26, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (p. 45).

## Prerequisiti
- [[Teorema delle velocità relative]]: si deriva una seconda volta

## Porta a
- [[Trasformazioni galileiane]]: caso di traslazione uniforme
- [[Forze apparenti]]: termini di trascinamento e Coriolis

## Collegati
- Nessuno.
