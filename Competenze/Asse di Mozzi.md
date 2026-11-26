---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["Mozzi axis", "asse di moto", "motion axis", "asse istantaneo di rototraslazione", "invariante scalare cinematico", "kinematic invariant scalar"]
tags: [competenza, area/fisica]
---

# Asse di Mozzi

> Retta, parallela a $\vec\omega$, i cui punti hanno in un dato istante la velocità di modulo minimo: ogni moto rigido istantaneo è una rototraslazione attorno a essa.

## Definizione / enunciato
**Invariante scalare:** moltiplicando scalarmente la [[Formula fondamentale della cinematica rigida]] per $\vec\omega$ si ha $\vec v_P\cdot\vec\omega=\vec v_Q\cdot\vec\omega$, quindi $I=\vec v_P\cdot\vec\omega$ non dipende dal punto (2.55-2.56).
**Teorema 2.2:** per un moto rototraslatorio con $\vec\omega\neq\vec 0$, i punti $C$ della retta
$$(C-Q)=\frac{\vec\omega\wedge\vec v_Q}{\omega^2}+\lambda\vec\omega,\qquad\lambda\in\mathbb R\qquad(2.62)$$
hanno velocità parallela a $\vec\omega$, uguale per tutti, e minima fra le velocità dei punti di $\mathcal B$.

## Formule chiave
$$\vec v_C=\frac{I}{\omega^2}\vec\omega\qquad(2.63),\qquad |\vec v_P|=\sqrt{v_C^2+|\vec\omega\wedge(P-C)|^2}>|\vec v_C|\qquad(2.64)$$
Con $H$ proiezione di $P$ sull'asse: $\vec a_P=\vec a_H+\dot{\vec\omega}\wedge(P-H)-\omega^2(P-H)$ (2.66); se $H$ e $\vec\omega$ sono fissi l'accelerazione è centripeta, $\vec a_P=-\omega^2(P-H)$.

## Intuizione
La retta si ricava risolvendo $\vec a\wedge\vec v=\vec b$ (2.60-2.61): i punti di velocità nulla, se esistono, formano una retta parallela a $\vec\omega$. Se $I\neq0$ nessun punto è fermo e l'atto di moto è elicoidale. La retta può cambiare nel tempo.

## Come si usa
Dati $Q$, $\vec v_Q$ e $\vec\omega$ si calcola il punto $C_0=\vec\omega\wedge\vec v_Q/\omega^2$ e si scrive la retta; se $I=0$ (moto piano) l'asse si riduce al centro di istantanea rotazione.

## Nei corsi
- **Meccanica** (triennale): fonte `triennale/ANNO 2/Meccanica/Lect1-Kinematics (1).pdf` (pp. 20-22, eqq. 2.55-2.67; numerazione stampata).

## Prerequisiti
- [[Formula fondamentale della cinematica rigida]]: si cercano i punti di velocità minima
- [[Prodotto vettoriale]]: soluzione di a∧v = b col doppio prodotto vettoriale

## Porta a
- [[Centro di istantanea rotazione]]: caso piano con invariante nullo

## Collegati
- [[Sistemi di vettori applicati]]: stessa costruzione dell'asse centrale con invariante scalare R·M
