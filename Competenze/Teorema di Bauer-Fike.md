---
tipo: competenza
area: numerica
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Bauer-Fike theorem", "condizionamento degli autovalori", "eigenvalue conditioning", "condeig"]
tags: [competenza, area/numerica]
---

# Teorema di Bauer-Fike

> Stima di quanto si spostano gli autovalori di una matrice diagonalizzabile sotto perturbazione: il fattore di amplificazione è $K(S)$.

## Definizione / enunciato
**Teorema (Bauer-Fike).** Sia $A$ diagonalizzabile, $S^{-1}AS=D=\mathrm{diag}(\lambda_1,\dots,\lambda_n)$, e sia $\tilde\lambda$ un autovalore di una perturbazione $\tilde A$. Allora
$$\min_{1\le i\le n}|\tilde\lambda-\lambda_i|\le K(S)\,\|A-\tilde A\|,\qquad K(S)=\|S\|\|S^{-1}\|,$$
con $\|\cdot\|$ una qualsiasi delle norme $\|\cdot\|_p$, $p=1,2,\infty$. $K(S)$ è il numero di condizionamento del problema degli autovalori: se $K(S)\approx1$ il problema è ben condizionato, altrimenti può essere mal condizionato.

## Formule chiave
$$\min_i|\tilde\lambda-\lambda_i|\le K(S)\|A-\tilde A\|,\qquad A=A^T\Rightarrow K_2(S)=1$$

## Intuizione
Il condizionamento degli autovalori dipende da quanto è "storta" la base di autovettori ($K(S)$), non da $K(A)$. Per le simmetriche la base è ortonormale: il problema è sempre ben condizionato. La matrice di Hilbert ha $K(H_n)$ enorme, ma essendo simmetrica ha autovalori ben condizionati.

## Come si usa
Esempio delle slide: $A=\begin{pmatrix}101&-90\\110&-98\end{pmatrix}$, autovalori 2 e 1; perturbando con $\varepsilon=0.001$ gli autovalori diventano $\approx1.701$ e $1.298$: una perturbazione dello 0.1% produce una variazione del 30%. Infatti `cond(S)` $=400$. Matlab `condeig(A)` dà il condizionamento di ciascun autovalore: per $\begin{pmatrix}1&2&-2\\1&1&1\\2&2&1\end{pmatrix}$ (autovalore triplo 1) vale $\approx1.2\cdot10^{10}$ e `eig` restituisce valori complessi inaffidabili.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 20-28).

## Prerequisiti
- [[Matrice diagonalizzabile]]: ipotesi S^-1 A S = D
- [[Norme matriciali]]: K(S) in norma 1, 2 o infinito
- [[Condizionamento di un problema numerico]]: condizionamento del problema degli autovalori

## Porta a
- Nessuno.

## Collegati
- [[Condizionamento di un sistema lineare]]: conta K(S), non K(A)
