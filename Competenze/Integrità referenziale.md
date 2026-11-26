---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [referential integrity, vincolo di integrità referenziale, chiave esterna, foreign key, FOREIGN KEY REFERENCES, relazione referenziante, relazione referenziata, ON DELETE, ON UPDATE, CASCADE, SET NULL, SET DEFAULT, NO ACTION]
tags: [competenza, area/informatica]
---

# Integrità referenziale

> Vincolo inter-relazionale: i valori della chiave esterna di una relazione referenziante devono comparire nella chiave primaria della relazione referenziata.

## Definizione / enunciato
Date due relazioni $R$ (referenziata) e $S$ (referenziante, che fa riferimento a $R$ tramite l'insieme di attributi $X$): i valori assunti da $X$ in $S$ possono essere **solo** valori assunti effettivamente dalla chiave primaria di $R$. $X$ è la **chiave esterna** (foreign key) di $S$. Il vincolo garantisce la correttezza dei riferimenti in un modello basato sui valori.

## Formule chiave
```sql
FOREIGN KEY (ElencoAttributiReferenzianti)
  REFERENCES NomeTabella [(ElencoAttributiReferenziati)]
  [ON UPDATE <CASCADE | SET DEFAULT | SET NULL | NO ACTION>]
  [ON DELETE <CASCADE | SET DEFAULT | SET NULL | NO ACTION>]
```
Notazione dello schema logico: `Esame(Matricola) REFERENCES Studente(Matricola)`; con chiave composta il vincolo è sull'insieme: `Scaffale(CodLibreria, CodStanza) REFERENCES Libreria(CodLibreria, CodStanza)`.

## Intuizione
Sulla tabella **referenziante** non sono ammessi insert o update della chiave esterna che violino il vincolo; il delete è sempre lecito. Sulla tabella **referenziata** l'insert è lecito, mentre update e delete possono lasciare riferimenti "orfani": la politica dice cosa fare (CASCADE propaga, SET NULL/DEFAULT svuota i riferimenti, NO ACTION impedisce l'azione).

## Come si usa
Esempio delle slide (Forniture-Prodotti):
```sql
CREATE TABLE FP (CodF CHAR(5), CodP CHAR(6),
  Qta INTEGER CHECK (Qta IS NOT NULL and Qta>0),
  PRIMARY KEY (CodF, CodP),
  FOREIGN KEY (CodF) REFERENCES F(CodF)
    ON DELETE NO ACTION ON UPDATE CASCADE,
  FOREIGN KEY (CodP) REFERENCES P(CodP)
    ON DELETE NO ACTION ON UPDATE CASCADE);
```
Violazioni tipiche nelle slide: un `Corsi.MatrDocente = 'D342'` inesistente in `Docenti`; un biglietto `(AZ111, 16/11/2016)` senza volo corrispondente (chiave esterna composta Sigla, Data). Senza politiche di propagazione, cancellare il fornitore F1 richiede prima `DELETE FROM FP WHERE CodF='F1'`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Modello-relazionale-1.pdf` (pp. 31-40); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 40-46); `triennale/ANNO 3/base di dati/Progettazione_modello_logico.pdf` (pp. 23-24).

## Prerequisiti
- [[Chiave di una relazione]]: la chiave esterna riferisce la chiave primaria
- [[Vincoli di integrità]]: è il vincolo inter-relazionale

## Porta a
- [[Manipolazione dei dati in SQL]]: inserimenti, cancellazioni e aggiornamenti devono rispettarlo

## Collegati
- [[Traduzione dello schema ER nel modello relazionale]]: ogni relazione ER tradotta genera vincoli referenziali
- [[Definizione delle tabelle in SQL]]: FOREIGN KEY nella CREATE TABLE
