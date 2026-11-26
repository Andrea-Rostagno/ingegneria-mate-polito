---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [binary search tree, BST, ABR, dizionario ordinato, predecessore, successore, MSA, minimo del sottoalbero]
tags: [competenza, area/informatica]
---

# Albero binario di ricerca

> Albero binario in cui ogni chiave è maggiore di quelle del sottoalbero sinistro e minore di quelle del destro: ricerca, inserimento e cancellazione in $O(h)$.

## Definizione / enunciato
**Proprietà di ricerca**: per ogni nodo $u$, $e\in T(u.sx)\Rightarrow e.\text{chiave}\le u.\text{dato.chiave}$ e $e\in T(u.dx)\Rightarrow e.\text{chiave}\ge u.\text{dato.chiave}$. La visita simmetrica restituisce le chiavi in ordine. Realizza un **dizionario ordinato**, che oltre a Ricerca, Inserisci, Cancella supporta Predecessore($k$) (chiave massima $\le k$), Successore($k$) (chiave minima $\ge k$), Intervallo($k,k'$) e Rango($k$).
- **Ricerca**: come la ricerca binaria, tre casi ($k$ uguale, minore o maggiore della chiave in $u$).
- **Inserimento**: si cerca $k=e.\text{chiave}$ fino a un riferimento `null`, che si sostituisce con una foglia contenente $e$; la ricorsione aggancia la foglia al padre.
- **Cancellazione**: se $u$ è una foglia o ha un solo figlio lo si sostituisce con l'altro figlio; se ha due figli si mette al suo posto il successore $w$ (minimo di $T(u.dx)$, trovato con `MSA`) e si cancella $w$, che ha al più un figlio.

## Formule chiave
```text
Ricerca( u, k ):
    if (u == null) return null;
    if (k == u.dato.chiave) return u.dato;
    else if (k < u.dato.chiave) return Ricerca( u.sx, k );
    else return Ricerca( u.dx, k );

MSA( u ):  while (u.sx != null) u = u.sx;  return u;
```
Costo di tutte le operazioni: $O(h)$, con $h$ altezza dell'albero; caso pessimo $h=\Theta(n)$.

## Intuizione
La forma dell'albero dipende dall'ordine di inserimento: chiavi inserite in ordine crescente o decrescente producono una "lista" di altezza $n$; in ordine casuale l'altezza è logaritmica in media. Per garantire $O(\log n)$ al caso pessimo servono alberi bilanciati (AVL).

## Come si usa
Esercizio tipico: inserire una sequenza di chiavi disegnando l'albero, poi cancellare un nodo con due figli sostituendolo con il successore. Uso citato nei lucidi: traduzione da indirizzi logici a fisici nella memoria virtuale.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 4, dizionari. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo04.pdf` (p. 3, 17-22).

## Prerequisiti
- [[Albero binario]]: struttura di base
- [[Visite di alberi binari]]: la visita simmetrica dà la sequenza ordinata
- [[Ricerca binaria]]: la ricerca nell'albero segue gli stessi tre casi

## Porta a
- [[Albero AVL]]: versione bilanciata con altezza O(log n)

## Collegati
- [[Tabella hash]]: dizionario alternativo senza ordine tra le chiavi
- [[B+-tree]]: albero di ricerca bilanciato per i dati su disco
