---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["Poisson formulas", "derivata di un versore", "derivata di un vettore unitario", "du/dt = omega x u"]
tags: [competenza, area/fisica]
---

# Formule di Poisson

> Esprimono la derivata temporale di un versore che ruota come prodotto vettoriale tra la velocità angolare di rotazione e il versore stesso.

## Definizione / enunciato
La derivata di un versore è sempre perpendicolare al versore: derivando $\hat u\cdot\hat u=1$ si ottiene $2\hat u\cdot\frac{d\hat u}{dt}=0$. Per i versori di una terna che ruota, derivando $\hat i\cdot\hat j=0$, $\hat i\cdot\hat k=0$, $\hat j\cdot\hat k=0$ le sei componenti delle derivate si riducono a tre, che sono le componenti di un unico vettore $\vec\omega$.

## Formule chiave
$$\frac{d\hat i}{dt}=\vec\omega\times\hat i,\qquad \frac{d\hat j}{dt}=\vec\omega\times\hat j,\qquad \frac{d\hat k}{dt}=\vec\omega\times\hat k$$
con $\omega_x=\frac{d\hat j}{dt}\cdot\hat k$, $\omega_y=\frac{d\hat k}{dt}\cdot\hat i$, $\omega_z=\frac{d\hat i}{dt}\cdot\hat j$.

## Intuizione
Tutti i versori di un sistema rigido ruotano con la stessa velocità angolare; la derivata di un vettore di modulo costante può solo cambiarne la direzione, quindi è ortogonale ad esso.

## Come si usa
Servono per derivare vettori scritti su versori mobili: velocità e accelerazione in coordinate polari e intrinseche, e soprattutto i teoremi delle velocità e delle accelerazioni relative.

## Nei corsi
- **Fisica 1** (triennale): la proprietà della derivata di un versore compare in cinematica (lezione del 9/03/2022), le formule di Poisson nei moti relativi (28/03/2022); all'orale si chiede la dimostrazione. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/MotiRelativi/MotiRelativi_Lezione1.pdf` (pp. 11-24); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Cinematica_punto_materiale/Cinematica_Lezione2.pdf` (p. 34); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/Calcolo_vettoriale/Calcolo_Vettoriale.pdf` (p. 44, derivata di un vettore).
- **Meccanica** (triennale): Teorema 2.1 (Poisson) con dimostrazione di esistenza e unicità: per una terna solidale $\{\hat e_h\}$ esiste un unico $\vec\omega$ con $\dot{\hat e}_h=\vec\omega\wedge\hat e_h$, dato da $\vec\omega=\frac12\sum_h\hat e_h\wedge\dot{\hat e}_h$ (2.49). Corollario: $\dot{\vec u}=\vec\omega\wedge\vec u$ per ogni vettore solidale. È il primo passo della formula fondamentale dei moti rigidi. Fonti: `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 19-20, numerazione stampata); `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (lezione 4 del 13/03/2017, pp. 26-31).

## Prerequisiti
- [[Prodotto vettoriale]]: la derivata si scrive come omega vettore u
- [[Prodotto scalare]]: u·u=1 implica u'⊥u

## Porta a
- [[Coordinate polari e cilindriche]]: derivate dei versori radiale e trasverso
- [[Coordinate intrinseche]]: derivata del versore tangente
- [[Teorema delle velocità relative]]: derivate dei versori del sistema mobile

## Collegati
- Nessuno.
