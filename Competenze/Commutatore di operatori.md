---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["commutator", "grandezze compatibili", "compatible observables", "misura contemporanea", "insieme completo di osservabili", "complementarità", "complementarity"]
tags: [competenza, area/fisica]
---

# Commutatore di operatori

> Il commutatore $[\hat F,\hat G]=\hat F\hat G-\hat G\hat F$ dice se due grandezze si possono conoscere insieme con indeterminazione nulla: sì se e solo se commutano.

## Definizione / enunciato
Due grandezze $F$ e $G$ hanno indeterminazione nulla nello stesso stato solo se $\Psi$ è autofunzione di entrambi gli operatori. Applicando $\hat G$ a $\hat F\Psi_n=f_n\Psi_n$ e $\hat F$ a $\hat G\Psi_n=g_n\Psi_n$ e sottraendo si ottiene $(\hat F\hat G-\hat G\hat F)\Psi_n=0$. Quindi: autofunzioni comuni se e solo se il commutatore è nullo. Se gli operatori non commutano, misurare $G$ dopo $F$ fa passare il sistema in un autostato di $G$ con probabilità $|b_j|^2$, e le precisioni si influenzano.
**Complementarità (Bohr):** lo stato è determinato da un insieme completo di grandezze con operatori mutuamente commutanti; l'insieme non è unico (set "complementari"), e i suoi autovalori sono i numeri quantici: $\Psi(\vec r,t,\alpha_i)$.

## Formule chiave
$$[\hat A_j,\hat A_m]=0\quad j\ne m\qquad\Longleftrightarrow\qquad\text{misurabili con precisione desiderata}$$
$$\Delta A_j\Delta A_m\ge\left|\frac12\langle\Psi|[\hat A_j,\hat A_m]\Psi\rangle\right|$$
Esempi:
$$[r_i,r_j]=0,\quad [p_i,p_j]=0,\quad [x_i,p_j]=i\hbar\delta_{ij}$$
$$[L_x,L_y]=i\hbar L_z,\quad [L_z,L_x]=i\hbar L_y,\quad [L_y,L_z]=i\hbar L_x$$
$$[L^2,L_i]=0,\quad [L_i,r^2]=0,\quad [L_i,p^2]=0,\quad [L_x,r_y]=i\hbar r_z,\quad [L_x,p_y]=i\hbar p_z$$

## Intuizione
Misurare una grandezza "proietta" lo stato su un suo autostato. Se l'altra grandezza ha gli stessi autostati la seconda misura non disturba la prima; altrimenti lo stato viene rimescolato e l'informazione sulla prima va persa.

## Come si usa
Per scegliere i numeri quantici di un sistema si cercano operatori che commutano con $\hat H$ e tra loro: per il rotore e l'atomo di idrogeno $\hat L^2$ e $\hat L_z$ (ma non due componenti diverse di $\hat L$). Il commutatore $[\hat p_x,x]=\hbar/i$ è il passaggio chiave dell'algebra degli operatori $\hat a,\hat a^+$ dell'oscillatore.

## Nei corsi
- **Fisica 2** (triennale): lezioni 55-56 (misura contemporanea, principio di indeterminazione citato dal testo di C. Rossetti, complementarità) e 57-58 (tabella dei commutatori). Fonti: `triennale/ANNO 2/fisica 2/lezioni/55&56. LEZIONE.pdf` (pp. 29-41); `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (p. 3).
- **Quantum physics** (triennale): §4.3 (definizione, antisimmetria, bilinearità, regola di Leibniz $[A,BC]=B[A,C]+[A,B]C$) e §8.1-8.2 della dispensa di V. Penna. Teorema: due operatori hermitiani con $[A,B]=0$ hanno un insieme comune di autofunzioni; nel caso degenere la matrice $C_{ik}=(\psi_k,B\psi_i)$ è hermitiana e si diagonalizza con una trasformazione unitaria. Un operatore che commuta con $H$ è l'analogo di una costante del moto. **Insieme completo di operatori**: il massimo numero di operatori mutuamente commutanti, con autostati comuni non degeneri; esempi: $(x_1,x_2,x_3)$, $(p_1,p_2,p_3)$, $(L_3,L^2,H)$ per un potenziale centrale (non le tre componenti di $L$). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 39-40, 86-89).

## Prerequisiti
- [[Misura in meccanica quantistica]]: misure simultanee con indeterminazione nulla
- [[Quantizzazione canonica]]: i commutatori canonici sono il caso base (Quantum physics)

## Porta a
- [[Potenziale centrale quantistico]]: H, L² e L₃ commutano e danno buoni numeri quantici (Quantum physics)
- [[Spettro del momento angolare]]: si diagonalizzano insieme L² e L₃ (Quantum physics)

## Collegati
- [[Principio di indeterminazione di Heisenberg]]: il commutatore fissa il limite inferiore del prodotto delle indeterminazioni
- [[Rotore rigido quantistico]]: L² e Lz commutano: numeri quantici l e m
- [[Oscillatore armonico quantistico]]: algebra degli operatori a e a+
- [[Parentesi di Poisson]]: stessa struttura algebrica nel caso classico (Quantum physics)
