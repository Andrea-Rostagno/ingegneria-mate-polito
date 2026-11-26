---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati, Business intelligence per big data]
livello: [magistrale, triennale]
aliases: ["document model", "document database", "database a documenti", "MongoDB", "documento JSON", "BSON", "collezione", "document data design", "sotto-documento", "_id"]
tags: [competenza, area/informatica]
---

# Modello documentale

> Modello dei database a documenti come MongoDB: i record sono documenti JSON/BSON annidati e senza schema fisso, raccolti in collezioni.

## Definizione / enunciato
I **document database** associano chiavi a documenti autodescrittivi (attributo = valore), con strutture annidate ad albero (mappe, liste, date) e natura eterogenea. **MongoDB** è il leader dei database NoSQL a documenti: alte prestazioni, alta disponibilità, scalabilità nativa, flessibilità, open source.

Corrispondenza approssimata con il relazionale: tabella → **collezione**, record → **documento**, colonna → **campo**.

**Document data design**: rappresentazione dei dati di alto livello, vicina al business, che si mappa sugli oggetti dei linguaggi (date, timestamp, array, sotto-documenti). I record sono **documenti BSON** (rappresentazione binaria di JSON), coppie campo-valore eventualmente annidate.

Regole sui documenti:
- `_id` è riservato come chiave primaria: unico nella collezione, immutabile, eventualmente autogenerato, di qualunque tipo tranne array;
- i nomi dei campi non possono contenere il carattere null; punti e `$` sono ammessi dal server;
- dimensione massima di un documento BSON 16 MB (oltre si usa GridFS);
- a differenza degli oggetti JavaScript, i campi di un documento BSON sono ordinati.

Ogni istanza gestisce più database; ogni database contiene collezioni; ogni collezione contiene documenti che rappresentano oggetti simili ma possono avere campi diversi (schema-less; dalla versione 3.2 si possono imporre regole di validazione).

## Formule chiave
Esempio di documento con array e documento annidato (slide):
```javascript
{ user_id: "abc124", age: 45,
  favorite_colors: ["blue", "green"],
  address: { street: "my street", city: "my city" } }
```

## Intuizione
Ciò che nel relazionale richiede più tabelle e un join qui sta in un solo documento. Lo svantaggio dichiarato dalle slide: le relazioni tra documenti sono inefficienti e portano a denormalizzazione (riferimenti per ObjectID senza join nativo), e c'è la tentazione di andare troppo "schema-free" anche con dati strutturati.

## Come si usa
Si decide cosa incorporare nel documento (sotto-documenti, array) e cosa referenziare per `_id`, guardando alle interrogazioni più frequenti. ElasticSearch usa lo stesso tipo di documenti JSON.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/10 - 02-MongoDB-intro-GUI.pdf` (pp. 2-7, 17-18); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/09 - Beyond-relational-databases-18-12.pdf` (p. 10 document database, pp. 53-56 MongoDB).
- **Base di dati** (triennale): esempio di modello alternativo al relazionale nell'introduzione: il database è un insieme di raccolte (collezioni) di documenti descritti da campi chiave-valore, eterogenei nella stessa collezione perché privi di schema; corrispondenze tabella → collezione, riga → documento, colonna → campo; le relazioni tra documenti sono inefficienti (riferimento per ID, senza join nativo) e portano alla de-normalizzazione. Fonti: `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (pp. 20-21).
- **Business intelligence per big data** (magistrale): modello a documenti nel mazzo "Beyond relational databases" (esempio in sintassi MongoDB) e introduzione di MongoDB (terminologia a confronto con l'SQL, progettazione dei documenti, caratteristiche principali), seguita da [[Query find in MongoDB]] e [[Indici in MongoDB]]. Fonti: `magistrale/Business intelligence per big data/Beyond-relational-databases-2021-06-01.pdf` (pp. 24-29); `magistrale/Business intelligence per big data/MongoDB-2021-06-01.pdf` (pp. 2-6).

## Prerequisiti
- [[Sistemi NoSQL]]: database a documenti

## Porta a
- [[Operazioni CRUD in MongoDB]]: operazioni sui documenti

## Collegati
- [[ElasticSearch]]: documenti JSON
- [[Modello relazionale]]: collezione, documento e campo corrispondono a tabella, riga e colonna
