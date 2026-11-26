---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [relational model, modello dei dati relazionale, relazione, n-upla, attributo di una relazione, dominio di un attributo, grado di una relazione, cardinalità di una relazione, schema e istanza, riferimento basato su valori, Codd]
tags: [competenza, area/informatica]
---

# Modello relazionale

> Modello logico dei dati proposto da Codd (1970): i dati sono organizzati in relazioni, rappresentate come tabelle, e i legami tra relazioni sono espressi da valori comuni.

## Definizione / enunciato
Basato sul concetto matematico di relazione, rappresentata informalmente da una tabella.
- **Attributo**: nome di una colonna. **Dominio**: insieme dei valori che un attributo può assumere.
- **N-upla** (tupla): riga della tabella. **Cardinalità**: numero di n-uple. **Grado**: numero di attributi.
- **Schema**: struttura (nome della tabella e nomi delle colonne), praticamente invariante nel tempo. **Istanza**: contenuto (le righe), variabile anche molto rapidamente.

Proprietà: le n-uple non sono ordinate; sono distinte (nessuna riga duplicata); gli attributi non sono ordinati (non si individuano per posizione).

## Formule chiave
Notazione dello schema: `Corsi(Codice, Nome, MatrDocente)`, con la chiave primaria sottolineata e gli attributi che ammettono NULL marcati con `*`.

## Intuizione
Il modello è **basato sui valori**: il corso M2170 è legato al docente D101 perché `Corsi.MatrDocente = 'D101' = Docenti.Matricola`, non perché c'è un puntatore. Vantaggi: indipendenza dalle strutture fisiche, rappresentazione solo dell'informazione rilevante, portabilità tra sistemi, legame non orientato.

## Come si usa
Esempio delle slide: `Corsi(Codice, Nome, MatrDocente)` e `Docenti(Matricola, Nome, Dipartimento, Telefono)`; la base dati di esempio di tutto il corso è Forniture-Prodotti: `P(CodP, NomeP, Colore, Taglia, Magazzino)`, `F(CodF, NomeF, NSoci, Sede)`, `FP(CodF, CodP, Qta)`. Rispetto a un database documentale: tabella ↔ collezione, riga ↔ documento, colonna ↔ campo (`Introduzione_alle_basi_dati.pdf` p. 20).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Modello-relazionale-1.pdf` (pp. 4-14); `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (pp. 15-21, modelli dei dati, schema e istanza); `triennale/ANNO 3/base di dati/1-SQL_fondamenti.pdf` (pp. 11-12, base dati Forniture-Prodotti).

## Prerequisiti
- [[DBMS]]: è il modello logico dei DBMS relazionali

## Porta a
- [[Valore nullo]]: informazione incompleta nelle tuple
- [[Chiave di una relazione]]: identificazione univoca delle tuple
- [[Vincoli di integrità]]: istanze corrette della base di dati
- [[Algebra relazionale]]: operatori sulle relazioni
- [[Linguaggio SQL]]: linguaggio dei DBMS relazionali
- [[Traduzione dello schema ER nel modello relazionale]]: modello di arrivo della progettazione logica
- [[Anomalie di aggiornamento]]: problemi di uno schema relazionale mal progettato

## Collegati
- [[Modello documentale]]: tabella, riga e colonna diventano collezione, documento e campo
- [[Modello Entità-Relazione]]: modello concettuale contro modello logico; la "relazione" ER è un'altra cosa
