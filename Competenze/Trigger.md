---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati]
livello: [magistrale, triennale]
aliases: ["active rules", "regole attive", "basi di dati attive", "active database", "regola ECA", "trigger row-level e statement-level", "BEFORE AFTER", "mutating table", "terminazione dei trigger", "progettazione dei trigger", "tabella mutante", "grafo di attivazione dei trigger", "confluenza dei trigger", "CREATE TRIGGER"]
tags: [competenza, area/informatica]
---

# Trigger

> Regola attiva Evento-Condizione-Azione definita con CREATE TRIGGER: il DBMS la esegue automaticamente quando una modifica su una tabella la attiva.

## Definizione / enunciato
Le **basi di dati attive** aggiungono la reattività: regole **ECA**. *Evento*: modifica della base di dati (insert, delete, update su una sola tabella). *Condizione*: predicato SQL opzionale. *Azione*: istruzioni SQL o blocco procedurale (PL/SQL). Il *rule engine* traccia gli eventi ed esegue le regole intercalandole con le transazioni.

- **Modalità**: *immediate* (before o after l'istruzione) o *deferred* (prima del commit; nei prodotti commerciali c'è solo immediate).
- **Granularità**: *row level* (una esecuzione per tupla) o *statement level* (una sola esecuzione). Esempio: `UPDATE T SET A=A+1 WHERE B<10` su 2 tuple → il trigger di riga gira due volte, quello di istruzione una.

## Formule chiave
```sql
CREATE TRIGGER Nome
  {BEFORE|AFTER} Evento {OR Evento} ON Tabella
  [[REFERENCING ...] FOR EACH ROW [WHEN Predicato]]
  Blocco PL/SQL
```
Algoritmo Oracle: (1) before statement; (2) per ogni tupla: before row, istruzione + vincoli sulle tuple, after row; (3) vincoli sulle tabelle; (4) after statement. In caso di errore si annulla tutto ciò che hanno fatto i trigger e l'istruzione.

## Intuizione
Il trigger singolo è semplice; il difficile sono le interazioni: l'azione di un trigger può essere l'evento di un altro. Proprietà: **terminazione** (si arriva sempre a uno stato finale) e **confluenza** (stato finale unico indipendente dall'ordine). La terminazione si garantisce a runtime con una lunghezza massima della cascata (default 32 in Oracle) o a progetto con il **grafo di attivazione** (un arco $T_i\to T_j$ se l'azione di $T_i$ attiva $T_j$): un ciclo indica possibile non terminazione. Esempio: `SalaryMonitor` moltiplica i salari per $K$ se la media supera 2500; con $K=0.9$ termina, con $K=1.1$ no.

## Come si usa
Oracle: OLD/NEW solo nei trigger di riga; la **mutating table** non è accessibile nei trigger di riga. DB2: un solo evento per trigger, OLD_TABLE/NEW_TABLE nei trigger di istruzione, esecuzione in ordine di creazione (deterministica). Applicazioni: vincoli di integrità complessi (al più 10 fornitori per parte; quantità troncata a 1000 con trigger BEFORE di riga), business rule (riordino del magazzino), alerter e manutenzione di viste materializzate.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): slide di lezione "Triggers" archiviate tra gli esercizi. Fonti: `magistrale/Data science tecnologie basi di dati/Esercizi/2 - SQL Esteso/03 - 10-Triggers-1.pdf` (pp. 4-16 basi attive, pp. 18-38 Oracle, pp. 40-52 DB2 e confronto, pp. 54-70 progetto, pp. 71-86 viste materializzate); i trigger come tecnica di estrazione incrementale in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (p. 20).
- **Base di dati** (triennale): versione italiana dello stesso mazzo ("Basi di dati attive: Trigger"), con gli stessi esempi (riordino `Reorder` su `Inventory`/`PendingOrders`, `SalaryMonitor`, `TooManySuppliers`, `ExcessiveQty`, vista materializzata `ES(DCId, TotalStudents)` mantenuta da tre trigger di riga AFTER su `S`). Procedura per i vincoli: scrivere il vincolo come predicato SQL, identificare gli eventi che possono violarlo, definire nell'azione la gestione (rifiutare con `raise_application_error` o compensare). Nel mazzo sulle tabelle i trigger sono confrontati con le procedure applicative e i vincoli dichiarativi: permettono vincoli complessi con un punto centralizzato di verifica, ma sono complessi e rallentano le applicazioni. Fonti: `triennale/ANNO 3/base di dati/Trigger-ita.pdf` (pp. 3-13 basi attive, pp. 15-36 Oracle, p. 38 confronto con DB2, pp. 40-70 progettazione); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 22, 26-28).

## Prerequisiti
- [[Vincoli di integrità]]: i trigger realizzano i vincoli non dichiarabili

## Porta a
- [[Refresh delle viste materializzate]]: manutenzione delle viste con trigger

## Collegati
- [[Transazione]]: eseguiti dentro la transazione che li attiva
