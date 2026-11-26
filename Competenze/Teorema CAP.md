---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["CAP theorem", "teorema di Brewer", "consistency availability partition tolerance"]
tags: [competenza, area/informatica]
---

# Teorema CAP

> Un sistema distribuito non può garantire contemporaneamente consistenza, disponibilità e tolleranza alle partizioni di rete.

## Definizione / enunciato
Tre problemi tipici delle basi di dati distribuite:
- **Consistency**: tutti i nodi forniscono gli stessi dati all'applicazione;
- **Availability**: i guasti (es. del master) non impediscono ai nodi superstiti di continuare a operare;
- **Partition tolerance**: il sistema continua a operare nonostante perdite arbitrarie di messaggi, quando guasti di connettività creano partizioni di rete.

**Teorema CAP** (di Brewer): è impossibile che un sistema distribuito fornisca simultaneamente tutte e tre le garanzie. Congettura di Fox e Brewer (1999-2000), dimostrazione formale di Gilbert e Lynch (2002), ripensamento di Brewer nel 2012.

## Formule chiave
Le tre combinazioni (slide 40-42):
- **CA senza P** (consistenza locale): con una partizione, ogni parte resta consistente e disponibile ignorando le altre; sistemi indipendenti al 100% CA.
- **CP senza A** (*transaction locking*): con una partizione il sistema blocca le risposte finché la consistenza non è di nuovo verificabile; per tollerare P si sacrifica A.
- **AP senza C** (*best effort*): ogni parte risponde con quello che sa, senza garanzia di consistenza globale.

## Intuizione
Due nodi ai lati di una partizione: se uno aggiorna lo stato, i nodi diventano inconsistenti (si perde C); per preservare C un lato deve comportarsi come non disponibile (si perde A). Solo senza partizioni si hanno C e A insieme. Nei sistemi geografici P non si può sacrificare, quindi la scelta difficile è tra C e A.

## Come si usa
"Beyond CAP": la visione "2 su 3" è fuorviante, perché le partizioni sono rare (senza partizione non c'è motivo di rinunciare a C o A), la scelta tra C e A può cambiare per operazione, dato o utente, e le tre proprietà sono continue, non binarie. Conseguenza (W. Vogels, Amazon): ogni nodo dovrebbe decidere in base al solo stato locale, perché un algoritmo che impone di raggiungere un accordo diventa il collo di bottiglia. Da qui la filosofia BASE.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/09 - Beyond-relational-databases-18-12.pdf` (pp. 35-44).
- **Business intelligence per big data** (magistrale): stesse slide (caratteristiche delle basi di dati distribuite, CA senza P, CP senza A, AP senza C, conseguenze, "beyond CAP"). Fonti: `magistrale/Business intelligence per big data/Beyond-relational-databases-2021-06-01.pdf` (pp. 36-46).

## Prerequisiti
- [[Replicazione master-slave]]: consistenza tra repliche

## Porta a
- [[BASE]]: rinuncia alla consistenza forte

## Collegati
- [[Proprietà ACID]]: l'isolamento ACID è al cuore di CAP, la C di ACID non è la C di CAP
