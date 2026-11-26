---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [template, programmazione generica, generic programming, template typename T, classe template]
tags: [competenza, area/informatica]
---

# Template in C++

> Meccanismo del C++ per parametrizzare un'implementazione sul tipo: la stessa classe o funzione funziona per `int`, `double` o tipi definiti dall'utente.

## Definizione / enunciato
La **programmazione generica** scrive il codice una volta sola per un tipo generico $T$. La dichiarazione `template<typename T>` (da leggere "per ogni tipo $T$") precede una classe o una funzione che usa $T$ come un tipo qualsiasi; al momento dell'uso si specifica il tipo tra parentesi angolate.

## Formule chiave
```cpp
template<typename T>
class stack {
    T   data[STACK_SIZE];
    int top;
public:
    stack();
    void push(const T& value);
    T    pop();
    bool empty();
    bool full();
};

stack<double>     stk_dbl;  // pila di double
stack<meteo_data> stk_md;   // pila di meteo_data
```

## Intuizione
La pila di interi della lezione 5 non serve per i `double` o per i `meteo_data`: invece di riscriverla per ogni tipo, la si scrive una volta in funzione di $T$ e il compilatore genera le versioni necessarie. Il parametro di `push` diventa `const T&`, perché $T$ può essere un oggetto grande.

## Come si usa
È il "teaser" con cui si chiude la lezione sulle classi e la base della libreria standard: `std::vector<T>`, `std::list<T>`, `unique_ptr<T>` sono tutti template.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezione 5 di M. Cicuttin, ultima slide. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 21).

## Prerequisiti
- [[Struct e classi in C++]]: si parametrizza una classe esistente

## Porta a
- [[Standard Template Library]]: i container della libreria standard sono template

## Collegati
- Nessuno.
