---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [struct, class, classe C++, attributo, metodo, operatore di risoluzione dello scope, scope resolution operator, public, private, incapsulamento, programmazione orientata agli oggetti, OOP]
tags: [competenza, area/informatica]
---

# Struct e classi in C++

> Tipi definiti dall'utente che raggruppano dati (attributi) e funzioni (metodi); la `class` nasconde lo stato interno e lo rende accessibile solo tramite le operazioni pubbliche.

## Definizione / enunciato
Una **struct** raggruppa dati correlati:
```cpp
struct meteo_data {
    std::string location_name;
    int minute, hour, day, month, year;
    double temperature;
    double pressure;
};
```
e si usa con l'operatore punto (`md.temperature = 16.3;`). Un **attributo** è una variabile che appartiene alla struct, un **metodo** una funzione che le appartiene. Un metodo si definisce fuori dalla struct con l'operatore di **risoluzione dello scope** `::` (`void mystruct::method(int x) { attribute = x; }`). `ms.method(42)` va pensato come un modo elegante di scrivere `method(ms, 42)` con `ms` passato per riferimento.
Una **class** è come una struct, ma per default tutti i membri sono **privati**; solo quelli nella sezione `public:` sono accessibili all'utente.

## Formule chiave
Pila di interi con dimensione fissa (`#define STACK_SIZE 8`):
```cpp
class stack {
    int data[STACK_SIZE];
    int top;
public:
    stack();
    void push(int value);
    int  pop();
    bool empty();
    bool full();
};
```
Con la classe, `s.top = 70;` non è più un programma valido.

## Intuizione
Un tipo non definisce solo l'insieme dei valori ma anche le operazioni: la classe lega i dati alle operazioni lecite e impedisce all'utente di portare l'oggetto in uno stato incoerente (incapsulamento).

## Come si usa
Esempio del corso: la pila LIFO con `push`, `pop`, `empty`, `full` implementata prima come struct e poi come class; `push` scrive `data[top++] = value` se `top < STACK_SIZE`, `pop` restituisce `data[--top]` se `top > 0`.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezioni 4-5 di M. Cicuttin (struct, metodi, stack, classi); la scheda la colloca sotto "Programmazione orientata agli oggetti (OOP) nel linguaggio C++". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 30); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 3, 15-21).

## Prerequisiti
- [[Tipi fondamentali del C++]]: gli attributi hanno tipi base
- [[Passaggio di parametri]]: un metodo riceve implicitamente l'oggetto per riferimento

## Porta a
- [[Costruttore e distruttore]]: portano l'oggetto nello stato iniziale valido e lo rilasciano
- [[Template in C++]]: la stessa classe parametrizzata sul tipo
- [[Pila (struttura dati)]]: l'esempio guida del corso è una pila

## Collegati
- Nessuno.
