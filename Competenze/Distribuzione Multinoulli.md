---
tipo: competenza
area: probabilita
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["Multinoulli distribution", "categorical distribution", "distribuzione categorica", "Multinoulli", "variabile categorica", "categorical variable", "variabile nominale", "variabile ordinale", "diversità di Gini"]
tags: [competenza, area/probabilita]
---

# Distribuzione Multinoulli

> Legge di una sola osservazione di una variabile categorica con $D$ livelli, rappresentata con la codifica one-hot: generalizza la Bernoulli, e la somma di $n$ Multinoulli i.i.d. è la multinomiale.

## Definizione / enunciato
Una **variabile categorica** assume $D\ge2$ livelli senza significato aritmetico; è **nominale** se ha senso solo l'uguaglianza, **ordinale** se i livelli sono ordinati, binaria se $D=2$ (libro, cap. 15, Def. 15.1). La **codifica one-hot** è il vettore di lunghezza $d=D-1$, $\mathbf B=(B_1,\dots,B_d)'$ con $B_i=1$ se $C=i$ e 0 altrimenti; il livello $D$ è il vettore nullo. La sua legge, caratterizzata da $\pi_i=P(\mathbf B=\mathbf e_i)$, è la **Multinoulli** (Def. 15.6).

## Formule chiave
- Momenti (Prop. 15.7): $\mathbb E(\mathbf B)=\boldsymbol\pi$, $\operatorname{VarCov}(\mathbf B)=\Sigma=\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi'$, cioè $\operatorname{Var}(B_k)=\pi_k(1-\pi_k)$, $\operatorname{Cov}(B_k,B_l)=-\pi_k\pi_l$.
- Misure di variabilità: **entropia** $H=-\sum_i\pi_i\log\pi_i$ (Def. 15.8) e **diversità di Gini** $G=1-\sum_i\pi_i^2$, probabilità che due osservazioni indipendenti abbiano livelli diversi (Def. 15.9); $0\le H\le\log D$, $0\le G\le(D-1)/D$, con minimo se un livello ha probabilità 1 e massimo con livelli equiprobabili (Prop. 15.10).
- $\mathbf N=\sum_{k=1}^n\mathbf B_k\sim\mathrm{Mult}(n;\boldsymbol\pi)$ (cap. 5, Prop. 5.7).

## Intuizione
Codificare i livelli con interi $1,\dots,D$ introdurrebbe un ordine e distanze inesistenti; la one-hot no. Omettere l'ultimo livello evita la ridondanza ($\sum B_i\le1$) e rende $\Sigma$ invertibile, cosa che serve nel teorema di Pearson.

## Come si usa
Esempi del libro: SNP, partiti, diagnosi; moda come indice di posizione, entropia e Gini come indici di eterogeneità (esercizio: calcolarli per una distribuzione data). Il TLC applicato alla somma di Multinoulli dà la normale asintotica dei conteggi.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 15, §15.1 e §15.3 (Def. 15.1, 15.6, 15.8-15.9, Prop. 15.7, 15.10, pp. 247-253); notazione dal testo dattiloscritto del docente. Fonti: `Libri/Modelli statistici/capitoli/cap15.tex`; `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf` (§1.1-1.3); `magistrale/Modelli statistici/251210 Dati categorici.pdf`.

## Prerequisiti
- [[Distribuzione binomiale]]: caso $D=2$ sommato su $n$ prove
- [[Matrice di covarianza]]: struttura $\operatorname{diag}(\boldsymbol\pi)-\boldsymbol\pi\boldsymbol\pi'$

## Porta a
- [[Distribuzione multinomiale]]: somma di Multinoulli i.i.d.
- [[Test chi-quadro di bontà dell'adattamento]]: TLC multinomiale e statistica di Pearson

## Collegati
- [[Codifica delle variabili categoriche]]: one-hot nel machine learning
- [[Misure di impurità]]: stesse formule di Gini ed entropia per i nodi di un albero
- [[Coniugatezza Dirichlet-multinomiale]]: prior per $\boldsymbol\pi$
- [[Entropia di Shannon]]: stessa misura $H=-\sum\pi_i\log\pi_i$ in teoria dell'informazione (Crittografia)
