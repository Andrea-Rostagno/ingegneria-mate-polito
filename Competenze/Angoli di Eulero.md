---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Euler angles", "angolo di nutazione", "angolo di precessione", "angolo di rotazione propria", "linea dei nodi", "axis of nodes", "singolarità polare", "polar singularity"]
tags: [competenza, area/fisica]
---

# Angoli di Eulero

> Tre angoli (nutazione, precessione, rotazione propria) che descrivono l'orientazione di una terna solidale a un corpo rigido rispetto alla terna fissa.

## Definizione / enunciato
Se $\hat\imath_3\wedge\hat e_3\neq\vec 0$ si introduce la **linea dei nodi** $\hat n=(\hat\imath_3\wedge\hat e_3)/|\hat\imath_3\wedge\hat e_3|$, intersezione dei piani $(\hat\imath_1,\hat\imath_2)$ e $(\hat e_1,\hat e_2)$. Allora:
- **nutazione** $\vartheta\in(0,\pi)$: angolo tra $\hat\imath_3$ e $\hat e_3$;
- **precessione** $\psi$: angolo tra $\hat\imath_1$ e $\hat n$;
- **rotazione propria** $\phi$: angolo tra $\hat n$ ed $\hat e_1$.
La terna solidale si ottiene con tre rotazioni successive: di $\psi$ attorno a $\hat\imath_3$, di $\vartheta$ attorno a $\hat n$, di $\phi$ attorno al nuovo terzo asse. La matrice $R$ è ortogonale con $\det R=1$; un moto rigido è determinato da sei funzioni $x_Q,y_Q,z_Q,\phi,\psi,\vartheta$.

## Formule chiave
$$\hat e_3=\sin\psi\sin\vartheta\,\hat\imath_1-\cos\psi\sin\vartheta\,\hat\imath_2+\cos\vartheta\,\hat\imath_3\qquad(2.36)$$
Velocità angolare (Lect1, eq. 2.89): $\vec\omega=\dot\psi\hat\imath_3+\dot\vartheta\hat e_1'+\dot\phi\hat e_3$, cioè la somma delle tre rotazioni elementari. Le componenti $\omega_1,\omega_2,\omega_3$ nella terna principale usate per le equazioni di Eulero sono (Lect6, eq. 7.49)
$$\omega_1=\dot\vartheta\cos\varphi+\dot\psi\sin\varphi\sin\vartheta,\quad\omega_2=\dot\psi\cos\varphi\sin\vartheta-\dot\vartheta\sin\varphi,\quad\omega_3=\dot\psi\cos\vartheta+\dot\varphi$$
(nella (7.49) i versori sono stampati come $\hat\imath_1,\hat\imath_2,\hat\imath_3$).

## Intuizione
Per $\vartheta=0,\pi$ ($\hat\imath_3\parallel\hat e_3$) la linea dei nodi non è definita: si conosce solo $\psi\pm\phi$ (**singolarità polare**, eqq. 2.41-2.43). Per questo nelle simulazioni (per esempio dei satelliti) si usano i quaternioni.

## Come si usa
Si scrivono $\vec\omega$ e l'energia cinetica di un corpo con punto fisso; per esempio $T$ del corpo rigido in terna centrale d'inerzia (Lect7, Ex3, p. 84) e il sistema per $(\ddot\vartheta,\ddot\psi,\ddot\phi)$ ricavato dalle equazioni di Eulero, con $\det A=\sin\vartheta$ (eq. 7.51).

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 17-19, eqq. 2.31-2.43; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 74-75, eqq. 7.49-7.52).

## Prerequisiti
- [[Matrice ortogonale]]: la rotazione R ha R^T R = I
- [[Corpo rigido]]: terna solidale al corpo

## Porta a
- [[Equazioni di Eulero]]: si risolvono per gli angoli
- [[Moti alla Poinsot]]: precessioni descritte con gli angoli

## Collegati
- [[Formula fondamentale della cinematica rigida]]: ω scritta tramite gli angoli
