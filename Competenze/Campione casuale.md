---
tipo: competenza
area: statistica
corsi: [Prob e statistica, Prova finale, Statistica computazionale]
livello: [triennale, magistrale]
aliases: ["random sample", "campione iid", "statistica (funzione del campione)", "statistic", "distribuzione campionaria", "sampling distribution", "modello statistico", "statistical model", "media campionaria", "sample mean", "varianza campionaria", "sample variance", "funzione di ripartizione empirica", "empirical CDF", "quantile campionario", "sample quantile", "statistica inferenziale"]
tags: [competenza, area/statistica]
---

# Campione casuale

> Vettore $\mathbf X=(X_1,\dots,X_n)$ di componenti i.i.d. da una legge $F_X$ con parametri incogniti: le sue funzioni (statistiche) e le loro distribuzioni campionarie sono la base dell'inferenza.

## Definizione / enunciato
**Statistica inferenziale**: induce le caratteristiche di una popolazione dall'osservazione di una parte (campione) selezionata con un esperimento aleatorio. **Campione casuale** (i.i.d.) da $F_X$: $\mathbf X=(X_1,\dots,X_n)$ con componenti indipendenti e tutte di legge $F_X$; densità congiunta $f(\mathbf x)=\prod_{i=1}^nf(x_i)$.
**Modello statistico**: famiglia di leggi per $\mathbf X$ indicizzata da un parametro $\theta\in\Theta$ (spazio parametrico), $\mathcal F=\{f(\cdot;\theta):\theta\in\Theta\}$.
**Statistica**: funzione $T(X_1,\dots,X_n)$ del campione; la sua legge è la **distribuzione campionaria**.

## Formule chiave
- Media campionaria $\bar X=\frac1n\sum X_i$; varianza campionaria $S^2=\frac1{n-1}\sum(X_i-\bar X)^2$ (il perché di $n-1$ è la non distorsione).
- Massimo $X_{(n)}$, campione ordinato $X_{(1)}\le\dots\le X_{(n)}$.
- **Funzione di ripartizione empirica**: $\hat F(x)=\frac1n\sum_{i=1}^n\mathbb I(X_i\le x)$, che approssima $F_X$.
- **Quantili campionari**: $\hat Q(u)=\inf\{x:u\le\hat F(x)\}$; mediana $\hat Q(0.5)$, quartili $\hat Q(0.25),\hat Q(0.75)$; la slide dà $\hat Q(u)=X_{(u\cdot n)}$ se $u\cdot n$ è intero e $X_{(\lfloor u\cdot n\rfloor+1)}$ altrimenti (da verificare sul PDF).

## Intuizione
Il campione è una realizzazione: prima dell'esperimento è un vettore aleatorio, quindi ogni statistica è una v.a. con una sua legge. Le assunzioni distributive (Poisson per il numero di figli, normale per le misure di Michelson) sono ipotesi che il corso dà per buone.

## Come si usa
Esempi delle slide: controllo qualità con $X_i\sim\mathrm{Bern}(p)$ (pezzo difettoso o no); numero di figli di $n$ famiglie come campione Poisson; Michelson: $5\times20$ misure della velocità della luce da $\mathcal N(\mu,\sigma^2)$ con $\sigma^2$ ignoto o noto, oppure da una $G(a,b)$. I numeri simulati con R sono pseudo-casuali, generati da un seme.

## Nei corsi
- **Prob e statistica** (triennale): apertura della parte di statistica. Fonti: `triennale/ANNO 3/prob e statistica/statistica/statistica campionionaria lez2.pdf` (Campioni I-V, Statistiche e Distribuzione Campionaria I-IV); `statistica/data reduction lez3.pdf` (Qualche cenno sull'inferenza II-IV); dataset e simulazioni in `statistica/R/Statistiche campionarie Vers. 1.0.0.R`.
- **Prova finale** (triennale): f.d.r. empirica $F_{X,n}(x)=\frac1n\sum_i\mathbb 1(X_i\le x)$ per trasformare ciascuna serie in $[0,1]$ e visualizzare la dipendenza (Pellerey); nella tesi "metodo empirico (ECDF)" con i ranghi $u_i=\operatorname{rank}(x_i)/(n+1)$; quantili campionari per il VaR (5° percentile dei valori simulati). Fonti: `triennale/ANNO 3/Prove finali/slides pellerey handout.pdf` (slide 32); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.4.2, p. 33; §6.1.3, p. 102).
- **Statistica computazionale** (magistrale): la f.d.r. empirica come **stima Monte Carlo** di $F(a)=\int_{-\infty}^af(x)\,d\lambda(x)$: con $h(X)=\mathbf 1_a(X)$ (1 se $X\le a$) si ha $\hat F(a)=\frac1n\sum_{i=1}^n\mathbf 1_a(X_i)\approx E(\mathbf 1_a(X))=F(a)$; è a scalini di altezza $1/n$, costante per $X_{i-1}<a\le X_i$. Quantile empirico di livello $p$: $\min\{x_i:i=1,\dots,n\ \text{e}\ \hat F(x)\ge p\}$, usato poi per gli intervalli di credibilità dai campioni MCMC. Esempio con figura e codice R: ECDF di una $B(1,3)$ per $n=10,50,100$. Fonti: `magistrale/Statistica computazionale/monte carlo.pdf` (p. 13-16).

## Prerequisiti
- [[Indipendenza di variabili aleatorie]]: componenti i.i.d.

## Porta a
- [[Media e varianza campionaria nel caso normale]]: distribuzioni campionarie di $\bar X$ e $S^2$
- [[Statistiche d'ordine]]: campione ordinato
- [[Statistica sufficiente]]: riduzione dei dati
- [[Stimatore puntuale]]: statistica usata per stimare $\theta$
- [[Test d'ipotesi]]: regole di decisione basate sul campione
- [[Pseudo-osservazioni]]: f.d.r. empirica applicata a ogni componente (Prova finale)
- [[Stima bayesiana]]: quantili empirici dei campioni a posteriori per gli intervalli di credibilità (Statistica computazionale)

## Collegati
- [[Campionamento]]: tecniche di campionamento nel data mining
- [[Media e deviazione standard delle misure]]: stesse statistiche usate per le misure di laboratorio
- [[Metodo Monte Carlo]]: $\hat F(a)$ è lo stimatore Monte Carlo di $E(\mathbf 1_a(X))$ (Statistica computazionale)
