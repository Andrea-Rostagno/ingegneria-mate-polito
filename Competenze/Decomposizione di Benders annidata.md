---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["nested Benders decomposition", "nested L-shaped method", "L-shaped annidato", "Benders annidata", "nested decomposition"]
tags: [competenza, area/ottimizzazione]
---

# Decomposizione di Benders annidata

> L-shaped applicato ricorsivamente all'albero degli scenari: ogni nodo è un sottoproblema che riceve la decisione del padre, e i tagli costruiti dai duali dei figli risalgono l'albero all'indietro.

## Definizione / enunciato
Ogni nodo $n$ (stadio $t$, insieme $\mathcal K_t$) ha la propria funzione valore e, se non è una foglia, l'approssimazione della funzione valore dei figli $C(n)$. Con ricorso relativamente completo e duali ammissibili a ogni stadio (niente tagli di ammissibilità):
1. **Inizializzazione**: per ogni nodo $\min\mathbf c_n^T\mathbf x_n$ s.t. $W\mathbf x_n=\mathbf h_n-T_n\mathbf x_{a(n)}$, $\mathbf x_n\ge\mathbf 0$; nelle foglie anche il duale $\max(\mathbf h_n-T_n\mathbf x_{a(n)})^T\mathbf u_n$, $W^T\mathbf u_n\le\mathbf c_n$.
2. **Passo backward**: per ogni nodo dello stadio $T-1$, poi $T-2$, ... si aggiunge un taglio di ottimalità costruito con i duali dei figli.
3. Si ripetono passi forward e backward fino a convergenza ($\mathbf x_1$ non cambia) o a un limite di tempo.

## Formule chiave
Con probabilità condizionate $P[n'\mid n]$:
$$E^{(n)}=\sum_{n'\in C(n)}P[n'\mid n]\,T_{n'}^T\mathbf u_{n'},\qquad e^{(n)}=\sum_{n'\in C(n)}P[n'\mid n]\,\mathbf h_{n'}^T\mathbf u_{n'},$$
taglio $\theta_n+(E^{(n)})^T\mathbf x_n\ge e^{(n)}$ nel problema $\min\theta_n+\mathbf c_n^T\mathbf x_n$; nei nodi interni $e^{(n)}$ include anche il contributo $\sum_j\sigma_je_j^{(n')}$ dei duali $\sigma_j$ (con $\sum_j\sigma_j=1$) dei tagli già presenti nei figli. Nella dispensa i due coefficienti sono scritti entrambi $e$ (uno vettoriale, uno scalare): $E$ è usato qui solo per distinguerli, e la posizione delle trasposte è da verificare sul PDF.

## Intuizione
Ogni livello vede il livello sotto solo attraverso i tagli, cioè iperpiani di supporto della sua funzione valore attesa: la stessa idea di Kelley-Benders, propagata stadio per stadio.

## Come si usa
Esempio delle lezioni: produzione di condizionatori su 3 mesi, fino a 200 unità al mese in regime ordinario a 100 €/unità, straordinario a 300 €/unità, scorta a 50 €/unità al mese, domanda 100 nel mese 1 e 100 o 300 equiprobabile nei mesi 2 e 3; nel modello i dati compaiono riscalati (capacità 2, costi 1, 3, 0.5, domande 1 o 3). Dai duali delle foglie si ottiene il taglio $2y_1^2+\theta_1^2\ge3$ al nodo del mese 2, poi alla radice $2.25\,y_1+\theta_1\ge5.75$; il sottoproblema radice dà $x_1=2$, $y_1=1$, $w_1=0$, $\theta_1=3.5$ (produrre una unità in più per lo stock).

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): "Nested Benders Decomposition" con esempio. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 5-15).

## Prerequisiti
- [[Metodo L-shaped]]: la procedura applicata a ogni nodo
- [[Albero degli scenari]]: struttura percorsa dall'algoritmo
- [[Programmazione stocastica multistadio]]: il problema risolto

## Porta a
- [[Stochastic dual dynamic programming]]: variante campionata per alberi grandi

## Collegati
- [[Decomposizione di Benders]]: tagli di ottimalità dai duali
