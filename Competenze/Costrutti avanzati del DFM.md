---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["attributo descrittivo", "arco opzionale", "dimensione opzionale", "non-additività", "convergenza", "gerarchia condivisa", "arco multiplo", "attributo configurazione", "schema di fatto vuoto", "dimensione degenere"]
tags: [competenza, area/informatica]
---

# Costrutti avanzati del DFM

> Estensioni del Dimensional Fact Model per i casi che lo schema base non esprime: attributi descrittivi, archi opzionali e multipli, convergenze, gerarchie condivise, attributi configurazione e fatti vuoti.

## Definizione / enunciato
Costrutti nelle slide (schema VENDITA esteso e altri esempi):
- **Attributo descrittivo**: informazione su un attributo dimensionale che non si usa per aggregare (indirizzo e telefono del negozio).
- **Arco opzionale / dimensione opzionale**: l'associazione può mancare (es. dieta del prodotto; dimensione promozione con sconto, date, costo, pubblicità).
- **Non-additività**: misura che non si somma lungo una dimensione (segnata sull'arco; il prezzo unitario è aggregato con AVG).
- **Convergenza**: due percorsi della stessa gerarchia arrivano allo stesso attributo (negozio → città → regione → stato e negozio → distretto di vendita → stato).
- **Gerarchia condivisa**: la stessa gerarchia usata con ruoli diversi (CHIAMATA: numero chiamante e numero chiamato, ciascuno con distretto telefonico e uso).
- **Arco multiplo**: associazione molti-a-molti tra attributi (libro ↔ autore; ricovero ↔ diagnosi).
- **Attributo configurazione**: attributo categorico multivalore con pochi valori distinti (≤ 10), rappresentato enumerando i valori come attributi booleani Y/N (tipi di negozio di VIDEOGAME_SALES).
- **Schema di fatto vuoto**: evento senza misure, registra che l'evento è avvenuto (FREQUENZA a un corso, con COUNT); utile per contare eventi e rappresentare eventi non accaduti (insieme di copertura).
- **Dimensione degenere**: dimensione con un solo attributo (es. modalità di spedizione in LINEA ORDINE).

## Formule chiave
Nessuna formula: i costrutti si leggono sul disegno (slide 15, 22-25, 45).

## Intuizione
Ogni costrutto anticipa un problema di progettazione logica: l'arco multiplo richiede una bridge table o il push down, le dimensioni degeneri una junk dimension, la non-additività la scelta dell'operatore di aggregazione.

## Come si usa
Nel testo di un esercizio: "un vino può avere più certificazioni" o "un piatto è adatto a più diete" segnala un arco multiplo (o, con pochi valori noti a priori, un attributo configurazione); "attributo usato solo per visualizzazione" segnala un attributo descrittivo; due percorsi verso lo stesso livello segnalano una convergenza.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (p. 15 schema esteso, pp. 22-25 gerarchia condivisa, arco multiplo, attributo configurazione, fatto vuoto, p. 45 dimensioni degeneri).
- **Business intelligence per big data** (magistrale): stesse slide (costrutti avanzati, attributo configurazione, schemi di fatto vuoti). Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 15, 22-25).

## Prerequisiti
- [[Dimensional Fact Model]]: estende fatti, dimensioni e gerarchie

## Porta a
- [[Bridge table]]: traduzione degli archi multipli
- [[Junk dimension]]: dimensioni degeneri del DFM

## Collegati
- [[Formalismo testuale del DFM]]: notazione anche per i costrutti avanzati
