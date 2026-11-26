---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [Resource Acquisition Is Initialization, acquisizione delle risorse come inizializzazione]
tags: [competenza, area/informatica]
---

# RAII

> Idioma del C++ che lega una risorsa (file, memoria) alla vita di un oggetto: la si acquisisce nel costruttore e la si rilascia automaticamente nel distruttore.

## Definizione / enunciato
**RAII**, "Resource Acquisition Is Initialization": quando si crea l'oggetto si acquisisce la risorsa; quando l'oggetto esce di scope, la risorsa viene chiusa e rilasciata automaticamente. Il programmatore non deve ricordarsi di liberarla.

## Formule chiave
Due esempi del corso:
- `std::ofstream ofs(filename);` apre il file; alla fine del blocco il file è chiuso anche senza `ofs.close()`.
- Una versione semplificata di `unique_ptr`:
```cpp
template<typename T>
struct unique_ptr {
    T* raw_ptr;
    unique_ptr(/*parameters*/) { raw_ptr = new T(/*parameters*/); }
    unique_ptr(const unique_ptr&) = delete;
    ~unique_ptr() { delete raw_ptr; }
};
```
(l'implementazione reale è molto più complessa).

## Intuizione
La gestione manuale con `new`/`delete` fallisce se si dimentica il `delete` o lo si chiama due volte. Affidando il rilascio al distruttore, che il compilatore chiama sempre all'uscita dallo scope, la dimenticanza diventa impossibile.

## Come si usa
Confronto "vecchio modo" `T* p = new T(...); ... delete p;` contro "nuovo modo" `unique_ptr<T> up = make_unique<T>(...);`, con la memoria liberata quando `up` esce di scope. Il costruttore di copia cancellato (`= delete`) evita che due oggetti rilascino la stessa risorsa.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): introdotto con i file stream (lezione 3) e ripreso con la gestione sicura della memoria (lezione 7). Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione3.pdf` (p. 12); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 8).

## Prerequisiti
- [[Costruttore e distruttore]]: costruttore acquisisce, distruttore rilascia
- [[Stream di input-output in C++]]: primo esempio, l'ofstream

## Porta a
- [[Smart pointer unique_ptr]]: RAII applicato alla memoria dinamica

## Collegati
- [[Allocazione dinamica della memoria]]: l'alternativa sicura a new/delete manuali
