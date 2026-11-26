---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["DFM", "fatto", "misura", "dimensione", "gerarchia", "attributo dimensionale", "schema di fatto", "modello multidimensionale", "cubo"]
tags: [competenza, area/informatica]
---

# Dimensional Fact Model

> Modello grafico di Golfarelli e Rizzi per la progettazione concettuale di un data mart: per ogni fatto descrive misure, dimensioni e gerarchie.

## Definizione / enunciato
Per il DW non c'è un formalismo accettato da tutti e il modello ER non è adatto. Il **DFM** definisce, per uno specifico fatto, uno **schema di fatto** con:
- **Fatto**: insieme di eventi di interesse (vendite, spedizioni, reclami) che evolve nel tempo.
- **Dimensione**: coordinata di analisi del fatto (ogni vendita è descritta da data, negozio e prodotto); ha molti attributi, tipicamente categorici.
- **Misura**: proprietà numerica del fatto, spesso aggregata (a ogni vendita è associato un incasso).
- **Gerarchia**: relazione di generalizzazione tra un sottoinsieme di attributi di una dimensione (gerarchia geografica del negozio). È una **dipendenza funzionale**, cioè una relazione 1:n.

Lo schema è anche documentazione di progetto, utile per rivedere i requisiti con gli utenti e a posteriori.

## Formule chiave
Una gerarchia è una catena di dipendenze funzionali, per esempio (schema VENDITA delle slide)
$$\text{negozio}\to\text{città del negozio}\to\text{regione}\to\text{stato},\qquad \text{data}\to\text{mese}\to\text{trimestre}\to\text{anno}.$$

## Intuizione
L'evento è il centro, le dimensioni sono gli assi del cubo e le gerarchie dicono come "salire" a livelli di dettaglio più bassi. La corrispondenza con l'ER (slide 14) mostra che lo schema di fatto è un'entità VENDITA collegata con relazioni (1,n) a una gerarchia di entità.

## Come si usa
Schema VENDITA delle slide: misure quantità venduta, incasso, numero clienti, prezzo unitario; dimensioni prodotto (tipo, categoria, reparto, marca, città della marca, gruppo di marketing), data (giorno, mese, trimestre, anno, settimana, vacanza), negozio (città, regione, stato, distretto di vendita, responsabile delle vendite). All'esame si parte dal testo dei requisiti: si cerca il fatto, le misure richieste, le coordinate di analisi e le dipendenze 1:n tra attributi.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): progettazione concettuale (Baralis, da Golfarelli-Rizzi). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 10-14); rappresentazione multidimensionale in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/02 - DSTBD_2-DWintro-IT.pdf` (pp. 9-10).
- **Business intelligence per big data** (magistrale): stesse slide su progettazione concettuale, costrutti di base e corrispondenza con l'ER. Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 10-14).

## Prerequisiti
- [[Metodologia di progettazione di un data warehouse]]: la progettazione concettuale usa il DFM

## Porta a
- [[Costrutti avanzati del DFM]]: estende fatti, dimensioni e gerarchie
- [[Additività delle misure]]: come si aggregano le misure lungo le gerarchie
- [[Dimensioni che variano nel tempo]]: gerarchie i cui valori cambiano
- [[Schema a stella]]: traduzione logica dello schema di fatto
- [[Formalismo testuale del DFM]]: notazione testuale dello schema di fatto
- [[Snowflake schema]]: le dipendenze delle gerarchie diventano tabelle

## Collegati
- Nessuno.
