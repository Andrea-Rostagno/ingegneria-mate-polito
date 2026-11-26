---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [accorpamento delle entità figlie nel padre, accorpamento del padre nelle figlie, sostituzione della gerarchia con relazioni, relazione IS-A, attributo discriminante, attributo Tipo]
tags: [competenza, area/informatica]
---

# Eliminazione delle generalizzazioni

> Le generalizzazioni non sono rappresentabili nel modello relazionale: si eliminano accorpando le figlie nel padre, il padre nelle figlie, oppure sostituendo la gerarchia con relazioni.

## Definizione / enunciato
Tre metodi:
1. **Accorpamento delle figlie nel padre**: restano il padre, con gli attributi delle figlie (opzionali) e le relazioni delle figlie; si aggiunge un **attributo discriminante** `Tipo` che dice a quale figlia appartiene ogni occorrenza. Applicabile a qualsiasi copertura; se sovrapposta, Tipo può assumere molte combinazioni.
2. **Accorpamento del padre nelle figlie**: restano le figlie, con gli attributi del padre; le relazioni del padre vanno **sdoppiate** su ogni figlia. Non adatto a copertura parziale (si può rendere totale aggiungendo una figlia "Altri") né sovrapposta (identificatori duplicati).
3. **Sostituzione con relazioni** IS-A tra padre e figlie: le figlie sono identificate tramite il padre; cardinalità $(1,1)$ dal lato figlia e $(0,1)$ dal lato padre. Soluzione più generale e sempre applicabile, ma ricostruire l'informazione di partenza può essere dispendioso.

## Formule chiave
Valutazione delle alternative:
- figlie nel padre se le figlie introducono differenze non sostanziali (pochi valori nulli) e gli accessi non distinguono padre e figlie;
- padre nelle figlie se la generalizzazione è totale e gli accessi distinguono tra le figlie;
- soluzioni miste se gli accessi distinguono solo alcune figlie;
- con più livelli si procede allo stesso modo partendo dal livello inferiore.

## Intuizione
La scelta segue le operazioni d'accesso: se le query trattano tutti allo stesso modo conviene una tabella sola (con NULL); se trattano ogni figlia separatamente conviene una tabella per figlia.

## Come si usa
Nel caso ASL, a lezione: Esame ed Esame specialistico si accorpano nel padre (`Esame(CodE, Descrizione, DescrizioneDieta*, Tipo, CodFisc*)`, con il medico che effettua l'esame specialistico opzionale); Personale, Medico e Volontario si accorpano nel padre (`Personale(CodFisc, Nome, Cognome, Domicilio, Associazione*, Tipo, CodR, CodO)`).

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER_ristrutturazione.pdf` (pp. 22-40; diagrammi solo come immagini); `triennale/ANNO 3/base di dati/Esempio_progettazione_logica.pdf` (pp. 11-18, 67-69).

## Prerequisiti
- [[Generalizzazione nel modello ER]]: il costrutto da eliminare
- [[Ristrutturazione dello schema ER]]: è una delle sue attività

## Porta a
- [[Traduzione dello schema ER nel modello relazionale]]: si traduce lo schema senza gerarchie

## Collegati
- Nessuno.
