---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["classificazione delle transazioni", "remote request", "remote transaction", "distributed transaction", "distributed request", "ACID distribuite", "ottimizzazione distribuita delle query", "basi di dati distribuite"]
tags: [competenza, area/informatica]
---

# Transazioni distribuite

> In una base di dati distribuita le transazioni dei client accedono a più server DBMS autonomi; si classificano per complessità (remote request, remote transaction, distributed transaction, distributed request) e richiedono tecniche distribuite per le ACID.

## Definizione / enunciato
In un **sistema di basi di dati distribuite** le transazioni dei client accedono a più server; ogni server ha **autonomia locale** (gestisce in modo autonomo controllo della concorrenza e ripristino dei dati locali). Vantaggi funzionali (localizzazione di dati e applicazioni) e tecnologici (più disponibilità: si riduce la probabilità di blocco totale, anche se blocchi locali possono essere più frequenti; più scalabilità).

**Classificazione** (in base alle istruzioni SQL ammesse; il client invia la transazione a un server che la ridistribuisce):
- **Remote request**: solo SELECT, un solo server remoto.
- **Remote transaction**: qualunque comando SQL, un solo server remoto.
- **Distributed transaction**: qualunque comando, ogni istruzione indirizzata a un solo server; serve l'**atomicità globale** (two-phase commit).
- **Distributed request**: ogni istruzione può riferirsi a dati su server diversi; serve l'**ottimizzazione distribuita**; solo questa classe offre la trasparenza di frammentazione.

**ACID in ambiente distribuito**: atomicità con il 2PC; consistenza, vincoli verificati solo localmente; isolamento, richiede 2PL stretto e 2PC; durabilità, estensione delle procedure locali.
**Ottimizzazione distribuita**: la fa il DBMS che riceve la richiesta: divide la query in sottoquery per i singoli DBMS, sceglie ordine e tecnica delle operazioni anche sui diversi nodi (il costo di trasmissione può diventare rilevante), eventualmente la replica, e coordina i nodi.

## Formule chiave
Esempio: Account(Acc#, Name, Balance) con $A_1=\sigma_{Acc\#<10000}$ sul nodo 1 e $A_2=\sigma_{Acc\#\ge10000}$ sul nodo 2; bonifico di 100 da 3000 a 13000.

## Intuizione
La classe dipende da quanto il programmatore "vede" la distribuzione: se scrive su Account (frammentazione trasparente) il sistema deve spezzare la query; se scrive esplicitamente su A1 e A2 deve solo coordinare il commit.

## Come si usa
Esempio delle slide: il bonifico su Account non partizionato esplicitamente è una **distributed request**; se le UPDATE citano esplicitamente A1 e A2 è una **distributed transaction**; se entrambe citano solo A1 (es. seconda con Acc# = 9000) è una **remote transaction**. Il rilevamento del deadlock tramite grafo delle attese è usato proprio nei DBMS distribuiti.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Distributed database systems", "Transaction classification", "Distributed DBMS technology". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/08 - 19-DistributedDatabases.pdf` (pp. 12-14, 30-39); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (p. 79).

## Prerequisiti
- [[Frammentazione dei dati]]: transazioni su frammenti remoti

## Porta a
- [[Two-phase commit]]: atomicità di una transazione distribuita

## Collegati
- [[Deadlock]]: rilevamento con il grafo delle attese nei DBMS distribuiti
