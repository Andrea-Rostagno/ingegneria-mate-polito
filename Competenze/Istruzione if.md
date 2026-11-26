---
tipo: competenza
area: informatica
corsi: [Informatica, Programmazione e calcolo scientifico]
livello: [triennale]
aliases: [if else, elif, decisioni annidate, scelte multiple, compound statement, blocco di istruzioni, indentazione, pass, switch, case]
tags: [competenza, area/informatica]
---

# Istruzione if

> Il costrutto condizionale if/elif/else, che esegue blocchi diversi a seconda di una condizione booleana.

## Definizione / enunciato
`if` esegue un blocco se la condizione è vera; `else` (facoltativo) quello alternativo: viene eseguito uno solo dei due rami. È un **compound statement**: un'intestazione che termina con `:` seguita da un **blocco** di istruzioni con la stessa indentazione; il blocco finisce alla prima istruzione meno indentata. In Python l'indentazione è obbligatoria.

**elif** (else if) per più di due alternative: appena una condizione è vera si esegue il suo blocco e le altre non vengono valutate; se nessuna è vera si esegue l'`else` finale. Si testano **prima i casi più specifici**, poi i più generali.

**if annidati**: un `if` dentro un ramo di un altro (es. ordinare da bere: se vino, controlla l'età). **pass**: istruzione che non fa nulla, per scrivere lo scheletro di un blocco da riempire dopo.

## Formule chiave
```python
if richter >= 8.0 :
    print("Most structures fall")
elif richter >= 7.0 :
    print("Many buildings destroyed")
elif richter >= 6.0 :
    print("Many buildings damaged, some collapse")
elif richter >= 4.5 :
    print("Damage to poorly constructed buildings")
else :
    print("No destruction of buildings")
```

## Intuizione
Il flow chart dell'if è un rombo con due uscite che si ricongiungono. Con una catena di `if` separati (senza `elif`) un terremoto di intensità 8 stamperebbe tutti e quattro i messaggi: è l'errore della slide P3 p. 79.

## Come si usa
Esempi delle slide: ascensore che salta il 13° piano (`if floor > 12: actual_floor = floor - 1`); sconti "Kilobyte Day" (stessa istruzione in entrambi i rami da portare fuori dall'`if`); calcolo delle tasse con if annidati e quattro rami (`taxes.py`), verificato con hand-tracing. Evitare l'operatore condizionale in linea (`a if cond else b`), sconsigliato nel corso.

## Nei corsi
- **Informatica** (triennale): unità P3 sezioni 3.1, 3.3, 3.4. Fonti: `triennale/ANNO 1/informatica/Unita P3 - Decisioni.pdf` (p. 28-42, 61-81).
- **Programmazione e calcolo scientifico** (triennale): in C++ (lezione 4 di M. Cicuttin) `if ( <condizione> ) { ... } else { ... }`, con i blocchi tra graffe invece dell'indentazione; esempio `max(a, b)`, scritto meglio senza `else` (`if (a < b) return b; return a;`). Per la **selezione per casi** c'è `switch ( <valore> ) { case <v1>: ... break; ... default: ... }`, che evita catene di if/else: esempio `fib(n)` con `case 0` e `case 1` che restituiscono 1 e `default` ricorsivo. Fonti: `triennale/ANNO 3/Programmazione e calcolo scientifico/lezione4.pdf` (p. 24-26).

## Prerequisiti
- [[Operatori relazionali]]: la condizione è tipicamente un confronto
- [[Diagramma di flusso]]: traduce il rombo di decisione

## Porta a
- [[Validazione dell'input]]: controlla le condizioni di validità

## Collegati
- [[Ciclo while]]: break e continue si usano dentro un if nel corpo del ciclo (Programmazione e calcolo scientifico)
- [[Numeri di Fibonacci]]: fib(n) ricorsiva è l'esempio dello switch in C++ (Programmazione e calcolo scientifico)
