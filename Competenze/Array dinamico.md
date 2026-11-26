---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [dynamic array, std::vector, vector, vettore dinamico, size e capacity, resize, reserve, push_back, raddoppio e dimezzamento, ridimensionamento di un array]
tags: [competenza, area/informatica]
---

# Array dinamico

> Array che si ridimensiona aggiungendo o togliendo posizioni in fondo; raddoppiando e dimezzando lo spazio il costo di ridimensionamento diventa $O(1)$ ammortizzato. In C++ è `std::vector`.

## Definizione / enunciato
Ridimensionare un array in modo ingenuo costa $O(n)$ a ogni operazione: si crea un nuovo array $b$, si copiano gli elementi di $a$, si dealloca $a$ e si rinomina $b$ come $a$. **Approccio "spalmato"** (Crescenzi), con $n$ elementi in un array di $d$ posizioni:
- se $n=d$ e si inserisce, si **raddoppia** ($n=d+1$ elementi copiati in un array di $2d$);
- se $n=d/4$, si **dimezza** (array di $d/2$).

Dopo un raddoppio o un dimezzamento servono almeno $n-1$ inserimenti per un nuovo raddoppio e almeno $n/2$ cancellazioni per un nuovo dimezzamento.

## Formule chiave
Il costo $O(n)$ del ridimensionamento è spalmato su almeno $n/2$ operazioni: **$O(1)$ ammortizzato** in più per operazione.
`std::vector<T>` (`<vector>`): `size()` è il numero di elementi presenti, `capacity()` lo spazio disponibile, con `size() <= capacity()`. `resize(M)`: se $M\le$ `capacity()` inizializza solo i nuovi elementi, costo $\max(0,O(M-N))$; altrimenti alloca nuova memoria, copia, inizializza i nuovi elementi e rilascia la vecchia memoria, costo $O(M-N)$ più la riallocazione. `push_back()` si comporta in modo simile; `reserve()` riserva spazio senza cambiare la size.

## Intuizione
Chiedendo un po' di memoria in più del necessario, la riallocazione costosa diventa rara. La slide chiede "perché" il dimezzamento scatta a $n=d/4$: una risposta (non scritta nei lucidi) è che dopo il dimezzamento l'array è pieno a metà, quindi servono molte operazioni prima di un nuovo ridimensionamento in un verso o nell'altro, mentre dimezzando a $d/2$ un'alternanza di inserimenti e cancellazioni potrebbe ridimensionare a ogni operazione.

## Come si usa
`vec[i]` non controlla i limiti (`vec[50]` su un vettore di 10 elementi fa crashare il programma in modo imprevedibile), `vec.at(50)` sì (crash prevedibile). Avere capacità maggiore della size non autorizza ad accedere fuori da $[0,N)$. Chi sconsiglia `std::vector` a favore di `new`/`delete` "non ha idea del C++" (lezione 6).

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): `std::vector` nella lezione 6 di M. Cicuttin; raddoppio e dimezzamento nei lucidi Crescenzi (cap. 1), usati anche per pile e code. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione6.pdf` (p. 8-12); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 5-8).

## Prerequisiti
- [[Array in C++]]: un array di dimensione fissa alla volta
- [[Allocazione dinamica della memoria]]: la riallocazione usa new e delete

## Porta a
- [[Analisi ammortizzata]]: primo esempio di costo spalmato
- [[Pila (struttura dati)]]: pila realizzata su array ridimensionabile
- [[Coda (struttura dati)]]: coda circolare su array ridimensionabile
- [[Tabella hash]]: si mantiene m circa il doppio di n

## Collegati
- [[Standard Template Library]]: std::vector è il primo container della STL
- [[Lista concatenata]]: accesso diretto O(1) contro accesso sequenziale O(j+1)
