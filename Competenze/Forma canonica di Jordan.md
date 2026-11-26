---
tipo: competenza
area: algebra-geometria
corsi: [Equazioni di fisica matematica]
livello: [triennale]
aliases: ["Jordan normal form", "forma di Jordan", "blocco di Jordan", "Jordan block", "matrice nilpotente", "nilpotent matrix"]
tags: [competenza, area/algebra-geometria]
---

# Forma canonica di Jordan

> Ogni matrice complessa è simile a una matrice diagonale a blocchi di Jordan $\lambda I+N$ con $N$ nilpotente: è la forma che permette di calcolare $e^{tA}$ quando $A$ non è diagonalizzabile.

## Definizione / enunciato
$B\in\mathbb C^{n\times n}$ è in **forma canonica di Jordan** se è diagonale a blocchi $B=\mathrm{diag}(J_1,\dots,J_m)$, $m\le n$, con **blocchi di Jordan** $J_i$ quadrati, $\lambda_i$ sulla diagonale e $1$ sulla sopradiagonale (L06 p. 3). Proprietà:
1. ogni $\lambda_i$ è autovalore di $B$;
2. blocchi distinti possono avere lo stesso $\lambda$;
3. il numero di blocchi con lo stesso autovalore è la sua molteplicità geometrica;
4. a ogni blocco corrisponde un autovettore, e autovettori di blocchi diversi sono linearmente indipendenti.
**Teorema.** Ogni $A\in\mathbb C^{n\times n}$ è simile a una matrice $B$ in forma di Jordan.
**Def.** $N$ è **nilpotente** se $N^{\bar k}=0$ per qualche $\bar k\in\mathbb N$.

## Formule chiave
$J_i=\lambda_iI+N$ con $N$ nilpotente; $\lambda_iI$ e $N$ commutano, quindi
$$e^{tJ_i}=e^{\lambda_it}e^{tN},\qquad e^{tN}=\sum_{k=0}^{\bar k-1}\frac{t^kN^k}{k!}=I+tN+\frac{t^2}2N^2+\dots+\frac{t^{\bar k-1}}{(\bar k-1)!}N^{\bar k-1},$$
una somma finita: $e^{tJ_i}$ è triangolare superiore con $e^{\lambda_it},te^{\lambda_it},\frac{t^2}2e^{\lambda_it},\dots$ sulle sopradiagonali. Esempio: la $4\times4$ con 1 sulla sopradiagonale ha $N^4=0$ (L06 p. 5). Infine $e^{tB}=\mathrm{diag}(e^{tJ_1},\dots,e^{tJ_m})$ ed $e^{tA}=Pe^{tB}P^{-1}$.

## Intuizione
La parte diagonale dà gli esponenziali $e^{\lambda t}$; la parte nilpotente, presente solo se il blocco non è $1\times1$, aggiunge fattori polinomiali $t^m$. Per questo un autovalore con parte reale nulla ma blocco non banale rende le soluzioni illimitate.

## Come si usa
- Corollario (L06 p. 7): $\det(e^A)\ne0$, perché $\det e^B=\prod(e^B)_{ii}$ e ogni $(e^B)_{ii}=e^\lambda\ne0$.
- Stime asintotiche: ogni elemento non nullo di $e^{tB}$ ha la forma $c_{ij}t^{m_{ij}}e^{\lambda_{ij}t}$.

## Nei corsi
- **Equazioni di fisica matematica** (triennale): fonte `triennale/ANNO 3/eq fisica matematica/06  - Lezione 13_10_23.pdf` (pp. 3-8). Teorema di esistenza enunciato senza dimostrazione.

## Prerequisiti
- [[Autovalori e autovettori]]: i λᵢ sulla diagonale sono gli autovalori
- [[Matrici simili]]: A = P B P⁻¹

## Porta a
- [[Sistemi lineari di ODE a coefficienti costanti]]: calcolo di e^{tA} nel caso generale
- [[Stabilità dei sistemi lineari di ODE]]: struttura c t^m e^{λt} degli elementi di e^{tB}

## Collegati
- [[Esponenziale di una matrice]]: e^{tJ} = e^{λt}e^{tN}
- [[Matrice diagonalizzabile]]: caso con tutti i blocchi 1 × 1
