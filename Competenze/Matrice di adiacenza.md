---
tipo: competenza
area: network
corsi: [Matematica discreta, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: ["adjacency matrix", "A(G)", "matrice di adiacenza di un grafo", "etichettatura dei nodi"]
tags: [competenza, area/network]
---

# Matrice di adiacenza

> La matrice $n\times n$ che ha 1 in posizione $(i,j)$ se i nodi $i$ e $j$ sono collegati e 0 altrimenti. Traduce il grafo in algebra lineare. Cambiare le etichette dei nodi la sostituisce con una matrice simile.

## Definizione / enunciato
Sia $G=(V,E)$ un grafo indiretto senza cappi, con $V=\{1,\dots,n\}$. La **matrice di adiacenza** è $A=(a_{ij})$ con
$$a_{ij}=\begin{cases}1&\text{se }(i,j)\in E,\\0&\text{altrimenti.}\end{cases}$$

**Proprietà** (lezione 7):
- la diagonale è nulla, perché non ci sono cappi;
- $A=A^t$ è simmetrica, perché il grafo è indiretto;
- la somma della riga $i$ è $\deg(i)$;
- righe e colonne nulle corrispondono a nodi isolati.

**Dipendenza dall'etichettatura** (Teor. 6.2.4, Cor. 6.2.5). Il grafo resta lo stesso se si cancellano le etichette, ma un'altra numerazione dà un'altra matrice $A'$. Se le due numerazioni differiscono per la permutazione $\sigma$, allora $a'_{\sigma i,\sigma j}=a_{ij}$ e
$$A'=P_\sigma^{\,t}AP_\sigma=P_\sigma^{-1}AP_\sigma,$$
dove $P_\sigma$ è la matrice di permutazione di $\sigma$, con un solo 1 per riga e per colonna. Quindi $A$ e $A'$ sono **simili**.

## Formule chiave
$$A(K_n)=J_n-I_n,\qquad A(K_{m,n})=\begin{pmatrix}O_m&J_{m,n}\\J_{n,m}&O_n\end{pmatrix},$$
dove $J$ è la matrice con tutti gli elementi uguali a 1 e $O$ la matrice nulla.

## Intuizione
La riga $i$ è l'elenco dei vicini di $i$. Rinumerare i nodi permuta insieme righe e colonne, quindi tutte le quantità invarianti per similitudine (autovalori, traccia, rango, determinante) sono proprietà del grafo e non della numerazione.

## Come si usa
- **Dal grafo alla matrice e viceversa:** si sceglie un'etichettatura e si legge l'adiacenza. La lezione 7 mostra lo stesso grafo con due etichettature legate da una permutazione circolare $1\to2\to3\to1$.
- **Grafi sconnessi:** numerando i nodi componente per componente, $A$ è diagonale a blocchi.
- È il punto di partenza per contare i percorsi ($A^k$) e per lo spettro.

## Nei corsi
- **Matematica discreta** (triennale): lezione 7, inizio della parte spettrale. Fonti: `triennale/ANNO 1/Matematica discreta/teoria/07 - Grafi .pdf` (lezione 7, pp. 35-37); `triennale/ANNO 1/Matematica discreta/teoria/Lectures Notes prof. Tilli.pdf` (§6.2, Def. 6.2.1, Teor. 6.2.4, pp. 124-127; richiami di algebra lineare §6.1).
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, come **struttura di dati** per i grafi: $A[i][j]=1$ se e solo se $(i,j)\in E$, per $0\le i,j\le n-1$; spazio $\Theta(n^2)$, $O(1)$ per stabilire se $(i,j)\in E$, $O(n)$ per scandire gli archi incidenti a un nodo; simmetrica per i grafi non orientati; per i grafi pesati si affianca una matrice $P$ dei pesi. Esempio sul grafo dei voli tra 9 aeroporti. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 15-16).

## Prerequisiti
- [[Grafo]]: nodi e archi
- [[Isomorfismo di grafi]]: una rietichettatura è un isomorfismo
- [[Matrice di permutazione]]: $A'=P_\sigma^tAP_\sigma$

## Porta a
- [[Potenze della matrice di adiacenza]]: $(A^k)_{ij}$ conta i percorsi
- [[Spettro di un grafo]]: gli autovalori di $A$

## Collegati
- [[Matrici simili]]: matrici di adiacenza dello stesso grafo sono simili
