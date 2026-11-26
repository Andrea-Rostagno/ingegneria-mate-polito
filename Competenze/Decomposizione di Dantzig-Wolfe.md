---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Dantzig-Wolfe decomposition", "Dantzig–Wolfe", "restricted master problem", "RMP", "master problem di Dantzig-Wolfe", "vincolo di convessità", "convexity constraint", "struttura a blocchi angolare", "block-angular structure"]
tags: [competenza, area/ottimizzazione]
---

# Decomposizione di Dantzig-Wolfe

> Si separano i vincoli "facili" da quelli complicanti e si riscrive ogni punto del poliedro facile come combinazione di vertici e direzioni estreme: il master ha una colonna per vertice, generata solo quando serve.

## Definizione / enunciato
LP $\min\mathbf c^T\mathbf x$ s.t. $A\mathbf x\ge\mathbf b$ (complicanti), $D\mathbf x\ge\mathbf f$, $\mathbf x\ge\mathbf 0$ (facili: $\mathcal X=\{\mathbf x: D\mathbf x\ge\mathbf f,\ \mathbf x\ge\mathbf 0\}$, per esempio a blocchi diagonali o di flusso su rete). Per Minkowski-Weyl $\mathcal X=\mathrm{conv}\{\mathcal V\}+\mathrm{cone}\{\mathcal D\}$, quindi $\mathbf x=\sum_q\lambda_q\mathbf v_q+\sum_r\mu_r\mathbf d_r$, $\sum_q\lambda_q=1$, $\lambda,\mu\ge0$. Con $c_q=\mathbf c^T\mathbf v_q$, $\mathbf a_q=A\mathbf v_q$, $c_r=\mathbf c^T\mathbf d_r$, $\mathbf a_r=A\mathbf d_r$ si ottiene il **master**
$$\min\sum_qc_q\lambda_q+\sum_rc_r\mu_r\quad\text{s.t. }\sum_q\mathbf a_q\lambda_q+\sum_r\mathbf a_r\mu_r\ge\mathbf b,\quad\sum_q\lambda_q=1,\quad\lambda_q,\mu_r\ge0 .$$

## Formule chiave
Si risolve un master ristretto (RMP) con sottoinsiemi $\mathcal V'$, $\mathcal D'$; con duali $\boldsymbol\pi$ e $\pi_0$ (vincolo di convessità) i costi ridotti sono $\bar c_q=c_q-\boldsymbol\pi^TA\mathbf v_q-\pi_0$ e $\bar c_r=c_r-\boldsymbol\pi^TA\mathbf d_r$. Problema di pricing:
$$(\mathrm{PP})\quad \min\ (\mathbf c^T-\boldsymbol\pi^TA)\,\mathbf x\quad\text{s.t. }D\mathbf x\ge\mathbf f,\ \mathbf x\ge\mathbf 0 .$$
Se $z^*_{PP}=-\infty$ si aggiunge una direzione estrema (colonna $[A\mathbf x^*;0]$); se $-\infty<z^*_{PP}<\pi_0$ un vertice (colonna $[A\mathbf x^*;1]$); se $z^*_{PP}\ge\pi_0$ ci si ferma.

## Intuizione
I duali dell'RMP indicano una direzione $\mathbf c-A^T\boldsymbol\pi$ lungo cui "sondare" il poliedro facile; interessano solo i vertici con costo ridotto negativo, non tutti. È la versione "per colonne" del ragionamento che in Benders si fa "per righe".

## Come si usa
Conviene quando i vincoli facili si decompongono in blocchi indipendenti (matrice a blocchi angolare con vincoli di interazione) o hanno struttura di rete: il pricing si spezza in sottoproblemi semplici, eventualmente in parallelo.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Dantzig-Wolfe decomposition and column generation". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 4-6, 27-32).

## Prerequisiti
- [[Generazione di colonne]]: strategia di soluzione del master
- [[Poliedro]]: rappresentazione con vertici e direzioni estreme
- [[Cono convesso]]: Minkowski-Weyl, parte conica del poliedro

## Collegati
- [[Decomposizione di Benders]]: decomposizione per variabili complicanti invece che per vincoli
- [[Rilassamento lagrangiano]]: altro modo di trattare i vincoli di interazione
