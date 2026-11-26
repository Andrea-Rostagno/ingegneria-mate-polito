---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [chiave, superchiave, superkey, chiave primaria, primary key, chiave candidata, candidate key, univocità e minimalità]
tags: [competenza, area/informatica]
---

# Chiave di una relazione

> Insieme minimale di attributi che identifica in modo univoco le tuple di una relazione; la chiave primaria è quella scelta come riferimento e non ammette valori nulli.

## Definizione / enunciato
Un insieme $K$ di attributi è **chiave** di una relazione $r$ se:
1. **univocità**: $r$ non contiene due n-uple distinte con gli stessi valori per $K$;
2. **minimalità**: nessun sottoinsieme proprio di $K$ è ancora univoco.

Se vale solo la prima proprietà, $K$ è una **superchiave**. La chiave è una proprietà dello **schema**, non della singola istanza.

**Chiave primaria**: una chiave che ammette NULL perde l'univocità, quindi si sceglie una chiave di riferimento che non ammette valori nulli; le altre (**chiavi candidate**) possono ammetterli. I riferimenti tra relazioni si fanno tramite la chiave primaria, sottolineata nello schema.

## Formule chiave
In SQL: `NomeAttributo Dominio PRIMARY KEY` oppure `PRIMARY KEY (ElencoAttributi)` (una sola per tabella); chiave candidata non nulla: `UNIQUE NOT NULL`.

## Intuizione
L'univocità garantisce l'identificazione, la minimalità evita attributi inutili. Una coincidenza dell'istanza non basta: in `Studenti`, $\{\text{DataNascita}, \text{AnnoImmatricolazione}\}$ è univoco e minimale sui dati mostrati, ma non è una proprietà generale.

## Come si usa
Esempio delle slide, `Studenti(Matricola, Nome, Cognome, DataNascita, AnnoImmatricolazione)`:
- $\{\text{Matricola}\}$ è univoco e minimale: chiave;
- $\{\text{Nome}, \text{Cognome}, \text{DataNascita}\}$ è univoco e minimale: chiave;
- $\{\text{Matricola}, \text{Nome}\}$ è univoco ma non minimale: superchiave.

Nella normalizzazione: data una chiave $K$, $K \to$ qualsiasi altro attributo. Nella progettazione logica l'identificatore dell'entità diventa la chiave primaria della tabella.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Modello-relazionale-1.pdf` (pp. 20-25); `triennale/ANNO 3/base di dati/6-SQL_gestione_tabelle.pdf` (pp. 31-32, 36).

## Prerequisiti
- [[Modello relazionale]]: tuple distinte di una relazione

## Porta a
- [[Integrità referenziale]]: la chiave esterna riferisce la chiave primaria
- [[Dipendenza funzionale]]: la chiave determina tutti gli attributi

## Collegati
- [[Valore nullo]]: la chiave primaria non lo ammette
- [[Identificatore ed entità debole]]: l'identificatore ER diventa chiave primaria
