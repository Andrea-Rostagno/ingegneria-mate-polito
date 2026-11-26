---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["Moore-Penrose pseudoinverse", "pseudo-inversa", "inversa generalizzata", "generalized inverse", "A^+", "soluzione di minima norma", "sistema sottodeterminato"]
tags: [competenza, area/algebra-geometria]
---

# Pseudo-inversa di Moore-Penrose

> La matrice $A^+=VS^+U^T$ che dà la soluzione ai minimi quadrati di minima norma $x^*=A^+b$ per qualunque rango.

## Definizione / enunciato
Sia $A\in\mathbb R^{m,n}$, $m\ge n$, di rango $r\le n$, con SVD $A=USV^T$. Posto $y=V^Tx$, $c=U^Tb$ e partizionato $S=\begin{pmatrix}\tilde S&O\\O&O\end{pmatrix}$, $\tilde S\in\mathbb R^{r,r}$:
$$\|Ax-b\|_2^2=\|Sy-c\|_2^2=\|\tilde Sy_1-c_1\|_2^2+\|c_2\|_2^2.$$
Il minimo si ha per $y_i=u_i^Tb/s_i$, $i\le r$; la norma minima per $y_i=0$, $i>r$. Quindi
$$x^*=Vy^*=\sum_{i=1}^r\frac{u_i^Tb}{s_i}v_i,\qquad\|x^*\|_2=\|y^*\|_2.$$
Con $(S^+)_{ij}=1/s_i$ per $i=j\le r$ e $0$ altrimenti ($S^+\in\mathbb R^{n,m}$), la **pseudo-inversa di Moore-Penrose** è $A^+=VS^+U^T$ e $x^*=A^+b$. Se $A$ è quadrata di rango $n$, $A^+=A^{-1}$.

## Formule chiave
$$A^+=VS^+U^T,\qquad x^*=A^+b=\sum_{i=1}^r\frac{u_i^Tb}{s_i}v_i$$
Matlab: `X = pinv(A)` oppure `pinv(A,tol)` (valori singolari sotto `tol` trattati come zeri).

## Intuizione
Inverte $A$ solo dove è invertibile (sulle direzioni con $s_i>0$) e mette a zero il resto: è l'estensione naturale dell'inversa a matrici rettangolari o singolari. Lo stesso schema vale per i sistemi sottodeterminati ($m<n$, rango $m$): $y_i=d_i/s_i$ per $i\le m$, zero dopo, $x=Vy$.

## Come si usa
Esempio delle slide: sistema di Hilbert di ordine 15 con soluzione $(1,\dots,1)^T$, $K_2\approx10^{17}$. Gauss con pivoting (`A\b`) dà errore relativo $6.14$ (oltre il 100%) e l'avviso "Matrix is close to singular"; trascurando i valori singolari sotto $tol=10^{-12}$ (`rank(A,tol)`, oppure `pinv(A,tol)*b`) l'errore scende a $1.07\cdot10^{-6}$.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 70-81).

## Prerequisiti
- [[Decomposizione ai valori singolari]]: A^+ = V S^+ U^T
- [[Problema dei minimi quadrati]]: soluzione di minima norma per rango qualsiasi
- [[Matrici a blocchi]]: partizione di S, y e c

## Porta a
- Nessuno.

## Collegati
- [[Approssimazione di rango basso]]: valori singolari piccoli azzerati nei sistemi mal condizionati
