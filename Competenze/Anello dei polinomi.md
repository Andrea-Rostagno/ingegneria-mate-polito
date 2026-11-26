---
tipo: competenza
area: algebra-geometria
corsi: [Istituzioni algebra]
livello: [triennale]
aliases: ["polynomial ring", "A[x]", "K[x]", "polinomio in una indeterminata", "grado di un polinomio", "degree of a polynomial", "coefficiente direttivo", "leading coefficient", "polinomio monico", "monic polynomial"]
tags: [competenza, area/algebra-geometria]
---

# Anello dei polinomi

> $A[x]$ è l'insieme delle somme formali $\sum a_ix^i$ con un numero finito di coefficienti non nulli, con le usuali somma e prodotto. Se $A$ è un dominio, lo è anche $A[x]$.

## Definizione / enunciato
**Def. 7.** Sia $A$ commutativo con unità.
- Un **polinomio** in $x$ a coefficienti in $A$ è una scrittura formale $p(x)=\sum_{i\in\mathbb N_0}a_ix^i$, con gli $a_i$ nulli tranne un numero finito.
- Il **grado** $\deg p$ è il massimo $n$ con $a_n\neq0$, e $a_n$ è il **coefficiente direttivo**.
- $p$ è **monico** se $a_n=1$.
- Le costanti non nulle hanno grado $0$, e per convenzione $\deg0=-\infty$.

**Oss. 8.** Due polinomi sono uguali se e solo se hanno gli stessi coefficienti.

$A[x]$ è un anello commutativo con unità con le operazioni
$$p+q=\sum(a_i+b_i)x^i,\qquad pq=\sum_{h=0}^{n+m}\Big(\sum_{i+j=h}a_ib_j\Big)x^h.$$

**Prop. 9.** Se $A$ è un dominio, lo è anche $A[x]$.
**Cor. 10.** Se $K$ è un campo, $K[x]$ è un dominio, e i suoi invertibili sono le costanti non nulle $K^*$.

## Formule chiave
$$\deg(p+q)\le\max\{\deg p,\deg q\},\qquad \deg(pq)\le\deg p+\deg q$$
In un dominio vale $\deg(pq)=\deg p+\deg q$, perché il coefficiente direttivo $a_nb_m$ è non nullo.

## Intuizione
Un polinomio è la lista dei suoi coefficienti, non la funzione che definisce. Questo conta sui campi finiti. Per esempio, in $\mathbb Z_p$ i polinomi $x^p$ e $x$ sono diversi ma danno la stessa funzione, per il piccolo teorema di Fermat; l'esempio è mio, non delle dispense.

## Come si usa
- **Grado del prodotto:** in un dominio i gradi si sommano. Ne segue che $K[x]$ non ha divisori dello zero e che gli invertibili hanno grado $0$.
- **Senza dominio la formula cade:** su $\mathbb Z_{15}$ il polinomio $x^2-\bar1$ ha quattro radici, $\bar1$, $\overline{14}$, $\bar4$ e $\overline{11}$, e due fattorizzazioni diverse.
- **Esempi di anelli di polinomi:** $\mathbb Z[x]$, $\mathbb Q[x]$, $\mathbb R[x]$, $\mathbb C[x]$, $\mathbb Z_n[x]$, e in più variabili $\mathbb R[x,y]$.

## Nei corsi
- **Istituzioni algebra** (triennale): lezioni 28-29, "Anelli di polinomi". Fonti: `triennale/ANNO 2/istituzioni/Alg-07-12-22.pdf` (lezioni 28-29, pp. 2-5, 15, 17); `triennale/ANNO 2/istituzioni/Alg-02-10-22-1.pdf` (lezioni 17-18, p. 3).

## Prerequisiti
- [[Anello]]: $A[x]$ è costruito su un anello commutativo
- [[Dominio di integrità]]: la proprietà di dominio passa ad $A[x]$

## Porta a
- [[Divisione tra polinomi]]: divisione con resto in $K[x]$

## Collegati
