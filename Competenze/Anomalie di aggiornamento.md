---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [ridondanza, ridondanza dei dati, anomalia di aggiornamento, anomalia di inserimento, anomalia di cancellazione, update anomalies, relazione non normalizzata]
tags: [competenza, area/informatica]
---

# Anomalie di aggiornamento

> Problemi di una relazione che rappresenta concetti indipendenti insieme: dati ridondanti e anomalie di aggiornamento, inserimento e cancellazione.

## Definizione / enunciato
Quando un'unica relazione rappresenta informazioni eterogenee, alcuni dati si ripetono in tuple diverse senza aggiungere informazione (**ridondanza**). Ne seguono tre **anomalie**:
- **di aggiornamento**: le informazioni ridondanti vanno aggiornate tutte insieme (in modo atomico);
- **di inserimento**: si può inserire una tupla solo se è nota l'informazione completa della chiave primaria; non si può inserire la parte relativa a un solo concetto;
- **di cancellazione**: cancellare una tupla cancella tutti i concetti che contiene, anche quelli ancora validi.

## Formule chiave
Esempio delle slide: `EsameSuperato(MatrStudente, Residenza, CodCorso, NomeCorso, Voto)` con chiave (MatrStudente, CodCorso); la residenza dipende solo dallo studente, il nome del corso solo dal corso.

## Intuizione
La causa è l'inclusione di concetti indipendenti nella stessa relazione, cioè dipendenze funzionali $X \to Y$ in cui $X$ non contiene una chiave: lo stesso valore di $X$ compare in più tuple e con lui si ripete $Y$. Le dipendenze dalle chiavi (MatrStudente CodCorso → Voto) non creano anomalie.

## Come si usa
Nell'esempio: la residenza di s94540 è ripetuta per ogni esame superato e, se cambia, va modificata in tutte le righe (aggiornamento); uno studente appena iscritto non si può inserire finché non supera un esame (inserimento); se uno studente rinuncia agli studi si perde la sua residenza (cancellazione). La cura è la decomposizione in forma normale di Boyce-Codd. Nei data warehouse invece la ridondanza è accettata di proposito (schema a stella denormalizzato).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Normalizzazione-1.pdf` (pp. 5-9, 15-16).

## Prerequisiti
- [[Modello relazionale]]: riguarda relazioni mal progettate

## Porta a
- [[Dipendenza funzionale]]: le anomalie nascono da dipendenze non dalle chiavi
- [[Forma normale di Boyce-Codd]]: le relazioni in BCNF non hanno anomalie

## Collegati
- [[Schema a stella]]: la denormalizzazione accetta la ridondanza per le prestazioni
