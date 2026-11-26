---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["column generation", "pricing problem", "problema di pricing", "cutting stock", "cutting stock problem", "problema del taglio", "pattern di taglio", "cutting pattern", "branch and price", "branch-and-price"]
tags: [competenza, area/ottimizzazione]
---

# Generazione di colonne

> Per LP con un numero enorme di variabili si parte da poche colonne e si aggiunge solo quella con costo ridotto negativo, trovata risolvendo un sottoproblema di pricing che usa le variabili duali del problema ristretto.

## Definizione / enunciato
**Cutting stock**: rotoli di larghezza $L$ da tagliare per soddisfare la domanda $d_i$ di pezzi larghi $w_i\le L$, minimizzando i rotoli usati. Il modello con $\delta_j\in\{0,1\}$ (uso del rotolo $j$) e $x_{ij}\in\mathbb Z_+$ ($\sum_iw_ix_{ij}\le L\delta_j$, $\sum_jx_{ij}=d_i$) è corretto ma soffre di vincoli big-M e simmetria. Con un insieme $K$ di **pattern di taglio** ($a_{ik}$ pezzi $i$ dal pattern $k$) e $\gamma_k$ rotoli tagliati col pattern $k$:
$$\min\sum_{k\in K}\gamma_k\quad\text{s.t. }\sum_{k\in K}a_{ik}\gamma_k=d_i,\ i\in[n],\quad\gamma_k\in\mathbb Z_+ .$$
$|K|$ è enorme, ma pochi pattern sono utili: si risolve il rilassamento LP ristretto a $K'\subset K$.

## Formule chiave
Con le duali $\pi_i$ dei vincoli di domanda il costo ridotto di un pattern è
$$\hat c_k=1-\sum_{i\in[n]}\pi_ia_{ik},$$
e la colonna di costo ridotto minimo si trova con lo **zaino intero**
$$\max\sum_{i\in[n]}\pi_iy_i\quad\text{s.t. }\sum_iw_iy_i\le L,\ y_i\in\mathbb Z_+ :$$
se l'ottimo supera 1 il nuovo pattern entra nel problema ristretto, altrimenti la base corrente è ottima.

## Intuizione
È il simplesso in cui la scelta della variabile entrante non si fa scorrendo le colonne, ma ottimizzando su di esse: la complessità dei vincoli resta nascosta nel sottoproblema di pricing.

## Come si usa
Il valore del rilassamento è un lower bound per un **branch and price**; in alternativa si generano colonne e poi si risolve un unico problema intero sulle colonne trovate (euristica). È il cuore della decomposizione di Dantzig-Wolfe.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Cutting stock by column generation" e "Generating a new column by pricing". Fonti: `magistrale/Ottimizzazione in condizione di incertezza/07 - Decomposition.pdf` (p. 23-26).

## Prerequisiti
- [[Metodo del simplesso]]: entra la variabile con costo ridotto negativo
- [[Dualità nella programmazione lineare]]: prezzi duali del problema ristretto
- [[Problema dello zaino]]: il sottoproblema di pricing

## Porta a
- [[Decomposizione di Dantzig-Wolfe]]: schema generale di cui è il motore

## Collegati
- [[Formulazioni basate su colonne]]: modelli a pattern come lo staffing
- [[Algoritmo branch and bound]]: con la generazione di colonne diventa branch and price
- [[Decomposizione di Benders]]: genera dinamicamente vincoli (righe) invece di colonne
