---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati]
livello: [magistrale, triennale]
aliases: ["query optimizer", "ottimizzatore", "analisi lessicale sintattica e semantica", "compile and go", "compile and store", "dizionario dei dati", "piano di accesso", "metadati del DBMS", "USER_TABLES", "USER_TAB_COL_STATISTICS"]
tags: [competenza, area/informatica]
---

# Ottimizzatore di query

> Modulo del DBMS che trasforma un'interrogazione SQL in un programma di accesso efficiente, attraverso analisi, ottimizzazione algebrica e ottimizzazione basata sui costi.

## Definizione / enunciato
L'ottimizzatore sceglie una strategia efficiente di esecuzione ed è il componente che garantisce l'**indipendenza dei dati**: il modo in cui la query SQL è scritta non condiziona come viene eseguita, e una riorganizzazione fisica dei dati non richiede di riscrivere le query. Genera automaticamente il piano di esecuzione (un tempo scritto a mano dal programmatore, di solito meno efficiente), valuta molte alternative, usa le statistiche sui dati del catalogo e si adatta ai cambiamenti della distribuzione dei dati.

**Fasi** (pipeline delle slide):
1. **Analisi lessicale, sintattica e semantica**: rileva errori lessicali (parole chiave scritte male), sintattici (grammatica SQL) e semantici (riferimenti a tabelle o attributi inesistenti, serve il **dizionario dei dati**). Produce una rappresentazione interna in **algebra relazionale** (estesa), scelta perché esplicita l'ordine degli operatori, è procedurale e dispone di teoremi per trasformare l'albero.
2. **Ottimizzazione algebrica**: trasformazioni sempre vantaggiose, indipendenti dalla distribuzione dei dati; output: albero della query in forma "canonica".
3. **Ottimizzazione basata sui costi**: con i profili dei dati sceglie metodi di accesso e algoritmi; output: **programma di accesso** eseguibile e **insieme delle dipendenze** (condizioni da cui dipende la validità del piano, es. l'esistenza di un indice).

**Modalità di esecuzione**:
- *Compile and go*: compilazione ed esecuzione immediata, il piano non viene salvato, le dipendenze non servono.
- *Compile and store*: il piano è memorizzato nella base di dati con le sue dipendenze, eseguito su richiesta e da ricompilare quando cambiano le strutture dei dati.

## Formule chiave
Nessuna formula in questa parte (le formule di stima e costo sono nelle fasi successive).

## Intuizione
L'utente dice *cosa* vuole (SQL è dichiarativo), l'ottimizzatore decide *come*: l'algebra relazionale è il linguaggio intermedio in cui il "come" diventa esplicito e trasformabile.

## Come si usa
Domanda tipica: descrivere la pipeline e il ruolo di dizionario dei dati, profili e dipendenze. Nel caso compile and store, cancellare un indice invalida i piani che lo usano.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Query optimization", parte introduttiva. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/04 - 15-QueryOptimization.pdf` (pp. 3-15); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/01 - 12-IntroductionDBMS.pdf` (p. 5).
- **Base di dati** (triennale): l'ottimizzatore compare come motivo della dichiaratività di SQL (risultato ed efficienza di un join non dipendono dall'ordine delle tabelle nella FROM né dei predicati nella WHERE; l'ordine lo sceglie il modulo ottimizzatore). Il **dizionario dei dati** contiene i metadati della base di dati, è gestito dal DBMS e interrogabile in SQL: strutture (tabelle, indici, viste), stored procedure, privilegi, statistiche su tabelle, indici, viste e crescita; per ogni tabella nome, struttura fisica del file, nome e tipo degli attributi, indici e vincoli. In Oracle le collezioni `USER_*`, `ALL_*`, `DBA_*`; esempi: `SELECT Table_Name, Num_Rows FROM USER_TABLES;` e `SELECT Column_Name, Num_Distinct, Num_Nulls FROM USER_TAB_COL_STATISTICS WHERE Table_Name = 'FP' ORDER BY Column_Name;`. Fonti: `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 39, 51); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 15-20).

## Prerequisiti
- [[Architettura di un DBMS]]: modulo dell'architettura

## Porta a
- [[Ottimizzazione algebrica]]: prima fase di ottimizzazione
- [[Ottimizzazione basata sui costi]]: seconda fase di ottimizzazione

## Collegati
- [[Linguaggio SQL]]: l'ottimizzatore decide come eseguire un linguaggio dichiarativo
- [[Definizione delle tabelle in SQL]]: definizioni e vincoli registrati nel dizionario dei dati
