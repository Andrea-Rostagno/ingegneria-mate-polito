---
tipo: competenza
area: probabilita
corsi: [Prob e statistica]
livello: [triennale]
aliases: ["law of large numbers", "LGN", "legge debole dei grandi numeri", "weak law of large numbers", "LDGN", "legge forte dei grandi numeri", "strong law of large numbers", "LFGN", "LFGN di Kolmogorov", "media campionaria converge alla media"]
tags: [competenza, area/probabilita]
---

# Legge dei grandi numeri

> La media campionaria di v.a. i.i.d. converge alla media teorica: in probabilità (legge debole), quasi certamente e in $L^1$ o $L^2$ (legge forte).

## Definizione / enunciato
Sia $(X_n)$ i.i.d. e $\bar X_n=\frac1n\sum_{i=1}^nX_i$ la **media campionaria**.
- **LDGN** (legge debole). Se $X_n\in L^2$ con media $\mu$ e varianza $\sigma^2$: $\bar X_n\xrightarrow{\mathbb P}\mu$.
- **LFGN**. Se $X_n\in L^2$: $\bar X_n\to\mu$ q.c. e in $L^2$.
- **LFGN di Kolmogorov**. Basta $X_n\in L^1$ con media $\mu$: $\bar X_n\to\mu$ q.c. e in $L^1$.

## Formule chiave
$$\mathbb E[\bar X_n]=\mu,\qquad\operatorname{Var}(\bar X_n)=\frac{\sigma^2}n,\qquad\mathbb P(|\bar X_n-\mu|>\varepsilon)\le\frac{\sigma^2}{n\varepsilon^2}\to0 .$$

## Intuizione
Mediando molte copie indipendenti le fluttuazioni si compensano: la varianza della media scala come $1/n$. Il TLC precisa poi che le oscillazioni residue sono di ordine $1/\sqrt n$.

## Come si usa
**Dimostrazione della LFGN in $L^2$** (lezione 16): la convergenza $L^2$ segue da $\mathbb E\bar X_n\to\mu$ e $\operatorname{Var}\bar X_n\to0$. Per la q.c. (con $X_n\ge0$, altrimenti parte positiva e negativa): Chebyshev dà $\sum_n\mathbb P(|\bar X_{n^2}-\mu|>\varepsilon)\le\sum\frac{\sigma^2}{n^2\varepsilon^2}<\infty$, quindi per Borel-Cantelli $\bar X_{n^2}\to\mu$ q.c.; poi con $k_n=\lfloor\sqrt n\rfloor$, $k_n^2\le n\le(k_n+1)^2$ e la monotonia delle somme parziali si stringe $\bar X_n$ fra $\frac{k_n^2}{(k_n+1)^2}\bar X_{k_n^2}$ e $\frac{(k_n+1)^2}{k_n^2}\bar X_{(k_n+1)^2}$, che tendono a $\mu$.
**Applicazioni**: metodo Monte Carlo per $\int_0^1f$; giustifica il metodo dei momenti ($\frac1n\sum X_i^j\to\mathbb E[X^j]$).

## Nei corsi
- **Prob e statistica** (triennale): lezione 16; richiamata nelle slide di statistica per il metodo dei momenti e la consistenza. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione16(10-11-2023).pdf` (pp. 7-12); `statistica/Stime Puntuali lez5.pdf` (Metodo dei Momenti I).

## Prerequisiti
- [[Disuguaglianza di Chebyshev]]: stima di $\mathbb P(|\bar X_n-\mu|>\varepsilon)$
- [[Convergenza in probabilità]]: modo di convergenza della legge debole
- [[Lemma di Borel-Cantelli]]: convergenza q.c. della sottosuccessione $\bar X_{n^2}$

## Porta a
- [[Metodo Monte Carlo]]: stima di integrali con medie di simulazioni
- [[Metodo dei momenti]]: momenti campionari come stime
- [[Teorema del limite centrale]]: velocità $1/\sqrt n$ delle oscillazioni

## Collegati
- [[Convergenza in Lp]]: parte $L^2$ della legge forte
- [[Legge forte dei grandi numeri per martingale]]: generalizzazione a incrementi di martingala
- [[Processo di rinnovo]]: la legge dei grandi numeri per i rinnovi ne è una conseguenza
