---
tipo: competenza
area: analisi
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["product measure", "sigma-algebra prodotto", "product sigma-algebra", "rettangolo misurabile", "sezioni di un insieme", "spazio prodotto", "mu1 x mu2"]
tags: [competenza, area/analisi]
---

# Misura prodotto

> Su $\mathcal X_1\times\mathcal X_2$ si costruisce la $\sigma$-algebra generata dai rettangoli misurabili e l'unica misura che dà ai rettangoli il prodotto delle misure: è la struttura su cui vivono vettori aleatori e indipendenza.

## Definizione / enunciato
Siano $(\mathcal X_1,\mathcal Q_1,\mu_1)$, $(\mathcal X_2,\mathcal Q_2,\mu_2)$ spazi di misura. Un **rettangolo misurabile** è $A\times B$ con $A\in\mathcal Q_1$, $B\in\mathcal Q_2$ (i rettangoli non formano un'algebra). La **$\sigma$-algebra prodotto** è $\mathcal Q_1\otimes\mathcal Q_2=\sigma\{A\times B\}$; coincide con $\sigma(\pi_1,\pi_2)$, generata dalle proiezioni canoniche.
Per $E\in\mathcal Q_1\otimes\mathcal Q_2$ le **sezioni** $E^2_x=\{y\in\mathcal X_2:(x,y)\in E\}\in\mathcal Q_2$, $E^1_y=\{x\in\mathcal X_1:(x,y)\in E\}\in\mathcal Q_1$ (notazione della lezione: l'apice indica lo spazio in cui sta la sezione). Se $\mu_1,\mu_2$ sono $\sigma$-finite, $x\mapsto\mu_2(E^2_x)$ e $y\mapsto\mu_1(E^1_y)$ sono misurabili e
$$\int_{\mathcal X_1}\mu_2(E^2_x)\,d\mu_1(x)=\int_{\mathcal X_2}\mu_1(E^1_y)\,d\mu_2(y).$$

## Formule chiave
**Teorema.** $\mu_1\otimes\mu_2(E):=\int_{\mathcal X_1}\mu_2(E^2_x)d\mu_1$ è una misura $\sigma$-finita, l'unica con $\mu_1\otimes\mu_2(A\times B)=\mu_1(A)\mu_2(B)$.
- $\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)=\mathcal B(\mathbb R^2)$; $\mathbf m=m\otimes m$ è la misura di Borel-Lebesgue su $\mathbb R^2$.
- Se $\mu_1\otimes\mu_2(E)=0$, allora $\mu_1(E^1_y)=0$ per $\mu_2$-q.o. $y$ e $\mu_2(E^2_x)=0$ per $\mu_1$-q.o. $x$.

## Intuizione
La misura di un insieme del piano si ottiene "per fette": si misura ogni sezione verticale e si integra. L'unicità serve per dire che una legge congiunta che si comporta come prodotto sui rettangoli è il prodotto.

## Come si usa
Verifica su un rettangolo $E=A\times B$: $E^2_x=B$ se $x\in A$, $\emptyset$ altrimenti, quindi $\mu_2(E^2_x)=\mu_2(B)\mathbb 1_A(x)$ e i due integrali valgono $\mu_1(A)\mu_2(B)$. Con $\mu=\mathbb P_X\otimes m$ e $E=\{0\le y<x\}$ si dimostra $\mathbb E[X]=\int_0^\infty\mathbb P(X>y)dy$.

## Nei corsi
- **Prob e statistica** (triennale): "spazi prodotto" nelle lezioni 1-2, premessa ai vettori aleatori. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione01&02(04&05-10-2023).pdf` (pp. 6-10).

## Prerequisiti
- [[Spazio di misura]]: misure $\sigma$-finite sui fattori
- [[Sigma-algebra]]: $\sigma$-algebra generata dai rettangoli

## Porta a
- [[Teorema di Fubini]]: integrali iterati rispetto a $\mu_1\otimes\mu_2$
- [[Formula della coda per il valore atteso]]: sezioni di $\{0\le y<x\}$
- [[Vettore aleatorio]]: $\mathcal B(\mathbb R^N)$ è la $\sigma$-algebra prodotto
- [[Indipendenza di variabili aleatorie]]: $X\perp Y\iff\mathbb P_{(X,Y)}=\mathbb P_X\otimes\mathbb P_Y$

## Collegati
- [[Misura di Lebesgue]]: $m\otimes m$ è la misura di Lebesgue nel piano
