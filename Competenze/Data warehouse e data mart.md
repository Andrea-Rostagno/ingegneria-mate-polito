---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["data warehouse", "DW", "data mart", "business intelligence", "supporto alle decisioni", "decision support"]
tags: [competenza, area/informatica]
---

# Data warehouse e data mart

> Base di dati per il supporto alle decisioni, separata dalle basi operative, con dati orientati ai soggetti, integrati, storici e non volatili; il data mart ne è un sottoinsieme dipartimentale.

## Definizione / enunciato
**Data warehouse** (Inmon, 1992): base di dati per il supporto alle decisioni, mantenuta separatamente dalle basi di dati operative dell'azienda, con dati
- orientati ai soggetti di interesse;
- integrati e consistenti;
- dipendenti dal tempo, non volatili;

usati per il supporto alle decisioni aziendali.

**Warehouse aziendale**: informazioni su "tutta" l'azienda, con modellazione funzionale estesa e tempi lunghi di progettazione. **Data mart**: sottoinsieme dipartimentale focalizzato su un settore prefissato, alimentato dal data warehouse primario oppure direttamente dalle sorgenti; si realizza più in fretta ma va progettato con cura per evitare problemi di integrazione successivi.

Il contesto è la **business intelligence** (da *intus legere*): disciplina di supporto alla decisione strategica che trasforma i dati aziendali in informazioni fruibili a diversi livelli di dettaglio.

## Formule chiave
Stima di dimensione dalle slide (catena di supermercati): tempo $2\times365$ giorni, 300 negozi, 3.000 prodotti venduti ogni giorno in ogni negozio, quindi
$$730\times300\times3000 = 657\ \text{milioni di righe nella tabella dei fatti}\ (\approx 21\ \text{GB}).$$

## Intuizione
Perché tenerlo separato: (1) prestazioni, le ricerche complesse rallentano le transazioni operative e servono metodi di accesso diversi; (2) gestione dei dati, nel DW servono lo storico, il consolidamento e la correzione delle inconsistenze.

## Come si usa
I dati si rappresentano come un ipercubo: assi dimensionali (prodotto, negozio, tempo) e misure all'intersezione (quantità venduta, importo). In relazionale questo diventa il modello a stella. Sul DW si fanno analisi OLAP (aggregati complessi, media mobile, top ten), data mining, presentazione e ricerca di motivazioni (drill-down).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): introduzione al data warehouse (Baralis). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/02 - DSTBD_2-DWintro-IT.pdf` (pp. 2-7 definizione e separazione, pp. 9-15 rappresentazione multidimensionale e dimensione, p. 19 data mart).
- **Business intelligence per big data** (magistrale): stesso mazzo introduttivo in italiano (Baralis): supporto alle decisioni aziendali, business intelligence e ambiti applicativi, perché tenere i dati separati, rappresentazione multidimensionale e relazionale, dimensione del data warehouse, strumenti di analisi, data warehouse e data mart. Fonti: `magistrale/Business intelligence per big data/08-DWintro-ITA_BI.pdf` (pp. 2-15, 19).

## Prerequisiti
- [[OLTP e OLAP]]: il DW serve l'elaborazione analitica

## Porta a
- [[Architetture di data warehouse]]: come si organizzano DW e data mart
- [[Metodologia di progettazione di un data warehouse]]: progettare il DW

## Collegati
- Nessuno.
