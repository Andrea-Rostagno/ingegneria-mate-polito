---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [Dirichlet problem, problema di Dirichlet, funzioni armoniche, harmonic functions, "u(x) = E_x[f(W_tau)]"]
tags: [competenza, area/probabilita]
---

# Problema di Dirichlet e moto browniano

> La soluzione del problema di Dirichlet per il laplaciano è la media del dato al bordo valutato nel punto di uscita del moto browniano: $u(x)=\mathbb E_x[f(W_\tau)]$.

## Definizione / enunciato
**Funzione armonica.** $f$ è armonica su $D\subseteq\mathbb R^d$ se è due volte differenziabile nell'interno $\mathring D$ e $\Delta f=0$ in $\mathring D$. Sono esattamente le funzioni con $\mathcal Lf=\frac12\Delta f=0$.

**Problema di Dirichlet.** Dati $D$ e $f:\partial D\to\mathbb R$, trovare $u$ continua su $D$, $C^2$ in $\mathring D$, con $\Delta u=0$ in $\mathring D$ e $u=f$ su $\partial D$. Se $D$ è limitato e $\partial D$, $f$ sono $C^\infty$, la soluzione esiste, è unica e si estende a $u:\mathbb R^d\to\mathbb R$ $C^\infty$ con derivate seconde limitate.

**Teorema.** Sotto queste ipotesi, con $W$ browniano $d$-dimensionale con condizione iniziale generica e $\tau=\inf\{t\ge0:W_t\in\partial D\}$,
$$u(x)=\mathbb E_x[f(W_\tau)]\qquad\forall x\in D.$$

## Formule chiave
Prova via formula di Dynkin, con $\mathcal Lu=\frac12\Delta u=0$ su $D$:
$$\mathbb E_x[f(W_\tau)]=\mathbb E_x[u(W_\tau)]=u(x)+\mathbb E_x\Big[\int_0^\tau\mathcal Lu(W_s)\,ds\Big]=u(x).$$
Ingredienti: $\tau<\infty$ q.c. perché $D$ è limitato; derivate seconde limitate, quindi $\mathcal Lu=\frac12\Delta u$ ovunque; $u$ estesa limitata e $\mathcal Lu$ limitata, quindi Dynkin vale al tempo d'arresto (la slide scrive "$f$ limitata", da verificare sul PDF).

## Intuizione
Una funzione armonica ha la proprietà del valor medio: il suo valore in $x$ è la media sui punti in cui il browniano, partito da $x$, colpisce il bordo. Il generatore traduce l'equazione alle derivate parziali in una martingala.

## Come si usa
Scegliendo $f=\mathbf 1_{\partial D_A}$ su un intervallo ($d=1$) o una corona sferica $\{A\le\|v\|_2\le B\}$ si ottiene la probabilità di uscire dal bordo interno; le soluzioni esplicite (lineare, logaritmica, potenza $2-d$) non vanno ricordate a memoria.

## Nei corsi
- **Processi stocastici** (magistrale): argomento d'orale 17 ("calcolo del generatore e utilizzo"). Assente nel `.tex`. Fonti: `magistrale/Processi stocastici/Lezione_24_15_12.pdf` (lezione 24).

## Prerequisiti
- [[Generatore infinitesimale]]: funzioni armoniche annullano il generatore
- [[Formula di Dynkin]]: dimostrazione diretta tramite Dynkin

## Porta a
- [[Probabilità di uscita del moto browniano]]: soluzione su intervallo e anello

## Collegati
- [[Funzione armonica]] e problema di Dirichlet (PDE): lato analitico, le soluzioni sono funzioni armoniche (Metodi matematici e probabilità); il problema di Dirichlet come PDE è [[Problema di Dirichlet per l'equazione di Poisson]] (Equazioni alle derivate parziali)
- [[Nucleo di Poisson per la palla]]: sulla palla la soluzione è la media del dato al bordo pesata col nucleo di Poisson (Equazioni alle derivate parziali)
