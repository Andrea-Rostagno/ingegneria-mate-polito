---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["misure additive", "misure non additive", "misure non aggregabili", "misure di flusso", "misure di livello", "misure unitarie", "operatori distributivi", "operatori algebrici", "operatori olistici", "aggregazione delle misure"]
tags: [competenza, area/informatica]
---

# Additività delle misure

> Regole che dicono se e con quale operatore una misura si può aggregare risalendo una gerarchia: misure di flusso, di livello e unitarie; operatori distributivi, algebrici e olistici.

## Definizione / enunciato
**Aggregazione**: calcolo delle misure a granularità meno fine di quella dello schema di fatto, risalendo una gerarchia, con gli operatori standard SUM, MIN, MAX, AVG, COUNT. Una misura può essere *additiva*, *non additiva* (non aggregabile con la somma lungo una gerarchia) o *non aggregabile*.

**Classificazione delle misure**:
- **di flusso**: valutate cumulativamente a fine periodo, aggregabili con tutti gli operatori (quantità venduta, importo incassato);
- **di livello**: valutate in istanti (snapshot), non additive lungo il tempo (livello di inventario, saldo del conto);
- **unitarie**: valutate in istanti e in termini relativi, non additive lungo nessuna dimensione (prezzo unitario).

**Operatori di aggregazione**:
- **distributivi**: l'aggregato si calcola sempre da dati più dettagliati già aggregati (sum, min, max);
- **algebrici**: si può, purché si conservino misure di supporto (avg richiede count);
- **olistici**: non si può (moda, mediana).

## Formule chiave
Nessuna formula esplicita nelle slide: per la media servono "il valore della media nel gruppo e il numero di elementi per gruppo" (`04 - DSTBD_4-DWquery-IT.pdf` p. 73).

## Intuizione
L'esempio delle slide (p. 20, prezzi medi di pulizia casa nel 1999): la media per categoria calcolata come media delle medie per tipo (detersivo, sapone) dà 1,50, 1,76, 2,08, 2,09 nei quattro trimestri, mentre quella calcolata sui dati dei singoli prodotti dà 1,50, 1,84, 2,14, 2,38. I gruppi hanno numerosità diverse (e valori mancanti), quindi AVG non è distributivo.
Passaggio nostro: da gruppi $g$ con media $\bar x_g$ e numerosità $n_g$ si ricava $\bar x=\sum_g n_g\bar x_g/\sum_g n_g$, che è il motivo per cui conservare il conteggio rende AVG algebrico.

## Come si usa
Esempio delle slide (p. 18): vendite per prodotto e trimestre 1999-2000; sommando per tipo e categoria si ottengono i totali annui (pulizia casa 870 nel 1999 e 760 nel 2000; alimentari 1030 e 975), perché la quantità è una misura di flusso con operatore distributivo. In un esercizio si indica per ogni misura l'operatore lungo ogni dimensione e si segnalano le non-additività nello schema DFM.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/03 - DSTBD_3-DWprogConcLog-IT.pdf` (pp. 16-21); uso nel calcolo del cubo in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/04 - DSTBD_4-DWquery-IT.pdf` (p. 73).
- **Business intelligence per big data** (magistrale): stesse slide (aggregazione, classificazione delle misure, operatori di aggregazione distributivi, algebrici e olistici, esempio degli operatori non distributivi). Fonti: `magistrale/Business intelligence per big data/09-DWprogConcLog-ITA_BI.pdf` (pp. 16-21).

## Prerequisiti
- [[Dimensional Fact Model]]: come si aggregano le misure lungo le gerarchie

## Porta a
- [[Operatori OLAP]]: il roll-up aggrega con l'operatore corretto

## Collegati
- Nessuno.
