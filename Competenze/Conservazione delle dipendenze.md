---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [dependency preservation, conservazione delle dipendenze funzionali, perdita delle dipendenze, qualità di una decomposizione]
tags: [competenza, area/informatica]
---

# Conservazione delle dipendenze

> Una decomposizione conserva le dipendenze se ogni dipendenza funzionale dello schema originario è presente in una delle relazioni decomposte, così i vincoli restano verificabili.

## Definizione / enunciato
Una decomposizione **conserva le dipendenze** se ciascuna delle dipendenze funzionali dello schema originario è presente in una delle relazioni decomposte. È opportuno che le dipendenze siano conservate, per garantire che nello schema decomposto valgano gli stessi vincoli dello schema originario.

## Formule chiave
Qualità di una decomposizione: deve sempre soddisfare
- **decomposizione senza perdita**: le informazioni originarie sono ricostruibili con precisione (senza tuple spurie);
- **conservazione delle dipendenze**: le relazioni decomposte hanno la stessa capacità dell'originale di rappresentare i vincoli di integrità.

Una dipendenza può anche essere ricostruita da altre conservate: Impiegato → Stipendio si ottiene da Impiegato → Categoria e Categoria → Stipendio.

## Intuizione
Se una dipendenza finisce "a cavallo" di due relazioni, nessuna delle due può più controllarla: il DBMS accetta dati che nell'originale sarebbero stati rifiutati.

## Come si usa
Esempio `R(Impiegato, Categoria, Stipendio)` decomposta in $R_1(\text{Impiegato, Categoria})$ e $R_2(\text{Impiegato, Stipendio})$: è senza perdita, ma inserendo (Gialli, 3) in $R_1$ e (Gialli, 3500) in $R_2$ non si riconosce più la violazione di Categoria → Stipendio (la categoria 3 ha stipendio 1800), che nella relazione originaria avrebbe vietato l'inserimento. La decomposizione $R_1(\text{Impiegato, Categoria})$, $R_2(\text{Categoria, Stipendio})$ invece conserva Impiegato → Categoria e Categoria → Stipendio, ed è anche senza perdita.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Normalizzazione-1.pdf` (pp. 36-44).

## Prerequisiti
- [[Dipendenza funzionale]]: sono le dipendenze da conservare
- [[Forma normale di Boyce-Codd]]: si valuta la decomposizione prodotta dalla normalizzazione

## Porta a
- Nessuno.

## Collegati
- [[Decomposizione senza perdita]]: l'altra proprietà di una buona decomposizione
