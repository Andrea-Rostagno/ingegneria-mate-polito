---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["Chebyshev's inequality", "disuguaglianza di Čebyšëv", "disuguaglianza di Chebichev", "disuguaglianza di Markov", "Markov's inequality"]
tags: [competenza, area/probabilita]
---

# Disuguaglianza di Chebyshev

> Stima la probabilità che una v.a. si allontani dalla media usando solo la varianza: $\mathbb P(|X-\mathbb E X|>\varepsilon)\le\operatorname{Var}(X)/\varepsilon^2$. Discende dalla disuguaglianza di Markov.

## Definizione / enunciato
**Disuguaglianza di Markov.** Se $X\in L^1$, $X\ge0$ q.o., allora per ogni $\varepsilon>0$
$$\mathbb P(X>\varepsilon)\le\frac{\mathbb E[X]}{\varepsilon}.$$
**Disuguaglianza di Chebyshev.** Se $X\in L^2$, per ogni $\varepsilon>0$
$$\mathbb P(|X-\mathbb E[X]|>\varepsilon)\le\frac{\operatorname{Var}(X)}{\varepsilon^2}.$$

## Formule chiave
- Markov: con $Y=\varepsilon\mathbb 1_{(X>\varepsilon)}\le X$ q.o., monotonia: $\varepsilon\,\mathbb P(X>\varepsilon)=\mathbb E[Y]\le\mathbb E[X]$.
- Chebyshev: Markov applicata a $Y=(X-\mathbb E X)^2\ge0$ con soglia $\varepsilon^2$.
- Versione $L^p$ usata nelle convergenze: $\mathbb P(|X_n-X|>\varepsilon)\le\frac{\mathbb E|X_n-X|^p}{\varepsilon^p}$.

## Intuizione
Una v.a. con varianza piccola non può mettere molta massa lontano dalla media; la stima è grossolana ma universale (non serve conoscere la legge).

## Come si usa
È lo strumento della legge debole dei grandi numeri: $\mathbb P(|\bar X_n-\mu|>\varepsilon)\le\frac{\sigma^2}{n\varepsilon^2}\to0$. Nella legge forte serve sulla sottosuccessione $\bar X_{n^2}$: $\sum_n\mathbb P(|\bar X_{n^2}-\mu|>\varepsilon)\le\sum_n\frac{\sigma^2}{n^2\varepsilon^2}<\infty$. Dimostra anche che la convergenza in $L^p$ implica quella in probabilità.

## Nei corsi
- **Prob e statistica** (triennale): premessa della lezione 15 alle convergenze. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione15(09-11-2023).pdf` (p. 9); `2023Lezione16(10-11-2023).pdf` (pp. 3, 7, 9).

## Prerequisiti
- [[Valore atteso]]: monotonia dell'integrale
- [[Varianza]]: $\mathbb E[(X-\mathbb EX)^2]$

## Porta a
- [[Legge dei grandi numeri]]: dimostrazione della legge debole
- [[Convergenza in probabilità]]: $L^p$ implica convergenza in probabilità
