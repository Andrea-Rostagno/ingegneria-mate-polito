---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["star schema", "tabella dei fatti", "fact table", "tabella delle dimensioni", "dimension table", "chiave surrogata"]
tags: [competenza, area/informatica]
---

# Schema a stella

> Traduzione relazionale (ROLAP) di uno schema di fatto: una tabella dei fatti al centro e una tabella denormalizzata per ogni dimensione.

## Definizione / enunciato
La progettazione logica del DW usa il modello relazionale e riceve in input lo schema di fatto, il carico di lavoro, il volume dei dati e i vincoli di sistema; produce lo schema logico. A differenza della progettazione tradizionale accetta **ridondanza** e **denormalizzazione**.

**Schema a stella**:
- *Dimensioni*: una tabella per dimensione, con **chiave primaria surrogata** (generata artificialmente) e tutti gli attributi della dimensione. Le gerarchie non sono esplicite: gli attributi stanno tutti allo stesso livello, la rappresentazione è completamente denormalizzata e ridondante.
- *Fatti*: una tabella dei fatti per schema di fatto; la chiave primaria è la combinazione delle chiavi esterne delle dimensioni; le misure sono attributi.

## Formule chiave
Schema delle slide (VENDITE):
- Vendite(**ID_Mese, ID_Prodotti, ID_Negozi**, Quantità, Guadagno)
- Mese(ID_Mese, Mese, Anno)
- Prodotti(ID_Prodotti, Prodotto, Tipo, Categoria, Fornitore)
- Negozi(ID_Negozi, Negozio, Città, Stato, Rappresentante)

## Intuizione
Una query OLAP fa un join della tabella dei fatti con poche tabelle delle dimensioni e poi raggruppa: la stella minimizza il numero di join. La ridondanza nelle dimensioni pesa poco, perché quasi tutto lo spazio è occupato dalla tabella dei fatti.

## Come si usa
Dallo schema DFM: una tabella per ogni dimensione con tutti gli attributi della sua gerarchia, una tabella dei fatti con le chiavi esterne e le misure. Casi particolari: archi multipli → bridge table o push down; dimensioni degeneri → nella tabella dei fatti o junk dimension; dimensioni che variano → nuove tuple con nuova chiave surrogata. Le query del corso (ROLLUP, CUBE, finestre) usano tabelle di questo tipo, es. Vendite(Skey, Tkey, Pkey, Importo) con Tempo, Supermercato, Prodotto.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): progettazione logica (Baralis, da Golfarelli-Rizzi). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 35-37, confronto con snowflake p. 40); modello a stella introdotto in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/02 - DSTBD_2-DWintro-IT.pdf` (pp. 11-12).
- **Business intelligence per big data** (magistrale): introdotto come rappresentazione relazionale nel mazzo introduttivo e sviluppato nella progettazione logica (esempio con Categoria, confronto star o snowflake). Fonti: `magistrale/Business intelligence per big data/08-DWintro-ITA_BI.pdf` (pp. 11-12); `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 34-38, 41).

## Prerequisiti
- [[Dimensional Fact Model]]: traduzione logica dello schema di fatto

## Porta a
- [[Snowflake schema]]: normalizza le tabelle delle dimensioni
- [[Bridge table]]: tabella aggiuntiva nello schema a stella
- [[Junk dimension]]: raccoglie dimensioni degeneri in una tabella
- [[Operatori OLAP]]: le query OLAP lavorano sullo schema a stella
- [[Vista materializzata]]: viste aggregate sulla tabella dei fatti
- [[Progettazione fisica del data warehouse]]: strutture fisiche per le query a stella

## Collegati
- [[Dimensioni che variano nel tempo]]: versioni delle tuple dimensionali
- [[Bitmapped join index]]: join tra tabella dei fatti e dimensioni
- [[Anomalie di aggiornamento]]: la denormalizzazione accetta la ridondanza che la normalizzazione elimina
