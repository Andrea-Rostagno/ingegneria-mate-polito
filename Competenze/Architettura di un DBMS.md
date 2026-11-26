---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["DBMS architecture", "componenti del DBMS", "DBMS server", "ottimizzatore", "gestore dei metodi di accesso", "access method manager", "reliability manager"]
tags: [competenza, area/informatica]
---

# Architettura di un DBMS

> Un DBMS server è una pila di moduli (ottimizzatore, metodi di accesso, buffer manager) affiancata da controllo della concorrenza e gestore dell'affidabilità: ognuno fornisce un servizio alle applicazioni.

## Definizione / enunciato
Un **DBMS** (Data Base Management System) è un pacchetto software progettato per memorizzare e gestire basi di dati. Il corso studia i suoi **meccanismi interni**, perché servono per fare le scelte giuste di configurazione del sistema e di progettazione fisica delle applicazioni. Alcuni di questi servizi stanno comparendo anche nei sistemi operativi.

Un comando SQL attraversa, dall'alto verso il basso, i componenti:
- **Ottimizzatore**: riceve l'istruzione DML, esegue l'analisi lessicale, sintattica e semantica (rileva alcuni errori), la traduce in una rappresentazione interna basata sull'algebra relazionale e sceglie la strategia di accesso ai dati. Garantisce l'**indipendenza dei dati** del modello relazionale.
- **Gestore dei metodi di accesso** (access method manager): esegue l'accesso fisico ai dati secondo la strategia scelta dall'ottimizzatore.
- **Buffer manager**: trasferisce le pagine tra disco e memoria centrale e gestisce la porzione di memoria preallocata al DBMS (es. la SGA di Oracle), condivisa tra le applicazioni.
- **Controllo della concorrenza**: gestisce l'accesso concorrente, importante soprattutto per le scritture, perché le applicazioni non interferiscano creando problemi di consistenza.
- **Gestore dell'affidabilità** (reliability manager): garantisce la correttezza del contenuto dopo un guasto e l'esecuzione atomica delle transazioni, usando strutture ausiliarie (file di log).

Sul disco stanno i file dei dati, i file degli indici e il catalogo (dizionario dei dati).

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
Ogni proprietà ACID ha un "proprietario" nell'architettura: l'isolamento al controllo della concorrenza, atomicità e durabilità al gestore dell'affidabilità, la consistenza ai vincoli dello schema. Conoscere chi fa cosa permette di capire dove intervenire quando le prestazioni sono scarse.

## Come si usa
Nelle domande d'esame "descrivere l'architettura di un DBMS" si disegna lo schema a blocchi della slide (p. 3-4) e si descrive il ruolo di ciascun componente. È anche la mappa di tutta la Parte II del corso: ogni modulo è trattato in un mazzo di slide successivo.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): introduzione alla Parte II, schema "DBMS Architecture" e descrizione dei componenti. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/01 - 12-IntroductionDBMS.pdf` (pp. 2-9).

## Prerequisiti
- Nessuno.

## Porta a
- [[Buffer manager]]: modulo dell'architettura
- [[Strutture sequenziali]]: il gestore dei metodi di accesso realizza l'accesso fisico
- [[Ottimizzatore di query]]: modulo dell'architettura
- [[Log delle transazioni]]: strumento del gestore dell'affidabilità
- [[Architettura client-server]]: il DBMS come server

## Collegati
- Nessuno.
