---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [stack, pila, LIFO, Last In First Out, push, pop, top, cima della pila]
tags: [competenza, area/informatica]
---

# Pila (struttura dati)

> Collezione in cui inserimento ed estrazione riguardano solo l'elemento inserito più di recente (politica LIFO).

## Definizione / enunciato
Una **pila** ammette le operazioni:
1. **Push**: inserisce un nuovo elemento in cima;
2. **Pop**: estrae l'elemento in cima e ne restituisce il contenuto;
3. **Top**: restituisce l'elemento in cima senza estrarlo;
4. **Empty**: verifica se la pila è vuota.

Due realizzazioni: su **array** ridimensionabile (elementi in sequenza dalla prima posizione, la cima è l'ultimo elemento) e su **lista** (ordinata per tempo di inserimento decrescente, la cima è l'inizio della lista). Tutte le operazioni costano $O(1)$ (ammortizzato nel caso dell'array).

## Formule chiave
```text
Push( x ):                      Pop( ):
    VerificaRaddoppio( );           if (!Empty( )) {
    cimaPila = cimaPila + 1;            x = pilaArray[ cimaPila ];
    pilaArray[ cimaPila ] = x;          cimaPila = cimaPila - 1;
                                        VerificaDimezzamento( );
Empty( ):                               return x;
    return (cimaPila == -1);        }
```
Versione su lista: Push crea un nodo `u` con `u.succ = cimaPila; cimaPila = u;`, Pop restituisce `cimaPila.dato` e pone `cimaPila = cimaPila.succ`.

## Intuizione
È la "pila di piatti": si mette e si toglie sempre sopra. Chi esegue un programma la usa per gli argomenti delle operazioni (interprete PostScript) e per le chiamate ricorsive; nella visita in profondità sostituisce la coda della BFS.

## Come si usa
Esempio dalle slide: con `pilaArray` = 5, 10, 13, 4, 9 (`cimaPila = 4`), una Pop porta `cimaPila` a 3; poi Push(1) e Push(3) la portano a 5. In C++ (lezione 5) la pila è l'esempio guida per struct, costruttore e classi: array di `STACK_SIZE` interi e indice `top`, con i metodi `push`, `pop`, `empty`, `full`.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi (file `Capitolo02.pdf`, intitolato "Pile e code") e lezione 5 di M. Cicuttin. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo02.pdf` (p. 2-8); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 16-21).

## Prerequisiti
- [[Lista concatenata]]: realizzazione con la cima all'inizio della lista
- [[Array dinamico]]: realizzazione con raddoppio e dimezzamento
- [[Struct e classi in C++]]: implementazione come classe in C++

## Porta a
- [[Notazione postfissa]]: valutazione e conversione delle espressioni con una pila
- [[Visita in profondità]]: la DFS iterativa usa una pila

## Collegati
- [[Coda (struttura dati)]]: politica FIFO invece di LIFO
