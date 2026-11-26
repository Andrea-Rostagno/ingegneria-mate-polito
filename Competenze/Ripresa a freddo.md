---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati]
livello: [magistrale]
aliases: ["cold restart", "ripristino a freddo", "guasto di dispositivo", "device failure", "media failure"]
tags: [competenza, area/informatica]
---

# Ripresa a freddo

> Procedura di ripristino dopo un guasto di dispositivo che danneggia (parte del) la base di dati su disco: si ripristina dall'ultimo dump, si rifà il log e si conclude con una ripresa a caldo.

## Definizione / enunciato
Un **guasto di dispositivo** (media failure) è causato dal guasto dei dispositivi che gestiscono la memoria secondaria: si perde il contenuto della base di dati su disco, ma non il log, che sta in memoria stabile. Si gestisce con la **ripresa a freddo**.

**Passi principali**:
1. accedere all'ultimo **dump** per ripristinare la parte danneggiata della base di dati su disco;
2. a partire dall'ultimo record di dump, leggere il log in avanti e **rifare** tutte le azioni sulla base di dati, inclusi i commit e i rollback delle transazioni;
3. eseguire una **ripresa a caldo**.

**Alternativa ai passi 2 e 3**: eseguire solo le azioni delle transazioni con commit. Richiede due letture del log: una per individuare le transazioni con commit e costruire la lista REDO, una per rifare le azioni delle transazioni nella lista REDO.

## Formule chiave
Nessuna formula nelle slide.

## Intuizione
Il dump riporta la base di dati a una fotografia vecchia; il log, che è sopravvissuto, contiene tutta la storia successiva. Rifacendo la storia si torna allo stato del momento del guasto, che è un normale "guasto di sistema" da trattare con la ripresa a caldo.

## Come si usa
Domanda tipica: confrontare ripresa a caldo e a freddo (tipo di guasto, cosa si perde, da dove si riparte: ultimo checkpoint contro ultimo dump). Si nota che la ripresa a freddo dipende in modo critico dalla memoria stabile: se si perde anche il log il guasto è catastrofico.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): "Types of failures", "Cold Restart". Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte II - Tecnologia DBMS e NoSQL/07 - 18-Recovery.pdf` (pp. 5, 28, 30, 51-53).

## Prerequisiti
- [[Checkpoint e dump]]: riparte dall'ultimo dump
- [[Ripresa a caldo]]: conclusa con una ripresa a caldo

## Porta a
- Nessuno.

## Collegati
- Nessuno.
