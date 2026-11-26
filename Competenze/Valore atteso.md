---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica]
livello: [triennale]
aliases: ["expected value", "expectation", "media di una variabile aleatoria", "speranza matematica", "valor medio", "E[X]", "E[g(X)]", "media finita"]
tags: [competenza, area/probabilita]
---

# Valore atteso

> L'integrale di Lebesgue della v.a. rispetto a $\mathbb P$: si calcola sulla retta reale con la legge di $X$, come somma pesata (caso discreto) o integrale con la densità (caso continuo).

## Definizione / enunciato
Sia $X$ v.a. reale e $g:\mathbb R\to\mathbb R$ misurabile. Per il teorema di integrazione rispetto alla misura immagine:
$$\mathbb E[g(X)]=\int_\Omega g(X)\,d\mathbb P=\int_{\mathbb R}g(x)\,d\mathbb P_X(x).$$
Con $g$ identità si ha la **media** $\mathbb E[X]=\int_{\mathbb R}x\,d\mathbb P_X(x)$; $X$ ha **media finita** se $X\in L^1(\Omega,\mathcal F,\mathbb P)$, cioè $\mathbb E[|X|]<+\infty$.

## Formule chiave
$$\text{discreta: } \mathbb E[g(X)]=\sum_i g(x_i)\,p_X(x_i);\qquad \text{ass. continua: } \mathbb E[g(X)]=\int_{-\infty}^{+\infty}g(x)f_X(x)\,dx.$$
Linearità e monotonia: $\mathbb E[aX+bY+c]=a\mathbb E[X]+b\mathbb E[Y]+c$; $X\le Y$ q.o. $\Rightarrow\mathbb E[X]\le\mathbb E[Y]$.

## Intuizione
Nel caso discreto è una media pesata, cioè il baricentro della distribuzione di massa: un indice della "posizione" di $X$. Tutte le proprietà vengono dall'integrale di Lebesgue.

## Come si usa
Dado equo: $\mathbb E[X]=\frac16\sum_{i=1}^6i=3.5$; dado truccato con $p_X(5)=p_X(6)=\frac14$, altri $\frac18$: $\mathbb E[X]=4$ (lezione 12). Lamiera forata con densità $\frac54(1-x^4)$ su $(0,1)$: gioco medio $\frac5{12}$ (lezione 13). Resistore $W=2V^2$ con $V$ normale di media 8 e dev. standard 1: $\mathbb E[W]=2(\operatorname{Var}V+\mathbb E[V]^2)=130$ (lezione 14).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 12-13 (appunto manoscritto). Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione12(25-05-23) (1).pdf` (lezione 12, pp. 6-8); `2023Lezione13(01-06-23).pdf` (lezione 13, pp. 7-11).
- **Prob e statistica** (triennale): esteso ai vettori aleatori, $\mathbb E[g(X,Y)]=\int_{\mathbb R^2}g\,d\mathbb P_{(X,Y)}$ (somma doppia nel discreto, integrale doppio con la densità congiunta nel continuo), e alle v.a. complesse ($\mathbb E[X]=\mathbb E[\mathrm{Re}X]+i\,\mathbb E[\mathrm{Im}X]$) per la funzione caratteristica; per $X\ge0$ vale la formula della coda $\mathbb E[X]=\int_0^\infty\mathbb P(X>x)dx$. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione06(13-10-2023).pdf` (p. 3); `2023Lezione03(06-10-2023).pdf` (pp. 1-2); `2023Lezione10(26-10-2023).pdf` (p. 13).

## Prerequisiti
- [[Integrale di Lebesgue]]: integrale rispetto a $\mathbb P$
- [[Misura immagine]]: $\mathbb E[g(X)]$ come integrale su $\mathbb R$
- [[Variabile aleatoria]]: media di una v.a.

## Porta a
- [[Varianza]]: momento centrato di ordine 2
- [[Formula della coda per il valore atteso]]: $\mathbb E[X]$ come integrale della sopravvivenza (Prob e statistica)
- [[Covarianza]]: $\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$ (Prob e statistica)

## Collegati
- [[Media e deviazione standard delle misure]]: media campionaria delle misure
