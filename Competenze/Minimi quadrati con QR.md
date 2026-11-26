---
tipo: competenza
area: numerica
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["least squares via QR", "metodo QR per i minimi quadrati", "retta di regressione", "regression line"]
tags: [competenza, area/numerica]
---

# Minimi quadrati con QR

> Metodo stabile per i minimi quadrati con $A$ di rango massimo: si riduce a un sistema triangolare $\tilde Rx=c_1$, e $\|c_2\|_2$ è il residuo.

## Definizione / enunciato
Sia $A\in\mathbb R^{m,n}$, $m>n$, di rango massimo, $A=QR$ con $R=\binom{\tilde R}{O}$. Poiché $Q$ è ortogonale,
$$\|Ay-b\|_2^2=\|Q^T(Ay-b)\|_2^2=\|Ry-c\|_2^2,\qquad c:=Q^Tb=\binom{c_1}{c_2},\ c_1\in\mathbb R^n,\ c_2\in\mathbb R^{m-n},$$
$$\|Ry-c\|_2^2=\|\tilde Ry-c_1\|_2^2+\|c_2\|_2^2.$$
Solo il primo addendo dipende da $y$: il minimo si ha risolvendo il sistema triangolare non singolare $\tilde Rx^*=c_1$.

## Formule chiave
$$\tilde Rx^*=c_1,\qquad\min_y\|Ay-b\|_2=\|Ax^*-b\|_2=\|c_2\|_2$$

## Intuizione
Le trasformazioni ortogonali non cambiano la norma del residuo e lo separano in una parte azzerabile e una no. Se $c_2=0$, $x^*$ è soluzione classica. Il costo è quello della fattorizzazione QR.

## Come si usa
Esempio di biomeccanica (sforzo-deformazione di un disco intervertebrale, 8 prove): retta $p(x)=c_1x+c_2$ con $A=[x'\ \text{ones}(m,1)]$, `[Q,R] = qr(A)`, `c = Q'*b`, `c_star = R(1:n,1:n)\c(1:n)`. La retta di regressione dà una deformazione $\approx0.4021$ cm per uno sforzo di 0.9 MPa. Lo stesso risultato si ha con `A\b` o con `polyfit(x,y,1)`.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 95-105).

## Prerequisiti
- [[Problema dei minimi quadrati]]: metodo stabile nel caso di rango massimo
- [[Fattorizzazione QR]]: A = QR con R = (R~; O)
- [[Matrice ortogonale]]: Q^T non cambia la norma del residuo
- [[Matrici a blocchi]]: partizione di R e di c = Q^T b
- [[Sostituzione all'indietro e in avanti]]: risolve R~ x = c1

## Porta a
- Nessuno.

## Collegati
- Nessuno.
