---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["merge scan", "sort merge join", "join per fusione", "USE_MERGE"]
tags: [competenza, area/informatica]
---

# Merge scan join

> Algoritmo di join che ordina entrambe le tabelle sull'attributo di join e poi le scandisce in parallelo, accoppiando le tuple con valori uguali.

## Definizione / enunciato
Entrambe le tabelle sono **ordinate sugli attributi di join**; le due tabelle sono scandite in parallelo e si generano le coppie di tuple con valori corrispondenti. In Oracle (sort merge join) si distinguono due passi: *sort join* (entrambi gli input ordinati sulla chiave di join) e *merge join* (fusione delle liste ordinate).

## Formule chiave
Nessuna formula di costo esplicita nelle slide: la tecnica è **simmetrica** e richiede l'ordinamento di entrambe le tabelle.

## Intuizione
Se i due input sono già ordinati, il join costa una sola passata su ciascuno, come la fusione di due liste ordinate. Il costo vero sta nell'ordinamento, che può però essere "gratis" se l'ordine viene da un'operazione precedente o da un indice clustered.

## Come si usa
- Le tabelle possono essere già ordinate da un'operazione precedente o lette tramite un **indice clustered** sugli attributi di join. Era più usato in passato; è efficiente per tabelle grandi, perché le tabelle ordinate possono stare su disco.
- In Oracle conviene rispetto all'hash join se gli input sono già ordinati, se non serve un ordinamento aggiuntivo (es. dopo un GROUP BY) o se l'ordinamento serve anche all'operazione successiva (es. prima di un GROUP BY); è utile per condizioni di join di disuguaglianza ($<,\le,>,\ge$, non $<>$) e batte il nested loop su grandi insiemi di dati. Esempio delle slide: `EMP E, SALGRADE S WHERE E.Sal < 200 AND E.Sal = S.Losal GROUP BY E.Sal HAVING COUNT(*) > 2`.
- Progettazione fisica: per il merge scan conviene un B+-tree sull'attributo di join, se possibile clustered. Hint `USE_MERGE`.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): algoritmi di join. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 60-61); `magistrale/Data science tecnologie basi di dati/Esercizi/1 - Oracle/01 - DSTBD_oracle_optimizer-IT.pdf` (pp. 44-45); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/05 - 16-PhysicalDesign.pdf` (p. 17).

## Prerequisiti
- [[Ottimizzazione basata sui costi]]: algoritmo di join da costare

## Porta a
- Nessuno.

## Collegati
- [[Nested loop join]]: algoritmi di join alternativi
- [[Hash join]]: algoritmi di join alternativi
