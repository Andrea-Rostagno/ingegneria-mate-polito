---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["generalized association rules", "gerarchie di item", "regole multilivello", "regole pesate", "weighted association rules"]
tags: [competenza, area/data-ml]
---

# Regole di associazione generalizzate

> Estensioni delle regole di associazione che sfruttano tassonomie di item (regole a più livelli di astrazione) o pesi su item e transazioni.

## Definizione / enunciato
**Gerarchie e tassonomie.** Una **tassonomia** è un insieme di gerarchie is-a che aggregano gli item (istanze dettagliate) in concetti di livello più alto (**item generalizzati**), ad esempio gerarchie temporali, di categoria di prodotto, di luogo. Un **itemset generalizzato** contiene item a diversi livelli; **copre** una transazione se ogni suo item generalizzato è antenato di un item della transazione e ogni suo item non generalizzato è nella transazione. Il **supporto generalizzato** è il rapporto tra transazioni coperte e cardinalità del dataset. Una **regola generalizzata** $X\Rightarrow Y$ ha $X$ e $Y$ generalizzati o no; supporto, confidenza e lift si definiscono di conseguenza.

**Pesi.** Gli item possono avere importanza diversa nella transazione (quantità, prezzo) e le transazioni stesse possono essere pesate (sconto sull'intero carrello). Le **regole pesate** estendono le misure (supporto pesato, confidenza pesata) con funzioni di aggregazione dei pesi (min, max, media).

## Formule chiave
$$\sup(X)=\frac{\#\{\text{transazioni coperte da } X\}}{|T|}$$

## Intuizione
Generalizzare fa emergere informazioni che a livello di dettaglio sono troppo rare: si scambia precisione con supporto.

## Come si usa
Esempio delle slide: *user: John, time: 6.05 p.m., service: Weather* ha supporto 0.005% e verrebbe scartato; generalizzando in *user: employee, time: 6-7 p.m., service: Weather* il supporto sale a 0.2%. Caso dei pazienti diabetici (95K record, 3.5K pazienti): regole *high level* (Examination, Liver) $\Rightarrow$ (Examination, Kidney); *cross level* (Examination, Liver) $\Rightarrow$ (Examination, Uric acid) con confidenza 74.8%; *low level*, molto dettagliate e numerose, da esplorare con drill-down.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): parte finale del mazzo sulle regole di associazione ("Considering weight", "Considering hierarchies"). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/11 - DSTBD_9-DMassrules.pdf` (pp. 87-98 del PDF).
- **Business intelligence per big data** (magistrale): mazzo a parte "03b" con regole pesate, tassonomie, itemset generalizzati, analisi context-aware ed esempio su dati di pazienti con regole di alto livello, cross-level e di basso livello. Fonti: `magistrale/Business intelligence per big data/03b-DMassrules_BI.pdf` (pp. 1-13).
- **Data science lab** (magistrale): tassonomie (gerarchie is-a che aggregano gli item in concetti di livello più alto), itemset generalizzati e regole generalizzate fra livelli di astrazione, con supporto, confidenza e lift definiti di conseguenza. Fonti: `magistrale/Data science lab/slide testo/7-DMassrules.pdf` (p. 88-98).

## Prerequisiti
- [[Regola di associazione]]: estende item e transazioni
- [[Algoritmo Apriori]]: estrazione su itemset generalizzati

## Porta a
- Nessuno.

## Collegati
- Nessuno.
