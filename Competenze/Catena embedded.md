---
tipo: competenza
area: probabilita
corsi: [Processi stocastici]
livello: [magistrale]
aliases: [embedded chain, embedded DTMC, jump chain, catena dei salti, catena immersa]
tags: [competenza, area/probabilita]
---

# Catena embedded

> La DTMC $(Y_n)$ che registra solo la sequenza degli stati visitati da una CTMC, dimenticando i tempi di permanenza.

## Definizione / enunciato
Data una CTMC $(X_t)$, la catena embedded $(Y_n)_{n\ge0}$ è la DTMC degli stati visitati in ordine (la DTMC della costruzione 1), con
$$\mathbb P(Y_{n+1}=j\mid Y_n=i)=r(i,j)=\frac{q(i,j)}{\lambda(i)},\qquad r(i,i)=0 .$$
Convenzione per gli **stati assorbenti** ($\lambda(i)=0$): $r(i,j)=\delta_{ij}$, quindi solo per essi la matrice ha diagonale non nulla (pari a 1).

## Formule chiave
$$T_m=\sum_{i=0}^{m-1}\tau^{(i)},\qquad \tau^{(m)}\sim\mathrm{Exp}(\lambda(Y_m))\ \text{indipendenti dato }(Y_n).$$
Tempo di ritorno: $T^c_j=\sum_{m=0}^{T^d_j-1}\tau^{(m)}$ ($T^d_j$ = ritorno della embedded).

## Intuizione
La embedded dice *dove* va la catena, i tassi $\lambda$ dicono *quanto in fretta*. Le proprietà "di traiettoria" (irriducibilità, ricorrenza, transienza) passano dalla embedded alla CTMC se non c'è esplosione; quelle "temporali" (ricorrenza positiva, stazionaria, periodicità) no.

## Come si usa
Esempio 2 (lezione 10): da $Q=\begin{pmatrix}-3&1&2\\0&-4&4\\2&6&-8\end{pmatrix}$ si ottiene $P=\begin{pmatrix}0&1/3&2/3\\0&0&1\\1/4&3/4&0\end{pmatrix}$ dividendo ogni riga per $\lambda(i)$. Per il processo di Poisson $r(i,i+1)=1$ (catena deterministica). Es. F: con lo stato 2 assorbente la riga di $P$ diventa $(0,1,0,0,0)$. Nell'es. H la embedded di una CTMC a 3 stati è periodica (ritorni solo in numero pari di passi), mentre la CTMC non ha periodicità.

## Nei corsi
- **Processi stocastici** (magistrale): argomento 10 ("rapporto fra una CTMC e la sua embedded DTMC"). Fonti: `magistrale/Processi stocastici/Lezione_10_21_10.pdf` (lezione 10), `magistrale/Processi stocastici/Lezione_12_28_10.pdf` (lezione 12), `riassunto_del_corso.tex` §Catene di Markov a tempo continuo (lì le probabilità si chiamano $p(x,y)$, nelle slide $r(i,j)$), `suggested_exercises_CTMC.pdf` (es. F, G, H).

## Prerequisiti
- [[Generatore di una CTMC]]: probabilità di salto $q(x,y)/\lambda(x)$
- [[Catena di Markov a tempo discreto]]: è essa stessa una DTMC

## Porta a
- [[Esplosione di una CTMC]]: permanenze lungo la traiettoria embedded
- [[Ricorrenza e transienza di una CTMC]]: ricorrenza ereditata dalla catena embedded
- [[Misure stazionarie di CTMC ed embedded]]: misura stazionaria della catena dei salti

## Collegati
- —
