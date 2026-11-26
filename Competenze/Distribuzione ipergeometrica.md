---
tipo: competenza
area: probabilita
corsi: [Metodi matematici e probabilità, Modelli statistici]
livello: [triennale, magistrale]
aliases: ["hypergeometric distribution", "legge ipergeometrica", "I(N,K,n)", "Ipergeometrica(N,K,n)", "estrazioni senza reimmissione"]
tags: [competenza, area/probabilita]
---

# Distribuzione ipergeometrica

> Il numero di palline bianche in $n$ estrazioni senza reimmissione da un'urna con $N$ palline di cui $K$ bianche.

## Definizione / enunciato
Urna con $N$ palline, $K\le N$ bianche e $N-K$ nere; $n\le N$ estrazioni senza reimmissione. Con $\mathbb P$ uniforme sui sottoinsiemi di $n$ palline ($\operatorname{card}\Omega=\binom Nn$), $X$ = numero di bianche estratte ha **legge ipergeometrica** $I(N,K,n)$:
$$p_X(k)=\frac{\binom Kk\binom{N-K}{n-k}}{\binom Nn},\qquad k\le K,\ 0\le n-k\le N-K$$
(con $\binom ij=0$ se $j>i$).

## Formule chiave
$$\mathbb E[X]=n\frac KN,\qquad \operatorname{Var}(X)=n\frac KN\Big(1-\frac KN\Big)\frac{N-n}{N-1}.$$

## Intuizione
Ogni singola estrazione è una Bernoulli con la stessa $p=\frac KN$ (si verifica con le probabilità totali: $p_2=\frac{K-1}{N-1}\frac KN+\frac K{N-1}\frac{N-K}N=\frac KN$), quindi la media è come nella binomiale; manca però l'indipendenza, e la varianza ha il fattore correttivo $\frac{N-n}{N-1}$, circa 1 quando $n\ll N$.

## Come si usa
Se $n\ll N$ (in pratica $N\ge10n$) si approssima con $B(n,\frac KN)$. Volo con 20 passeggeri di cui 3 con sostanze proibite, se ne ispezionano 4 (Foglio, es. 18, svolto a lezione): $\mathbb P(X\ge1)=1-\frac{\binom{17}4}{\binom{20}4}=0.5088$; con $N=200$, $K=30$ si ottiene $0.4807$, vicino al valore binomiale $1-(\frac{17}{20})^4=0.4780$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezione 9, media e varianza in lezioni 12-13 (appunto manoscritto); tabella nel formulario. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione09(27-04-23) (1).pdf` (lezione 9, pp. 4-7); `2023Lezione12(25-05-23) (1).pdf` (lezione 12, p. 12); `formularioprobabilita (1).pdf`.
- **Modelli statistici** (magistrale): versione **multivariata** $\mathbf X\sim\mathrm{Iperg}(n;N_1,\dots,N_D)$, $P(\mathbf X=\mathbf x)=\prod_i\binom{N_i}{x_i}/\binom Nn$ (libro, cap. 5, Def. 5.14); per $N\to\infty$ con $N_i/N\to\pi_i$ tende alla multinomiale (Prop. 5.16); $\mathbb E(X_i)=np_i$ e $\operatorname{VarCov}(\mathbf X)=\frac{N-n}{N-1}n(\operatorname{diag}(\mathbf p)-\mathbf p\mathbf p')$ con il fattore di correzione per popolazione finita (Prop. 5.17). Commissione di 5 studenti da una classe di 30 (15 piemontesi, 11 italiani, 4 stranieri): $P(3,2,0)\approx0.1756$. È la legge nulla del test esatto di Fisher (gene set analysis, tabelle $2\times2$ a margini fissi). Fonti: `Libri/Modelli statistici/capitoli/cap05.tex` (§5.3, pp. 85-86), `cap16.tex`.

## Prerequisiti
- [[Variabile aleatoria discreta]]: numero di palline bianche
- [[Calcolo combinatorio]]: conteggio delle estrazioni

## Porta a
- [[Test esatto di Fisher]]: legge esatta dei conteggi sotto $H_0$ (Modelli statistici)

## Collegati
- [[Distribuzione binomiale]]: approssimazione per $n\ll N$
