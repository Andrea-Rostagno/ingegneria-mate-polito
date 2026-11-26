---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare, Metodi numerici]
livello: [triennale]
aliases: ["symmetric positive definite", "SPD", "matrice definita positiva", "x^T A x > 0"]
tags: [competenza, area/algebra-geometria]
---

# Matrice simmetrica definita positiva

> Matrice simmetrica con $x^TAx>0$ per ogni $x\ne0$; equivalentemente con tutti gli autovalori positivi.

## Definizione / enunciato
Una matrice simmetrica $A$ è **definita positiva** se
$$x^TAx>0\qquad\forall x\ne0.$$
**Caratterizzazione.** Una matrice simmetrica di ordine $n$ è definita positiva se e solo se i suoi autovalori sono tutti positivi (si dimostra col quoziente di Rayleigh). Se $B\in\mathbb R^{n,n}$ ha determinante non nullo, $A=B^TB$ è simmetrica e definita positiva.

## Formule chiave
$$x^TAx>0\ \forall x\ne0\iff\lambda_i(A)>0\ \forall i\qquad(A=A^T)$$

## Intuizione
La forma quadratica $x^TAx$ è una "energia" sempre positiva. È la classe di matrici più favorevole: Gauss non incontra pivot nulli, non serve il pivoting, e si può dimezzare il costo con Cholesky.

## Come si usa
Usi nel corso: esistenza della fattorizzazione di Cholesky $A=R^TR$; Gauss senza scambi; se $A$ ha rango massimo, $A^TA$ è simmetrica e definita positiva e il sistema delle equazioni normali si può risolvere con Cholesky.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 21, 56, 68, 77, 94); `triennale/ANNO 1/algebra lineare/2022_cn4_autovalori_valori_singolari_print.pdf` (slide 8).
- **Algebra lineare** (triennale), parte teorica (slide di S. Mercadante): una forma quadratica ${}^txQx$ è definita positiva se e solo se tutti gli autovalori della matrice simmetrica $Q$ sono positivi, cioè se la segnatura è $(n,0)$; ogni forma bilineare simmetrica definita positiva definisce un prodotto scalare. Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/13. Eucliean Vector Spaces - Real Quadratic Forms v1.14.0.pdf` (p. 22-24, 32).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): tre caratterizzazioni equivalenti ($\mathbf x^TA\mathbf x>0$, autovalori positivi, $\det A_k>0$ per i minori principali di testa); esempio $A=B^TB$ con $B$ non singolare. È l'ipotesi chiave del corso per Cholesky, per la convergenza di Gauss-Seidel e di SOR con $0<\omega<2$, e per i metodi di discesa (gradiente e gradiente coniugato). La matrice delle differenze finite per $-u''=f$ è sdp. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 8, 27-30, 53, 58, 60); `triennale/ANNO 2/metodi numerici/CN_MAT_08_ode_valori_limiti_print.pdf` (p. 20).

## Prerequisiti
- Nessun prerequisito interno al corso.

## Porta a
- [[Metodi di discesa]]: Ax = b equivale a minimizzare il funzionale dell'energia (Metodi numerici)
- [[Metodo di eliminazione di Gauss]]: garantisce pivot non nulli
- [[Fattorizzazione di Cholesky]]: ipotesi di esistenza di A = R^T R
- [[Problema dei minimi quadrati]]: A^T A è sdp se A ha rango massimo

## Collegati
- [[Quoziente di Rayleigh]]: sdp se e solo se autovalori positivi
- [[Endomorfismo simmetrico]]: caso con tutti gli autovalori positivi
- [[Forma quadratica]]: matrice di una forma definita positiva
- [[Segnatura di una forma quadratica]]: definita positiva se e solo se σ = (n, 0)
