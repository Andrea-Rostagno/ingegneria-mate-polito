---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica]
livello: [triennale]
aliases: ["binomial distribution", "legge binomiale", "B(n,p)", "Binomiale(n,p)", "distribuzione di Bernoulli", "Bernoulli(p)", "schema di Bernoulli", "esperimento di Bernoulli"]
tags: [competenza, area/probabilita]
---

# Distribuzione binomiale

> Il numero di successi in $n$ prove indipendenti di uno stesso esperimento di Bernoulli con probabilità di successo $p$.

## Definizione / enunciato
**Bernoulli**: esperimento con due esiti, successo $A$ con $p=\mathbb P(A)$; $X=\mathbb 1_A\sim b(p)$, $p_X(1)=p$, $p_X(0)=1-p$.
**Schema di Bernoulli**: $n$ prove ripetute indipendenti, $\Omega=\{0,1\}^n$, $\mathbb P(\{\omega\})=p^k(1-p)^{n-k}$ se $\omega$ ha $k$ successi. $X$ = numero di successi $=\sum_{i=1}^n\mathbb 1_{A_i}$ ha **legge binomiale** $B(n,p)$, $X(\Omega)=\{0,\dots,n\}$.

## Formule chiave
$$p_X(k)=\binom nk p^k(1-p)^{n-k},\quad k=0,\dots,n;\qquad \sum_{k=0}^n p_X(k)=(p+1-p)^n=1.$$
$$\text{Bernoulli: } \mathbb E[X]=p,\ \operatorname{Var}(X)=p(1-p);\qquad B(n,p):\ \mathbb E[X]=np,\ \operatorname{Var}(X)=np(1-p).$$

## Intuizione
$\binom nk$ conta le posizioni dei $k$ successi; ogni sequenza con $k$ successi ha la stessa probabilità grazie all'indipendenza. La media $np$ segue dalla linearità, sommando $n$ Bernoulli.

## Come si usa
Moneta truccata lanciata 3 volte (lezione 8): $\mathbb P(X=2)=3p^2(1-p)$. Quiz con 5 domande a 4 risposte, risposte a caso (lezione 9): $X\sim B(5,\frac14)$, $\mathbb P(X\ge4)=5(\frac14)^4\frac34+(\frac14)^5=\frac1{4^3}\approx0.0156$. Per $n\ge100$ e $p\le0.05$ si approssima con Poisson($np$).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 8-9, media e varianza in lezione 12 (appunto manoscritto); tabella nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione08(19-04-23) (3).pdf` (lezione 8, pp. 9-13); `2023Lezione09(27-04-23) (1).pdf` (lezione 9, pp. 1-3); `2023Lezione12(25-05-23) (1).pdf` (lezione 12, p. 12); `formularioprobabilita (1).pdf`.
- **Prob e statistica** (triennale): $\operatorname{Var}(X)=mp(1-p)$ ricavata dalla somma di Bernoulli indipendenti; marginali della multinomiale; $B(m,p)+B(n,p)=B(m+n,p)$ per v.a. indipendenti; approssimazione normale con il TLC, buona se $np\ge10$ e $n(1-p)\ge10$, con correzione di continuità (100 elettori, $p=0.4$: $\mathbb P(S_{100}>50)\simeq\mathbb P(N\ge2.14)=0.0162$); $B(n,\frac\lambda n)\xrightarrow{\mathcal L}\mathcal P(\lambda)$. In statistica: $\sum X_i\sim\mathrm{Bin}(n,p)$ è sufficiente minimale per $p$ (Brexit) e dà la statistica del test su $p$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (p. 8); `2023Lezione18(16-11-2023).pdf` (pp. 3-4, 9-12); `triennale/ANNO 3/prob e statistica/statistica/data reduction lez3.pdf` (Sufficienza VIII-IX).

## Prerequisiti
- [[Variabile aleatoria discreta]]: numero di successi
- [[Indipendenza di eventi]]: prove indipendenti
- [[Calcolo combinatorio]]: coefficiente binomiale

## Porta a
- [[Distribuzione di Poisson]]: limite con $np=\lambda$
- [[Distribuzione multinomiale]]: generalizzazione a più esiti (Prob e statistica)

## Collegati
- [[Distribuzione ipergeometrica]]: approssimazione per $n\ll N$
