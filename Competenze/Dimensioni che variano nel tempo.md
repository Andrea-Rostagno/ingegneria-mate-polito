---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["slowly changing dimensions", "SCD", "rappresentazione del tempo", "storicizzazione delle dimensioni"]
tags: [competenza, area/informatica]
---

# Dimensioni che variano nel tempo

> Come rappresentare nel data warehouse le variazioni lente degli attributi delle dimensioni (slowly changing dimensions): sovrascrittura, nuova istanza, istanze con intervallo di validità.

## Definizione / enunciato
La variazione dei dati nel tempo è rappresentata esplicitamente dai fatti (dimensione temporale). Ma possono cambiare anche le dimensioni, di solito più lentamente: **slowly changing dimension** (Kimball), per esempio dati anagrafici di un cliente o descrizione di un prodotto. Il modello deve prevedere esplicitamente come trattarle. Le slide distinguono tre modalità:
- **Tipo I, fotografia dell'istante attuale**: si sovrascrive il dato con il valore attuale, proiettando nel passato la situazione corrente. Si usa quando la variazione non va rappresentata.
- **Tipo II, eventi attribuiti alla situazione corrispondente**: a ogni variazione si crea una nuova istanza della dimensione e i nuovi eventi si collegano a essa; gli eventi restano partizionati secondo gli stati della dimensione.
- **Tipo III, situazione campionata in un istante**: gestione esplicita delle variazioni modificando lo schema della dimensione con una coppia di timestamp (inizio e fine validità) e un attributo che identifica la sequenza di variazioni della stessa istanza (capostipite o *master*); ogni variazione crea una nuova istanza.

## Formule chiave
Nessuna formula. Schema della dimensione nel tipo III (slide): attributi originali + $(\text{inizio validità},\ \text{fine validità})$ + attributo *master*.

## Intuizione
Sono tre compromessi tra semplicità e fedeltà storica: il tipo I perde la storia, il tipo II la conserva ma non dice che le istanze sono la stessa entità, il tipo III permette di ricostruire tutte le variazioni.

## Come si usa
Esempio delle slide: il cliente Mario Rossi si sposa.
- Tipo I: tutti i suoi acquisti risultano del cliente "sposato".
- Tipo II: gli acquisti si dividono tra Mario Rossi "celibe" e la nuova istanza Mario Rossi "sposato".
- Tipo III: la prima istanza chiude la validità il giorno del matrimonio, la nuova la apre lo stesso giorno, gli acquisti si separano come nel tipo II e l'attributo master ricostruisce tutta la storia.

Nota: la numerazione segue le slide del corso; altri testi chiamano "tipo 3" una tecnica diversa.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 26-30).
- **Business intelligence per big data** (magistrale): stesse slide sulla rappresentazione del tempo, modalità tipo I, II e III. Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 26-30).

## Prerequisiti
- [[Dimensional Fact Model]]: gerarchie i cui valori cambiano

## Porta a
- Nessuno.

## Collegati
- [[Schema a stella]]: versioni delle tuple dimensionali
