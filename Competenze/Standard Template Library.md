---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [STL, libreria standard del C++, container, iteratore, iterator, auto, deduzione automatica del tipo, range-based for, begin, end, std::list]
tags: [competenza, area/informatica]
---

# Standard Template Library

> La libreria standard del C++: container, algoritmi, I/O e concorrenza, tutti generici; si attraversano i container in modo uniforme con gli iteratori.

## Definizione / enunciato
La **STL** fornisce:
- strutture dati (container): `<vector>`, `<list>`, `<set>`, array associativi, ...;
- algoritmi (ordinamento, ricerca, ...) in `<algorithm>`;
- input/output (gli stream);
- thread e concorrenza (`<thread>`, `<atomic>`, `<mutex>`, ...).

Un **iteratore** permette di scorrere gli elementi di un container in modo astratto: `begin()` dà il primo, `end()` la posizione dopo l'ultimo, `*itor` l'elemento. Gli iteratori somigliano ai puntatori ma non lo sono, e permettono di attraversare strutture complesse (liste, alberi) come se fossero array.

## Formule chiave
```cpp
vector<int> vals = {1,2,3,4,5,6};
for (vector<int>::iterator itor = vals.begin(); itor != vals.end(); itor++)
    int val = *itor;

for (auto itor = vals.begin(); itor != vals.end(); itor++)   // tipo dedotto
    ...

for (auto& val : vals)   // range-based for, equivalente
    cout << val << endl;
```

## Intuizione
Il ciclo con l'iteratore è identico per un `vector<int>` e per una `list<int>`, nonostante le strutture siano molto diverse: l'algoritmo non dipende dal container. Con `auto` il compilatore deduce il tipo dal valore restituito da `begin()`, senza magia.

## Come si usa
Riferimento consigliato: cppreference.com. Nel corso la STL è il modello: si implementa a mano una lista semplicemente concatenata "come quella della STL" per capire cosa c'è sotto.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezioni 6-7 di M. Cicuttin; la scheda la elenca tra le applicazioni ("Strutture dati in C++, C++ (STL)"). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione6.pdf` (p. 7); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 4-7).

## Prerequisiti
- [[Template in C++]]: tutti i container sono template

## Porta a
- Nessuno nel corso.

## Collegati
- [[Array dinamico]]: std::vector è il primo container studiato
- [[Puntatore]]: un iteratore si usa come un puntatore
- [[Lista concatenata]]: std::list si scorre con lo stesso ciclo di vector
- [[Ciclo for]]: il range-based for è una forma del ciclo for
