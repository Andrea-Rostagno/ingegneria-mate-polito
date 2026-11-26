---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["ACID versus BASE", "Basically Available Soft state Eventually consistent", "eventual consistency", "risoluzione dei conflitti"]
tags: [competenza, area/informatica]
---

# BASE

> Basically Available, Soft state, Eventually consistent: la filosofia dei sistemi distribuiti che privilegia la disponibilità e accetta una consistenza che arriva col tempo, all'opposto di ACID.

## Definizione / enunciato
ACID e BASE sono due filosofie di progetto agli estremi opposti dello spettro consistenza-disponibilità. ACID punta sulla consistenza (approccio tradizionale dei database); BASE punta sull'alta disponibilità e funziona bene in presenza di partizioni.
- **Basically Available**: il sistema garantisce la disponibilità, nel senso del teorema CAP.
- **Soft state**: lo stato può cambiare nel tempo anche senza input, a causa della consistenza finale.
- **Eventual consistency**: il sistema diventa consistente col tempo, se nel frattempo non riceve input.

Esempio: il DNS (che non è multi-master).

## Formule chiave
Nessuna formula. Le slide confrontano le lettere di ACID con CAP: la **C** di ACID significa che la transazione rispetta tutte le regole del database (es. chiavi uniche), mentre la C di CAP indica solo la consistenza della copia singola; l'**I** (isolamento) è al cuore di CAP: un sistema che richiede isolamento ACID durante una partizione può operare al più su un lato.

## Intuizione
Invece di bloccare tutto finché le repliche concordano (CP), il sistema risponde subito (AP) e lascia che le repliche convergano. Il prezzo sono i conflitti, da rilevare e risolvere.

## Come si usa
Esempio dei conflitti: due clienti prenotano l'ultima camera su nodi non consistenti; il documento della camera riceve due aggiornamenti in conflitto, che l'applicazione risolve con logica di business o il database risolve localmente (es. vince l'ultima versione). Esempio di progetto: in CouchDB il bonifico con due aggiornamenti separati non garantisce il saldo; si registra invece un documento transazione e il saldo si ricava con MapReduce.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/09 - Beyond-relational-databases-18-12.pdf` (pp. 45-50; ricetta bancaria pp. 69-75).
- **Business intelligence per big data** (magistrale): stesse slide (ACID, BASE, ACID contro BASE) e rilevazione e risoluzione dei conflitti: due clienti prenotano l'ultima camera su nodi non consistenti; l'applicazione risolve con logica propria, il database rileva il conflitto e dà una soluzione locale; CouchDB sceglie il vincitore in modo deterministico (storia delle revisioni più lunga, poi `_rev` in ordine ASCII). Fonti: `magistrale/Business intelligence per big data/Beyond-relational-databases-2021-06-01.pdf` (pp. 47-53).

## Prerequisiti
- [[Teorema CAP]]: rinuncia alla consistenza forte

## Porta a
- Nessuno.

## Collegati
- [[Proprietà ACID]]: filosofie di progetto opposte
- [[Replicazione master-slave]]: conflitti tra repliche
