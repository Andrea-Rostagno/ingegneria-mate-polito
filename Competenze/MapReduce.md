---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["map", "reduce", "rereduce", "viste di CouchDB"]
tags: [competenza, area/informatica]
---

# MapReduce

> Modello di programmazione distribuita (Google, 2004) che elabora grandi insiemi di dati con una funzione Map che emette coppie chiave-valore e una funzione Reduce che le aggrega per chiave.

## Definizione / enunciato
Pubblicato da Dean e Ghemawat (OSDI'04). Elabora grandi dataset con algoritmi paralleli su cluster di macchine comuni, **spostando il calcolo verso i dati**; si ispira alle funzioni map e reduce della programmazione funzionale (l'output dipende solo dagli argomenti).
- **Map**: chiamata una volta per ogni documento (record); restituisce zero, una o più coppie chiave-valore con `emit(key, value)`. Non può dipendere da informazioni esterne al documento: per questo le viste di CouchDB si calcolano in modo incrementale e in parallelo.
- **Reduce** (opzionale): riceve le coppie emesse, ordinate per chiave, e per ogni chiave riduce la lista dei valori a un valore (anche complesso). L'equivalente SQL più semplice è una `group by` con aggregazione. In Hadoop si può definire una fase di *shuffle* che distribuisce i risultati ai reducer.
- **Rereduce** (CouchDB): la reduce può essere richiamata sui propri risultati.

## Formule chiave
```javascript
function(doc){ emit(doc.exam, doc.mark); }                 // map
function(key, values){ S = sum(values); N = len(values);    // reduce
                       return S/N; }
```
Media pesata sui CFU per studente: map `emit(doc.student, [doc.mark, doc.CFU])`, reduce $\;\bar v=\dfrac{\sum X\cdot Y}{\sum Y}$ con $X$ voto e $Y$ CFU.

## Intuizione
La map è indipendente per documento, quindi parallelizzabile; il raggruppamento per chiave porta tutti i valori della stessa chiave allo stesso reducer.

## Come si usa
Database degli esami delle slide (8 documenti). Media per esame: Database riceve [29, 26, 25] → 26,67; Computer architectures [24, 27] → 25,5; Software engineering [21, 18] → 19,5; Bioinformatics [30] → 30. Media pesata di s123456: $(29\cdot8+24\cdot10+21\cdot8+30\cdot6)/32 = 25{,}6$. Nel rereduce delle slide Database diventa 27,25, media dei parziali 25,5 e 29: la media dei parziali non coincide con 26,67 perché la media non è distributiva (osservazione nostra). In CouchDB l'unico modo di interrogare è costruire una **vista** con MapReduce, materializzata e ordinata per chiave (la vista predefinita ha come chiave l'ID del documento).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/09 - Beyond-relational-databases-18-12.pdf` (pp. 14-29; bonifico con MapReduce p. 75).
- **Business intelligence per big data** (magistrale): "design recipe" del bonifico bancario (senza two-phase commit si registra ogni transazione come documento e il saldo si calcola con Map che emette `(from, -amount)` e `(to, amount)` e Reduce che somma, es. conti 900 e 1100), poi principi di funzionamento, esempi di Map e Reduce. Fonti: `magistrale/Business intelligence per big data/Beyond-relational-databases-2021-06-01.pdf` (pp. 54-75).

## Prerequisiti
- [[Sistemi NoSQL]]: elaborazione in CouchDB

## Porta a
- Nessuno.

## Collegati
- [[Aggregation pipeline]]: elaborazione aggregata dei documenti
