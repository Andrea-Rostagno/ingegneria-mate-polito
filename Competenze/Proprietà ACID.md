---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Base di dati, Blockchain e criptoeconomia]
livello: [magistrale, triennale]
aliases: ["ACID", "atomicità", "consistenza", "isolamento", "durabilità", "atomicity", "consistency", "isolation", "durability", "persistenza", "effetto domino"]
tags: [competenza, area/informatica]
---

# Proprietà ACID

> Le quattro garanzie che un DBMS offre su ogni transazione: Atomicità, Consistenza, Isolamento, Durabilità, ciascuna assicurata da un modulo diverso.

## Definizione / enunciato
- **Atomicità**: la transazione non si può dividere in unità più piccole; non si può lasciare la base di dati in uno stato intermedio. È garantita da **undo** (si annulla tutto il lavoro della transazione fino al punto corrente: usato per il rollback) e **redo** (si rifà il lavoro delle transazioni con commit: garantisce il commit in presenza di guasti).
- **Consistenza**: l'esecuzione non deve violare i vincoli di integrità definiti nello schema (chiave primaria, integrità referenziale/chiavi esterne, vincoli di dominio...). Se il sistema rileva una violazione può fare rollback della transazione o correggere automaticamente la violazione.
- **Isolamento**: l'esecuzione di una transazione è indipendente dall'esecuzione concorrente delle altre. È assicurato dal blocco di **controllo della concorrenza**.
- **Durabilità**: l'effetto di una transazione con commit non va perso in caso di guasto. È assicurata dal **gestore dell'affidabilità**.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
Atomicità e durabilità sono le due facce del log: undo per ciò che non deve restare, redo per ciò che deve restare. L'isolamento è quello che rende possibile ragionare su una transazione "come se fosse sola".

## Come si usa
- Per ogni proprietà, all'esame si indica il meccanismo e il modulo che la realizza.
- Le anomalie (lost update, dirty read, ...) sono violazioni dell'isolamento.
- Nell'introduzione al corso le ACID sono indicate come critiche per l'OLTP; nei sistemi NoSQL le si contrappone alla filosofia BASE.
- In ambiente distribuito l'atomicità richiede il protocollo two-phase commit.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): una slide per proprietà. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/01 - 12-IntroductionDBMS.pdf` (pp. 14-18); `magistrale/Data science tecnologie basi di dati/00 - Introduzione al corso/DSTBD_0-IntroductionCourse.pdf` (p. 2); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/08 - 19-DistributedDatabases.pdf` (p. 38).
- **Base di dati** (triennale): una slide per proprietà, con "persistenza" come sinonimo di durabilità. Consistenza: la correttezza è verificata dai vincoli di integrità; alla violazione il sistema annulla la transazione o modifica lo stato eliminando la violazione. Isolamento: gli effetti non sono visibili prima della terminazione, perché uno stato intermedio annullato da un rollback costringerebbe a fare rollback anche delle transazioni che lo hanno osservato (*effetto domino*). Fonti: `triennale/ANNO 3/base di dati/SQL_costrutti_avanzati.pdf` (pp. 32-36).
- **Blockchain e criptoeconomia** (magistrale): l'aggettivo "atomic" torna negli atomic swap e nei pagamenti Lightning: una transazione cross-chain "o avviene per intero o non avviene per nulla", garantito da un hashlock comune e non da un DBMS con log e rollback. Il parallelo con l'atomicità ACID è un'analogia, non dichiarata nelle slide. Fonti: `magistrale/Blockchain e criptoeconomia/03-Bitcoin.pdf` (pp. 109-110); `03B-Lightning Network.pdf` (p. 20).

## Prerequisiti
- [[Transazione]]: proprietà delle transazioni

## Porta a
- [[Anomalie delle transazioni concorrenti]]: violazioni dell'isolamento
- [[Log delle transazioni]]: garantisce atomicità e durabilità

## Collegati
- [[Teorema CAP]]: l'isolamento ACID è al cuore di CAP, la C di ACID non è la C di CAP
- [[OLTP e OLAP]]: requisito critico dell'OLTP
- [[BASE]]: filosofie di progetto opposte
- [[Vincoli di integrità]]: la consistenza è verificata tramite i vincoli
- [[Atomic swap]]: atomicità "tutto o niente" fra due blockchain, ottenuta con HTLC (Blockchain e criptoeconomia)
