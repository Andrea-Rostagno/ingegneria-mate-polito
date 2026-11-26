---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [progettazione logica relazionale, traduzione nel modello logico, traduzione di entità, traduzione di relazioni, mapping ER-relazionale, schema logico relazionale]
tags: [competenza, area/informatica]
---

# Traduzione dello schema ER nel modello relazionale

> Regole per trasformare lo schema ER ristrutturato in tabelle: ogni entità diventa una tabella, ogni relazione si traduce secondo grado e cardinalità, e i legami diventano vincoli di integrità referenziale.

## Definizione / enunciato
Si applica allo schema ristrutturato (senza gerarchie, attributi multivalore e composti).
- **Entità**: una tabella con gli stessi attributi; l'identificatore diventa la chiave primaria (sottolineata); gli attributi opzionali ammettono NULL (`*`). Es. `Persona(CodiceFiscale, Nome, Cognome, Professione*)`.
- **Relazione**: prima si traducono le entità coinvolte, poi la relazione, secondo grado e cardinalità.
- **Entità con identificatore esterno**: la relazione identificante è rappresentata insieme all'identificatore: `Sala(Numero, CodC, Capienza)`.

## Formule chiave
| relazione | traduzione |
|---|---|
| binaria N–N | tabella con chiave = identificatori delle due entità: `Esame(Matricola, CodC, Voto)`; ricorsiva con attributi ridenominati: `Composizione(CodComposto, CodComponente, Quantità)` |
| binaria 1–N, lato 1 obbligatorio $(1,1)$ | attributi nell'entità del lato 1: `Persona(CF, Nome, Cognome, NomeComune, Data)` |
| binaria 1–N, lato 1 opzionale $(0,1)$ | attributi opzionali `Studente(..., NomeFacoltà*, Data*)` oppure nuova tabella `Laurea(Matricola, NomeFacoltà, Data)` con chiave Matricola |
| binaria 1–1, entrambe obbligatorie | attributi in una delle due tabelle: `Rettore(Matricola, Nome, Cognome, NomeFacoltà, Data)` oppure `Università(Nome, Città, Matricola, Data)` |
| binaria 1–1, una sola obbligatoria | attributi nella tabella dell'entità obbligatoria: `Università(Nome, Città, Matricola, DataElezione)` |
| binaria 1–1, entrambe opzionali | nuova tabella `Rettore(Matricola, NomeUniversità, DataElezione)` con chiave Matricola (alternativa 1) oppure NomeUniversità (alternativa 2), o attributi opzionali `Università(Nome, Città, Matricola*, DataElezione*)` |
| ternaria | tabella con gli identificatori delle tre entità: `Esame(Matricola, CodC, Data, Voto)` |

Ogni relazione genera vincoli referenziali: `Esame(Matricola) REFERENCES Studente(Matricola)`, `Esame(CodC) REFERENCES Corso(CodC)`; con chiave referenziata composta il vincolo è sull'insieme degli attributi.

## Intuizione
La cardinalità massima decide dove finisce il legame (in una tabella esistente se un lato ha massimo 1, in una tabella nuova se entrambi hanno N); la minima decide se servono valori NULL. Le alternative con nuova tabella evitano i NULL quando la partecipazione è opzionale.

## Come si usa
Caso ASL a lezione, schema finale (estratto): `Paziente(NTes, Nome, Cognome, Indirizzo, LuogoN, DataN)`, `Ospedale(CodO, Nome, Indirizzo)`, `Laboratorio(CodLab, CodO, NomeLab, Piano, Stanza)`, `Prenotazione(CodTes, CodE, Data, Ora, Costo, Urgente, CodLab, CodO)`, `DiServizioIn(CodFisc, CodLab, CodO, Data, OraInizio, Durata)`, `RuolodelMedico(CodFisc, DataInizio, DataFine*, Ruolo)`, con vincoli come `Prenotazione(CodLab,CodO) REFERENCES Laboratorio(CodLab,CodO)` e `Reparto(CodO) REFERENCES Ospedale(CodO)`.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_modello_logico.pdf` (pp. 2-24; diagrammi ER solo come immagini; le chiavi primarie sono sottolineate nelle slide e si perdono nel testo estratto: quelle dette sopra sono verificate sulle immagini di pp. 13-17, negli altri schemi la chiave è l'identificatore dell'entità o, per le relazioni N–N e ternarie, la combinazione degli identificatori); `triennale/ANNO 3/base di dati/Esempio_progettazione_logica.pdf` (pp. 24-73).

## Prerequisiti
- [[Ristrutturazione dello schema ER]]: si traduce lo schema ristrutturato
- [[Eliminazione delle generalizzazioni]]: le gerarchie devono essere già eliminate
- [[Cardinalità nel modello ER]]: le regole dipendono dalle cardinalità
- [[Modello relazionale]]: modello di arrivo

## Porta a
- [[Definizione delle tabelle in SQL]]: lo schema logico si crea con CREATE TABLE

## Collegati
- [[Integrità referenziale]]: ogni relazione tradotta genera vincoli referenziali
- [[Identificatore ed entità debole]]: identificatori esterni nella chiave
