---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [pointer, puntatori, operatore indirizzo &, operatore di dereferenziazione *, operatore ->, riferimento, reference, puntatori e riferimenti, aritmetica dei puntatori, pointer arithmetic]
tags: [competenza, area/informatica]
---

# Puntatore

> Variabile che contiene un indirizzo di memoria; si dichiara aggiungendo `*` al tipo e si usa con gli operatori `&` (indirizzo di) e `*` (dereferenziazione).

## Definizione / enunciato
`T* ptr;` è un puntatore a un oggetto di tipo $T$. L'operatore unario `&` dà l'indirizzo di un oggetto; l'operatore `*` davanti a un puntatore lo **dereferenzia**, cioè restituisce il valore puntato. Per i membri di una struct puntata si scrive `md->temperature`, abbreviazione di `(*md).temperature` (mentre `*md.temperature` significa `*(md.temperature)` ed è sbagliato).
**Aritmetica**: incrementare un puntatore di tipo `T*` aumenta l'indirizzo di `sizeof(T)`, quindi su un array si passa all'elemento successivo; `x[n]` su un puntatore calcola `x + n*sizeof(T)` e dereferenzia.
**Riferimenti**: un riferimento `T&` è un alias di un oggetto esistente. I puntatori possono puntare ovunque, anche a memoria non valida; i riferimenti no: un riferimento non inizializzato rende il programma non compilabile.

## Formule chiave
Esercizio delle slide (`sizeof(int)=4`, `sizeof(double)=8`, `iarr` a 10000, `darr` a 9000):
```cpp
int* ip = &iarr[4];     // ip = 10000 + 4*4 = 10016
double* dp = &darr[3];  // dp = 9000 + 3*8 = 9024
```
Trappola di sintassi: `int* var1, var2;` dichiara un puntatore e un `int`; servono `int *var1, *var2;`.

## Intuizione
Se l'array è "base + indice per dimensione", il puntatore è proprio quella base: capito il layout degli array, i puntatori non danno problemi. Anche i puntatori sono variabili, quindi si possono passare per riferimento (`double*&`) o per puntatore (`double**`).

## Come si usa
Esercizio di lezione: tra `meteo_data md; read_sensors(&md);` e `meteo_data* md; read_sensors(md);` il secondo programma compila ma "esplode", perché il puntatore non inizializzato punta a memoria non valida. Per il passaggio di parametri il corso preferisce i riferimenti (const o no) e usa i puntatori solo quando servono.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lezioni 4, 5 e 7 di M. Cicuttin. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 17-23); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione5.pdf` (p. 7-14); `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione7.pdf` (p. 3).

## Prerequisiti
- [[Array in C++]]: l'indirizzo di un elemento è base + i·sizeof(T)

## Porta a
- [[Allocazione dinamica della memoria]]: new restituisce un puntatore
- [[Lista concatenata]]: i nodi sono legati da puntatori
- [[Albero binario]]: riferimenti ai figli e al padre

## Collegati
- [[Passaggio di parametri]]: il passaggio per riferimento si può simulare con i puntatori
- [[Standard Template Library]]: gli iteratori somigliano ai puntatori ma non lo sono
