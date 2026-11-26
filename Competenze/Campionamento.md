---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["sampling", "campionamento casuale semplice", "campionamento stratificato", "con e senza reinserimento", "dimensione del campione", "aggregazione"]
tags: [competenza, area/data-ml]
---

# Campionamento

> Selezione di un sottoinsieme rappresentativo dei dati, usata per ridurre il costo dell'analisi senza perderne i risultati.

## Definizione / enunciato
Il **campionamento** è la tecnica principale di selezione dei dati, sia nell'esplorazione preliminare sia nell'analisi finale. Gli statistici campionano perché ottenere tutti i dati è troppo costoso; nel data mining si campiona perché *elaborarli* tutti è troppo costoso.

Principio chiave: un campione funziona quasi come l'intero dataset **se è rappresentativo**, cioè se ha approssimativamente le stesse proprietà di interesse dell'insieme originale.

Tipi:
- **Campionamento casuale semplice**: ogni elemento ha uguale probabilità di essere scelto; *senza reinserimento* (l'elemento scelto è rimosso dalla popolazione) o *con reinserimento* (lo stesso oggetto può essere scelto più volte);
- **Campionamento stratificato**: si partizionano i dati e si estrae un campione casuale da ogni partizione.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
Il campionamento è una forma di **riduzione dei dati**: riduce la cardinalità dell'insieme, mentre la feature selection riduce il numero di attributi e la discretizzazione la cardinalità del dominio di un attributo. Un campione troppo piccolo perde la struttura (esempio delle slide con 8000, 2000 e 500 punti).

## Come si usa
Si usa per lavorare su dataset troppo grandi e, nella classificazione, per costruire training e test set (holdout, partizionamento stratificato). Le slide trattano accanto anche l'**aggregazione** (combinare attributi o oggetti in uno solo, es. città in regioni): riduce i dati, cambia scala e dà dati più stabili (la precipitazione media annua in Australia varia meno di quella mensile).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezioni "Aggregation", "Data reduction" e "Sampling" del mazzo di preprocessing. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 27-35).
- **Business intelligence per big data** (magistrale): sezioni "Aggregation" (esempio delle precipitazioni in Australia), "Data reduction" e "Sampling" del mazzo di preprocessing. Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 28-35).
- **Data science lab** (magistrale): aggregazione, riduzione dei dati e campionamento (principio del campione rappresentativo, esempi 8000/2000 punti, casuale semplice con e senza reinserimento, stratificato) nello stesso mazzo di preprocessing. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 27-35).

## Prerequisiti
- Nessuno.

## Porta a
- [[Metodi di stima dell'accuratezza]]: partizione casuale in training e test
- [[Random forest]]: campioni bootstrap per ogni albero

## Collegati
- [[Riduzione della dimensionalità]]: riduzione dei dati per righe e per colonne
