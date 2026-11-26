---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Box-Muller transform", "Box-Muller", "simulazione di normali da uniformi", "normale bivariata da uniformi"]
tags: [competenza, area/statistica]
---

# Trasformazione di Box-Muller

> Da due uniformi indipendenti si ottengono due normali standard indipendenti; con una trasformazione affine si ottiene poi qualsiasi normale bivariata.

## Definizione / enunciato
Se $U_1\sim U(0,1)$ e $U_2\sim U(0,1)$ indipendenti, allora
$$X=\sqrt{-2\log U_1}\,\cos(2\pi U_2),\qquad Y=\sqrt{-2\log U_1}\,\sin(2\pi U_2)$$
sono normali standard indipendenti. Inoltre, se $\boldsymbol\mu\in\mathbb R^2$ e $\mathbf A$ è una matrice $2\times2$ reale,
$$\mathbf Z=\boldsymbol\mu+\mathbf A\begin{pmatrix}X\\Y\end{pmatrix}\sim N_2(\boldsymbol\mu,\mathbf A\mathbf A^T).$$

## Formule chiave
Stesso principio, la regola di trasformazione di variabili (MC p. 28): se $U\sim U(0,1)$, $X=-\log U\sim\mathrm{Exp}(1)$ perché
$$f_X(x)=f_U(u)\Bigl|\frac{du}{dx}\Bigr|=|-\exp(-x)|=\exp(-x),$$
e $X/\lambda\sim\mathrm{Exp}(\lambda)$.

## Intuizione
Il raggio $\sqrt{-2\log U_1}$ e l'angolo $2\pi U_2$ descrivono in coordinate polari un punto di una normale bivariata standard. "Da una coppia di uniformi possiamo avere qualsiasi tipo di normale bivariata": basta scegliere $\mathbf A$ con $\mathbf A\mathbf A^T$ uguale alla covarianza voluta.

## Come si usa
Per simulare $N_2(\boldsymbol\mu,\Sigma)$: si generano due uniformi, si applica Box-Muller, si moltiplica per una $\mathbf A$ con $\mathbf A\mathbf A^T=\Sigma$ e si somma $\boldsymbol\mu$. Lo script del corso implementa sia questa costruzione sia `rmnorm`, che simula una normale multivariata partendo da normali standard.

## Nei corsi
- **Statistica computazionale** (magistrale): esempio "Normale multivariata" della sezione Simulazione. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 28-30); codice in `magistrale/Statistica computazionale/esercitazioni/Monte Carlo.R` (sezioni "Simulazione di una normale multivariata da uniformi (Box-Muller)" e `rmnorm`).

## Prerequisiti
- [[Numeri pseudo-casuali]]: le uniformi di partenza
- [[Metodo dello jacobiano]]: regola di trasformazione delle densità
- [[Vettore gaussiano]]: trasformazioni affini di normali

## Collegati
- [[Trasformazione integrale di probabilità]]: altro modo di passare da uniformi a una legge qualsiasi
- [[Fattorizzazione di Cholesky]]: una scelta di $\mathbf A$ con $\mathbf A\mathbf A^T=\Sigma$
- [[Distribuzione esponenziale]]: $-\log U/\lambda$
