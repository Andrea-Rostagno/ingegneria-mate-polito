---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [integrity constraints, vincolo d'integrità, vincolo intra-relazionale, vincolo inter-relazionale, vincolo di dominio, vincolo di tupla, vincolo di unicità, UNIQUE, NOT NULL, CHECK, vincoli di tabella]
tags: [competenza, area/informatica]
---

# Vincoli di integrità

> Proprietà che ogni istanza corretta della base di dati deve soddisfare; in SQL si dichiarano nella definizione delle tabelle e il DBMS le verifica a ogni modifica.

## Definizione / enunciato
Tipi di vincolo:
- **intra-relazionali**, su una sola relazione: unicità (chiavi), **vincoli di dominio** (condizioni sul valore di un singolo attributo, espressione booleana di predicati semplici: `Voto > 0 and Voto ≤ 30`), **vincoli di tupla** (condizioni su una singola tupla, indipendenti dalle altre, anche tra attributi diversi: `Prezzo = Costo + PercIVA*Costo`, `Lode = True` se `Voto = 30`);
- **inter-relazionali**, su più relazioni: vincoli di integrità referenziale.

La correttezza dello stato si può verificare con le procedure applicative, con vincoli dichiarati sulle tabelle o con trigger.

## Formule chiave
Vincoli di tabella in SQL:
```sql
NomeAttributo Dominio PRIMARY KEY
NomeAttributo Dominio NOT NULL
NomeAttributo Dominio UNIQUE        -- o UNIQUE (ElencoAttributi)
NomeAttributo Dominio CHECK (Condizione)
```
Esempio: `NSoci SMALLINT CHECK (NSoci>0)`, `Qta INTEGER CHECK (Qta IS NOT NULL and Qta>0)`.

## Intuizione
Dichiararli nel DBMS dà un **unico punto centralizzato di verifica** che non si può aggirare, descritto nel dizionario dei dati; nelle applicazioni la conoscenza delle regole resta nascosta e un errore di codifica può corrompere i dati. Limite: non si possono dichiarare vincoli arbitrari (per esempio su dati aggregati), che richiedono trigger.

## Come si usa
I vincoli di tabella sono verificati dopo ogni istruzione SQL che inserisce o modifica le colonne coinvolte; se violati, l'istruzione genera un errore. Per riparare una violazione il sistema può impedire l'operazione o eseguire un'azione compensativa (cancellare le forniture di un fornitore cancellato). Nello script dell'homework: `CONSTRAINT chk_Livello CHECK (Livello>=1 and Livello<=4)` (`HW base di dati/creaDB.sql`).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Modello-relazionale-1.pdf` (pp. 27-30); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 22-39, 45).

## Prerequisiti
- [[Modello relazionale]]: istanze di cui si vuole la correttezza

## Porta a
- [[Integrità referenziale]]: il vincolo inter-relazionale principale
- [[Definizione delle tabelle in SQL]]: i vincoli si dichiarano in CREATE e ALTER TABLE
- [[Dipendenza funzionale]]: tipo particolare di vincolo di integrità

## Collegati
- [[Trigger]]: vincoli complessi non dichiarabili e azioni compensative
- [[Proprietà ACID]]: la consistenza è verificata tramite i vincoli
- [[Documentazione di schemi ER]]: vincoli non esprimibili nello schema ER
