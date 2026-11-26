---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [unique_ptr, std::unique_ptr, make_unique, smart pointer, puntatore intelligente, ownership, proprietà del puntatore]
tags: [competenza, area/informatica]
---

# Smart pointer unique_ptr

> Puntatore del C++ moderno che possiede la memoria a cui punta e la libera automaticamente quando esce di scope; non si può copiare.

## Definizione / enunciato
`std::unique_ptr<T>` applica RAII alla memoria dinamica: il costruttore alloca, il distruttore esegue il `delete`. Il costruttore di copia è cancellato, quindi un `unique_ptr` non si copia. Ne segue il concetto di **ownership** (proprietà del puntatore): poiché i puntatori unici non si possono copiare, qualcuno deve possedere la risorsa puntata ed esserne responsabile.

## Formule chiave
```cpp
/* vecchio modo */
T* p = new T(...);
...
delete p;   // se lo si dimentica o lo si esegue due volte sono guai

/* nuovo modo: la memoria è liberata quando up esce di scope */
unique_ptr<T> up = make_unique<T>(...);
```

## Intuizione
Con `new`/`delete` il programmatore deve tenere a mente chi libera cosa; con `unique_ptr` questa informazione è scritta nel tipo: c'è un solo proprietario, e quando lui muore muore la risorsa.

## Come si usa
Esempio del corso: la lista semplicemente concatenata reimplementata con `std::unique_ptr` (file `linked_list_up.hpp`, citato ma non presente nella cartella). La lista possiede e gestisce la vita della testa, e ogni nodo possiede e gestisce la vita dei nodi successivi. Per il corso bisogna comunque capire `new`/`delete`.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezione 7 di M. Cicuttin, "Safer memory management". Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 8-9).

## Prerequisiti
- [[RAII]]: unique_ptr è RAII per la memoria
- [[Allocazione dinamica della memoria]]: sostituisce new/delete manuali

## Porta a
- Nessuno nel corso.

## Collegati
- [[Lista concatenata]]: ogni nodo possiede il successivo
