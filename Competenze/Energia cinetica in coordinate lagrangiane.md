---
tipo: competenza
area: fisica
corsi: [Meccanica]
livello: [triennale]
aliases: ["kinetic energy in generalized coordinates", "matrice di massa", "mass matrix", "matrice cinetica", "T = T2 + T1 + T0", "forma quadratica dell'energia cinetica"]
tags: [competenza, area/fisica]
---

# Energia cinetica in coordinate lagrangiane

> Per un sistema olonomo l'energia cinetica è un polinomio di secondo grado nelle velocità generalizzate, con la parte quadratica data da una matrice di massa simmetrica definita positiva.

## Definizione / enunciato
Da $\vec v_i=\sum_j\frac{\partial(P_i-O)}{\partial q_j}\dot q_j+\frac{\partial(P_i-O)}{\partial t}$ (8.8) si ottiene
$$T=\underbrace{\frac12\sum_{j,k}a_{jk}\dot q_j\dot q_k}_{T_2}+\underbrace{\sum_kb_k\dot q_k}_{T_1}+\underbrace{C}_{T_0}=\frac12\dot q^TA\dot q+b^T\dot q+C\qquad(8.11,\ 8.15)$$

## Formule chiave
$$a_{hk}=\sum_im_i\frac{\partial(P_i-O)}{\partial q_h}\cdot\frac{\partial(P_i-O)}{\partial q_k},\qquad C=\frac12\sum_im_i\frac{\partial(P_i-O)}{\partial t}\cdot\frac{\partial(P_i-O)}{\partial t}$$
(8.12, 8.14). Il testo stampa $b_k=\frac12\sum_im_i\frac{\partial(P_i-O)}{\partial q_k}\cdot\frac{\partial(P_i-O)}{\partial t}$ (8.13). Sviluppando $v_i^2$ con (8.8), il doppio prodotto dà un coefficiente senza $\frac12$ nella forma $T_1=\sum_kb_k\dot q_k$: la discrepanza l'ho notata io, da verificare sul PDF. Con vincoli fissi $T_1=T_0=0$ e $T=\frac12\dot q^TA(q)\dot q$. $A$ è simmetrica e definita positiva: $\frac12(A\dot q)\cdot\dot q\ge0$, con uguaglianza solo per $\dot q=0$ (manoscritto), quindi è invertibile.

## Intuizione
$A$ è il "tensore di massa" del sistema nelle coordinate scelte, la generalizzazione di $m$ e di $I$. La sua invertibilità permette di scrivere le equazioni di Lagrange in forma normale $\ddot q=A^{-1}F+A^{-1}Q$.

## Come si usa
**Lect7, Ex4** (disco di massa $M$ che rotola su un'asta oscillante): $T=\frac{3M}4\dot s^2+\frac{3MR}2\dot s\dot\vartheta+(\frac{ml^2}3+\frac{3MR^2}4+\frac{Ms^2}2)\dot\vartheta^2$, quindi in $(0,0)$ $T=\frac12[\frac32M\dot s^2+3MR\dot s\dot\vartheta+(\frac{2ml^2}3+\frac{3MR^2}2)\dot\vartheta^2]$. Nella matrice $A^0$ stampata accanto, l'elemento $(2,2)$ è "$\frac{2ml^2}3+\frac{2MR^2}2$", in contrasto con la riga precedente: da verificare sul PDF, p. 90. **Ex5:** $A(\vartheta,\varphi)=\begin{pmatrix}\frac{16}3ml^2&2ml^2\cos(\vartheta-\varphi)\\2ml^2\cos(\vartheta-\varphi)&\frac43ml^2\end{pmatrix}$.

## Nei corsi
- **Meccanica** (triennale): fonti `triennale/ANNO 2/Meccanica/Lect7-Lagrangian (2).pdf` (pp. 80-81, 90, 92; numerazione stampata); `triennale/ANNO 2/Meccanica/Lez11-PotenzaEqLagrangeLagrangiana.pdf` (p. 1, positività di $A$, dal manoscritto 2017).

## Prerequisiti
- [[Energia cinetica del corpo rigido]]: si somma sui corpi del sistema
- [[Coordinate generalizzate]]: velocità in funzione di q e q̇
- [[Matrice simmetrica definita positiva]]: proprietà di A

## Porta a
- [[Equazioni di Lagrange]]: A q̈ = F + Q
- [[Integrale di Jacobi]]: omogeneità di T_2, T_1, T_0
- [[Piccole oscillazioni attorno all'equilibrio]]: A(q⁰) è la matrice di massa linearizzata

## Collegati
- [[Forma quadratica]]: T_2 è una forma quadratica in q̇
