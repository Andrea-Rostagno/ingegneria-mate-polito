---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["simple function", "funzione indicatrice", "indicator function", "funzione caratteristica di un insieme", "approssimazione con funzioni semplici"]
tags: [competenza, area/analisi]
---

# Funzione semplice

> Una funzione misurabile che assume un numero finito di valori, cioè una combinazione finita di indicatrici: il mattone con cui si costruisce l'integrale di Lebesgue.

## Definizione / enunciato
$f:X\to\overline{\mathbb R}$ misurabile è **semplice** ($f\in\mathcal S(X)$) se $f(X)$ è finito. L'**indicatrice** $\mathbb 1_A(x)=1$ se $x\in A$, $0$ altrimenti, è misurabile se e solo se $A\in\mathcal A$.
**Proposizione.** $f\in\mathcal S(X)\iff f=\sum_{i=1}^m a_i\mathbb 1_{A_i}$ con $A_1,\dots,A_m\in\mathcal A$ partizione di $X$. Due semplici si scrivono sulla stessa partizione (gli $A_i\cap B_j$), quindi somme, prodotti, max e min di semplici sono semplici.
**Proposizione (approssimazione).** Se $f\ge0$ è misurabile, esiste $(\varphi_m)\subseteq\mathcal S^+(X)$ crescente con $\varphi_m(x)\nearrow f(x)$ per ogni $x$.

## Formule chiave
$$\varphi_m(x)=\begin{cases}\dfrac{j}{2^m} & \text{se }\dfrac{j}{2^m}\le f(x)<\dfrac{j+1}{2^m},\ j=0,\dots,m2^m-1\\[2mm] m & \text{se }f(x)\ge m\end{cases}$$

## Intuizione
Invece di dividere il dominio (Riemann) si dividono i **valori**: $[0,m)$ è spezzato in $m2^m$ intervalli di ampiezza $2^{-m}$ e su ognuno $f$ è approssimata per difetto. Raffinando e alzando il tetto $m$, l'approssimazione sale fino a $f$.

## Come si usa
Nella lezione 7 i grafici di $\varphi_1$ (partizione di $[0,1)$ in $[0,\frac12),[\frac12,1)$) e $\varphi_2$ (partizione di $[0,2)$ in passi di $\frac14$). Con Beppo Levi l'approssimazione dà la definizione alternativa $\int f\,d\mu=\lim_m\int\varphi_m\,d\mu$ e la linearità dell'integrale.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 7; fonte manoscritta. Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione07(13-04-23) (3).pdf` (lezione 7, pp. 6-9; gli indici dei sommatori a p. 8 sono in parte illeggibili).

## Prerequisiti
- [[Funzione misurabile]]: misurabile con immagine finita

## Porta a
- [[Integrale di Lebesgue]]: prima definizione e approssimazione

## Collegati
- Nessuno.
