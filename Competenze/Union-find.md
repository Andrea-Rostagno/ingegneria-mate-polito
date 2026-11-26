---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [liste disgiunte, insiemi disgiunti, disjoint sets, union-find, Unisci, Appartieni, Crea, unione per dimensione]
tags: [competenza, area/informatica]
---

# Union-find

> Struttura per gestire una partizione di $m$ elementi sotto una sequenza di unioni e test di appartenenza allo stesso insieme; con liste e "unione della più corta nella più lunga" le Unisci costano $O(\log m)$ ammortizzato.

## Definizione / enunciato
Si rappresenta una **partizione** di un insieme di $m$ elementi con liste disgiunte, una per sottoinsieme; inizialmente ci sono $m$ liste di un elemento. Operazioni:
- **unione**: prende due liste e le unisce;
- **appartenenza**: stabilisce se due elementi stanno nella stessa lista.

**Soluzione banale**: riferimenti al primo e all'ultimo elemento di ogni lista; unione in $O(1)$ per concatenazione, appartenenza $O(m)$ per scansione, in totale $O(nm)$ per $n$ operazioni.
**Soluzione alternativa**: ogni lista ha `inizio`, `fine`, `lunghezza`, e ogni elemento ha un riferimento `lista` alla propria lista. `Appartieni(x, y)` confronta `x.lista == y.lista` in $O(1)$; `Unisci(x, y)` cambia il riferimento di tutti gli elementi della lista **più corta** facendoli puntare alla più lunga, poi concatena e aggiorna la lunghezza.

## Formule chiave
Una sequenza di $n_1<m$ operazioni Unisci costa $O(n_1\log m)$; con $n_1$ unioni e $n_2$ appartenenze il tempo totale è
$$O(n_1\log n_1+n_2)=O(n\log n),$$
molto meno di $O(nm)$. Costo ammortizzato di Unisci: $O(\log m)$.

## Intuizione
Il costo di Unisci è il numero di riferimenti modificati, cioè quante volte un elemento cambia lista. Un elemento che cambia lista finisce in una lista **almeno doppia** della sua: partendo da lunghezza 1 e arrivando al più a $m$, può cambiare lista al più $O(\log m)$ volte.

## Come si usa
È la struttura con cui l'algoritmo di Kruskal verifica se un arco chiude un ciclo (estremi già nella stessa componente) e unisce le componenti. Problema noto come **union-find**.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 5, "Casualità e ammortamento". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo05.pdf` (p. 20-27).

## Prerequisiti
- [[Lista concatenata]]: ogni sottoinsieme è una lista

## Porta a
- [[Algoritmo di Kruskal]]: verifica dei cicli e unione delle componenti

## Collegati
- [[Analisi ammortizzata]]: costo O(log m) ammortizzato per Unisci
- [[Partizioni di un insieme finito]]: la struttura rappresenta una partizione
