---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Metodi numerici, Equazioni di fisica matematica]
livello: [triennale]
aliases: ["matrix norms", "norma 1 di matrice", "norma infinito di matrice", "norme compatibili", "norma consistente", "submoltiplicatività", "norma di Hilbert-Schmidt", "norma di Frobenius", "Frobenius norm"]
tags: [competenza, area/algebra-geometria]
---

# Norme matriciali

> Norme di matrice (1 e infinito) compatibili con le norme vettoriali: la base per definire il numero di condizionamento.

## Definizione / enunciato
Per $A=(a_{ij})\in\mathbb R^{m,n}$:
$$\|A\|_1=\max_{1\le j\le n}\sum_{i=1}^m|a_{ij}|\ \ (\text{max somma per colonne}),\qquad \|A\|_\infty=\max_{1\le i\le m}\sum_{j=1}^n|a_{ij}|\ \ (\text{max somma per righe}),$$
con $\|A\|_\infty=\|A^T\|_1$. La norma 2 (spettrale) è definita a parte. Una norma di matrice e una di vettore sono **compatibili** se
$$\|Ax\|\le\|A\|\,\|x\|\qquad\forall A\in\mathbb R^{m,n},\ x\in\mathbb R^n.$$
Le norme 1, 2 e infinito di matrice sono compatibili con le omonime vettoriali, e per esse $\|AB\|\le\|A\|\|B\|$, $\|I\|=1$.

## Formule chiave
$$\|Ax\|\le\|A\|\|x\|,\qquad\|AB\|\le\|A\|\|B\|,\qquad\|I\|=1$$
Matlab: `norm(A,1)`, `norm(A,inf)`.

## Intuizione
La compatibilità dice che $\|A\|$ maggiora il fattore di amplificazione di $A$ su un vettore: è ciò che serve per stimare come gli errori nei dati passano alla soluzione.

## Come si usa
Da $\|I\|=1$ e dalla submoltiplicatività segue $K(A)=\|A\|\|A^{-1}\|\ge\|AA^{-1}\|=1$. Il teorema di Bauer-Fike vale con una qualsiasi delle norme $\|\cdot\|_p$, $p=1,2,\infty$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 4-5, 25); `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 22).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): $\|A\|_1$ (massima somma per colonne), $\|A\|_2=\sqrt{\rho(A^TA)}$, $\|A\|_\infty=\|A^T\|_1$ (massima somma per righe); norme compatibili $\|A\mathbf x\|\le\|A\|\|\mathbf x\|$ e $\rho(A)\le\|A\|$, proprietà che dà la condizione sufficiente $\|B\|<1$ per la convergenza dei metodi iterativi. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 4-5, 52).
- **Equazioni di fisica matematica** (triennale): il docente usa la **norma di Hilbert-Schmidt** $\|A\|_2=\sqrt{\sum_{i,j=1}^na_{ij}^2}$ (cioè la norma di Frobenius, non la norma spettrale, nonostante il pedice 2): è la norma euclidea di $\mathbb R^{n^2}$. Lemma: $\|AB\|_2\le\|A\|_2\|B\|_2$, dimostrato scrivendo $c_{ij}=A_{(i)}\cdot B^{(j)}$ (riga per colonna) e usando Cauchy-Schwarz. Serve per la convergenza della serie $e^A=\sum A^k/k!$, perché $\|A^k\|_2\le\|A\|_2^k$. Fonte: `triennale/ANNO 3/eq fisica matematica/04 - Lezione 10_10_23.pdf` (pp. 4-6).

## Prerequisiti
- [[Norme vettoriali]]: compatibilità ||Ax|| <= ||A|| ||x||

## Porta a
- [[Metodo iterativo stazionario]]: $\rho(B)\le\|B\|<1$ garantisce la convergenza (Metodi numerici)
- [[Condizionamento di un sistema lineare]]: K(A) = ||A|| ||A^-1||
- [[Norma spettrale]]: norma 2 di matrice
- [[Teorema di Bauer-Fike]]: K(S) in norma 1, 2 o infinito
- [[Esponenziale di una matrice]]: la submoltiplicatività dà la convergenza della serie (Equazioni di fisica matematica)

## Collegati
- Nessuno.
