---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["window functions", "finestra di calcolo", "OVER", "PARTITION BY", "totali cumulativi", "medie mobili", "funzioni analitiche", "finestra fisica", "finestra logica", "ROWS", "RANGE", "raggruppamento fisico e logico"]
tags: [competenza, area/informatica]
---

# Funzioni OLAP con finestra

> Estensione SQL (clausola OVER/WINDOW) che calcola aggregati su una finestra di righe per ciascuna riga, senza collassarle: medie mobili, totali cumulativi, quote sul totale.

## Definizione / enunciato
La **finestra di calcolo** ha tre componenti:
- **partizionamento** (`PARTITION BY`): divide le righe in gruppi *senza collassarle* (diverso da GROUP BY); senza partizionamento c'è un solo gruppo;
- **ordinamento** (`ORDER BY`) delle righe dentro ogni partizione;
- **finestra di aggregazione**: il gruppo di righe su cui, per ogni riga, si calcola l'aggregato.

La finestra può essere:
- **fisica** (`ROWS`): conteggio di righe. `ROWS 2 PRECEDING`, `ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING`, `ROWS UNBOUNDED PRECEDING`. Adatta a dati senza interruzioni nella sequenza; ammette più chiavi di ordinamento.
- **logica** (`RANGE`): intervallo di valori attorno alla chiave di ordinamento, es. `RANGE 2 MONTH PRECEDING` o, in Oracle, `RANGE BETWEEN INTERVAL '2' DAY PRECEDING AND CURRENT ROW`. Adatta a dati "sparsi" (manca un mese); una sola chiave di ordinamento, numerica o data.

Se la finestra è incompleta il calcolo usa le righe presenti (oppure si può chiedere NULL). Le finestre si combinano con GROUP BY: la tabella temporanea prodotta dal raggruppamento diventa l'operando della finestra.

## Formule chiave
```sql
SELECT Città, Mese, Importo,
       AVG(Importo) OVER (PARTITION BY Città ORDER BY Mese
                          ROWS 2 PRECEDING) AS MediaMobile
FROM Vendite;
```
Varianti: `SUM(Importo) OVER (PARTITION BY Città ORDER BY Mese ROWS UNBOUNDED PRECEDING)` (totale cumulativo), `Importo/SUM(Importo) OVER ()` (quota sul totale), `AVG(SUM(Importo)) OVER (...) ... GROUP BY Città, Mese` (media mobile su totali mensili).

## Intuizione
L'ordinamento serve perché l'aggregato usa le righe in ordine; non vincola l'ordine dell'output, che si sceglie con l'ORDER BY finale.

## Come si usa
Dati delle slide: Milano, mesi 7-12, importi 110, 10, 90, 80, 40, 140; Torino 70, 30, 80, 100, 50, 150. Media mobile di Milano: 110, 60, 70, 60, 60, 90. Somma cumulativa di Milano: 110, 120, 210, 290, 330, 470. Totale per città 470 e 480, totale generale 950, quindi la prima riga ha quota 110/950 sul totale e 110/470 sulla città.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/04 - DSTBD_4-DWquery-IT.pdf` (pp. 26-58; risultati verificati sull'immagine di p. 35); versione Oracle in `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/08 - DSTBD_DW-Oracle.pdf` (pp. 3-8).
- **Business intelligence per big data** (magistrale): stesse slide (finestra di calcolo, intervallo fisico e logico, totali cumulativi, confronto tra dati dettagliati, group by e finestre) ed esempi Oracle di raggruppamento a livello fisico e logico. Fonti: `magistrale/Business intelligence per big data/10-DWquery-ITA_BI.pdf` (pp. 25-58); `magistrale/Business intelligence per big data/12-DW-Oracle.pdf` (pp. 2-8). Analogo sulle serie storiche: [[Finestra temporale]].

## Prerequisiti
- [[Operatori OLAP]]: analisi su dati ordinati
- [[Funzioni aggregate]]: gli aggregati di base, qui calcolati su una finestra di righe

## Porta a
- [[Funzioni di ranking]]: stessa clausola OVER

## Collegati
- [[ROLLUP e CUBE]]: estensioni SQL per l'analisi
