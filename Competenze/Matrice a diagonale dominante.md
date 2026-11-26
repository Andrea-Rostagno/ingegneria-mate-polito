---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["diagonally dominant matrix", "diagonale dominante per righe", "diagonale dominante per colonne", "diagonal dominance"]
tags: [competenza, area/algebra-geometria]
---

# Matrice a diagonale dominante

> Matrice in cui ogni elemento diagonale supera in modulo la somma degli altri della sua riga (o colonna): Gauss procede senza scambi.

## Definizione / enunciato
$A$ è **a diagonale dominante per righe** se
$$|a_{ii}|>\sum_{j=1,\,j\ne i}^n|a_{ij}|,\qquad i=1,\dots,n,$$
e **per colonne** se
$$|a_{jj}|>\sum_{i=1,\,i\ne j}^n|a_{ij}|,\qquad j=1,\dots,n.$$

## Formule chiave
$$|a_{ii}|>\sum_{j\ne i}|a_{ij}|\quad(\text{righe}),\qquad |a_{jj}|>\sum_{i\ne j}|a_{ij}|\quad(\text{colonne})$$

## Intuizione
La diagonale "pesa" più del resto: gli elementi pivot restano non nulli durante l'eliminazione, e la dominanza per colonne rende i moltiplicatori già piccoli.

## Come si usa
Esempi delle slide: $\begin{pmatrix}4&1&-1\\2&-7&1\\3&-2&9\end{pmatrix}$ è dominante per righe ($|4|>|1|+|-1|$, $|-7|>|2|+|1|$, $|9|>|3|+|-2|$); $\begin{pmatrix}9&1&-1\\2&-7&1\\3&-2&4\end{pmatrix}$ è dominante per colonne ma non per righe. Conseguenze: il metodo di Gauss procede ($a_{kk}^{(k)}\ne0$) se $A$ è dominante per righe o per colonne; il pivoting è superfluo se è dominante per colonne.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 19-20, 56, 68).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): definizioni per righe ($|a_{ii}|>\sum_{j\ne i}|a_{ij}|$) e per colonne, con un esempio $3\times3$ dominante per colonne ma non per righe; nuovo uso: se $A$ è a diagonale dominante per righe $\|B\|_\infty<1$, per colonne $\|B\|_1<1$, quindi i metodi di Jacobi e di Gauss-Seidel convergono per ogni vettore iniziale. Anche il sistema delle spline cubiche è a diagonale dominante. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 6-7, 24, 52-53); `triennale/ANNO 2/metodi numerici/CN_MAT_03_approssimazione_print (1).pdf` (p. 64).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Metodo di Jacobi]]: condizione sufficiente di convergenza (Metodi numerici)
- [[Metodo di Gauss-Seidel]]: condizione sufficiente di convergenza (Metodi numerici)
- [[Metodo di eliminazione di Gauss]]: garantisce pivot non nulli

## Collegati
- [[Pivoting parziale]]: superfluo se dominante per colonne
