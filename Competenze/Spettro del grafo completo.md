---
tipo: competenza
area: network
corsi: [Matematica discreta]
livello: [triennale]
aliases: ["spectrum of the complete graph", "spettro di K_n", "spettro del grafo completo bipartito", "spettro di K_{m,n}", "autovalori di K_n"]
tags: [competenza, area/network]
---

# Spettro del grafo completo

> Il grafo completo $K_n$ ha autovalori $n-1$ (semplice) e $-1$ (con molteplicità $n-1$). Il completo bipartito $K_{m,n}$ ha autovalori $\pm\sqrt{mn}$ e $0$ con molteplicità $m+n-2$. Si ottengono con argomenti di rango e di traccia, senza calcolare il polinomio caratteristico.

## Definizione / enunciato
**$K_n$** (Tilli Es. 6.3.4). Si ha $A=J_n-I_n$, dove $J_n$ ha tutti gli elementi uguali a 1.
- $J_n$ ha rango 1 (colonne tutte uguali), quindi ha $n-1$ autovalori nulli.
- L'ultimo autovalore è uguale alla traccia, $\operatorname{tr}J_n=n$.
- Per il Lemma 6.3.3 (traslazione di $-1$):
$$\Sigma(K_n)=(\underbrace{-1,\dots,-1}_{n-1},\ n-1).$$

**$K_{m,n}$** (Tilli Es. 6.3.5). Si ha $A=\begin{pmatrix}O_m&J_{m,n}\\J_{n,m}&O_n\end{pmatrix}$, di rango 2, quindi $0$ ha molteplicità $m+n-2$.
- Dalla somma degli autovalori, $\lambda_1+\lambda_N=0$.
- Da $\lambda_1^2+\lambda_N^2=2|E|=2mn$ segue
$$\Sigma(K_{m,n})=(-\sqrt{mn},\ \underbrace{0,\dots,0}_{m+n-2},\ \sqrt{mn}).$$
Gli autovalori sono $m+n$ in tutto. Tilli scrive "$N=mn$", che è un refuso.

## Formule chiave
$$\Sigma(K_1)=(0),\quad \Sigma(K_2)=(-1,1),\quad \Sigma(K_3)=(-1,-1,2),\quad \Sigma(K_4)=(-1,-1,-1,3),$$
$$\Sigma(K_{1,2})=(-\sqrt2,0,\sqrt2),\qquad \Sigma(K_{2,2})=(-2,0,0,2).$$

## Intuizione
Il rango basso dice che molti autovalori sono nulli, e le prime tracce ($\sum\lambda=0$, $\sum\lambda^2=2|E|$) fissano quelli rimasti. Il valore $n-1$ è il grado comune di $K_n$, che è $(n-1)$-regolare, con autovettore il vettore degli 1. In alternativa si calcola $\operatorname{tr}A^2$ a blocchi: $J_{m,n}J_{n,m}=nJ_m$.

## Come si usa
**Esercizio della lezione 7.** $G=K_{3,4}\cup K_1$ e $G'=K_{6,2}$ hanno entrambi spettro $(-\sqrt{12},0,0,0,0,0,0,\sqrt{12})$, ma non sono isomorfi: $G$ ha un nodo isolato. È un altro esempio di grafi isospettrali.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, "calcolo spettro di alcuni grafi". Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 43-45, 50); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Es. 6.3.4-6.3.5, pp. 134-135).

## Prerequisiti
- [[Spettro di un grafo]]: somme degli autovalori e delle loro potenze
- [[Rango di una matrice]]: $J$ ha rango 1, $A(K_{m,n})$ ha rango 2

## Porta a
- Nessuno nel corso.

## Collegati
- [[Grafo regolare]]: $K_n$ è $(n-1)$-regolare e $K_{n,n}$ è $n$-regolare
