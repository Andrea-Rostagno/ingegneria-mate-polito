---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prova finale, Business intelligence per big data]
livello: [triennale, magistrale]
aliases: ["cumulative distribution function", "CDF", "funzione di distribuzione cumulata", "F_X", "funzione di sopravvivenza", "survival function", "S_X"]
tags: [competenza, area/probabilita]
---

# Funzione di ripartizione

> $F_X(x)=\mathbb P(X\le x)$: una funzione non decrescente, continua a destra, da 0 a 1, che determina completamente la legge di $X$.

## Definizione / enunciato
Per una v.a. $X$, $F_X:\mathbb R\to[0,1]$,
$$F_X(x)=\mathbb P(X\le x)=\mathbb P_X((-\infty,x]).$$
**Proprietà**: 1) monotona non decrescente; 2) continua a destra; 3) $\lim_{x\to-\infty}F_X=0$, $\lim_{x\to+\infty}F_X=1$.
**Teorema**: ogni $F:\mathbb R\to[0,1]$ con 1)-3) è la funzione di ripartizione di un'unica misura di probabilità $\mu$ su $(\mathbb R,\mathcal B(\mathbb R))$, $F(x)=\mu((-\infty,x])$.
**Funzione di sopravvivenza**: $S_X(x)=1-F_X(x)=\mathbb P(X>x)$.

## Formule chiave
$$F_X(x_0)-F_X(x_0^-)=\mathbb P(X\le x_0)-\mathbb P(X<x_0)=\mathbb P(X=x_0).$$
I punti di discontinuità sono al più un'infinità numerabile, quindi $F_X$ è continua $m$-q.o.

## Intuizione
Continuità a destra e limiti agli estremi vengono dalla continuità dall'alto e dal basso della misura applicata alle semirette $(-\infty,x_n]$. A sinistra si ottiene $\mathbb P(X<x_0)$: il salto misura la massa concentrata nel punto.

## Come si usa
Bernoulli($p$): $F_X(x)=0$ per $x<0$, $1-p$ per $0\le x<1$, $1$ per $x\ge1$. Geometrica: $S_T(n)=(1-p)^n$. Lamiera forata (lezione 13), densità $\frac54(1-x^4)$ su $(0,1)$: $F_X(x)=\frac54x-\frac14x^5$ per $x\in[0,1)$, e la probabilità di scarto è $\mathbb P(X>0.8)=1-F_X(0.8)$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 8 (appunto manoscritto); sopravvivenza in lezione 10. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione08(19-04-23) (3).pdf` (lezione 8, pp. 4-7); `2023Lezione10(04-05-23) (1).pdf` (lezione 10, p. 1).
- **Prova finale** (triennale): f.d.r. marginali $F_1,F_2$ e congiunta $F$ nel teorema di Sklar; f.d.r. multivariata $F_{\mathbf X}(\mathbf x)=\mathbb P[X_1\le x_1,\dots,X_d\le x_d]$; funzione quantile $F^{-1}(u)=\inf\{x:F(x)\ge u\}$ per portare i dati in $[0,1]$ e ritorno; nella tesi è chiamata "funzione di ripartizione cumulativa (CDF)". Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§2.1.2, p. 14; §4.4, pp. 31-33); `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 3, 17-19).
- **Business intelligence per big data** (magistrale): $F_X(x)=P(X\le x)$ e $P(a<X\le b)=F_X(b)-F_X(a)$ come strumento di sintesi di una serie storica: si calcola la CDF dei campioni (almeno 100) e la si riassume con pochi percentili, che diventano le feature. Fonti: `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (pp. 26-28). Collegamenti: [[Feature engineering per serie storiche]] (sintesi CDF + percentili); [[Serie storica]] (la CDF si calcola sui campioni della serie, perdendo l'ordine temporale).

## Prerequisiti
- [[Variabile aleatoria]]: $F(x)=\mathbb P(X\le x)$
- [[Continuità della misura]]: continuità a destra e limiti
- [[Sigma-algebra di Borel]]: le semirette generano $\mathcal B(\mathbb R)$

## Porta a
- [[Variabile aleatoria discreta]]: costante a tratti
- [[Trasformazione integrale di probabilità]]: $F(X)$ è uniforme se $F$ è continua
- [[Copula]]: f.d.r. multivariata con marginali uniformi

## Collegati
- [[Funzioni monotone]]: non decrescente
- [[Punti di discontinuità]]: salti $=\mathbb P(X=x)$
