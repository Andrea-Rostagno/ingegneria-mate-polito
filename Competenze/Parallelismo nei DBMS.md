---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["parallelismo inter-query", "parallelismo intra-query", "inter-query parallelism", "intra-query parallelism", "DBMS paralleli", "benchmark", "TPC", "TPC-C", "TPC-H"]
tags: [competenza, area/informatica]
---

# Parallelismo nei DBMS

> Il calcolo parallelo aumenta l'efficienza del DBMS: tra query diverse (inter-query, tipico dell'OLTP) o tra parti della stessa query (intra-query, tipico dell'OLAP); le prestazioni si misurano con benchmark standard TPC.

## Definizione / enunciato
Le query si parallelizzano bene. Esempi delle slide: scansione di una grande tabella eseguita in parallelo su porzioni diverse dei dati, frammentati su dischi diversi; group by su un grande insieme di dati partizionato su processori diversi, con fusione dei risultati. Soluzioni tecnologiche: sistemi multiprocessore, cluster di computer.
- **Parallelismo inter-query**: query diverse su processori diversi. Usato nei sistemi **OLTP**: carico di transazioni semplici e brevi ma numerose (100-1000 tps); bilanciamento del carico sul pool di unità di calcolo.
- **Parallelismo intra-query**: sottoparti della stessa query su processori diversi. Usato nei sistemi **OLAP**: query complesse ma poche; la query è divisa in sottoquery, ognuna su un sottoinsieme dei dati; group by e join sono facilmente parallelizzabili ed è possibile il pipelining delle operazioni.

**Benchmark**: descrivono le condizioni in cui si misurano le prestazioni; per i DBMS sono standardizzati dal **TPC** (Transaction Processing Council). Ogni benchmark definisce carico di transazioni (distribuzione degli arrivi), dimensione e contenuto della base di dati (generati casualmente), codice delle transazioni, tecniche di misura e certificazione.

## Formule chiave
Tipi di benchmark: **TPC-C** (order entry, simula un sistema OLTP; evoluzione TPC-E); **TPC-H** (supporto alle decisioni, OLAP, mix di query complesse; anche TPC-DI e TPC-DS); **TPCx-HS** (big data, valutazione di cluster Hadoop).

## Intuizione
OLTP e OLAP chiedono parallelismi diversi: molte richieste piccole si distribuiscono per richiesta, poche richieste enormi si spezzano dentro la richiesta.

## Come si usa
Domanda tipica: per un dato carico (molte transazioni brevi oppure query analitiche pesanti) scegliere il tipo di parallelismo. Le architetture parallele, a differenza di quelle distribuite, hanno come unico obiettivo le prestazioni.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Parallel DBMS" e "DBMS benchmarks". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/08 - 19-DistributedDatabases.pdf` (pp. 5, 70-76).

## Prerequisiti
- Nessuno.

## Porta a
- Nessuno.

## Collegati
- [[Architettura client-server]]: architetture distribuite e parallele
- [[Frammentazione dei dati]]: dati partizionati su più dischi e nodi
