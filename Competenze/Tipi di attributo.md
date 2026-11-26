---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Business intelligence per big data, Data science lab]
livello: [magistrale]
aliases: ["attribute types", "nominale", "ordinale", "intervallo", "rapporto", "attributi discreti e continui", "tipi di dataset"]
tags: [competenza, area/data-ml]
---

# Tipi di attributo

> Classificazione degli attributi (nominale, ordinale, intervallo, rapporto) in base alle operazioni sensate sui loro valori, e dei tipi di dataset.

## Definizione / enunciato
Un dataset è una collezione di **oggetti** (record, punti, istanze) descritti da **attributi** (variabili, campi, feature). Lo stesso attributo può avere valori diversi (altezza in piedi o metri) e attributi diversi possono avere lo stesso insieme di valori (ID ed età sono interi) ma proprietà diverse.

Il tipo dipende da quali proprietà possiede l'attributo: distinzione ($=,\neq$), ordine ($<,>$), addizione ($+,-$), moltiplicazione ($*,/$).
- **Nominale**: solo distinzione (ID, colore degli occhi, CAP);
- **Ordinale**: distinzione e ordine (ranking, voti, altezza in {alto, medio, basso});
- **Intervallo**: anche addizione (date di calendario);
- **Rapporto**: tutte e quattro (temperatura in Kelvin, lunghezza, tempo, conteggi).

Inoltre gli attributi sono **discreti** (insieme finito o numerabile di valori, es. CAP, conteggi; i binari sono un caso particolare) o **continui** (valori reali, rappresentati in virgola mobile).

## Formule chiave
Gerarchia delle proprietà: nominale $\subset$ ordinale $\subset$ intervallo $\subset$ rapporto (ogni tipo ha le proprietà del precedente più una; notazione nostra, la slide p. 7 lo dice a parole: distinzione, ordine, addizione, moltiplicazione).

## Intuizione
Le operazioni scelte devono essere "sensate" per il tipo: il tipo che si vede (numero o stringa) può nascondere proprietà o suggerirne di inesistenti. Un numero di matricola è un intero, ma farne la media non ha senso.

## Come si usa
**Tipi di dataset** nelle slide: *record* (tabelle, dati documentali come vettori di termini, dati transazionali come insiemi di item), *grafi* (web, molecole), *ordinati* (dati spaziali, temporali, sequenziali, sequenze genetiche). Esercizi delle slide: un numero ID è nominale, ordinale o di intervallo? Il numero di cilindri di un motore è nominale, ordinale o di rapporto?

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): prima parte del mazzo "Data preprocessing" (materiale da Tan, Steinbach, Kumar). Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 4-19).
- **Business intelligence per big data** (magistrale): stessa prima parte del mazzo "Data preprocessing" (tipi di attributo e tipi di dataset: tabellari, documenti, transazioni, grafi, dati ordinati). Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 3-19).
- **Data science lab** (magistrale): stesso mazzo di Baralis-Cerquitelli (tipi nominale, ordinale, intervallo, rapporto; discreti e continui; dataset record, transazionali, a grafo, ordinati, testo). Nel laboratorio la distinzione serve a scegliere la codifica: le nominali non vanno mappate su interi (one-hot), le ordinali sì (OrdinalEncoder con l'ordine esplicito). Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 3-18); `slide py/10-ScikitLearn-Preprocessing.pdf` (p. 5-8).

## Prerequisiti
- Nessuno.

## Porta a
- [[Discretizzazione]]: da continui a categorici
- [[Normalizzazione degli attributi]]: si applica agli attributi numerici
- [[Misure di distanza]]: la misura dipende dal tipo
- [[Misure di similarità]]: binari, documenti, vettori

## Collegati
- Nessuno.
