---
tipo: competenza
area: probabilita
corsi: [Prob e statistica, Modelli statistici, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["Beta distribution", "legge Beta", "Beta(alpha, beta)", "funzione Beta", "Beta function", "B(alpha, beta)"]
tags: [competenza, area/probabilita]
---

# Distribuzione Beta

> Legge su $(0,1)$ con due parametri di forma: modella proporzioni e probabilità e nasce come $X/(X+Y)$ con $X,Y$ Gamma indipendenti.

## Definizione / enunciato
$T\sim\mathrm{Beta}(\alpha,\beta)$, $\alpha,\beta>0$, se ha densità
$$f_T(t)=\frac{\Gamma(\alpha+\beta)}{\Gamma(\alpha)\Gamma(\beta)}\,t^{\alpha-1}(1-t)^{\beta-1}\,\mathbb 1_{(0,1)}(t)=\frac{1}{B(\alpha,\beta)}t^{\alpha-1}(1-t)^{\beta-1}\mathbb 1_{(0,1)}(t),$$
dove la **funzione Beta** è $B(\alpha,\beta)=\int_0^1t^{\alpha-1}(1-t)^{\beta-1}dt=\dfrac{\Gamma(\alpha)\Gamma(\beta)}{\Gamma(\alpha+\beta)}$.

## Formule chiave
- $\mathbb E[T]=\dfrac{\alpha}{\alpha+\beta}$ (si riconosce la densità $\mathrm{Beta}(\alpha+1,\beta)$); $\operatorname{Var}(T)=\dfrac{\alpha\beta}{(\alpha+\beta)^2(\alpha+\beta+1)}$ (lasciato come calcolo).
- $\alpha=\beta=1$: $T\sim U(0,1)$.
- Teorema (lezione 10): se $X\sim\Gamma(\alpha,\lambda)$, $Y\sim\Gamma(\beta,\lambda)$ indipendenti, allora $S=X+Y\sim\Gamma(\alpha+\beta,\lambda)$, $T=\frac{X}{X+Y}\sim\mathrm{Beta}(\alpha,\beta)$ e $S\perp T$.

## Intuizione
La densità congiunta di $(S,T)$ si fattorizza in un pezzo che dipende solo da $s$ e uno solo da $t$: la "quota" $X/(X+Y)$ non dice nulla sul totale. Variando $\alpha,\beta$ la forma va da U a campana a J.

## Come si usa
Dimostrazione tipo: $g(x,y)=(x+y,\frac{x}{x+y})$ è un $C^1$-diffeomorfismo di $(0,\infty)^2$ su $(0,\infty)\times(0,1)$, inversa $x=st$, $y=s(1-t)$, $|\det J_{g^{-1}}|=s$; il metodo dello jacobiano dà
$f_{(S,T)}(s,t)=\frac{\lambda^{\alpha+\beta}}{\Gamma(\alpha)\Gamma(\beta)}s^{\alpha+\beta-1}e^{-\lambda s}t^{\alpha-1}(1-t)^{\beta-1}$ sul prodotto, e la costante si ripartisce fra le due marginali. Le slide la citano per modellare proporzioni e in statistica bayesiana.

## Nei corsi
- **Prob e statistica** (triennale): esercizio svolto in lezione 10 (trasformazioni vettoriali) che introduce la legge e la funzione Beta. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione10(26-10-2023).pdf` (pp. 8-12); `statistica/Distribuzioni lez1.pdf` (F di Fisher Snedecor II, legame con la F).
- **Modelli statistici** (magistrale): prior naturale per una probabilità $p$, scritta $\mathrm{Beta}(a,b)$ con nucleo $p^{a-1}(1-p)^{b-1}$ (libro, cap. 3, Def. 3.3-3.4); media $a/(a+b)$, varianza $ab/((a+b)^2(a+b+1))$ e, se $a,b>1$, moda $(a-1)/(a+b-2)$ (Prop. 3.5); forme uniforme, a J, a U, unimodale. È coniugata alla Bernoulli e alla binomiale, è la marginale di una Dirichlet ($P_i\sim\mathrm{Beta}(\alpha_i,\alpha_0-\alpha_i)$, cap. 6) e $\mathrm{Beta}(1,1)$ è la prior uniforme di Laplace; con $a+b$ letto come numero di osservazioni fittizie. Fonti: `Libri/Modelli statistici/capitoli/cap03.tex` (§3.3, pp. 41-42), `cap06.tex`.
- **Statistica computazionale** (magistrale): prior per la probabilità $\theta$ di "pari" in un dado sospetto: con $Y\mid\theta\sim\mathrm{Bin}(n,\theta)$ e $\theta\sim\mathrm{Beta}(a,b)$ la posteriori è $\mathrm{Beta}(y+a,n+b-y)$, con media $\frac{y+a}{a+n+b}$, vicina a $y/n$ con la prior non informativa $a=b=1$ e a $\frac a{a+b}$ con una informativa come $a=b=1000$ (stessa media). Media $\frac a{a+b}$, varianza $\frac{ab}{(a+b)^2(a+b+1)}$. Figura con prior $B(1,1)$, $B(5,1)$, $B(1,5)$, $n=20$, vero $\theta=0.7$ (il codice R della figura usa `dbeta(xseq, y+a-1, n-y+b)`, incoerente con la formula: da verificare sul PDF). Esempio di accept-reject: $B(3,1.2)$ con accettazione 0.46. Fonti: `magistrale/Statistica computazionale/Modelli Bayesiani (1).pdf` (p. 4-14); `magistrale/Statistica computazionale/monte carlo.pdf` (p. 41-44).

## Prerequisiti
- [[Distribuzione Gamma]]: $X/(X+Y)$ con $X,Y$ Gamma
- [[Metodo dello jacobiano]]: trasformazione $(x,y)\mapsto(x+y,x/(x+y))$

## Porta a
- Nessuno nel corso (Prob e statistica).
- [[Coniugatezza Beta-Bernoulli]]: prior e posteriori per una probabilità (Modelli statistici)
- [[Distribuzione di Dirichlet]]: generalizzazione al simplesso (Modelli statistici)

## Collegati
- [[Distribuzione uniforme continua]]: caso $\alpha=\beta=1$
- [[Metodo accept-reject]]: esempio di simulazione della $B(3,1.2)$ (Statistica computazionale)
- [[Distribuzione F di Fisher-Snedecor]]: se $X\sim\mathrm{Beta}(n_1/2,n_2/2)$ allora $\frac{n_2X}{n_1(1-X)}\sim F(n_1,n_2)$
