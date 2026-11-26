---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati]
livello: [magistrale, triennale]
aliases: ["physical design", "progettazione fisica", "carico di lavoro", "workload", "euristiche di progettazione fisica", "group by push down", "covering index", "indice composto", "database tuning", "CREATE INDEX", "DROP INDEX", "gestione degli indici", "schema fisico"]
tags: [competenza, area/informatica]
---

# Progettazione fisica di una base di dati

> Ultima fase della progettazione: dato lo schema logico, il DBMS e il carico di lavoro, sceglie organizzazione dei file e indici per dare buone prestazioni senza toccare le applicazioni.

## Definizione / enunciato
Fasi della progettazione: requisiti → progettazione concettuale (ER, UML) → logica (tabelle relazionali) → **fisica** (schema fisico). Obiettivo: buone prestazioni; il software applicativo non cambia (indipendenza dei dati). Richiede di scegliere il DBMS, perché strutture e tecniche di accesso variano.
- **Input**: schema logico; caratteristiche del DBMS; **carico di lavoro** (query importanti e aggiornamenti con frequenza stimata, prestazioni richieste).
- **Output**: schema fisico (organizzazione delle tabelle, indici) e parametri di memorizzazione e configurazione (dimensioni dei file, spazio libero iniziale, buffer, pagina).
- **Dimensioni di scelta**: organizzazione dei file (heap, ordinata/clustered, hash, clustering di più relazioni); indici (B+-tree, hash; uno solo clustered/primario, molti unclustered/secondari); eventuali modifiche dello schema logico (anche non in BCNF, es. nei data warehouse; partizionamento su dischi diversi).

Per ogni query si caratterizzano tabelle, attributi visualizzati, attributi di selezione e join, selettività; per ogni aggiornamento anche tipo e attributi modificati.

## Formule chiave
Nessuna formula: non esiste una metodologia generale, ma criteri ed euristiche (processo per tentativi).

## Intuizione
Ogni indice accelera alcune letture e rallenta tutte le scritture: si aggiunge un indice solo se il piano della query frequente migliora e il costo sugli aggiornamenti e sullo spazio è accettabile.

## Come si usa
**Euristiche**: mai indicizzare tabelle piccole né attributi con dominio a bassa cardinalità (es. genere; non vale nei DW con gli indici bitmap); uguaglianza → hash o B+-tree, intervallo → B+-tree; più predicati → indice composto, con l'ordine degli attributi giusto; nested loop → indice sull'attributo di join della tabella interna; merge scan → B+-tree (meglio clustered) sull'attributo di join; group by → indice sugli attributi di raggruppamento e **group by push down** (anticipo del raggruppamento rispetto ai join).
**Esempi delle slide** su EMP(Emp#, EName, Dept#, Salary, Age, Hobby), DEPT(Dept#, DName, Mgr): `Salary/12 = 1500` ignora l'indice per l'espressione aritmetica; con fattore di blocco 30, un indice secondario su Emp.Dept# non serve con 50 dipartimenti (ogni pagina li contiene quasi tutti) e serve con 2000; `SELECT Dept#, COUNT(*) FROM EMP GROUP BY Dept#` con indice secondario su Dept# è un **covering index**; indice composto ⟨Age, Salary⟩ per `Age = 25 AND Salary BETWEEN 3000 AND 5000`.
Se non funziona: aggiornare le statistiche, aggiungere/togliere indici (tuning), solo in ultimo gli hint.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): mazzo "Physical Design" con 10 esempi. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/05 - 16-PhysicalDesign.pdf` (pp. 2-41).
- **Base di dati** (triennale): stesse voci di input (schema logico, caratteristiche del DBMS, volume dei dati, stima del carico applicativo), output (schema fisico e parametri di memorizzazione) e procedimento empirico per tentativi, con tuning guidato dal piano di esecuzione. In più la **gestione degli indici** in SQL: gli indici sono strutture fisiche accessorie (alberi, hash table) e le istruzioni non fanno parte dello standard. `CREATE INDEX NomeIndice ON NomeTabella (ElencoAttributi)`: l'ordine degli attributi conta (chiavi ordinate prima sul primo attributo, a parità sul secondo, ...), meglio il numero minimo di attributi, di solito uno; esempio `CREATE INDEX IndiceCognomeNome ON DIPENDENTE(Cognome,Nome)`. `DROP INDEX NomeIndice` quando l'indice non è più usato o il guadagno sulle interrogazioni non compensa il rallentamento degli aggiornamenti. Fonti: `triennale/ANNO 3/base di dati/SQL_costrutti_avanzati.pdf` (pp. 52-63).

## Prerequisiti
- [[Indice clustered e unclustered]]: scelta dell'indice primario
- [[Ottimizzazione basata sui costi]]: prevedere il piano scelto
- [[Fasi della progettazione di una base di dati]]: è l'ultima fase, dopo concettuale e logica

## Porta a
- Nessuno.

## Collegati
- [[Progettazione fisica del data warehouse]]: stessa metodologia su carico analitico
- [[Ottimizzazione algebrica]]: group by push down come anticipo del raggruppamento
