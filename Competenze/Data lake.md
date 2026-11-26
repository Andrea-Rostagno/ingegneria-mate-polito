---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["lago di dati", "schema on read", "data swamp"]
tags: [competenza, area/informatica]
---

# Data lake

> Archivio che conserva tutti i dati, grezzi e trasformati, in qualunque formato, dando loro uno schema solo al momento dell'analisi (schema-on-read).

## Definizione / enunciato
Repository per dati originali in formato grezzo e per dati trasformati usati in vari tipi di reportistica. Formati: strutturati (relazionali), semi-strutturati (CSV, JSON, XML), non strutturati (testi, email), binari (immagini, audio). L'interrogazione assomiglia più a una ricerca Google, con *data wrangling*.

Caratteristiche: conserva *tutti* i dati (anche quelli utili "un giorno"), gestisce tutti i tipi di dato, serve tutti gli utenti, si adatta ai cambiamenti, dà insight più rapidi, ma l'accesso anticipato ha un prezzo.

## Formule chiave
Nessuna formula. Confronto delle slide:

| | Data warehouse | Data lake |
|---|---|---|
| dati | relazionali, da sistemi transazionali | relazionali e non (IoT, web, social, app) |
| schema | progettato prima (schema-on-write) | scritto all'analisi (schema-on-read) |
| storage | costoso | economico |
| qualità | dati curati, "versione unica della verità" | dati grezzi, curati o no |
| utenti | business analyst | data scientist, data developer |
| analisi | BI, visualizzazione, report batch | full-text, machine learning, analisi predittiva, data discovery |

## Intuizione
Spesso non si conoscono a priori tutte le domande a cui i dati risponderanno, quindi è difficile salvarli in una forma "ottima"; il lake abbatte i silos informativi sfruttando storage massivo ed economico.

## Come si usa
Pro: più dati da più sorgenti in meno tempo, requisiti definiti solo quando servono, analisi self-service con poco intervento dell'IT. Contro: dati grezzi senza supervisione, servono governance, consistenza semantica e cataloghi; i dati sono co-locati ma non integrati; query "ribelli" possono bloccare i cluster. Rischio: il **data swamp**, repository enormi inaccessibili agli utenti; il consiglio delle slide è raccogliere meno dati, almeno all'inizio.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/07 - DSTBD_6-DataLakes-IT.pdf` (pp. 2-9).

## Prerequisiti
- Nessuno.

## Porta a
- Nessuno.

## Collegati
- [[Big data]]: archivio di dati grezzi ed eterogenei
- [[Architetture di data warehouse]]: architettura alternativa o complementare
