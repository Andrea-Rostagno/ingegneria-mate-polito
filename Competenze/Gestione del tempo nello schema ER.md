---
tipo: competenza
area: informatica
corsi: [Base di dati]
livello: [triennale]
aliases: [rappresentazione del tempo nello schema ER, entità Tempo, entità storicizzata, storicizzazione, attributi temporali, serie temporale di eventi]
tags: [competenza, area/informatica]
---

# Gestione del tempo nello schema ER

> Quattro modi di rappresentare eventi ed evoluzione nel tempo in uno schema ER: attributi temporali, relazione binaria o ternaria con un'entità Tempo, entità storicizzata.

## Definizione / enunciato
- **Attributi temporali**: eventi "unici" per ogni istanza di un'entità o relazione (data di nascita di una persona, anno di produzione di un film).
- **Relazione binaria** con un'entità **Tempo**: serie temporale di eventi legati a un'entità E. Tempo è identificata dall'informazione su quando l'evento si verifica o inizia (timestamp, data, data e ora); una relazione R lega Tempo ed E; durata, fine e altre caratteristiche sono attributi di R. Alternativa: un'entità debole "evento" identificata dall'istante e dall'entità, con le caratteristiche come attributi propri.
- **Relazione ternaria**: serie temporale di eventi che sono un'associazione tra due entità E1 ed E2; R lega Tempo, E1 ed E2.
- **Entità storicizzata**: l'evento coinvolge due entità e ci sono vincoli sulla partecipazione di un'entità a più eventi. Si introduce un'entità debole E identificata dall'informazione temporale ed esternamente tramite la relazione con l'entità che non può partecipare a due eventi insieme; E partecipa con $(1,1)$ alle relazioni con le altre entità.

## Formule chiave
Esempi delle slide: temperature rilevate da ogni sensore in istanti diversi (binaria o entità debole); acquisti di prodotti da parte dei clienti anche più volte al giorno (ternaria Cliente–Prodotto–Tempo); periodi (inizio, fine) di lavoro dei dipendenti sui progetti (ternaria); lezioni di un docente, al più una per fascia oraria (entità storicizzata Lezione, identificata dall'informazione temporale ed esternamente dal docente, che non può tenere due lezioni nella stessa fascia oraria).

## Intuizione
Il nodo è il vincolo "niente n-uple identiche" delle relazioni: se lo stesso legame si ripete nel tempo serve il tempo nell'identificazione. La scelta tra ternaria ed entità storicizzata dipende da quale entità non può partecipare a due eventi contemporanei.

## Come si usa
Nel caso ASL: la relazione Di servizio in tra Personale e Laboratorio viene storicizzata (giornate e laboratori, anche più laboratori nello stesso giorno); la Prenotazione diventa un'entità con data, ora, costo del ticket e urgenza, perché lo stesso esame non può essere ripetuto nello stesso giorno dallo stesso paziente; il ruolo del medico viene storicizzato con DataInizio e DataFine.

## Nei corsi
- **Base di dati** (triennale): Fonti: `triennale/ANNO 3/base di dati/Progettazione_ER_gestione_tempo.pdf` (pp. 2-12; diagrammi solo come immagini); `triennale/ANNO 3/base di dati/Esempio_progettazione-concettuale.pdf` (pp. 82-129).

## Prerequisiti
- [[Modello Entità-Relazione]]: entità e relazioni da storicizzare
- [[Cardinalità nel modello ER]]: partecipazione (1,1) dell'entità storicizzata
- [[Identificatore ed entità debole]]: l'evento è un'entità debole identificata dal tempo

## Porta a
- Nessuno.

## Collegati
- [[Progettazione concettuale]]: la rappresentazione del tempo è un passo del raffinamento
- [[Dimensioni che variano nel tempo]]: lo stesso problema nel data warehouse
