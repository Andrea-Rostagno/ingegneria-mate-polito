---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["steal", "no steal", "force", "no force", "strategie di scrittura del buffer"]
tags: [competenza, area/informatica]
---

# Strategie steal e force

> Due scelte indipendenti del buffer manager: se si possono scrivere su disco pagine di transazioni ancora attive (steal) e se al commit le pagine vanno scritte subito (force).

## Definizione / enunciato
**Steal / no steal** (scelta della vittima):
- *Steal*: il buffer manager può scegliere come vittima una pagina bloccata (locked) con Count = 0 che appartiene a una transazione **attiva**. Così finiscono su disco pagine sporche di transazioni senza commit: in caso di guasto queste modifiche vanno **disfatte** (undo), con le stesse operazioni del rollback.
- *No steal*: non si possono scegliere come vittime pagine di transazioni attive.

**Force / no force** (scrittura al commit):
- *Force*: tutte le pagine attive di una transazione sono scritte su disco in modo sincrono durante il commit.
- *No force*: le pagine sono scritte in modo asincrono dal buffer manager tramite la primitiva flush, anche dopo il commit; in caso di guasto queste modifiche vanno **rifatte** (redo).

## Formule chiave
| | serve undo dopo un guasto | serve redo dopo un guasto |
|---|---|---|
| steal | sì | — |
| no force | — | sì |

(Tabella ricavata dalle due slide sulle strategie, non presente in questa forma.)

## Intuizione
Steal e no force sono "pericolose" perché il disco non riflette esattamente le transazioni con commit, ma sono efficienti; il prezzo si paga con il log, che deve permettere undo e redo.

## Come si usa
L'uso tipico è **steal / no force**: no force dà prestazioni di I/O migliori; steal può essere obbligatorio per interrogazioni che accedono a moltissime pagine (non entrerebbero tutte nel buffer). Questa scelta spiega perché il gestore dell'affidabilità ha bisogno sia dell'undo sia del redo e delle regole di scrittura del log (WAL, commit precedence).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Buffer Manager writing strategies". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/02 - 13-BufferManager.pdf` (pp. 16-18).

## Prerequisiti
- [[Buffer manager]]: politiche di scrittura delle pagine

## Porta a
- Nessuno.

## Collegati
- [[Write-ahead logging]]: politiche del buffer e regole del log
