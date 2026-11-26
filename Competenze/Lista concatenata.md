---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [linked list, lista semplicemente concatenata, singly-linked list, lista doppia, doubly linked list, lista doppiamente concatenata, nodo, successore, predecessore, accesso sequenziale]
tags: [competenza, area/informatica]
---

# Lista concatenata

> Sequenza di nodi sparsi in memoria, ciascuno con il dato e il riferimento al successivo (e, nelle liste doppie, al precedente): inserimenti e cancellazioni in $O(1)$, accesso all'elemento $i$ in $O(i+1)$.

## Definizione / enunciato
Una lista è l'indirizzo $a$ del primo elemento più posizioni sparse, dovute alla gestione dinamica della memoria. Ogni elemento $x$ ha `x.dato` (contenuto) e `x.succ` (successore, `null` se non esiste); nelle **liste doppie** anche `x.pred`. L'accesso è **sequenziale**: per arrivare ad $a_j$ si scandiscono $a_0,a_1,\dots,a_j$ in $O(j+1)$, oppure $O(k)$ partendo da $a_{j-k}$. Come dizionario (cap. 4) una lista doppia è un descrittore con `inizio`, `fine` e `lunghezza`.

## Formule chiave
```text
p = a; j = 0;                       // accesso alla posizione i
while ((p != null) && (j < i)) { p = p.succ; j = j+1; }

x.succ = a;  a = x;                 // inserimento in cima

p.succ = x.succ;  x.succ = null;    // cancellazione di x, successore di p

x.succ.pred = x.pred;               // lista doppia: cancellazione di x interno
x.pred.succ = x.succ;
x.pred = null;  x.succ = null;
```
Ricerca di una chiave e cancellazione per chiave: $O(n)$ nel caso pessimo.

## Intuizione
L'array dà accesso diretto ma si ridimensiona a fatica; la lista si modifica cambiando pochi riferimenti ma va percorsa. I casi particolari (primo, ultimo, unico elemento) sono quelli da trattare con attenzione negli esercizi.

## Come si usa
Esercizi delle slide: inserimento in una posizione interna; cancellazione del primo, dell'ultimo o dell'unico elemento. In C++ il corso implementa una lista semplicemente concatenata "come quella della STL" e poi la reimplementa con `std::unique_ptr` (file citati ma non presenti nella cartella).

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi cap. 1 e cap. 4 (liste doppie come dizionari), lezione 7 di M. Cicuttin per l'implementazione in C++. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo01.pdf` (p. 2-3, 16-19); `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo04.pdf` (p. 4-6); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 7, 9).

## Prerequisiti
- [[Puntatore]]: i nodi sono collegati da riferimenti
- [[Allocazione dinamica della memoria]]: ogni nodo è allocato separatamente

## Porta a
- [[Pila (struttura dati)]]: pila con cima all'inizio della lista
- [[Coda (struttura dati)]]: coda con testa e fondo della lista
- [[Albero binario]]: generalizzazione con più successori
- [[Tabella hash]]: liste di trabocco
- [[Skip list]]: liste ordinate a più livelli
- [[Union-find]]: una lista per ogni insieme della partizione
- [[Move-to-front]]: lista che si riorganizza dopo ogni ricerca
- [[Lista di adiacenza]]: una lista doppia di vicini per ogni nodo del grafo

## Collegati
- [[Standard Template Library]]: std::list
- [[Smart pointer unique_ptr]]: ogni nodo possiede il successivo
- [[Array dinamico]]: accesso diretto contro accesso sequenziale
