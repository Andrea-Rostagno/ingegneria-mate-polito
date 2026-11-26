---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Prob e statistica, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["Pascal distribution", "Pa(r,p)", "Pascal(r,p)", "binomiale negativa", "negative binomial distribution", "BN(r,p)", "istante dell'r-esimo successo"]
tags: [competenza, area/probabilita]
---

# Distribuzione di Pascal

> L'istante dell'$r$-esimo successo in uno schema di Bernoulli infinito; la geometrica è il caso $r=1$.

## Definizione / enunciato
Schema di Bernoulli infinito con successo di probabilità $p\in(0,1]$. $T$ = istante dell'$r$-esimo successo ha **legge di Pascal** $Pa(r,p)$, $T(\Omega)=\{r,r+1,\dots\}$:
$$p_T(k)=\binom{k-1}{r-1}p^r(1-p)^{k-r},\qquad k\ge r.$$
**Binomiale negativa**: $T'=T-r$ = numero di insuccessi prima dell'$r$-esimo successo, $T'\sim BN(r,p)$, $T'(\Omega)=\mathbb N$:
$$\mathbb P(T'=k)=\mathbb P(T=k+r)=\binom{k+r-1}{r-1}p^r(1-p)^k\quad\text{(indice del binomiale da verificare sul PDF, lezione 10 p. 4)}.$$

## Formule chiave
$$\mathbb E[T]=\frac rp,\qquad \operatorname{Var}(T)=\frac{r(1-p)}{p^2}.$$

## Intuizione
Perché l'$r$-esimo successo arrivi alla prova $k$, la prova $k$ deve essere un successo e le $k-1$ precedenti devono contenere esattamente $r-1$ successi: $\binom{k-1}{r-1}$ modi, ognuno di probabilità $p^r(1-p)^{k-r}$. Media e varianza sono $r$ volte quelle della geometrica (somma dei tempi d'attesa fra successi consecutivi).

## Come si usa
Si riconosce dalla domanda "alla prova $k$ ottengo l'$r$-esimo successo". Con $r=1$ si ritrova $p(1-p)^{k-1}$ della geometrica. Il coefficiente binomiale è lo stesso $\binom nk$ della binomiale, con $n=k-1$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 10, media e varianza in lezione 13 (appunto manoscritto); tabella nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione10(04-05-23) (1).pdf` (lezione 10, p. 4); `2023Lezione13(01-06-23).pdf` (lezione 13, p. 1); `formularioprobabilita (1).pdf` (riga "Pascal(r,p)").
- **Prob e statistica** (triennale): somme di v.a. indipendenti, $G(p)+G(p)=\mathrm{Pascal}(2,p)$ e $\mathrm{Pascal}(m,p)+\mathrm{Pascal}(n,p)=\mathrm{Pascal}(m+n,p)$; la binomiale negativa compare come mistura: se $X\sim\Gamma(\alpha,\lambda)$ e $Y|X=x\sim\mathcal P(x)$, con $\alpha=r\in\mathbb N$ si ha $p_Y(m)=\binom{m+r-1}{r-1}\big(\frac\lambda{\lambda+1}\big)^r\big(1-\frac\lambda{\lambda+1}\big)^m$, cioè $Y\sim BN(r,\frac\lambda{\lambda+1})$, e il nome si usa anche per $\alpha$ reale. Fonti: `triennale/ANNO 3/prob e statistica/probabilita/2023Lezione08(19-10-2023).pdf` (p. 2); `2023Lezione15(09-11-2023).pdf` (pp. 6-7).
- **Modelli statistici** (magistrale): binomiale negativa come mistura Poisson-Gamma in forma media-dispersione, $\lambda\sim\mathrm{Gamma}(a,a/\mu)$, con $\mathbb E=\mu$ e $\operatorname{Var}=\mu+\mu^2/a$, modello per conteggi sovradispersi (`glm.nb`; libro, cap. 17, Prop. 17.18); compare anche come predittiva bayesiana Gamma-Poisson (cap. 3) e nel campionamento inverso delle tabelle di contingenza (cap. 16). Gli appunti usano la Gamma in forma-scala. Fonti: `Libri/Modelli statistici/capitoli/cap17.tex` (p. 300), `cap03.tex`, `cap16.tex`.

## Prerequisiti
- [[Distribuzione geometrica]]: caso $r=1$
- [[Calcolo combinatorio]]: coefficiente binomiale

## Porta a
- [[Sovradispersione]]: regressione binomiale negativa (Modelli statistici)

## Collegati
- [[Somma di variabili aleatorie indipendenti]]: somma di geometriche e di Pascal (Prob e statistica)
- [[Distribuzione condizionata]]: binomiale negativa come mistura Gamma-Poisson (Prob e statistica)
