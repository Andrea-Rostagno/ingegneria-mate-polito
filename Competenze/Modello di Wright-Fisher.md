---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Wright-Fisher model, deriva genetica, genetic drift, tempo di fissazione, probabilità di fissazione]
tags: [competenza, area/probabilita]
---

# Modello di Wright-Fisher

> Modello di deriva genetica neutra in una popolazione di taglia fissa $N$: il numero di individui con un tratto è una martingala, e da qui segue subito la probabilità di fissazione.

## Definizione / enunciato
Due tratti genetici neutri $\alpha$ e $\beta$, popolazione di taglia fissa $N$. Ogni generazione è ottenuta campionando $N$ volte, indipendentemente e con reinserimento, i tratti della generazione precedente. Se $X_n$ è il numero di individui con tratto $\alpha$ nella generazione $n$, $(X_n)$ è una DTMC su $S=\{0,1,\dots,N\}$ con
$$X_{n+1}\mid X_n=i\ \sim\ \mathrm{Bin}(N,i/N),\qquad p(i,j)=\binom Nj\Big(\frac iN\Big)^j\Big(1-\frac iN\Big)^{N-j}.$$
Gli stati $0$ e $N$ sono assorbenti.

## Formule chiave
Martingala: $\mathbb E[X_{n+1}\mid X_n]=N\cdot X_n/N=X_n$, con $\mathbb E[|X_n|]\le N$.
Con $\tau=\inf\{n:X_n=0\text{ o }X_n=N\}$ e $X_0=x$, per optional stopping
$$x=\mathbb E[X_\tau]=N\,P_x(X_\tau=N)\quad\Longrightarrow\quad P_x(X_\tau=N)=\frac xN.$$

## Intuizione
La neutralità rende la frequenza del tratto un gioco equo: in media non cresce né decresce, ma la casualità del campionamento finisce sempre per fissare uno dei due tratti. La probabilità di vincere è la quota iniziale, come nella rovina del giocatore.

## Come si usa
Le ipotesi dell'optional stopping sono facili: $X$ è limitata da $N$ e $\tau$ è finito q.c. (catena finita con due stati assorbenti raggiungibili). Le slide sottolineano che il sistema lineare per le probabilità di assorbimento sarebbe pesante su spazi grandi, mentre la martingala dà la formula in una riga.

**Esercizio E** (tempo medio di fissazione): calcolare $\mathbb E[\sum_{n=0}^{\tau-1}X_n]$ e $\mathbb E[\tau]$. Traccia del materiale: applicare la decomposizione di Doob a $X_n^2$; l'incremento del compensatore è la varianza binomiale condizionata, $X_n(1-X_n/N)$ (ricavato dalla varianza della binomiale, da verificare sul PDF); poi optional stopping su $X_n^2-A_n$ e il fatto che la popolazione totale è sempre $N$ (applicare lo stesso ragionamento al tratto $\beta$). Il materiale non riporta il risultato finale.

## Nei corsi
- **Processi stocastici** (magistrale): esempio applicativo dell'argomento 12. Fonti: `magistrale/Processi stocastici/Lezione_19_24_11.pdf` (lezione 19), `suggested_exercises_martingales.pdf` (es. E).

## Prerequisiti
- [[Teorema di optional stopping]]: probabilità di fissazione di un tratto
- [[Decomposizione di Doob]]: tempo medio di fissazione

## Collegati
- [[Catena di Markov a tempo discreto]]: catena con due stati assorbenti
