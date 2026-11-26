---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Hamiltonian of a charge in an electromagnetic field", "accoppiamento minimale", "minimal coupling", "sostituzione minimale", "p - qA/c", "lagrangiana di una carica in campo elettromagnetico", "momento cinetico e momento canonico", "particella carica in campo magnetico uniforme"]
tags: [competenza, area/fisica]
---

# Hamiltoniana di una carica in campo elettromagnetico

> Una carica $q$ in un campo descritto dai potenziali $\Phi$ e $\vec A$ ha hamiltoniana $H=\frac{1}{2m}\left(\vec p-\frac qc\vec A\right)^2+q\Phi$ (unità di Gauss): il momento canonico $\vec p$ differisce da $m\dot{\vec x}$.

## Definizione / enunciato
La lagrangiana
$$L=\frac m2\dot{\vec x}^2-q\Phi+\frac qc\dot{\vec x}\cdot\vec A$$
riproduce, con le equazioni di Lagrange, la forza di Lorentz $m\ddot{\vec x}=q\vec E+\frac qc\dot{\vec x}\wedge\vec B$, con $\vec E=-\nabla\Phi-\frac1c\partial_t\vec A$ e $\vec B=\mathrm{rot}\vec A$ (si usa $\dot{\vec x}\wedge\mathrm{rot}\vec A=\dot x_n\nabla A_n-(\dot{\vec x}\cdot\nabla)\vec A$). Il momento generalizzato è $p_k=m\dot x_k+\frac qcA_k$, da cui l'hamiltoniana.

## Formule chiave
$$H=\frac{1}{2m}\left(\vec p-\frac qc\vec A\right)^2+q\Phi$$
Campo uniforme $\vec B=B\vec u_3$, $\vec A=\frac12\vec B\wedge\vec x=\frac B2(-x_2\vec u_1+x_1\vec u_2)$:
$$\{P_1,P_2\}=\frac{qB}{c}\ \ (P_k=m\dot x_k),\qquad [P_1,P_2]=i\hbar\frac{qB}{c}$$
Elettrone ($q=-e$) nell'atomo:
$$H_B=\frac{p^2}{2m_e}+\frac{eB}{2m_ec}L_3+\frac{e^2B^2}{8m_ec^2}(x_1^2+x_2^2)-\frac{Ze^2}{|\vec x|}$$

## Intuizione
Nel campo magnetico le componenti della velocità ortogonali a $\vec B$ non commutano: un effetto controintuitivo dovuto a $\vec B$. Il termine lineare in $B$ è l'energia $-\vec\mu\cdot\vec B$ del dipolo magnetico orbitale $\vec\mu=-\frac{e}{2m_ec}\vec L$ (come una spira di corrente $i=-e/T$, area $\pi R^2$).

## Come si usa
Per campi deboli ($B\lesssim10^5$ gauss) il termine in $B^2$ vale circa $10^{-27}$ J contro $|E_1|\simeq2\times10^{-18}$ J e si trascura; il termine lineare si tratta come perturbazione e dà l'effetto Zeeman (`2022_QP.pdf` pp. 154-155). Aggiungendo lo spin, $H_\mu=\frac{e}{2m_ec}(\vec L+g\vec S)\cdot\vec B$ con $g=2$.

## Nei corsi
- **Quantum physics** (triennale): §13 e §13.1 della dispensa di V. Penna, in unità di Gauss (si segnala che 1 gauss = $10^{-4}$ tesla). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 152-155).

## Prerequisiti
- [[Equazioni di Lagrange]]: la lagrangiana con il termine $\frac qc\dot{\vec x}\cdot\vec A$
- [[Forza di Lorentz]]: equazione del moto da riprodurre
- [[Potenziale vettore]]: $\vec B=\mathrm{rot}\vec A$
- [[Quantizzazione canonica]]: $[P_1,P_2]=i\hbar qB/c$

## Porta a
- [[Effetto Zeeman normale]]: il termine $\frac{eB}{2m_ec}L_3$ separa i livelli
- [[Quantizzazione del campo elettromagnetico]]: lo stesso potenziale vettore in gauge di Coulomb

## Collegati
- [[Dipolo magnetico]]: momento magnetico orbitale dell'elettrone
- [[Matrici di Pauli]]: con lo spin si ottiene l'equazione di Pauli
