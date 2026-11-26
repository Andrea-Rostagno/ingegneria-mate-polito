---
tipo: competenza
area: informatica
corsi: [Data science tecnologie basi di dati, Business intelligence per big data]
livello: [magistrale]
aliases: ["Extraction Transformation Loading", "alimentazione del data warehouse", "estrazione statica e incrementale", "pulitura dei dati", "data cleaning", "staging area"]
tags: [competenza, area/informatica]
---

# ETL

> Extraction, Transformation, Loading: il processo che prepara i dati delle sorgenti e li carica nel data warehouse, al primo popolamento e a ogni aggiornamento periodico.

## Definizione / enunciato
Fasi:
1. **Estrazione**: acquisizione dei dati dalle sorgenti. *Statica* (fotografia completa, al primo popolamento) o *incrementale* (solo gli aggiornamenti dall'ultima estrazione, immediata o ritardata). Dipende dalla natura dei dati operazionali: storicizzati (semplice), semi-storicizzati o transitori (complessa).
2. **Pulitura**: migliora correttezza e consistenza (duplicati, dati mancanti, uso non previsto di un campo, valori impossibili, inconsistenze tra valori associati).
3. **Trasformazione**: conversione dal formato operazionale a quello del DW (integrazione), in due passi: sorgenti → dati riconciliati nella staging area (conversioni, normalizzazioni, matching, filtraggio); dati riconciliati → DW (chiavi surrogate, valori aggregati).
4. **Caricamento**: propagazione degli aggiornamenti, in ordine *dimensioni → tabelle dei fatti → viste materializzate e indici*, in una finestra temporale limitata e con proprietà transazionali (affidabilità, atomicità).

## Formule chiave
Nessuna formula. Tecniche di estrazione incrementale: assistita dall'applicazione (modifica le applicazioni, serve per i legacy), uso del log (efficiente, non interferisce, formato proprietario), trigger (nessuna modifica ai programmi ma più carico), timestamp (modifica dello schema, può perdere stati intermedi dei dati transitori).

## Intuizione
L'ordine di caricamento segue i vincoli di integrità: una riga dei fatti richiede che esistano già le tuple delle dimensioni con le loro chiavi surrogate (tabelle di look-up).

## Come si usa
Esempio delle slide (vendite di vini, 4/4/2010 e 6/4/2010): la differenza incrementale tra due fotografie individua le tuple cancellate (D), aggiornate (U) e inserite (I). Pulitura con tecniche a dizionario (errori di battitura o formato), fusione approssimata (join approssimato, problema purge/merge dei duplicati) e individuazione di outlier; esempio di normalizzazione, standardizzazione e correzione di un indirizzo. La strategia migliore resta la prevenzione nel data entry OLTP.

## Nei corsi
- **Data science tecnologie basi di dati** (magistrale): Fonti: `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/02 - DSTBD_2-DWintro-IT.pdf` (pp. 21-22); `magistrale/Data science tecnologie basi di dati/Teoria/Parte I - Data warehouse e data mining/05 - DSTBD_5-DWprogFisAlim-IT.pdf` (pp. 16-31: estrazione pp. 17-22, pulitura pp. 23-27, trasformazione p. 28, caricamento pp. 29-31).
- **Business intelligence per big data** (magistrale): stesse slide "Strumenti ETL" e "Processo ETL". Fonti: `magistrale/Business intelligence per big data/08-DWintro-ITA_BI.pdf` (pp. 21-22).

## Prerequisiti
- [[Architetture di data warehouse]]: livello di alimentazione

## Porta a
- Nessuno.

## Collegati
- [[Qualità dei dati]]: la pulitura corregge i dati sporchi
- [[Refresh delle viste materializzate]]: dopo ogni caricamento le viste vanno aggiornate
