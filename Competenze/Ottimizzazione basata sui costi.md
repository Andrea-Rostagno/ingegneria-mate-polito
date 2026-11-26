---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["cost based optimization", "piano di esecuzione", "albero delle alternative", "branch and bound", "full table scan", "scansione sequenziale", "valutazione dei predicati", "operatori di accesso"]
tags: [competenza, area/informatica]
---

# Ottimizzazione basata sui costi

> Fase dell'ottimizzatore che, partendo dall'albero canonico e dai profili dei dati, valuta il costo dei piani alternativi e sceglie quello di costo minimo.

## Definizione / enunciato
Input: profili dei dati e albero della query; output: piano di esecuzione "ottimo" e insieme delle dipendenze. Si sceglie il miglior metodo di accesso per ogni tabella e il miglior algoritmo per ogni operatore, con formule di costo approssimate.

**Albero della query**: le foglie sono strutture fisiche (tabelle, indici), i nodi intermedi operazioni (scan, join, group by).

**Operatori di accesso**:
- *Scansione sequenziale* (full table scan): legge tutte le tuple; durante la scansione si fanno proiezione, selezione su predicato semplice, ordinamento, insert/update/delete.
- *Ordinamento*: algoritmi classici (es. quick sort), in memoria o su disco.
- *Valutazione dei predicati*: uguaglianza $A_i=v$ con hash, B+-tree o bitmap; intervallo $v_1\le A_i\le v_2$ solo B+-tree; predicati poco selettivi: scansione completa (o bitmap). Congiunzione: prima il predicato più selettivo via indice, poi gli altri sul risultato; meglio ancora intersecare prima bitmap o RID. Disgiunzione: indici usabili solo se tutti i predicati hanno un indice, altrimenti scansione completa.
- *Join*: nested loop, merge scan, hash join, bitmapped join.
- *Group by*: basato su sort o su hash (eventualmente usando viste materializzate).

**Ricerca del piano**: le dimensioni sono come si leggono i dati (scan, indice), l'ordine degli operatori (ordine dei join), la tecnica di ogni operatore e quando ordinare. Si costruisce un **albero delle alternative**: ogni nodo interno decide una variabile, ogni foglia è un piano completo.

## Formule chiave
$$C_{Total}=C_{I/O}\times n_{I/O}+C_{cpu}\times n_{cpu}$$
con $n_{I/O}$ numero di operazioni di I/O e $n_{cpu}$ numero di operazioni di CPU.

## Intuizione
Lo spazio dei piani esplode in modo combinatorio, quindi si cerca un piano "dello stesso ordine di grandezza" del migliore, non necessariamente il migliore.

## Come si usa
Esempio delle slide: join di R, S, T con 4 tecniche di join (per ciascuno dei due join) e 3 ordini di join danno al più $4\times4\times3=48$ alternative. La scelta della foglia di costo minimo usa tecniche di ricerca operativa (es. **branch and bound**). In compile and go la ricerca si ferma quando il tempo speso è paragonabile al tempo di esecuzione del miglior piano corrente.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Cost based optimization", "Access operators", "Execution plan selection". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 11-12, 39-41, 46-56, 70-78).

## Prerequisiti
- [[Ottimizzatore di query]]: seconda fase di ottimizzazione
- [[Profili dei dati]]: stime di cardinalità per i costi
- [[B+-tree]]: indice utilizzabile per uguaglianze e intervalli

## Porta a
- [[Nested loop join]]: algoritmo di join da costare
- [[Merge scan join]]: algoritmo di join da costare
- [[Hash join]]: algoritmo di join da costare
- [[Ottimizzatore Oracle]]: realizzazione in un DBMS commerciale
- [[Progettazione fisica di una base di dati]]: prevedere il piano scelto

## Collegati
- Nessuno.
