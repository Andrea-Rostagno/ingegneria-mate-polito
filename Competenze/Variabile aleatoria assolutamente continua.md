---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["absolutely continuous random variable", "v.a. continua", "v.a. assolutamente continua", "densità di probabilità", "probability density function", "pdf"]
tags: [competenza, area/probabilita]
---

# Variabile aleatoria assolutamente continua

> Una v.a. la cui legge è assolutamente continua rispetto alla misura di Lebesgue: le probabilità si calcolano integrando una densità $f_X$.

## Definizione / enunciato
$X$ è **assolutamente continua** se $\mathbb P_X\ll m$ (misura di Lebesgue). La derivata di Radon-Nikodym $f_X=\frac{d\mathbb P_X}{dm}$ è la **densità** di $X$: $f_X\ge0$ misurabile e
$$\mathbb P(X\in A)=\int_Af_X(x)\,dx\quad(A\in\mathcal B(\mathbb R)),\qquad \int_{-\infty}^{+\infty}f_X(x)\,dx=1.$$

## Formule chiave
$$F_X(x)=\int_{-\infty}^xf_X(t)\,dt,\qquad \mathbb P(X=x)=0\ \ \forall x,$$
$$\mathbb E[g(X)]=\int_{-\infty}^{+\infty}g(x)f_X(x)\,dx\quad\text{(se ben definito)}.$$
$F_X$ è continua, derivabile $m$-q.o. e $F_X'=f_X$ nei punti di derivabilità.

## Intuizione
Poiché $m(\{x\})=0$, nessun punto ha massa: $F_X$ non ha salti. Attenzione: $f_X(x)$ **non** è $\mathbb P(X=x)$ (che è 0), a differenza della densità discreta. Nel corso le densità sono continue tranne in un numero finito di punti, quindi si integra secondo Riemann e $F_X$ è una primitiva generalizzata di $f_X$.

## Come si usa
Lamiera forata (lezione 13): gioco $X$ con $f_X(x)=c(1-x^4)\mathbb 1_{(0,1)}(x)$. Da $\int f_X=1$: $c\cdot\frac45=1$, $c=\frac54$; $F_X(x)=\frac54x-\frac14x^5$ su $[0,1)$; $\mathbb E[X]=\frac5{12}$. Per cambi di variabile lineari si passa per la funzione di ripartizione (esempio della normale e di $Y=2X-1$).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 13 (appunto manoscritto). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione13(01-06-23).pdf` (lezione 13, pp. 6-11).

## Prerequisiti
- [[Teorema di Radon-Nikodym]]: densità come derivata RN
- [[Misura di Lebesgue]]: $\mathbb P_X\ll m$
- [[Variabile aleatoria]]: legge assolutamente continua

## Porta a
- [[Distribuzione normale]]: densità gaussiana
- [[Distribuzione esponenziale]]: densità esponenziale
- [[Distribuzione uniforme continua]]: densità costante

## Collegati
- [[Teorema fondamentale del calcolo integrale]]: $F'=f$
