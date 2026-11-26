---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["warm restart", "ripristino a caldo", "UNDO set", "REDO set", "guasto di sistema", "system failure", "fail-stop"]
tags: [competenza, area/informatica]
---

# Ripresa a caldo

> Procedura di ripristino dopo un guasto di sistema (persa la memoria centrale, non il disco): dal log si costruiscono gli insiemi UNDO e REDO, poi si disfano le transazioni non concluse e si rifanno quelle con commit.

## Definizione / enunciato
**Tipi di guasto**: *guasto di sistema* (software o interruzione di corrente: si perde il buffer in memoria centrale, non il disco né il log) → **ripresa a caldo**; *guasto di dispositivo* (media failure) → ripresa a freddo. Modello fail-stop: al guasto il sistema si ferma, esegue il ripristino e poi torna disponibile.

**Categorie di transazioni** rispetto all'ultimo checkpoint $t_C$ e al guasto $t_F$: concluse prima del checkpoint (nessuna azione); con commit ma con scritture forse non ancora su disco (**redo**); attive al guasto, senza commit (**undo**).

**Algoritmo**:
1. leggere il log all'indietro fino all'ultimo record di checkpoint;
2. a) al checkpoint: UNDO = {transazioni attive al checkpoint}, REDO = {}; b) leggere il log in avanti: ogni $B(T)$ aggiunge T a UNDO; ogni $C(T)$ sposta T da UNDO a REDO; le transazioni con rollback restano in UNDO;
3. a) leggere il log all'indietro dal guasto fino all'inizio della transazione più vecchia in UNDO, disfacendo le azioni delle transazioni in UNDO (anche prima del checkpoint); b) leggere il log in avanti dall'inizio della transazione più vecchia in REDO, rifacendo le azioni delle transazioni in REDO.

## Formule chiave
Esempio delle slide (log): `B(T1) B(T2) U(T2,O1,B1,A1) I(T1,O2,A2) B(T3) C(T1) B(T4) U(T3,O2,B3,A3) U(T4,O3,B4,A4) CK(T2,T3,T4) C(T4) B(T5) U(T3,O3,B5,A5) U(T5,O4,B6,A6) D(T3,O3,B7) A(T3) C(T5) I(T2,O6,A8)` guasto.
- Checkpoint: UNDO = {T2,T3,T4}, REDO = {}.
- C(T4): UNDO {T2,T3}, REDO {T4}; B(T5): UNDO {T2,T3,T5}; A(T3): invariato; C(T5): UNDO {T2,T3}, REDO {T4,T5}.
- Undo (all'indietro): delete O6; insert O3 = B7; O3 = B5; O2 = B3; O1 = B1.
- Redo (in avanti): O3 = A4; O4 = A6.

## Intuizione
Il checkpoint delimita il lavoro: prima di esso tutto ciò che è concluso è già su disco. Prima si disfa (all'indietro, come un rollback), poi si rifà (in avanti, come una riesecuzione): grazie all'idempotenza, un guasto durante il ripristino non fa danni.

## Come si usa
È l'esercizio classico di recovery: dato un log con checkpoint, si scrivono l'evoluzione di UNDO e REDO e le azioni di undo e redo nell'ordine giusto. Nota: T1 ha commit prima del checkpoint e non compare.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Recovery Management", "Warm Restart" con esempio completo. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/07 - 18-Recovery.pdf` (pp. 28-50).

## Prerequisiti
- [[Log delle transazioni]]: undo e redo dal log
- [[Checkpoint e dump]]: parte dall'ultimo checkpoint

## Porta a
- [[Ripresa a freddo]]: conclusa con una ripresa a caldo

## Collegati
- Nessuno.
