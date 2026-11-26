---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["optimistic concurrency control", "versioning dei documenti", "versione del documento", "_version"]
tags: [competenza, area/informatica]
---

# Controllo ottimistico della concorrenza

> Strategia che non blocca i dati ma assume che i conflitti siano rari: una modifica fallisce se i dati sono cambiati tra lettura e scrittura; in ElasticSearch si realizza con il numero di versione dei documenti.

## Definizione / enunciato
ElasticSearch usa il **controllo ottimistico della concorrenza**: assume che i conflitti siano improbabili; se però i dati sono stati modificati tra la lettura e la scrittura, l'aggiornamento fallisce. È diverso dalle transazioni ACID, che richiedono locking. Il processo è "semplice" con dati centralizzati.

**Propagazione delle modifiche**: i dati possono essere distribuiti su nodi diversi e gli shard replicati (*replica shard*). Quando un documento è creato, aggiornato o cancellato, la nuova versione va replicata sugli altri nodi: si scrive sempre prima la copia primaria, poi le richieste di replica partono in parallelo e possono arrivare **fuori ordine**.

**Versioni dei documenti**: ogni documento ha un numero `_version` incrementato a ogni modifica. Serve a
- garantire che una versione vecchia non sovrascriva mai una più nuova: se una versione vecchia arriva dopo una nuova, viene ignorata;
- evitare che modifiche in conflitto delle applicazioni causino perdita di dati.

Le API di update e delete accettano un parametro di versione, per applicare il controllo ottimistico solo quando serve.

## Formule chiave
Nessuna formula nelle slide: si usa il campo `_version` del documento, incrementato a ogni modifica, e il parametro di versione delle API di update e delete.

## Intuizione
Il locking (pessimistico) paga sempre il costo dei lock per evitare conflitti; l'approccio ottimistico non paga nulla quando non ci sono conflitti e fa fallire (o scartare) solo le scritture davvero in conflitto. In un sistema distribuito con repliche che ricevono aggiornamenti fuori ordine, la versione è anche ciò che ristabilisce l'ordine corretto.

## Come si usa
Lettura del documento con la sua `_version`, modifica nell'applicazione, scrittura con lo stesso numero di versione: se nel frattempo un altro client ha modificato il documento, la scrittura fallisce e l'applicazione rilegge e riprova.
Regola (riformulazione nostra della slide 68): una scrittura con versione attesa $v$ su un documento con versione corrente $v_{cur}$ si applica solo se $v=v_{cur}$ e porta la versione a $v_{cur}+1$; una replica con versione minore di quella presente è scartata.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/11 - 20-ElasticSearch_v2.pdf` (pp. 66-68).

## Prerequisiti
- [[ElasticSearch]]: gestione delle modifiche concorrenti

## Porta a
- Nessuno.

## Collegati
- [[Locking a due fasi]]: approccio ottimistico contro pessimistico
