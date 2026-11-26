---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["convergence in distribution", "convergence in law", "convergenza in distribuzione", "convergenza debole di misure di probabilità", "weak convergence of probability measures", "X_n ->L X"]
tags: [competenza, area/probabilita]
---

# Convergenza in legge

> $X_n\xrightarrow{\mathcal L}X$ se $\mathbb E[f(X_n)]\to\mathbb E[f(X)]$ per ogni $f$ continua e limitata; equivale alla convergenza delle funzioni di ripartizione nei punti di continuità del limite. È la più debole delle convergenze.

## Definizione / enunciato
Misure finite $\mu_n$ su $(\mathbb R,\mathcal B)$ convergono **debolmente** a $\mu$ se $\int f\,d\mu_n\to\int f\,d\mu$ per ogni $f\in C_b(\mathbb R)$. V.a. $X_n$, $X$ (anche su spazi diversi) convergono **in legge** (in distribuzione) se $\mathbb P_{X_n}\to\mathbb P_X$ debolmente, cioè
$$\mathbb E_n[f(X_n)]\to\mathbb E[f(X)]\qquad\forall f\in C_b(\mathbb R).$$

## Formule chiave
- **Criterio delle f.d.r.**: $X_n\xrightarrow{\mathcal L}X\iff F_{X_n}(x)\to F_X(x)$ in ogni punto di continuità di $F_X$.
- Discrete a valori in $\mathbb N$: $X_n\xrightarrow{\mathcal L}X\iff p_{X_n}(k)\to p_X(k)$ per ogni $k$. Assolutamente continue: $f_{X_n}\to f_X$ q.c. $\Rightarrow X_n\xrightarrow{\mathcal L}X$ (non vale il viceversa).
- Sullo stesso spazio: $X_n\xrightarrow{\mathbb P}X\Rightarrow X_n\xrightarrow{\mathcal L}X$; se $X=a$ costante vale anche $\Leftarrow$.
- Continuità: $X_n\xrightarrow{\mathcal L}X$, $f$ continua $\Rightarrow f(X_n)\xrightarrow{\mathcal L}f(X)$.
- Non vale per le somme in generale: $X_n\xrightarrow{\mathcal L}X$, $Y_n\xrightarrow{\mathcal L}Y$ non implica $X_n+Y_n\xrightarrow{\mathcal L}X+Y$; vale se $X_n\perp Y_n$ e $X\perp Y$ (via Lévy) o se le convergenze sono q.c./$L^p$/in probabilità.

## Intuizione
Conta solo la legge, non i valori delle v.a.: per questo il limite non è unico come v.a. Nei punti di salto del limite le f.d.r. possono non convergere ($X_n=\frac1n\to0$ ma $F_{X_n}(0)=0\ne F_{X_0}(0)=1$), e la convergenza delle probabilità $\mathbb P_{X_n}(A)\to\mathbb P_X(A)$ per ogni boreliano è falsa.

## Come si usa
Controesempio: $X_n,X$ Bernoulli$(\frac12)$ con $X=1-X_n$: stessa legge, quindi $X_n\xrightarrow{\mathcal L}X$, ma $\mathbb P(|X_n-X|>\varepsilon)=1$. Controesempio per le somme: $X_n,Y_n$ i.i.d. $\mathcal N(0,1)$, $X\sim\mathcal N(0,1)$, $Y=-X$: $X_n+Y_n\sim\mathcal N(0,2)$ ma $X+Y=0$. Esempio: $X_n\sim B(n,\frac\lambda n)\xrightarrow{\mathcal L}\mathcal P(\lambda)$ con tre metodi (densità, f.d.r., funzioni caratteristiche).

## Nei corsi
- **Prob e statistica** (triennale): lezioni 17-18. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione17(15-11-2023).pdf` (pp. 1-7); `2023Lezione18(16-11-2023).pdf` (pp. 1-4).

## Prerequisiti
- [[Convergenza in probabilità]]: la implica
- [[Funzione di ripartizione]]: criterio nei punti di continuità

## Porta a
- [[Teorema di continuità di Lévy]]: criterio con le funzioni caratteristiche
- [[Teorema di Slutsky]]: somme e prodotti con limiti costanti
- [[Teorema del limite centrale]]: convergenza in legge alla normale

## Collegati
- [[Convergenza di distribuzioni]]: analoga convergenza debole per funzionali sulle funzioni test
- [[Distribuzione di Poisson]]: limite della binomiale con $np=\lambda$
