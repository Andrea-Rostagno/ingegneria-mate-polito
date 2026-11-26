---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["log file", "file di log", "record di transazione", "record di sistema", "undo", "redo", "idempotenza", "memoria stabile", "stable memory", "gestore dell'affidabilità", "reliability manager"]
tags: [competenza, area/informatica]
---

# Log delle transazioni

> File sequenziale in memoria stabile che registra in ordine cronologico le attività delle transazioni (con stato prima e dopo di ogni modifica): è lo strumento con cui il gestore dell'affidabilità garantisce atomicità e durabilità.

## Definizione / enunciato
Il **gestore dell'affidabilità** è responsabile di atomicità e durabilità: implementa begin transaction (B, di solito implicito), commit work (C), rollback work (A, abort), fornisce le primitive di ripristino (warm restart, cold restart), interagisce con il buffer manager e prepara il ripristino con checkpoint e dump.

La **memoria stabile** è una memoria resistente ai guasti: è un'astrazione, approssimata con ridondanza e protocolli di scrittura robusti; un suo guasto è considerato catastrofico.

Il **log** è un file sequenziale in memoria stabile: i record si scrivono in ordine nel blocco corrente e quelli di transazioni diverse sono interfogliati.
- **Record di transazione**: delimitatori $B(T)$, $C(T)$, $A(T)$; modifiche $I(T,O,AS)$, $D(T,O,BS)$, $U(T,O,BS,AS)$, con $O$ oggetto scritto (RID), $BS$ *before state* e $AS$ *after state*.
- **Record di sistema**: dump e checkpoint $CK(L)$, con $L$ insieme dei TID delle transazioni attive.

## Formule chiave
| azione | undo | redo |
|---|---|---|
| insert O | delete O | scrivi AS di O |
| update O | scrivi BS di O | scrivi AS di O |
| delete O | scrivi BS di O | delete O |

**Idempotenza**: undo e redo si possono ripetere un numero arbitrario di volte senza cambiare il risultato,
$$\mathrm{UNDO}(\mathrm{UNDO}(a))=\mathrm{UNDO}(a),$$
utile se il sistema si guasta durante il ripristino.

## Intuizione
Il log è il "diario" che permette di tornare indietro (con BS) o di rifare (con AS) qualunque azione, indipendentemente da cosa il buffer manager abbia effettivamente scritto su disco.

## Come si usa
Esempio di log delle slide (p. 10, in ordine di tempo): `DUMP B(T1) B(T2) CK U(T2,O2,BS2,AS2) I(T1,O1,AS1) C(T1) D(T2,O3,BS3)`, con l'ultimo record in cima al log. Scrivere il log in modo robusto costa quanto l'aggiornamento della base di dati, ma è necessario per le ACID; lo si ottimizza con formato compatto, parallelismo e commit di gruppi di transazioni. Nel two-phase commit si aggiungono nuovi tipi di record (prepare, global decision, ready).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Reliability Management". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/07 - 18-Recovery.pdf` (pp. 3-12, 26); `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/01 - 12-IntroductionDBMS.pdf` (p. 9).

## Prerequisiti
- [[Architettura di un DBMS]]: strumento del gestore dell'affidabilità
- [[Proprietà ACID]]: garantisce atomicità e durabilità

## Porta a
- [[Write-ahead logging]]: regole di scrittura del log
- [[Checkpoint e dump]]: record di sistema del log
- [[Ripresa a caldo]]: undo e redo dal log
- [[Two-phase commit]]: nuovi record di log del protocollo

## Collegati
- Nessuno.
