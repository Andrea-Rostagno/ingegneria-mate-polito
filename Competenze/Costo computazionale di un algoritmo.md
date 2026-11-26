---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [complessità computazionale, complessità di un algoritmo, analisi di complessità, modello RAM, Random Access Machine, caso pessimo, caso peggiore, caso medio, costo uniforme, dimensione dell'input, algoritmo polinomiale]
tags: [competenza, area/informatica]
---

# Costo computazionale di un algoritmo

> Numero di operazioni elementari (tempo) e di celle di memoria (spazio) che un algoritmo usa, in funzione della dimensione $n$ dell'input, valutato al caso pessimo o medio.

## Definizione / enunciato
**Modello RAM** (Random Access Machine), basato sullo schema di von Neumann: contatore di programma, registro accumulatore, memoria illimitata, processore con operazioni aritmetiche, di confronto, logiche, di trasferimento e di controllo. **Costo uniforme**: ogni operazione costa una costante, indipendente da $n$.
- **tempo** = numero di operazioni RAM eseguite;
- **spazio** = numero di celle di memoria occupate, escluse quelle dell'input.

La **dimensione $n$** è il numero di bit, di caratteri, di elementi (array, liste, insiemi) o di celle di memoria occupate dai dati (ciascuna con $O(\log n)$ bit).
Per un problema $\Pi$: **caso pessimo** = costo massimo tra le istanze di dimensione $n$; **caso medio** = costo mediato tra le istanze di dimensione $n$.
Un algoritmo è **polinomiale** se esistono $c,n_0>0$ tali che il numero di passi elementari è al più $n^c$ per ogni input di dimensione $n$ e ogni $n>n_0$.

## Formule chiave
Regole per il caso pessimo:
- `IF (guardia) {blocco1} ELSE {blocco2}`: costo(guardia) + max{costo(blocco1), costo(blocco2)} (nella slide la parentesi è scritta male);
- `FOR (i = 0; i < m; i++) {corpo}`: $\sum_{i=0}^{m-1} t_i$, con $t_i$ costo del corpo all'iterazione $i$;
- `WHILE (guardia) {corpo}`: $\sum_{i=0}^{m}(t'_i+t_i)$, con $m$ volte in cui la guardia è soddisfatta e $t'_i$ costo della guardia;
- chiamata di funzione: costo del corpo più il passaggio dei parametri; sequenza: somma dei costi.

## Intuizione
Il costo uniforme astrae dalla macchina concreta: conta l'ordine di crescita al crescere di $n$, espresso con la notazione asintotica. L'aumento di velocità della macchina non salva un algoritmo esponenziale: per la Torre di Hanoi ($2^n-1$ mosse) moltiplicare per $X$ le operazioni al secondo aggiunge solo $\log_2 X$ dischi risolvibili, mentre per un algoritmo con $n^2$ mosse la dimensione risolvibile cresce di un fattore moltiplicativo.

## Come si usa
Applicare le regole ai cicli annidati: per SelectionSort il ciclo esterno al passo $i$ costa $O(n-i)$, in totale $\sum_{i=0}^{n-1}(n-i)=\sum_{i=1}^{n}i=\frac{n(n+1)}{2}=O(n^2)$.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi introduttivi Crescenzi, regole applicate implicitamente nel resto del corso. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Introduzione.pdf` (p. 11-16, 31-34); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 13).

## Prerequisiti
- [[Algoritmo]]: si misura il costo dei suoi passi
- [[Simboli di Landau]]: O, Omega e Theta esprimono l'ordine di crescita

## Porta a
- [[Classi P e NP]]: classificazione dei problemi per costo
- [[BLAS]]: conteggio dei FLOP
- [[Divide et impera]]: il costo si scrive con una ricorrenza
- [[Ordinamento per selezione]]: primo esempio di analisi O(n^2)
- [[Ordinamento per inserimento]]: analisi al caso pessimo e al caso migliore
- [[Analisi ammortizzata]]: costo medio su una sequenza di operazioni
- [[Limite inferiore per l'ordinamento per confronti]]: costo minimo di ogni algoritmo per un problema
- [[Backtracking (algoritmi)]]: costo esponenziale nel caso pessimo

## Collegati
- [[Torre di Hanoi]]: esempio di algoritmo esponenziale
