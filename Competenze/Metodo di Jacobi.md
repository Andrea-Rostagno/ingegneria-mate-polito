---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Jacobi method", "Jacobi iteration", "iterazione di Jacobi", "metodo degli spostamenti simultanei"]
tags: [competenza, area/numerica]
---

# Metodo di Jacobi

> Metodo iterativo per $A\mathbf x=\mathbf b$ che ricava $x_i$ dall'$i$-esima equazione usando per tutte le altre incognite i valori dell'iterazione precedente.

## Definizione / enunciato
Con $a_{ii}\ne0$:
$$x_i^{(k)}=\frac{b_i-\sum_{j=1}^{i-1}a_{ij}x_j^{(k-1)}-\sum_{j=i+1}^{n}a_{ij}x_j^{(k-1)}}{a_{ii}},\quad i=1,\dots,n,\ k=1,2,\dots$$
In forma matriciale è lo sdoppiamento $A=D+C$ con $D=\mathrm{diag}(a_{11},\dots,a_{nn})$, $C=A-D$, matrice di iterazione $B=I-D^{-1}A$.

**Teorema.** Se $A$ è a diagonale dominante per righe allora $\|B\|_\infty<1$; se lo è per colonne allora $\|B\|_1<1$. Quindi con $A$ a diagonale dominante (per righe o per colonne) Jacobi converge per ogni $\mathbf x^{(0)}$.

## Formule chiave
Function del corso: `D = diag(diag(A)); C = A-D;` poi `x = D\(b-C*x0)` con arresto `norm(x-x0) <= tol*norm(x)`; se `prod(diag(A)) == 0` restituisce `ier = -1`.

## Intuizione
Ogni componente si aggiorna in modo indipendente dalle altre del passo corrente: le $n$ equazioni si risolvono "in parallelo", ciascuna per la sua incognita diagonale.

## Come si usa
Esempio delle slide: $3x_1-x_2=2$, $x_1+2x_2=3$, soluzione $(1,1)^T$, $\mathbf x^{(0)}=(0,0)^T$. Si ottiene $x_1$: $0,\ 2/3,\ 7/6,\ 19/18$ e $x_2$: $0,\ 3/2,\ 7/6,\ 11/12$, con $\|\mathbf x^*-\mathbf x^{(3)}\|_\infty/\|\mathbf x^*\|_\infty\approx0.8\cdot10^{-1}$.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 41-42, 45, 48, 52-54); codice `triennale/ANNO 2/metodi numerici/jacobi.m`.

## Prerequisiti
- [[Metodo iterativo stazionario]]: caso $D$ = diagonale di $A$
- [[Matrice a diagonale dominante]]: condizione sufficiente di convergenza

## Porta a
- Nessuno.

## Collegati
- [[Metodo di Gauss-Seidel]]: usa subito le componenti già aggiornate; la convergenza dell'uno non implica quella dell'altro
- [[Criteri di arresto dei metodi iterativi]]: arresto sull'incremento relativo
