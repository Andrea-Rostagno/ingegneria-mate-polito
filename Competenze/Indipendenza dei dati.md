---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [data independence, indipendenza fisica, indipendenza logica, architettura ANSI/SPARC, architettura ANSI-SPARC a tre livelli, schema esterno, schema logico, schema interno, livelli di astrazione in un DBMS]
tags: [competenza, area/informatica]
---

# Indipendenza dei dati

> Proprietà per cui utenti e programmi possono ignorare i dettagli realizzativi della base di dati: nasce dalla separazione in tre livelli di astrazione (architettura ANSI/SPARC).

## Definizione / enunciato
**Architettura ANSI/SPARC** a tre livelli:
- **schema logico**: descrizione della base di dati con il modello logico del DBMS (per esempio le tabelle relazionali);
- **schema interno**: rappresentazione dello schema logico con strutture fisiche di memorizzazione;
- **schema esterno**: descrizione di parti della base di dati, le **viste**, che riflettono il punto di vista di particolari utenti; è definito sul modello logico.

L'indipendenza dei dati è conseguenza di questa suddivisione e ha due livelli:
- **indipendenza fisica**: si interagisce con il DBMS indipendentemente dalla struttura fisica; si può cambiare il modo di memorizzare i dati senza toccare i programmi che li usano;
- **indipendenza logica**: si interagisce con il livello esterno indipendentemente dal livello logico; si possono aggiungere o modificare viste senza modificare lo schema logico, e modificare lo schema logico lasciando inalterate le strutture esterne (purché le corrispondenze restino).

## Formule chiave
Nessuna formula. Schema a livelli: utenti → schemi esterni → schema logico → schema interno → base di dati.

## Intuizione
Ogni livello nasconde quello sotto: l'accesso a una relazione avviene sempre nello stesso modo, qualunque sia la modalità di memorizzazione. È il motivo per cui il modello relazionale (basato su valori, non su puntatori) ha alzato il livello di astrazione rispetto ai modelli gerarchico e reticolare.

## Come si usa
Esempi nel corso: aggiungere un indice (progettazione fisica) non richiede di riscrivere le query (indipendenza fisica); in caso di ristrutturazione dello schema basta ridefinire le viste e le applicazioni continuano a funzionare (indipendenza logica, vantaggio delle viste in `SQL_costrutti_avanzati.pdf` p. 8).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Introduzione_alle_basi_dati.pdf` (pp. 24-29); `triennale/ANNO 3/base di dati/Modello-relazionale-1.pdf` (p. 5, indipendenza come motivazione del modello di Codd).

## Prerequisiti
- [[DBMS]]: i livelli sono quelli del DBMS

## Porta a
- [[Vista (SQL)]]: lo schema esterno si realizza con le viste

## Collegati
- [[Fasi della progettazione di una base di dati]]: schema concettuale, logico e fisico seguono la stessa separazione
