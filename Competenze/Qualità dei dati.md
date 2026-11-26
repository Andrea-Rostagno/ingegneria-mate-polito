---
tipo: competenza
area: data-ml
corsi: [Data science tecnologie basi di dati, Prova finale, Business intelligence per big data, Data science lab]
livello: [magistrale, triennale]
aliases: ["data quality", "rumore", "noise", "outlier", "valori mancanti", "missing values", "dati duplicati"]
tags: [competenza, area/data-ml]
---

# Qualità dei dati

> Problemi dei dati reali (rumore, outlier, valori mancanti, duplicati, dati errati) e modi di rilevarli e trattarli prima dell'analisi.

## Definizione / enunciato
La scarsa qualità dei dati danneggia ogni elaborazione: un modello di classificazione per il rischio dei prestiti costruito su dati scadenti nega il credito a chi lo merita e lo concede a chi non lo restituirà. Le slide citano Redman: la scarsa qualità costa a un'azienda tipica almeno il 10% dei ricavi.

Problemi tipici:
- **Rumore**: modifica dei valori originali (voce distorta al telefono, "neve" sullo schermo);
- **Outlier**: oggetti con caratteristiche molto diverse dalla maggior parte degli altri. Possono essere rumore che disturba l'analisi, oppure l'obiettivo dell'analisi (frodi con carta di credito, intrusioni);
- **Valori mancanti**: informazione non raccolta o attributo non applicabile (reddito per un bambino). Si gestiscono eliminando oggetti o variabili, stimando i valori (es. serie di temperature) o ignorandoli nell'analisi;
- **Dati duplicati** o quasi duplicati, soprattutto unendo fonti eterogenee (es. "Street" e "St."). Il *data cleaning* tratta i duplicati;
- **Dati errati**.

## Formule chiave
Nessuna formula.

## Intuizione
Le domande guida delle slide sono tre: quali problemi, come rilevarli, cosa farne. Non tutto si corregge eliminando: un outlier può essere proprio ciò che si cerca, e non sempre i duplicati vanno rimossi.

## Come si usa
Si applica come primo passo del preprocessing: si sceglie per ogni attributo la strategia sui mancanti, si decide se gli outlier sono rumore o segnale, si deduplicano i record integrati da fonti diverse. Nel processo KDD corrisponde al data cleaning ("real world data is dirty").

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): sezione "Data quality" del mazzo di preprocessing; il tema "veracity" e la pulizia compaiono anche nell'introduzione. Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/10 - DSTBD_8-DMPreProc-IT.pdf` (pp. 20-25); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/01 - DSTBD_1-DSIntro.pdf` (pp. 18, 33).
- **Prova finale** (triennale): pulizia dei prezzi del DAX prima delle copule. Valori mancanti: righe eliminate (`dropna`, nessuna presente). Outlier: filtro interquartile, si scartano le righe con un valore fuori da $[Q_1-1.5\,IQR,\ Q_3+1.5\,IQR]$, $IQR=Q_3-Q_1$; circa 6000 righe eliminate (circa l'1% per colonna, per esempio 6270 per Open). Motivo: gli outlier distorcono media, deviazione standard e altre misure di dispersione. Lo script `Pulizia Dato.py` verifica anche esistenza del file, delimitatore (`csv.Sniffer`), intestazione, encoding, numeri con la virgola e formati di data. Fonti: `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/tesi_copule_DAX.pdf` (§4.2, p. 28; §5.3.1, pp. 61-66); `Thesis-on-Copulas-in-Finance-DAX-Index-Dependence-Modeling/Codici & Dataset/Pulizia Dato.py`.
- **Business intelligence per big data** (magistrale): sezione "Data Quality" del mazzo di preprocessing (rumore, outlier, valori mancanti, dati duplicati). Fonti: `magistrale/Business intelligence per big data/02-DMPreProc_BI.pdf` (pp. 20-25).
- **Data science lab** (magistrale): rumore, outlier, valori mancanti (eliminare, stimare, ignorare; riempire con valori fissi o medie; imputare con un modello predittivo) e duplicati, dallo stesso mazzo di teoria; il trattamento pratico è in [[Imputazione dei valori mancanti]] e gli outlier sono ripresi in [[Rilevamento di anomalie]]. Fonti: `magistrale/Data science lab/slide testo/2-DMPreProc.pdf` (p. 19-25).

## Prerequisiti
- [[Processo KDD]]: il preprocessing è un passo del KDD

## Porta a
- [[Rendimenti logaritmici]]: calcolati sui prezzi puliti (Prova finale)

## Collegati
- [[ETL]]: la pulitura corregge i dati sporchi
