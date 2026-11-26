---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["Bellman's principle of optimality", "principle of optimality", "principio di ottimalità", "programmazione dinamica", "dynamic programming", "ricorsione della programmazione dinamica", "funzione valore del cammino minimo"]
tags: [competenza, area/ottimizzazione]
---

# Principio di ottimalità di Bellman

> "Una politica ottima è composta da sotto-politiche ottime": il valore ottimo da uno stato si ottiene minimizzando costo immediato più valore ottimo dallo stato successivo. È il fondamento della programmazione dinamica.

## Definizione / enunciato
Bellman (1953). Nel problema del cammino minimo su $G=(V,A)$ con lunghezze $l_{ij}$, se il cammino $P_{s\to t}$ è ottimo e passa per $i$, allora anche $P_{s\to i}$ e $P_{i\to t}$ sono ottimi. Detta $V(i)=L(i\to^*t)$ la lunghezza del cammino minimo da $i$ a $t$:

## Formule chiave
$$V(t)=0,\qquad V(i)=\min_{j:(i,j)\in A}\big\{l_{ij}+V(j)\big\}.$$
Procedura iterativa: si parte da $V^{(0)}=[+\infty,\dots,+\infty,0]$ e si aggiornano i valori con la ricorsione fino a stabilità.

## Intuizione
Il futuro ottimo da un nodo non dipende da come ci si è arrivati: basta quindi conoscere la funzione valore degli stati successori per decidere localmente. Questo trasforma un problema su cammini (esponenziali) in una ricorsione su stati; nel caso stocastico il minimo del costo futuro diventa un valore atteso (equazione di Bellman).

## Come si usa
È la prima parte della lezione su programmazione dinamica e reinforcement learning ("Fondamenti di Dynamic Programming"): dal cammino minimo deterministico si passa ai processi di Markov con ricompensa e ai processi decisionali di Markov. Nella programmazione stocastica multistadio la stessa ricorsione si scrive con le funzioni valore attese $\mathcal Q_t$.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Problema del cammino minimo (Shortest Path Problem)" nella parte 1 della lezione 3. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_3.pdf` (p. 7-9).

## Prerequisiti
- [[Problema dei cammini minimi]]: il problema su cui si enuncia il principio

## Porta a
- [[Equazione di Bellman]]: versione stocastica con valore atteso
- [[Processo decisionale di Markov]]: ottimizzazione di politiche in ambiente aleatorio

## Collegati
- [[Programmazione stocastica multistadio]]: ricorsione di funzioni valore attese
- [[Metodo del punto fisso]]: la procedura iterativa aggiorna una stima di $V$
