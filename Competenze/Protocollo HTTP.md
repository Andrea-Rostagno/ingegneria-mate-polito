---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [HTTP, HyperText Transfer Protocol, HTTPS, metodi HTTP, metodo GET, POST, PUT, DELETE HTTP, status code, codici di stato HTTP, parametri URL, query string, URI, applicazione web, request-response]
tags: [competenza, area/informatica]
---

# Protocollo HTTP

> Protocollo request-response con cui un client web (il browser) chiede risorse a un server; è la base delle applicazioni web che interrogano una base di dati.

## Definizione / enunciato
Un'**applicazione web** è ospitata da un server remoto e usata via internet con un browser: niente installazione o aggiornamento per l'utente, accesso da dispositivi diversi, meno problemi di compatibilità, deployment e manutenzione facili.

**HTTP** (HyperText Transfer Protocol) è il protocollo più diffuso tra web-server e web-client, basato sul paradigma **request-response**. La richiesta contiene (non solo) un **metodo** e l'**URI**, percorso che identifica univocamente la risorsa. Il server elabora la richiesta, eventualmente interroga il database, e restituisce la risorsa (per esempio una pagina HTML) con uno **status code**.

## Formule chiave
| metodo | uso |
|---|---|
| GET | recuperare dati |
| POST | inserire dati |
| PUT | aggiornare dati o inserirli se non esistono |
| DELETE | eliminare la risorsa |

Classi di status code: 1xx informativo, 2xx successo, 3xx reindirizzamento, 4xx errore lato client, 5xx errore lato server (es. 404 "Not Found").

Parametri URL (query string): dopo `?`, separati da `&`, nella forma `key=value`: `http://www.ecommerce.com/prodotti/scarpe?colore=rosso&sort=latest`.

## Intuizione
I metodi HTTP ricalcano le operazioni sui dati (leggere, inserire, aggiornare, cancellare), e i parametri URL servono proprio a filtrare o completare le interrogazioni fatte dal server al DBMS.

## Come si usa
**HTTPS** (HTTP Secure) cifra la comunicazione con TLS/SSL sulla base di un certificato che autentica il server; protegge i dati sensibili da man in the middle ed eavesdropping, ed è il nuovo standard (i browser segnalano come non sicuri i siti senza HTTPS). Nello sviluppo si distinguono frontend (parte visibile), backend (server, elaborazione delle richieste, accesso al database) e database (storage).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/applicazioni_web.pdf` (pp. 4-12).

## Prerequisiti
- [[Architettura client-server]]: HTTP è un protocollo client-server

## Porta a
- [[Linguaggio HTML e CSS]]: le risorse restituite sono pagine HTML

## Collegati
- [[Accesso a un DBMS da Python]]: il backend interroga il database per rispondere
