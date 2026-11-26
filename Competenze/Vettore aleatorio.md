---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Prova finale]
livello: [triennale]
aliases: ["random vector", "variabile aleatoria vettoriale", "legge congiunta", "joint distribution", "leggi marginali", "marginal distributions", "funzione di ripartizione congiunta", "joint CDF"]
tags: [competenza, area/probabilita]
---

# Vettore aleatorio

> Funzione misurabile $\mathbf X:\Omega\to\mathbb R^N$; equivalentemente una $N$-upla di variabili aleatorie reali, la cui legge congiunta contiene più informazione delle leggi marginali.

## Definizione / enunciato
Dato $(\Omega,\mathcal F,\mathbb P)$, un **vettore aleatorio** è $\mathbf X:(\Omega,\mathcal F)\to(\mathbb R^N,\mathcal B(\mathbb R^N))$ misurabile, $\mathcal B(\mathbb R^N)=\mathcal B(\mathbb R)\otimes\dots\otimes\mathcal B(\mathbb R)$. Si scrive $\mathbf X=(X_1,\dots,X_N)$ con $X_i=\pi_i\circ\mathbf X$.
**Definizione alternativa** (equivalente): $\mathbf X$ è vettore aleatorio se e solo se ogni componente è una v.a. reale (i rettangoli $A_1\times\dots\times A_N$ generano $\mathcal B(\mathbb R^N)$ e $\mathbf X^{-1}(A_1\times\dots\times A_N)=\bigcap_iX_i^{-1}(A_i)$).
- **Legge congiunta**: $\mathbb P_{\mathbf X}(B)=\mathbb P(\mathbf X\in B)$, $B\in\mathcal B(\mathbb R^N)$ (misura immagine).
- **Leggi marginali**: $\mathbb P_{X_i}(A)=\mathbb P(X_i\in A)$.

## Formule chiave
Per $Z=(X,Y)$ la **funzione di ripartizione congiunta** è
$$F_Z(x,y)=\mathbb P(X\le x,\,Y\le y)=\mathbb P_Z\big((-\infty,x]\times(-\infty,y]\big),$$
e le **marginali** si ottengono al limite:
$$F_X(x)=\lim_{y\to+\infty}F_Z(x,y),\qquad F_Y(y)=\lim_{x\to+\infty}F_Z(x,y)$$
(continuità dal basso della misura sui rettangoli $(-\infty,x]\times(-\infty,y_m]\uparrow(-\infty,x]\times\mathbb R$).

## Intuizione
Dalla congiunta si ricavano sempre le marginali, **non viceversa**: le marginali non dicono come le componenti dipendono l'una dall'altra.

## Come si usa
Esempi delle lezioni: $m$ estrazioni da un'urna con palline bianche, rosse e nere, $X_1$ = numero di nere, $X_2$ = numero di rosse, $\mathbf X=(X_1,X_2)$ (la terza è $m-X_1-X_2$); lancio di un freccetta su un bersaglio circolare, $\mathbf X$ = coordinate del punto colpito.

## Nei corsi
- **Prob e statistica** (triennale): lezione 3, "vettori aleatori". Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione03(06-10-2023).pdf` (pp. 3-6).
- **Prova finale** (triennale): modello stocastico multivariato $\mathbf X=(X_1,\dots,X_d):\Omega\to\mathbb R^d$ con $F_{\mathbf X}(\mathbf x)=\mathbb P[X_1\le x_1,\dots,X_d\le x_d]$; le $X_i$ sono per esempio i rendimenti degli asset di un portafoglio o i tempi di default. Due problemi: il comportamento di ogni componente e la struttura di dipendenza, separati dalla copula. Fonti: `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 3-7).

## Prerequisiti
- [[Variabile aleatoria]]: le componenti sono v.a. reali
- [[Misura prodotto]]: $\mathcal B(\mathbb R^N)$ come $\sigma$-algebra prodotto
- [[Misura immagine]]: la legge congiunta è una misura immagine

## Porta a
- [[Densità congiunta]]: vettori discreti e assolutamente continui
- [[Distribuzione multinomiale]]: esempio di vettore discreto
- [[Matrice di covarianza]]: vettore delle medie e covarianze
- [[Funzione caratteristica]]: trasformata di Fourier della legge di $\mathbf X$
- [[Copula]]: la parte della legge congiunta che le marginali non dicono

## Collegati
- [[Funzione di ripartizione]]: caso unidimensionale
