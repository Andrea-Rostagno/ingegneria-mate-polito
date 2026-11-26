---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati]
livello: [magistrale, triennale]
aliases: ["client/server", "architetture distribuite", "2-tier", "3-tier", "esecuzione di SQL lato server", "compile and store remoto", "portabilità", "interoperabilità"]
tags: [competenza, area/informatica]
---

# Architettura client-server

> L'architettura distribuita più semplice e diffusa: il server gestisce la base di dati, il client l'interfaccia utente; è il primo gradino di una famiglia che comprende basi di dati distribuite, replicate e parallele.

## Definizione / enunciato
Nelle **architetture distribuite** dati e calcolo sono distribuiti su macchine diverse, con livelli di complessità che dipendono dall'indipendenza dei nodi; vantaggi tipici: prestazioni, disponibilità, affidabilità. Le slide elencano:
- **client/server**: il server gestisce la base di dati, il client l'interfaccia utente;
- **basi di dati distribuite**: più server DBMS autonomi ma cooperanti su nodi diversi; garantire le ACID richiede tecniche più complesse;
- **replicazione**: una replica è una copia dei dati su un altro nodo, aggiornata autonomamente da un replication server (architettura più semplice della base di dati distribuita);
- **architetture parallele** (unico obiettivo: le prestazioni) e **data warehouse** (server specializzati nel supporto alle decisioni, OLAP).

Proprietà rilevanti: **portabilità** (spostare un programma da un sistema a un altro, garantita dallo standard SQL) e **interoperabilità** (server DBMS diversi che cooperano, servono protocolli come ODBC e X-Open-DTP).

**Client/server a 2 livelli**: client "spessi" con parte della logica applicativa, server DBMS che dà accesso ai dati. **A 3 livelli**: client "sottile" (browser), application server con la logica di business (di solito anche web server), server DBMS.

## Formule chiave
Esecuzione di SQL lato server:
- **Compile & Go**: la query è inviata, preparata (piano), eseguita e il risultato spedito; il piano non è memorizzato. Adatto a query una tantum e SQL dinamico.
- **Compile & Store**: il piano è memorizzato sul server per usi futuri. Efficiente per esecuzioni ripetute e parametriche della stessa query.

## Intuizione
Separare interfaccia, logica e dati permette di scalare e cambiare ciascun livello senza toccare gli altri; il costo è che il server deve gestire molti client concorrenti.

## Come si usa
Le due modalità di esecuzione sono le stesse dell'ottimizzatore (compile and go / compile and store), viste dal punto di vista della comunicazione client-server. L'architettura a 3 livelli è quella delle applicazioni web.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Distributed architectures", "Client/server architectures", "SQL execution". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/08 - 19-DistributedDatabases.pdf` (pp. 2-11).
- **Base di dati** (triennale): come base delle applicazioni web. Architettura distribuita in cui il **client** richiede un servizio o una risorsa esposta dal **server**, che riceve ed elabora la richiesta; la comunicazione segue un **protocollo** (regole standardizzate, es. HTTP, FTP, SMTP). Nell'applicazione web il server interroga il database e restituisce la pagina al browser. Fonti: `triennale/ANNO 3/base di dati/applicazioni_web.pdf` (pp. 4-7).

## Prerequisiti
- [[Architettura di un DBMS]]: il DBMS come server

## Porta a
- [[Frammentazione dei dati]]: dati distribuiti su più server
- [[Protocollo HTTP]]: protocollo client-server delle applicazioni web

## Collegati
- [[Parallelismo nei DBMS]]: architetture distribuite e parallele
