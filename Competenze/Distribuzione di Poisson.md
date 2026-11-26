---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica]
livello: [triennale]
aliases: ["Poisson distribution", "legge di Poisson", "P(lambda)", "Poisson(lambda)", "eventi rari", "approssimazione di Poisson della binomiale"]
tags: [competenza, area/probabilita]
---

# Distribuzione di Poisson

> La legge del numero di eventi rari in un intervallo: limite della binomiale con molte prove e piccola probabilità di successo, a media $\lambda=np$ fissata.

## Definizione / enunciato
$Y$ a valori in $\mathbb N$ ha **legge di Poisson** di parametro $\lambda>0$, $Y\sim P(\lambda)$, se
$$p_Y(k)=\mathbb P(Y=k)=e^{-\lambda}\frac{\lambda^k}{k!},\qquad k\in\mathbb N.$$
È una densità: $\sum_k e^{-\lambda}\frac{\lambda^k}{k!}=e^{-\lambda}e^{\lambda}=1$.

## Formule chiave
Limite della binomiale: se $X_n\sim B(n,\frac\lambda n)$,
$$\binom nk\Big(\frac\lambda n\Big)^k\Big(1-\frac\lambda n\Big)^{n-k}\xrightarrow[n\to\infty]{}\frac{\lambda^k}{k!}e^{-\lambda}.$$
$$\mathbb E[Y]=\lambda,\qquad \operatorname{Var}(Y)=\lambda.$$

## Intuizione
Nel limite il fattore $\frac{n(n-1)\cdots(n-k+1)}{n^k}\to1$ e $(1-\frac\lambda n)^n\to e^{-\lambda}$. $\lambda$ è il numero medio di eventi nell'intervallo; $Y$ è il numero effettivo, aleatorio.

## Come si usa
Regola pratica: $n\ge100$ e $p\le0.05$ $\Rightarrow$ $B(n,p)\approx P(np)$. Modella telefonate a un centralino, clienti a uno sportello, auto a un incrocio, difetti in fili di rame. Omicidi a Londra (Foglio, es. 3, svolto a lezione): 160 l'anno, $\lambda=\frac{160}{365}\approx0.44$; $\mathbb P(Y=0)=e^{-\lambda}=0.645$; per una settimana $\lambda'=7\lambda$ e $\mathbb P(Z=0)=(0.645)^7=0.0466$. Centraline difettose al 3% su 200: $(0.97)^{200}=0.00226$ contro $e^{-6}=0.00248$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 9, media in lezione 12 (appunto manoscritto); tabella nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione09(27-04-23) (1).pdf` (lezione 9, pp. 8-12); `2023Lezione12(25-05-23) (1).pdf` (lezione 12, p. 12); `formularioprobabilita (1).pdf`.
- **Prob e statistica** (triennale): riproducibilità $\mathcal P(\lambda)+\mathcal P(\mu)=\mathcal P(\lambda+\mu)$ per v.a. indipendenti (convoluzione e binomio di Newton); $X|X+Y=m\sim B(m,\frac\lambda{\lambda+\mu})$; $B(n,\frac\lambda n)\xrightarrow{\mathcal L}\mathcal P(\lambda)$ dimostrata con densità, f.d.r. e funzioni caratteristiche ($\Phi(t)=\exp(\lambda(e^{it}-1))$); $F_{T_m}(t)=\mathbb P(N_t\ge m)$ lega Poisson ed Erlang. In statistica: $\sum X_i$ è sufficiente minimale, MLE $\hat\lambda=\bar X$, che raggiunge il limite di Cramér-Rao $\lambda/n$; stabilizzazione della varianza con $\sqrt{\bar X_n}$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione08(19-10-2023).pdf` (pp. 1-2); `2023Lezione12(02-11-2023) (1).pdf` (pp. 3-5); `2023Lezione18(16-11-2023).pdf` (pp. 3-4); `2023Lezione19(17-11-2023).pdf` (pp. 6-7); `statistica/Stime Puntuali lez5.pdf` (Massima verosimiglianza XIV-XV, Cramer Rao XIII-XVI).

## Prerequisiti
- [[Distribuzione binomiale]]: limite con $np=\lambda$

## Porta a
- [[Somma di variabili aleatorie indipendenti]]: somma di Poisson indipendenti (Prob e statistica)
- [[Convergenza in legge]]: limite della binomiale come convergenza in legge (Prob e statistica)

## Collegati
- [[Processo di Poisson]]: conteggi poissoniani
- [[Limiti notevoli]]: $(1-\lambda/n)^n\to e^{-\lambda}$
