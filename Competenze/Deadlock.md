---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["stallo", "timeout", "deadlock prevention", "deadlock detection", "grafo delle attese", "wait graph", "2PL pessimistico", "timestamp"]
tags: [competenza, area/informatica]
---

# Deadlock

> Situazione in cui due o più transazioni si attendono a vicenda per lock che nessuna rilascerà; tipica dei sistemi concorrenti gestiti con locking. Si risolve con timeout, prevenzione o rilevamento.

## Definizione / enunciato
Esempio delle slide: T1 ottiene `r_lock1(x)`, T2 ottiene `r_lock2(y)`; poi T1 chiede `w_lock1(y)` e T2 chiede `w_lock2(x)`: entrambe restano in attesa per sempre.

**Tecniche di soluzione**:
- **Timeout**: la transazione attende per un tempo fissato; scaduto il timeout riceve risposta negativa e fa rollback. È la tecnica tipica dei DBMS commerciali. Timeout lungo: attese lunghe prima di risolvere lo stallo; timeout corto: *overkill* (si uccidono transazioni non in stallo), che sovraccarica il sistema.
- **Prevenzione**: *2PL pessimistico*, tutti i lock necessari si acquisiscono prima che la transazione inizi (non sempre possibile); *timestamp*, solo le transazioni "più giovani" (o più vecchie) possono attendere (può causare overkill).
- **Rilevamento**: si usa il **grafo delle attese** (nodi = transazioni, arco = una transazione attende l'altra); un ciclo nel grafo indica un deadlock. È costoso da costruire e mantenere; usato nei DBMS distribuiti.

## Formule chiave
Nessuna formula nelle slide. Condizione di rilevamento: deadlock ⇔ ciclo nel grafo delle attese (formulazione delle slide: "un ciclo rappresenta un deadlock").

## Intuizione
Il locking risolve le anomalie introducendo attese; le attese a loro volta possono chiudersi in cerchio. Il timeout è la soluzione "pigra": non cerca di capire se c'è davvero un ciclo, ma accetta di uccidere ogni tanto una transazione innocente.

## Come si usa
Il rollback imposto dal sistema per sbloccare un deadlock è un esempio di terminazione per "omicidio" della transazione. Il timeout è un parametro delle primitive del lock manager (`R-Lock(T, x, ErrorCode, TimeOut)`). Nei sistemi distribuiti le attese attraversano più nodi, quindi serve il grafo delle attese globale.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Deadlock" del controllo della concorrenza. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/06 - 17-ConcurrencyControl_new.pdf` (pp. 75-79).

## Prerequisiti
- [[Locking a due fasi]]: attese circolari sui lock

## Porta a
- Nessuno.

## Collegati
- [[Transazioni distribuite]]: il rilevamento con il grafo delle attese si usa nei DBMS distribuiti
