---
tipo: competenza
area: numerica
corsi: [Metodi numerici]
livello: [triennale]
aliases: ["Gauss-Seidel method", "metodo di Gauss Seidel", "Gauss-Seidel iteration", "metodo degli spostamenti successivi"]
tags: [competenza, area/numerica]
---

# Metodo di Gauss-Seidel

> Variante di Jacobi in cui, nel calcolo di $x_i^{(k)}$, si usano subito le componenti $x_1^{(k)},\dots,x_{i-1}^{(k)}$ già aggiornate.

## Definizione / enunciato
$$x_i^{(k)}=\frac{b_i-\sum_{j=1}^{i-1}a_{ij}x_j^{(k)}-\sum_{j=i+1}^{n}a_{ij}x_j^{(k-1)}}{a_{ii}},\quad i=1,\dots,n .$$
Sdoppiamento $A=D+C$ con $D$ = parte triangolare inferiore di $A$ (diagonale compresa, `tril(A)`), $C=A-D$; ogni passo è una sostituzione in avanti.

**Teoremi.** (1) Se $A$ è a diagonale dominante per righe o per colonne, Gauss-Seidel converge per ogni $\mathbf x^{(0)}$ (come Jacobi). (2) Se $A$ è simmetrica e definita positiva, Gauss-Seidel converge.

**Osservazioni.** La convergenza di Gauss-Seidel non implica quella di Jacobi e viceversa; se convergono entrambi, in generale Gauss-Seidel è più rapido. Gauss-Seidel è il caso $\omega=1$ del metodo di rilassamento.

## Formule chiave
Function del corso: `D = tril(A); C = A-D;` poi `x = D\(b-C*x0)`; stessa struttura di Jacobi.

## Intuizione
L'informazione nuova viene usata non appena disponibile: in genere questo riduce il raggio spettrale della matrice di iterazione e quindi il numero di passi.

## Come si usa
Stesso esempio di Jacobi ($3x_1-x_2=2$, $x_1+2x_2=3$, $\mathbf x^{(0)}=\mathbf o$): $x_1$: $0,\ 2/3,\ 19/18,\ 107/108$; $x_2$: $0,\ 7/6,\ 35/36,\ 217/216$, con errore relativo al passo 3 $\approx0.9\cdot10^{-2}$, contro $0.8\cdot10^{-1}$ di Jacobi.

## Nei corsi
- **Metodi numerici** (triennale): Fonti: `triennale/ANNO 2/metodi numerici/CN_MAT_02_sistemi_lineari_print (2).pdf` (p. 41, 43, 46, 49, 52-56); codice `triennale/ANNO 2/metodi numerici/gauss_seidel.m`.

## Prerequisiti
- [[Metodo iterativo stazionario]]: caso $D$ triangolare inferiore
- [[Matrice a diagonale dominante]]: condizione sufficiente di convergenza
- [[Matrice simmetrica definita positiva]]: altra condizione sufficiente

## Porta a
- [[Metodo SOR]]: si introduce un parametro $\omega$ nella correzione

## Collegati
- [[Metodo di Jacobi]]: stesso schema senza usare le componenti appena aggiornate
- [[Sostituzione all'indietro e in avanti]]: ogni passo risolve un sistema triangolare inferiore
