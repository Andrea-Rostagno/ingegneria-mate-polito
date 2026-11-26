---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Euler's equations", "Euler equations of rigid body dynamics", "equazioni di Eulero del corpo rigido", "equazioni del moto del corpo rigido negli assi principali"]
tags: [competenza, area/fisica]
---

# Equazioni di Eulero

> La seconda equazione cardinale di un corpo rigido, scritta negli assi principali d'inerzia solidali al corpo, rispetto a un punto fisso o al baricentro.

## Definizione / enunciato
**Thm 7.11:** se $Q\equiv G$, oppure $Q$ è fisso e appartiene sempre all'asse istantaneo di rotazione,
$$m\vec a_G=\vec R^{(e)},\qquad I_Q\dot{\vec\omega}+\vec\omega\wedge I_Q\vec\omega=\vec M_Q^{(e)}\qquad(7.47).$$
Nella terna principale $\{\hat e_1,\hat e_2,\hat e_3\}$ con origine $Q$:
$$\begin{cases}I_1\dot\omega_1-(I_2-I_3)\omega_2\omega_3=M_1^{(e)}\\I_2\dot\omega_2-(I_3-I_1)\omega_3\omega_1=M_2^{(e)}\\I_3\dot\omega_3-(I_1-I_2)\omega_1\omega_2=M_3^{(e)}\end{cases}\qquad(7.48)$$

## Formule chiave
Derivata in due terne: $\dot{\vec u}=\vec u'+\vec\omega\wedge\vec u$ (Thm 2.4). Applicata a $\vec K_Q=I_Q\vec\omega$, dove $I_Q$ è costante nella terna solidale, dà $\dot{\vec K}_Q=I_Q\dot{\vec\omega}+\vec\omega\wedge I_Q\vec\omega$.
**Corpo pesante con punto fisso** (Lect6 p. 77): a secondo membro $mg(u_2x_3-u_3x_2)$ e le permutazioni cicliche, con $\hat u=\hat\imath_3$ verticale, più $\dot u_1+u_3\omega_2-u_2\omega_3=0$ e simili (Poisson per $\hat u$ fisso).

## Intuizione
Il termine $\vec\omega\wedge I_Q\vec\omega$ è nullo solo se $\vec\omega$ è lungo un asse principale: per questo un corpo che ruota attorno a un asse non principale ha bisogno di un momento esterno (cuscinetti).

## Come si usa
Con gli [[Angoli di Eulero]] si sostituiscono $\omega_i$ e $\dot\omega_i$ (eqq. 7.49-7.52) e si ottiene $A(\ddot\vartheta,\ddot\psi,\ddot\phi)^T=b$ con $\det A=\sin\vartheta$, risolvibile fuori dalla singolarità polare. **Asse fisso:** con $\hat e_3=\hat\imath_3$ e vincolo ideale resta $I_3\ddot\psi=M^a_{\Omega3}(\psi,\dot\psi,t)$ (7.60); se il momento dipende solo da $\psi$ si ha l'integrale $\frac12I_3\dot\psi^2-U(\psi)=E$.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect6-Dynamics.pdf` (pp. 74-77, eqq. 7.47-7.60; numerazione stampata); `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (p. 26, Thm 2.4).

## Prerequisiti
- [[Momento angolare del corpo rigido]]: K_Q = I_Q ω
- [[Teorema del momento angolare]]: seconda equazione cardinale
- [[Tensore d'inerzia]]: assi e momenti principali
- [[Angoli di Eulero]]: ω in funzione degli angoli

## Porta a
- [[Moti alla Poinsot]]: caso con momento esterno nullo

## Collegati
- [[Rotazione attorno a un asse fisso]]: caso I_3 ψ'' = M
