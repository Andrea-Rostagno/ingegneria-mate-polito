---
tipo: competenza
area: data-ml
corsi: [Business intelligence per big data]
livello: [magistrale]
aliases: [time window, finestra temporale, finestra scorrevole, sliding window, finestre sovrapposte, overlapped window, finestre non sovrapposte, jumping window, window length, window shift, sotto-ciclo, sub-cycle]
tags: [competenza, area/data-ml]
---

# Finestra temporale

> Intervallo di tempo fisso in cui una serie (o un flusso di dati) viene elaborata per interrogazioni e mining: permette di calcolare feature locali invece che sull'intera serie.

## Definizione / enunciato
Una finestra temporale è definita da due parametri:
- **lunghezza** (window length): dimensione in unità di tempo di ogni finestra. Può essere *domain-driven* (parti del parlato, azioni di un braccio meccanico) o *data-driven* (finestre sulle caratteristiche stagionali del segnale);
- **spostamento** (window shift): posizione di una finestra rispetto alle contigue.
  - **non sovrapposte** (jumping): le finestre sono indipendenti e non condividono dati;
  - **sovrapposte** (sliding): due finestre consecutive condividono una parte dei dati.

## Formule chiave
Le slide non danno formule: la definizione è operativa (lunghezza e spostamento). Esempio grafico: tasso d'inflazione USA 1975-2001 diviso in finestre $t_1,\dots,t_9$ disgiunte oppure sovrapposte.

## Intuizione
Le statistiche sull'intera serie (es. tutto il ciclo di un robot) ne descrivono l'andamento globale; le finestre catturano invece l'andamento locale. Con l'approccio data-driven si usano finestre più lunghe dove la serie è stabile e più corte dove varia di più.

## Come si usa
Esempio delle slide: la corrente (Ampere) di un braccio robotico in un ciclo è divisa in sotto-cicli, ciascuno una finestra; da ogni sotto-ciclo si estraggono feature statistiche. In ambienti a degrado lento la previsione su un singolo ciclo ha orizzonte troppo corto: si aggregano le feature su una finestra di più cicli (time series aggregation), mantenendo il significato della serie e la trasparenza del processo.

## Nei corsi
- **Business intelligence per big data** (magistrale): Fonti: `magistrale/Business intelligence per big data/07-Time_series_Analysis_BI_2026.pdf` (pp. 29-37 finestre ed esempio del braccio robotico; pp. 45-46 aggregazione su finestre di cicli).

## Prerequisiti
- [[Serie storica]]: la finestra è una porzione della serie

## Porta a
- [[Feature engineering per serie storiche]]: le feature si calcolano per finestra

## Collegati
- [[Funzioni OLAP con finestra]]: stessa idea di finestra (fisica o logica) applicata alle righe di una query SQL
