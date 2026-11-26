---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["chi-squared distribution", "chi-quadrato", "chi quadro", "chi^2(n)", "gradi di libertà", "degrees of freedom", "chi-quadro non centrato", "noncentral chi-squared"]
tags: [competenza, area/statistica]
---

# Distribuzione chi-quadro

> Legge della somma dei quadrati di $n$ normali standard indipendenti; è una Gamma$(n/2,1/2)$ ed è la distribuzione di $(n-1)S^2/\sigma^2$ nei campioni normali.

## Definizione / enunciato
$Y\in\mathbb R^+$ a.c. è **chi-quadro con $n\in\mathbb N^*$ gradi di libertà**, $Y\sim\chi^2(n)$, se
$$f(y)=2^{-\frac n2}\Gamma\Big(\frac n2\Big)^{-1}y^{\frac n2-1}\exp\Big(-\frac y2\Big),\qquad\mathbb E(Y)=n,\ \operatorname{Var}(Y)=2n .$$
Si definisce a partire da: $X_1,\dots,X_n$ i.i.d. $\mathcal N(0,1)\Rightarrow Q=\sum_{i=1}^nX_i^2\sim\chi^2(n)$.

## Formule chiave
- Additività: $\chi^2(n_1)+\chi^2(n_2)$ indipendenti $=\chi^2(n_1+n_2)$.
- $\chi^2(n)=G(n/2,2)$ con secondo parametro di scala, cioè $\Gamma(\frac n2,\frac12)$ con parametro di tasso (lezione 9).
- **Non centrata**: $X_i\sim\mathcal N(\mu_i,1)$ indipendenti, $Q=\sum X_i^2\sim\chi^2_\lambda(n)$ con $\lambda=\sum\mu_i^2$; media $n+\lambda$, varianza $2(n+2\lambda)$.
- $X\sim U(0,1)\Rightarrow-2\log X\sim\chi^2(2)$.
- $n=1$: $X^2\sim\chi^2(1)=\Gamma(\frac12,\frac12)$ se $X\sim\mathcal N(0,1)$ (lezione 7).

## Intuizione
I gradi di libertà contano i quadrati indipendenti che si sommano; ogni parametro stimato ne "consuma" uno, per questo $(n-1)S^2/\sigma^2$ ha $n-1$ gradi e i residui di una regressione con $p$ coefficienti ne hanno $n-p$.

## Come si usa
È il denominatore della t di Student e il mattone della F; dà test e intervalli sulla varianza di una normale ($V=(n-1)S^2/\sigma_0^2\sim\chi^2(n-1)$) e su $\sigma^2$ in regressione ($(n-2)S^2/\sigma^2\sim\chi^2_{n-2}$).

## Nei corsi
- **Prob e statistica** (triennale): nelle lezioni di probabilità come caso della Gamma (lezioni 7 e 9), nelle slide di statistica come distribuzione campionaria. Fonti: `triennale/ANNO 3/prob e statistica/statistica/Distribuzioni lez1.pdf` (Chi-quadro I-III); `probabilita/2023Lezione07(18-10-2023).pdf` (pp. 6-8); `probabilita/2023Lezione09(20-10-2023).pdf` (p. 10).
- **Modelli statistici** (magistrale): definita come $\mathbf Z'\mathbf Z=\|\mathbf Z\|^2$ con $\mathbf Z\sim N_k(\mathbf 0,\mathbf I_k)$ (libro, cap. 8, Def. 8.3); $\chi^2(k)=\mathrm{Gamma}(k/2,1/2)$, f.g.m. $(1-2t)^{-k/2}$, media $k$, varianza $2k$ (Prop. 8.4); additività (Prop. 8.5) e **risultato inverso**: se $Q_1\sim\chi^2(k_1)$, $Q_2\sim\chi^2(k_2)$, $k_1>k_2$ e $Q_1-Q_2\ge0$ è indipendente da $Q_2$, allora $Q_1-Q_2\sim\chi^2(k_1-k_2)$ (Prop. 8.6; senza indipendenza è falso). Non centrale $\chi^2(k,\delta)$ con $\delta=\|\boldsymbol\mu\|^2$ (Def. 8.21), legge del test $F$ sotto l'alternativa. Compare come forma quadratica di Mahalanobis, nel teorema di Cochran, nel test di Pearson ($\chi^2(D-1-r)$) e nel test della devianza dei GLM. Per $k=2$ è un'esponenziale di tasso $1/2$: $P(\chi^2(2)\le c)=1-e^{-c/2}$. Fonti: `Libri/Modelli statistici/capitoli/cap08.tex` (§8.2, pp. 128-130); `magistrale/Modelli statistici/PDF corretti/251105.pdf`.

## Prerequisiti
- [[Distribuzione Gamma]]: $\chi^2(n)=\Gamma(n/2,1/2)$
- [[Somma di variabili aleatorie indipendenti]]: somma di quadrati indipendenti
- [[Trasformazione di una variabile aleatoria]]: legge di $X^2$

## Porta a
- [[Distribuzione t di Student]]: normale su radice di chi-quadro
- [[Distribuzione F di Fisher-Snedecor]]: rapporto di chi-quadro
- [[Media e varianza campionaria nel caso normale]]: $(n-1)S^2/\sigma^2\sim\chi^2(n-1)$
- [[Test chi-quadro sulla varianza]]: statistica test
- [[Teorema di Cochran]]: forme quadratiche di proiezioni (Modelli statistici)
- [[Test chi-quadro di bontà dell'adattamento]]: legge limite della statistica di Pearson (Modelli statistici)
- [[Devianza di un GLM]]: legge asintotica della differenza di devianze (Modelli statistici)
