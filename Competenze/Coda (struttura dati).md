---
tipo: competenza
area: informatica
corsi: [Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [queue, FIFO, First In First Out, enqueue, dequeue, first, coda circolare, testa e fondo della coda]
tags: [competenza, area/informatica]
---

# Coda (struttura dati)

> Collezione in cui si estrae dalla testa l'elemento presente da più tempo e si inserisce in fondo (politica FIFO).

## Definizione / enunciato
Una **coda** ammette:
1. **Enqueue**: inserisce un nuovo elemento in fondo;
2. **Dequeue**: estrae l'elemento in testa e ne restituisce il contenuto;
3. **First**: restituisce l'elemento in testa senza estrarlo;
4. **Empty**: verifica se la coda è vuota.

Realizzazione su **array** ridimensionabile con gestione **circolare**: la testa è il primo elemento della sequenza, il fondo l'ultimo, e gli indici avanzano modulo la lunghezza dell'array. Realizzazione su **lista**: nodi ordinati per istante di inserimento crescente, la testa è il primo nodo (da estrarre con Dequeue) e il fondo l'ultimo (a cui si aggancia il nuovo nodo).

## Formule chiave
```text
Enqueue( x ):
    VerificaRaddoppio( );
    cardCoda = cardCoda + 1;
    fondoCoda = (fondoCoda + 1) % lunghezzaArray;
    codaArray[ fondoCoda ] = x;

Dequeue( ):
    if (!Empty( )) {
        cardCoda = cardCoda - 1;
        x = codaArray[ testaCoda ];
        testaCoda = (testaCoda + 1) % lunghezzaArray;
        VerificaDimezzamento( );
        return x;
    }

Empty( ):  return (cardCoda == 0);
```

## Intuizione
La gestione circolare evita di spostare gli elementi dopo ogni Dequeue: testa e fondo "girano" nell'array. Con l'operatore modulo il fondo può trovarsi prima della testa.

## Come si usa
Esempio delle slide: coda 5, 10, 13, 4, 9 con testa 0 e fondo 4; dopo una Dequeue la testa è 1; dopo Enqueue(1) e Enqueue(3) il fondo torna all'inizio dell'array (`fondoCoda = 0`). È la struttura della visita in ampiezza.

## Nei corsi
- **Programmazione e calcolo scientifico** (triennale): lucidi Crescenzi su pile e code. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/Capitolo02.pdf` (p. 14-18).

## Prerequisiti
- [[Lista concatenata]]: realizzazione con testa e fondo della lista
- [[Array dinamico]]: realizzazione circolare con ridimensionamento

## Porta a
- [[Heap binario]]: la coda di priorità estende le operazioni della coda
- [[Visita in ampiezza]]: la BFS visita i nodi nell'ordine della coda

## Collegati
- [[Pila (struttura dati)]]: politica LIFO invece di FIFO
