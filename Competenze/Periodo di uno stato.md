---
tipo: competenza
area: probabilita
corsi: [Processi stocastici, Dinamiche su network]
livello: [magistrale]
aliases: ["period", "periodicity", "aperiodicità", "periodo di un grafo", "grafo aperiodico", "aperiodic graph"]
tags: [competenza, area/probabilita]
---

# Periodo di uno stato

> Massimo comun divisore dei tempi in cui è possibile tornare in uno stato; se è maggiore di 1 la catena oscilla e non ha distribuzione limite.

## Definizione / enunciato
Il **periodo** di $y$ è
$$\mathrm{per}(y)=\gcd\{k\in\mathbb N:\ p^{(k)}(y,y)>0\}.$$
$y$ è **aperiodico** se $\mathrm{per}(y)=1$.

**Teorema (Lemma 1.18 di Durrett).** Tutti gli stati di una stessa classe di comunicazione hanno lo stesso periodo.

## Formule chiave
Controesempio alla convergenza: con $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ (finita, irriducibile, ricorrente positiva) si ha $\pi=(\tfrac12,\tfrac12)$, ma partendo da 1 la catena è in 1 a tutti i tempi pari e in 2 a tutti i tempi dispari. Quindi non esiste limite.

## Intuizione
Il periodo misura una "struttura ciclica" deterministica. Se si può tornare solo a multipli di $d>1$, la legge di $X_n$ non si stabilizza, anche se le frequenze di lungo periodo esistono.

## Come si usa
- Passeggiata su $\mathbb Z$: $p^{(n)}(0,0)\ne0$ solo per $n$ pari, quindi periodo 2.
- Taxi (lezione 9): $1\to3\to1$ (2 passi) e $1\to2\to3\to1$ (3 passi), quindi periodo $\gcd(2,3)=1$.
- Es. E di `suggested_exercises_DTMC.pdf`: se esiste $n$ con $P^n$ a entrate tutte positive, la catena è irriducibile e aperiodica.

## Nei corsi
- **Processi stocastici** (magistrale): Lezione 9 ("Limit distributions and periodicity", "Periodicity", "Periodicity, example"); `magistrale/Processi stocastici/riassunto_del_corso.tex` § Distribuzioni stazionarie e limiti. Fonti principali: `magistrale/Processi stocastici/Lezione_09_20_10.pdf` (lezione 9); `magistrale/Processi stocastici/riassunto_del_corso.tex` §Distribuzioni stazionarie e limiti.
- **Dinamiche su network** (magistrale): definito sul grafo, prima delle catene di Markov: per $\mathcal G$ connesso, $\mathrm{per}(i)=\gcd\{l:\ \exists$ walk chiuso di lunghezza $l$ in $i\}$. Teorema: se $\mathcal G$ è connesso, $\mathrm{per}(i)=\mathrm{per}(j)$ per ogni $i,j$; si chiama periodo del grafo $\mathrm{per}_{\mathcal G}$, e $\mathcal G$ è aperiodico se vale 1. Un cappio rende il grafo aperiodico; un grafo non orientato ha periodo 1 o 2; per l'anello $\mathrm{per}_{R_n}=\gcd\{2,n\}$ (1 se $n$ dispari, 2 se pari). Caratterizzazione algebrica: $\mathcal G$ connesso e aperiodico se e solo se esiste $N$ con $(W^N)_{ij}>0$ per ogni $i,j$. Il controesempio $P=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ ricompare come grafo-linea a 2 nodi su cui il modello di French-DeGroot oscilla. Fonti: `magistrale/Dinamiche su network/slide/Slides-1-Graphs.pdf` (pp. 59-70); `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (p. 12); `magistrale/Dinamiche su network/slide/Slides-5-Averaging-dynamics(con commenti).pdf` (p. 24).

## Prerequisiti
- [[Classi di comunicazione]]: il periodo è proprietà di classe
- [[Equazioni di Chapman-Kolmogorov]]: mcd dei tempi di ritorno possibili

## Porta a
- [[Distribuzione limite di una DTMC]]: richiede catena aperiodica
- [[Modello di French-DeGroot]]: senza aperiodicità le opinioni oscillano (Dinamiche su network)
- [[Matrice stocastica]]: con grafo aperiodico gli autovalori diversi da 1 hanno modulo minore di 1 (Dinamiche su network)

## Collegati
- Nessuno.
