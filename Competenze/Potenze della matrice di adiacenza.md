---
tipo: competenza
area: network
corsi: [Matematica discreta, Programmazione e calcolo scientifico, Dinamiche su network]
livello: [triennale, magistrale]
aliases: ["powers of the adjacency matrix", "numero di percorsi di lunghezza k", "counting walks", "A^k", "traccia di A^3 e triangoli", "traccia di A^2 e numero di archi", "powers of the weight matrix", "peso di un walk", "potenze della matrice dei pesi"]
tags: [competenza, area/network]
---

# Potenze della matrice di adiacenza

> L'elemento $(i,j)$ di $A^k$ conta i percorsi di lunghezza $k$ dal nodo $i$ al nodo $j$. Le tracce di $A^2$ e $A^3$ contano quindi gli archi e i triangoli del grafo.

## Definizione / enunciato
**Teorema 6.2.8.** Sia $G$ un grafo con matrice di adiacenza $A$ e nodi $\{1,\dots,n\}$. Per ogni $k\ge1$, $(A^k)_{ij}$ è il numero di percorsi di lunghezza $k$ in $G$ che partono da $i$ e arrivano a $j$.

*Dimostrazione per induzione su $k$.* Per $k=1$ è la definizione di $A$. Se vale per $M=A^k$, allora
$$(A^{k+1})_{ij}=\sum_{l=1}^nM_{il}\,a_{lj}=\sum_{l\in J}M_{il},$$
dove $J$ è l'insieme dei vicini di $j$. Ogni percorso di lunghezza $k+1$ da $i$ a $j$ è un percorso di lunghezza $k$ da $i$ a un vicino $l$ di $j$, seguito dall'arco $(l,j)$. Si conclude con la regola della somma, spezzando secondo l'ultimo arco.

**Corollario 6.2.9.** Per ogni nodo $i$:
- (a) $(A^2)_{ii}=\deg(i)$;
- (b) $\operatorname{tr}A^2=2|E|=\sum_v\deg(v)$;
- (c) $\operatorname{tr}A^3=6\cdot(\text{numero di triangoli di }G)$.

## Formule chiave
$$(A^k)_{ij}=\#\{\text{percorsi } i\to j \text{ di lunghezza } k\},\qquad \operatorname{tr}A^k=\#\{\text{percorsi chiusi di lunghezza }k\}\ge0.$$

## Intuizione
Moltiplicare per $A$ significa "fare un passo lungo un arco". Un percorso chiuso di lunghezza 2 da $i$ è sempre del tipo $i\to j\to i$, e ce n'è uno per ogni vicino: ecco il grado. Ogni triangolo $ABC$ dà 6 percorsi chiusi di lunghezza 3: 3 punti di partenza per 2 versi di percorrenza.

## Come si usa
- **Contare archi e triangoli** di un grafo a partire dalla matrice, senza disegnarlo.
- **Momenti spettrali:** poiché $\operatorname{tr}A^p=\sum_i\lambda_i^p$, si ottengono le proprietà dello spettro $\sum\lambda_i^2=2|E|$ e $\sum\lambda_i^3=6\cdot\#\text{triangoli}$. Si ha inoltre $\sum\lambda_i^p\ge0$ ed è intero.
- **Bipartizione:** in un grafo bipartito non ci sono percorsi chiusi di lunghezza dispari, quindi $\operatorname{tr}A^p=0$ per $p$ dispari.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, prima delle proprietà generali dello spettro. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 40-42); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (Teor. 6.2.8, Cor. 6.2.9, pp. 127-129).
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, usate per la **chiusura transitiva**: con la diagonale di $A$ posta a 1, $A^r[i][j]=\sum_{k}A^{r-1}[i][k]\cdot A[k][j]$ è non nullo se e solo se esiste un cammino di lunghezza $r$ da $i$ a $j$; quando $A^r=A^{r-1}$ si è ottenuta $A^*$, calcolata per quadrature successive in $\Theta(n^3\log n)$. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 20-24).
- **Dinamiche su network** (magistrale): versione pesata. Peso di un walk $\gamma=(i_0,\dots,i_l)$: $W_\gamma=\prod_{h=1}^lW_{i_{h-1}i_h}$; teorema (per induzione su $l$): $(W^l)_{ij}=\sum_{\gamma:\,i\to j,\ l(\gamma)=l}W_\gamma$. Conseguenze: (1) $(W^l)_{ij}>0$ se e solo se c'è un walk di lunghezza $l$ da $i$ a $j$; (2) $\mathcal G$ connesso se e solo se per ogni $i,j$ esiste $l>0$ con $(W^l)_{ij}>0$; (3) $\mathcal G$ connesso e aperiodico se e solo se esiste $N$ con $(W^N)_{ij}>0$ per ogni $i,j$ (prova più delicata). Esempi delle slide: per $C_5$ le potenze $W^2,W^3,W^4$ diventano tutte positive ($W^4$ ha diagonale 6), mentre per $C_4$ (bipartito) $W^l$ alterna zeri a ogni passo ($W^4$ ha entrate 8 e 0). Per grafi semplici: $(W^2)_{ii}=w_i$, $\operatorname{Tr}(W^2)=|\mathcal E|$ (coppie ordinate), $\operatorname{Tr}(W^3)=6\cdot$ numero di triangoli. Fonti: `magistrale/Dinamiche su network/slide/Slides-2-Algebraic-Graphs.pdf` (pp. 2-23).

## Prerequisiti
- [[Matrice di adiacenza]]: $A^k$ è definita a partire da $A$
- [[Principio di induzione]]: dimostrazione per induzione su $k$
- [[Regola della somma]]: si spezza secondo l'ultimo arco

## Porta a
- [[Spettro di un grafo]]: i momenti spettrali $\sum\lambda_i^p=\operatorname{tr}A^p$
- [[Spettro dei grafi bipartiti]]: nessun percorso chiuso di lunghezza dispari
- [[Matrice stocastica]]: la positività di $P^N$ caratterizza connessione e aperiodicità (Dinamiche su network)
- [[Proprietà contrattive delle matrici stocastiche]]: esiste $m$ con $P^m$ a entrate positive (Dinamiche su network)

## Collegati
- [[Invarianti di un endomorfismo]]: la traccia è la somma degli autovalori
