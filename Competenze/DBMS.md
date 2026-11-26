---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [Data Base Management System, Database Management System, sistema di gestione di basi di dati, base di dati, database, DDL e DML, utenti di una base di dati, DBA, database administrator]
tags: [competenza, area/informatica]
---

# DBMS

> Sistema software che gestisce collezioni di dati grandi, condivise e persistenti, garantendone affidabilità e privatezza: è ciò che trasforma un insieme di file in una base di dati.

## Definizione / enunciato
Una **base di dati** è una collezione di dati che rappresenta le informazioni di interesse per un sistema informativo; in senso tecnico, una collezione di dati gestita da un **DBMS** (Data Base Management System). I dati sono simboli grezzi; diventano informazione quando vengono interpretati e correlati (es. "Mario Rossi" e 424242 → numero di telefono in agenda). I dati sono più stabili nel tempo delle procedure che li gestiscono.

Il DBMS gestisce collezioni di dati
- **grandi**: molto più della memoria centrale, quindi gestite in memoria secondaria;
- **condivise** tra applicazioni e utenti: riduce ridondanza e inconsistenze, richiede controllo dell'accesso concorrente;
- **persistenti**: vita non limitata a quella dei programmi che le usano;

garantendo **affidabilità** (backup e recovery), **privatezza** (autorizzazioni), **efficienza** ed **efficacia**.

## Formule chiave
Linguaggi: **DDL** (Data Definition Language) per schemi logici, esterni, fisici e autorizzazioni; **DML** (Data Manipulation Language) per interrogare e aggiornare le istanze. Accesso: interfacce grafiche, linguaggi interattivi (SQL), comandi immersi in un linguaggio ospite (C, Java, Python), ORM.

## Intuizione
Un file system offre solo memorizzazione, lettura sequenziale e un blocco del file in scrittura; il DBMS estende questi servizi in modo integrato. Il prezzo: prodotti costosi e complessi, con servizi che non si possono scorporare anche se inutilizzati.

## Come si usa
Ruoli: il **DBA** controlla centralmente la base di dati (prestazioni, affidabilità, autorizzazioni); progettisti e programmatori ne definiscono struttura e programmi; gli utenti finali usano **transazioni** (attività predefinite: prenotazione di un volo, bonifico), gli utenti casuali scrivono interrogazioni non predefinite. Vantaggi: dati come risorsa comune, modello unificato, controllo centralizzato, indipendenza dei dati. Tipi di DBMS: relazionali, ad oggetti, documentali, data warehouse, serie temporali, a grafo, in-memory.

## Nei corsi
- **Base di dati** (triennale): prima lezione del corso. Fonti: `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (pp. 5-13 dati e DBMS, pp. 31-34 linguaggi e utenti, pp. 36-37 vantaggi e svantaggi).

## Prerequisiti
- Nessuno.

## Porta a
- [[Modello relazionale]]: il modello logico dei dati più diffuso
- [[Indipendenza dei dati]]: conseguenza dei livelli di astrazione del DBMS
- [[Linguaggio SQL]]: realizza DDL e DML nei DBMS relazionali
- [[Fasi della progettazione di una base di dati]]: come si progetta la base di dati gestita

## Collegati
- [[Architettura di un DBMS]]: i moduli interni che realizzano questi servizi
- [[Gerarchia di memoria]]: dati più grandi della memoria centrale, gestiti in memoria secondaria
- [[Sistemi NoSQL]]: DBMS non relazionali (documentali, a grafo, ...)
- [[Controllo dell'accesso in SQL]]: realizza la privatezza dei dati
