---
tipo: competenza
area: numerica
corsi: [Algebra lineare, Metodi numerici, Numerical opt]
livello: [triennale, magistrale]
aliases: ["Cholesky decomposition", "fattorizzazione di Choleski", "Choleski", "A = R^T R"]
tags: [competenza, area/numerica]
---

# Fattorizzazione di Cholesky

> Fattorizzazione $A=R^TR$ di una matrice simmetrica definita positiva, con $R$ triangolare superiore: costo $n^3/6$.

## Definizione / enunciato
**Teorema.** Se $A$ è simmetrica e definita positiva, esiste ed è unica la fattorizzazione
$$A=R^TR,$$
con $R$ triangolare superiore ad elementi diagonali positivi (le slide scrivono "Choleski"). Il calcolo di $R$ costa essenzialmente $n^3/6$ per $n$ grande.

## Formule chiave
$$Ax=b\iff R^T\underbrace{Rx}_{y}=b:\quad R^Ty=b,\quad Rx=y$$
$$A^{-1}=R^{-1}(R^{-1})^T\quad(\text{costo}\approx2n^3/3)$$
Matlab: `R = chol(A)`.

## Intuizione
Sfrutta la simmetria (un solo fattore triangolare) e la positività (nessun pivoting): metà del costo di $PA=LU$. Per l'inversa conviene scambiare trasposizione e inversione, così si inverte solo il fattore triangolare $R$.

## Come si usa
Risoluzione di $Ax=b$ con $A$ simmetrica definita positiva: due sistemi triangolari dopo la fattorizzazione. Nei minimi quadrati con $A$ di rango massimo si potrebbe risolvere il sistema normale $A^TAx=A^Tb$ con Cholesky, ma la procedura è instabile perché il sistema normale può essere mal condizionato anche se il problema non lo è.

## Nei corsi
- **Algebra lineare** (triennale): modulo di calcolo numerico del corso (slide 2022, esempi in Matlab). Fonti: `triennale/ANNO 1/algebra lineare/2022_cn3_sistemi_lineari_print.pdf` (slide 77-80, 94).
- **Metodi numerici** (triennale, L. Scuderi, a.a. 2022/23): teorema con dimostrazione ($A=LU$ per i minori positivi, poi $A=LDL^T$ con $D$ definita positiva e $L_1=LD^{1/2}$), costo $n^3/6$, `R = chol(A)`. Il corso ne usa la versione incompleta come precondizionatore del gradiente coniugato. Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 27-31, 93).
- **Numerical opt** (magistrale): è il solutore diretto per matrici SPD di piccola o media scala (`chol`); su larga scala si usa `pcg`. Nel [[Metodo di Newton modificato]] il tentativo di fattorizzare $\nabla^2f(x^{(k)})+\tau I$ fa da test di definita positività: se fallisce si aumenta $\tau$, se riesce il fattore serve già a risolvere il sistema. La matrice KKT è indefinita, quindi niente Cholesky (si usa $LDL^T$). Fonti: `magistrale/Numerical opt/Pieraccini/Part_1_Lectures_Pieraccini_Intro_and_Linear_systems.pdf` (p. 38, 43-44); `magistrale/Numerical opt/Pieraccini/Part_3_Nonlinear_Opt_2nd_order_methods.pdf` (p. 15-16); `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 6).

## Prerequisiti
- [[Matrice simmetrica definita positiva]]: ipotesi di esistenza di A = R^T R
- [[Sostituzione all'indietro e in avanti]]: risolve R^T y = b e Rx = y

## Porta a
- [[Precondizionamento]]: la Cholesky incompleta è il precondizionatore del gradiente coniugato (Metodi numerici)

## Collegati
- [[Fattorizzazione LU]]: variante per sdp con metà del costo
- [[Problema dei minimi quadrati]]: risolve le equazioni normali ma è instabile
