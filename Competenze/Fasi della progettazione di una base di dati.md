---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [progettazione di una base di dati, ciclo di vita di un sistema informativo, progettazione concettuale logica e fisica, raccolta e analisi dei requisiti, metodologia di progettazione, progettazione guidata dai dati, schema concettuale]
tags: [competenza, area/informatica]
---

# Fasi della progettazione di una base di dati

> Metodologia che separa cosa rappresentare (progettazione concettuale) da come rappresentarlo (progettazione logica e fisica), dentro il ciclo di vita del sistema informativo.

## Definizione / enunciato
**Ciclo di vita di un sistema informativo**: studio di fattibilità (costi delle alternative, priorità) → raccolta e analisi dei requisiti (descrizione completa ma informale, con l'utente) → progettazione (dei dati e delle applicazioni, descrizioni formali) → implementazione → validazione e testing → funzionamento (gestione e manutenzione); la **prototipazione** può riportare a requisiti e progetto.

Una **metodologia di progettazione** consiste in: decomposizione in fasi successive e indipendenti; strategie e criteri di scelta; modelli di riferimento per i dati in ingresso e uscita di ogni fase. Proprietà: generalità, qualità del risultato (correttezza, completezza, efficienza), facilità d'uso.

## Formule chiave
Requisiti applicativi → **progettazione concettuale** → schema concettuale → **progettazione logica** → schema logico → **progettazione fisica** → schema fisico.
- Schema concettuale: descrizione formale e completa con un modello concettuale (ER), indipendente dagli aspetti implementativi.
- Schema logico: traduzione nel modello logico scelto (relazionale), con criteri di ottimizzazione delle operazioni e verifica formale della qualità (normalizzazione).
- Schema fisico: parametri fisici (file e indici), dipende dal DBMS.

## Intuizione
È una metodologia **guidata dai dati**: la base di dati si progetta prima delle applicazioni che la usano, perché i dati sono più stabili dei processi. La separazione delle decisioni rispecchia i livelli di astrazione del DBMS.

## Come si usa
Raccolta dei requisiti: fonti (utenti con interviste e documenti, normative, moduli, applicazioni preesistenti); regole pratiche: verificare comprensione e consistenza con esempi e casi limite, chiedere definizioni, separare essenziale e marginale, procedere per raffinamenti. Analisi: scegliere il livello di astrazione, standardizzare le frasi, unificare sinonimi e omonimi, costruire un **glossario dei termini**. Il caso svolto a lezione è la base dati delle prenotazioni di esami di una ASL (pazienti, ospedali, reparti, personale, esami, laboratori).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER-1.pdf` (pp. 6-23); `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (pp. 5-13, 18-23); `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (pp. 22-23).

## Prerequisiti
- [[DBMS]]: si progetta la base di dati che il DBMS gestirà

## Porta a
- [[Modello Entità-Relazione]]: modello della progettazione concettuale
- [[Progettazione concettuale]]: prima fase
- [[Ristrutturazione dello schema ER]]: inizio della progettazione logica
- [[Progettazione fisica di una base di dati]]: ultima fase

## Collegati
- [[Indipendenza dei dati]]: stessi livelli concettuale, logico e fisico
- [[Metodologia di progettazione di un data warehouse]]: la stessa sequenza di fasi applicata al data warehouse
