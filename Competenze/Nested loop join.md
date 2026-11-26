---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["nested loop", "ciclo annidato", "tabella esterna", "tabella interna", "outer table", "inner table", "brute force join", "USE_NL"]
tags: [competenza, area/informatica]
---

# Nested loop join

> Algoritmo di join "a forza bruta": per ogni tupla della tabella esterna si cerca nella tabella interna, con una scansione o, meglio, con un indice sull'attributo di join.

## Definizione / enunciato
Si fa una sola scansione completa della **tabella esterna** (outer); per ogni sua tupla si esegue una scansione della **tabella interna** (inner) cercando i valori corrispondenti dell'attributo di join. La ricerca nella tabella interna può essere una scansione completa o un accesso diretto (index scan). Si chiama anche "brute force".

È efficiente quando la tabella interna è piccola e sta in memoria (scansione ottimizzata) oppure quando l'attributo di join della tabella interna è **indicizzato**.

## Formule chiave
Nessuna formula di costo esplicita nelle slide: si dice solo che la tecnica **non è simmetrica** e che il costo dipende da quale tabella fa da interna.

## Intuizione
Il lavoro è "esterne × ricerca nell'interna": se la ricerca nell'interna costa poco (indice, tabella in memoria), il nested loop è ottimo; se ogni ricerca è una scansione completa di una tabella grande, è il peggiore.

## Come si usa
- In Oracle si usa per join su pochi righe con una buona condizione di guida: la tabella esterna (*driving table*) produce le righe, il ciclo interno è ripetuto per ogni riga, idealmente con un index scan. Esempio: EXAM esterna (Table Access Full, costo 5) e STUDENT interna, costo totale 10.
- Hint `ORDERED`/`LEADING(e d)` fissano l'ordine: con EMP esterna e accesso per indice a DEPT il costo è 168; con DEPT esterna e full scan di EMP interna sale a 43.855 (slide degli hint). Hint `USE_NL`.
- Progettazione fisica: per migliorare un nested loop si mette un indice sull'attributo di join della tabella interna (es. hash su Emp.Dept# con EMP interna).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): algoritmi di join. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 56-59); `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/01 - DSTBD_oracle_optimizer-IT.pdf` (pp. 37-41); `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/02 - DSTBD_oracle_hints-IT.pdf` (pp. 8-11); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/05 - 16-PhysicalDesign.pdf` (pp. 17, 30, 34).

## Prerequisiti
- [[Ottimizzazione basata sui costi]]: algoritmo di join da costare

## Porta a
- Nessuno.

## Collegati
- [[Merge scan join]]: algoritmi di join alternativi
- [[Hash join]]: algoritmi di join alternativi
