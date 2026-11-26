---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [memoria dinamica, dynamic memory allocation, new, delete, "new[]", "delete[]", gestione manuale della memoria, memory leak, doppio delete, undefined behaviour]
tags: [competenza, area/informatica]
---

# Allocazione dinamica della memoria

> Richiesta di memoria al sistema durante l'esecuzione con `new`/`new[]` e suo rilascio con `delete`/`delete[]`: necessaria per strutture di dimensione variabile, ma interamente manuale in C++.

## Definizione / enunciato
Gli array di dimensione fissa non bastano ai programmi reali, che richiedono strutture di dimensione variabile. In C++ la memoria dinamica si alloca con `new` (un elemento) e `new[]` (un blocco), che restituiscono un puntatore all'inizio della memoria, e si rilascia con `delete` e `delete[]`. Usare `delete[]` su un singolo elemento o `delete` su un blocco è **comportamento indefinito**.
Il blocco ottenuto da `new` è solo memoria, senza struttura: il puntatore non porta con sé la dimensione allocata (va ricordata a parte), e non ci sono `resize()` né `push_back()`.

## Formule chiave
```cpp
int* is = new int[50];                  // 50 interi
meteo_data* md  = new meteo_data;       // un singolo meteo_data
meteo_data* mds = new meteo_data[20];   // 20 meteo_data
is[5] = 42;  int y = is[8];             // accesso con []
delete [] is;  delete md;  delete [] mds;
```

## Intuizione
La gestione manuale è uno degli aspetti più pericolosi di C e C++: bisogna ricordarsi di rilasciare la memoria, non rilasciarla due volte e non perdere i puntatori. Nel C++ moderno, se si finisce a gestire la memoria a mano probabilmente si sta sbagliando: si usano le strutture della STL. La si studia per capire cosa succede "sotto il cofano".

## Come si usa
Esempio dei pericoli (lezione 6): una classe `int_vector` con `int* data` allocato nel costruttore e rilasciato nel distruttore. Con `int_vector v2 = v1;` il costruttore di copia di default copia il puntatore, così `v1` e `v2` puntano alla stessa memoria e il distruttore la libera due volte ("boom").

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezione 6 di M. Cicuttin; nella scheda "Puntatori, allocazione statica e dinamica della memoria". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione6.pdf` (p. 13-18); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 23).

## Prerequisiti
- [[Puntatore]]: new restituisce l'indirizzo del blocco allocato

## Porta a
- [[Array dinamico]]: rialloca e copia quando la capacità non basta
- [[Smart pointer unique_ptr]]: rilascio automatico della memoria
- [[Lista concatenata]]: ogni nodo è allocato dinamicamente

## Collegati
- [[Costruttore e distruttore]]: la copia byte per byte di un puntatore porta al doppio delete
- [[RAII]]: affida il rilascio al distruttore
