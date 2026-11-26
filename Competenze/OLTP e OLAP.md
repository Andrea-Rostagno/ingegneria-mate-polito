---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["On Line Transaction Processing", "On Line Analytical Processing", "transaction processing", "analytical processing"]
tags: [competenza, area/informatica]
---

# OLTP e OLAP

> Le due modalità d'uso di una base di dati: elaborazione transazionale (OLTP) sui dati correnti ed elaborazione analitica (OLAP) sui dati storici per il supporto alle decisioni.

## Definizione / enunciato
- **OLTP (On Line Transaction Processing)**: uso tradizionale del DBMS. Fotografia dei valori *correnti*, dati dettagliati in rappresentazione relazionale, operazioni strutturate e ripetitive, accesso in lettura/scrittura a pochi record, transazioni brevi. Isolamento, affidabilità e integrità (ACID) sono critici. Dimensione tipica 100 MB-GB.
- **OLAP (On Line Analytical Processing)**: applicazioni di supporto alle decisioni. Dati *storici*, consolidati e integrati, applicazioni ad hoc, accesso in sola lettura a milioni di record, interrogazioni complesse; serve consistenza prima e dopo i caricamenti periodici. Dimensione tipica 100 GB-TB.

## Formule chiave
Nessuna formula nelle slide: il confronto è qualitativo (tabella delle caratteristiche sopra).

## Intuizione
Le due attività hanno carichi incompatibili: poche righe aggiornate molto spesso contro milioni di righe lette per aggregare. Per questo l'analisi si sposta su una base di dati separata, il data warehouse, e il carico analitico non rallenta quello transazionale.

## Come si usa
È il criterio con cui si motivano le scelte di tutta la prima parte del corso: architetture a più livelli che separano il carico transazionale da quello analitico, progettazione logica denormalizzata, indici bitmap e viste materializzate pensati per le letture. L'OLAP comprende anche le operazioni di analisi interattiva (roll-up, drill-down, slice and dice, pivot).

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): slide introduttive del corso (OLTP e OLAP a confronto, pp. 2-3) e introduzione al data warehouse (separazione tra elaborazione transazionale e analisi, pp. 7, 17, 25). Fonti: `magistrale/Data science tecnologie basi di dati/00 - Introduzione al corso/DSTBD_0-IntroductionCourse.pdf` (pp. 2-3); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/02 - DSTBD_2-DWintro-IT.pdf` (pp. 7, 17, 25).
- **Business intelligence per big data** (magistrale): motivazione dei dati separati per l'analisi nel mazzo introduttivo e definizione di OLAP nel mazzo sulle interrogazioni. Fonti: `magistrale/Business intelligence per big data/08-DWintro-ITA_BI.pdf` (p. 7); `magistrale/Business intelligence per big data/10-DWquery-ITA_BI.pdf` (pp. 7-8).

## Prerequisiti
- Nessuno.

## Porta a
- [[Data warehouse e data mart]]: il DW serve l'elaborazione analitica
- [[Operatori OLAP]]: analisi interattiva dei dati

## Collegati
- [[Proprietà ACID]]: requisito critico dell'OLTP
