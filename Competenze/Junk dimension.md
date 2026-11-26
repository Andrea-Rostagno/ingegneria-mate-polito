---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["dimensione spazzatura", "dimensioni degeneri", "degenerate dimension"]
tags: [competenza, area/informatica]
---

# Junk dimension

> Unica tabella dimensionale che raccoglie più dimensioni degeneri (dimensioni di un solo attributo) prive di dipendenze funzionali tra loro.

## Definizione / enunciato
Una **dimensione degenere** è una dimensione rappresentata da un solo attributo (nello schema LINEA ORDINE: modalità di spedizione, codice di ritorno, stato della linea). Soluzioni realizzative:
- **integrazione nella tabella dei fatti**, per attributi di dimensione (molto) contenuta;
- **junk dimension**: un'unica dimensione che integra più dimensioni degeneri. Tra i suoi attributi non esistono dipendenze funzionali, quindi sono possibili tutte le combinazioni di valori; è attuabile solo se i domini degli attributi hanno cardinalità limitata.

## Formule chiave
Schema delle slide: LineaOrdine(ID_Ordini, ID_Prodotti, **ID_MCS**, Quantità, Importo), **MCS(ID_MCS, Modalità Sped., Codice Ritorno, Stato Linea Ordine)**.


## Intuizione
Invece di aggiungere tre chiavi esterne quasi inutili alla tabella dei fatti se ne aggiunge una sola; il prezzo è una tabella che cresce come il prodotto dei domini, quindi va bene solo con pochi valori per attributo.
Passaggio nostro: poiché sono possibili tutte le combinazioni, $|MCS|\le|\text{Modalità}|\cdot|\text{Codice ritorno}|\cdot|\text{Stato}|$.

## Come si usa
In un esercizio: attributi come "dimensione dell'ordine (small, medium, large, extra-large)" o "tipo di confezione", che non hanno gerarchie, sono candidati a diventare attributi della tabella dei fatti o a confluire in una junk dimension.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 45-47).
- **Business intelligence per big data** (magistrale): stesse slide su dimensioni degeneri e junk dimension. Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 46-48).

## Prerequisiti
- [[Costrutti avanzati del DFM]]: dimensioni degeneri del DFM
- [[Schema a stella]]: raccoglie dimensioni degeneri in una tabella

## Porta a
- Nessuno.

## Collegati
- Nessuno.
