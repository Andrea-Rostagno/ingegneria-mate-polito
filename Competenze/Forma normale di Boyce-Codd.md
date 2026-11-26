---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [BCNF, Boyce Codd Normal Form, forma normale di Boyce Codd, normalizzazione relazionale, normalizzazione di uno schema relazionale, schema normalizzato, decomposizione in BCNF]
tags: [competenza, area/informatica]
---

# Forma normale di Boyce-Codd

> Una relazione è in BCNF se ogni dipendenza funzionale non banale ha a sinistra una superchiave; la normalizzazione decompone una relazione che non lo è in relazioni BCNF, una per concetto.

## Definizione / enunciato
Una relazione $r$ è in **BCNF** se, per ogni dipendenza funzionale non banale $X \to Y$ definita su di essa, $X$ contiene una chiave di $r$ ($X$ è superchiave di $r$). Nelle relazioni in BCNF non ci sono anomalie né ridondanze, perché concetti indipendenti stanno in relazioni diverse.

**Normalizzazione**: procedimento che sostituisce una relazione non normalizzata con due o più relazioni in BCNF. Criterio: una relazione che rappresenta più concetti indipendenti si decompone, per mezzo delle dipendenze funzionali, in relazioni più piccole, una per concetto; le nuove relazioni sono **proiezioni** sugli attributi delle dipendenze e hanno come chiave la parte sinistra.

## Formule chiave
Da `R(MatrStudente, Residenza, CodCorso, NomeCorso, Voto)` con MatrStudente → Residenza, CodCorso → NomeCorso, MatrStudente CodCorso → Voto:
$$R_1 = \pi_{\text{MatrStudente, Residenza}}R,\quad R_2 = \pi_{\text{CodCorso, NomeCorso}}R,\quad R_3 = \pi_{\text{MatrStudente, CodCorso, Voto}}R$$
che corrispondono allo schema ER Studente, Corso ed Esame Superato $(0,N)$–$(0,N)$.

## Intuizione
La normalizzazione **non** è una metodologia di progettazione ma uno strumento di **verifica**: una buona progettazione ER produce normalmente schemi già normalizzati, e le verifiche si possono applicare anche agli schemi ER. Una decomposizione per normalizzare deve inoltre essere senza perdita e, possibilmente, conservare le dipendenze.

## Come si usa
Procedura che segue gli esempi delle slide: (1) elencare le dipendenze funzionali; (2) per ciascuna non banale controllare se la parte sinistra è superchiave; (3) se no, decomporre sulle dipendenze; (4) verificare la decomposizione senza perdita e la conservazione delle dipendenze. Per `R(Impiegato, Categoria, Stipendio)` la decomposizione buona è `Impiegato(Impiegato, Categoria)` e `Categoria(Categoria, Stipendio)`, che corrisponde alla relazione ER Impiegato $(1,1)$ — Di categoria — $(0,N)$ Categoria.

## Nei corsi
- **Base di dati** (triennale): l'unica forma normale del corso (non sono trattate 1NF, 2NF, 3NF). Fonti: `triennale/ANNO 3/base di dati/Normalizzazione-1.pdf` (pp. 4, 17-23, 43).

## Prerequisiti
- [[Dipendenza funzionale]]: la BCNF si definisce sulle dipendenze
- [[Anomalie di aggiornamento]]: il problema che la BCNF elimina

## Porta a
- [[Decomposizione senza perdita]]: proprietà richiesta alla decomposizione
- [[Conservazione delle dipendenze]]: proprietà desiderata della decomposizione

## Collegati
- [[Snowflake schema]]: normalizzazione delle tabelle delle dimensioni nel data warehouse
- [[Progettazione concettuale]]: le verifiche di normalizzazione valgono anche sugli schemi ER
