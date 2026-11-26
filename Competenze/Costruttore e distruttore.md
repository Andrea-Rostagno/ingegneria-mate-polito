---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [constructor, destructor, costruttore, distruttore, costruttore di default, default constructor, costruttore di copia, copy constructor, costruttore definito dall'utente]
tags: [competenza, area/informatica]
---

# Costruttore e distruttore

> Metodi chiamati automaticamente quando un oggetto nasce (costruttore) o esce di scope (distruttore): il primo porta l'oggetto in uno stato valido, il secondo rilascia le risorse.

## Definizione / enunciato
- **Costruttore**: metodo con lo stesso nome della classe, chiamato automaticamente e implicitamente a ogni dichiarazione. Il suo ruolo è portare l'oggetto nel suo stato iniziale valido (per la pila: `stack::stack() { top = 0; }`).
- **Costruttore definito dall'utente**: con parametri, per esempio `rational(int num, int den)`; il costruttore di default di `rational` inizializza $0/1$.
- **Costruttore di copia** `stack(const stack& other)`: invocato quando si copia un oggetto (`stack s2 = s1;`, `stack s3(s1);`). Il compilatore ne genera uno di default che copia byte per byte; va ridefinito solo se non è il comportamento voluto, tipicamente quando si gestisce memoria dinamica.
- **Distruttore** `~object()`: stesso nome della classe preceduto da tilde, chiamato subito prima che l'oggetto esca di scope. Serve quando bisogna rilasciare risorse dinamiche.

## Formule chiave
```cpp
int f(double x) {
    object o1;
    while (x > 10) {
        object o2;
        /* ... */
    }   // o2 distrutto qui (a ogni iterazione)
    /* ... */
}       // o1 distrutto qui
```

## Intuizione
Il ciclo di vita dell'oggetto è legato al blocco in cui è dichiarato: il compilatore inserisce da solo le chiamate a costruttore e distruttore, e il programmatore decide solo cosa fanno.

## Come si usa
Esercizio suggerito: una struct `object` con costruttore di default, di copia, con due `int` e distruttore che stampano un messaggio; creare oggetti in funzioni e blocchi diversi e osservare l'ordine delle stampe. Caso critico (lezione 6): una classe `int_vector` con un puntatore a memoria `new int[sz]` copiata con il costruttore di copia di default fa sì che due oggetti puntino alla stessa memoria ("boom").

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezioni 5-6 di M. Cicuttin. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 17-19); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione6.pdf` (p. 2-6, 17).

## Prerequisiti
- [[Struct e classi in C++]]: sono metodi speciali di una classe

## Porta a
- [[RAII]]: costruttore acquisisce, distruttore rilascia

## Collegati
- [[Allocazione dinamica della memoria]]: la copia byte per byte di un puntatore porta al doppio delete
