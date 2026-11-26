---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["branch-and-bound algorithm", "enumerazione implicita", "implicit enumeration", "albero di ricerca", "soluzione incombente", "incumbent solution", "branching", "bounding", "potatura dell'albero di ricerca"]
tags: [competenza, area/ottimizzazione]
---

# Algoritmo branch and bound

> Metodo di enumerazione implicita per problemi misti-interi: si partiziona la regione in sottoproblemi (branching) e si eliminano quelli il cui bound ottimistico non può battere la miglior soluzione intera trovata (bounding).

## Definizione / enunciato
Branching: $S=S_1\cup\dots\cup S_q$ (di norma disgiunti), $\min_{\mathbf x\in S}f=\min_i\min_{\mathbf x\in S_i}f$. Per ogni sottoproblema un lower bound $\beta[P(S_k)]\le\nu[P(S_k)]$ (problema di minimo); l'upper bound è il valore $\nu^*$ della **soluzione incombente**.

Algoritmo di base:
1. lista dei nodi aperti $=\{P(S)\}$, $\nu^*=+\infty$;
2. se la lista è vuota, stop (incombente ottima; se $\nu^*=+\infty$ problema non ammissibile); altrimenti scegli un nodo;
3. **bounding**: risolvi il rilassato e calcola $\beta(S_k)$, con soluzione $\mathbf x_k$;
4. se $\mathbf x_k$ è intera elimina il nodo e, se $f(\mathbf x_k)<\nu^*$, aggiorna l'incombente;
5. se il rilassato non è ammissibile elimina il nodo;
6. se $\beta(S_k)\ge\nu^*$ elimina il nodo;
7. altrimenti sostituisci il nodo con i figli (branching).

## Formule chiave
Branching su variabile intera con valore frazionario $\bar x_j$ nel rilassato: $x_j\le\lfloor\bar x_j\rfloor$ oppure $x_j\ge\lfloor\bar x_j\rfloor+1$ (per $\bar x_j=4.2$: $x_j\le4$ e $x_j\ge5$). Tolleranza: $\beta(S_k)\ge\nu^*-\epsilon$ o $\beta(S_k)\ge\nu^*(1-\epsilon)$; con $\epsilon=0.01$ la soluzione trovata non è migliorabile più dell'1%.

## Intuizione
Non si può potare confrontando due lower bound fra loro (servono solo a scegliere il ramo più promettente); si pota confrontando un bound con una soluzione ammissibile. Il bound di un figlio non può migliorare quello del padre, perché si aggiungono vincoli.

## Come si usa
Esempio sullo zaino $\max10x_1+7x_2+25x_3+24x_4$, $2x_1+x_2+6x_3+5x_4\le7$: $P_0$: $(1,1,0,0.8)$, 36.2; $x_4=0$ ($P_1$): 33.67; $x_4=1$ ($P_2$): $(0.5,1,0,1)$, 36; da $P_2$, $x_1=0$ ($P_3$): 35.17; $x_1=1$ ($P_4$): $(1,0,0,1)$, 34 intera, incombente; $P_1$ potato ($33.67<34$, dati interi); da $P_3$, $x_3=0$: 31, $x_3=1$: non ammissibile. Ottimo $(1,0,0,1)$. Questioni aperte: scelta del nodo e della variabile, soluzione "a caldo" dei figli con il simplesso duale, euristiche per migliorare l'incombente. I solver commerciali usano il rilassamento continuo; in alternativa il rilassamento lagrangiano.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap8.pdf` (p. 4-12).

## Prerequisiti
- [[Programmazione lineare mista-intera]]: problemi da risolvere
- [[Rilassamento continuo]]: fornisce il bound in ogni nodo

## Porta a
- [[Disuguaglianze di cover]]: tagli che rafforzano i bound (branch and cut)

## Collegati
- [[Problema dello zaino]]: esempio dell'albero di ricerca
- [[Dualità nella programmazione lineare]]: simplesso duale per risolvere i figli a caldo
- [[Rilassamento lagrangiano]]: bound alternativo
- [[Ottimizzazione basata sui costi]]: il branch and bound sceglie il piano di esecuzione di costo minimo
