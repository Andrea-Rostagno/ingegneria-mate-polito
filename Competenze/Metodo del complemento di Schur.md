---
tipo: competenza
area: ottimizzazione
corsi: [Numerical opt]
livello: [magistrale]
aliases: ["Schur complement method", "Schur complement approach", "approccio del complemento di Schur", "complemento di Schur per il QP", "range-space method"]
tags: [competenza, area/ottimizzazione]
---

# Metodo del complemento di Schur

> Risoluzione del sistema KKT di un QP con vincoli di uguaglianza eliminando $x$: si risolve prima un sistema $m\times m$ nei moltiplicatori, con matrice $AQ^{-1}A^T$, poi un sistema in $x$. Richiede $Q$ invertibile.

## Definizione / enunciato
Dal sistema $Qx+A^T\lambda=-c$, $Ax=b$, con $Q$ definita positiva (quindi invertibile):
1. dalla prima equazione si ricava $x=-Q^{-1}(A^T\lambda+c)$;
2. sostituendo nella seconda si ottiene
$$\underbrace{AQ^{-1}A^T}_{\hat Q}\,\lambda=\underbrace{-AQ^{-1}c-b}_{\hat b};$$
3. noto $\lambda$, si risolve $Qx=-(A^T\lambda+c)$.

## Formule chiave
$\hat Q=AQ^{-1}A^T\in\mathbb R^{m\times m}$ è simmetrica e definita positiva: $y^T\hat Qy=(A^Ty)^TQ^{-1}(A^Ty)>0$ per $y\ne0$, perché $Q^{-1}$ è definita positiva e $A^T$ ha rango pieno.

Costo con LU (ordine del cubo della dimensione):
- sistema intero: $\approx\frac13(n+m)^3$;
- metodo di Schur: $\approx\frac13n^3+\frac13m^3$.

Il risparmio cresce con $m$.

## Intuizione
Invece di un sistema indefinito di dimensione $n+m$ se ne risolvono due più piccoli e definiti positivi. Ci sono però costi nascosti:
- formare $\hat Q$ e $\hat b$ richiede $m+1$ sistemi con matrice $Q$;
- anche se $A$ e $Q$ sono sparse, $AQ^{-1}A^T$ tende a essere densa.

## Come si usa
Conviene se $Q$ è "facilmente" invertibile (caso ideale: diagonale o diagonale a blocchi) e se $m\ll n$. Altrimenti si preferisce il metodo dello spazio nullo, che non inverte $Q$.

## Nei corsi
- **Numerical opt** (magistrale): lezione Pieraccini sul QP e laboratorio 11 di Della Santa. P6 p. 10 riporta come ultimo passo "$Qx=-(A^T\lambda+b)$"; la derivazione di p. 9 e DS §11.4 danno $Qx=-c-A^T\lambda$, che è quello riportato qui. Fonti: `magistrale/Numerical opt/Pieraccini/Part_6_Constrained_Optimization_QP.pdf` (p. 6-9); `magistrale/Numerical opt/DellaSanta/NO4LSP_DellaSanta_2526.pdf` (§11.4, Obs. 11.2); codice d'esempio `DellaSanta/labs/QPeq_Schur.m`.

## Prerequisiti
- [[Matrice KKT]]: il sistema che si risolve per blocchi
- [[Matrice simmetrica definita positiva]]: $Q$ e $\hat Q$ lo sono

## Collegati
- [[Metodo dello spazio nullo]]: alternativa che funziona anche con $Q$ singolare
- [[Fattorizzazione LU]]: confronto dei costi $\frac13(n+m)^3$ e $\frac13(n^3+m^3)$
- [[Matrice sparsa]]: $AQ^{-1}A^T$ perde la sparsità
