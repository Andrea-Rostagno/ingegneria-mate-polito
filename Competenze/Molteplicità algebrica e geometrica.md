---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["algebraic multiplicity", "geometric multiplicity", "molteplicità algebrica", "molteplicità geometrica", "criterio di diagonalizzabilità", "diagonalizability criterion", "µa", "µg", "endomorfismo semplice"]
tags: [competenza, area/algebra-geometria]
---

# Molteplicità algebrica e geometrica

> Per ogni autovalore, $1\le\mu_g(\lambda)\le\mu_a(\lambda)$. Una matrice è diagonalizzabile se e solo se le molteplicità algebriche sommano a $n$ e per ogni autovalore la geometrica è uguale all'algebrica.

## Definizione / enunciato
- **Molteplicità algebrica** $\mu_a(\lambda)$: molteplicità di $\lambda$ come radice del polinomio caratteristico.
- **Molteplicità geometrica** $\mu_g(\lambda)=\dim E_A(\lambda)=n-\mathrm{rank}(A-\lambda\mathbb 1)$.

**Teorema.** $1\le\mu_g(\lambda)\le\mu_a(\lambda)\le n$.

**Criterio di diagonalizzabilità.** $A\in K^{n\times n}$ è diagonalizzabile se e solo se
- (a) $\sum_i\mu_a(\lambda_i)=n$ (tutte le radici del p.c. stanno in $K$);
- (b) $\mu_g(\lambda_i)=\mu_a(\lambda_i)$ per ogni $i$.

Equivalentemente: esiste una base di $K^n$ di autovettori di $A$. In $\mathbb C$ la (a) è automatica, in $\mathbb R$ no. Un endomorfismo è **semplice** se la sua matrice è diagonalizzabile.

## Formule chiave
$$1\le\mu_g(\lambda)\le\mu_a(\lambda),\qquad n\ \text{autovalori distinti}\Rightarrow A\ \text{diagonalizzabile}$$
$$\det A=\prod_i\lambda_i,\qquad \mathrm{tr}A=\sum_i\lambda_i\quad(\text{radici complesse contate con molteplicità})$$

## Intuizione
La molteplicità algebrica dice quante "copie" di $\lambda$ chiede il polinomio, quella geometrica quante direzioni indipendenti $A$ ne fornisce davvero. Se manca qualche direzione ($\mu_g<\mu_a$) non ci sono abbastanza autovettori per una base. Gli autovalori semplici ($\mu_a=1$) non danno mai problemi.

## Come si usa
- Esempio (p. 13 di `12_Eigenvalues,...pdf`): $\lambda=1$ con $\mu_a=2$ ma $\mu_g=1$, quindi **non** diagonalizzabile.
- Esempio (p. 13): $p_A(\lambda)=-\lambda(\lambda+3)^2$, $\mathrm{rank}(A+3\mathbb 1)=1$, quindi $\mu_g(-3)=2=\mu_a(-3)$ ed è diagonalizzabile.
- Esercizio con parametro (p. 28-30): si impone $\det(A_h-3\mathbb 1)=0$ e si trova $h=-2$. $A_{-2}$ è singolare, quindi $0$ è autovalore con $\mu_g(0)=3-\mathrm{rank}A=2$; poiché anche $3$ è autovalore, $\mu_a(0)=2$ e la matrice è diagonalizzabile.
- Endomorfismo $(x,y)\mapsto(x+y,x+y)$: autovalori $0,2$ distinti, quindi semplice (p. 34).

## Nei corsi
- **Algebra lineare** (triennale): autovalori e diagonalizzazione (slide di S. Mercadante); nel modulo numerico si assume direttamente la diagonalizzabilità. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/12_Eigenvalues,_Eigenvectors,_Eigenspaces_Diagonalisation_v1_11.pdf` (p. 10-13, 24, 28-35, 47); `Appunti, riassunti e formulari/AlgebraGeometriaLineare.pdf` (C. Sisto, §7.4.2-7.4.4); esercizi `Esercizi ed esercitazioni/Es11-diagonalizz_ris.pdf`.

## Prerequisiti
- [[Autospazio]]: la geometrica è la dimensione dell'autospazio
- [[Teorema della dimensione]]: mg(λ) = n − rank(A − λI)

## Porta a
- [[Matrice diagonalizzabile]]: criterio operativo µg = µa per ogni autovalore

## Collegati
- [[Autovalori e autovettori]]: µa è la molteplicità come radice del polinomio caratteristico
- [[Teorema fondamentale dell'algebra]]: il polinomio caratteristico ha n radici complesse contate con molteplicità, quindi in C la condizione Σµa = n è automatica
