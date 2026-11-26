---
tipo: competenza
area: network
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [transitive closure, chiusura transitiva, matrice A*, raggiungibilità, reachability]
tags: [competenza, area/network]
---

# Chiusura transitiva di un grafo

> Grafo $G^*$ con un arco $(i,j)$ per ogni coppia di nodi collegati da un cammino in $G$; la sua matrice di adiacenza $A^*$ risponde in tempo costante alle domande di raggiungibilità.

## Definizione / enunciato
$G^*=(V,E^*)$ è la **chiusura transitiva** di $G=(V,E)$ se per ogni coppia $i,j\in V$ vale $(i,j)\in E^*$ se e solo se esiste un cammino in $G$ da $i$ a $j$.
Si parte dalla matrice di adiacenza $A$ modificata con tutti 1 sulla diagonale principale.

## Formule chiave
$$A^2[i][j]=\sum_{k=0}^{n-1}A[i][k]\cdot A[k][j]\ne0\iff\text{esiste un cammino di lunghezza 2 da }i\text{ a }j,$$
e in generale $A^r=A^{r-1}\times A$ rappresenta i cammini di lunghezza $r$ (con la diagonale a 1, anche quelli più corti). Se $A^r=A^{r-1}$ tutti i cammini sono rappresentati e $A^r=A^*$.
Calcolo per quadrature successive:
```text
A* = A;
do {
    B = A*;
    A* = B × B;
} while (A* != B);
return A*;
```
Al più $\log(n-1)=\Theta(\log n)$ iterazioni (a ogni quadratura raddoppia la lunghezza dei cammini rappresentati), costo totale $\Theta(n^3\log n)$ con il prodotto elementare di matrici.

## Intuizione
Gli 1 sulla diagonale fanno sì che $A^r$ contenga i cammini di lunghezza **al più** $r$, non esattamente $r$; un cammino semplice ha al più $n-1$ archi, quindi la successione si stabilizza.

## Come si usa
Esempio dei lucidi: un grafo di 11 nodi in cui $A^3=A^*$. Una volta calcolata $A^*$, la presenza di un cammino tra due nodi si verifica in $O(1)$. Un prodotto di matrici più veloce (Strassen) abbassa il costo.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi, capitolo sui grafi. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo07.pdf` (p. 20-24).

## Prerequisiti
- [[Matrice di adiacenza]]: punto di partenza, con diagonale a 1
- [[Potenze della matrice di adiacenza]]: A^r conta i cammini di lunghezza r

## Porta a
- Nessuno nel corso.

## Collegati
- [[Algoritmo di Strassen]]: il costo dipende dal prodotto di matrici
- [[Componenti connesse di un grafo]]: in un grafo non orientato A* dice quali nodi stanno nella stessa componente
