---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["join con hash", "bucket", "USE_HASH", "build e probe"]
tags: [competenza, area/informatica]
---

# Hash join

> Algoritmo di join che applica la stessa funzione hash agli attributi di join delle due tabelle, così le tuple da unire finiscono negli stessi bucket, dove si fa un join locale.

## Definizione / enunciato
Si applica la **stessa funzione hash** agli attributi di join di entrambe le tabelle: le tuple da unire finiscono negli stessi bucket. Le **collisioni** sono tuple con lo stesso valore della funzione ma valore diverso dell'attributo. In ogni bucket si esegue un ordinamento e un join locali. È una tecnica di join molto veloce.

Nella descrizione di Oracle: l'ottimizzatore usa la più piccola delle due tabelle per costruire in memoria una tabella hash sulla chiave di join, poi scandisce la tabella più grande "sondando" la tabella hash.

## Formule chiave
Nessuna formula di costo nelle slide. Oracle: se la tabella più piccola sta in memoria, il costo è limitato a **una sola passata di lettura** sulle due tabelle.

## Intuizione
L'hash divide un grande problema di join in tanti piccoli join indipendenti, uno per bucket: solo le tuple nello stesso bucket possono corrispondersi.

## Come si usa
- Oracle lo sceglie per join di grandi insiemi di dati, con **equi-join**, quando si deve unire una grande quantità di dati oppure una grande frazione di una tabella piccola. Esempio delle slide: `EMP E, SALGRADE S WHERE E.Sal = S.Losal AND E.Job = 'RESEARCHER'`.
- Funziona solo con condizioni di uguaglianza; per condizioni di disuguaglianza si usa il sort merge.
- Nella progettazione fisica è un'alternativa al nested loop (esempio 6: hash join oppure nested loop con EMP esterna). Hint `USE_HASH`.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): algoritmi di join. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 62-63); `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/01 - DSTBD_oracle_optimizer-IT.pdf` (pp. 42-43); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/05 - 16-PhysicalDesign.pdf` (p. 34).

## Prerequisiti
- [[Ottimizzazione basata sui costi]]: algoritmo di join da costare

## Porta a
- Nessuno.

## Collegati
- [[Merge scan join]]: algoritmi di join alternativi
- [[Nested loop join]]: algoritmi di join alternativi
