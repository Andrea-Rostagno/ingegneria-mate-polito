---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["clustered index", "unclustered index", "indice primario", "indice secondario", "key sequenced", "indice indiretto"]
tags: [competenza, area/informatica]
---

# Indice clustered e unclustered

> Distinzione tra indici che contengono le tuple nelle foglie e ne vincolano la posizione fisica (clustered, primari) e indici che contengono solo puntatori a tuple memorizzate altrove (unclustered, secondari).

## Definizione / enunciato
- **Clustered**: la tupla è contenuta nel nodo foglia; la posizione fisica delle tuple è vincolata a una certa foglia e può cambiare quando una foglia piena viene divisa (split). Si chiama anche **key sequenced**. Si usa tipicamente per indicizzare la **chiave primaria**.
- **Unclustered**: la foglia contiene **puntatori fisici** ai dati; la posizione delle tuple nel file è del tutto libera. Si chiama anche **indiretto**. Si usa per gli **indici secondari**.

La stessa distinzione vale per le strutture hash: l'hash "puro" memorizza le tuple nei blocchi; l'**hash index unclustered** ha blocchi che contengono puntatori ai dati, memorizzati in una struttura separata.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
In un indice clustered le tuple con chiavi vicine stanno nelle stesse pagine: una ricerca per intervallo legge poche pagine. In un indice unclustered tuple con chiavi vicine possono stare in pagine diverse: ogni valore trovato può costare una lettura in più.

## Come si usa
Esempio delle slide: STUDENT(StudentId, Name, Grade) indicizzata su Grade. Nell'indice **unclustered** il file dati è nell'ordine T1, T6, T10, T2, T3, ... con voti 19, 34, 34, 22, 30, ..., e le foglie (19, 22, 30, 30, 33, 34, 34, 34, 40, 50) puntano a tuple sparse. Nell'indice **clustered** le tuple stanno direttamente nelle foglie ordinate per voto.
Conseguenze: la scansione ordinata con B+-tree è sempre efficiente solo se l'indice è clustered; una tabella può avere un solo ordinamento fisico, quindi un solo indice clustered, e più indici secondari. L'heap file si usa con indici unclustered, la struttura sequenziale ordinata con il B+-tree clustered. Nella progettazione fisica la scelta di quale attributo usare per l'indice primario è una decisione centrale.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Clustered", "Unclustered" ed esempi su STUDENT. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/03 - 14-PhysicalAccess.pdf` (pp. 11, 14, 26-32, 36-37).

## Prerequisiti
- [[B+-tree]]: due modi di collegare foglie e tuple

## Porta a
- [[Progettazione fisica di una base di dati]]: scelta dell'indice primario

## Collegati
- [[Indice hash]]: anche l'hash può essere clustered o no
