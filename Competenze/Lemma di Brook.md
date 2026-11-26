---
tipo: competenza
area: statistica
corsi: [Statistica computazionale]
livello: [magistrale]
aliases: ["Brook's lemma", "lemma di Brook", "dalle full conditional alla congiunta", "factorization theorem of Brook"]
tags: [competenza, area/statistica]
---

# Lemma di Brook

> Il rapporto tra la densità congiunta in due configurazioni si esprime come prodotto di rapporti di full conditional: le full conditional determinano la congiunta, a meno della costante di normalizzazione.

## Definizione / enunciato
Siano $\mathbf y=(y_1,\dots,y_n)$ e $\mathbf x=(x_1,\dots,x_n)$ due campioni possibili da $\mathcal Z$. Allora
$$\frac{f_{\mathcal Z}(\mathbf y)}{f_{\mathcal Z}(\mathbf x)}=\prod_{i=1}^n\frac{f_{\mathcal Z}(y_i\mid x_1,\dots,x_{i-1},y_{i+1},\dots,y_n)}{f_{\mathcal Z}(x_i\mid x_1,\dots,x_{i-1},y_{i+1},\dots,y_n)}.$$
Per $n=2$: $\frac{f(y_1,y_2)}{f(x_1,x_2)}=\frac{f(y_1\mid y_2)}{f(x_1\mid y_2)}\cdot\frac{f(y_2\mid x_1)}{f(x_2\mid x_1)}$.

## Formule chiave
Dimostrazione per $n=2$ con Bayes iterato:
$$f(y_1,y_2)=f(y_1\mid y_2)f(y_2)=f(y_1\mid y_2)\frac{f(y_2\mid x_1)f(x_1)}{f(x_1\mid y_2)}=\frac{f(y_1\mid y_2)}{f(x_1\mid y_2)}\frac{f(y_2\mid x_1)}{f(x_2\mid x_1)}f(x_1,x_2).$$
Quindi $f_{\mathcal Z}(\mathbf y)\propto\prod_i\frac{f_{\mathcal Z}(y_i\mid\dots)}{f_{\mathcal Z}(x_i\mid\dots)}$ con $\mathbf x$ fissato (es. $\mathbf x=\mathbf 0$ se $f(\mathbf 0)>0$).

## Intuizione
C'è una relazione 1 a 1 tra full conditional e congiunta, ma le full conditional danno solo il rapporto $f(\mathbf y)/f(\mathbf x)$, cioè il kernel: in pratica bisogna "solo" dimostrare che il kernel integri o sommi a una costante finita. Definire full conditional sensate non assicura che la congiunta esista.

## Come si usa
- Auto-Poisson: con $f(y_i\mid\partial y_i)/f(0\mid\partial y_i)=\lambda_i^{y_i}/y_i!$ si ottiene $\frac{f(\mathbf y)}{f(\mathbf 0)}=\exp\bigl(\sum_i(\mu y_i-\log(y_i!))+\sum_{i<j,\,j\sim i}\beta y_iy_j\bigr)$.
- Auto-normale: congiunta $f(\mathbf w)\propto\exp\bigl(-\sum_i\frac{w_i^2-2w_i\sum_{j\sim i,j>i}\beta_{i,j}w_j}{2\tau_i^2}\bigr)$.
- Legame con l'MCMC: con $\mathbf y=(\theta_1^{b-1},\theta_2^{b-1})$ e $\mathbf x=(\theta_1^b,\theta_2^b)$ si ottiene $f(\theta_1^{b-1},\theta_2^{b-1})f(\theta_1^b\mid\theta_2^{b-1})f(\theta_2^b\mid\theta_1^b)=f(\theta_1^b,\theta_2^b)f(\theta_2^{b-1}\mid\theta_1^b)f(\theta_1^{b-1}\mid\theta_2^{b-1})$.

## Nei corsi
- **Statistica computazionale** (magistrale): "teorema famoso tra chi fa statistica spaziale, ma generalmente poco noto". Fonti: `magistrale/Statistica computazionale/Auto-Modelli.pdf` (p. 12-16, 18, 21).

## Prerequisiti
- [[Full conditional]]: gli ingredienti del lemma
- [[Formula di Bayes]]: usata iterativamente nella dimostrazione
- [[Kernel di una densità]]: si ottiene la congiunta a meno della costante

## Porta a
- [[Modello auto-Poisson]]: congiunta dalle full conditional Poisson
- [[Modello CAR]]: congiunta dalle full conditional normali

## Collegati
- [[Gibbs sampler]]: stessa relazione tra transizioni e congiunta
- [[Teorema di Hammersley-Clifford]]: rappresentazione sulle clique
